export function randomArrayValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export function randomPrefixValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.prefix.length);
    return arr.prefix[randomIndex];
}

export function randomSufixValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}