export function toMap(key: string, arr: any[]): Map<string | number, any> {
    return new Map(arr.map(item => [item[key], item]));
}

export function toDict(key: string, arr: any[]): { [key: string]: any } {
    const len = arr.length;
    const dict: { [key: string]: any } = {};
    for (let i = 0; i < len; ++i) {
        dict[arr[i][key]] = arr[i];
    }
    return dict;
}
