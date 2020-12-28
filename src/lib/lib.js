import {
    Caps,
    Shift,
    Lang,
    Space,
    Enter,
    Backspace
} from '../Key/SpecialKeys';
import Key from '../Key/Key';
export { map2D, forEach2D } from '../KeyboardState/2DArrayHelper';
export function createKeyFromObj(id, value) {
    switch (id) {
    case '16': return new Shift(value);
    case '20': return new Caps(value);
    case '7': return new Lang(value);
    case '13': return new Enter(value);
    case '32': return new Space(value);
    case '8': return new Backspace(value);
    default: return new Key(value);
    }
}

function getTranslit(char) {
    if (!Number.isNaN(+char)) return String(char);
    const strEng = 'QWERTYUIOP[]\\ASDFGHJKL;\'ZXCVBNM,./';
    const strRus = 'йцукенгшщзхъ\\фывапролджэячсмитьбю.';
    const upperChar = char.toUpperCase();
    const index = strRus.indexOf(char.toLowerCase());
    if (index === -1) return upperChar;
    return strEng[index];
}

export function getKeyCode(char) {
    if (char === '0') return 48;
    const ids = {
        '[': 219,
        ']': 221,
        '-': 189,
        '=': 187,
        ';': 186,
        '\'': 222,
        ',': 188,
        '.': 190,
        '/': 191,
        '`': 192
    };
    if (ids[char]) return ids[char];
    const engChar = getTranslit(char);
    return engChar.charCodeAt(0);
}
