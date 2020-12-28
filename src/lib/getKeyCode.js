function getTranslit(char) {
    if (!Number.isNaN(+char)) return String(char);
    const strEng = 'QWERTYUIOP[]\\ASDFGHJKL;\'ZXCVBNM,./';
    const strRus = 'йцукенгшщзхъ\\фывапролджэячсмитьбю.';
    const upperChar = char.toUpperCase();
    const index = strRus.indexOf(char.toLowerCase());
    if (index === -1) return upperChar;
    return strEng[index];
}

export function getKeyCode(char) {
    if (char === '0') return 48;
    const ids = {
        '[': 219,
        ']': 221,
        '-': 189,
        '=': 187,
        ';': 186,
        '\'': 222,
        ',': 188,
        '.': 190,
        '/': 191,
        '`': 192
    };
    if (ids[char]) return ids[char];
    const engChar = getTranslit(char);
    return engChar.charCodeAt(0);
}
