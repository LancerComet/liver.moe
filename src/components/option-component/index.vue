<!--
    Option Component By LancerComet at 10:42, 2016/9/14.
    # Carry Your World #
    ---
    Option Component.
-->
<template lang="jade">
  div.option-component-ctnr.p-a
    button.option-item(v-for="optionData in optionsData", @click="chooseOption(optionData)")
      span(v-text="optionData.label")
      span(v-text="optionData.content")
</template>

<style lang="stylus">
  $optionComponent = {
    width: 400px
    height: 400px
  }

  .option-component-ctnr
    width: $optionComponent.width
    height: $optionComponent.height
    top: 50%
    left: 50%
    margin: ($optionComponent.width * -.5) ($optionComponent.height * -.5)
    z-index: 1

    .option-item
      display: block
      width: 100%
      margin: 10px 0
      padding: 20px 0

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
        const gotoUID = optionData.gotoUID
        const storyLine = this.$parent.storyLine  // 当前直接从父级组件获取 storyLine.
        if (gotoUID) {
          storyLine.nextScene(gotoUID)
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
