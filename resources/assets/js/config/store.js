import {Store} from 'vuex'
import RandomString from 'randomstring'

const state = {
    search: {
        query: '',
        results: []
    },
    auth: {
        loggedIn: false,
        user: {
            email: '',
            name: ''
        },
        oauth: {
            token_type: 'Bearer',
            expires_in: 0,
            token: '',
            refresh_token: '',
        }
    },
    students: {items: []}
}

export const SEARCH_RESULT_RECEIVED = 'SEARCH_RESULT_RECEIVED'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const STUDENTS_LIST_RECEIVED = 'STUDENTS_LIST_RECEIVED'

export const DO_LOGOUT = 'DO_LOGOUT'
export const DO_LOGIN = 'DO_LOGIN'
export const DO_SEARCH = 'DO_SEARCH'
export const DO_LOAD_STUDENTS = 'DO_LOAD_STUDENTS'

const mutations = {
    [SEARCH_RESULT_RECEIVED](state, {query, results}) {
        state.search = {query, results}
    },
    [USER_LOGGED_OUT](state) {
        state.auth = {
            loggedIn: false,
            user: {
                email: '',
                name: ''
            },
            oauth: {
                token_type: 'Bearer',
                expires_in: 0,
                token: '',
                refresh_token: '',
            }
        }
    },
    [USER_LOGGED_IN](state, {email, name, oauth}) {
        state.auth = {loggedIn: true, user: {email, name, oauth},}
        axios.defaults.headers.common['Authorization'] = `Bearer ${oauth.token}`;
    },
    [STUDENTS_LIST_RECEIVED](state, {items}) {
        state.students.items = items
    }
}

const getters = {
    searchQuery({search}) {
        return search.query
    },
    searchResults({search}) {
        return search.results
    },
    authIsLoggedIn({auth}) {
        return auth.loggedIn
    },
    studentsList({students}) {
        return students.items
    }
}

const actions = {
    [DO_LOGOUT]({commit}) {
        commit(USER_LOGGED_OUT)
        localStorage.removeItem('user')
    },
    [DO_LOGIN]({commit}, {email, password}) {
        return axios.post('/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'vOKQp5B7c0I0Np8xxlbB5uJHMXbnJRYktDoOCgla',
            username: email,
            password: password,
            scope: '',
        })
            .then(res => {
                let user = {
                    name: 'NOUNI',
                    email: email,
                    oauth: {
                        token_type: res.data.token_type,
                        expires_in: res.data.expires_in,
                        token: res.data.access_token,
                        refresh_token: res.data.refresh_token,
                    }
                };
                commit(USER_LOGGED_IN, user);
                localStorage.setItem('user', JSON.stringify(user));
            });

    },
    [DO_SEARCH]({commit}, {query}) {
        commit(SEARCH_RESULT_RECEIVED, {query, results: []})
    },
    [DO_LOAD_STUDENTS]({commit}, {limit, page}) {
        return axios.get('/api/v1/students')
            .then(res => {
                commit(STUDENTS_LIST_RECEIVED, {items: res.data})
            })
    }
}

export default new Store({
    state,
    mutations,
    getters,
    actions,
})