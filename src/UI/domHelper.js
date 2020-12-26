/* eslint-disable no-param-reassign */
export function createElement(type, props, ...children) {
    const element = document.createElement(type);
    Object.keys(props).forEach(key => {
        element[key] = props[key];
    });
    children.forEach(child => {
        element.append(child);
    });
    return element;
}

export function getCursorPosition(current) {
    return {
        start: current.selectionStart,
        end: current.selectionEnd
    };
}
export function setCursorPositionTo(current, value) {
    current.selectionStart = value;
    current.selectionEnd = value;
}
