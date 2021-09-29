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
      <Title class="text-thirdColor font-semibold text-2xl" title="Our Popular Product" />
      <h1 class="font-bold text-5xl text-secondaryColor leading-relaxed">
        Enjoy a new blend of <br />
        coffee styles
      </h1>
      <Card :data="items"/>
    </div>
  </Wrapper>
</template>

<script>
import axios from 'axios';
import { Wrapper, Title, Card } from '../atoms';

export default {
  name: 'Menu',
  components: {
    Wrapper,
    Title,
    Card,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    setItems(data) {
      this.items = data;
    },
  },
  created() {
    axios.get('http://localhost:4000/products?perPage=6')
      .then((response) => {
        this.setItems(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>
