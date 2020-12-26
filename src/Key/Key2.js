/* eslint-disable class-methods-use-this */
export default class Key {
    constructor(value) {
        this.value = value;
        // this.renderValue = null;
        this.id = `${value}`.charCodeAt(0);
        this.size = 2;
    }

    // get renderValue() {
    //     return this.value || this.renderValue;
    // }

    onPress(api) {
        return api;
    }

    onShift() {}

    onCaps() {}
}
