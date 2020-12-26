import { map2D } from '../lib/lib';

export class Key {
    constructor(value, id) {
        if (!Key.specialKeys) {
            Key.specialKeys = {
                Tab: 3,
                CapsLock: 4,
                Backspace: 4,
                Shift: 5,
                Lang: 4,
                Enter: 4,
                Space: 26
            };
        }
        this.id = id;
        this.value = value;
        this.altValue = null;
        this.size = this._getKeySize();
    }

    isSpecialKey() {
        return Boolean(Key.specialKeys[this.value]);
    }

    changeToAlt() {
        if (!this.altValue) return;
        const temp = this.value;
        this.value = this.altValue;
        this.altValue = temp;
    }

    changeRegister(isCapsOn) {
        if (this.isSpecialKey()) return;
        if (!/[a-zA-Zа-яёА-ЯЁ]/.test(this.id)) return;
        this.value = isCapsOn ? this.value.toUpperCase() : this.value.toLowerCase();
    }

    _getKeySize() {
        return Key.specialKeys[this.value] || 2;
    }

    static createKeys2DArr(keys) {
        return map2D(keys, (item) => {
            if (Array.isArray(item)) {
                const keyObject = new Key(item[0], item[0]);
                keyObject.altValue = item[1];
                return keyObject;
            }
            const id = item.toLowerCase();
            return new Key(item, id);
        });
    }
}
