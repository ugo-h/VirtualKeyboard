import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import { ActiveInputField } from './UI/InputField/InputField';
import { languages } from './config/languageConfig';
import KeyboardController from './KeyboardController/KeyboardController';
import KeyboardState from './KeyboardState/KeyboardState';

function inputInterface(input) {
    return {
        addChar: input.addChar.bind(input),
        deleteChar: input.deleteChar.bind(input)
    };
}

function StateInterface(UI) {
    return {
        onCapsLock: UI.changeRegister.bind(UI),
        onShift: UI.changeSpecialCharactersAndNums.bind(UI),
        onLang: UI.changeLang.bind(UI)
    };
}

function connectAnimations(state) {
    const pressed = new Set();
    document.addEventListener('keydown', event => {
        let keyId = event.key.toLowerCase();
        pressed.add(keyId);
        if (pressed.has('shift') && pressed.has('alt')) state.onLang();
        else if (keyId === 'capslock') state.onCapsLock();
        else if (keyId === 'shift') state.onShift();
        else if (keyId === ' ') keyId = 'space';

        const element = document.getElementById(keyId);
        if (element === null) return;
        element.classList.add('highlighted');
        setTimeout(() => {
            element.classList.remove('highlighted');
        }, 100);
    });
    document.addEventListener('keyup', event => {
        const keyId = event.key.toLowerCase();
        pressed.delete(keyId);
    });
}

class App {
    static Init() {
        const input = new ActiveInputField('input');
        const controller = new KeyboardController();
        const ui = new KeyboardUI('container');
        const state = new KeyboardState(languages);
        state.connectRender(ui._render.bind(ui));

        controller.connectInput(inputInterface(input));
        controller.connectState(StateInterface(state));
        controller.initSpecialKeysMethods();

        ui.onKeyPress(controller.pressHandler.bind(controller));
        ui._render(state.keys, state.state);
        connectAnimations(StateInterface(state));
    }
}

App.Init();
