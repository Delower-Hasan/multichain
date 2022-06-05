
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Container, Nav, Navbar } from 'react-bootstrap'
import React,{ useEffect, useState } from 'react'
import headerImg from '../images/header.png'
import logo from '../images/logo.svg'
import pancake from "../images/pancake.svg"
import metamask from '../images/metamask.svg'
import ConnectWallet from "../images/walletConnect.svg"

import { FaRegCopy } from "react-icons/fa";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'10px'
  },
};
Modal.setAppElement("body");
export default function Header({connectWalletHandler, account, balance}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    account ? setIsOpen(false) : setIsOpen(true)
    
  },[account])

  return (
    <>
    <div className='header' style={{background:`url(${headerImg})`}}>
    <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
            <div className='logo-wrap d-flex align-items-center'>
            <div className='logo'>
                <img src={logo}/>
            </div>
                <div>
                <h2>MultiChain</h2>
            <p>The #1 Multi-Chain Launchpad.</p>
                </div>
            </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
        <Nav.Link href="#home">Airdrop  🔥</Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Nav.Link href="https://pancakeswap.finance/swap#/swap?inputCurrency=0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C" title="Buy on PancakeSwap" className="btn-main"> <img src={pancake} className="pancake"/>Buy TPAD</Nav.Link>

        {!account &&  <Nav.Link href="#link" className="btn-main"  onClick={openModal} > Connect Wallet </Nav.Link>}

         {account && 
          <Nav.Link href="#link" className="" > 
            <div className='connectedWallet-wrap'>
                <div className='walletEth'>
                    <span className='eth'> {balance} ETH</span>
                    <span className='pad'> 0 TPAD</span>
                </div>
                <div className='account-number'> 
                <FaRegCopy/>
                {account?.slice(0,6) +"..."+  account?.slice(-4) }
                </div>
                <svg className='userSvg' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(1.3105926392727087 -1.0745306995694544) rotate(428.1 12 12)" fill="#03525E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(8.457309516249648 5.217316426077632) rotate(153.7 12 12)" fill="#FB1864"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-19.26527146003119 5.45189441438885) rotate(289.8 12 12)" fill="#FA7000"></rect></svg>
            </div>

        </Nav.Link>
         }

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>


    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className='wallet-wrapper' >
            <div className='wallet wallet-1' onClick={connectWalletHandler} >
                <img src={metamask}/>
                <h2>MetaMask</h2>
                <p>Connect to your MetaMask Wallet</p>
            </div>
            <hr/>
            <div className='wallet wallet-2'>
                <img src={ConnectWallet}/>
                <h2>MetaMask</h2>
                <p>Connect to your MetaMask Wallet</p>
            </div>
      </div>


       
       
      </Modal>

    </>
  )
}
