import { debugLog } from "@/functions/debug"

export const ApiRequest = {
    postJson(url: string, body: any) {
        debugLog(body);
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(15 * 1000) // 10 seconds
        })
    },
    patchJson(url: string, body: any) {
        debugLog(body);
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(15 * 1000) // 10 seconds
        })
    },
    postFormData(url: string, body: any, timeout: boolean = true) {
        debugLog(body);
        return fetch(url, {
            method: 'POST',
            body,
            signal: timeout ? AbortSignal.timeout(15 * 1000) : undefined // 10 seconds
        })
    },
    getJson(url: string, {headers, ...others}: RequestInit) {
        debugLog("backend:" , url);
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            signal: AbortSignal.timeout(15 * 1000), // 10 seconds
            ...others
        })
    },
}