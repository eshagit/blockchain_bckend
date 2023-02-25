const Wallet = require('./index');
const {verifySignature} = require('../elliptic');

describe('Wallet',()=>{
    let wallet;

    beforeEach(()=>{
        wallet = new Wallet();
    });

    it('has a `balance`',()=>{
        expect(wallet).toHaveProperty('balance');
    });

    it('has a `publicKey`',()=>{
        console.log(wallet.publicKey);
        console.log('private key =', wallet.privateKey);
        expect(wallet).toHaveProperty('publicKey');
    });

    describe('signinig data',()=>{
        const data = 'foodata';

        it('verified signature',()=>{

            expect(verifySignature({
                publicKey : wallet.publicKey,
                data,
                signature : wallet.sign(data)
            })).toBe(true);
            
        });

        it('doesnot verify invalid signature',()=>{

        });
    });

})