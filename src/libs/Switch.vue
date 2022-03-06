<template>
    <button class="yezi-switch" @click="toggle" v-bind="$attrs" :class="{ 'yezi-checked': value }">
        <span></span>
    </button>
    <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value);
        };

        return { toggle };
    },
};
</script>
<style lang="scss">
.yezi-switch {
    width: 44px;
    height: 22px;
    border: none;
    border-radius: 11px;
    background: grey;
    position: relative;
    span {
        width: 18px;
        height: 18px;
        border-radius: 18px;
        background: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: all 0.25s;
    }
    &.yezi-checked {
        background: #5da501;
        span {
            left: 24px;
        }
    }
    &:focus {
        outline: none;
    }
    &:active {
        span {
            width: 22px;
        }
    }
    &.yezi-checked:active {
        span {
            width: 22px;
            margin-left: -4px;
        }
    }
}
</style>
