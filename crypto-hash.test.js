const {cryptoHash} = require('./elliptic');
describe('cryptoHash()',()=>{
    const fooHash = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae';
    const footestHash = cryptoHash('foo');
    it('cryprohash test',()=>{
        expect(footestHash).toEqual(fooHash);
    })
})