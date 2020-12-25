import { createElement } from "../domHelper";
import {languageMapping} from '../../config/languageConfig';

export function createKeyboardTableElement(keyboardMap, state) {
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
            className:'keyboard__key',
            id: key.id
        }, key.value);
        keyElement.setAttribute('colspan', key.size);
        
        if(key.id === 'shift' && state.isShiftOn) keyElement.classList.add('active');
        if(key.id === 'capslock' && state.isCapsOn) keyElement.classList.add('active');
        // if(key.id === 'lang') keyElement.innerText = languageMapping[state.langIndex]
        return keyElement;
    }
    return _createTable(keyboardMap)
}