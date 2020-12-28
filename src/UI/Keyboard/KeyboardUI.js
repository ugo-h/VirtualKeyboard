import { createKeyboardTableElement } from '../Keyboard/KeyboardTable';
import { playAnimation } from '../domHelper';

export class KeyboardUI {
    constructor(id) {
        this.container = document.getElementById(id);
        this._preventFocus();
    }

    onKeyPress(handler) {
        this.container.addEventListener('click', (event) => {
            if (event.target.classList.contains('keyboard__key')) {
                const value = event.target.innerText;
                const id = event.target.id;
                playAnimation(event.target);
                handler({ value, id });
            }
        });
    }

    render(keys, state) {
        const element = createKeyboardTableElement(keys, state);
        this.container.innerHTML = '';
        this.container.append(element);
    }

    _preventFocus() {
        /* Prevents focus from changing from textarea/input element to keyboard element */
        this.container.addEventListener('mousedown', (ev) => ev.preventDefault());
    }
}
