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

// @ts-ignore
import about from 'bundle-text:./about.md';
// @ts-ignore
import cofounderCto from 'bundle-text:./cofounder-cto.md';
// @ts-ignore
import advisor from 'bundle-text:./advisor.md';
import Skill from './model/Skill';
import ProgrammingLanguage from './model/ProgrammingLanguage';

export default configureStore({
  reducer: combineReducers({
    activities: () => activities,
    companies: (state = null) => state,
    roles: (state = null) => state,
    projects: (state = null) => state,
    schools: (state = null) => state,
    resume: (state = null) => state,
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
    resume: {
      about,
      roleIds: Object.keys(roles),
      contacts: [{
        type: 'email',
        email: 'bmcdorman@gmail.com',
      }, {
        type: 'phone',
        phone: '405-795-1800',
      }],
      skills: {
        expert: [{
          type: Skill.Type.ProgrammingLanguage,
          programmingLanguage: ProgrammingLanguage.C
        }, {
          type: Skill.Type.ProgrammingLanguage,
          programmingLanguage: ProgrammingLanguage.CPlusPlus
        }, {
          type: Skill.Type.ProgrammingLanguage,
          programmingLanguage: ProgrammingLanguage.JavaScript
        }, , {
          type: Skill.Type.ProgrammingLanguage,
          programmingLanguage: ProgrammingLanguage.TypeScript
        }],
      }
    },
  }
});