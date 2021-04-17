import React, { useState } from 'react';
import SurveyForm from '../survey-form/survey-form.component';
import SurveyFormReview from '../survey-review/survey-form-review.component';

import './survey-new.style.scss';

const SurveyNew = () => {
  const [isForm, setIsForm] = useState(true);
  const handleForm = () => {
    setIsForm(!isForm);
  };
  return (
    <div className="survey-new">
      {isForm && <SurveyForm onChangeForm={handleForm} />}
      {!isForm && <SurveyFormReview onChangeForm={handleForm} />}
    </div>
  );
};

export default SurveyNew;
