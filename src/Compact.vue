<template>
  <div class="vc-compact">
    <ul class="vc-compact-colors">
      <li class="vc-compact-color-item" v-for="c in palette" :key="c"
        @click="handlerClick(c)"
        :class="{'vc-compact-color-item--white': c === '#FFFFFF' }"
        :style="{background: c}">
        <div class="vc-compact-dot" v-show="c === pick"></div>
      </li>
    </ul>
  </div>
</template>

<script>
function _colorChange (data) {
  return data.toUpperCase()
}

const defaultColors = [
  '#000000', '#FFFFFF', '#0000FF', '#00008B', '#008000', '#556B2F',
  '#FF0000', '#FFFF00'
]

export default {
  name: 'Compact',
  props: {
    palette: {
      type: Array,
      default () {
        return defaultColors
      }
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    colors: {
      get () {
        return this.val
      },
      set (newVal) {
        this.val = newVal
        this.$emit('input', newVal)
      }
    },
    pick () {
      return this.colors
    }
  },
  watch: {
    value (newVal) {
      this.val = _colorChange(newVal)
    }
  },
  methods: {
    handlerClick (c) {
      this.colorChange(c)
    },
    colorChange (data) {
      this.colors = _colorChange(data)
    }
  }
}

</script>

<style>
.vc-compact {
  padding-top: 5px;
  padding-left: 5px;
  width: 205px;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-compact-colors {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-compact-color-item {
  list-style: none;
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.vc-compact-color-item--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-compact-color-item--white .vc-compact-dot {
  background: #000;
}
  
.vc-compact-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
</style>
