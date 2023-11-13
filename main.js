import Alpine from 'alpinejs';
import recommendations from './assets/recommendations.json';
import { inject } from '@vercel/analytics';

// Alpine setup
window.Alpine = Alpine;
Alpine.data('recommendationState', () => ({
    index: 0,
    current: recommendations[0],

    onChange(direction) {
        const { length } = recommendations;
        this.index = (length + this.index + direction) % length;
        this.current = recommendations[this.index];
    }
}));
Alpine.start();



// Reveal animations
const REVEAL_OFFSET = window.innerHeight > 1000 ? 100 : 0;
function revealElements() {
    document.querySelectorAll('.reveal').forEach(elt => {
        const { innerHeight } = window;
        const { top } = elt.getBoundingClientRect();

        if (top < innerHeight - REVEAL_OFFSET) {
            elt.classList.add('active');
        } else {
            elt.classList.remove('active');
        }
    });
}
document.addEventListener('scroll', revealElements);
revealElements();



// Vercel analytics
inject();
