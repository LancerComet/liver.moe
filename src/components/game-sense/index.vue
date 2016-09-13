<!--
    Game Sense By LancerComet at 21:18, 2016/9/13.
    # Carry Your World #
    ---
    Game Sense Component.
-->
<template lang="jade">
  div.game-sense-ctnr

    //- 游戏场景.
    div.game-sense.m-auto
      div.asset-ctnr
        div(v-for="asset in assetNodes", :class="asset") {{asset}}

    //- UI 界面容器.
    div.ui-widgets-ctnr.t-c
      button(@click="prevSense") prevSense
      button(@click="nextSense") nextSense

</template>

<style lang="stylus" scoped>
  $gameSense = {
    width: 450px
    height: 600px
    backgroundColor: aliceblue
  }

  .game-sense-ctnr
    .game-sense
      width: $gameSense.width
      height: $gameSense.height
      background-color: $gameSense.backgroundColor

    .ui-widgets-ctnr
      margin-top: 20px
</style>

<script>
  import * as Model from '../../model'

  import initGameData from './methods.init-game-data'
  import assetGenerator from './computed.asset-generator'

  export default {
    data () {
      return {
        storyLine: new Model.StoryLine({}),
        assetNodes: {}
      }
    },

    methods: {
      initGameData,

      prevSense () {
        this.storyLine.prevSense()
      },

      nextSense () {
        this.storyLine.nextSense()
      }
    },

    watch: {
      'storyLine.$currentNode': assetGenerator
    },

    ready () {
      this.initGameData()
    }
  }
</script>
