<template>
    <button class="yezi-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="yezi-loadingIndicator"></span>
        <slot />
    </button>
</template>
<script lang="ts">
import { computed } from 'vue';
export default {
    props: {
        theme: {
            type: String,
            default: 'button',
        },
        size: {
            type: String,
            default: 'normal',
        },
        level: {
            type: String,
            default: 'normal',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { theme, size, level } = props;
        const classes = computed(() => {
            return {
                [`yezi-theme-${theme}`]: theme,
                [`yezi-size-${size}`]: size,
                [`yezi-level-${level}`]: level,
            };
        });
        return { classes };
    },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$theme: #5da501;
$danger: #e22247;
$warning: #f3af22;
$grey: grey;
.yezi-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: 4px;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $theme;
        border-color: $theme;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        /*处理 Firefox的focus外边框 */
        border: 0;
    }
    &.yezi-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $theme;
        &:hover,
        &:focus {
            color: lighten($theme, 10%);
        }
    }
    &.yezi-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    &.yezi-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }
    &.yezi-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.yezi-theme-button {
        &.yezi-level-main {
            background: $theme;
            color: white;
            border-color: $theme;
            &:hover,
            &:focus {
                background: darken($theme, 10%);
                border-color: darken($theme, 10%);
            }
        }
        &.yezi-level-danger {
            background: $danger;
            border-color: $danger;
            color: white;
            &:hover,
            &:focus {
                background: darken($danger, 10%);
                border-color: darken($danger, 10%);
            }
        }
        &.yezi-level-warning {
            background: $warning;
            border-color: $warning;
            color: white;
            &:hover,
            &:focus {
                background: darken($warning, 10%);
                border-color: darken($warning, 10%);
            }
        }
    }
    &.yezi-theme-link {
        &.yezi-level-danger {
            color: $danger;
            &:hover,
            &:focus {
                color: darken($danger, 10%);
            }
        }
        &.yezi-level-warning {
            color: $warning;
            &:hover,
            &:focus {
                color: darken($warning, 10%);
            }
        }
    }
    &.yezi-theme-text {
        &.yezi-level-main {
            color: $theme;
            &:hover,
            &:focus {
                color: darken($theme, 10%);
            }
        }
        &.yezi-level-danger {
            color: $danger;
            &:hover,
            &:focus {
                color: darken($danger, 10%);
            }
        }
        &.yezi-level-warning {
            color: $warning;
            &:hover,
            &:focus {
                color: darken($warning, 10%);
            }
        }
    }
    &.yezi-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            &:hover {
                border-color: $grey;
            }
        }
    }
    &.yezi-theme-link,
    &.yezi-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }
    > .yezi-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $theme $theme $theme transparent;
        border-style: solid;
        border-width: 2px;
        animation: yezi-spin 1s infinite linear;
    }
}
@keyframes yezi-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
