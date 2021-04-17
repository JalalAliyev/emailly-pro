import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './redux/slices/auth-slice';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/landing/landing.component';
import MainNavigation from './components/header/main-navigation/main-navigation.component';
import Dashboard from './components/dashboard/dashboard.component';
import SurveyNew from './components/survey-new/survey-new.component';
import RecipientList from './components/recipient-list/recipient-list.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/current_user');
      dispatch(createUser(res.data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="app" style={{ margin: '0' }}>
      <Router>
        <MainNavigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/survey/:recipientId" component={RecipientList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
