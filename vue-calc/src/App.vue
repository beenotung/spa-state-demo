<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      a: 1,
      b: 1,
      c: 0, // to be overridden by calcC()
    }
  },
  created() { this.calcC() },
  methods: {
    calcC() { this.c = this.a + this.b },
  },
  watch: {
    a() { this.calcC() },
    b() { this.calcC() },
  },
})
</script>

<template>
  <input type="number" v-model="a">
  +
  <input type="number" v-model="b">
  =
  <span class='answer'>{{ c }}</span>
</template>

<style>
.answer {
  color: green;
}
</style>
