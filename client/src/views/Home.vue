<template>
  <div class='home'>
   <Hero/>
   <div class="bg-fourColor">
     <About/>
     <Menu/>
   </div>
  </div>
</template>

<script>
import { Hero, About, Menu } from '../components/molecules';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Menu,
  },
};
</script>
