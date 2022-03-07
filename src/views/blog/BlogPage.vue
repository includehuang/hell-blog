<!-- Vue页面 blogPage -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/20 -->
<!-- 页面描述 blogPage -->

<!--suppress HtmlUnknownAttribute -->
<template>
    <div id="blog-app-blog">
        <a-row style="height: 360px">
            <a-col :span="16">
                <h-carousel v-if="imgList.length" :images="imgList" style="width: 780px; height: 320px; margin: 20px auto 20px"/>
            </a-col>
            <a-col :span="8" class="search-box">
                <a-calendar :fullscreen="false"/>
            </a-col>
        </a-row>
        <a-row :gutter="16" style="margin-top: 24px;">
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
        <router-view></router-view>
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
            imgList: [],
            projectList: [],
        }
    },
    mounted() {
        // 获取轮播列表（此处暂时由前端写死，更新时直接更新config）
        this.$axios.get('/static/config/blogCarousel.json').then(res => {
            this.imgList = res.data
        })
        // 获取进行中的项目（此处暂时由前端写死，更新时直接更新config）
        this.$axios.get('/static/config/blogText.json').then(res => {
            this.projectList = res.data
        })
    },
}
</script>

<style lang="less" scoped>
#blog-app-blog {
    .search-box {
        padding: 20px;
    }
}
</style>
