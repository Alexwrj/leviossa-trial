import React, { FC } from 'react';
import MainLayout from 'layouts/mainLayout';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'pages/stock/components/card';
import Filter from 'pages/stock/components/filter';
import { ICard } from './components/card/interfaces';

const fakeData: Array<ICard> = [
  {
    id: 1,
    link: "#",
    code: 34534345,
    imgUrl: "product.jpg",
    availability: true,
    title: "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    params: [
      {
        "name": "Физический размер",
        "value": "23.2 x 15.2 мм"
      },
      {
        "name": "Диафрагма",
        "value": "CMOS"
      },
      {
        "name": "Формат записи",
        "value": "RAW, JPEG, MP4 и другие"
      },
      {
        "name": "Фокусное расстояние",
        "value": "18-55 мм"
      }
    ],
    inFav: true,
    inComparsion: false
  },
  {
    "id": 2,
    "link": "#",
    "code": 34534345,
    imgUrl: "product.jpg",
    "availability": true,
    "title": "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    "params": [
      {
        "name": "Физический размер",
        "value": "23.2 x 15.2 мм"
      },
      {
        "name": "Диафрагма",
        "value": "CMOS"
      },
      {
        "name": "Формат записи",
        "value": "RAW, JPEG, MP4 и другие"
      },
      {
        "name": "Фокусное расстояние",
        "value": "18-55 мм"
      }
    ],
    "inFav": false,
    "inComparsion": false
  },
  {
    "id": 3,
    "link": "#",
    "code": 34534345,
    imgUrl: "product.jpg",
    "availability": true,
    "title": "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    "params": [
      {
        "name": "Физический размер",
        "value": "23.2 x 15.2 мм"
      },
      {
        "name": "Диафрагма",
        "value": "CMOS"
      },
      {
        "name": "Формат записи",
        "value": "RAW, JPEG, MP4 и другие"
      },
      {
        "name": "Фокусное расстояние",
        "value": "18-55 мм"
      }
    ],
    "inFav": false,
    "inComparsion": false
  },
  {
    "id": 4,
    "link": "#",
    "code": 34534345,
    imgUrl: "product.jpg",
    "availability": true,
    "title": "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    "params": [
      {
        "name": "Физический размер",
        "value": "23.2 x 15.2 мм"
      },
      {
        "name": "Диафрагма",
        "value": "CMOS"
      },
      {
        "name": "Формат записи",
        "value": "RAW, JPEG, MP4 и другие"
      },
      {
        "name": "Фокусное расстояние",
        "value": "18-55 мм"
      }
    ],
    "inFav": false,
    "inComparsion": false
  },
  {
    "id": 3,
    "link": "#",
    "code": 34534345,
    imgUrl: "product.jpg",
    "availability": true,
    "title": "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    "params": [
      {
        "name": "Физический размер",
        "value": "23.2 x 15.2 мм"
      },
      {
        "name": "Диафрагма",
        "value": "CMOS"
      },
      {
        "name": "Формат записи",
        "value": "RAW, JPEG, MP4 и другие"
      },
      {
        "name": "Фокусное расстояние",
        "value": "18-55 мм"
      }
    ],
    "inFav": false,
    "inComparsion": false
  },
]

const Stock: FC = () => {
  return(
    <MainLayout>
      <Row className="justify-content-xl-center">
        <Col xl="9">
          <Row>
            {fakeData.map(data => (
              <Col xl="4">
                <Card {...data} />
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
