const Transaction = require('./Transaction');
const Wallet = require('./Wallet_Index');

describe('Transaction', () => {
    let transaction, wallet, recipient, amount;


    beforeEach(() => {
        wallet = new Wallet();
        amount = 500;
        recipient = 'r3c1p13nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });


    it('outputs the `amount` subtracted from the wallet balance', () => {
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount)
    });

    it('outputs the `amount` added the recipient', () => {
        expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount);
    });

    it('inputs the balance of the wallet', () => {
        expect(transaction.input.amount).toEqual(wallet.balance);
    });

    it('validates a valid transaction', () => {
        expect(Transaction.verifyTransaction(transaction)).toBe(true);
    });

    it('invalidates a corrupt transaction', () => {
        transaction.outputs[0].amount = 50000;
        expect(Transaction.verifyTransaction(transaction)).toBe(false);
    });

    describe('transacting with an amount that exceeds the balance', () => {
        beforeEach(() => {
            amount = 50000;
            transaction = Transaction.newTransaction(wallet, recipient, amount);
        });

        it('does not create the transaction', () => {
            expect(transaction).toEqual(undefined);
        })
    });

    // describe('Updating a transaction. In the event of multiple transactions for the same individual in a short time', () => {
    //     let nextAmount, nextRecipient;


    //     beforeEach(() => {
    //         nextAmount = 20;
    //         nextRecipient = 'n3xt-4ddr355';
    //         transaction = transaction.update(wallet, nextRecipient, nextAmount);
    //     });
    //     it('subtracts the next amount from the sender output', () => {
    //         expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount - nextAmount);
    //     });

    //     it('outputs the amount for the next recipient', () => {
    //         expect(transaction.outputs.find(output => output.address === nextRecipient).amount).toEqual(nextAmount);
    //     });
    // });
});