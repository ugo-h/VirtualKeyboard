import {Key} from '../../Key/Key';
import {createKeyboardTableElement} from '../Keyboard/KeyboardTable';

export class KeyboardUI{
    constructor(id, keys) {
        this.container = document.getElementById(id);
        this.keys = this._createKeys2DArr(keys)
        this._preventFocus();
        this._render();
        this.state = {
            isCapsOn: false,
            isShiftOn: false
        };
    }
    onKeyPress(handler) {
        this.container.addEventListener('click', (event) => {
            if(event.target.classList.contains('keyboard__key')) {
                const key = new Key(event.target.innerText);
                handler(key)
            }
        })
    }
    
    changeRegister() {
        this.state.isCapsOn = !this.state.isCapsOn;
        const {isCapsOn} = this.state
        forEach2D(this.keys, key => key.changeRegister(isCapsOn))
        this._render(container)
    }

    changeSpecialCharactersAndNums() {
        this.state.isShiftOn = !this.state.isShiftOn;
        forEach2D(this.keys, key => key.changeToAlt());
        this._render(container);
    }
    
    _preventFocus() {
        this.container.addEventListener('mousedown', (ev) => ev.preventDefault())
    }

    _render() {
        const element = createKeyboardTableElement(this.keys);
        this.container.innerHTML = '';
        this.container.append(element);
    }
    _createKeys2DArr(keys) {
        return map2D(keys, (item) => {
            if(Array.isArray(item)) {
                const keyObject = new Key(item[0])
                keyObject.altValue = item[1]
                return keyObject;
            }
            return new Key(item)
        });
    }
}

function map2D(arr, cb) {
    return arr.map(row => row.map(cb));   
};
function forEach2D(arr, cb) {
    arr.forEach(row => row.forEach(cb));   
}

