<template>
    <div class="mainFlow">
        <saluteUser></saluteUser>
        <coursesSection></coursesSection>
    </div>
</template>

<script>

import saluteUser from './saluteUser.vue';
import coursesSection from './coursesSection.vue';

export default {
    components: {
        saluteUser,
        coursesSection,
    },

}
</script>

<style>

</style>