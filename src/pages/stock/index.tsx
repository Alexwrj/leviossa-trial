import React, { FC } from 'react';
import MainLayout from 'layouts/mainLayout';
import { Row, Col } from 'react-bootstrap';
import Card from 'pages/stock/components/Card';
import { ICard } from './components/Card/interfaces';

const fakeData: Array<ICard> = [
  {
    id: 1,
    link: "#",
    code: 34534345,
    imgUrl: "https://miro.medium.com/max/1200/1*P_1D58qHvIFNlpmMZe4nuA.png",
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
    imgUrl: "https://miro.medium.com/max/1200/1*P_1D58qHvIFNlpmMZe4nuA.png",
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
    imgUrl: "https://miro.medium.com/max/1200/1*P_1D58qHvIFNlpmMZe4nuA.png",
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
  }
]

const Stock: FC = () => {
  return(
    <MainLayout>
      <Row>
        {fakeData.map(data => (
          <Col>
            <Card {...data} />
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
};

export default Stock;