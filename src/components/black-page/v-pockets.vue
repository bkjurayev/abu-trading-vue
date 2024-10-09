<template>
  <section class="m-6">
    <div class="m-6-bg-left"></div>
    <div class="m-6-bg-right"></div>
    <div class="wrapper">
      <h2 class="section-title-2 wow fadeInUp">
        <div class="section-title-2-dots"></div>
        <span>Bilim vaqt inflyatsiyasiga moyil emas </span>
      </h2>
      <div class="m-6-after-title">
        Moliya bozorida ilk bilimlarni o'rganib, o'zingiz uchun daromad
        yo'nalishini tanlang
      </div>
      
      <!-- Close cource -->
      <!-- <div class="m-6-timer" data-time="09/07/2024 11:59 пп">
        <div class="m-6-timer-title m-6-timer-title--start">
          Qabul ochilishigacha:
        </div>
        <div class="m-6-timer-title m-6-timer-title--end">
          Qabul yopilishigacha:
        </div>

        <div class="m-6-timer-main">
          <div class="m-6-timer-main-days">{{ totalDays }} kun</div>
          <div class="m-6-timer-main-time">
            {{ hours < 10 ? "0" + hours : hours }}:{{
              minutes < 10 ? "0" + minutes : minutes
            }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>
        </div>
      </div> -->
      <!--  -->

      <!-- Open cource -->
      <div class="m-6-timer" data-time="09/07/2024 11:59 пп">
        <div class="m-6-timer-title m-6-timer-title--end text-green">
          Qabul ochilishigacha:
        </div>

        <div class="m-6-timer-main">
          <div class="m-6-timer-main-days">{{ totalDays }} kun</div>
          <div class="m-6-timer-main-time">
            {{ hours < 10 ? "0" + hours : hours }}:{{
              minutes < 10 ? "0" + minutes : minutes
            }}:{{ seconds < 10 ? "0" + seconds : seconds }}
          </div>
        </div>
      </div>
      <!--  -->
      
      <h2 class="section-title wow fadeInUp">
        <p><strong>Mavjud tariflar</strong></p>
      </h2>
      <div class="m-6-flex">
        <div class="m-6-item wow fadeInUp">
          <div class="m-6-item-box">
            <!-- <img src="/img/logo-png.c4e1e0b0.png" alt=""> -->
            <div class="m-6-item-month">Jamoa</div>
            <div class="m-6-item-price">$<span>250</span></div>
            <div class="m-6-item-description">
              <ul>
                <li>Jamoaga qo'shilish</li>
                <li>Strategiyalar kursi to'liq shaklda</li>
                <li>Video darsliklar</li>
                <li>Jamoa strimlarida qatnashish</li>
                <li>Signallar berib boriladi</li>
                <!-- <li>Vip signal kanalga qo'shilish imkoni beriladi.</li> -->
              </ul>
            </div>
            <RouterLink
              :to="{ name: 'Payments', params: { slug: 1 } }"
              class="m-6-item-btn"
              >Sotib olish
            </RouterLink>
          </div>
        </div>
        <div class="m-6-item wow fadeInUp">
          <div class="m-6-item-box">
            <div class="m-6-item-month">Jamoaviy online kurs</div>
            <div class="m-6-item-price">$<span>350</span></div>
            <div class="m-6-item-description">
              <ul>
                <li>Materiallarga cheksiz kirish</li>
                <li>Teoriyadan so'ng ustoz bilan 1 oy praktika</li>
                <li>
                  Tehnik analiz va smart money strategiyalari bo'yicha
                  darsliklar
                </li>
                <li>Har bir mavzu bo'yicha video darslar</li>
                <li>15 darslik va qo'shimcha strimlar</li>
                <li>Kurator nazorati, kurs davomida aloqa</li>
                <li>Abu Trading jamoasiga qo'shilish</li>
                <li>Jamoa chatiga kirish</li>
                <li>Faol tarif bilan yangilanishlar</li>
              </ul>
            </div>
            <RouterLink
              :to="{ name: 'Payments', params: { slug: 2 } }"
              class="m-6-item-btn"
              >Sotib olish
            </RouterLink>
          </div>
        </div>
        <div class="m-6-item wow fadeInUp">
          <div class="m-6-item-box">
            <div class="m-6-item-month">1:1 individual</div>
            <div class="m-6-item-price">$<span>1899</span></div>
            <div class="m-6-item-description">
              <ul>
                <li>
                  <strong
                    >Jamoaviy kursidagi barcha darsliklar va materiallar</strong
                  >
                </li>
                <li>Ustoz Abu Juvayriya bilan 1:1 dars o'tish imkoniyati</li>
                <li>Onlayn-darslar vaqtini ustoz bilan kelishish</li>
                <li>
                  Kurs muddatidan so'ng 3 oy praktika va boshqa afzalliklar
                </li>
              </ul>
            </div>

            <RouterLink
              :to="{ name: 'Payments', params: { slug: 3 } }"
              class="m-6-item-btn"
              >Sotib olish
            </RouterLink>
          </div>
        </div>
        <div class="anhor" id="price"></div>
      </div>
    </div>
  </section>
</template>



<script setup>
import { onMounted, ref } from "vue";

let date = new Date();

let year = new Date().getFullYear()
let month = new Date().getMonth()
let days = new Date(year, month, 0).getDate()

let currentDay = date.getDate();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

const limit = ref(20);
let totalDays = ref(currentDay > 20 ? 31 - (currentDay - limit.value) : limit.value - currentDay);

const hours = ref(currentHour == 0 ? 24 : 23 - currentHour);
const minutes = ref(60 - currentMinute);
const seconds = ref(60 - currentSecond);

const interval = setInterval(() => {
  // let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  if (seconds.value > 1) {
    seconds.value--;
  } else {
    seconds.value = 59;
  }
  if (seconds.value == 59) {
    minutes.value--;
  }
  if (minutes.value == 0) {
    hours.value--;
    minutes.value = 59;
  }
  if (hours.value == 0) {
    hours.value = 23;
  }
}, 1000);

onMounted(() => {
  interval;
});
</script>

<style scoped lang="scss">
.section-title {
  display: flex;
  justify-content: space-between;
}
.text-green {
  color: #43b343;
}
</style>
