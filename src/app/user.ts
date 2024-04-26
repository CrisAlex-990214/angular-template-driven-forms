export interface User {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: Address
    notes: string
}

export interface Address {
    streetAddress: string
    city: string
    state: string
    home: boolean
}