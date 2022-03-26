<template>
    <div class="yezi-tabs" :class="{ card: theme === 'card' }">
        <div class="yezi-tabs-nav" ref="container">
            <div
                class="yezi-tabs-nav-item"
                v-for="(t, index) in titles"
                :ref="
                    (el) => {
                        if (t === selected) selectedItem = el;
                    }
                "
                @click="select(t)"
                :class="{ selected: t === selected }"
                :key="index"
            >
                {{ t }}
            </div>
            <div class="yezi-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="yezi-tabs-content">
            <component :is="current" :key="current.props.title" />
        </div>
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import { computed, ref, watchEffect, onMounted } from 'vue';
export default {
    props: {
        selected: {
            type: String,
        },
        theme: {
            type: String,
        },
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);

        onMounted(() => {
            watchEffect(
                () => {
                    const { width } = selectedItem.value.getBoundingClientRect();
                    indicator.value.style.width = width + 'px';
                    const { left: left1 } = container.value.getBoundingClientRect();
                    const { left: left2 } = selectedItem.value.getBoundingClientRect();
                    const left = left2 - left1;
                    indicator.value.style.left = left + 'px';
                },
                {
                    flush: 'post',
                }
            );
        });

        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            //@ts-ignore
            if (tag.type.name !== Tab.name) {
                throw new Error('Tabs 子标签必须是 Tab');
            }
        });
        const current = computed(() => {
            return defaults.find((tag) => tag.props.title === props.selected);
        });
        const titles = defaults.map((tag) => {
            return tag.props.title;
        });
        const select = (title) => {
            context.emit('update:selected', title);
        };
        return {
            current,
            defaults,
            titles,
            select,
            selectedItem,
            indicator,
            container,
        };
    },
};
</script>

<style lang="scss">
$theme: #5da501;
$color: #333;
$border-color: #d9d9d9;

.yezi-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $theme;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $theme;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
.card {
    border: 1px solid #d9d9d9;
    box-shadow: 0 1px 3px fade-out(black, 0.8);
    .yezi-tabs-nav {
        background: $theme;
        color: white;
        &-item {
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            padding: 8px 16px;
            margin: 0;
            transition: all 0.3s;
            &.selected {
                border-left: 1px solid #d9d9d9;
                border-right: 1px solid #d9d9d9;
                background: #fff;
            }
            &:first-child {
                border-left: none;
            }
        }
        &-indicator {
            background: #fff;
            height: 1px;
            bottom: -1px;
        }
    }
    .yezi-tabs-content {
        padding: 24px 16px;
    }
}
</style>
