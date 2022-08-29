import {Partner} from './partner';

export class PartnerDetail extends Partner {
    private _id: string;
    private _active: boolean;
    private _createdBy: string;
    private _createdAt: string;
    private _updatedAt: string;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    set createdBy(value: string) {
        this._createdBy = value;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(value: string) {
        this._createdAt = value;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

    set updatedAt(value: string) {
        this._updatedAt = value;
    }
}
