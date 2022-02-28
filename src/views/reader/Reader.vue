<!-- Vue页面 Reader -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/20 -->
<!-- 页面描述 Reader -->

<template>
    <a-row>
        <a-col :span="16">
            <ck-player :option="playerOption"></ck-player>
        </a-col>
        <a-col :span="8">
        </a-col>
    </a-row>
</template>

<script>
import CkPlayer from "@/components/player/CkPlayer"
export default {
    components: {CkPlayer},
    props: {},
    data() {
        return {
            playerOption: {
                poster: 'static/video/cover.jpg', // 封面图片
                video: 'static/video/驻足在这星空下.mp4', // 视频地址
            }
        }
    },
    methods: {}
}
</script>

<style lang="less">

</style>

