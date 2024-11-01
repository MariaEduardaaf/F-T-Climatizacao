<template>
  <div class="relative bg-white text-blue-600 py-3 px-4 rounded-lg text-center font-semibold shadow-md flex items-center justify-between hover:bg-blue-100">
    <a :href="url" target="_blank" class="flex-1">{{ title }}</a>

    <!-- Ícone de três pontos para abrir o modal -->
    <button @click="toggleModal" class="text-gray-500 focus:outline-none ml-2">
      <EllipsisVerticalIcon class="w-5 h-5" />
    </button>

    <!-- Modal de Compartilhamento -->
    <ShareModal v-if="showModal" :show="showModal" :url="url" @close="showModal = false" />
  </div>
</template>

<script>
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid';
import ShareModal from './ShareModal.vue';

export default {
  props: {
    title: String,
    url: String
  },
  components: {
    EllipsisVerticalIcon,
    ShareModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>
