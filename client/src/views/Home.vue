<template>
  <div class='home'>
   <Hero/>
   <About/>
  </div>
</template>

<script>
import { Hero, About } from '../components/molecules';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
  },
};
</script>
