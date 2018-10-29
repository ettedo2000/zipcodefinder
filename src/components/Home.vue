<template>
    <!-- Page Content -->
    <div class="container">
        <div class="mainDiv">
            <div class="row">
                <div class="col-12">
                    <h4 class="mainTitle">Welcome to ZipCode Finder<br/>
                    <span style="font-size: medium;font-style: italic">Select state and city to get zip codes for that region.</span></h4>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-md mb-4">
                    <span class="indexHeader">Please Select a County:</span>
                    <br />
                    <select v-model="selected" class="indexSelectBox form-control" name="countylist" v-on:change="updateValue();updatedLinks();">
                        <option disabled value="" selected >Please choose a county</option>
                        <option v-for="(item, key) in info" v-bind:value="item"> {{ item }}
                        </option>
                    </select>
                    <h1 v-if="selected != ''">{{ selected }}</h1>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-md mb-4" id="linkList" v-if="selected != ''">
                    <select v-model="selectcity" class="indexSelectBox form-control" name="citylist" v-on:change="updateCity();updateZipCodes()">
                        <option disabled value="" selected >Please choose a city</option>
                        <option v-for="(item, key) in links" v-bind:value="item.city+':'+item.st" v-if="item.state == selected">
                            {{ item.city }}
                        </option>
                    </select>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-md mb-4">
                <span v-if="selected != ''">{{ zipCodes }}</span>
                </div>
                <div class="col">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// import swal from 'sweetalert2'
import axios from 'axios'
// import {mapGetters} from 'vuex'

export default {
  name: 'home',
  api: 'http://gomashup.com/json.php?fds=geo/usa/zipcode/state/',
  data () {
    return {
      selected: '',
      selectcity: '',
      info:
        {
          'AL': 'Alabama',
          'AK': 'Alaska',
          'AZ': 'Arizona',
          'AR': 'Arkansas',
          'CA': 'California',
          'CO': 'Colorado',
          'CT': 'Connecticut',
          'DE': 'Delaware',
          'FL': 'Florida',
          'GA': 'Georgia',
          'HI': 'Hawaii',
          'ID': 'Idaho',
          'IL': 'Illinois',
          'IN': 'Indiana',
          'IA': 'Iowa',
          'KS': 'Kansas',
          'KY': 'Kentucky',
          'LA': 'Louisiana',
          'ME': 'Maine',
          'MD': 'Maryland',
          'MA': 'Massachusetts',
          'MI': 'Michigan',
          'MN': 'Minnesota',
          'MS': 'Mississippi',
          'MO': 'Missouri',
          'MT': 'Montana',
          'NE': 'Nebraska',
          'NV': 'Nevada',
          'NH': 'New Hampshire',
          'NJ': 'New Jersey',
          'NM': 'New Mexico',
          'NY': 'New York',
          'NC': 'North Carolina',
          'ND': 'North Dakota',
          'OH': 'Ohio',
          'OK': 'Oklahoma',
          'OR': 'Oregon',
          'PA': 'Pennsylvania',
          'RI': 'Rhode Island',
          'SC': 'South Carolina',
          'SD': 'South Dakota',
          'TN': 'Tennessee',
          'TX': 'Texas',
          'UT': 'Utah',
          'VT': 'Vermont',
          'VA': 'Virginia',
          'WA': 'Washington',
          'WV': 'West Virginia',
          'WI': 'Wisconsin',
          'WY': 'Wyoming'
        }
    }
  },
  mounted () {
    // axios.get(this.apiUrl + this.selected + '&jsoncallback=?', {
    //   params: {
    //     main: true
    //   }
    // }).then(response => {
    //   (this.info = response.data)
    // }).catch((e) => {
    //   console.log(e)
    // })
  },
  methods: {
    updateValue (event) {
      console.log(this.selected + '  state')
      this.$store.state.stateID = this.selected
      this.$store.dispatch('updatedValue', this.selected)
      // this.$router.push({
      //   name: 'countyServiceList'
      // })
    },
    updatedLinks () {
      this.$store.dispatch('updatedLinks')
    },
    updateCity () {
      console.log(this.selectcity + '  city and state')
      this.$store.state.zipCodeValue = this.selectcity
      this.$store.dispatch('updatedZipCodeValue', this.selectcity)
    },
    updateZipCodes () {
      this.$store.dispatch('updateZipCodes')
    }
  },
  computed: {
    stateID () {
      return this.$store.store.stateID
    },
    links () {
      console.log(this.$store.getters.getLink)
      return this.$store.getters.getLink
    },
    zipCodes  () {
      console.log(this.$store.getters.getzipCodes + ' ==== ')
      return this.$store.getters.getzipCodes
    }
  }
}

</script>
@import './style/main.scss';

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../style/main.scss';

    #contactLink {
        float: right;
        position: fixed;
        right: 0;
        top: 45%;
        z-index: 10;
    }
    #margText{
        padding: 4% 4% 0 4%;
    }
    @media only screen and (max-width: 1000px) {
        h4{
            font-size: .75rem;
            font-weight: bold;
        }
        .indexSelectBox{
            font-size: small;
        }
        .col-md{
            width: auto;
        }
        .input-group{
            margin-left: 5%;
        }
    }
</style>
