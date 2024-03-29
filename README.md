# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## A Gabby NFT Project

### Compile

```bash
yarn compile
```

### Unit Test

```bash
yarn test
```

### upload images to NFT.Storage

```bash
# already uploaded to https://bafybeicewozb5c747lfxouvntmfbkilekfmen3gimjkk6utvfu3sktk26m.ipfs.nftstorage.link/images/  for testing
npx ipfs-car --pack images --output images.car
```

### upload metadata to NFT.Storage

```bash
# already uploaded to https://bafybeiaaoi5r2rhltbjdgk3gh277cgc3egqlagmikjm6zgt37qvxawelya.ipfs.nftstorage.link/metadata/ for testing
npx ipfs-car --pack metadata --output metadata.car
```

### Mumbai testnet

This contract address:
https://mumbai.polygonscan.com/address/0x0c154bd3539ac3975fc98e2517c4e58a8a1865f9#code

### Opensea testnet Itmes

https://testnets.opensea.io/collection/gabby-nft

## References

- https://github.com/jklepatch/eattheblocks/blob/master/screencast/394-nft-airdrop
- https://www.youtube.com/watch?v=7emKvvx-2S4
- https://docs.alchemy.com/docs/how-to-airdrop-nfts
- https://blog.thirdweb.com/guides/how-to-airdrop-nfts-to-a-list-of-wallets/
- https://www.binance.com/en/blog/nft/getting-started-and-staying-safe-with-nft-airdrops-3968580475401030464
- https://docs.opensea.io/docs/part-3-adding-metadata-and-payments-to-your-contract
- https://docs.opensea.io/docs/2-adding-metadata
- https://docs.opensea.io/docs/3-viewing-your-items-on-opensea


