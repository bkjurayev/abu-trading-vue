<template>
  <VHeader />

  <VMobileHeader />
  <div class="blog">
    <div class="wrapper">
      <div class="item-con">
        <div class="item">
          <span class="tag">Hukm</span>
          <figure>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yAy0HRU2BzM?si=Txa62lP4I2Tn_Jw7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <!-- <img
                            src="https://www.securities.io/wp-content/uploads/2024/05/Daily_Forex_-_Top_5_Halal_Islamic_Trading_Platform_1714912776dpQa7y0EYq.jpg" /> -->
          </figure>
          <div class="this-meta">
            <h2>Kriptovalyutalarning umumiy hukmi qanday?</h2>
            <h3>
              Quyidagi videoda barchamizga taniqli bo'lgan shayhlardan Doktor
              Saa'd Al-Xoslan, Sh. Mutlaq Al-Jassir, Doktor Muhammad Hasan
              Ad-Dadu fatvolarini o'zbek tilida ko'rishingiz mumkin:
            </h3>
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
                  <span class="put-stamp">24.06.2024</span>
                </div>
              </div>
              <div class="bc-item share-post">
                <i class="bi bi-reply"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <span class="tag">Coins</span>
          <figure>
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2023/05/Trading_photo.jpg"
            />
          </figure>
          <div class="this-meta">
            <h2>Qanday kriptovalyutalar bilan biz ishlaymiz?</h2>
            <h3>
              Xar-bir kriptovalyuta hukmi shar'iy ma'muriyatlar tomonidan
              tekshirilib, #HALOL fatvosi berilganidan so'ng ishlaymiz. Chunki
              hukmi yo'q tokenlar bilan ishlash - shubhali va hukmi harom
              chiqqanidan keyin luqmani shubhali qilib qo'yadi
            </h3>
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
                  <span class="put-stamp">29.06.2024</span>
                </div>
              </div>
              <div class="bc-item share-post">
                <i class="bi bi-reply"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <span class="tag">Jamoa</span>
          <figure>
            <img
              src="../assets/black-page/images/blog/gif_2024-07-04_18-04-27.gif"
              alt=""
            />
            <!-- <img
                            src="https://sissoftwarefactory.com/blog/wp-content/uploads/sites/2/2023/01/142568181_10157857858143341_2155957782545253315_n.jpg" /> -->
          </figure>
          <div class="this-meta">
            <h2>
              Abu Juvayriya va Abu Trading jamoasi bilan yaqindan tanishing!
            </h2>
            <h3>
              Ustoz Abu Juvayriya 1 yil oldin o'z faoliyatini boshlagan,
              kanalida introday, o'rta muddatga va uzoq muddatga
              kriptovalyutalarni tahlil qilib, juda ko'p insonlar
              foydalanishgan, u birinchi bo'lib, tehnik analizdan tashqari
              Whales strategiyasini o'rgatdi hamda qisqa muddat uchun skrinerlar
              bilan qanday ishlashni o'rgatgan birinchi o'zbek treyderlaridan
              bo'ldi Bugun Abu Juvayriya jamoasida 250 dan ortiq odam jamlangan
              va yopiq guruhda o'zlaridan tashqari Umar aka va Firnas o'zlari
              bilganini ulashib, o'rgatib kelmoqda Bizning asosiy maqsad -
              marketing orqali insonlardan foydalanib qolish emas, balki
              treyding olamida barqaror komyuniti bo'lish va o'z savdolarimiz va
              tahlillarimiz bilan bo'lishish. Lekin treyding - bu bepul ikki
              tugmani bosib foyda qilish emas, balki ustozlardan bir-necha
              strategiyalarni o'rgangandan so'ng foyda qilishdir
            </h3>
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
                  <span class="put-stamp">01.07.2024</span>
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
  </div>
  <VFooter />
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
.blog {
  padding: 150px 0;
}

.wrapper {
  padding: 0 20px;
  margin: 0 auto;
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
}
</style>
