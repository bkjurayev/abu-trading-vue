<template>
    <section class="hero">
        <div class="wrapper">
            <div class="hero-flex">
                <div class="hero-left">
                    <h2 class="hero-title2">Halol Savdo</h2>
                    <h1 class="hero-title text">Abu Trading Jamoasi Bilan</h1>
                    <div class="hero-left-quantity">
                        <h1 ref="members"><span>Jamoamiz a'zolari </span><strong ref="out"> 370</strong><span>+</span>
                        </h1>
                    </div>
                    <div class="hero-btn-wrap wow fadeInDown" data-wow-delay="0.3s">
                        <a class="hero-btn-arrow" href="#price"></a>
                    </div>
                </div>
                <div class="hero-right wow fadeIn" data-wow-delay="0.5s">
                    <img loading="lazy" decoding="async" width="1024" height="1012"
                        src="https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-1024x1012.png"
                        class="attachment-large size-large wp-image-20144" alt=""
                        srcset="https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-1024x1012.png 1024w, https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-300x297.png 300w, https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-768x759.png 768w, https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-600x593.png 600w, https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg-100x100.png 100w, https://toka.peerduck.com/wp-content/uploads/2022/04/earstcg.png 1200w"
                        sizes="(max-width: 1024px) 100vw, 1024px" data-v-78ec5c12="">
                    <img src="../../assets/black-page/images/first-block/prtlg.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const time = 1000;
const step = 1;
let outNum;
const out = ref(null)
const members = ref(null)

outNum = (num) => {
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        out.value.innerHTML = n;
    }, t);
}


onMounted(() => {
    outNum(370);
})

</script>




<style scoped lang="scss">
.hero-title {
    animation: cursor 0.75s step-end infinite, printed_text 5s steps(59);
}

.hero-title2 {
    animation: cursor 0.75s step-end infinite, printed_text 5s steps(59);
}

@keyframes cursor {
    0% {
        border-color: white;
    }

    50% {
        border-color: transparent;
    }

    100% {
        border-color: white;
    }
}

@keyframes printed_text {
    from {
        width: 0;
    }
}

@media only screen and (max-width: 576px) {
    .hero {
        &-flex {
            padding-top: 140px;
        }

        &-title {
            font-size: 24px;
            word-spacing: -7px;
        }

        &-title2 {
            font-size: 46px;
        }

        &-left {
            &-quantity {
                span {
                    font-size: 24px;
                }

                strong {
                    font-size: 34px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
