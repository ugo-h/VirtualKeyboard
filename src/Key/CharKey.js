import Key from './Key';

export class CharKey extends Key {
    constructor(char) {
        super(char);
    }

    onPress(api) {
        api.addChar(this.value);
    }

    onCaps(isCapsOn) {
        this.value = isCapsOn ? this.value.toUpperCase() : this.value.toLowerCase();
    }
}
