import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

const CompareIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.47368 13.8072C6.47368 15.5705 5.24836 17 3.73684 17C2.22533 17 1 15.5705 1 13.8072M6.47368 13.8072H1M6.47368 13.8072L3.73684 9.38646M1 13.8072L3.73684 9.38646M17 9.87765C17 11.641 15.7747 13.0704 14.2632 13.0704C12.7516 13.0704 11.5263 11.641 11.5263 9.87765M17 9.87765H11.5263M17 9.87765L14.2632 5.45688M11.5263 9.87765L14.2632 5.45688M3.73684 9.38646V8.41991M14.2632 5.45688V4.45865M2.47368 8.89526L3.73684 8.41991M15.5263 3.9833L14.2632 4.45865M9 6.43928V1M9 6.43928L3.73684 8.41991M9 6.43928L14.2632 4.45865" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const ButtonCompare: FC = () => (
  <a href="#">
    <CompareIcon />
  </a>
);

export default ButtonCompare;
