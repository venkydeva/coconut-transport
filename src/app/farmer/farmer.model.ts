export class Farmer {
    FarmerID: number;
    Name: string;
    UserID: number;
    AddressId: number;
    PhoneNumber: string;
    BankDetails: BankDetails;
}

export class BankDetails {
    UniqueID: number;
    Name: string;
    AccountNumber: string;
    IFSCCode: string;
    IsActive: boolean;
    Latitude: number;
    Longitide: number;
}