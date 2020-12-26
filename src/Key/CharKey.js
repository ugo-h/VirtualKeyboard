import Key from "./Key2";

export class CharKey extends Key {
    constructor(char) {
        super(char);
    }

    onPress(api) {
        api.addChar(this.value);
    }
}
