<template>
  <h1 :class="className">{{title}}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: ['className', 'title'],
};
</script>

<style>

</style>
