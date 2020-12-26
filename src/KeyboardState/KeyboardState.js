import { Key } from '../Key/Key';
import { forEach2D } from '../lib/lib';

export default class KeyboardState {
    constructor(keys) {
        this.state = {
            isCapsOn: false,
            isShiftOn: false,
            langIndex: 0
        };
        this.languages = keys;
        this.keys = Key.createKeys2DArr(this.languages[this.state.langIndex]);
        this._renderUI = null;
    }

    connectRender(renderFunc) {
        this._renderUI = () => renderFunc(this.keys, this.state);
    }

    changeLang() {
        this.state.langIndex += 1;
        if (this.state.langIndex >= this.languages.length) this.state.langIndex = 0;
        this.keys = this._createKeys2DArr(this.languages[this.state.langIndex]);
        this._renderUI();
    }

    changeRegister() {
        this.state.isCapsOn = !this.state.isCapsOn;
        const { isCapsOn } = this.state;
        forEach2D(this.keys, key => key.changeRegister(isCapsOn));
        this._renderUI();
    }

    changeSpecialCharactersAndNums() {
        this.state.isShiftOn = !this.state.isShiftOn;
        forEach2D(this.keys, key => key.changeToAlt());
        this._renderUI();
    }
}
