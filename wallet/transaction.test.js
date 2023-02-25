const Transcation = require('./transaction');
const Wallet = require('./index');

describe('Transaction',()=>{
    let transaction,senderWallet,recipient,amount;

    beforeEach(()=>{
        senderWallet = new Wallet();
        recipient = 'recipient-public-key';
        amount = 50;
        transcation = new transaction({senderWallet,recipient,amount});
    });

    it('has an `id`',()=>{
        expect(transaction).toHaveProperty('id');
    });

    describe('outputMap',()=>{

        it('has an outputMap', ()=>{
            expect(transaction).toHaveProperty('outputMap');
        });

        it('outputs the amount to the recipeint',()=>{
            expect(transaction.outputMap[recipient]).toEqual(amount);
        });

        it ('outputs the remaining balance of the `senderWallet`',()=>{
            expect(transaction.outputMap[senderWallet.publicKey]).toEqual(senderWallet.balance-amount);
        });
    })
})