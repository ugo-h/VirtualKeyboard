import {Key} from './Key';
import {createElement} from '../domHelper';

export class KeyboardUI{
    constructor(id, keys) {
        const container = document.getElementById(id);
        this.element = createElement('table', {className: 'keyboard'});
        this.render(container, keys);
    }
    
    createKeysMap(keys) {
        console.log(keys)
        return keys.map(row => {
            return row.map(key => {
                return new Key(key);
            });
        });
    }

    onKeyPress(handler) {
        this.element.addEventListener('click', (event) => {
            if(event.target.classList.contains('keyboard__key')) {
                const key = new Key(event.target.innerText);
                handler(key)
            }
        })
    }

    render(container, keys) {
        const keyboardMap = this.createKeysMap(keys)
        for(let i = 0; i < keyboardMap.length; i++) {
            const row = createElement('tr', {className:'keyboard__row'})
            for(let key of keyboardMap[i]) {                
                const keyElement = createElement('td', {
                    className:'keyboard__key'
                }, key.value);
                keyElement.setAttribute('colspan', key.size);
                row.append(keyElement);
            }
            this.element.append(row);
        }
        container.append(this.element);
    }
}