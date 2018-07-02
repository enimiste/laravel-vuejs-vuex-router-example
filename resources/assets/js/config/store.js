import {Store} from 'vuex'
import RandomString from 'randomstring'

const state = {
    search: {query: '', results: []},
    auth: {loggedIn: false, user: {email: '', name: ''}, token: ''},
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
        state.auth = {loggedIn: false, user: {email: '', name: '', token: ''},}
    },
    [USER_LOGGED_IN](state, {email, name, token}) {
        state.auth = {loggedIn: true, user: {email, name, token},}
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
    },
    [DO_LOGIN]({commit}, {email, password}) {
        let token = RandomString.generate(50);
        commit(USER_LOGGED_IN, {name: 'NOUNI', email: email, token: token})
        Vue.$http.defaults.headers.common['Authorisation'] = `Bearer ${token}`;
    },
    [DO_SEARCH]({commit}, {query}) {
        commit(SEARCH_RESULT_RECEIVED, {query, results: []})
    },
    [DO_LOAD_STUDENTS]({commit}, {limit, page}) {
        Vue.$http.get('/api/v1/students')
            .then(res => {
                commit(STUDENTS_LIST_RECEIVED, {items: res.data.data})
            })
    }
}

export default new Store({
    state,
    mutations,
    getters,
    actions,
})