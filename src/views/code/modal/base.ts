import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<w-modal v-modal="baseStatus" title="Basic Modal">
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</w-modal>`,
  render: (
    h: Function,
    context: any,
  ) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Button, {
          props: {
            click: () => {
              context.props.change({
                attr: 'baseStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
            title: 'Basic Modal',
          },
          on: {
            change: (status: boolean) => {
              context.props.change({
                attr: 'baseStatus',
                status,
              });
            },
          },
        }, [
          h('p', 'Some contents...'),
          h('p', 'Some contents...'),
          h('p', 'Some contents...'),
        ]),
      ],
    );
  },
};

export default base;
