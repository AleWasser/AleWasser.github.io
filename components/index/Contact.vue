<template>
    <v-layout column wrap justify-center align-center mt-4>
        <v-flex xs12>
            <h1>Contactame</h1>
        </v-flex>
        <v-flex xs12>
            <a href="mailto:alejowasser@gmail.com" target="_blank">
                <v-btn fab icon class="red" dark alt="Email" title="Email">
                    <v-icon dark>email</v-icon>
                </v-btn>
            </a>
            <a href="https://www.linkedin.com/in/alewasser" target="_blank">
                <v-btn fab icon color="blue darken-4" dark alt="LinkedIn" title="LinkedIn">
                    <v-icon dark>work</v-icon>
                </v-btn>
            </a>
            <a href="https://github.com/AleWasser" target="_blank">
                <v-btn fab icon color="blue-grey darken-4" dark alt="GitHub" title="GitHub">
                    <v-icon dark>device_hub</v-icon>
                </v-btn>
            </a>
            <!-- <v-btn fab icon color="cyan" dark>
                <a href="https://twitter.com/AleWasser" target="_blank">
                    <v-icon dark>alternate_email</v-icon>
                </a>
            </v-btn>-->
        </v-flex>
    </v-layout>
</template>

<style scoped>
a {
    text-decoration: none;
    color: unset;
}
</style>
