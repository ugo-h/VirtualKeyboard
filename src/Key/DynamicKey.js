import Key from './Key';

export default class DynamicKey extends Key {
    constructor(value, altValue) {
        super(value);
        this.altValue = altValue;
    }

    onShift() {
        this._swapValues();
    }

    onPress(api) {
        api.addChar(this.value);
    }

    _swapValues() {
        [this.value, this.altValue] = [this.altValue, this.value];
    }
}
