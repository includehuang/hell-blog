<!-- Vue页面 HTypora -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/3/2 -->
<!-- 页面描述 HTypora -->

<template>
    <div :class="className" class='h-typora-wrapper'>
        <iframe class="typora-write-wrapper" ref="wrapper" name="typora-write-wrapper" @load="setIframeHeight"></iframe>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: '',
        },
        className: {
            type: String,
            default: '',
        },
    },
    watch: {
        content() {
            this.setIframe()
        }
    },
    mounted() {
        this.setIframe()
    },
    methods: {
        setIframe() {
            const iframe = this.$refs.wrapper.contentWindow
            iframe.document.open()
            iframe.document.write('<!DOCTYPE html>\n' +
                '<html lang="">\n' +
                '<head>\n' +
                '    <meta charset="utf-8">\n' +
                '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
                '    <link type="text/css" rel="stylesheet" href="static/css/typora.css">\n' +
                '    <link type="text/css" rel="stylesheet" href="static/css/typoraFont.css">\n' +
                '    <title>阅读</title>\n' +
                '</head>\n')
            iframe.document.write(this.content)
            iframe.document.write('\n' +
                '</html>')
            iframe.document.close()
        },
        setIframeHeight() {
            const iframe = this.$refs.wrapper.contentWindow
            // noinspection JSValidateTypes
            this.$refs.wrapper.height = iframe.document.documentElement.offsetHeight
        }
    }
}
</script>
<style lang="less" scoped>
.h-typora-wrapper {
    width: 100%;
    background: #ffffff;
    font-size: @font-size-base;
    .typora-write-wrapper {
        width: 100%;
        border: none;
    }
}
</style>
