import Alpine from 'alpinejs';
import recommendations from './data/recommendations.json';

import './styles/index.css';


// Alpine setup
window.Alpine = Alpine;

Alpine.data('recommendationState', () => ({
    index: 0,
    current: recommendations[0],
    recommendationList: recommendations,

    init() {
        setInterval(() => {
            this.index = (this.index + 1) % recommendations.length;
            this.current = recommendations[this.index];
        }, this.recommendationTimer);
    },

    get recommendationTimer() {
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--recommendation-timer').replace('ms', ''));
    }
}));

Alpine.start();
