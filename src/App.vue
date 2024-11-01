<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-500 text-white px-4">
    <img :src="logo" alt="Logo" class="w-24 h-24 rounded-full mb-4" />
    <h1 class="text-xl font-bold text-white text-center">{{ username }}</h1>
    <p class="text-sm text-blue-100 mb-8 text-center">{{ tagline }}</p>

    <div class="w-full max-w-md space-y-6">
      <h2 class="font-bold text-white text-center">Suporte</h2>
      <LinkButton
        v-for="(link, index) in supportLinks"
        :key="index"
        :title="link.title"
        :url="link.url"
      />

      <h2 class="font-bold text-white text-center mt-6">Informações</h2>
      <LinkButton
        v-for="(link, index) in infoLinks"
        :key="index"
        :title="link.title"
        :url="link.url"
      />
    </div>

    <p class="mt-10 text-blue-100 text-center">{{ email }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LinkButton from './components/LinkButton.vue';

export default {
  components: {
    LinkButton
  },
  computed: {
    ...mapGetters(['getLogo', 'getUsername', 'getTagline', 'getEmail', 'getLinks']),
    logo() {
      return this.getLogo;
    },
    username() {
      return this.getUsername;
    },
    tagline() {
      return this.getTagline;
    },
    email() {
      return this.getEmail;
    },
    supportLinks() {
      return this.getLinks.filter(link => link.category === 'support');
    },
    infoLinks() {
      return this.getLinks.filter(link => link.category === 'info');
    }
  }
};
</script>
