<template>
    <div class="topnavAndBanner">
        <div>
            <Topnav></Topnav>
            <div class="banner">
                <h1>YeZi UI</h1>
                <h2>一个基于vue 3的UI库</h2>
                <p class="actions">
                    <a href="https://github.com/rustinliu/yezi-UI">GitHub</a>
                    <router-link to="/doc">Start</router-link>
                </p>
            </div>
            <div>
                <svg
                    class="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用 Vue 3 的 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-typescript"></use>
                </svg>
                <h3>基于 TypeScript</h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
    components: {
        Topnav,
    },
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;

.topnavAndBanner {
    background: linear-gradient(135deg, #42e695, #3bb2b8);
}
.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
}

.parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}
.parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}
.parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}
.parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}
@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
}
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }
}
.features {
    margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
        width: 800px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }
    > ul {
        display: flex;
        flex-wrap: wrap;
        > li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                'icon title'
                'icon text';
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;
            > svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }
            > h3 {
                grid-area: title;
                font-size: 28px;
            }
            > p {
                grid-area: text;
            }
        }
    }
}
.banner {
    color: white;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: #42e695;
            color: #fff;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
