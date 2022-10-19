import Company from '../../../model/Company';

// @ts-ignore
import logoUri from 'url:./KIPR-Logo-bk.jpg';

// @ts-ignore
import description from 'bundle-text:./description.md';

export default {
  id: 'kipr',
  name: 'KISS Institute for Practical Robotics',
  url: 'https://www.kipr.org/',
  logoUri,
  description,
} as Company;