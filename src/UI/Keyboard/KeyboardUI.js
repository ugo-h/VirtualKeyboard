import {Key} from '../../Key/Key';

import {createKeyboardTableElement} from '../Keyboard/KeyboardTable';

export class KeyboardUI{
    constructor(id) {
        this.container = document.getElementById(id);
        this._preventFocus();
    }
    onKeyPress(handler) {
        this.container.addEventListener('click', (event) => {
            if(event.target.classList.contains('keyboard__key')) {
                const key = new Key(event.target.innerText);
                handler(key)
            }
        })
    }
    getRenderMethod(state) {
        return this._render.bind(this, state)
    }
    _render(data) {
        const element = createKeyboardTableElement(data);
        this.container.innerHTML = '';
        this.container.append(element);
    }
    
    _preventFocus() {
        this.container.addEventListener('mousedown', (ev) => ev.preventDefault())
    }
}



