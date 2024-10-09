<template>
    <header class="main-header fixed" :class="toggleMobileMenu ? 'active' : ''">
        <div class="wrapper">
            <RouterLink to="/" class="main-header-logo" @click="closeMobileMeni">
                <img width="53" height="52" src="../../assets/black-page/images/header/logo-png.png"
                    class="main-header-logo-part-1" alt="" decoding="async">
                <p class="main-header-text">ABUTRADING</p>
            </RouterLink>
            <div class="main-menu">
                <ul id="menu-glavnoe-menyu" class="menu nav_main">
                    <li id="menu-item-111"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-111">
                        <a href="/#format" aria-current="page">Format</a>
                    </li>
                    <li id="menu-item-112"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-112">
                        <a href="/#program" aria-current="page">Dastur</a>
                    </li>
                    <li id="menu-item-113"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-113">
                        <a href="/#price" aria-current="page">Tariflar</a>
                    </li>
                    <li id="menu-item-114"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-114">
                        <a href="/#reference" aria-current="page">Malumot</a>
                    </li>
                    <!-- <li id="menu-item-1090"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1090">
                        <a href="#">Kalkulyator</a>
                        <ul class="sub-menu">
                            <li id="menu-item-1061"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1061">
                                <a href="">Crypto</a>
                            </li>
                            <li id="menu-item-1091"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1091">
                                <a href="">Aksiya</a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>
            <div class="main-header-person">
                <a href="https://www.abutrading.pro" class="js-login active">Kirish </a>
            </div>
            <div class="header-hambugreg" :class="toggleMobileMenu ? 'is-active' : ''" @click="openMobileMenu">
                <div class="header-hamburger-line"></div>
            </div>
        </div>
    </header>
    <div class="mobile-header-bg" :class="toggleMobileMenu ? 'active' : ''" @click="closeMobileMeni"></div>
    <div class="mobile-header" :class="toggleMobileMenu ? 'active' : ''">
        <div class="main-menu">
            <ul id="menu-glavnoe-menyu-1" class="menu nav_main">

                <li v-for="item in menulist"
                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-111">
                    <RouterLink :to="item.link" @click="openMobileMenu">{{ item.title }}</RouterLink>
                </li>

            </ul>
        </div>
        <div class="main-header-person">
            <!-- <a href="" class="js-login active">Вход </a> -->
        </div>
    </div>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

let toggleMobileMenu = ref(false)
const menulist = [
    {
        title: 'Asosiy menyu',
        link: '/'
    },
    {
        title: 'Blog',
        link: 'blog'
    },
    {
        title: 'Media',
        link: 'media'
    },
]

const openMobileMenu = () => {
    toggleMobileMenu.value = !toggleMobileMenu.value
    document.body.classList.toggle('active')
}
const closeMobileMeni = () => {
    toggleMobileMenu.value = false
    document.body.classList.remove('active')
}
</script>

<style scoped lang="scss"></style>
