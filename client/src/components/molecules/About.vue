<template>
  <Wrapper
    className="min-h-screen flex flex-col justify-start items-center"
  >
    <div class="w-1220px">
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col justify-center items-start font-roboto">
          <Title
            class="text-thirdColor font-semibold mt-10 text-2xl"
            title="About Us"
          />
          <h1 class="font-bold text-5xl text-secondaryColor leading-normal">
            Explore All Flavors <br /><span class="mr-20"
              >of Coffe with us</span
            >
          </h1>
        </div>
        <div class="flex flex-col justify-end items-start p-5">
          <p
            v-for="item in items"
            :key="item.name"
            class="text-white text-sm"
          >
            {{ item.name }}
          </p>
          <Button
            name="Explore Now"
            className="mt-8 bg-thirdColor hover:bg-transparent text-white hover:border-thirdColor border-thirdColor border font-bold py-3 px-7 rounded text-2xl"
          />
        </div>
      </div>
      <div class="flex flex-row items-start justify-between mt-10">
        <img
          class="rounded-2xl object-cover"
          src="../../assets/article/index-about-us-1.png"
          alt="img about"
        />
        <div class="flex flex-col justify-start items-center rounded-2xl pb-5 bg-fiveColor">
          <img
          class="rounded-t-2xl object-cover"
          src="../../assets/article/index-about-us-2.png"
          alt="img about"
        />
        <h1 class="text-secondaryColor text-xl font-semibold p-3">Cofsop Coffe</h1>
        <p class="text-secondaryColor50 text-sm leading-relaxed">This is the best coffee ever, with a great<br/> blend of coffe produces spectacular flavor</p>
        </div>
        <img
          class="rounded-2xl object-cover"
          src="../../assets/article/index-about-us-3.png"
          alt="img about"
        />
      </div>
    </div>
  </Wrapper>
</template>

<script>
import { Wrapper, Title, Button } from '../atoms';

export default {
  name: 'About',
  components: {
    Wrapper,
    Title,
    Button,
  },
  data: () => ({
    items: [
      { name: "We'll show you how the best coffee is. the best coffee" },
      { name: 'that comes from the best beans' },
    ],
  }),
};
</script>

<style>
</style>
