<template>
  <div class="page">
    <text class="font title">Hello World!</text>
  </div>
</template>

<script>
import Gateway from './assets/js/gateway.js'
import Common from './assets/js/common'

export default {
  name: 'App',
  mixins: [ Common, Gateway ],
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
.font {
  font-family: PingFang ExtraLight;
}

.page {
  width: 750px;
  height: 422px;
  background-color: #8b8b8b;
  justify-content: center;
}

.title {
  text-align: center;
}
</style>
