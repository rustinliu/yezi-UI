<template>
    <div>
        <h1>Button 示例</h1>
        <Demo :component="Button1Demo" />
        <Demo :component="Button2Demo" />
        <Demo :component="Button3Demo" />
        <Demo :component="Button4Demo" />
        <Demo :component="Button5Demo" />
        <Demo :component="Button6Demo" />
        <Attr :attributes="data" />
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import Button6Demo from './Button6.demo.vue';
import Attr from './Attrs.vue';
export default {
    components: { Demo, Attr },
    setup() {
        const data = [
            {
                parameter: 'theme',
                description: '按钮的类型',
                type: 'string',
                options: 'button / link / text',
                default: 'button',
            },
            {
                parameter: 'level',
                description: '按钮的级别',
                type: 'string',
                options: 'normal / main / warning / danger',
                default: 'normal',
            },
            {
                parameter: 'size',
                description: '按钮的尺寸',
                type: 'string',
                options: 'small / normal / big',
                default: 'normal',
            },

            {
                parameter: 'disabled',
                description: '按钮是否禁用',
                type: 'boolean',
                options: 'true / false',
                default: 'false',
            },
            {
                parameter: 'loading',
                description: '按钮是否处于 loading 状态',
                type: 'boolean',
                options: 'true / false',
                default: 'false',
            },
        ];
        return {
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo,
            Button6Demo,
            data,
        };
    },
};
</script>
