import { KeyboardUI } from './UI/Keyboard/KeyboardUI';
import Languages from './languageConfig';

class Keyboard{
    constructor() {
        Languages.english;
        console.log(Languages.english);
        this.ui = new KeyboardUI('container', Languages.english);
        this.ui.onKeyPress(this.pressHandler.bind(this))
    }

    pressHandler(key) {
        console.log(key)
    }
}

new Keyboard();

