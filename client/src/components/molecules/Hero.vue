<template>
  <Wrapper
    className="min-h-screen flex flex-col justify-start items-start bg-primaryColor hero"
  >
  <Navbar />
    <div class="flex flex-col items-center w-1/2 mt-10">
      <h1
          class="
            font-bold
            text-7xl text-secondaryColor
            font-roboto
            leading-relaxed
            mb-12
          "
        >
          Coffe For <br />The Everyday <br />Advanture
        </h1>
        <!-- <p class="text-2xl text-gray-400">{{ subTitle }}</p> -->
        <div class="flex flex-row justify-between items-center">
          <Button
            className="bg-thirdColor hover:bg-transparent text-white hover:border-thirdColor border-thirdColor border font-bold py-2 px-4 rounded"
            :name="buttonName"
          />
          <Button
            className="bg-transparent hover:bg-thirdColor text-white border-thirdColor border font-bold py-2 px-4 rounded ml-10"
            :name="buttonName2"
          />
        </div>
    </div>
    <Popular/>
  </Wrapper>
</template>

<script>
import { Wrapper, Button, Navbar } from '../atoms';
import Popular from './Popular.vue';

export default {
  name: 'Hero',
  components: {
    Wrapper,
    Button,
    Navbar,
    Popular,
  },
  data: () => ({
    subTitle: 'choose and taste delicious coffe from the best beans',
    buttonName: 'Order Now',
    buttonName2: 'Learn About Us',
  }),
};
</script>

<style>
.hero {
  background-image: url("../../assets/website/header-hero.png");
  background-repeat: no-repeat;
  background-position: right top;
  position: relative;
}
</style>
