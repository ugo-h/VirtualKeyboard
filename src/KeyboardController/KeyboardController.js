export default class KeyboardController {
    constructor() {
        this.inputAPI = null;
        this.uiAPI = null;
        this.specialKeysMethods = null;
    }

    connectInput(input) {
        this.inputAPI = input;
    }

    connectState(state) {
        this.stateAPI = state;
    }

    initSpecialKeysMethods() {
        this.specialKeysMethods = {
            backspace: () => this.inputAPI.deleteChar(),
            capslock: () => this.stateAPI.onCapsLock(),
            shift: () => this.stateAPI.onShift(),
            lang: () => this.stateAPI.onLang(),
            enter: () => this.inputAPI.addChar('\n'),
            space: () => this.inputAPI.addChar(' ')
        };
    }

    pressHandler(key) {
        if (key.isSpecialKey()) {
            this._specialKeyHandler(key.id);
        } else {
            this.inputAPI.addChar(key.value);
        }
    }

    _specialKeyHandler(keyName) {
        this.specialKeysMethods[keyName](this.state);
    }
}
