<template>
  <div class="relative bg-white text-blue-600 py-3 px-4 rounded-lg text-center font-semibold shadow-md flex items-center justify-between hover:bg-blue-100">
    <!-- Título do link -->
    <a :href="url" target="_blank" class="flex-1">{{ title }}</a>

    <!-- Ícone de três pontos para abrir o menu dropdown -->
    <button @click="toggleDropdown" class="text-gray-500 focus:outline-none ml-2">
      <!-- Ícone de três pontos (vertical) -->
      <EllipsisVerticalIcon class="w-5 h-5" />
    </button>

    <!-- Menu Dropdown -->
    <div 
      v-if="showDropdown" 
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transform transition-all duration-200 ease-in-out origin-top-right"
    >
      <ul class="py-1">
        <li>
          <a href="#" @click="shareLink('copy')" class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
            <DocumentDuplicateIcon class="w-5 h-5 mr-2 text-blue-600" /> Copiar link
          </a>
        </li>
        <li>
          <a :href="'https://wa.me/5579996284242?text=' + encodeURIComponent(shareMessage)" target="_blank" class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
            <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2 text-green-500" /> Compartilhar no WhatsApp
          </a>
        </li>
        <li>
          <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)" target="_blank" class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
            <ShareIcon class="w-5 h-5 mr-2 text-blue-700" /> Compartilhar no Facebook
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { EllipsisVerticalIcon, DocumentDuplicateIcon, ChatBubbleLeftRightIcon, ShareIcon } from '@heroicons/vue/20/solid';

export default {
  props: {
    title: String,
    url: String
  },
  components: {
    EllipsisVerticalIcon,
    DocumentDuplicateIcon,
    ChatBubbleLeftRightIcon,
    ShareIcon
  },
  data() {
    return {
      showDropdown: false, // Controle de visibilidade do menu dropdown
      shareMessage: "Olá! Acessei seu site e gostaria de obter mais informações sobre os serviços oferecidos." // Mensagem padrão para compartilhamento no WhatsApp
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    shareLink(action) {
      if (action === 'copy') {
        navigator.clipboard.writeText(this.url);
        alert("Link copiado!");
      }
      this.showDropdown = false;
    },
    closeDropdownOnClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdownOnClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.closeDropdownOnClickOutside);
  }
};
</script>
