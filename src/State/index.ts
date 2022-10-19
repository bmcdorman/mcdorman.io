import Company from '../model/Company';
import Role from '../model/Role';
import Project from '../model/Project';
import Resume from '../model/Resume';
import School from '../model/School';
import Activity from '../model/Activity';

interface State {
  activities: { [id: string]: Activity };
  companies: { [id: string]: Company };
  schools: { [id: string]: School };
  roles: { [id: string]: Role };
  projects: { [id: string]: Project };
  resume: Resume;
}

export default State;