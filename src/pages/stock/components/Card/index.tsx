import React, { FC } from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import { ICard } from './interfaces';
import ButtonBuy from './ui/ButtonBuy';
import ButtonLike from './ui/ButtonLike';
import ButtonCompare from './ui/ButtonCompare';
import './style.scss';

const Card: FC<ICard> = ({ imgUrl, title, params, availability }) => {
  return (
    <BootstrapCard>
      <BootstrapCard.Img variant="top" src={imgUrl} />
      <BootstrapCard.Body>
        {availability ? (
          <div className="card-available">
            <span>В наличии</span>
          </div>
        ) : (
          <p>&nbsp;</p>
        )}
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        {params.map(param => (
          <BootstrapCard.Text>
            <span>{param.name}</span>
            {': '}
            <b>{param.value}</b>
          </BootstrapCard.Text>
        ))}
        <div className="card-actions">
          <ButtonBuy />
          <div className="card-actions__icons">
            <ButtonLike />
            <ButtonCompare />
          </div>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
