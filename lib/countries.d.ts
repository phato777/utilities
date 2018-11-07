interface ICountry {
    key: string;
    title: string;
}
export default class Countries {
    countries: ICountry[];
    constructor();
    get(country: string): ICountry | undefined;
}
export {};
