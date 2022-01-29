import { createStore } from "vuex"
import getters from "@/store/getters"

const moduleFiles = require.context('./modules', true, /\.js$/)
let modules = {}
modules = moduleFiles.keys().reduce((module, modulePath) => {
    const moduleName = modulePath.replace(/\.\/(.*)\.\w+$/, '$1')
    const value = moduleFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default createStore({
    state: () => {
        return {
            token: null,
            login: false,
            permission: ['default'],
        }
    },
    mutations: {
        token(state, value) {
            state.token = value
        },
        permission(state, value) {
            state.permission = value
        }
    },
    getters,
    modules,
})
