import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiChevronsRight } from 'react-icons/fi';
import {
  createTitle,
  createSubject,
  createRecipient,
  createBody,
  deleteAllValues,
} from '../../redux/slices/form-slice';
import { emailValidate } from '../../utils/email-validation';

import './survey-form.style.scss';

const SurveyForm = ({ onChangeForm }) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [recipients, setRecipients] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const Title = useSelector((state) => state.form.title);
  const Subject = useSelector((state) => state.form.subject);
  const Recipients = useSelector((state) => state.form.recipients);
  const Body = useSelector((state) => state.form.body);

  const dispatch = useDispatch();
  const flag = title && subject && recipients && body;

  useEffect(() => {
    setTitle(Title);
    setSubject(Subject);
    setRecipients(Recipients);
    setBody(Body);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = emailValidate(recipients);
    setError(err);
    if (!err) {
      dispatch(createTitle(title));
      dispatch(createSubject(subject));
      dispatch(createRecipient(recipients));
      dispatch(createBody(body));
      onChangeForm();
    }
  };
  return (
    <div className="survey-form">
      <form id="formName">
        <label>Survey Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Subject Line </label>
        <input
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <label>Email Body</label>
        <input
          type="text"
          style={{ marginTop: '.1rem' }}
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <label>Recipient List</label>
        {error && <small>{error}</small>}
        <textarea
          type="text"
          onChange={(e) => setRecipients(e.target.value)}
          className={`${error && 'survey-form_error'}`}
          value={recipients}
        />
      </form>
      <div className="survey-form_buttons">
        <Link
          to="/surveys"
          onClick={() => dispatch(deleteAllValues())}
          className="survey-form_buttons-cancel">
          Cancel
        </Link>
        <button
          type="button"
          disabled={!flag}
          onClick={handleSubmit}
          className={`survey-form_button survey-form_${
            flag ? 'button-active' : ''
          }`}>
          Next <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default SurveyForm;
