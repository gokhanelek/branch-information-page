import { NavItem } from '../../core/models/nav-item';

export const Menu: NavItem[] = [
  {
    displayName: 'Overview',
    iconName: 'overview-icon',
    customIcon: true,
    route: '/overview'
  },
  {
    displayName: 'Locations',
    iconName: 'list',
    customIcon: false,
    route: '/locations'
  }
];
