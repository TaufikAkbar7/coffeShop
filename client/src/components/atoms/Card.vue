<template>
  <div class="flex flex-wrap items-center mt-10 mb-12">
    <div
      v-for="item in data"
      :key="item.name"
      class="w-96 mx-3 p-3 bg-fiveColor rounded-2xl"
    >
      <div class="p-3 items-center">
          <img
        class="rounded-2xl object-contain h-56 w-80"
        :src="'http://localhost:4000/' + item.image"
        alt="img menu"
      />
      </div>
      <div class="flex flex-col justify-start items-center p-5">
        <h1
          class="
            text-2xl
            font-roboto font-bold
            text-secondaryColor
            tracking-wide
          "
        >
          {{ item.name }}
        </h1>
        <div class="flex flex-wrap justify-between items-end w-full">
            <Button
            name="Add to cart"
            className="mt-8 bg-thirdColor hover:bg-transparent text-white hover:border-thirdColor border-thirdColor border font-bold p-2 rounded text-sm"
          />
            <p class="text-thirdColor text-xl mt-4">
          Rp. {{ item.harga }}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Card',
  props: ['data'],
  components: { Button },
};
</script>

<style>
</style>
