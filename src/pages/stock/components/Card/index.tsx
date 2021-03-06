import React, { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { favoriteRequest } from 'redux/stock/actions';
import { Card as BootstrapCard } from 'react-bootstrap';
import { ICard, IAvailability } from './interfaces';
import ButtonBuy from './ui/ButtonBuy';
import ButtonLike from './ui/ButtonLike';
import ButtonCompare from './ui/ButtonCompare';
import './style.scss';

const Availability: FC<IAvailability> = ({ availability }) => (
  <>
    {availability ? (
      <div className="card-available">
        <span>В наличии</span>
      </div>
    ) : (
      <p>&nbsp;</p>
    )}
  </>
);

const Card: FC<ICard> = ({ 
  id,
  imgUrl,
  title,
  params,
  availability,
  inFav,
}) => {
  const dispatch = useDispatch();

  const handleAddToFavorite = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(favoriteRequest(id));
  }

  return (
    <BootstrapCard>
      <BootstrapCard.Img variant="top" src={imgUrl} />
      <BootstrapCard.Body>
        <Availability availability={availability} />
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
            <ButtonLike inFav={inFav} handleClick={handleAddToFavorite} />
            <ButtonCompare />
          </div>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
