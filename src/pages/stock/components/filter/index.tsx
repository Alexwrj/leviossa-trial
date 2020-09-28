import React, { FC, FormEvent } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { IFilterProps } from './interfaces';
import Checkbox from './ui/Checkbox';
import './style.scss';

const filterProps: Array<IFilterProps> = [
  {
    label: 'Зеркальные',
    value: 'mirror',
  },
  {
    label: 'Компактные',
    value: 'compact'
  },
  {
    label: 'Мгновенной печати',
    value: 'instant_print'
  },
  {
    label: 'Системные',
    value: 'system',
  },
];

const Filter: FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Submited');
  }

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div className="filter-actions">
        <Button variant="primary" type="submit" block>Показать результат</Button>
        <Button variant="light" block>Очистить фильтр</Button>
      </div>
      <h5>Тип камеры</h5>
      <Row className="justify-content-xl-center">
        {filterProps.map((prop, index) => (
          <Col xl="6">
            <Checkbox {...prop} key={index} />
            </Col>
        ))}
      </Row>
    </form>
  );
};

export default Filter;
