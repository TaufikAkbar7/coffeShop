<template>
  <div :class="className">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: ['className'],
};
</script>

<style>

</style>
