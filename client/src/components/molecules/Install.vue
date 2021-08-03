<template>
  <Wrapper className="min-h-screen pb-32 bg-primaryColor">
    <img
      class="absolute left-0 mt-16"
      src="../../assets/website/leaf.png"
      alt="leaf"
    />
    <div
      class="container mx-auto flex flex-row justify-around items-start py-28"
    >
      <div class="flex flex-col items-start px-10">
        <Title
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          className="font-roboto text-5xl font-bold text-secondaryColor leading-relaxed"
        />
        <div
          v-for="data in prosedur"
          :key="data.id"
          class="
            relative
            flex flex-row
            w-full
            justify-between
            items-center
            mt-12
          "
        >
          <div
            v-if="data.id <= '02'"
            class="
              absolute
              top-0
              left-7
              border border-dashed border-thirdColor
              h-28
            "
          ></div>
          <div
            class="
              font-bold
              rounded-full
              z-10
              bg-thirdColor
              p-3
              text-secondaryColor text-2xl
            "
          >
            {{ data.id }}
          </div>
          <div class="flex flex-col items-start ml-7">
            <h1 class="font-semibold text-secondaryColor text-3xl">
              {{ data.title }}
            </h1>
            <p class="text-secondaryColor50 text-sm">{{ data.text }}</p>
          </div>
        </div>
      </div>
      <img src="../../assets/website/great-process.png" alt="great process" />
    </div>
    <div
      class="
        mx-auto
        w-5/6
        h-96
        flex flex-row
        justify-evenly
        items-center
        border border-thirdColor
        rounded-2xl
      "
    >
      <img
        class=""
        src="../../assets/website/handphone.png"
        alt="img install"
      />
      <div class="flex flex-wrap item-start  w-5/12">
        <Title
          title="Download App"
          className="text-thirdColor font-semibold text-2xl"
        />
        <div class="flex flex-col items-start">
          <h1
          v-for="data1 in downloads"
          :key="data1.title"
          class="font-bold text-5xl text-secondaryColor leading-normal"
        >
          {{ data1.title }}
        </h1>
        <p class="text-sm text-secondaryColor50">Download our app and enjoy the services provided to</p>
        <p class="text-sm text-secondaryColor50">make it easier for you to enjoy your food</p>
        </div>
        <div class="flex flex-row justify-start items-start mt-10">
          <a href="#">
            <img src="../../assets/website/google-play.png" alt="img google" />
          </a>
          <a href="#" class="ml-10">
            <img src="../../assets/website/app-store.png" alt="app store" />
          </a>
        </div>
      </div>
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
    items: [{ title: 'We love' }, { title: 'Great process' }],
    prosedur: [
      {
        id: '01',
        title: 'Order Your Menu',
        text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.',
      },
      {
        id: '02',
        title: 'Your Order Will Be Sent',
        text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.',
      },
      {
        id: '03',
        title: 'Take Your Order At The Door',
        text: 'Eget integer hac aliquam pretium non imperdiet dui, dui mattis.',
      },
    ],
    downloads: [{ title: 'simple way to' }, { title: 'order your coffe' }],
  }),
};
</script>

<style>
</style>
