import {
    Caps,
    Shift,
    Lang,
    Space,
    Enter,
    Backspace
} from './SpecialKeys';
import DynamicKey from './DynamicKey';
import { CharKey } from './CharKey';
import Key from './Key';

function getStructure() {
    return [
        ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', new Backspace('backspace', 8)],
        [new Key('empty')],
        [new Caps('caps', 20)],
        [new Shift('shift', 16)],
        [new Lang('lang'), new Space(' '), new Enter('enter')]
    ];
}

function getSecondary(language, char) {
    if (!language.secondary) return null;
    return language.secondary[char];
}

function pushKey(keys, language, i) {
    const altChar = getSecondary(language, language.main[i]);
    if (altChar) keys.push(new DynamicKey(language.main[i], altChar));
    else keys.push(new CharKey(language.main[i]));
}

export function createKeyboard2D(language) {
    const keys = getStructure();
    for (let i = 0; i < 13; i += 1) {
        keys[0][i] = new DynamicKey(keys[0][i], language.main[i]);
    }
    for (let i = 13; i < 25; i += 1) {
        pushKey(keys[1], language, i);
    }
    for (let i = 25; i < 36; i += 1) {
        pushKey(keys[2], language, i);
    }
    for (let i = 36; i < 46; i += 1) {
        pushKey(keys[3], language, i);
    }
    return keys;
}
