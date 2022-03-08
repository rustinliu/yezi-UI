<template>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo" />
    <Demo :component="Tabs2Demo" />
    <Attr :attributes="data1" title="Tabs Attributes" />
    <Attr :attributes="data2" title="Tab Attributes" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';
import Tabs2Demo from './Tabs2.demo.vue';
import Attr from './Attrs.vue';
export default {
    components: {
        Demo,
        Attr,
    },
    setup() {
        const data1 = [
            {
                parameter: 'selected',
                description: '当前选中标签的 title 属性',
                type: 'string',
            },
            {
                parameter: 'theme',
                description: 'Tabs 的样式',
                type: 'string',
                options: 'normal / card',
                default: 'normal',
            },
        ];
        const data2 = [
            {
                parameter: 'title',
                description: 'Tab 的标题',
                type: 'string',
            },
        ];
        return {
            Tabs1Demo,
            Tabs2Demo,
            data1,
            data2,
        };
    },
};
</script>
