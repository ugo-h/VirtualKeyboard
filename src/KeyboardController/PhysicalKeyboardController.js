import { playAnimation } from '../UI/domHelper';

export function connectAnimations(state) {
    const pressed = new Set();
    document.addEventListener('keydown', event => {
        let keyId = event.key.toLowerCase();
        pressed.add(keyId);
        if (pressed.has('shift') && pressed.has('alt')) state.onLang();
        else if (keyId === 'capslock') state.onCapsLock();
        else if (keyId === 'shift') state.onShift();
        else if (keyId === ' ') keyId = 'space';

        const element = document.getElementById(keyId);
        if (element === null) return;
        playAnimation(element);
    });
    document.addEventListener('keyup', event => {
        const keyId = event.key.toLowerCase();
        pressed.delete(keyId);
    });
}
