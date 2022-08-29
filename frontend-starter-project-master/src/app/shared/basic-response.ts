export class BasicResponse {
    private _success: boolean;
    private _errorCode: string;
    private _message: string;
    private _result?: any;

    get success(): boolean {
        return this._success;
    }

    get errorCode(): string {
        return this._errorCode;
    }

    get message(): string {
        return this._message;
    }

    get result(): any {
        return this._result;
    }
}
