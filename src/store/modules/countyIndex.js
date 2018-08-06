import axios from 'axios/index'

export const countyIndex = {
  state: {
    stateID: 0,
    stateList: [], /* set default value for State List */
    countyList: [],
    link: []
  },
  getters: {
    stateID: state => {
      return state.stateID
    },
    getListing: state => {
      return state.stateList
    }, /* get the value that is set by default State List */
    getCountyList: state => {
      return state.countyList
    },
    getLink: state => {
      return state.link
    }
  },
  mutations: {
    updateStateListing: (state, post) => {
      state.stateList = post
    }, /* this communicates with the the action to get array list of State List */
    updateCountyList: (state, payload) => {
      state.countyList = payload
    },
    updatedValue: (state, payload) => {
      state.stateID = payload
    },
    updatedLinks: (state, payload) => {
      state.link = payload
    }
  },
  actions: {
    /* this calls values from php and send it to mutator for output */
    updateStateList ({commit}) {
      axios.get(apiUrl + '/setup/index.php', {
        params: {
          main: true
        }
      }).then(response => {
        console.log(response)
        commit('updateStateListing', response.data)
      }).catch((e) => {
        console.log(e)
      })
    },
    /* get name and address information from county */
    countyInformation ({commit}, payload) {
      axios.get(apiUrl + '/setup/index.php', {
        params: {
          countyInformation: true,
          countylist: this.state.stateID
        }
      }).then(response => {
        console.log(response)
        commit('updateCountyList', response.data)
      }).catch((e) => {
        console.log(e)
      })
    },
    /* updated county ID when changed */
    updatedValue ({commit}, payload) {
      commit('updatedValue', payload)
    },
    /* get all service Links from county */
    updatedLinks ({commit}, payload) {
      axios.get(apiUrl + 'setup/index.php', {
        params: {
          countySelected: this.state.stateID
        }
      })
        .then(response => {
          commit('updatedLinks', response.data)
        }).catch((e) => {
          console.log(e)
        })
    }
  }
}
