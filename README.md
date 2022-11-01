1 . Clone this repo:

```sh
git clone https://github.com/souravmaji1/NFT.frontend.git
```

2 . Change into the directory:

```sh
cd nextjs-nft-mint-dapp
```

3 . Install dependencies:

```sh
npm install
```

4 . Set up the env files:

Copy the .env(.\*).example files to .env(.\*):

```sh
cp .env.example .env
cp .env.development.example .env.development
cp .env.production.example .env.production
```

Replace the values in the env files with yours as needed.

5 . Set up the config file:

Replace the values in `config/contract-config.json` with yours. This file is shared with the [backend](https://github.com/kjmczk/hardhat-nft-smart-contract).

6 . Make an allowlist (if needed):

Include the applicable addresses in `config/allowlist.json`.

7 . Other settings:

- Replace the images in `public/assets/` with yours
- Replace the favicon files in `public/favicon/` with yours ([Favicon Generator](https://realfavicongenerator.net/))
- You can change the global background color and text color in `pages/_document.tsx`
- You can set your own default styles for specific elements in `styles/globals.css` ([Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles))

8 . Run the server:

```sh
npm run dev
```

## Deploy your dApp

- [Vercel](https://vercel.com/) - The easiest way to deploy your Next.js app
- [Fleek](https://fleek.co/) - Deploy your sites & apps on [IPFS](https://ipfs.io/)

> If you're deploying your dApp to Fleek, uncomment Loader Configuration in `next.config.js`.

> Fleek may take some time for the images to appear after deployment.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
