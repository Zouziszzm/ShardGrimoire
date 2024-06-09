# DeFi Assignment: DeFi DApp Development

## Overview
This DeFi application is a mobile-friendly app that provides wallet connectivity, token swapping, and visualization of cryptocurrency prices. The app allows users to connect their Ethereum wallets using MetaMask or WalletConnect and view real-time price charts for various cryptocurrencies.
  
##video Preview


https://github.com/Zouziszzm/swapapp/assets/63239385/4aafe7ba-bd65-4a48-ba51-7625d1dbd803



##Tech Stcak
Editor:NVIM, Windows Terminal.
Framework: Nextjs.
Languages:Typescript.
Depes: Chartjs, Coingeeko.


## Features
- **Wallet Connection:** The app provides a user-friendly interface for connecting Ethereum wallets, ensuring secure session establishment and error management.
- **Cryptocurrency Price Charting:**
  - *Basic Implementation:* Utilizes a charting library to display interactive charts of cryptocurrency prices, with historical data fetched from APIs like CoinGecko or CryptoCompare. Users can filter data by day, week, and month.
  - *Bonus Implementation:* Real-time data streaming is achieved through websocket connections to APIs, allowing charts to dynamically update with live price changes.
- **Token Swapping Mechanism:** Integrates a decentralized exchange protocol API (e.g., 0x or Bungee) for ERC-20 token swaps directly within the application. Features include fetching dynamic exchange pair data, managing token approvals, executing swap transactions, and handling blockchain interactions.
- **Login Functionality:** The app includes a login feature that functions normally, enhancing user security and access control.

## Implementation Details
- **Wallet Connectivity:** Implemented Web3 modal libraries to connect with Ethereum wallets, supporting MetaMask and WalletConnect.
- **Cryptocurrency Conversion:** As a first attempt, a dropdown menu was added to fetch and display various cryptocurrencies. Future iterations aim to implement actual conversion functionality.
- **Price Chart:** A graph was added to show the price of each cryptocurrency, providing users with a visual representation of price trends.
##Images/Preview
![image](https://github.com/Zouziszzm/swapapp/assets/63239385/c3227ebb-ac7b-4cdc-8298-fe913922ebb3)
![image](https://github.com/Zouziszzm/swapapp/assets/63239385/0d00a093-cf65-43ff-a078-2ef8c374cc86)
![image](https://github.com/Zouziszzm/swapapp/assets/63239385/69cc1ab1-f1c9-4015-b8af-fdfc70beb148)


## Note
I would like to express that while the application may not meet all expectations, I've dedicated my best efforts to its development. The implementation of the conversion feature was challenging for me, and as a result, I've included a dropdown menu to fetch cryptocurrencies instead. I'm committed to learning and improving, and I hope my dedication and willingness to learn are evident in the work presented.

## Installation Guide
To run the application locally, follow these steps:
1. Download the repository from GitHub.
2. Extract the downloaded files to a local directory.
3. Open a terminal and navigate to the project directory.
4. Run `yarn install` to install the necessary dependencies.
5. Run `yarn dev` to start the development server.
6. Access the application in your browser at [http://localhost:3000](http://localhost:3000).
