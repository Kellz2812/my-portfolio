import React, { Component } from 'react'
import './App.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import LeftCol from '../../components/mainContent/leftCol/LeftCol';
import RightCol from '../../components/mainContent/rightCol/RightCol';
// import { MainContentWrapper} from '../../components/mainContent/MainContentWrapper.style';
import {Container, Row, Col } from 'reactstrap';
import IntroHero from '../../components/introHero/IntroHero';


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <IntroHero/>
        <Container className="App">         
               <Hero id='about'/>
              <Row>
                  {/* <MainContentWrapper> */}
                    <Col md="6"> <LeftCol/></Col>
                    <Col md="6"> <RightCol/></Col>
                  {/* </MainContentWrapper> */}
              </Row>  
              
        </Container>
        <div className='footer'>
        <Footer/>
        </div>
        
    </>
    );
  }
}



