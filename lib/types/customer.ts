export interface Address {
    'street-one': string;
    city: string;
    'state-region': string;
    'postal-code': string;
    country: string;
    'is-foreign': boolean;
    'is-domestic': boolean;
}

export interface CustomerSuitability {
    id: number;
    'marital-status': string;
    'number-of-dependents': number;
    'employment-status': string;
    occupation: string;
    'employer-name': string;
    'job-title': string;
    'annual-net-income': number;
    'net-worth': number;
    'liquid-net-worth': number;
    'stock-trading-experience': string;
    'covered-options-trading-experience': string;
    'uncovered-options-trading-experience': string;
    'futures-trading-experience': string;
}

export interface Person {
    'external-id': string;
    'first-name': string;
    'last-name': string;
    'birth-date': string;
    'citizenship-country': string;
    'usa-citizenship-type': string;
    'marital-status': string;
    'number-of-dependents': number;
    'employment-status': string;
    occupation: string;
    'employer-name': string;
    'job-title': string;
}

export interface Customer {
    id: string;
    'first-name': string;
    'last-name': string;
    address: Address;
    'mailing-address': Address;
    'customer-suitability': CustomerSuitability;
    'usa-citizenship-type': string;
    'is-foreign': boolean;
    'mobile-phone-number': string;
    email: string;
    'tax-number-type': string;
    'tax-number': string;
    'birth-date': string;
    'external-id': string;
    'citizenship-country': string;
    'subject-to-tax-withholding': boolean;
    'agreed-to-margining': boolean;
    'agreed-to-terms': boolean;
    'has-industry-affiliation': boolean;
    'has-political-affiliation': boolean;
    'has-listed-affiliation': boolean;
    'is-professional': boolean;
    'has-delayed-quotes': boolean;
    'has-pending-or-approved-application': boolean;
    'identifiable-type': string;
    person: Person;
}

export interface CustomerResponse {
    data: Customer;
    context: string;
}
