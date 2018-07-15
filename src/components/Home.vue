<template>
    <!-- Page Content -->
    <div class="homeBackground">
        <div class="container">
            <div id='MicrosoftTranslatorWidget' class='Light' translate="no" style='color:white;background-color:#555555;position: absolute;'></div>
            <div class="row">
                <div class="col"></div>
                <div class="col-10 text-center">
                    <div class="mainDiv">
                        <div class="top-pad button-pad">
                            <h4 class="mainTitle">Welcome to the new TNCountyClerk.com<br/>
                                Offering online payment and information lookup for your county clerk office.</h4>
                            <div class="row">
                                <div class="col"></div>
                                <div class="col-md mb-4">
                                    <span class="indexHeader">Please Select a County:</span>
                                    <br />
                                    <select v-model="selected" class="indexSelectBox form-control" name="countylist" v-on:change="updateValue">
                                        <option disabled value="" selected >Please choose a county</option>
                                        <option v-for="(item, key) in info" v-bind:value="key"> {{ item }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col"></div>
                            </div>
                            <div class="noMarginImage button-marg" style="font-weight: bold">OR</div>
                            <div class="row">
                                <div class="col"></div>
                                <div class="col-md">
                                    <span class="indexHeader">Renew Your License Plate</span>
                                    <br />
                                    <div class="input-group mb-3">
                                        <input name="plateNumber" type="text" autocomplete="off" class="indexSelectBox form-control" value="Please Enter Plate Number..." >
                                        <div class="input-group-append">
                                        <img src="@/assets/thumbnails/acid_rain_thumb.jpg" align="middle" style="position:relative;margin-left: 1rem; cursor:pointer;" onclick="document.expressRenew.submit()">
                                    </div>
                                    </div>
                                </div>
                                <div class="col"></div>
                            </div>
                            <div class="row">
                                <p id="margText" >Disclaimer: We,Business Information System (BIS), are a private (for profit) business that operates under contract with your local county government to provide various software solutions including but not limited to online services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>

<script>
    //import swal from 'sweetalert2'
    import axios from 'axios'
    import {mapGetters} from 'vuex'

    export default {
        name: 'home',
        data () {
            return {
                selected: '',
                info: null
            }
        },
        mounted () {
            axios.get(this.apiUrl + 'setup/index.php', {
                params: {
                    main: true
                }
            }).then(response => {
                (this.info = response.data)
            }).catch((e) => {
                console.log(e)
            })
        },
        methods: {
            updateValue(event) {
                console.log(this.selected)
                this.$store.state.stateID = this.selected
                this.$store.dispatch('updatedValue', this.selected)
                this.$router.push({
                    name: 'countyServiceList'
                })
            }
        },
        computed: {
            stateID () {
                return this.$store.store.stateID
            }
        }
    }

</script>
@import './style/main.scss';

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    .mainTitle{
        margin-bottom: 4rem
    }
    @media only screen and (max-width: 1000px) {
        h4{
            font-size: .75rem;
            font-weight: bold;
        }
        .mainTitle{
            margin-bottom: 1rem
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
