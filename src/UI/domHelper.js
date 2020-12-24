export function createElement(type, props, ...children) {
    const element = document.createElement(type);
    for(let key in props) {
        element[key] = props[key];
    }
    for(let child of children) {
        element.append(child);
    }
    return element;
}

export function getCursorPosition(current) {
    return {
        start: current.selectionStart,
        end: current.selectionEnd
    }
}
export function setCursorPositionTo(current, value) {
    current.selectionStart = value;
    current.selectionEnd = value;
}
