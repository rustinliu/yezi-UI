<template>
    <h1>Dialog示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
    <Demo :component="Dialog3Demo" />
    <Attr :attributes="data" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Dialog3Demo from './Dialog3.demo.vue';
import Attr from './Attrs.vue';
export default {
    components: {
        Demo,
        Attr,
    },

    setup() {
        const data = [
            {
                parameter: 'visible',
                description: '对话框是否可见',
                type: 'boolean',
                options: 'true / false',
                default: 'false',
            },
            {
                parameter: 'title',
                description: '对话框的标题',
                type: 'string',
            },
            {
                parameter: 'overlayClose',
                description: '控制点击遮罩时是否关闭对话框',
                type: 'boolean',
                options: 'true / false',
                default: 'false',
            },
            {
                parameter: 'onConfirm',
                description: '点击确定后执行的回调',
                type: 'function',
            },
            {
                parameter: 'onCancel',
                description: '点击取消后执行的回调',
                type: 'function',
            },
        ];
        return {
            Dialog1Demo,
            Dialog2Demo,
            Dialog3Demo,
            data,
        };
    },
};
</script>
