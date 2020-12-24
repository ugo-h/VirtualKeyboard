class SpecialKey {
    constructor(value) {
        this.value = value;
    }

    action() {

    }

    bindAction(callback) {
        if(!typeof callback === 'function') throw 'SpecialKey.prototype.bindAction argument must be a function!'
        this.action = callback;
    }
    
}