import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import {ActiveInputField} from './UI/InputField/InputField';
import Languages from './config/languageConfig';
import KeyboardController from './KeyboardController/KeyboardController';

class App{
    static Init() {
        const input = new ActiveInputField('input');
        const controller = new KeyboardController();
        const ui = new KeyboardUI('container', Languages.english);
        controller.connectInput(inputInterface(input));
        controller.connectUI(UIInterface(ui));
        controller.initSpecialKeysMethods();
        ui.onKeyPress(controller.pressHandler.bind(controller));
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

App.Init();

