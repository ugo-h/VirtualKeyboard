/* eslint-disable class-methods-use-this */
import { getKeyCode } from '../lib/lib';

export default class Key {
    constructor(value, id) {
        this.value = value;
        this.id = id || getKeyCode(value);
        this.size = 1;
    }

    onPress(api) {
        api.addChar(this.value);
    }

    onShift() {}

    onCaps() {}
}
