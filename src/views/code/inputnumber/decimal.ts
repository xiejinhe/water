import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '小数',
  desc: '添加 <code>step</code> 属性即可。',
  code: codeCommon({ attr: ':step="0.11"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'decimalValue',
    props: {
      step: 0.11,
    },
  }),
};

export default base;
