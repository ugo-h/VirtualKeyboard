import KeyboardController from './KeyboardController/KeyboardController';
import { languages } from './config/languageConfig';

class App {
    static Init() {
        const controller = new KeyboardController(languages, 'container', 'input');
        controller.renderCurrentState();
    }
}

App.Init();
