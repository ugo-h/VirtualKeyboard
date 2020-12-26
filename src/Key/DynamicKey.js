import Key from './Key2';

export default class DynamicKey {
    constructor(value, altValue) {
        this.size = 2;
        this.value = value;
        this.altValue = altValue;
        this.id = `${value}`.charCodeAt();
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
