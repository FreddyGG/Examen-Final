import React, { useState, useEffect } from 'react';
import { Layout, Image, Row, Col, Table, Space, Card} from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import Pokemonlist from './Components/Pokemonlist';
const { Header, Footer, Content, Sider } = Layout;


function Pokemon (props) {
    return(
        <Layout>
            <Header style={{height: 70}}>
                <div style={{color: "white", fontSize:40, textAlign: "center"}}>
                    <strong>Pokemon's World</strong>
                    </div>
            </Header>
        <Layout>
            <Sider style={{background: "lightgray", width: 300}}>
                    <p>
                        <strong style={{color: "black", fontSize:20, margin: 10}}>Types</strong>
                    </p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Water</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Rock</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Fire</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Flying</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Grass</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Electric</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Psychic</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Dark</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Fighting</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Ghost</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Steel</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Legends</p>
                    <br></br>
                    <p>
                        <strong style={{color: "black", fontSize:20, margin: 10}}>Others</strong>
                    </p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Curiosities</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Towns</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Gys</p>
                    <p></p>
                    <br/>
            </Sider>      
            <Content>
                <div style={{color: "black", fontSize:30}}>
                    <strong>Pokemon List</strong>
                    </div>
                    <Pokemonlist />

            </Content>
            </Layout>
            <Footer>
                <div>
                    Siguenos en nuestras redes:
                    <Row>
      <Col span={8}>
      <div>
                        <Image
                        width={25}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                        />
                        @pokemonsworld
                    </div>
                    </Col>
      <Col span={8}>
      <div>
                        <Image
                        width={30}
                        src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-6.png"
                        />
                        @pokemonsworld
                    </div>
                    </Col>
      <Col span={8}>
      <div>
                        <Image
                        width={30}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/YouTube_icon.png/800px-YouTube_icon.png"
                        />
                        Mundo Pokemon
                    </div>
      </Col>
    </Row>
    </div>
            </Footer>
        </Layout>
    )
}

export default Pokemon;