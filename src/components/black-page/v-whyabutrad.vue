<template>
    <section class="crecos">
        <div class="container">
            <div class="crecos__body">
                <div class="crecos__content">
                    <div class="anhor" id="reference"></div>
                    <h1 class="crecos__content__title _title-b" ref="whytitle"><span>Nega aynan</span><br> AbuTrading da
                        <br>
                        o'qishingiz
                        kerak?
                    </h1>
                    <div class="crecos__content__body">
                        <div class="crecos__content__body__item">
                            <h4 class="crecos__content__body__item__title">Tajriba har sohada muhim</h4>
                            <h6 class="crecos__content__body__item__subtitle">Kurs davomida noldan treydingni o'rganib,
                                ustoz bilan praktika qilish.</h6>
                        </div>
                        <div class="crecos__content__body__item">
                            <h4 class="crecos__content__body__item__title">Qadriyat</h4>
                            <h6 class="crecos__content__body__item__subtitle">Kurs muddati tugaganidan so'ng - jamoaga
                                qo'shamiz (cheklanmagan muddatga bepul ravishda xar-bir o'quvchi qo'shiladi).</h6>
                        </div>
                        <div class="crecos__content__body__item">
                            <h4 class="crecos__content__body__item__title">Shaxsiy qarash</h4>
                            <h6 class="crecos__content__body__item__subtitle">Jamoaga qo'shilgan o'quvchi Abu Juvayriya
                                ustoz bilan strimlarga qatnasha oladi, undan tashqari boshqa treyderlar tahlillari va
                                strategiyalarini kuzatishlari mumkin bo'ladi. </h6>
                        </div>
                        <div class="crecos__content__body__item">
                            <h4 class="crecos__content__body__item__title">Muhim</h4>
                            <h6 class="crecos__content__body__item__subtitle">Kurs sizga o'z strategiyangiz orqali
                                intizomlik savdo yo'lini tuzishingizni o'rgatadi.</h6>
                        </div>
                    </div>
                </div>
                <div class="crecos__image">
                    <div class="ct-code-block" id="cube">
                        <div class="home-services">
                            <div class="cube">
                                <div class="cube-face front">
                                    <div class="vm-cube-text">Natija</div>
                                </div>
                                <div class="cube-face back">
                                    <div class="vm-cube-text">Risk</div>
                                </div>
                                <div class="cube-face right">
                                    <div class="vm-cube-text">Strategiya</div>
                                </div>
                                <div class="cube-face left">
                                    <div class="vm-cube-text">Tajriba</div>
                                </div>
                                <div class="cube-face top">
                                    <div class="vm-cube-text">Emotsiya</div>
                                </div>
                                <div class="cube-face bottom">
                                    <div class="vm-cube-text">Community</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// add a media query.
// let mm = gsap.matchMedia();

let courceBlock
const whytitle = ref(null)

onMounted(() => {
    // GSAP
    courceBlock = gsap.context((self) => {
        gsap.from(whytitle.value, {
            scale: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: whytitle.value,
                start: 'top 1100px',
                scrub: 2,
                // markers: true,
            },
        });
    }, whytitle.value)
})
onUnmounted(() => {
    courceBlock.revert(); // <- Easy Cleanup!
});
</script>



<style scoped lang="scss">
.crecos {
    padding-bottom: 140px;

    &__content {
        &__title {
            color: #fff;

            span {
                background: -webkit-linear-gradient(left, #00f298, #07f7f7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                font-weight: 700;
                text-transform: uppercase;
            }
        }

        &__body {
            border-left: 1px solid #585858;

            &__item {
                margin-left: 8px;

                &::before {
                    left: -5px;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #baedf90d;

                    h4,
                    h6 {
                        color: #fff;
                    }
                }

                h4,
                h6 {
                    color: #a0a0a0;
                }
            }
        }
    }

    &__image {
        align-items: center;
    }
}
</style>
