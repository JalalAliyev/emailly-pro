import React from 'react';

import './loading-spinner.style.scss';

const Spinner = () => {
  return (
    <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
  );
};

export default Spinner;
