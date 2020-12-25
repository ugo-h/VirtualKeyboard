import {Key, LangKey} from '../../Key/Key';
import {createKeyboardTableElement} from '../Keyboard/KeyboardTable';

export class KeyboardUI{
    constructor(id) {
        this.container = document.getElementById(id);
        this._preventFocus();
    }
    onKeyPress(handler) {
        this.container.addEventListener('click', (event) => {
            if(event.target.classList.contains('keyboard__key')) {
                const value = event.target.innerText;
                const key = new Key(value);
                handler(key)
            }
        })
    }
    getRenderMethod(keys) {
        return this._render.bind(this, keys)
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



