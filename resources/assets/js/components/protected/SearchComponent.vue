<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Search Component</div>

                    <div class="panel-body">
                        <p>Query : {{searchQuery}}</p>
                        <p>Results count : {{searchResults.length}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['searchQuery', 'searchResults'])
        },
        mounted() {
        }
    }
</script>
