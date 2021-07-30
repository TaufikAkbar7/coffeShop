<template>
  <button :class="className">{{ name }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: ['className', 'name']
}
</script>

<style>

</style>