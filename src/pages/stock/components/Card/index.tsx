import React, { FC } from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import { ICard } from './interfaces';
import ButtonBuy from './ui/ButtonBuy';
import './style.scss';

const Card: FC<ICard> = ({ imgUrl, title, params, availability }) => {
  return (
    <BootstrapCard>
      <BootstrapCard.Img variant="top" src={imgUrl} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>
          {availability ? (
            <p>В наличии</p>
          ) : (
            <p>&nbsp;</p>
          )}
          {params.map(param => (
            <div>
              <p>{param.name}</p>
              <p>{param.value}</p>
            </div>
          ))}
        </BootstrapCard.Text>
        <ButtonBuy />
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
