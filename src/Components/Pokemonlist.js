import React, { useState, useEffect } from 'react';
import { Layout, Image, Row, Col, Table, Space, Card} from 'antd';
import axios from 'axios';

    function Pokemonlist (props) {

        const [cards, setCards] = useState([]);
        const getCards = () => {
            axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
            .then(res => {
                console.log(res.data.cards);
                setCards(res.data.cards);
        })
            .catch(err => {
                console.log(err);
        });
        }
    
        useEffect(() => {
            getCards();
        }, [])

        return(
            <Row>
                {
                cards.map(cards =>{
                    return(
                            <Col span={4.5}>
                                <Card title={cards.name} style={{ width: 250 }}>
                                <Image width={200} src={cards.imageUrl} />
                                <div>Pokedex Number: {cards.nationalPokedexNumber}</div>
                                <div>Hit Points: {cards.hp}</div>
                                <div>Rarity: {cards.rarity}</div>
                                <div>Series: {cards.series}</div>
                                <div>Set: {cards.set}</div>
                                </Card>
                                <br></br>
                            </Col>
                    )
                })
                }
                </Row>
        )
    
    }

    export default Pokemonlist;