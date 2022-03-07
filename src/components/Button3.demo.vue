<demo>
不同级别（level）
</demo>
<template>
    <div>
        <div>
            <Button>普通按钮</Button>
            <Button level="main">主要按钮</Button>
            <Button level="warning">警告按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../libs/Button.vue';
export default {
    components: {
        Button,
    },
};
</script>
