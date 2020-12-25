import {Key} from '../Key/Key';

export default class KeyboardState{
    constructor(keys) {
        this.state = {
            isCapsOn: false,
            isShiftOn: false,
            langIndex: 0
        };
        this.languages = keys;
        this.keys = this._createKeys2DArr(this.languages[this.state.langIndex]);
        this._renderUI = null;
    }
   
    connectRender(renderFunc) {
        this._renderUI = () => renderFunc(this.keys, this.state);
    }

    changeLang() {
        this.state.langIndex++;
        if(this.state.langIndex >= this.languages.length) this.state.langIndex = 0;
        this.keys = this._createKeys2DArr(this.languages[this.state.langIndex]);
        this._renderUI();
    }

    changeRegister() {
        this.state.isCapsOn = !this.state.isCapsOn;
        const {isCapsOn} = this.state;
        forEach2D(this.keys, key => key.changeRegister(isCapsOn));
        this._renderUI();
    }

    changeSpecialCharactersAndNums() {
        this.state.isShiftOn = !this.state.isShiftOn;
        forEach2D(this.keys, key => key.changeToAlt());
        this._renderUI();
    }
    _createKeys2DArr(keys) {
        return map2D(keys, (item) => {
            
            if(Array.isArray(item)) {
                const keyObject = new Key(item[0], item[0])
                keyObject.altValue = item[1]
                return keyObject;
            }
            const id = item.toLowerCase();
            return new Key(item, id)
        });
    }
}

function map2D(arr, cb) {
    return arr.map(row => row.map(cb));   
};
function forEach2D(arr, cb) {
    arr.forEach(row => row.forEach(cb));   
}