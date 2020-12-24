import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import {ActiveInputField} from './UI/InputField/InputField';
import Languages from './config/languageConfig';

class Keyboard{
    constructor() {
        this.ui = new KeyboardUI('container', Languages.english);
        this.ui.onKeyPress(this.pressHandler.bind(this));
        this.input = new ActiveInputField('input');
        this.isCapsOn = false;
    }

    pressHandler(key) {
        if(!key.isSpecialKey()) {
            const char = this.isCapsOn? key.value.toUpperCase(): key.value;
            this.input.addChar(char)
        } else {
            this.manageSpecialKeys(key.value)
        }
    }

    manageSpecialKeys(key) {
        switch(key) {
            case 'Backspace': {
                this.input.deleteChar()
                break;
            };
            case 'Enter': {
                this.input.addChar('\n');
                break
            };
            case 'CapsLock': {
                this.isCapsOn = !this.isCapsOn;
                this.ui.changeRegister(this.isCapsOn)
                break;
            } case 'Space': {
                this.input.addChar(' ')
                break;
            }
            default: break;
        }
    }
}

new Keyboard();

