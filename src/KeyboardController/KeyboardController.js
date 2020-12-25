export default class KeyboardController{
    constructor() {
        this.inputAPI = null;
        this.uiAPI = null
        this.specialKeysMethods = null;
    }
    connectInput(input) {
        this.inputAPI = input;
    }
    connectState(state) {
        this.stateAPI = state
    }
    initSpecialKeysMethods() {
        this.specialKeysMethods =  {
            'Backspace': () => this.inputAPI.deleteChar(),
            'CapsLock': () => this.stateAPI.onCapsLock(),
            'Shift': () => this.stateAPI.onShift(),
            'Lang': () => this.stateAPI.onLang()
        }
    }
   
    pressHandler(key) {
        if(key.isSpecialKey()) {
            this._specialKeyHandler(key.value)
        } else {
            this.inputAPI.addChar(key.value)
        }
    }

    _specialKeyHandler(keyName) {
        this.specialKeysMethods[keyName](this.state);
    }
}