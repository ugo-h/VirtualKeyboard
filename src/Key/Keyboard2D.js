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

export function createKeyboard2D(language) {
    const keys = getStructure();

    for (let i = 0; i < 13; i += 1) {
        keys[0][i] = new DynamicKey(keys[0][i], language[i]);
    }
    for (let i = 13; i < 25; i += 1) {
        keys[1].push(new CharKey(language[i]));
    }
    for (let i = 25; i < 36; i += 1) {
        keys[2].push(new CharKey(language[i]));
    }
    for (let i = 36; i < 46; i += 1) {
        keys[3].push(new CharKey(language[i]));
    }
    return keys;
}
