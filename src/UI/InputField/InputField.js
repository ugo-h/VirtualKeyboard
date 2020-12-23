export class  InputField{
    constructor(id) {
        this.element = document.getElementById(id);
    }
    changeValue(newValue) {
        this.element.value = newValue;
    }
    addChar(char) {
        this.element.value += char;
    }
    getCursorPosition() {
        return {
            start: this.element.selectionStart,
            end: this.element.selectionEnd
        }
    }
    focus() {
        this.element.focus();
    }
}