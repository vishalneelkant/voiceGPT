
export class Credentials {

    private username : String;
    private password : String;

    public getUserName() {
        return this.username;
    }

    public getPassword() {
        this.password;
    }

    public setUserName(username:String){
        this.username = username;
    }

    public setPassword(password: String){
        this.password = password;
    }
}