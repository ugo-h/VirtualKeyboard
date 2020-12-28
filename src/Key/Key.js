/* eslint-disable class-methods-use-this */
export default class Key {
    constructor(value) {
        this.value = value;
        this.id = `${value}`.charCodeAt(0);
        this.size = 2;
    }

    onPress(api) {
        api.addChar(this.value);
    }

    onShift() {}

    onCaps() {}
}
