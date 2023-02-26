const Wallet = require('./index');
const {verifySignature} = require('../elliptic');
const Transaction = require('./transaction');

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

    describe('create Transaction()',()=>{

        describe('amount exceeds balance',()=>{
            it('throws an error',()=>{
                expect(()=>wallet.createTransaction({amount:99999, recipient:'foo-recipient'})).toThrow('Amount exceeds balance');
            })
        });

        describe('amount is valid',()=>{
            let transaction,amount,recipient;

            beforeEach(()=>{
                amount = 50;
                recipient = 'foo-recipient';
                transaction = wallet.createTransaction({amount,recipient});
            })
            it('creates instance of `Transaction`',()=>{
                expect(transaction instanceof Transaction).toBe(true);

            });

            it('matches transaction input with wallet',()=>{
                expect(transaction.input.address).toEqual(wallet.publicKey);

            });

            it('outputs amount recipient',()=>{
                expect(transaction.outputMap[recipient]).toEqual(amount);
            });

        });
    })

})