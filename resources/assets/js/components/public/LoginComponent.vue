<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Connexion</div>

                    <div class="panel-body">
                        <div class="alert alert-danger" role="alert" v-for="err in errors" v-show="errors.length > 0">{{err}}</div>
                        <div>
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" v-model="email"/>
                                <span class="help-block">stevie.okon@example.org</span>
                            </div>
                            <div class="form-group">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password"/>
                                <span class="help-block">secret</span>
                            </div>
                            <button class="btn btn-success" @click.prevent="login()">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {USER_LOGGED_IN, DO_LOGIN} from '../../config/store'

    export default {
        data() {
            return {
                email: 'stevie.okon@example.org',
                password: 'secret',
                errors: []
            }
        },
        methods: {
            login() {
                this.$store.dispatch(DO_LOGIN, {email: this.email, password: this.password})
                    .then(() => {
                        this.$router.push({name: 'home'})
                    })
            }
        },
        mounted() {
        }
    }
</script>
