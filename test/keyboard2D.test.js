/* eslint-disable */
import { createKeyboard2D } from '../src/Key/Keyboard2D';
import { test } from 'jest';

test('', () => {
   
    const lang = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';
    console.log(createKeyboard2D(mainLayout, lang));
});
