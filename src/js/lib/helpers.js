export const isValidArray = (arr) => arr && arr.length ? arr[0] : null;
export const returnFirstElementOfArray = (arr) => isValidArray(arr) ? arr[0] : null;
export const isValidString = (str) => str && str.length;
export const isValidObject = (obj) => typeof obj !== undefined;
