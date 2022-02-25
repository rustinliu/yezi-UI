<template>
    <div>Tabs</div>
    <h1>示例一</h1>
    <Tabs>
        <Table title="导航一">内容一</Table>
        <Table title="导航二">内容二</Table>
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
