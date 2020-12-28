import { createKey } from '../lib/lib';
import { KeyboardUI } from '../UI/Keyboard/KeyboardUI';
import { ActiveInputField } from '../UI/InputField/InputField';
import { connectAnimationsToPhysical } from './PhysicalKeyboardController';
import KeyboardState from '../KeyboardState/KeyboardState';

function createkeyPressHandlerAPI(input, state) {
    /* this api is used by key objects to
    access input and keyboard,
    which are otherwise unavailable to them
    (when character key is pressed, for example,
    Key class, created by id that it got from DOM,
    uses method addChar from this api */
    return {
        onLang: state.changeLang.bind(state),
        onShift: state.changeSpecialCharactersAndNums.bind(state),
        onCaps: state.changeRegister.bind(state),
        addChar: input.addChar.bind(input),
        deleteChar: input.deleteChar.bind(input)
    };
}

export default class KeyboardController {
    constructor(languages, containerID, defaultInputID) {
        const input = new ActiveInputField(defaultInputID);
        this.ui = new KeyboardUI(containerID);
        this.state = new KeyboardState(languages);
        this.keyPressHandlerAPI = createkeyPressHandlerAPI(input, this.state);
        this.ui.onKeyPress(this.pressHandler.bind(this));
        connectAnimationsToPhysical(this.pressHandler.bind(this));
    }

    renderCurrentState() {
        const { keys, state } = this.state;
        this.ui.render(keys, state);
        // when state is rerendered we need to tell it
        // that changes has been applied, so the next time we call
        // the hasChanges method it shows us an actual information
        this.state.changesAppliedToUI();
    }

    pressHandler({ id, value }) {
        const key = createKey(id, value);
        key.onPress(this.keyPressHandlerAPI);
        // Not all keypresses lead to changes in the keyboard state
        // Because of that, we rerender keyboard only if it's state has changes
        if (this.state.hasChanges()) this.renderCurrentState();
    }
}
