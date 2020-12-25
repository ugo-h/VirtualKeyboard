import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import {ActiveInputField} from './UI/InputField/InputField';
import Languages from './config/languageConfig';

class KeyboardController{
    constructor() {
        this.inputAPI = null;
        this.uiAPI = null
        this.specialKeysMethods = null;
    }
    bindInput(input) {
        this.inputAPI = input;
    }
    bindUI(ui) {
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
            this.specialKeyHandler(key.value)
        } else {
            this.inputAPI.addChar(key.value)
        }
    }

    specialKeyHandler(keyName) {
        this.specialKeysMethods[keyName](this.state);
    }
}

function inputInterface(input) {
    return {
        addChar: input.addChar.bind(input),
        deleteChar: input.deleteChar.bind(input)
    }
}

function UIInterface(UI) {
    return {
        onKeyPress: UI.onKeyPress.bind(UI),
        onCapsLock: UI.changeRegister.bind(UI),
        onShift: UI.changeSpecialCharactersAndNums.bind(UI)
    }
}

class App{
    static Init() {
        const input = new ActiveInputField('input');
        const controller = new KeyboardController();
        const ui = new KeyboardUI('container', Languages.english);
        controller.bindInput(inputInterface(input));
        controller.bindUI(UIInterface(ui));
        controller.initSpecialKeysMethods();
        ui.onKeyPress(controller.pressHandler.bind(controller));
    }
}

App.Init();

