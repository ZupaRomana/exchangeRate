import {Currencies} from './currencies';

export interface ExchangeRate extends Currencies {
    rate: string;
}
