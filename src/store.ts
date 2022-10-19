import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { routerMiddleware, connectRouter } from 'connected-react-router';

import history from './history';
import State from './State';

import activities from './data/activities';
import companies from './data/companies';
import roles from './data/roles';
import projects from './data/projects';
import schools from './data/schools';
import education from './data/education';
import resume from './data/resume';

// @ts-ignore
import about from 'bundle-text:./about.md';
import Skill from './model/Skill';
import ProgrammingLanguage from './model/ProgrammingLanguage';

export const nilReducer = (state = null) => state;

export default configureStore({
  reducer: combineReducers({
    activities: nilReducer,
    companies: nilReducer,
    education: nilReducer,
    roles: nilReducer,
    projects: nilReducer,
    schools: nilReducer,
    resume: nilReducer,
    router: connectRouter(history),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  preloadedState: {
    activities,
    companies,
    roles,
    projects,
    schools,
    education,
    resume
  }
});