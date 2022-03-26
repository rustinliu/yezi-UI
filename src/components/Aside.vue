<template>
    <div class="aside" :class="{ sidebarVisible }">
        <h2>文档</h2>
        <ol>
            <li><router-link to="/doc/intro">介绍</router-link></li>
            <li><router-link to="/doc/install">安装</router-link></li>
            <li><router-link to="/doc/get-started">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
            <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
        </ol>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
    setup() {
        const sidebarVisible = inject<Ref<boolean>>('sidebarVisible');
        return { sidebarVisible };
    },
};
</script>

<style lang="scss" scoped>
$themecolor: #5da501;
.aside {
    background: #fff;
    min-width: 223px;
    min-height: 100vh;
    height: 100%;
    padding: 72px 28px 28px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    box-shadow: 1px 0 1px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    p {
        font-size: 22px;
        margin: 20px 0 10px;
    }
    li {
        padding: 6px 0;
        color: #888;
        transition: all 250ms ease;
        &:hover {
            color: $themecolor;
        }
        .router-link-active {
            color: $themecolor;
            text-decoration: none;
        }
    }
}
@media (max-width: 500px) {
    .aside {
        transform: translateX(-223px);
        &.sidebarVisible {
            transform: translateX(0);
        }
    }
}
@media (min-width: 500px) {
    .aside {
        left: 18vw;
    }
}
</style>
