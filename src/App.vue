<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import { router } from './router';
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const sidebarVisible = ref(width <= 500 ? false : true);
        provide('sidebarVisible', sidebarVisible);
        router.afterEach(() => {
            sidebarVisible.value = width <= 500 ? false : true;
        });
    },
};
</script>
