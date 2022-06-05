import "./App.css";
import Header from './components/Header';

import { FaSpaceShuttle } from "react-icons/fa";
// import Web3 from 'web3'
import { useEffect, useState } from "react";
import {ethers} from "ethers";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};


	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

  
  return (
    <>
    <header>
        <Header connectWalletHandler={connectWalletHandler} account={defaultAccount} balance = {userBalance} />
    </header>
    <main>
    <div className="MultiChain-section bg-dark2">
    <h2 className="body-h2" > Want to launch your project on MultiChain? </h2>

    <a className="btn-apply" href="https://docs.google.com/forms/d/e/1FAIpQLSer-PUjhMDG5fmasXYkmvY3EgpTC-yaI4up5by6Hx5g_9wZaw/viewform" ><FaSpaceShuttle/>  Apply to Launch </a>


   </div>

   <div className="footer bg-dark2"> 
      <div className="container">
            <div className="rosadfw d-flex align-items-center justify-content-between">
                <p> Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea .</p>
                <p >	&copy; Copyright MultiChain 2022. All rights reserved.</p>
            </div>    
        </div>
   </div>

      


    </main>

    </>
  )
}

export default App;
