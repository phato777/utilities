export function classes(classes: (string | null | undefined)[]): string {
    return classes.join(' ').trim();
}

export function strstr(needle: string, haystack: string, caseSensitive: boolean = false): boolean {
    if(caseSensitive) {
        return haystack.indexOf(needle) !== -1;
    }

    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
}