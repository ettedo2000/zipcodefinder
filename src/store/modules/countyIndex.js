import axios from 'axios/index'
var apiUrl = window.location.hostname === 'localhost' ? 'http://www.test3.bisonline.com/~odette.simons/vueProjects/zipcodefinder/static/' : 'static/'

export const countyIndex = {
  state: {
    stateID: 0,
    stateList: [], /* set default value for State List */
    countyList: [],
    link: [],
    zipCodeValue: '',
    zipCodes: []
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
    },
    zipCodeValue: state => {
      return state.zipCodeValue
    },
    getzipCodes: state => {
      return state.zipCodes
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
    },
    updatedZipCodeValue: (state, payload) => {
      state.zipCodeValue = payload
    },
    updateZipCodes: (state, payload) => {
      state.zipCodes = payload
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
      console.log(this.state.stateID + '  store state')
      axios.get('static/city.json', {
        // params: {
        //   countySelected: this.state.stateID
        // }
      })
        .then(response => {
          commit('updatedLinks', response.data)
        }).catch((e) => {
          console.log(e)
        })
    },
    updatedZipCodeValue ({commit}, payload) {
      commit('updatedZipCodeValue', payload)
    },
    updateZipCodes ({commit}, payload) {
      console.log(this.state.zipCodeValue + '  store state and city')
      console.log(this.state.zipCodeValue.split(':'))
      let zipValue = this.state.zipCodeValue.split(':')
      axios.get(apiUrl + 'getZipcode.php', {
        params: {
          zipCode: true,
          city: zipValue[0],
          state: zipValue[1]
        }
      }).then(response => {
        console.log(response)
        commit('updateZipCodes', response.data)
      }).catch((e) => {
        console.log(e)
      })

      // axios.get('https://www.zipcodeapi.com/rest/HtrFuIlesbl1A81SQzUmWteR2ow6LOr27opX2BsvuXVT7EvaVoCnho4ca8xeCaN9/city-zips.json/' + zipValue[0] + '/' + zipValue[1])
      // .then(response => {
      //         console.log(response.data + '  json responds')
      //         commit('updateZipCodes', response.data)
      //       }).catch((e) => {
      //         console.log(e)
      //       })
    }
  }
}
