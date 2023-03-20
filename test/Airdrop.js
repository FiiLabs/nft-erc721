const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("NTFAirdrop", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployNTFAirdropFixture() {

      // Contracts are deployed using the first signer/account by default
      const [owner, airdropAddr1, airdropAddr2, airdropAddr3] = await ethers.getSigners();
  
      const airdrop = await ethers.getContractFactory("GabbyNFTAirdrop");
      const airdropContract = await airdrop.deploy();
      await airdropContract.deployed();
  
      return { airdropContract, owner, airdropAddr1, airdropAddr2, airdropAddr3 };
    }
  
    describe("Airdrop", function () {
      it("Should airdrop", async function () {
        const { airdropContract, owner, airdropAddr1, airdropAddr2, airdropAddr3 } = await loadFixture(deployNTFAirdropFixture);

        expect(await airdropContract.owner()).to.equal(owner.address);

        await airdropContract.airdropNfts([airdropAddr1.address, airdropAddr2.address, airdropAddr3.address]);
        expect(await airdropContract.balanceOf(airdropAddr1.address)).to.equal(1);
        expect(await airdropContract.balanceOf(airdropAddr2.address)).to.equal(1);
        expect(await airdropContract.balanceOf(airdropAddr3.address)).to.equal(1);

        expect(await airdropContract.ownerOf(0)).to.equal(airdropAddr1.address);
        expect(await airdropContract.ownerOf(1)).to.equal(airdropAddr2.address);
        expect(await airdropContract.ownerOf(2)).to.equal(airdropAddr3.address);

       
      });
    });
  });
