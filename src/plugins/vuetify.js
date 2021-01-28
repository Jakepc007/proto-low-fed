import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#646464',
                secondary: '#b8b8b8',
                accent: '#F1F1EE',
                error: '#b71c1c',
                dark: '#444443'
            },
        },
    },
});
