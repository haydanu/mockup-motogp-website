import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Cards = (props) => {
  return (
    <div>

        <Card className='noneBorder'>
          <Row>
            <Col sm='3'>
        <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Oliveira and KTM back on top</CardTitle>
          <CardSubtitle>The Portuguese rider secured his and KTM’s first win of the season at the Italian GP</CardSubtitle>
          <CardText>Miguel Oliveira (Red Bull KTM Ajo) returned to the top step of the podium at the Gran Premio d’Italia Oakley after a fantastic battle with home rider Lorenzo Baldassarri (Pons HP40).

The Portuguese rider won the final three races of the 2017 season, but the start to 2018 has been slightly more difficult than expected, with KTM failing to win in the opening five rounds. However, Oliveira crossed the line 0.184 ahead of fellow Championship rival Baldassarri to secure the Austrian factory’s first victory of 2018.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Col>

  <Col sm='3'>
        <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Col>



  <Col sm='3'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Col>

      <Col sm='3'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Col>
    </Row>
</Card>

    </div>
  );
};

export default Cards;
