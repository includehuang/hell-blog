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
                <div class="run-projects">
                    <a-card title="进行中的项目">
                        <template #extra>
                            <a href="#">全部项目</a>
                        </template>
                        <a-card-grid style="width: 25%; text-align: center">个人空间</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">个人博客</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">祎果小说站</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">H5低代码</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">Vue3学习</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">React学习</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">Node学习</a-card-grid>
                        <a-card-grid style="width: 25%; text-align: center">游戏人生</a-card-grid>
                    </a-card>
                </div>
                <!-- 最近更新 -->
                <div class="update-blog" style="margin-top: 24px;">
                    <a-card title="最近更新">
                        <template #extra>
                            <a href="#">全部文章</a>
                        </template>
                        <a-list item-layout="horizontal" :data-source="dataList">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <a-list-item-meta
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    >
                                        <template #title>
                                            <a href="https://www.antdv.com/">{{ item.title }}</a>
                                        </template>
                                        <template #avatar>
                                            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        </template>
                                    </a-list-item-meta>
                                </a-list-item>
                            </template>
                        </a-list>
                    </a-card>
                </div>
            </a-col>
            <a-col :span="8">
                <div style="background: #0be881; height: 2000px"></div>
            </a-col>
        </a-row>
        <div class="home-footer"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            avatar: 'static/img/avatar.jpg',
            nowTime: this.$day().format('HH: mm: ss'),
            openTime: this.$day().format('HH'),
            dataList: [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                },
            ],
        }
    },
    mounted() {
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
}
</style>
