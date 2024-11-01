<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <!-- Aumentei a largura do modal e adicionei mais padding -->
        <div class="bg-white rounded-lg w-80 p-6 shadow-lg">
            <h3 class="text-lg font-semibold mb-4 text-center">Compartilhar</h3>
            <ul class="space-y-3">
                <li>
                    <button @click="copyLink"
                        class="flex items-center text-blue-600 hover:text-blue-800 w-full text-left">
                        <DocumentDuplicateIcon class="w-5 h-5 mr-2" /> Copiar link
                    </button>
                </li>
                <li>
                    <a :href="'https://wa.me/5579996284242?text=' + encodeURIComponent(shareMessage)" target="_blank"
                        class="flex items-center text-green-600 hover:text-green-800 w-full">
                        <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2" /> Compartilhar no WhatsApp
                    </a>
                </li>
                <li>
                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)" target="_blank"
                        class="flex items-center text-blue-700 hover:text-blue-900 w-full">
                        <ShareIcon class="w-5 h-5 mr-2" /> Compartilhar no Facebook
                    </a>
                </li>
            </ul>
            <!-- Botão de fechar com mais espaçamento acima -->
            <button @click="closeModal" class="mt-6 text-red-600 hover:text-red-800 text-center w-full">Fechar</button>
        </div>
    </div>
</template>

<script>
import { DocumentDuplicateIcon, ChatBubbleLeftRightIcon, ShareIcon } from '@heroicons/vue/20/solid';

export default {
    props: {
        show: Boolean,
        url: String
    },
    components: {
        DocumentDuplicateIcon,
        ChatBubbleLeftRightIcon,
        ShareIcon
    },
    data() {
        return {
            shareMessage: "Olá! Acessei seu site e gostaria de obter mais informações sobre os serviços oferecidos."
        };
    },
    methods: {
        copyLink() {
            navigator.clipboard.writeText(this.url);
            alert("Link copiado!");
            this.closeModal();
        },
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>