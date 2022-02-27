import i18nMessageCreate from "@/assets/js/i18nCreate"
const componentsMessages = i18nMessageCreate('components/lang/message', require.context('@/components/lang/message', true, /\.js$/))
export default componentsMessages
