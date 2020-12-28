import { playAnimation } from '../UI/domHelper';

export function connectAnimationsToPhysical(pressHandler) {
    const pressed = new Set(); // use this set to track multiple keys pressed at the same time
    document.addEventListener('keydown', event => {
        let id = event.keyCode.toString();
        let value = event.key;
        pressed.add(id);
        if (pressed.has('16') && pressed.has('18')) { // shift + alt => change language
            pressHandler({ id: '7', value: 'lang' });
        } else if (id === '20' || id === '16') { // shift or caps => fire pressHandler
            pressHandler({ id, value }); //         as if we pressed them on a virtual keyboard
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
