<!--
    Game Scene By LancerComet at 21:18, 2016/9/13.
    # Carry Your World #
    ---
    Game Scene Component.
-->
<template lang="jade">
  div.game-scene-ctnr

    //- 游戏场景.
    div.game-scene.p-r.m-auto
      div.asset-ctnr.h-100
        div(v-for="asset in assetNodes", :class="asset")

    //- UI 界面容器.
    div.ui-widgets-ctnr.t-c
      button(@click="prevScene") prevScene
      button(@click="nextScene") nextScene

</template>

<style lang="stylus">
  $gameScene = {
    width: 450px
    height: 700px
    backgroundColor: aliceblue
  }

  .game-scene-ctnr
    .game-scene
      width: $gameScene.width
      height: $gameScene.height
      background-color: $gameScene.backgroundColor

      .asset-ctnr
        .bg
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
          background-size: cover
          z-index: 0

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

      prevScene () {
        this.storyLine.prevScene()
      },

      nextScene () {
        this.storyLine.nextScene()
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
