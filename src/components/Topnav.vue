<template>
    <div class="topNav" v-if="toggleMenuButtonVisible">
        <div title="菜单" :class="{ sidebarVisible }">
            <svg v-if="toggleMenuButtonVisible" class="toggleMenu" @click="toggleMenu">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
        <router-link to="/" class="logo" title="首页">
            <svg class="icon">
                <use xlink:href="#icon-yezi"></use>
            </svg>
        </router-link>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const sidebarVisible = inject<Ref<boolean>>('sidebarVisible');
        const toggleMenu = () => {
            sidebarVisible.value = !sidebarVisible.value;
        };
        return { toggleMenu, sidebarVisible };
    },
};
</script>

<style lang="scss" scoped>
$themecolor: #5da501;
.topNav {
    display: flex;
    padding: 16px 16px 12px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 57px;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid #ddd;
    .logo {
        .icon {
            width: 30px;
            height: 30px;
            margin: 0 10px;
        }
    }
    .toggleMenu {
        position: absolute;
        top: 28px;
        left: 28px;
        width: 20px;
        height: 20px;
        display: none;
        fill: #666;
        cursor: pointer;
        transition: all 0.25s;
    }
    .sidebarVisible {
        .toggleMenu {
            fill: $themecolor;
        }
    }
}
@media (max-width: 500px) {
    .topNav {
        padding: 13px 16px 15px;
        .logo {
            margin: 4px auto 0;
        }

        .toggleMenu {
            top: 19px;
            display: inline-block;
        }
    }
}
@media (min-width: 500px) {
    .topNav {
        width: 64vw;
        left: 18vw;
    }
}
</style>
