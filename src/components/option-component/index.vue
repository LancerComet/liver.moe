<!--
    Option Component By LancerComet at 10:42, 2016/9/14.
    # Carry Your World #
    ---
    Option Component.
-->
<template lang="jade">
  div.option-component-ctnr
    div.option-item(v-for="optionData in optionsData", @click="chooseOption(optionData)")
      span(v-text="optionData.label")
      span(v-text="optionData.content")
</template>

<style lang="stylus">
</style>

<script>
  /**
   *  传入参数: 对话数据存储数组对象.
   *  ---
   *  @typedef { Array } optionsData
   *  @example [ optionData, optionData, ... ]
   *
   *
   *  单个对话数据存储对象.
   *  ---
   *  @typedef { Object } optionData
   *  @property { String } label - 选项前缀.
   *  @property { String } content - 选项文本内容.
   *  @property { String } gotoUID - 该选项将要跳转节点的 UID.
   */
  export default {
    props: ['optionsData'],

    methods: {
      chooseOption (optionData) {
        console.log('chooseOption', optionData)
      }
    }
  }
</script>
