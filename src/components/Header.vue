<template>
    <!-- Navigation -->
    <div class="row">
        <b-navbar toggleable="md" type="light">
            <div class="col-1"></div>
            <div class="col-10">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand href="" id="navbar-brand">
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <ul class="navbar-nav navbar-nav-media">
                        <b-nav-item-dropdown text="Motor Vehicle">
                            <b-dropdown-item><router-link to="/countyIndex/countyServiceList">Page 1</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/Page2">Page 2</router-link></b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-2</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-3</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Licenses">
                            <b-dropdown-item href="#">Page 1-1</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-2</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-3</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Taxes">
                            <b-dropdown-item href="#">Page 1-1</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-2</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-3</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Forms">
                            <b-dropdown-item href="#">Page 1-1</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-2</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-3</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Other">
                            <b-dropdown-item href="#">Page 1-1</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-2</b-dropdown-item>
                            <b-dropdown-item href="#">Page 1-3</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <li class="dropdown">
                            <button type="button" href="#" class="btn button1">Renewal Status </button>

                        </li>
                    </ul>
                </b-collapse>
            </div>
            <div class="col-1"></div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style>
    li{
        color: #1e7e34;
    }
</style>
