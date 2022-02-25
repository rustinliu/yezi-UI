<template>
    <div>
        <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
        <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
    </div>
</template>

<script lang="ts">
import Tab from '../libs/Tab.vue';
export default {
    setup(props, context) {
        const defaults = context.slots.default();

        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs only accepts Tab as children');
            }
        });
        const titles = defaults.map((tag) => {
            return tag.props.title;
        });
        return {
            defaults,
            titles,
        };
    },
};
</script>
