<template>
    <div>
        <navbar/>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from './public/NavBarComponent.vue'

    export default {
        components: {
            navbar: Navbar
        },
        mounted() {
        }
    }
</script>