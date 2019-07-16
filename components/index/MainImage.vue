<template>
    <v-img
        aspect-ratio="2.1"
        src="https://www.desktopbackground.org/download/o/2015/09/29/1018679_laptop-apple-computer-desk-tables-high-quality-wallpapers_1920x1200_h.jpg"
    >
        <v-layout
            align-center
            column
            justify-center
            fill-height
            style="background-color:rgba(255, 255, 255, 0.5)"
        >
            <vue-typer class="display-2 font-weight-thin mb-3" text="Alejo Wasser"></vue-typer>
        </v-layout>
    </v-img>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
    components: {
        "vue-typer": VueTyper
    }
};
</script>
