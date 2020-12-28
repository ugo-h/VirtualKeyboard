import { createKeyFromObj } from '../lib/lib';
import { KeyboardUI } from '../UI/Keyboard/KeyboardUI';
import { ActiveInputField } from '../UI/InputField/InputField';
import { languages } from '../config/languageConfig';
import { connectAnimations } from './PhysicalKeyboardController';
import KeyboardState from '../KeyboardState/KeyboardState';

function createEventHandlersAPI(input, state) {
    return {
        onLang: state.changeLang.bind(state),
        onShift: state.changeSpecialCharactersAndNums.bind(state),
        onCaps: state.changeRegister.bind(state),
        addChar: input.addChar.bind(input),
        deleteChar: input.deleteChar.bind(input)
    };
}

export default class KeyboardController {
    constructor(containerID, defaultInputID) {
        const input = new ActiveInputField(defaultInputID);
        this.ui = new KeyboardUI(containerID);
        this.state = new KeyboardState(languages);
        this.eventHandlersAPI = createEventHandlersAPI(input, this.state);
        this.ui.onKeyPress(this.pressHandler.bind(this));
        connectAnimations(this.pressHandler.bind(this));
    }

    renderCurrentState() {
        this.ui.render(this.state.keys, this.state.state);
        this.state.changesRendered();
    }

    pressHandler({ id, value }) {
        const key = createKeyFromObj(id, value);
        key.onPress(this.eventHandlersAPI);
        if (this.state.hasChanges()) this.renderCurrentState();
    }
}
