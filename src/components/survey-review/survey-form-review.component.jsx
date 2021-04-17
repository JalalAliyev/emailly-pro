import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { deleteAllValues } from '../../redux/slices/form-slice';
import { updateCredits } from '../../redux/slices/auth-slice';
import { FiChevronsLeft } from 'react-icons/fi';
import './survey-form-review.style.scss';

const SurveyFormReview = ({ onChangeForm }) => {
  const [isSend, setIsSend] = useState(false);
  const title = useSelector((state) => state.form.title);
  const subject = useSelector((state) => state.form.subject);
  const body = useSelector((state) => state.form.body);
  const recipients = useSelector((state) => state.form.recipients);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const sendData = async () => {
      const res = await axios.post('/api/surveys', {
        title,
        subject,
        body,
        recipients,
      });
      dispatch(updateCredits(res.data.credits));
      dispatch(deleteAllValues());
      history.push('/surveys');
    };
    isSend && sendData();
  }, [dispatch, isSend]);

  return (
    <div className="survey-review">
      <h1>Confirm your entries</h1>
      <div>
        <label>Title</label>
        <p>{title}</p>
      </div>
      <div>
        <label>Subject Line</label>
        <p>{subject}</p>
      </div>
      <div>
        <label>Email Body</label>
        <p>{body}</p>{' '}
      </div>
      <div>
        <label>Recipients</label>
        <p>{recipients}</p>
      </div>
      <div className="survey-review_buttons">
        <button className="survey-review_back" onClick={onChangeForm}>
          <FiChevronsLeft /> Back
        </button>
        <button
          onClick={() => setIsSend(true)}
          className="survey-review_submit">
          Send Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyFormReview;
