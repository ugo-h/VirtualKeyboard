import Key from './Key';

export class CharKey extends Key {
    /* Char keys allow state to change register of their value, while other Key classes do not.
    They are used only in rendering */
    constructor(char) {
        super(char);
    }

    onCaps(isCapsOn) {
        this.value = isCapsOn ? this.value.toUpperCase() : this.value.toLowerCase();
    }
}
