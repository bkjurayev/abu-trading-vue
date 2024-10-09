<template>
  <div class="home">
    <VHeader />

    <VMobileHeader />
    <div class="wrapper">
      <div class="item-con">
        <div class="item">
          <span class="tag green">Chegirma</span>
          <figure>
            <img
              src="https://www.securities.io/wp-content/uploads/2024/05/Daily_Forex_-_Top_5_Halal_Islamic_Trading_Platform_1714912776dpQa7y0EYq.jpg"
            />
          </figure>
          <div class="this-meta">
            <h2>Abu Trading VIP signal kanaliga chegirma:</h2>
            <h3>
              Kanalda bozor holatiga qarab: Qisqa , o’rta , uzoq muddatga signal
              berib boriladi.
            </h3>
            <h3>
              Kanalda uch tajribalik trader signal berib boradi, albatta
              natijalarni kanalimizdan ko’rsangiz bo’ladi.
            </h3>
            <ul>
              <li>1 oylik narxi 80$ evaziga 35$ ✅</li>
              <li>3 oylik narxi 180$ evaziga 100$ ✅</li>
              <li>6 oylik narxi 250$ evaziga 140$ ✅</li>
              <li>Bir martalik to’lov 300$ evaziga 200$ ✅</li>
            </ul>
            <h3>
              To’lovlarni adminlarga aloqaga chiqib qulay hisob raqam olishingiz
              mumkin Barakallohu fiykum!
            </h3>
            <div class="media__btn">
              <a href="https://t.me/abucrypto1" target="_blank"
                >Telegramga yozish</a
              >
            </div>
            <div class="b-con">
              <div class="flex">
                <div class="bc-item author">
                  <i class="bi bi-person"></i>
                  <a href="https://t.me/abucrypto1" target="_blank">
                    <span class="author-name">Admin</span>
                  </a>
                </div>
                <div class="bc-item put-stamp">
                  <i class="bi bi-clock"></i>
                  <span class="put-stamp">04.07.2024</span>
                </div>
              </div>
              <div class="bc-item share-post">
                <i class="bi bi-reply"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog container">
      <!-- <div class='card-left'>
                <div class='card-image'>
                    <img
                        src='https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'>
                </div>
                <div class='card-text'>
                    <p>Kriptovalyutalarning umumiy hukmi qanday? </p>
                </div>
            </div>
            <div class='card-right'>
                <div class='card-image'>
                    <img
                        src='https://images.pexels.com/photos/35828/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'>
                </div>
                <div class='card-text'>
                    <p>Ut eu diam at pede suscipit sodales.</p>
                </div>
            </div>
            <div class='card-top'>
                <div class='card-image'>
                    <img
                        src='https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'>
                </div>
                <div class='card-text'>
                    <p>Quisque cursus, metus vitae pharetra auctor.</p>
                </div>
            </div>
            <div class='card-right'>
                <div class='card-image'>
                    <img
                        src='https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'>
                </div>
                <div class='card-text'>
                    <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
                </div>
            </div>
            <div class='card-top'>
                <div class='card-image'>
                    <img
                        src='https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'>
                </div>
                <div class='card-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div> -->
    </div>

    <VFooter />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import VHeader from "@/components/black-page/v-header.vue";
import VMobileHeader from "@/components/black-page/v-mobile-header.vue";
import VFooter from "@/components/black-page/v-footer.vue";

// onMounted(() => {
//     document.body.style.overflow = "auto"
// })
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0 20px;
  margin: 0 auto;
  padding: 150px 0;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: sans-serif;
  text-decoration: none;
}

.media__btn {
  font-weight: 900;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(left, #00f298, #07f7f7);

  width: max-content;
  padding: 6px 15px;
  border-radius: 12px;
  // height: 65px;
  margin-right: auto;
  margin-left: 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.88px;

  a {
    color: #000;
  }

  &:hover {
    background: #ffffff;
  }
}

.flex {
  display: flex;
}

.item-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
}

.item {
  flex: 0 1 48%;
  margin-bottom: 50px;
  overflow: hidden;
  border-radius: 0.375rem;
  background: white;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  box-shadow: 0px 8px 9px #00000030;
}

.item figure {
  display: flex;
  height: 14rem;
  width: 100%;
  place-items: center;
  justify-content: center;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.item figure img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  vertical-align: middle;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
}

.item figure img:hover {
  filter: saturate(0.05);
}

ul {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
}

.item .tag {
  position: absolute;
  z-index: 10;
  transform: translateX(1rem) translateY(1rem);
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border-radius: 0.125rem;
  background-color: rgb(45, 75, 240);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.025em;
  color: white;
}

.item .tag.green {
  background-color: green;
}

