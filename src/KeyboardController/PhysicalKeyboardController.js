import { playAnimation } from '../UI/domHelper';

export function connectAnimations(cb) {
    const pressed = new Set();
    document.addEventListener('keydown', event => {
        let id = event.keyCode.toString();
        let value = event.key;
        pressed.add(id);
        if (pressed.has('16') && pressed.has('18')) {
            cb({ id: '7', value: 'lang' });
        } else if (id === '20' || id === '16') {
            cb({ id, value });
        }
        const element = document.getElementById(id);
        if (element === null) return;
        playAnimation(element);
    });
    document.addEventListener('keyup', event => {
        let id = event.keyCode.toString();
        pressed.delete(id);
    });
}
