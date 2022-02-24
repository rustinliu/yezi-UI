<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnclcikOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <strong> hi</strong>
        </template>
        <template v-slot:title>
            <strong> haha</strong>
        </template>
    </Dialog>
    <h2>示例2</h2>
    <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from '../libs/Dialog.vue';
import Button from '../libs/Button.vue';
import { openDialog } from '../libs/openDialog';
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
        const showDialog = () => {
            openDialog({ title: 'haha', content: 'hihi', closeOnclcikOverlay: false });
        };
        const f1 = () => {};
        const f2 = () => {};
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog,
        };
    },
};
</script>
