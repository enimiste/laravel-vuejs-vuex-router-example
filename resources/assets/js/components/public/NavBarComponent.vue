<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" :to="{name:'home-public'}">School</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li v-if="authIsLoggedIn">
                        <router-link :to="{name: 'home'}">Dashboard <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="active">
                        <router-link to="/our-services">Our Services</router-link>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Our Products <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link to="/product-1">Product 1</router-link>
                            </li>
                            <li>
                                <router-link to="/product-2">Product 2</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right" >
                    <li class="dropdown" v-if="authIsLoggedIn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">NOUNI EL Bachir <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link :to="{name: 'my-profil'}">Profil</router-link>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li><a @click.prevent="logout()" class="clickable">Logout</a></li>
                        </ul>
                    </li>
                    <li v-else>
                        <router-link :to="{name: 'login'}">Login</router-link>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {USER_LOGGED_OUT, USER_LOGGED_IN, SEARCH_RESULT_RECEIVED, DO_LOGOUT} from '../../config/store'

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['authIsLoggedIn'])
        },
        methods: {
            logout() {
                this.$store.dispatch(DO_LOGOUT)
            }
        }
    }
</script>