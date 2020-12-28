import KeyboardController from './KeyboardController/KeyboardController';

class App {
    static Init() {
        const controller = new KeyboardController('container', 'input');
        controller.renderCurrentState();
    }
}

App.Init();
