<!-- Vue页面 Home -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/1/30 -->
<!-- 页面描述 Home -->

<template>
    <div id="blog-app-home">
        <a-row :gutter="24">
            <!-- Home页Header -->
            <a-col :span="24" class="home-header">
                <div class="home-header-content">
                    <div class="home-avatar">
                        <a-avatar :size="100" :src="avatar" alt=""/>
                    </div>
                    <div class="home-theme g-split">
                        <div class="home-welcome g-split-top">
                            {{ $t('common.theme') }}
                        </div>
                        <div class="home-element g-split-bottom">
                            {{ $t('common.theme') }}
                        </div>
                    </div>
                    <div class="home-extra g-split">
                        <div class="home-welcome g-split-top">
                            {{ nowTime }}
                        </div>
                        <div class="home-element g-split-bottom">
                            {{ $t(`common.timeMessage.${openTime}`) }}
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
        <a-row :gutter="24">
            <a-col :span="16">
                <!-- 进行中的项目 -->
                <a-card class="run-projects" :title="$t('runningProject')">
                    <template #extra>
                        <a href="#">{{ $t('allProject') }}</a>
                    </template>
                    <template v-for="item in projectList" :key="item.title">
                        <a-card-grid style="width: 25%;">
                            <a-card-meta>
                                <template #title>
                                    <a :href="item.href" v-title>{{ item.title }}</a>
                                </template>
                                <template #avatar>
                                    <a-avatar :src="item.avatar"/>
                                </template>
                                <template #description>
                                    <a-typography-paragraph
                                        :ellipsis="{ rows: 2, expandable: false}"
                                        :content="item.description"
                                        v-title
                                    />
                                </template>
                            </a-card-meta>
                        </a-card-grid>
                    </template>
                </a-card>
                <!-- 最近更新 -->
                <a-card class="recent-updates" style="margin-top: 24px;" :title="$t('recentUpdates')">
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
        <div class="home-footer"></div>
    </div>
</template>

<script>
import { EyeOutlined } from '@ant-design/icons-vue'
export default {
    components: {
        EyeOutlined,
    },
    data() {
        return {
            avatar: 'static/img/avatar.jpg',
            nowTime: this.$day().format('HH: mm: ss'),
            openTime: this.$day().format('HH'),
            projectList: [],
            recentUpdates: [],
        }
    },
    mounted() {
        // 获取进行中的项目（此处暂时由前端写死，更新时直接更新config）
        this.$axios.get('/static/config/projectList.json').then(res => {
            this.projectList = res.data
        })
        // 页面的时间显示，一秒一刷
        setInterval(() => {
            this.nowTime = this.$day().format('HH: mm: ss')
        }, 1000)
    }
}
</script>

<style lang="less">
#blog-app-home {
    .home-header {
        padding: 0 !important;
        height: 176px;
        background: #ffffff;
        margin-bottom: 24px;
        .home-header-content {
            height: 100%;
            padding: 0 12px;
            display: flex;
            align-items: center;
            .home-avatar {
                width: 120px;
                height: 120px;
                padding: 10px;
            }
            .home-theme {
                width: 480px;
                height: 140px;
                padding: 12px;
                text-align: left;
            }
            .home-extra {
                width: 600px;
                height: 140px;
                padding: 12px;
                text-align: right;
            }
            .home-welcome {
                color: @text-color;
                vertical-align: bottom;
                line-height: 87px;
                font-size: 16px;
            }
            .home-element {
                color: @text-color-secondary;
                vertical-align: top;
                line-height: 29px;
                font-size: 12px;
            }
        }
    }
    .run-projects {
        .ant-card-meta-title {
            a {
                color: @heading-color;
            }
        }
        .ant-card-meta-description {
            height: 44px;
        }
    }
}
</style>
