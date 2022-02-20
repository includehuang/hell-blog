<template>
    <div id="h-carousel">
        <div class="swiper-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in images" :key="index">
                        <a :href="item.href || item.src || item" :target="item.target || '_self'">
                            <img class="swiper-img" :src="item.src || item" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle"
import "swiper/swiper-bundle.css"

export default {
    name: "HCarousel",
    props: {
        images: {
            type: Array,
            default: () => {
                return []
            }
        },
        option: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            default_option: {
                effect: 'coverflow',
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                slideToClickedSlide: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                coverflow: {
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                spaceBetween: 30,
            },
            swiper: null,
        }
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', Object.assign(this.default_option, this.option))
    },
    methods: {
    }
}
</script>

<style lang="less">
#h-carousel {
    width: 100%;
    .swiper-box {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        .swiper-container {
            text-align: center;
            z-index: 0;
            width: 70%;
            margin: 0 auto;
            padding-top: 10px;
            padding-bottom: 15px;
            .swiper-wrapper {
                .swiper-slide {
                    background-position: center;
                    background-size: cover;
                    width: 80%;
                    .swiper-img {
                        border-radius: 10px;
                        width: 100%;
                    }
                }
            }

        }
    }
    .swiper-slide-prev {
        //transform: translateX(60%) scale(80%) !important;
        * {
            pointer-events: none;
        }
    }
    .swiper-slide-active {
        z-index: 10 !important;
        //transform: translateX(0) scale(100%) !important;
    }
    .swiper-slide-next {
        //transform: translateX(-60%) scale(80%) !important;
        * {
            pointer-events: none;
        }
    }
}


</style>
