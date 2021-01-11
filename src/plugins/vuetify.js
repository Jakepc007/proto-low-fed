import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F3C300',
                secondary: '#FF0007',
                accent: '#F1F1EE',
                error: '#b71c1c',
                dark: '#444443'
            },
        },
    },
});
