<template lang="pug">
  #home
    v-container(fluid)
      v-flex
          h2#welcomeMessage Welcome to Leocb's basecode!
          v-btn.black--text(large block color="accent" to="/sample/1") Tap to Begin!
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
