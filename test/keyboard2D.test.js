import { createKeyboard2D } from '../src/Key/Keyboard2D';
import { test } from 'jest';

test('', () => {
    const mainLayout = [
        ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '='],
        [null],
        ['capsLock'],
        ['shift'],
        ['lang', 'space', 'enter']
    ];
    const lang = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';
    console.log(createKeyboard2D(mainLayout, lang));
});
