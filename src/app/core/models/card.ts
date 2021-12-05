export interface Card {
    primaryCard: PrimaryCard;
    expense: Expense;
    balance: Balance;
}

export interface Balance {
    current: number;
    credit: number;
    provisions: number;
}

export interface Expense {
    current: number;
    limit: number;
}

export interface PrimaryCard {
    bank: string;
    type: string;
    name: string;
    number: string;
    expiry: string;
    ccv: number;
    active: boolean;
}
