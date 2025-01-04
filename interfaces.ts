export interface currency {
    id: Number;
    city: string;
    name: string;
    symbol: string;
    currency: string;

}


export interface dashboard {
    id: Number;
    currency: currency;
    difference: Number;
    exchange_Value: Number;
    last_update:string;

}