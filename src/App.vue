<!--suppress CssUnusedSymbol -->
<template>
    <a-layout class="blog-app-main" id="app">
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.blog-app-main {
    .ant-layout-header {
        background: @CLEAR_CHILL;
        height: 80px;
    }
}
</style>
