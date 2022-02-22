<template>
    <div>
        <Switch v-model:value="bool"></Switch>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../libs/Switch.vue';
export default {
    components: { Switch },
    setup() {
        const bool = ref(true);
        return { bool };
    },
};
</script>
