import { theme } from '../theme';

export default {
  color: {
    control: 'select',
    options: Object.keys(theme.palette),
  },
};
