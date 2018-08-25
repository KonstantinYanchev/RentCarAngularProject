export class UserModel {
    constructor(public email?: string,
        public password?: string) {
            this.email = '';
            this.password = '';
    }
}