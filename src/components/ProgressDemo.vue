<template>
    <h1>Progress 示例</h1>
    <Demo :component="ProgressDemo1" />
    <Attr :attributes="data" />
</template>

<script lang="ts">
import ProgressDemo1 from './Progress1.demo.vue';
import Demo from './Demo.vue';
import Attr from './Attrs.vue';
export default {
    components: {
        Demo,
        Attr,
    },
    setup() {
        const data = [
            {
                parameter: 'percentage',
                description: '进度条的百分比',
                type: 'number',
                options: '0-100',
                default: '10',
            },
        ];
        return {
            ProgressDemo1,
            data,
        };
    },
};
</script>
