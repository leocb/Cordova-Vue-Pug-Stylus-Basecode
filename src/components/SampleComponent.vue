<template lang="pug">
  #steps
    v-stepper(v-model="$route.params.currentStep")
      v-stepper-header
        template(v-for="n in steps")
          v-stepper-step(:complete="$route.params.currentStep > n", :step="n")
          v-divider(v-if="n !== steps")

      v-stepper-items
        v-stepper-content(step="1")
          h2 First step, select one:
          v-btn.black--text(large block color="accent" @click="gotoStep(2)") Option one
          v-btn.black--text(large block color="accent" @click="gotoStep(2)") Two
          v-btn.black--text(large block color="accent" @click="gotoStep(2)") More than two, but less than four
          v-btn.black--text(large block color="accent" @click="gotoStep(2)") 4

          v-text-field(label="Text Persist test" placeholder="type here!" v-model="persist")
          |{{persist}}

        v-stepper-content(step="2")
          h2 This is the second step
          v-btn.black--text(large block color="accent" @click="gotoStep(3)") Valve wont go past this step
          v-btn.black--text(large block color="accent" @click="gotoStep(3)") don't know why.

        v-stepper-content(step="3")

          h2 and this should be the third...
          v-btn.black--text(large block color="accent" @click="gotoStep(3)") Now try the "back" button
          v-btn.black--text(large block color="accent" @click="gotoStep(1)") Or tap here to programatically go back

</template>

<script>
export default {
  name: 'SampleComponent',
  data() {
    return {
      steps: 3,
      persist: '',
      room: null,
      dimensions: null,
      items: null
    }
  },
  methods: {
    gotoStep(n) {
      this.$router.push('/sample/' + n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
