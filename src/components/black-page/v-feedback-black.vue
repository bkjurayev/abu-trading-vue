<template>
    <section class="feedbacks">
        <div class="container">
            <div class="feedbacks__body">
                <div class="feedbacks__head">
                    <h1 class="feedbacks__title _title-b" ref="feedtitle">Talabalarimizning <span>so'ngi
                            sharhlari</span></h1>
                    <h5 class="feedbacks__subtitle _subtitle" ref="feedsubtitle">Jamoamiz bilan qo'yilgan maqsad uchun
                        yo'ldagi
                        har bir fikr va
                        taklif biz uchun muhim!</h5>
                </div>
                <!-- Swiper  -->
                <swiper :slides-per-view="1" :space-between="50"
                    :autoplay="{ delay: 2500, disableOnInteraction: false, }" :loop="true" :modules="modules">
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Assalomu aleykum. Kurs ajoyib o'tdi. Bu soha
                                bo'yicha hech qanaqa tushuncham yo'q edi ushbu kursdan juda ko'p ma'lumot oldim , oddiy
                                qilib tushincha berishti, buning uchun “Abu Trading” kursining АМБАССАДОРИ (asoschisi)ga
                                kattakon rahmat. Traderlik sohasi boyicha bir necha kurslarni korib chiqdm va “Abu
                                Trading” kursini tanladim va hecham afsuslanmayman .Traderlik sohasiga qiziqqan barcha
                                tanishlarimga “Abu Trading” kurslarini tavsiya qilmoqdaman , chunki halol va harom ga
                                juda ham etiborlik bn qarashadi . Bonusiga , kurs tugashi bn jamoaga qoshildik , bu
                                degani bizni yolg’iz qoldirishmadi!)
                            </p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar2.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Ассалому алайкум Устоз сизга трединг дарси
                                учун катта рахмат(самимийлигингиз
                                хушмуомилалигинигиз учун алохида
                                рахмат)узимга керакли булган билимга
                                ега булдим хатоларимни тугрилаб
                                оламан. берган пулимга розиман.янада
                                кучли кучли тредирларни
                                тарбиялашдан
                                чарчамангизлар. ишларингизга омад.</p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar3.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Ассаламу Алейкум биродар сиз берган илм билан
                                бизнииЛлаҳ жуда катда фойда олдим ва олиб келяппан ҳозир криптани ўзимга асосий иш
                                қивоганман уйда ётиб пул ишлаяппан илмизга Аллаҳ барака берсин аҳи ДжазайкаЛлоху хойрон
                            </p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar1.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Assalamu aleykum vo rohmatulloh Abu
                                djevayriya brodardan Alloh rozi bosn kurslari ota gozal bozori asl mohiyati orgatiladi
                                kursda bu kursi oliwimdan oldn 2ta kurs oqigan man lekn amaliyotga keganimda tuwunganman
                                faqat treydingi slovarini organganimi, Abu djuvayriya brodar kurslarida ozimizi capani
                                tilda onson hammaga tuwunarli bogan bozor orgatiladi i yana asosisi jamoa halol haromga
                                yaxwi qaridi
                            </p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar4.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Assalomu alaykum
                                Men Abu Djuvayriya akaning ohrigi ochilgan kursida oʻqib chiqdim ✔️

                                Kurs uyoqdan buyoqdan, gapni aylantirib, Qiyin soʻzlar bilan tushuntiradigan emas
                                Hamma tushunadigan Soddagina soʻzlar bilan oʻrgatildi.

                                Men kursni olgan pulimga roziman.
                                Agar kimdur tavsiya qilasizmi deganda
                                Ikkilanmay xa deb javob berar edim..
                            </p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar5.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-slide swiper-slide__feedback feedbacks__swipper">
                            <p class="swiper-slide__feedback__description">Ха курс мен учун жуда манфатлий болди.
                                Ростини айтсам Абу жувайрияни жамоасига кирмасдан олдин унча коп ажрата олмасдим халол
                                харом коинларни ABU TREYDING курсида бу нарсаларга котта етибор берилгани учун мен шу
                                гурухда колиб бирга даромад килишни танладим ва бошка мусулмон бродарларимгахам маслахат
                                берябман

                                „Халолдан келса бойлик охират болар чиройлик“
                            </p>
                            <div class="swiper-slide__feedback__bottom">
                                <div class="swiper-slide__feedback__bottom__right">
                                    <img src="../../assets/images/feedbacks/quote_icon.svg" alt="">
                                </div>
                                <div class="swiper-slide__feedback__bottom__left">
                                    <img src="../../assets/black-page/images/feedback/avatar6.jpg" alt="">
                                    <div class="swiper-slide__feedback__bottom__left__content">
                                        <h4>O'quvchimiz</h4>
                                        <p>Trader</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <img src="../../assets/images/feedbacks/cta_shape1.png" alt="" class="feedbacks__icon1">
                <img src="../../assets/images/feedbacks/cta_shape2.png" alt="" class="feedbacks__icon2">
            </div>
        </div>
    </section>
</template>



<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Swiper styles
import 'swiper/css';

// swipper array
const modules = [Autoplay]

gsap.registerPlugin(ScrollTrigger);

// let courceBlock
const feedtitle = ref(null)
const feedsubtitle = ref(null)

onMounted(() => {
    // GSAP
    gsap.to(feedtitle.value, {
        scale: 1.5,
        opacity: 0,
        scrollTrigger: {
            trigger: feedtitle.value,
            start: 'top 350',
            scrub: 2,
            // markers: true,
        },
    });
    gsap.to(feedsubtitle.value, {
        y: '130px',
        opacity: 0,
        scrollTrigger: {
            trigger: feedsubtitle.value,
            start: 'top 350',
            scrub: 1,
        },
    });
    // courceBlock = gsap.context((self) => {
    // }, feedtitle.value)
})
onUnmounted(() => {
    // courceBlock.revert(); // <- Easy Cleanup!
});
</script>
