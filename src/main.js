import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import antd from 'ant-design-vue'
import dayjs from "dayjs"
import i18n from "@/lang/i18n"
import * as echarts from "echarts"
import axios from "axios"
import directive from "@/directive"

const app = createApp(App)
app.use(antd)
app.use(i18n)
app.use(store)
app.use(router)
app.use(directive)
app.config.globalProperties.$day = dayjs
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$axios = axios
app.mount('#app')
