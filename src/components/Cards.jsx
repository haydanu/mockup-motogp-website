import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from 'reactstrap';

const Cards = (props) => {
  return (<div className='cards'>
    <CardDeck>
      <Card h-100="h-100">
        <a href="https://www.autosport.com/motogp/news/136542/honda-announces-lorenzo-twoyear-deal">
        <CardImg top="top" width="100%" height="170px" src={require('./images/card-1.jpg')} alt="news 1"/>
        </a>
        <CardBody>
          <CardTitle>Honda announces Jorge Lorenzo's two-year MotoGP deal for 2019/2020 !!!!</CardTitle>
          <hr/>
          <CardText>Honda has announced Jorge Lorenzo will join Marc Marquez on a two-year deal in its factory MotoGP line-up.</CardText>
        </CardBody>
      </Card>
      <Card>
        <a href='https://www.autosport.com/motogp/news/136553/dovizioso-marquez-crash-gold-for-title-bid'>
        <CardImg top="top" width="100%" height="170px" src={require('./images/card-2.jpg')} alt="news 2"/>
        </a>
        <CardBody>
          <CardTitle>Dovizioso: Marquez's Mugello crash 'like gold' for MotoGP title bid</CardTitle>
          <hr/>
          <CardText>Ducati's Andrea Dovizioso has described MotoGP points leader Marc Marquez's crash in the Italian Grand Prix as being "like gold" for his own title ambitions.</CardText>
        </CardBody>
      </Card>
      <Card>
        <a href='https://www.autosport.com/motogp/news/136541/ducati-picks-petrucci-to-replace-lorenzo'>
        <CardImg top="top" width="100%" height="170px" src={require('./images/card-3.jpg')} alt="news 3"/>
        </a>
        <CardBody>
          <CardTitle>Ducati MotoGP team opts for Danilo Petrucci as Lorenzo replacement</CardTitle>
          <hr/>
          <CardText>Ducati has picked Danilo Petrucci as Honda-bound Jorge Lorenzo's replacement at its factory MotoGP squad for the 2019 season, Autosport has learned.</CardText>
        </CardBody>
      </Card>
      <Card>
        <a href='https://www.autosport.com/motogp/news/136527/honda-makes-pedrosa-exit-official'>
        <CardImg top="top" width="100%" height="170px" src={require('./images/card-4.jpg')} alt="news 4"/>
        </a>
        <CardBody>
          <CardTitle>Honda makes Pedrosa exit from works MotoGP team for 2019 official</CardTitle>
          <hr/>
          <CardText>The Honda MotoGP team has confirmed it will part ways with Dani Pedrosa at the end of the 2018 season.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  </div>);
};

export default Cards;
