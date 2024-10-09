<template>
  <div class="home">
    <VHeader />

    <VMobileHeader />
    <div class="page-container">
      <div class="payment">
        <div class="container">
          <div class="payment__body">
            <img
              src="../assets/images/payments/bg.png"
              alt=""
              class="payment__img"
            />
            <div class="payment__content">
              <div class="payment__content__top">
                <div class="payment__content__top__left">
                  <h1 class="payment__content__top__left__title">
                    Kurs uchun to'lovni quyidagi
                    <strong>rekvizitlar</strong>
                    orqali amalga oshirishingiz mumkin!
                  </h1>
                </div>
                <div class="payment__content__top__right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="130"
                    height="59"
                    viewBox="0 0 130 59"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M59.4075 9.38067C60.9133 8.59969 62.4664 7.91338 64.0577 7.32572C70.6813 4.90761 77.7584 3.98723 84.7802 4.63077C91.802 5.27431 98.5939 7.46577 104.668 11.0476C109.063 13.5117 113.12 16.5352 116.737 20.0425C120.302 23.5754 123.429 27.5232 126.053 31.8013C126.165 31.973 126.206 32.1822 126.166 32.3836C126.125 32.5849 126.007 32.7623 125.837 32.8772C125.752 32.9329 125.657 32.9713 125.557 32.9901C125.458 33.0089 125.355 33.0077 125.256 32.9867C125.157 32.9656 125.063 32.9251 124.979 32.8675C124.896 32.8099 124.824 32.7363 124.77 32.651C121.963 28.6745 118.736 25.012 115.144 21.727C111.602 18.4236 107.687 15.5454 103.478 13.1508C97.7091 9.79388 91.2693 7.75465 84.6199 7.17931C77.9706 6.60397 71.2762 7.50677 65.0168 9.82299C63.8559 10.2626 62.7358 10.7374 61.6492 11.2765C63.3197 12.8002 64.8667 14.454 66.2756 16.2224C74.934 27.2375 77.1671 41.6044 67.4667 52.5331C61.5601 59.2648 54.3321 59.5253 48.7287 56.2084C45.8482 54.3473 43.4826 51.791 41.85 48.7752C40.2173 45.7594 39.3702 42.3811 39.3866 38.9517C39.2849 27.31 46.5027 16.7664 57.3788 10.4768C50.2221 4.90721 41.3501 2.00186 32.2852 2.25928C25.5436 2.54938 19.0498 4.88388 13.6666 8.95263C9.92057 11.8283 6.68106 15.3093 4.08167 19.2521C2.8841 20.9161 1.79506 22.6556 0.821316 24.4598C0.79332 24.5323 0.737906 24.591 0.667042 24.623C0.596184 24.6551 0.515552 24.658 0.44256 24.6312C0.405822 24.6155 0.372813 24.5923 0.345697 24.563C0.318581 24.5337 0.297981 24.499 0.285242 24.4611C0.272507 24.4233 0.267929 24.3832 0.27181 24.3434C0.275686 24.3037 0.287932 24.2652 0.307745 24.2306C0.855649 22.1931 1.61102 20.2172 2.56201 18.3338C5.00201 13.9768 8.33945 10.1876 12.3535 7.21693C18.0651 2.86186 24.987 0.385567 32.165 0.129325C42.0619 -0.156408 51.7313 3.12726 59.4075 9.38067ZM59.6074 12.3259C61.4051 13.903 63.0556 15.6403 64.5385 17.5165C72.4907 27.6388 74.6128 40.8968 65.6042 50.8574C60.6226 56.2885 54.7751 56.4941 50.1753 53.7042C47.7235 52.1034 45.7079 49.9184 44.3099 47.3455C42.9119 44.7727 42.1753 41.8927 42.1662 38.9646C42.0615 27.9247 49.1592 18.0775 59.6162 12.3157L59.6074 12.3259Z"
                      fill="url(#paint0_linear_4601_613)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M125.827 32.2287C124.982 29.7229 123.744 25.9191 123.599 25.5098L121.304 18.2707L118.269 6.21689C118.249 6.15441 118.241 6.08864 118.247 6.02334C118.253 5.95805 118.271 5.89451 118.302 5.83638C118.332 5.77825 118.373 5.72667 118.424 5.68457C118.474 5.64249 118.532 5.61072 118.594 5.5911C118.723 5.55212 118.862 5.56537 118.981 5.628C119.1 5.69063 119.19 5.79759 119.23 5.92575L123.612 17.4689L126.349 24.6083C126.518 25.0922 128.399 30.481 129.127 32.6899C129.404 33.419 129.417 34.2225 129.162 34.9599C128.925 35.2296 128.618 35.4273 128.274 35.5305C127.931 35.6337 127.565 35.6382 127.219 35.5435C125.628 35.0182 124.091 34.3428 122.629 33.5263L107.38 26.4674C102.165 24.0002 100.273 23.5966 100.795 22.2687C100.889 21.9943 101.164 21.8402 101.929 21.7355C102.213 21.739 102.494 21.7993 102.754 21.9129C104.647 22.6014 106.495 23.4046 108.29 24.3182L123.809 30.8987C123.947 30.9648 124.898 31.6771 125.827 32.2287Z"
                      fill="url(#paint1_linear_4601_613)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4601_613"
                        x1="123.916"
                        y1="36.815"
                        x2="-2.4786"
                        y2="18.4964"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="0.578125"
                          stop-color="white"
                          stop-opacity="0.44"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4601_613"
                        x1="123.916"
                        y1="36.815"
                        x2="-2.4786"
                        y2="18.4964"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="0.578125"
                          stop-color="white"
                          stop-opacity="0.44"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="payment__content__payinfo">
                <h1 class="payment__content__payinfo__price">
                  To'lov uchun narx -
                  <strong>{{
                    route.params?.slug == 1
                      ? "250$"
                      : route.params?.slug == 2
                      ? "350$"
                      : "1899$"
                  }}</strong>
                </h1>
                <h3 class="payment__content__payinfo__subtitle">
                  O'zingizga qulay bo'lgan to'lov uslublari orqali to'lovni
                  amalga oshiring:
                </h3>
                <h5 class="payment__content__payinfo__typepayment">
                  USDT da to'lov
                </h5>

                <div class="payment__content__payinfo__item">
                  <div class="payment__content__payinfo__item__name">
                    🔴TRC20
                  </div>
                  <div class="payment__content__payinfo__item__rekvizit">
                    TRWZ5DuvCBhoij3vUsdfd9Y61tdcpCtWp3
                  </div>
                </div>
                <div class="payment__content__payinfo__item">
                  <div class="payment__content__payinfo__item__name">
                    🟣POLYGON/MATIC
                  </div>
                  <div class="payment__content__payinfo__item__rekvizit">
                    TRWZ5DuvCBhoij3vUsdfd9Y61tdcpCtWp3
                  </div>
                </div>
                <div class="payment__content__payinfo__item">
                  <div class="payment__content__payinfo__item__name">
                    🔵SOL/Solana
                  </div>
                  <div class="payment__content__payinfo__item__rekvizit">
                    4b6UC2cy9Aa1SXcMtfaRivhcJaa84fLnSStiBSUdyBfA
                  </div>
                </div>

                <h5 class="payment__content__payinfo__typepayment">
                  Рубль orqali to'lov
                </h5>
                <div class="payment__content__payinfo__item">
                  <div class="payment__content__payinfo__item__name">
                    Т-БАНК (Тинькофф)
                  </div>
                  <div class="payment__content__payinfo__item__rekvizit">
                    2200700175239234
                  </div>
                  <div class="payment__content__payinfo__item__fio">
                    (Фирдавс И.)
                  </div>
                </div>

                <ul>
                  <li class="payment__content__payinfo__required">
                    To'lov oldidan rekvizitlar to'g'ri terilganini tekshiring,
                    so'ngra to'lovni yuboring.
                  </li>
                  <li class="payment__content__payinfo__check">
                    To'lovdan so'ng, chekni menejerga yuborishni unutmang.
                  </li>
                  <li>
                    <a
                      href="https://t.me/abucrypto1"
                      target="_blank"
                      class="payment__content__payinfo__help"
                      >Yordam so'rash</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="payment__logo">
              <img src="../assets/images/logo-png.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <VFooter />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

import VHeader from "@/components/black-page/v-header.vue";
import VMobileHeader from "@/components/black-page/v-mobile-header.vue";
import VFooter from "@/components/black-page/v-footer.vue";

window.scrollTo(0, 0);

// onMounted(() => {
//     document.body.style.overflow = "auto"
// })
</script>

<style scoped lang="scss"></style>
