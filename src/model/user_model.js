import { decorate, observable, action, computed } from "mobx";

class userModel {
    id = Math.random();
    uid;
    username;
    telephone;
    address;
    logintype;
    verifyed;

    get getAllData() {
        const data = {
            uid: this.uid,
            username: this.username,
            telephone: this.telephone,
            address: this.address,
            verifyed:this.verifyed,
            logintype:this.logintype
        };
        return data;
    }

    allSet(jsonData) {
       
        if (jsonData['uid']) {
            this.uid = jsonData['uid'];
        }

        if (jsonData['username']) {
            // console.log(jsonData['username']);
            this.username = jsonData['username'];
        }

        if (jsonData['telephone']) {
            this.telephone = jsonData['telephone'];
        }

        if (jsonData['address']) {
            this.address = jsonData['address'];
        }

        if (jsonData['verifyed']) {
            this.verifyed = jsonData['verifyed'];
        }

        if (jsonData['logintype']) {
            this.logintype = jsonData['logintype'];
        }
    }

    uidSet(uid) {
        this.uid = uid;
    }

    usernameSet(username) {
        this.username = username;
    }

    telephoneSet(telephone) {
        this.telephone = telephone;
    }

    addressSet(address) {
        this.address = address;
    }

    logintypeSet(logintype) {
        this.logintype = logintype;
    }

    verifyedSet(verifyed) {
        this.verifyed = verifyed;
    }

    clearAll() {
        this.uid = '';
        this.username = '';
        this.telephone = '';
        this.address = '';
        this.logintype = '';
    }
}

decorate(userModel, {
    uid: observable,
    username: observable,
    telephone: observable,
    address: observable,
    verifyed:observable,
    logintype:observable,
});

export default new userModel();