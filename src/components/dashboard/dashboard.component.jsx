import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import axios from 'axios';

import { createRecipients } from '../../redux/slices/recipients-slice';

import './dashboard.style.scss';
import Spinner from '../loading-spinner/loading-spinner.component';

const Dashboard = () => {
  const [surveys, setSurveys] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchSurveys = async () => {
      const surveyDatas = await axios.get('/api/surveys');
      setSurveys(surveyDatas.data);
      console.log('surveyDatas>>>', surveyDatas.data);
      dispatch(createRecipients(surveyDatas.data));
    };

    fetchSurveys();
  }, []);

  return (
    <div className="dashboard">
      {surveys ? (
        surveys.reverse().map((survey) => (
          <div
            className="survey-list"
            key={survey._id}
            onClick={() => history.push(`/survey/${survey._id}`)}>
            <span className="survey-list_title">{survey.title}</span>
            <p className="survey-list_body">{survey.body}</p>
            <p className="survey-list_right">
              Date on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <div className="survey-list_actions">
              <hr />
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
      <div className="dashboard-icon">
        <Link to="/surveys/new">
          <BsPlusCircle style={{ fontSize: '2.5rem', color: '#1e3799' }} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
