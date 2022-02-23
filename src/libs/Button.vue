<template>
    <div>
        <button class="ui-button" :class="`theme-${theme}`">
            <slot></slot>
        </button>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        theme: {
            type: String,
            default: 'button',
        },
    },
    setup(props, context) {
        const onClick = () => {
            context.emit('click');
        };
        return {
            onClick,
        };
    },
};
</script>

<style lang="scss" scoped></style>
