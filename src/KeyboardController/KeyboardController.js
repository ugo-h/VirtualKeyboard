export default class KeyboardController{
    constructor() {
        this.inputAPI = null;
        this.uiAPI = null
        this.specialKeysMethods = null;
    }
    connectInput(input) {
        this.inputAPI = input;
    }
    connectUI(ui) {
        this.uiAPI = ui
    }
    initSpecialKeysMethods() {
        this.specialKeysMethods =  {
            'Backspace': () => this.inputAPI.deleteChar(),
            'CapsLock': () => this.uiAPI.onCapsLock(),
            'Shift': () => this.uiAPI.onShift()
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