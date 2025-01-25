export interface Address {
    'street-one': string;
    'city': string;
    'state-region': string;
    'postal-code': string;
    'country': string;
    'is-foreign': boolean;
    'is-domestic': boolean;
}

export interface CustomerSuitability {
    'id': number;
    'marital-status': 'MARRIED' | 'SINGLE' | 'DIVORCED' | 'WIDOWED';
    'number-of-dependents': number;
    'employment-status': 'EMPLOYED' | 'RETIRED' | 'STUDENT' | 'UNEMPLOYED';
    'occupation': string;
    'employer-name': string;
    'job-title': string;
    'annual-net-income': number;
    'net-worth': number;
    'liquid-net-worth': number;
    'stock-trading-experience': 'NONE' | 'LIMITED' | 'GOOD' | 'EXTENSIVE';
    'covered-options-trading-experience': 'NONE' | 'LIMITED' | 'GOOD' | 'EXTENSIVE';
    'uncovered-options-trading-experience': 'NONE' | 'LIMITED' | 'GOOD' | 'EXTENSIVE';
    'futures-trading-experience': 'NONE' | 'LIMITED' | 'GOOD' | 'EXTENSIVE';
}

export interface Person {
    'external-id': string;
    'first-name': string;
    'last-name': string;
    'birth-date': string;  // format: YYYY-MM-DD
    'citizenship-country': string;
    'usa-citizenship-type': 'Citizen' | 'Resident' | 'Not Applicable';
    'marital-status': 'MARRIED' | 'SINGLE' | 'DIVORCED' | 'WIDOWED';
    'number-of-dependents': number;
    'employment-status': 'EMPLOYED' | 'RETIRED' | 'STUDENT' | 'UNEMPLOYED';
    'occupation': string;
    'employer-name': string;
    'job-title': string;
}

export interface Customer {
    'id': 'me';  // Only 'me' is allowed per API docs
    'first-name': string;
    'last-name': string;
    'address': Address;
    'mailing-address': Address;
    'customer-suitability': CustomerSuitability;
    'usa-citizenship-type': 'Citizen' | 'Resident' | 'Not Applicable';
    'is-foreign': boolean;
    'mobile-phone-number': string;  // format: +1XXXXXXXXXX
    'email': string;
    'tax-number-type': 'SSN';  // Only SSN supported currently
    'tax-number': string;  // Masked except last 4 digits
    'birth-date': string;  // format: YYYY-MM-DD
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
    'identifiable-type': 'Person';  // Only Person supported currently
    'person': Person;
}

export interface CustomerResponse {
    data: Customer;
    context: string;
}
