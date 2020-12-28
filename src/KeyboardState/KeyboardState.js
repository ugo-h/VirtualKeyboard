import { forEach2D } from '../lib/lib';
import { createKeyboard2D } from '../Key/Keyboard2D';

export default class KeyboardState {
    constructor(keys) {
        this.state = {
            isCapsOn: false,
            isShiftOn: false,
            langIndex: 0
        };
        this.languages = keys;
        this.keys = createKeyboard2D(this.languages[this.state.langIndex]);
        this.needsRerendering = false;
    }

    hasChanges() {
        const previous = this.needsRerendering;
        this.needsRerendering = false;
        return previous;
    }

    changeLang() {
        this.state.langIndex += 1;
        this.state.isCapsOn = false;
        this.state.isShiftOn = false;
        if (this.state.langIndex >= this.languages.length) this.state.langIndex = 0;
        this.keys = createKeyboard2D(this.languages[this.state.langIndex]);
        this.needsRerendering = true;
    }

    changeRegister() {
        this.state.isCapsOn = !this.state.isCapsOn;
        const { isCapsOn } = this.state;
        forEach2D(this.keys, key => key.onCaps(isCapsOn));
        this.needsRerendering = true;
    }

    changeSpecialCharactersAndNums() {
        this.state.isShiftOn = !this.state.isShiftOn;
        forEach2D(this.keys, key => key.onShift());
        this.needsRerendering = true;
    }
}
