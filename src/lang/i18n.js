import { createI18n } from "vue-i18n"
import i18nMessageCreate from "@/assets/js/i18nCreate"
import componentsMessages from "@/components/lang/i18n"
const messages = i18nMessageCreate('lang/message', require.context('@/lang/message', true, /\.js$/))
Object.assign(messages, componentsMessages)
export default createI18n({
    locale: 'zh-cn', // set locale
    fallbackLocale: 'zh-cn', // set fallback locale
    messages, // set locale messages
})
