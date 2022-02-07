<template>
    <a-layout class="blog-app-main" id="app">
        <a-layout-header>
            <div class="logo">
                <img :src="logo" alt="">
            </div>
            <a-menu
                v-model:selectedKeys="selectMenu"
                theme="light"
                mode="horizontal"
                @click="toPath"
            >
                <a-menu-item v-for="item in routes.slice(1)" :key="item.path">
                    {{ $t(`menus.${item.name}`) }}
                </a-menu-item>
            </a-menu>
            <div class="logo">
                <img :src="logo" alt="">
            </div>
        </a-layout-header>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script>
import { routes } from "@/router"
import logo from "@/assets/img/image2vector.svg"

export default {
    data() {
        return {
            routes,
            logo,
            selectMenu: [],
            menus: [],
        }
    },
    computed: {
    },
    watch: {
        $route(to) {
            this.selectMenu = [to.path]
        },
    },
    mounted() {
        this.selectMenu = [this.$route.path]
    },
    methods: {
        /**
         * 点击最上面导航切换路由
         * @param item
         */
        toPath(item) {
            this.$router.push({path: item.key})
        }
    },
}
</script>

<style lang="less">
@minWidth: 1280px;
@minHeight: 720px;
@headerHeight: 80px;
@logoScale: 9/5;
* {
    box-sizing: border-box;
}
html {
    margin: 0;
    padding: 0;
    height: 100%;
    min-width: @minWidth;
    min-height: @minHeight;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0) !important;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}
.blog-app-main {
    .ant-layout-header {
        background: @headerColor;
        height: @headerHeight;
        position: fixed;
        z-index: 1;
        width: 100%;
        display: flex;
        .logo {
            display: inline-block;
            width: @headerHeight * @logoScale;
            height: @headerHeight;
            line-height: @headerHeight;
            flex: 0 0 @headerHeight * @logoScale;
            img {
                width: @headerHeight * @logoScale * 0.8;
                height: @headerHeight * 0.8;
            }
        }
        .ant-menu {
            background: @headerColor;
            line-height: @headerHeight;
            flex: 1 1 auto;
            .ant-menu-item {
                span.ant-menu-title-content {
                    padding: 0 20px;
                }
            }
        }
    }
    .ant-layout-content {
        padding: 0 50px;
        margin-top: @headerHeight;
        min-height: calc(~"100% - 80px");
    }
}
</style>
