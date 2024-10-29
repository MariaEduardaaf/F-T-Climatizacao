import { createStore } from 'vuex';

export default createStore({
  state: {
    logo: require('../assets/logo.jpg'), // Certifique-se de que o arquivo logo.jpg está em src/assets/
    username: 'F&T Climatização',
    tagline: 'Transformando Calor em Conforto',
    email: 'ftclimatizacao.se@gmail.com',
    links: [
      { 
        title: 'Solicite uma ajuda rápida', 
        url: 'https://wa.me/5579996284242?text=Ol%C3%A1!%20Acessei%20seu%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20oferecidos.', 
        category: 'support' 
      },
      { 
        title: 'Site', 
        url: 'https://site.com', 
        category: 'info' 
      },
      { 
        title: 'WhatsApp', 
        url: 'https://wa.me/5579996284242', 
        category: 'info' 
      },
      { 
        title: 'Envie um E-mail', 
        url: 'mailto:ftclimatizacao.se@gmail.com', 
        category: 'info' 
      }
    ]
  },
  getters: {
    getLogo: (state) => state.logo,
    getUsername: (state) => state.username,
    getTagline: (state) => state.tagline,
    getEmail: (state) => state.email,
    getLinks: (state) => state.links,
  }
});
