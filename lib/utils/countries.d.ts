interface ICountry {
    key: string;
    title: string;
}
export declare class Countries {
    countries: ICountry[];
    constructor();
    get(country: string): ICountry | undefined;
}
export {};
