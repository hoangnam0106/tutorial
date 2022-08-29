export class Partner {
    private _name: string;
    private _description: string;
    private _businessRegistrationNo: string;
    private _businessType: string;
    private _address: string;
    private _primaryPhone: string;
    private _secondaryPhone: string;
    private _email: string;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get businessRegistrationNo(): string {
        return this._businessRegistrationNo;
    }

    set businessRegistrationNo(value: string) {
        this._businessRegistrationNo = value;
    }

    get businessType(): string {
        return this._businessType;
    }

    set businessType(value: string) {
        this._businessType = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get primaryPhone(): string {
        return this._primaryPhone;
    }

    set primaryPhone(value: string) {
        this._primaryPhone = value;
    }

    get secondaryPhone(): string {
        return this._secondaryPhone;
    }

    set secondaryPhone(value: string) {
        this._secondaryPhone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
