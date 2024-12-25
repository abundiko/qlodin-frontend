
// type Env = 'production' | 'development'
const ENV = process.env.NEXT_PUBLIC_ENV || 'production';

export function debugLog(...args: any[]) {
    if (ENV === 'development') {
        return console.log(...args);
    }
}