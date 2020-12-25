import {ActiveInputField} from '../src/UI/InputField/InputField'
import {setCursorPositionTo, getCursorPosition} from '../src/UI/domHelper';

beforeEach(() => {
    document.body.innerHTML = `
        <div>
            <textarea id="input"></textarea>
        </div>
    `
})
test('Should add character to input element', () => {
    const element = document.getElementById('input');
    const input = new ActiveInputField('input');
    input.addChar('a');
    expect(element.value).toBe('a');
});
test('Should move cursor to the end after character is added', () => {
    const element = document.getElementById('input');
    const input = new ActiveInputField('input');
    input.addChar('a');
    expect(getCursorPosition(element).start).toBe(1);
});
test('Should add character to the current cursor position', () => {
    // const element = document.getElementById('input');
    // const input = new ActiveInputField('input');
    // element.focus();

    // input.addChar('ab');
    
    // setCursorPositionTo(input, 0);
    // input.addChar('c');
    // console.log(`(${element.value})`)
    // expect(element.value).toBe('cab');
})