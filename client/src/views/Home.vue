<template>
  <div class='home'>
   <Hero/>
   <div class="bg-fourColor">
     <About/>
     <Menu/>
   </div>
   <Install/>
  </div>
</template>

<script>
import {
  Hero, About, Menu, Install,
} from '../components/molecules';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Menu,
    Install,
  },
};
</script>
