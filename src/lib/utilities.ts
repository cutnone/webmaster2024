/* eslint-disable @typescript-eslint/no-explicit-any */
import { dev } from "$app/environment";

export default async function wait(time: number) {
    await new Promise((res)=>setTimeout(res, time))
}

export function debounce(func: (...args: any[])=>any, time = 100) {
    let timeout: any;
    return (...args: any[])=>{
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func(...args)
        }, time)
    }
}

export function debounceAsync(func: (...args: any[])=>any, time = 100) {
    let timeout: any;
    let resolver: (value: unknown) => void;
    let promise = new Promise(r=>resolver = r);
    return async (...args: any[])=>{
        clearTimeout(timeout)
        timeout = setTimeout(async ()=>{
            resolver(await Promise.resolve(func(...args)))
            promise = new Promise(r=>resolver = r);
        }, time)
        return await promise;
    }
}

export function steppedRound(value: number, step: number) {
    return Math.round(value / step) * step;
}
export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export const REDIRECT_HOST = dev ? "http://localhost:5173/control" : "https://cloud8point5.com/control";

const SS_CHARS = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
export function getStateString() {
    let ss = "";
    for (let i = 0; i < 30; i++) 
        ss += SS_CHARS[Math.floor(Math.random() * SS_CHARS.length)];
    return ss;
}

export function replaceUndefinedWithNull(object: any) {
    Object.keys(object).forEach(key => {
        if (object[key] === undefined) {
            object[key] = null;
        } else if (typeof object[key] === 'object') {
            replaceUndefinedWithNull(object[key]);
        }
    });

    return object;
}

export function objectifyArrays(object: any) {
    if (typeof object !== "object") return object;
    if (object === null) return object;
    if (Array.isArray(object)) {
        for (const O of object) objectifyArrays(O);
        object = {...object};
        return object;
    }
    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object') {
            object[key] = objectifyArrays(object[key]);
            return object;
        }
    });

    return object;
}

export function arrayifyObjects(object: any) {
    if (typeof object !== "object") return object;
    if (object === null) return object;
    if (Array.isArray(object)) {
        for (const O of object) arrayifyObjects(O);
        object = {...object};
        return object;
    }
    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object' && object[key] !== null) {
            object[key] = arrayifyObjects(object[key]);
            if (Object.keys(object[key]).every(v=>!isNaN(parseInt(v)))) {
                object[key] = Object.values(object[key]);
            }
            return object;
        }
    });

    return object;
}

export function weightedRandom(items: any[], weights: number[]) {
    let i;

    for (i = 1; i < weights.length; i++)
        weights[i] += weights[i - 1];

    const random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;

    return items[i];
}