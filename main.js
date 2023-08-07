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
        }, 15*1000);
    }
}));

Alpine.start();


// Reveal animations
function revealElements() {
    document.querySelectorAll('.reveal').forEach(elt => {
        const { innerHeight } = window;
        const { top } = elt.getBoundingClientRect();
        const offset = 100;

        if (top < innerHeight - offset) {
            elt.classList.add('active');
        } else {
            elt.classList.remove('active');
        }
    });
}
document.addEventListener('scroll', revealElements);
revealElements();
