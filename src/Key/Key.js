/* eslint-disable class-methods-use-this */
import { getKeyCode } from '../lib/lib';

export default class Key {
    constructor(value) {
        this.value = value;
        this.id = getKeyCode(value);
        this.size = 2;
    }

    onPress(api) {
        api.addChar(this.value);
    }

    onShift() {}

    onCaps() {}
}
