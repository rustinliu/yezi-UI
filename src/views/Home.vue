<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>Shadow UI</h1>
            <h2>A userful UI library</h2>
            <p class="actions">
                <a>GitHub</a>
                <a>开始</a>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
    components: {
        Topnav,
    },
};
</script>
<style lang="scss" scoped></style>
