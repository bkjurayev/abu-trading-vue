<template>
    <div class="home">
        <VHeader />

        <VMobileHeader />
        <div class="page-container">
            <VFirstBlock />

            <VNewsSlider />

            <VFeedbackBlack />

            <VSmartText />

            <VWhyAbutrad />

            <VCourseFormat />

            <VProgramLearn />

            <VPockets />

            <VHelp />
        </div>

        <VFooter />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import VHeader from "@/components/black-page/v-header.vue";
import VMobileHeader from "@/components/black-page/v-mobile-header.vue";
import VFirstBlock from "@/components/black-page/v-first-block.vue";
import VFeedbackBlack from "@/components/black-page/v-feedback-black.vue";
import VSmartText from "@/components/black-page/v-smarttext.vue";
import VWhyAbutrad from "@/components/black-page/v-whyabutrad.vue";
import VNewsSlider from "@/components/black-page/v-news-slider.vue";
import VCourseFormat from "@/components/black-page/v-course-format.vue";
import VProgramLearn from "@/components/black-page/v-program-learn.vue";
import VPockets from "@/components/black-page/v-pockets.vue";
import VHelp from "@/components/black-page/v-help.vue";
import VFooter from "@/components/black-page/v-footer.vue";


// onMounted(() => {
//     document.body.style.overflow = "auto"
// })
</script>
