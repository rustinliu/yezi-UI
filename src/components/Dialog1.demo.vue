<demo>
常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="open" :overlayClose="false">
            <template v-slot:content>
                <p>你好</p>
                <p>这是一条普通的消息</p>
            </template>
            <template v-slot:title>
                <strong>一个加粗的标题</strong>
            </template>
        </Dialog>
    </div>
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
        const open = ref(false);
        const toggle = () => {
            open.value = !open.value;
        };

        return {
            open,
            toggle,
        };
    },
};
</script>
