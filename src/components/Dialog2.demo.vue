<demo>
添加回调函数
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog
            v-model:visible="open"
            :closeOnclcikOverlay="false"
            :onConfirm="fun1"
            :onCancel="fun2"
        >
            <template v-slot:content>
                <p>你好</p>
                <p>这也是一条普通的消息</p>
                <p>但是有回调了😊</p>
            </template>
            <template v-slot:title>
                <strong>又一个加粗的标题</strong>
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
        const fun1 = () => {
            console.log('确认');
        };
        const fun2 = () => {
            console.log('取消');
        };
        return {
            open,
            toggle,
            fun1,
            fun2,
        };
    },
};
</script>
