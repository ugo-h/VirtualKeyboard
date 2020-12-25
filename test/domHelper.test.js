import {createElement, setCursorPositionTo, getCursorPosition} from '../src/UI/domHelper';

test('CreateElement should create Dom element of a type that is in the first argument', () => {
    expect(createElement('div').toString()).toBe('[object HTMLDivElement]');
})
test('CreateElement props object should set attributes to created element', () => {
    expect(createElement('div', {className:'some-class'}).className).toBe('some-class');
    expect(createElement('div', {disabled:'true'}).disabled).toBe('true');
})
describe('Should set cursor position in textarea element to expected value and should also get expected cursor position', () => {
    document.body.innerHTML =
    '<div>' +
    '  <textarea id="input"></textarea>' +
    '</div>';
    const input = document.getElementById('input');
    input.focus();
    test('Should get proper cursor position in empty input', () => {
        const positionOne = getCursorPosition(input)
        expect(positionOne.start).toBe(0);
        expect(positionOne.end).toBe(0);
    })
    test('Should get proper cursor position in input that has a value', () => {
        input.value = '12345';
        const positionTwo = getCursorPosition(input)
        expect(positionTwo.start).toBe(5);
        expect(positionTwo.end).toBe(5);
    })
    test('Should set cursor position to expected value', () => {
        setCursorPositionTo(input, 2)
        const positionThree = getCursorPosition(input)
        expect(positionThree.start).toBe(2);
        expect(positionThree.end).toBe(2);
    })
})