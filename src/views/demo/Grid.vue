<template>
  <div>
    <h1>{{ Grid }}</h1>
    <p>24 栅格系统。</p>
    <h2>概述</h2>
    <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
    <ul>
      <li>通过 <code>row</code> 在水平方向建立一组 <code>column</code>（简写 col）</li>
      <li>你的内容应当放置于 <code>col</code> 内，并且，只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li>
      <li>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <code>.col-8</code> 来创建</li>
      <li>如果一个 <code>row</code> 中的col总和超过 24，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="gutter.code"
          :render="gutter.render"
          :title="gutter.title"
          :desc="gutter.desc"
        ></WDemo>
        <WDemo
          :code="offset.code"
          :render="offset.render"
          :title="offset.title"
          :desc="offset.desc"
        ></WDemo>
        <WDemo
          :code="sort.code"
          :render="sort.render"
          :title="sort.title"
          :desc="sort.desc"
        ></WDemo>
        <WDemo
          :code="justify.code"
          :render="justify.render"
          :title="justify.title"
          :desc="justify.desc"
        ></WDemo>
        <WDemo
          :code="align.code"
          :render="align.render"
          :title="align.title"
          :desc="align.desc"
        ></WDemo>
        <WDemo
          :code="order.code"
          :render="order.render"
          :title="order.title"
          :desc="order.desc"
        ></WDemo>
        <WDemo
          :code="media.code"
          :render="media.render"
          :title="media.title"
          :desc="media.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Row API</h2>
    <ApiTable :data="rowProps"></ApiTable>
    <h2>Col API</h2>
    <ApiTable :data="colProps"></ApiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/grid/base';
import gutter from '@/views/code/grid/gutter';
import offset from '@/views/code/grid/offset';
import sort from '@/views/code/grid/sort';
import justify from '@/views/code/grid/justify';
import align from '@/views/code/grid/align';
import order from '@/views/code/grid/order';
import media from '@/views/code/grid/media';
import { rowProps, colProps } from '@/views/api/grid';
import { PropsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class GridView extends Vue {
  Grid: string = TITLE.Grid;

  base: ApiEntity = base;

  gutter: ApiEntity = gutter;

  offset: ApiEntity = offset;

  sort: ApiEntity = sort;

  justify: ApiEntity = justify;

  align: ApiEntity = align;

  order: ApiEntity = order;

  media: ApiEntity = media;

  rowProps: PropsEntity[] = rowProps;

  colProps: PropsEntity[] = colProps;
}
</script>

<style lang="scss">
@import '~assets/style/grid.scss';
</style>
