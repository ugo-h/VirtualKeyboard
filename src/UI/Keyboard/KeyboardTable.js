/* eslint-disable no-plusplus */
import { createElement } from '../domHelper';
import { languageMapping } from '../../config/languageConfig';

function createIconElement(key) {
    return createElement('img', {
        className: 'keyboard__icon',
        src: key.icon,
        alt: key.value
    });
}

function createEmtpyCell() {
    const element = createElement('td', {
        className: 'keyboard__blanc'
    });
    element.setAttribute('colspan', 5);
    return element;
}

function _createKeyElement(key, state) {
    if (key.value === 'empty') {
        return createEmtpyCell();
    }
    let innerValue = key.icon
        ? createIconElement(key)
        : key.value;
    const keyElement = createElement('td', {
        className: 'keyboard__key',
        id: key.id
    }, innerValue);
    keyElement.setAttribute('colspan', key.size);
    if (key.id.toString() === '16' && state.isShiftOn) keyElement.classList.add('active');
    if (key.id.toString() === '20' && state.isCapsOn) keyElement.classList.add('active');
    if (key.id.toString() === '7') {
        keyElement.append(languageMapping[state.langIndex + 1] || languageMapping[0]);
    }
    return keyElement;
}

export function createKeyboardTableElement(keyboardMap, state) {
    const table = createElement('table', { className: 'keyboard' });
    for (let i = 0; i < keyboardMap.length; i++) {
        const row = createElement('tr', { className: 'keyboard__row' });
        keyboardMap[i].forEach(key => {
            const keyElement = _createKeyElement(key, state);
            row.append(keyElement);
        });
        table.append(row);
    }
    return table;
}
