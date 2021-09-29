<template>
  <nav class="min-w-full relative flex flex-wrap items-center justify-between px-2 py-3 mt-10">
    <div class="container px-4 mx-28 flex flex-wrap items-center">
      <div class="w-full relative flex justify-between items-center lg:w-auto  px-4">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" href="#pablo">
          <img src="../../assets/website/logo.png" alt="Logo Coffe">
        </a>
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="item in items" :key="item.name" class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">{{ item.name }}</span>
            </a>
          </li>
        </ul>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-start">
      </div>
      <button class="mr-7">
        <MenuIcon fillColor="#FFFFFF"/>
      </button>
        <Button
          className="bg-thirdColor hover:bg-transparent text-white hover:border-thirdColor border-thirdColor border font-bold py-2 px-4 rounded"
          :name="buttonName"
        />
        <Button
          className="bg-transparent hover:bg-thirdColor text-white border-thirdColor border font-bold py-2 px-4 rounded ml-5"
          :name="buttonName2"
        />
    </div>
  </nav>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Shopping.vue';
import Button from './Button.vue';

export default {
  name: 'Navbar',
  components: {
    Button,
    MenuIcon,
  },
  data() {
    return {
      showMenu: false,
      items: [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Menu' },
        { name: 'Apps' },
        { name: 'Contact' },
      ],
      buttonName: 'Login',
      buttonName2: 'Sign Up',
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
