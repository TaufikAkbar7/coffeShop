<template>
  <Wrapper className="h-60 flex flex-col justify-center items-center mt-52 ml-44 z-20 border border-thirdColor
        rounded-2xl">
    <div
      class="
        container
        flex flex-col
        justify-center
        items-center
      "
    >
      <Title className="text-4xl mt-5 text-secondaryColor font-bold" title="Popular Now" />
      <div class="flex flex-row justify-center items-center p-5">
        <div
          v-for="item in items"
          :key="item.name"
          class="bg-primaryColor60 rounded-2xl h-36 flex flex-row p-4 ml-5"
        >
          <img class="rounded-2xl h-28  object-cover" src="../../assets/article/category-3.png" alt="item" />
          <div class="flex flex-col justify-center items-start p-5">
            <h2 class="text-secondaryColor font-semibold text-2xl">{{ item.name }}</h2>
            <p class="tracking-wide text-secondayColor50 text-md">{{ item.ing }}</p>
            <strong class="font-bold text-thirdColor tracking-wide text-2xl mt-5">{{ item.harga }}</strong>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import { Wrapper, Title } from '../atoms';

export default {
  name: 'Popular',
  components: {
    Wrapper,
    Title,
  },
  data: () => ({
    items: [
      { name: 'Home', ing: 'With Chocolate', harga: 5000 },
      { name: 'About', ing: 'With Chocolate', harga: 3000 },
      { name: 'Menu', ing: 'With Chocolate', harga: 4000 },
    ],
  }),
};
</script>

<style>
</style>
