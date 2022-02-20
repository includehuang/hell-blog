<template>
    <a-layout class="blog-app-main" id="app">
        <a-layout-header>
            <div class="logo left">
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
            <div class="logo right">
                <img :src="logo" alt="">
            </div>
        </a-layout-header>
        <a-layout-content>
            <div class="main-wrapper">
                <router-view/>
            </div>
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
            this.selectMenu = [`/${to.path.split('/')[1]}`]
        },
    },
    mounted() {
        this.selectMenu = [`/${this.$route.path.split('/')[1]}`]
    },
    methods: {
        /**
         * 点击最上面导航切换路由
         * @param item
         */
        toPath(item) {
            if (this.selectMenu !== `/${this.$route.path.split('/')[1]}`) {
                this.$router.push({path: item.key})
            }
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
    min-width: @minWidth;
    min-height: @minHeight;
}
body {
    margin: 0;
    padding: 0;
    background-color: rgba(255, 255, 255, 0) !important;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.blog-app-main {
    .ant-layout-header {
        background: @headerColor;
        height: @headerHeight;
        z-index: 1;
        width: 100%;
        min-width: @minWidth;
        box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
        transition: background 0.3s ease 0s, width 0.2s ease 0s;
        .logo {
            display: inline-block;
            width: @headerHeight * @logoScale;
            height: @headerHeight;
            line-height: @headerHeight;
            text-align: center;
            img {
                width: @headerHeight * @logoScale * 0.8;
                height: @headerHeight * 0.8;
            }
        }
        .logo.left {
            left: 0;
        }
        .logo.right {
            right: 0;
        }
        .ant-menu {
            display: inline-flex;
            vertical-align: bottom;
            justify-content: center;
            width: calc(~"100% - @{headerHeight} * @{logoScale} * 2");
            background: @headerColor;
            line-height: @headerHeight;
            border-bottom: none;
            .ant-menu-item {
                span.ant-menu-title-content {
                    padding: 0 20px;
                }
            }
        }
    }
    .ant-layout-content {
        width: 100%;
        min-height: calc(~"100% - @{headerHeight}");

        .main-wrapper {
            width: @minWidth;
            margin: 0 auto;
            padding: 0 40px;
            background: inherit;
        }
    }
}
</style>
