<!--
    Root Component By LancerComet at 21:14, 2016/9/13.
    # Carry Your World #
    ---
    Root Component.
-->
<template lang="jade">
  div.app-ctnr
    h1 Liver.Moe
    game-sense
</template>

<style lang="stylus">
</style>

<script>
  import * as Component from './components'

  export default {
    components: {
      'game-sense': Component.GameSense
    }
  }
</script>
