export function map2D(arr, cb) {
    return arr.map(row => row.map(cb));
}

export function forEach2D(arr, cb) {
    arr.forEach(row => row.forEach(cb));
}
