import {getCursorPosition, setCursorPositionTo} from '../domHelper';

export class  ActiveInputField{
    constructor(defaultId) {
        this.default = document.getElementById(defaultId);
    }

    addChar(char) {
        const input = this._getCurrentInput();
        const { start, end } = getCursorPosition(input);
        const arr = input.value.split('');
        arr.splice(start, end - start, char);//<- replaces characters in selected area (if area is
        input.value = arr.join('');         //not selected simply puts a new element after cursor)
        setCursorPositionTo(input, start + 1);
    }
    
    deleteChar() {
        const input = this._getCurrentInput();
        const {start, end} = getCursorPosition(input);
        if(start === 0 && start === end) return;

        /* Converts input.value string to array,
         makes changes and then converts it back to string.*/
        const arr = input.value.split('');
        if(end === start) {
            arr.splice(end-1, 1);//because no elements are selected we still need to delete one element before the cursor
        } else {
            arr.splice(start, end-start);//second argument points to the size of selected area
        }
        input.value = arr.join('');
        /* After each deletion cursor is set to the end of the textarea.
        To prevent that behavior the code below explicitly sets the proper position to cursor*/
        setCursorPositionTo(input, start-1);
        if(start!==end) {
            setCursorPositionTo(input, start);
        }
    }

    _getCurrentInput() {
        /*When focus changes to another input element
        we need to change element we working with as well*/
        let current;
        if(document.activeElement.value !== undefined) {
            current = document.activeElement
        } else {
            current = this.default;
            current.focus();
        };  
        return current;
    }

    _triggerInputEvent() {
        const current = this._getCurrentInput()
        const event = new InputEvent('input');
        current.dispatchEvent(event);
    }
}
