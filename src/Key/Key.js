export class Key{
    constructor(value) {
        if(!Key.specialKeys) {
            Key.specialKeys = {
                'Tab': 3,
                'CapsLock': 4,
                'Backspace': 4,
                'Shift': 5,
                'Lang': 4,
                'Enter': 4,
                'Space': 26
            };
        }
        this.value = value;
        this.altValue = null;
        this.size = this._getKeySize();
    }

    isSpecialKey() {
        return Boolean(Key.specialKeys[this.value])
    }

    changeToAlt() {
        if(!this.altValue) return;
        const temp = this.value;
        this.value = this.altValue;
        this.altValue = temp;
    }

    changeRegister(isCapsOn) {
        if(this.isSpecialKey()) return
        this.value = isCapsOn? this.value.toUpperCase(): this.value.toLowerCase();
        
    }
    _getKeySize() {
        return Key.specialKeys[this.value] || 2;
    }
}