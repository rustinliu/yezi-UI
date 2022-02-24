<template>
    <div>Dialog</div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnclcikOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <strong> hi</strong>
        </template>
        <template v-slot:title>
            <strong> haha</strong>
        </template>
    </Dialog>
</template>

<script lang="ts">
import Dialog from '../libs/Dialog.vue';
import Button from '../libs/Button.vue';
import { ref } from 'vue';
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {};
        const f2 = () => {};
        return {
            x,
            toggle,
            f1,
            f2,
        };
    },
};
</script>
