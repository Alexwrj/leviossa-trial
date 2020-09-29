import React, { FC, FormEvent, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { IFilterProps } from './interfaces';
import { filterRequest } from 'redux/stock/actions';
import { useDispatch } from 'react-redux';
import Checkbox from './ui/Checkbox';
import './style.scss';

const filterProps: Array<IFilterProps> = [
  {
    label: 'Зеркальные',
    value: 'mirror',
  },
  {
    label: 'Компактные',
    value: 'compact',
  },
  {
    label: 'Мгновенной печати',
    value: 'instant_print',
  },
  {
    label: 'Системные',
    value: 'system',
  },
];

const Filter: FC = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<Array<string>>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(filterRequest(filters));
  };

  const handleResetFilters = () => setFilters([]);

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div className="filter-actions">
        <Button variant="primary" type="submit" block>Показать результат</Button>
        <Button variant="light" block onClick={handleResetFilters}>Очистить фильтр</Button>
      </div>
      <h5>Тип камеры</h5>
      <Row className="justify-content-xl-center">
        {filterProps.map((prop, index) => (
          <Col xl="6">
            <Checkbox
              {...prop}
              key={index}
              setFilters={setFilters}
            />
            </Col>
        ))}
      </Row>
    </form>
  );
};

export default Filter;
