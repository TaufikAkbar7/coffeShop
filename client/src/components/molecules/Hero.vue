<template>
  <Wrapper
    className="min-h-screen flex flex-col justify-start items-center bg-primaryColor"
  >
    <Navbar />
    <div
      class="
        container
        mx-auto
        h-screen
        flex flex-row
        justify-around
        items-center
      "
    >
      <div class="w-2/4">
        <h1 class="text-thirdColor text-7xl font-roboto leading-normal text-left">
          START YOU DAY WITH COFFE
        </h1>
        <p class="text-white text-lg mt-5 leading-7 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <router-link to="/">
        <div class="mt-8 w-36 bg-thirdColor hover:bg-transparent text-white hover:border-thirdColor border-thirdColor border font-bold p-3 rounded text-md">
          <p>Shop Now</p>
        </div>
        </router-link>
      </div>
      <div class="">
        <img
          width="700"
          class="object-cover"
          src="../../assets/coffe_cup.png"
          alt="img hero"
        />
      </div>
    </div>
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
