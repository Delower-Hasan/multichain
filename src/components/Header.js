import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import headerImg from '../images/header.png'
import logo from '../images/logo.svg'
import pancake from "../images/pancake.svg"
export default function header() {
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
        <Nav.Link href="#link" title="Buy on PancakeSwap" className="btn-main"> <img src={pancake} className="pancake"/>Buy TPAD</Nav.Link>
        <Nav.Link href="#link" className="btn-main"> Connect Wallet </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

    </>
  )
}
