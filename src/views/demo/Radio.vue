<template>
  <div>
    <h1>Radio</h1>
    <p>单选框。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于在多个备选项中选中单个状态。</li>
      <li>和 <code>Select</code> 的区别是， <code>Radio</code> 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          :data="{ value: baseValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="color.code"
          :render="color.render"
          :title="color.title"
          :desc="color.desc"
          :data="{ value: colorValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="group.code"
          :render="group.render"
          :title="group.title"
          :desc="group.desc"
          :data="{ value: groupValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
          :data="{ value: baseValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="before.code"
          :render="before.render"
          :title="before.title"
          :desc="before.desc"
          :data="{
            datas: myLoadingDatas,
            value: beforeValue,
            beforeHandle: beforeHandle,
          }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Radio API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Radio Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>RadioGroup API</h2>
    <ApiTable :data="groupProps"></ApiTable>
    <h2>RadioGroup Method</h2>
    <MethodTable :data="groupMethods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base, { DataEntity } from '@/views/code/radio/base';
import disabled from '@/views/code/radio/disabled';
import before, { myLoadingDatas } from '@/views/code/radio/before';
import color from '@/views/code/radio/color';
import group from '@/views/code/radio/group';
import {
  props,
  methods,
  groupProps,
  groupMethods,
} from '@/views/api/radio';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface GroupOptsEntity {
  value: string;
  age: string;
  label: string;
  disabled?: boolean;
  more?: boolean;
}

interface ParamsEntity {
  ev: MouseEvent;
  value: string | number | boolean;
  label: string | number | boolean;
}

interface ChangeParamsEntity {
  attr: string;
  value: string;
}

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    MethodTable,
    WDemo,
  },
})
export default class RadioView extends Vue {
  Radio: string = TITLE.Radio;

  base: ApiEntity = base;

  disabled: ApiEntity = disabled;

  color: ApiEntity = color;

  before: ApiEntity = before;

  group: ApiEntity = group;

  myLoadingDatas: DataEntity[] = myLoadingDatas;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  groupProps: PropsEntity[] = groupProps;

  groupMethods: MethodsEntity[] = groupMethods;

  baseValue: string = '苹果';

  colorValue: string = '更多';

  beforeValue: string = '鸭梨';

  groupValue: string = '鸭梨';

  change({ attr, value }: ChangeParamsEntity) {
    (this as any)[attr] = value;
  }

  beforeHandle({ label }: ParamsEntity) {
    const opt = this.myLoadingDatas.find((data: any) => data.label === label);
    const optIndex = this.myLoadingDatas.findIndex((data: any) => data.label === label);
    /* eslint-disable no-alert */
    this.myLoadingDatas.splice(optIndex, 1, Object.assign(opt, {
      loading: true,
    }));

    return new Promise((resolve) => {
      setTimeout(() => {
        this.myLoadingDatas.splice(optIndex, 1, Object.assign(opt, {
          loading: false,
        }));
        if (window.confirm('你确定选择吗？')) {
          resolve();
        }
      }, 1000);
    });
  }
}
</script>
