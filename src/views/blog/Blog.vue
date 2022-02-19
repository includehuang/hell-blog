<!-- Vue页面 Blog -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/13 -->
<!-- 页面描述 Blog -->

<template>
    <div id="blog-app-blog">
        <a-row :gutter="24" style="height: 300px">
            <a-col :span="16">
                <h-carousel :images="imgList" style="width: 780px; height: 270px; margin: 0 auto"/>
            </a-col>
            <a-col :span="8">
                <div style="background: #722ed1; height: 300px;">
<!--                    -->
                </div>
            </a-col>
        </a-row>
        <a-row :gutter="24" style="margin-top: 24px;">
            <a-col :span="16">
                <!-- 最近更新 -->
                <a-card class="recent-updates" :title="$t('recentUpdates')">
                    <template #extra>
                        <a href="#">{{ $t('allArticle') }}</a>
                    </template>
                    <a-list item-layout="horizontal" :data-source="projectList">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <a-list-item-meta>
                                    <template #title>
                                        <a :href="item.href" v-title>{{ item.title }}</a>
                                    </template>
                                    <template #avatar>
                                        <a-avatar :src="item.avatar" />
                                    </template>
                                    <template #description>
                                        <a-typography-paragraph
                                            :ellipsis="{ rows: 2, expandable: false}"
                                            :content="item.description"
                                            v-title
                                        />
                                        <div style="display: flex">
                                            <span style="flex-grow: 1">2020-2-12 21:24:24</span>
                                            <span><eye-outlined /> 111</span>
                                        </div>
                                    </template>
                                </a-list-item-meta>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :title="$t('recommend')">
                    <a-list item-layout="horizontal" :data-source="projectList">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <a-list-item-meta>
                                    <template #title>
                                        <a :href="item.href" v-title>{{ item.title }}</a>
                                    </template>
                                    <template #avatar>
                                        <a-avatar :src="item.avatar" />
                                    </template>
                                </a-list-item-meta>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { EyeOutlined } from '@ant-design/icons-vue'
import HCarousel from "@/components/dispaly/HCarousel"
export default {
    components: {
        EyeOutlined,
        HCarousel,
    },
    data() {
        return {
            imgList: [
                {src: '/static/config/blogCarousel/白鹭归庭.png', href: 'https://www.bilibili.com/video/BV1io4y1X7HU', target: "_blank"},
                {src: '/static/config/blogCarousel/神女劈观.png', href: 'https://www.bilibili.com/video/BV1kS4y1T7kK', target: "_blank"},
                {src: '/static/config/blogCarousel/真夏飞焰.png', href: 'https://www.bilibili.com/video/BV1Ro4y1S7f1', target: "_blank"},
            ],
            projectList: [],
        }
    },
    mounted() {
        // 获取轮播列表（此处暂时由前端写死，更新时直接更新config）
        this.$axios.get('/static/config/blogCarousel.json').then(res => {
            this.imgList = res.data
        })
        // 获取进行中的项目（此处暂时由前端写死，更新时直接更新config）
        this.$axios.get('/static/config/projectList.json').then(res => {
            this.projectList = res.data
        })
    }
}
</script>

<style lang="less">

</style>
