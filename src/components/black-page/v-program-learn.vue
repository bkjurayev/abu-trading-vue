<template>
    <section class="m-5">
        <div class="anhor" id="program"></div>
        <div class="m-5-right-bg-image"></div>
        <div class="wrapper">
            <h2 class="section-title-2 wow fadeInUp">
                <div class="section-title-2-dots"> </div>
                <span>Treydingda mustaqil foyda qiling.</span>
            </h2>
            <div class="m-6-after-title">Bozorning eng ohirgi samarali strategiyalarini o'zlashtiring!</div>
            <h2 class="section-title wow fadeInUp">O'quv dasturi </h2>
            <div class="m-5-flex">
                <div class="m-5-right wow fadeInUp">
                    <div class="m-5-right-content-block" :class="isOpenBlock1 ? 'active' : ''"
                        @click="isOpenBlock1 = !isOpenBlock1" data-block="0">
                        <div class="m-5-right-content-block-box">
                            <div class="m-5-right-content-block-header-mobile">Blok 1</div>
                            <div class="m-5-right-content-block-wrap">
                                <div class="m-5-right-block-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div class="m-5-right-block-text">
                                    <ul>
                                        <li>Boshlang'ich blok</li>
                                        <li>Kriptobirjalar bilan tanishuv, treyder uchun muhim bo'lgan ilovalar va
                                            platformalar bo'yicha qo'llanma</li>
                                        <li>Taymfreymlar, analiz turlari - qisqa muddat, o'rta muddat va uzoq muddat
                                            uchun qanday strategiyalar qo'llaniladi </li>
                                        <li>Marketcap, FDV va tokenlar xarakteri va o'sish turlari </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-5-right-content-block" :class="isOpenBlock2 ? 'active' : ''"
                        @click="isOpenBlock2 = !isOpenBlock2" data-block="1">
                        <div class="m-5-right-content-block-box">
                            <div class="m-5-right-content-block-header-mobile">Blok 2</div>
                            <div class="m-5-right-content-block-wrap">
                                <div class="m-5-right-block-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div class="m-5-right-block-text">
                                    <ul>
                                        <li>Technical analysis</li>
                                        <li>Grafik bilan ishlash</li>
                                        <li>Indikatorlar bilan tanishuv</li>
                                        <li>Patternlar va fraktallar bo'yicha praktika</li>
                                        <li>Bozor strukturasi va high-low bo'yicha tushuncha</li>
                                        <li>TOTAL, (2), (3), va kriptosektorlar bilan tanishuv </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-5-right-content-block " :class="isOpenBlock3 ? 'active' : ''"
                        @click="isOpenBlock3 = !isOpenBlock3" data-block="2">
                        <div class="m-5-right-content-block-box">
                            <div class="m-5-right-content-block-header-mobile">Blok 3</div>
                            <div class="m-5-right-content-block-wrap">
                                <div class="m-5-right-block-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div class="m-5-right-block-text">
                                    <ul>
                                        <li>Smart Money </li>
                                        <li>Liquidity: </li>
                                        <li>Rendj sturkurasidagi likvidlik (BSL/SSL) </li>
                                        <li>Manipulyatsiya va likvidlik to'plangan joylarni aniqlash (LQ) </li>
                                        <li>Ichki va tashqi likvidliklar bilan to'g'ri ishlash uslubi </li>
                                        <li>Fibonachi: </li>
                                        <li>Premium va discounte zone Kirish nuqtasi va sotish uchun hadaflarni to'g'ri
                                            belgilash </li>
                                        <li>Trendlar, trend buzilishi, trend yolg'on buzilishi va trend liniyalardan
                                            to'g'ri qo'llanish </li>
                                        <li>Grafik va Indikatorlardagi divergency </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-5-right-content-block " :class="isOpenBlock4 ? 'active' : ''"
                        @click="isOpenBlock4 = !isOpenBlock4" data-block="3">
                        <div class="m-5-right-content-block-box">
                            <div class="m-5-right-content-block-header-mobile">Blok 4</div>
                            <div class="m-5-right-content-block-wrap">
                                <div class="m-5-right-block-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div class="m-5-right-block-text">
                                    <ul>
                                        <li>ICT </li>
                                        <li>Shamlar tilsimi </li>
                                        <li>Buqa shamlari va ayiq shamlarini aniqlash (bullish candles & bearish
                                            candles) </li>
                                        <li>Shamlarga ko'ra razvorotni aniqlash</li>
                                        <li>Haftalik taymfreymdagi shamlar bilan kun ichidagi shamlarni harakatini
                                            aniqlash</li>
                                        <li>Oylik va haftalik taymfreymlar yopilishi/ochilishida keyingi oy trendini
                                            aniqlash</li>
                                        <li>Uzun soyalar bilan ishlash va ularni tushunish</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-5-right-content-block " :class="isOpenBlock5 ? 'active' : ''"
                        @click="isOpenBlock5 = !isOpenBlock5" data-block="4">
                        <div class="m-5-right-content-block-box">
                            <div class="m-5-right-content-block-header-mobile">Blok 5</div>
                            <div class="m-5-right-content-block-wrap">
                                <div class="m-5-right-block-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div class="m-5-right-block-text">
                                    <ul>
                                        <li>Treyder</li>
                                        <li>Treydingda psihologiya muhimligi va qanday stressga tushmaslik </li>
                                        <li>R-M, M-M: Pullarni to'g'ri taqsimlash, riskni hisobga olish, portfelni
                                            tuzishdagi qoidalar, hold va swing-trading uchun pul ajratishdagi asoslar
                                        </li>
                                        <li>Kunlik va oylik PNL </li>
                                        <li>Kunlik natijani foydaga chiqarish</li>
                                        <li>Oylik natijani minusda yopmaslik uchun tajribadan kelib chiqqan qoidalar va
                                            ogohlantiruvlar</li>
                                    </ul>
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


let isOpenBlock1 = ref(false)
let isOpenBlock2 = ref(false)
let isOpenBlock3 = ref(false)
let isOpenBlock4 = ref(false)
let isOpenBlock5 = ref(false)

</script>

<style scoped lang="scss"></style>
