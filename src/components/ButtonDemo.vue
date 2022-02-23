<template>
    <div>Button</div>
    <h1>示例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
</template>

<script>
import Button from '../libs/Button.vue';
export default {
    components: {
        Button,
    },
    setup() {
        const onClick = () => {
            alert('你好');
        };
        return {
            onClick,
        };
    },
};
</script>
