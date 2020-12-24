import {Key} from '../../Key/Key';
import {createElement} from '../domHelper';

export class KeyboardUI{
    constructor(id, keys) {
        this.container = document.getElementById(id);
        this.keys = map2D(keys, (item) => {
            if(Array.isArray(item)) {
                const keyObject = new Key(item[0])
                keyObject.altValue = item[1]
                return keyObject;
            }
            return new Key(item)
        });
        this.render();
    }
    
    changeRegister(isCapsOn) {
        forEach2D(this.keys, key => key.changeRegister(isCapsOn))
        this.container.innerHTML = '';
        this.render(container)
    }

    changeSpecialCharactersAndNums(isShiftOn) {
        forEach2D(this.keys, key => key.changeToAlt(isShiftOn));
        this.container.innerHTML = '';
        this.render(container);
    }

    preventFocus() {
        this.container.addEventListener('mousedown', (ev) => ev.preventDefault())
    }

    onKeyPress(handler) {
        this.container.addEventListener('click', (event) => {
            if(event.target.classList.contains('keyboard__key')) {
                const key = new Key(event.target.innerText);
                handler(key)
            }
        })
    }

    render() {
        const element = createKeyboardTableElement(this.keys);
        this.preventFocus();
        this.container.append(element);
    }
}

function map2D(arr, cb) {
    return arr.map(row => row.map(cb));   
};
function forEach2D(arr, cb) {
    arr.forEach(row => row.forEach(cb));   
}

function createKeyboardTableElement(keyboardMap) {
    function _createTable(keyboardMap) {
        const table = createElement('table', {className: 'keyboard'});
        for(let i = 0; i < keyboardMap.length; i++) {
            const row = createElement('tr', {className:'keyboard__row'})
            for(let key of keyboardMap[i]) {                
                const keyElement = _createKeyElement(key);
                row.append(keyElement);
            }
            table.append(row);
        }
        return table;
    };

    function _createKeyElement(key) {
        const keyElement = createElement('td', {
            className:'keyboard__key'
        }, key.value);
        keyElement.setAttribute('colspan', key.size);
        return keyElement
    }
    return _createTable(keyboardMap)
}