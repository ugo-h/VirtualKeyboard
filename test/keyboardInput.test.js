import Keyboard from '../src/index';

describe('kyeboard events', () => {
    test('Should type text to input on press', () => {
        document.body.innerHTML = `
        <div>
            <textarea id="input"></textarea>
            <div id="container"></div>
        <div>
        `
        const inputElement = document.getElementById('input');
        const containerElement = document.getElementById('container');
        
        Keyboard.init()
   
    })
})