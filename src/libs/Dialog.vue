<template>
    <!-- <template v-if="visible"> -->
    <teleport to="body">
        <transition name="overlay">
            <div v-if="visible" class="yezi-dialog-overlay" @click="onClickOverlay"></div>
        </transition>
        <transition name="wrapper">
            <div v-if="visible" class="yezi-dialog-wrapper">
                <div class="yezi-dialog">
                    <header>
                        <slot name="title"></slot>
                        <span @click="close" class="yezi-dialog-close"></span>
                    </header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <Button @click="onCancel">Cancel</Button>
                        <Button level="main" @click="onConfirm">OK</Button>
                    </footer>
                </div>
            </div>
        </transition>
    </teleport>
    <!-- </template> -->
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
    props: {
        title: {
            type: String,
            default: '提示',
        },
        visible: {
            type: Boolean,
            default: false,
        },
        closeOnclcikOverlay: {
            type: Boolean,
            default: true,
        },
        onCancel: {
            type: Function,
            default: () => {},
        },
        onConfirm: {
            type: Function,
            default: () => {},
        },
    },
    components: {
        Button,
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false);
        };
        const onClickOverlay = () => {
            if (props.closeOnclcikOverlay) {
                close();
            }
        };
        const onCancel = () => {
            if (props.onCancel && props.onCancel() !== false) {
                close();
            }
        };
        const onConfirm = () => {
            if (props.onConfirm && props.onConfirm() !== false) {
                close();
            }
        };
        return {
            close,
            onClickOverlay,
            onCancel,
            onConfirm,
        };
    },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;

.yezi-dialog {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 3px fade_out(#5da501, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    > main {
        padding: 12px 16px;
    }

    > footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
.overlay-enter-active,
.overlay-leave-active,
.wrapper-enter-active,
.wrapper-leave-active {
    transition: all 0.25s;
}
.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}
.wrapper-enter-from,
.wrapper-leave-to {
    transform: translate(-50%, -50%) translateY(-16px);
    opacity: 0;
}
</style>
