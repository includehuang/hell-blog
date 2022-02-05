<template>
    <a-layout class="blog-app-main" id="app">
        <a-layout-header>
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
        </a-layout-header>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script>
import { routes } from "@/router"

export default {
    data() {
        return {
            routes,
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
@headerHeight: 80px;
* {
    box-sizing: border-box;
}

html {
    margin: 0;
    padding: 0;
    height: 100%;
    min-width: 1280px;
    min-height: 720px;
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
        .ant-menu {
            background: @headerColor;
            line-height: @headerHeight;
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
