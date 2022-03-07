<!-- Vue页面 Blog -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/13 -->
<!-- 页面描述 Blog -->

<template>
    <a-page-header
        v-if="showReturn"
        :title="title"
        :sub-title="subTitle"
        @back="returnHandle"
    />
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            showReturn: false,
            title: 'Title',
            subTitle: '',
        }
    },
    watch: {
        $route(val) {
            this.showReturn = val.path !== '/blog/index'
            this.title = this.$t('common.return.temp', [this.$t('menus.BlogPage')])
        },
    },
    mounted() {
        this.showReturn = this.$route.path !== '/blog/index'
        this.title = this.$t('common.return.temp', [this.$t('menus.BlogPage')])
    },
    methods: {
        returnHandle() {
            this.$router.push({path: '/blog/index'})
            this.showReturn = this.$route.path !== '/blog/index'
        }
    }
}
</script>
