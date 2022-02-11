import { createI18n } from "vue-i18n"
// 所有的国际化文件
const messageList = require.context('./message', true, /\.js$/)
// 语言列表
const langList = {}
// 文件路径
const filePath = messageList.keys().map(item => item.substring(2, item.length - 3))
// 最终结果
const messages = {}
// 遍历文件，获取所有语言和对应文件信息
filePath.forEach(item => {
    // paths[0]是一级列表，语言种类，paths[1]是具体文件名
    const paths = item.split('/')
    if (langList[paths[0]]) {
        langList[paths[0]].push(paths[1])
    }else {
        langList[paths[0]] = []
        langList[paths[0]].push(paths[1])
    }
})
// 组装最终结果
for (const key in langList) {
    if (langList[key].length) {
        messages[key] = buildMessage(key, langList[key])
    }
}
// 组装方法
function buildMessage(path, list) {
    let res = {}
    list.forEach(item => {
        const text = require(`./message/${path}/${item}`)
        res = {...res, ...text.default}
    })
    return res
}
// 导出i18n
export default createI18n({
    locale: 'zh-cn', // set locale
    fallbackLocale: 'zh-cn', // set fallback locale
    messages, // set locale messages
})
