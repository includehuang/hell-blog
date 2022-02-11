<!-- Vue页面 Home -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/1/30 -->
<!-- 页面描述 Home -->

<template>
    <div id="blog-app-home">
        <a-row :gutter="24">
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
                <div style="background: #42b983; height: 2000px"></div>
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
