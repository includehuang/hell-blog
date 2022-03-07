<!-- Vue页面 Reader -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/20 -->
<!-- 页面描述 Reader -->

<template>
    <a-row>
        <a-col :span="16">
            <ck-player :option="playerOption"/>
            <h-typora :content="content"/>
        </a-col>
        <a-col :span="8">
            &#x0370;&#x0371;&#x0372;&#x0373;&#x0374;&#x0375;&#x0376;&#x0377;
            &#x0378;&#x0379;&#x037A;&#x037B;&#x037C;&#x037D;&#x037E;&#x037F;
        </a-col>
    </a-row>
</template>

<script>
import CkPlayer from "@/components/player/CkPlayer"
import HTypora from "@/components/dispaly/HTypora"
export default {
    components: {
        CkPlayer,
        HTypora,
    },
    props: {},
    data() {
        return {
            playerOption: {},
            content: '',
        }
    },
    mounted() {
        const id = Number(this.$route.query.id)
        // 获取博客内容预览
        this.$axios.get('/static/config/blogText.json').then(res => {
            // this.content = res.data[id - 1].content.typora.value
            this.playerOption = res.data[id - 1].content.playerOption
            this.$axios.get(res.data[id - 1].content.typora.value).then(res => {
                this.content = res.data
            })
        })
    },
    methods: {}
}
</script>

<style lang="less">
</style>

