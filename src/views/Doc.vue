<template>
    <div class="docWrapper">
        <Topnav toggleMenuButtonVisible />
        <transition name="mmask">
            <div class="mask" v-if="sidebarVisible" @click="closeAside" />
        </transition>
        <div class="content">
            <Aside></Aside>
            <main @click="closeAside" :class="{ sidebarVisible }">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Aside from '../components/Aside.vue';
import { inject, Ref } from 'vue';
export default {
    components: {
        Topnav,
        Aside,
    },

    setup() {
        const sidebarVisible = inject<Ref<boolean>>('sidebarVisible');
        const closeAside = () => {
            sidebarVisible.value = false;
        };
        return {
            sidebarVisible,
            closeAside,
        };
    },
};
</script>
<style lang="scss" scoped>
.content {
    main {
        padding: 92px 40px 80px 262px;
        transition: all 0.4s ease;
    }
}
@media (max-width: 500px) {
    .content {
        main {
            padding-left: 28px;
            &.sidebarVisible {
                transform: translateX(223px);
            }
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 8;
    }
    .mmask-enter-active,
    .mmask-leave-active {
        transition: opacity 0.3s;
    }
    .mmask-enter-from,
    .mmask-leave-to {
        opacity: 0;
    }
}
@media (min-width: 500px) {
    .docWrapper {
        height: 100%;
        position: relative;
        margin: 0 18vw;
    }
}
</style>
