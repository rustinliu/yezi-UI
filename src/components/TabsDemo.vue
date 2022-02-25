<template>
    <div>Tabs</div>
    <h1>示例一</h1>
    <Tabs>
        <Tab title="导航一">内容一</Tab>
        <Tab title="导航二">内容二</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../libs/Tabs.vue';
import Tab from '../libs/Tab.vue';
export default {
    components: {
        Tabs,
        Tab,
    },
};
</script>
