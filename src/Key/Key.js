import { map2D } from '../lib/lib';

export class Key {
    constructor(value, id) {
        if (!Key.specialKeys) {
            Key.specialKeys = {
                capslock: 6,
                backspace: 4,
                shift: 7,
                lang: 4,
                enter: 8,
                space: 20
            };
        }
        this.id = id;
        this.value = value;
        this.altValue = null;
        this.size = this._getKeySize();
        this.icon = Key.getIcon(this.value);
    }

    isSpecialKey() {
        return Boolean(Key.specialKeys[this.id]);
    }

    changeToAlt() {
        if (!this.altValue) return;
        const temp = this.value;
        this.value = this.altValue;
        this.altValue = temp;
    }

    changeRegister(isCapsOn) {
        if (!this.value) return;
        if (this.isSpecialKey()) return;
        if (!/[a-zA-Zа-яёА-ЯЁ]/.test(this.id)) return;
        this.value = isCapsOn ? this.value.toUpperCase() : this.value.toLowerCase();
    }

    _getKeySize() {
        return Key.specialKeys[this.id] || 2;
    }

    static createKeys2DArr(keys) {
        return map2D(keys, (item) => {
            if (Array.isArray(item)) {
                const keyObject = new Key(item[0], item[0]);
                keyObject.altValue = item[1];
                return keyObject;
            }
            let id;
            if (item === null) {
                id = null;
            } else {
                id = item.toLowerCase();
            }
            return new Key(item, id);
        });
    }

    static getIcon(key) {
        if (!Key.specialKeyIcons) {
            Key.specialKeyIcons = {
                Backspace: 'https://www.svgrepo.com/show/112572/backspace.svg',
                Lang: 'https://www.svgrepo.com/show/310884/globe.svg',
                Enter: 'https://www.svgrepo.com/show/5370/next.svg'
            };
        }
        return Key.specialKeyIcons[key] || null;
    }
}
