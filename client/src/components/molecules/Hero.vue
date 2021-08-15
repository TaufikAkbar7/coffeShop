<template>
  <Wrapper
    className="min-h-screen flex flex-col justify-start items-start bg-primaryColor"
  >
  <Navbar />
   <!-- <div class="container mx-auto bg-red-500">
     <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
      <img class="object-cover" width="450" src="../../assets/article/add-item-1.png" alt="aaa">
    </slide>
    <slide>
      <img class="object-cover" src="../../assets/article/add-item-2.png" alt="aaa">
    </slide>
  </carousel>
   </div> -->
  </Wrapper>
</template>

<script>
import { Wrapper, Navbar } from '../atoms';

export default {
  name: 'Hero',
  components: {
    Wrapper,
    Navbar,
  },
};
</script>

<style>

</style>
