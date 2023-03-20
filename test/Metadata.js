const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("NTFMetadata", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployNTFAirdropFixture() {

      // Contracts are deployed using the first signer/account by default
      const [owner, mintTo1, mintTo2, mintTo3] = await ethers.getSigners();
  
      const airdrop = await ethers.getContractFactory("GabbyNFTAirdrop");
      const airdropContract = await airdrop.deploy();
      await airdropContract.deployed();
  
      return { airdropContract, owner, mintTo1, mintTo2, mintTo3 };
    }
  
    describe("Metadata", function () {
      it("Should got tokenURI", async function () {
        const { airdropContract, owner, mintTo1, mintTo2, mintTo3 } = await loadFixture(deployNTFAirdropFixture);

        expect(await airdropContract.owner()).to.equal(owner.address);

        await airdropContract.setBaseURI("https://bafybeiaaoi5r2rhltbjdgk3gh277cgc3egqlagmikjm6zgt37qvxawelya.ipfs.nftstorage.link/metadata/")

        await airdropContract.airdropNfts([mintTo1.address, mintTo2.address, mintTo3.address]);

        expect(await airdropContract.tokenURI(1)).to.equal("https://bafybeiaaoi5r2rhltbjdgk3gh277cgc3egqlagmikjm6zgt37qvxawelya.ipfs.nftstorage.link/metadata/1");
        expect(await airdropContract.tokenURI(2)).to.equal("https://bafybeiaaoi5r2rhltbjdgk3gh277cgc3egqlagmikjm6zgt37qvxawelya.ipfs.nftstorage.link/metadata/2");
        
       
      });
    });
  });
