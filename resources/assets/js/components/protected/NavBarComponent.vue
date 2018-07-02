<template>
    <nav class="navbar navbar-inverse">
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
                <router-link class="navbar-brand" :to="{name:'home'}">[School]</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <router-link :to="{name: 'home'}">Dashboard <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Students <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link :to="{name: 'students'}">List Students</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'students-add'}">Add New Student</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{name: 'home-public'}">Site</router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
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
                </ul>

                <div class="navbar-form navbar-right">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search" v-model="query">
                    </div>
                    <button type="submit" class="btn btn-default" @click.prevent="search()">Search</button>
                </div>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {USER_LOGGED_OUT, USER_LOGGED_IN, SEARCH_RESULT_RECEIVED, DO_LOGOUT, DO_SEARCH} from '../../config/store'

    export default {
        data() {
            return {
                query: ''
            }
        },
        computed: {
            ...mapGetters(['authIsLoggedIn'])
        },
        methods: {
            search() {
                if (this.query.length > 0) {
                    this.$store.dispatch(DO_SEARCH, {query: this.query})
                        .then(() => {
                            this.$router.push({name: 'search'})
                        })
                }
            },
            logout() {
                this.$store.dispatch(DO_LOGOUT)
                    .then(() => {
                        this.$router.push({name: 'login'})
                    })
            }
        }
    }
</script>