<template>
    <v-container fluid pa-0 mb-5>
        <app-main-image></app-main-image>
        <app-main-content></app-main-content>
        <app-contact></app-contact>
    </v-container>
</template>

<script>
import MainImage from "~/components/index/MainImage.vue";
import MainContent from "~/components/index/MainContent.vue";
import Contact from "~/components/index/Contact.vue";

export default {
    components: {
        "app-main-image": MainImage,
        "app-main-content": MainContent,
        "app-contact": Contact
    }
};
</script>
