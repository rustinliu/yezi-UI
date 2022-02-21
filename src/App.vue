<template>
    <div>
        导航栏 | <router-link to="/">App1</router-link>| <router-link to="/xxx">App2</router-link>
    </div>
    <hr />
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
};
</script>
