import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import {ActiveInputField} from './UI/InputField/InputField';
import Languages from './config/languageConfig';
import KeyboardController from './KeyboardController/KeyboardController';
import KeyboardState from './KeyboardState/KeyboardState';

class App{
    static Init() {
        const input = new ActiveInputField('input');
        const controller = new KeyboardController();
        const ui = new KeyboardUI('container');
        const state = new KeyboardState(Languages.english);

        const render = ui.getRenderMethod(state.keys)
        state.connectRender(render);

        controller.connectInput(inputInterface(input));
        controller.connectState(StateInterface(state));
        controller.initSpecialKeysMethods();
        
        ui.onKeyPress(controller.pressHandler.bind(controller));
        render();
    }
}

function inputInterface(input) {
    return {
        addChar: input.addChar.bind(input),
        deleteChar: input.deleteChar.bind(input)
    }
}

function StateInterface(UI) {
    return {
        onCapsLock: UI.changeRegister.bind(UI),
        onShift: UI.changeSpecialCharactersAndNums.bind(UI)
    }
}

App.Init();

