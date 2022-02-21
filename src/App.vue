<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue';
export default {
    name: 'App',
    setup() {
        const sidebarVisible = ref(false);
        provide('sidebarVisible', sidebarVisible);
    },
};
</script>
