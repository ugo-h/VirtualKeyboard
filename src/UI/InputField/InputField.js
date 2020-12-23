export class  InputField{
    constructor(id) {
        this.element = document.getElementById(id);
        
    }
    changeValue(newValue) {
        this.element.value = newValue;
    }
    addChar(char) {
        const valueArr = this.element.value.split('');
        const { start, end } = this.getCursorPosition();
        valueArr.splice(start, end-start, char);
        this.element.value = valueArr.join('')
    }
    getCursorPosition() {
        return {
            start: this.element.selectionStart,
            end: this.element.selectionEnd
        }
    }
    deleteCharsAtCurrentPosition() {
        const {start, end} = this.getCursorPosition();
        const valueArr = this.element.value.split('');
        if(end-start === 0) {
            setCaretPosition(this.element, end-2)
            valueArr.splice(end-1, 1);
        } else {
            valueArr.splice(start, end-start);
        }
        this.element.value = valueArr.join('')
    }
    focus() {
        this.element.focus();
    }
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}
