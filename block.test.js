//import Block from "./block";
const Block = require('./block');
const { GENESIS_DATA } = require('./config');

describe ('Block',()=>{
    const timestamp = 'a-date';
    const lastHash = 'foo-lastHash';
    const hash = 'foo-hash';
    const data = ['blockchain','data'];
    const block = new Block({timestamp,lastHash,hash,data});
    it ('has timestamp,hash', ()=>{
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    })
});

describe('genesis()',()=>{
    const genesisBlock  = Block.genesis();
    console.log('genesis block=',genesisBlock);
    it('return a Block Instance',()=>{
        expect(genesisBlock instanceof Block).toBe(true);
    });
    it('return genesis data',()=>{
        expect(genesisBlock).toEqual(GENESIS_DATA);
    });


});

describe('mineBlock()',()=>{
    const genesisBlock  = Block.genesis();
    const mineBlock = Block.mineBlock({lastBlock:genesisBlock,data:'minedata'});
    const mineBlockdifficulty = mineBlock.difficulty;
    const mineBlockHash = mineBlock.hash;
    console.log("mineblockhash=",mineBlockHash);
    it('checking difficulty level',()=>{
        expect(mineBlockHash.substring(0,mineBlockdifficulty)).toEqual('0'.repeat(mineBlockdifficulty));
    });
})