.this-meta {
  padding: 0.75rem;
}

.this-meta h2 {
  margin-bottom: 20px;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 1.925rem;
  line-height: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  color: rgb(51, 51, 51);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.this-meta h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.this-meta h2:hover {
  color: black;
}

.b-con {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.b-con .bc-item {
  width: -moz-fit-content;
  width: fit-content;
  color: rgb(34, 46, 57);
  text-align: right;
}

.b-con .bc-item:hover {
  color: black;
}

.bc-item.author,
put-stamp {
  margin-right: 1.5rem;
}

.author-name {
  color: rgb(34, 46, 57);
}

.b-con .bi {
  margin-right: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
}

.share-post {
  margin: 0;
}

@media only screen and (max-width: 576px) {
  .blog {
    padding-top: 100px;
    padding-bottom: 0;
  }

  .item {
    flex: 1 1 100%;
  }

  .item figure {
    height: inherit;
  }

  ul {
    font-size: 18px;
  }
}

// =====================================================
// =====================================================
// =====================================================
// .about {
//     &__body {
//         padding-top: 150px;
//     }
// }

// .blog {
//     padding-top: 150px;
// }

// .container {
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
//     grid-auto-rows: 200px;
//     grid-auto-flow: row dense;
//     grid-gap: 23px;
//     justify-content: center;
// }

// .card-top,
// .card-right,
// .card-bottom,
// .card-left {
//     display: flex;
//     flex-wrap: nowrap;
//     height: 100%;
//     width: 100%;
//     border-radius: 95.2380952381px;
//     box-shadow: 0px 3px 9px 1px rgba(0, 10, 20, 0.2);
//     box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgb(80 80 80 / 10%) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px;
// }

// .card-top {
//     flex-direction: column;
//     grid-column: auto/span 1;
//     grid-row: auto/span 2;
// }

// .card-right {
//     flex-direction: row-reverse;
//     grid-column: auto/span 2;
//     grid-row: auto/span 1;
// }

// .card-bottom {
//     flex-direction: column-reverse;
//     grid-column: auto/span 1;
//     grid-row: auto/span 2;
// }

// .card-left {
//     flex-direction: row;
//     grid-column: auto/span 2;
//     grid-row: auto/span 1;
// }

// .card-image {
//     display: flex;
// }

// .card-top .card-image,
// .card-bottom .card-image {
//     height: 50%;
//     width: 100%;
// }

// .card-left .card-image,
// .card-right .card-image {
//     height: 100%;
//     width: 50%;
// }

// .card-image img {
//     width: 100%;
//     object-fit: cover;
// }

// .card-top img {
//     border-radius: 95.2380952381px 95.2380952381px 0 0;
// }

// .card-right img {
//     border-radius: 0 95.2380952381px 95.2380952381px 0;
// }

// .card-bottom img {
//     border-radius: 0 0 95.2380952381px 95.2380952381px;
// }

// .card-left img {
//     border-radius: 95.2380952381px 0 0 95.2380952381px;
// }

// .card-text {
//     align-self: center;
//     padding: 23px;
// }

// .card-top .card-text {
//     height: auto;
//     width: auto;
//     padding-bottom: 36.8px;
// }

// .card-right .card-text {
//     height: auto;
//     width: 50%;
//     padding-left: 36.8px;
// }

// .card-bottom .card-text {
//     height: auto;
//     width: auto;
//     padding-top: 36.8px;
// }

// .card-left .card-text {
//     height: auto;
//     width: 50%;
//     padding-right: 36.8px;
// }

// .card-text p {
//     margin: 0;
//     font-weight: 600;
//     line-height: 1.35em;
//     color: #919da8;
// }

// @media (max-width: 500px) {
//     .card-top {
//         flex-direction: row;
//         grid-column: auto/span 2;
//         grid-row: auto/span 1;
//     }

//     .card-bottom {
//         flex-direction: row-reverse;
//         grid-column: auto/span 2;
//         grid-row: auto/span 1;
//     }

//     .card-top .card-image,
//     .card-bottom .card-image {
//         height: 100%;
//         width: 50%;
//     }

//     .card-top img {
//         border-radius: 95.2380952381px 0 0 95.2380952381px;
//     }

//     .card-bottom img {
//         border-radius: 0 95.2380952381px 95.2380952381px 0;
//     }

//     .card-top .card-text {
//         height: auto;
//         width: 50%;
//         padding-right: 36.8px;
//     }

//     .card-bottom .card-text {
//         height: auto;
//         width: 50%;
//         padding-left: 36.8px;
//     }
// }

// @media (max-width: 400px) {
//     .card-image {
//         width: 38% !important;
//     }

//     .card-text {
//         width: 62% !important;
//     }
// }
</style>
