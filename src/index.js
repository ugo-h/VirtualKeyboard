import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import Languages from './languageConfig';
import {InputField} from './UI/InputField/InputField';

class Keyboard{
    constructor() {
        Languages.english;
        console.log(Languages.english);
        this.ui = new KeyboardUI('container', Languages.english);
        this.ui.onKeyPress(this.pressHandler.bind(this));
        this.input = new InputField('input');
    }

    pressHandler(key) {
        this.input.focus()
        console.log(key.isSpecialKey())
        if(!key.isSpecialKey()) {
            this.input.addChar(key.value)
        } else {
            this.manageSpecialKeys(key.value)
        }
    }

    manageSpecialKeys(key) {
        switch(key) {
            case 'Backspace': {
                console.log(this.input.getCursorPosition());
                break;
            }
            default: break;
        }
    }
}

new Keyboard();

