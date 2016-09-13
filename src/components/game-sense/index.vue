<!--
    Game Sense By LancerComet at 21:18, 2016/9/13.
    # Carry Your World #
    ---
    Game Sense Component.
-->
<template lang="jade">
  div.game-sense-ctnr
    div.game-sense.m-auto
    div.ctrl-btns-ctnr.t-c
      button(@click="") prevSense
      button(@click="") nextSense
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

    .ctrl-btns-ctnr
      margin-top: 20px
</style>

<script>
  export default {
    methods: {
      prevSense () {

      },

      nextSense () {

      }
    }
  }
</script>
