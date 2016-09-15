<!--
    Game Scene By LancerComet at 21:18, 2016/9/13.
    # Carry Your World #
    ---
    Game Scene Component.
-->
<template lang="jade">
  div.game-scene-ctnr
    //- 游戏场景.
    div.game-scene.p-r.m-

      //- 离屏缓冲节点.
      div.off-screen-cache.v-hidden
        div(v-for="asset in storyLine.$currentNode.$next.$assets", :class="asset")
        div(v-for="linkedOptionNode in storyLine.findLinkedNodes()")
          div(v-for="asset in linkedOptionNode.$assets", :class="asset")

      //- 场景物件.
      div.asset-ctnr.h-100
        div(v-for="asset in assetNodes", :class="asset")

      //- 对话组件.
      chat-popup.chat-popup-component.p-a(
        v-for="dialog in storyLine.$currentNode.dialog",
        v-show="storyLine.$currentNode.$type === 'dialog'",
        :name="dialog.character",
        :content="dialog.content"
      )

      //- 选项组件.
      option-component.option-component(v-if="storyLine.$currentNode.$type === 'option'", :options-data="storyLine.$currentNode.options")

    //- UI 界面容器.
    div.ui-widgets-ctnr.t-c
      button(@click="prevScene") prevScene
      button(@click="nextScene") nextScene

</template>

<style lang="stylus">
  $gameScene = {
    width: 600px
    height: 800px
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

    .chat-popup-component
      bottom: 20px
      left: 0
      z-index: 10

    .ui-widgets-ctnr
      margin-top: 20px
</style>

<script>
  import * as Model from '../../model'

  import initGameData from './methods.init-game-data'
  import assetGenerator from './computed.asset-generator'

  import ChatPopup from '../chat-popup/index.vue'
  import OptionComponent from '../option-component/index.vue'

  export default {
    data () {
      return {
        storyLine: new Model.StoryLine({}),
        assetNodes: {}
      }
    },

    components: {
      ChatPopup, OptionComponent
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
