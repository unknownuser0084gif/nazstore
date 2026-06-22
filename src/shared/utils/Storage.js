//LocalStorage
/**
 * only send object|string|number (not json!)
 */
export function Add(key, value) {
     localStorage.setItem(key, JSON.stringify(value));
}
/**
 * get an data object from your key
 */
export function Get(key) {
     return JSON.parse(localStorage.getItem(key));
}
/**
 * delete data from local storage with this key
 */
export function Del(key) {
     localStorage.removeItem(key);
}