<!-- Vue页面 HTypora -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/3/2 -->
<!-- 页面描述 HTypora -->

<template>
    <div :class="className" class='h-typora-wrapper typora-export os-windows'>
        <div class='typora-export-content'>
            <div id='write' class='' v-html="content"></div>
        </div>
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
}
</script>

<!--suppress CssUnknownTarget -->
<style lang="less" scoped>
@import "~@/assets/style/typora.css";
@import "~@/assets/style/typoraFont.css";
.h-typora-wrapper {
    width: 100%;
    background: #ffffff;
    font-size: @font-size-base;
}
</style>
