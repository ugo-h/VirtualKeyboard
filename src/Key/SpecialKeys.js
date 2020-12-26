/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import Key from './Key2';

export class Backspace extends Key {
    constructor(value, id) {
        super(value);
        this.size = 4;
        this.id = id;
    }

    onPress(api) {
        api.deleteChar();
    }
}

export class Enter extends Key {
    constructor(value, id) {
        super(value);
        this.size = 8;
        this.id = id;
    }

    onPress(api) {
        api.addChar('\n');
    }
}

export class Space extends Key {
    constructor(value, id) {
        super(value);
        this.size = 20;
        this.id = id;
    }

    onPress(api) {
        api.addChar(' ');
    }
}

export class Lang extends Key {
    constructor(value) {
        super(value);
        this.size = 4;
    }

    onPress(api) {
        api.onLang();
    }
}

export class Shift extends Key {
    constructor(value, id) {
        super(value);
        this.size = 7;
        this.id = id;
    }

    onPress(api) {
        api.onShift();
    }
}

export class Caps extends Key {
    constructor(value) {
        super(value);
        this.size = 5;
    }

    onPress(api) {
        api.onCaps();
    }
}
