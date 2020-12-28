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
    case '16': return new Shift();
    case '20': return new Caps();
    case '7': return new Lang();
    case '13': return new Enter();
    case '32': return new Space();
    case '8': return new Backspace();
    default: return new Key(value);
    }
}
