<!--
    index By LancerComet at 22:46, 2016/9/13.
    # Carry Your World #
    ---
    Chat Popup Component.
-->
<template lang="jade">
  div.chat-popup-ctnr.w-100
    div.chat-popup.m-auto.b-box
      div.name(v-text="name")
      div.content(v-text="content")
</template>

<style lang="stylus" scoped>
  $chatPopup = {
    width: 500px
    height: 236px
    padding: 20px
    color: #fff
  }

  .chat-popup
    width: $chatPopup.width
    height: $chatPopup.height
    padding: $chatPopup.padding
    background-image: url('./assets/chat-popup-bg.png')
    background-repeat: no-repeat
    background-size: contain
    color: $chatPopup.color
    font-family: "微软雅黑"

    .name
      font-size: 18px

    .content
      font-size: 20px
</style>

<script>
    export default {
      props: ['name', 'content']
    }
</script>
