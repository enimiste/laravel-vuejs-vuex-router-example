<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-md-3">
                                List Students Component
                            </div>
                            <div class="col-md-9">
                                <router-link :to="{name: 'students-add'}" class="btn btn-success pull-right"><i
                                        class="glyphicon glyphicon-plus-sign"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="panel-body">
                        <div class="responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Name</td>
                                    <td>Age</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in studentsList">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.age}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {DO_LOAD_STUDENTS} from '../../../config/store'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['studentsList'])
        },
        mounted() {
            this.$store.dispatch(DO_LOAD_STUDENTS, {limit: 10, page: 1})
        }
    }
</script>
