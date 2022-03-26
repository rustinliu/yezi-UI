<demo>
基本使用
</demo>
<template>
    <Tabs v-model:selected="st">
        <Tab title="导航1">这是内容1</Tab>
        <Tab title="导航2">这是内容2</Tab>
        <Tab title="导航3">这是内容3</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../libs/Tabs.vue';
import Tab from '../libs/Tab.vue';
import { ref } from 'vue';
export default {
    components: {
        Tabs,
        Tab,
    },
    setup() {
        const st = ref('导航1');
        return {
            st,
        };
    },
};
</script>
