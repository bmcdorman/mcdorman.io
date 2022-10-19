import Company from '../model/Company';
import Role from '../model/Role';
import Project from '../model/Project';
import Resume from '../model/Resume';
import School from '../model/School';
import Activity from '../model/Activity';
import Education from '../model/Education';

interface State {
  activities: { [id: string]: Activity };
  companies: { [id: string]: Company };
  schools: { [id: string]: School };
  education: { [id: string]: Education };
  roles: { [id: string]: Role };
  projects: { [id: string]: Project };
  resume: Resume;
}

export default State;