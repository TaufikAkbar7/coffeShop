<template>
  <Wrapper className="min-h-screen bg-primaryColor">
    <img class="absolute left-0 mt-16" src="../../assets/website/leaf.png" alt="leaf">
      <div class="container mx-auto flex flex-row justify-around items-start py-28">
        <div class="flex flex-col items-start px-10">
          <Title v-for="item in items" :key="item.title" :title="item.title" className="font-roboto text-5xl font-bold text-secondaryColor leading-relaxed"/>
          <div v-for="data in prosedur" :key="data.id" class="relative flex flex-row w-full justify-between items-center mt-12">
            <div v-if="data.id <='02'" class="absolute top-0 left-7 border border-dashed border-thirdColor h-28"></div>
            <div class="font-bold rounded-full z-10 bg-thirdColor p-3 text-secondaryColor text-2xl">{{ data.id }}</div>
            <div class="flex flex-col items-start ml-7">
              <h1 class="font-semibold text-secondaryColor text-3xl">
              {{ data.title }}
            </h1>
            <p class="text-secondaryColor50 text-sm">{{ data.text }}</p>
            </div>
          </div>
        </div>
        <img src="../../assets/website/great-process.png" alt="great process">
      </div>
  </Wrapper>
</template>

<script>
import { Wrapper, Title } from '../atoms';

export default {
  name: 'Install',
  components: {
    Wrapper,
    Title,
  },
  data: () => ({
    items: [
      { title: 'We love' },
      { title: 'Great process' },
    ],
    prosedur: [
      { id: '01', title: 'Order Your Menu', text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.' },
      { id: '02', title: 'Your Order Will Be Sent', text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.' },
      { id: '03', title: 'Take Your Order At The Door', text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.' },
    ],
  }),
};
</script>

<style>

</style>
