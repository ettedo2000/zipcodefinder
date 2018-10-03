<template>
    <!-- Page Content -->
    <div class="container">
        <span style="margin-top: 250px">test</span>
    </div>
</template>

<script>
    //import swal from 'sweetalert2'
    import axios from 'axios'
    //import {mapGetters} from 'vuex'

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
import './style/main.scss';

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
