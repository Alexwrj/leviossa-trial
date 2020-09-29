import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from 'layouts/mainLayout';
import { Row, Col } from 'react-bootstrap';
import Card from 'pages/stock/components/card';
import Filter from 'pages/stock/components/filter';
import { IStore } from 'redux/interfaces';
import { productsRequest } from 'redux/stock/actions';

const Stock: FC = () => {
  const dispatch = useDispatch();
  const {
    error,
    data: {
      products,
    }
  } = useSelector((store: IStore) => store.stockReducer);

  useEffect(() => {
    dispatch(productsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return(
    <MainLayout>
      <Row className="justify-content-xl-center">
        <Col xl="9">
          <Row>
            {products && products.map(product => (
              <Col xl="4">
                <Card {...product} key={product.id} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl="3">
          <Filter />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Stock;
