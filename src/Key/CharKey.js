import Key from './Key';

export class CharKey extends Key {
    /* Char keys are able to change register when caps lock is pressed,
     while other Key classes aren't.
    They are used only in rendering */
    constructor(char) {
        super(char);
    }

    onCaps(isCapsOn) {
        this.value = isCapsOn ? this.value.toUpperCase() : this.value.toLowerCase();
    }
}
