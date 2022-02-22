<template>
    <div>
        <Switch :value="y" @input="y = $event"></Switch>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../libs/Switch.vue';
export default {
    components: { Switch },
    setup() {
        const y = ref(true);
        return { y };
    },
};
</script>
