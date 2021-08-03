<template>
  <Wrapper className="min-h-screen">
    <div
      class="
        container
        mx-auto
        flex flex-col
        items-center
        justify-center
        mt-28
        font-roboto
      "
    >
      <Title class="text-thirdColor font-semibold text-2xl" title="Menu" />
      <h1 class="font-bold text-5xl text-secondaryColor leading-relaxed">
        Enjoy a new blend of <br />
        coffee styles
      </h1>
      <div class="flex flex-row items-center mt-10">
        <div v-for="item in items" :key="item.name" class="w-96 mx-3 bg-fiveColor rounded-2xl">
          <img class="rounded-t-2xl object-contain" width="450" src="../../assets/article/detail-1.png" alt="img menu" />
          <div class="flex flex-col justify-start items-center p-5">
              <h1 class="text-2xl font-roboto font-bold text-secondaryColor tracking-wide">
              {{ item.name }}
            </h1>
            <p class="text-secondaryColor50 text-sm mt-4">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import { Wrapper, Title } from '../atoms';

export default {
  name: 'Menu',
  components: {
    Wrapper,
    Title,
  },
  data: () => ({
    items: [
      { name: 'Late Art With milk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et' },
      { name: 'Cappucino With Chocolate', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et' },
      { name: 'Cappucino With Oak Milk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et' },
    ],
  }),
};
</script>

<style>
</style>
