/* The code below violates principle of openness to extension and closeness to modification,
but i don't know if I need to fix it, because it will make code mode interconnected
and harder to work with. For example if I create a class for each special button with
the action method, I still will have to use switch operator to detect if the key
is of the proper type. (case 'Enter': new EnterKey()) */

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
            enter: () => this.inputAPI.addChar('\n'),
            space: () => this.inputAPI.addChar(' '),
            capslock: () => this.stateAPI.onCapsLock(),
            shift: () => this.stateAPI.onShift(),
            lang: () => this.stateAPI.onLang()
        };
    }

    pressHandler(key) {
        if (key.isSpecialKey()) {
            this._specialKeyHandler(key.id);
        } else {
            this.inputAPI.addChar(key.value);
        }
    }

    _specialKeyHandler(id) {
        this.specialKeysMethods[id](this.state);
    }
}
