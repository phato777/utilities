export const convertUnits = (size: number): string => {
    const bytes = ['B','KB','MB','GB','TB'];
    let measurement = '';
    for(let val of bytes) {
        measurement = val;
        if(size > 1024) {
            size = size / 1024;
        } else {
            break;
        }
    }

    return size.toFixed(2) + " " + measurement;
}