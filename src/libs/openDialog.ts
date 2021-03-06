import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';
export const openDialog = (options) => {
    const { title, content, ok, cancel, overlayClose } = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        app.unmount('app');
        div.remove();
    };
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    ok,
                    cancel,
                    overlayClose,
                },
                { title, content }
            );
        },
    });
    app.mount(div);
};
