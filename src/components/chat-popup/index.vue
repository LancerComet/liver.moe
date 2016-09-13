<!--
    index By LancerComet at 22:46, 2016/9/13.
    # Carry Your World #
    ---
    Chat Popup Component.
-->
<template lang="jade">
  div.chat-popup-ctnr.w-100
    div.chat-popup.m-auto
      div.name(v-text="name")
      div.content(v-text="content")
</template>

<style lang="stylus" scoped>
  $chatPopup = {
    width: 500px
    height: 236px
  }

  .chat-popup
    width: $chatPopup.width
    height: $chatPopup.height
    background-image: url('./assets/chat-popup-bg.png')
    background-repeat: no-repeat
    background-size: contain
</style>

<script>
    export default {
      props: ['name', 'content']
    }
</script>
