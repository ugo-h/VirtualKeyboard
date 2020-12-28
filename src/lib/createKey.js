import Key from '../Key/Key';
import {
    Caps,
    Shift,
    Lang,
    Space,
    Enter,
    Backspace
} from '../Key/SpecialKeys';
export function createKey(id, value) {
    /* Creates a certain key according to passed id and assigns it a value */
    switch (id) {
    case '16': return new Shift(value, id);
    case '20': return new Caps(value, id);
    case '7': return new Lang(value, id);
    case '13': return new Enter(value, id);
    case '32': return new Space(value, id);
    case '8': return new Backspace(value, id);
    default: return new Key(value, id);
    }
}
