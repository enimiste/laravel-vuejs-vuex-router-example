import VueRouter from 'vue-router'

const routes = [
    //Protected routes
    {
        path: '/_/',
        component: require('../components/ProtectedComponent.vue'),
        beforeEnter: (to, from, next) => {
            next()
        },
        children: [
            {
                path: '',
                name: 'home',
                component: require('../components/protected/HomeComponent.vue')
            },
            {
                path: 'students',
                component: require('../components/protected/StudentsComponent.vue'),
                children: [
                    {
                        path: '',
                        name: 'students',
                        component: require('../components/protected/inner/ListStudentsComponent.vue')
                    },
                    {
                        path: 'add',
                        name: 'students-add',
                        component: require('../components/protected/inner/AddStudentComponent.vue')
                    },
                ]
            },
            {
                path: 'search',
                name: 'search',
                component: require('../components/protected/SearchComponent.vue')
            },
            {
                path: 'profil',
                name: 'my-profil',
                component: require('../components/protected/ComingSoonComponent.vue')
            },
            //Not Found
            {
                path: '*',
                component: require('../components/protected/NotFoundComponent.vue')
            }
        ],
    },
    //Public Routes
    {
        path: '/',
        component: require('../components/PublicComponent.vue'),
        beforeEnter: (to, from, next) => {
            next()
        },
        children: [
            {
                path: '',
                name: 'home-public',
                component: require('../components/public/HomeComponent.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: require('../components/public/LoginComponent.vue')
            },
            //Not Found
            {
                path: '*',
                component: require('../components/public/NotFoundComponent.vue')
            }
        ]
    },

]

export default new VueRouter({
    mode: 'history',
    routes
})