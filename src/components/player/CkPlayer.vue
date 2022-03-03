<!-- Vue页面 CKPlays -->
<!-- 创建人 Hell Vision -->
<!-- 创建时间 2022/2/27 -->
<!-- 页面描述 CKPlays -->

<!--suppress SpellCheckingInspection -->
<template>
    <div :id="option.container ? option.container.substring(1) : defaultOption.container.substring(1)"
         :class="this.className" class="ckplayer"
         :style="playerStyle"/>
</template>

<script>
export default {
    props: {
        /**
         * 容器类名
         */
        className: {
            type: String,
            default: ''
        },
        /**
         * 播放器样式
         */
        playerStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        /**
         * 选项设置
         */
        option: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            player: null,
            defaultOption: {
                container: '#ckplayer', // 视频容器的ID
                poster: 'static/ckplayer/video/poster.png', // 封面图片地址
                video: 'static/ckplayer/video/lc.mp4', // 视频地址
                volume: 0.5, // 默认音量，范围0-1
                autoplay: false, // 是否自动播放
                loop: false, // 是否需要循环播放
                live: false, // 是否是直播
                ad: null, // 广告
                backLive: false, // 显示返回直播按钮
                seek: 0, // 默认需要跳转的秒数
                next: null, // 下一集按钮动作
                loaded: '', // 加载播放器后调用的函数
                plug: '', // 使用插件，目前支持hls.js:用于在pc端播放m3u8，flv.js:播放flv，mpegts.js：播放ts
                duration: 0, // 如果强制使用点播，而视频里不存在总时间，可以手动指定
                preview: null, // 预览图片对象
                prompt: null, // 提示点功能
                crossOrigin: '', // 发送跨域信息，示例：Anonymous
                type: '', // 视频类型
                playbackrate: 1, // 默认倍速
                ended: null, // 结束显示的内容
                webFull: false, // 是否启用页面全屏按钮，默认不启用
                theatre: null, // 是否启用剧场模式按钮，默认不启用
                controls: false, // 是否显示自带控制栏
                rightBar: null, // 是否开启右边控制栏
                smallWindows: null, // 是否启用小窗口模式
                screenshot: false, // 截图功能是否开启
                timeScheduleAdjust: 1, // 是否可调节播放进度,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
                logo: '', // logo
                menu: null, // 右键菜单
                information: {},
                track: null, // 字幕
                title: '', // 视频标题
                language: '', // 语言包文件
                barHideTime: 1500, // 控制栏隐藏时间
                playbackrateOpen: true, // 是否开启控制栏倍速选项
                playbackrateList: [0.75, 1, 1.25, 1.5, 2, 4]// 倍速配置值
            },
        }
    },
    computed: {
        aboutInformation() {
            const information = {}
            information[this.$t('ckPlayer.Load')] = `{loadTime} second`
            information[this.$t('ckPlayer.Duration')] = `{duration} second`
            information[this.$t('ckPlayer.Size')] = `{videoWidth}x{videoHeight}`
            information[this.$t('ckPlayer.Volume')] = `{volume}%`
            information[this.$t('ckPlayer.AudioDecoded')] = `{audioDecodedByteCount} Byte`
            information[this.$t('ckPlayer.VideoDecoded')] = `{videoDecodedByteCount} Byte`
            return information
        }
    },
    mounted() {
        // this.$set(this.defaultOption, 'information', this.aboutInformation)
        this.defaultOption.information = this.aboutInformation
        this.setVideo()
    },
    watch: {
        /**
         * 传入参数方式改变时重新渲染
         */
        option(val) {
            this.player = new this.$ckPlayer(Object.assign(this.defaultOption, val))
        }
    },
    methods: {
        /**
         * 设置播放器
         */
        setVideo() {
            this.player = new this.$ckPlayer(Object.assign(this.defaultOption, this.option))
        }
    }
}
</script>

<style lang="less" scoped>
.ckplayer {
    width: 100%;
    max-width: 800px;
    height: 500px;
}
</style>
