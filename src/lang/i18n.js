import { createI18n } from "vue-i18n"
import i18nMessageCreate from "@/assets/js/i18nCreate"
import componentsMessages from "@/components/lang/i18n"
const baseMessages = i18nMessageCreate('lang/message', require.context('@/lang/message', true, /\.js$/))
const messageList = []
const langList = {}
messageList.push(baseMessages)
messageList.push(componentsMessages)
function i18nMap(key, value) {
    if (langList[key]) {
        langList[key] = {...langList[key], ...value}
    }else {
        langList[key] = value
    }
}
messageList.forEach(item => {
    for (const key in item) {
        i18nMap(key, item[key])
    }
})
export default createI18n({
    locale: 'zh-cn', // set locale
    fallbackLocale: 'zh-cn', // set fallback locale
    messages: langList, // set locale messages
})
