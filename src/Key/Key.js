export class Key{
    constructor(value) {
        if(!Key.specialKeys) {
            Key.specialKeys = {
                'Tab': 3,
                'CapsLock': 4,
                'Backspace': 4,
                'Shift': 3,
                'Lang': 4,
                'Enter': 4,
                'Space': 26
            };
        }
        this.value = value;
        this.size = this._getKeySize();
    }

    isSpecialKey() {
        return Boolean(Key.specialKeys[this.value])
    }
    changeRegister(isCapsOn) {
        if(this.isSpecialKey()) return
        this.value = isCapsOn? this.value.toUpperCase(): this.value.toLowerCase();
    }
    _getKeySize() {
        return Key.specialKeys[this.value] || 2;
    }
}