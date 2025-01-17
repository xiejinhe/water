const url = 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7';

export const props = [
  {
    param: 'placeholder',
    desc: '输入框占位文本',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置输入框大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'type',
    desc: `设置 <code>input</code> 原生的 <code>type</code> 值，可选值请参考 <a class="link" target="_blank" href="${url}">HTML 标准</a>`,
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '输入框失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'error',
    desc: '当返回为 true 的时候，输入框为错误状态。',
    type: 'Function',
    require: '否',
    default: '() => false',
  },
  {
    param: 'change',
    desc: '输入时触发的方法，返回 {Event对象,输入的值}({ev,value})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,输入的值}({ev,value})',
  },
];
