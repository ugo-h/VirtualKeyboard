import {Key} from '../Key/Key';

export default class KeyboardState{
    constructor(keys) {
        this.keys = this._createKeys2DArr(keys);
        this.state = {
            isCapsOn: false,
            isShiftOn: false
        };
        this._renderUI = null;
    }
   
    connectRender(renderFunc) {
        this._renderUI = renderFunc;
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