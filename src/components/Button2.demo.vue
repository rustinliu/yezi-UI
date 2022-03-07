<demo>
不同类型(theme)
</demo>
<template>
    <div>
        <div>
            <Button theme="button">按钮</Button>
            <Button theme="link">链接</Button>
            <Button theme="text">文本</Button>
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
