import { createElement } from "../domHelper";

export function createKeyboardTableElement(keyboardMap) {
    function _createTable(keyboardMap) {
        const table = createElement('table', {className: 'keyboard'});
        for(let i = 0; i < keyboardMap.length; i++) {
            const row = createElement('tr', {className:'keyboard__row'})
            for(let key of keyboardMap[i]) {                
                const keyElement = _createKeyElement(key);
                row.append(keyElement);
            }
            table.append(row);
        }
        return table;
    };

    function _createKeyElement(key) {
        const keyElement = createElement('td', {
            className:'keyboard__key'
        }, key.value);
        keyElement.setAttribute('colspan', key.size);
        return keyElement
    }
    return _createTable(keyboardMap)
}