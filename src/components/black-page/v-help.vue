<template>
  <section class="m-8">
    <div class="wrapper">
      <h2 class="m-8-title wow fadeInUp">
        <span>Yordam kerakmi?</span>
        <div class="m-8-dots"></div>
      </h2>
      <a
        class="m-8-btn wow fadeInUp"
        href="https://t.me/qaswarax"
        target="_blank"
        >Telegramga yozish</a
      >
      <a
        class="m-8-btn-cryptohalal"
        href="https://t.me/CryptoHalol_manager"
        target="_blank"
        >Cryptohalal menejeri bilan bog'lanish
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>



<script setup>
</script>

<style scoped lang="scss">
.m-8-btn {
  font-weight: 900;
  margin-right: 80px;
  margin-bottom: 50px;
  background: -webkit-linear-gradient(left, #00f298, #07f7f7);

  &-cryptohalal {
    display: block;
    display: flex;
    align-items: center;
    justify-content: end;
    transition: all 0.3s;
    margin-right: 80px;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.68px;
    margin-bottom: 20px;
    width: max-content;
    margin-left: auto;

    &:hover {
      color: #00f298;
      cursor: pointer;
    }

    svg {
      width: 40px;
      fill: #00f298;
      margin-left: 20px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .m-8-btn {
    &-cryptohalal {
      margin-right: 0;
      width: 100%;
      svg {
        width: 100px;
      }
    }
  }
}
</style>
