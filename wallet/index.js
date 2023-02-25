const {STARTING_BALANCE} = require('../config.js');
const {ec} = require('../elliptic');
const cryptoHash = require('../crypto-hash');

class Wallet {
    constructor(){
        this.balance = STARTING_BALANCE;
        this.keyPair = ec.genKeyPair();

        this.publicKey = this.keyPair.getPublic().encode('hex');
        this.privateKey = this.keyPair.getPrivate();
    }

    sign(data){
        return this.keyPair.sign(cryptoHash(data));
    }
};

module.exports = Wallet;