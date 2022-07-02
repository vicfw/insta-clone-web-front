import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

const useDateOption = () => {
  dayjs.extend(relativeTime);

  dayjs.extend(updateLocale);

  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: '%dm',
      mm: '%dm',
      h: '%dh',
      hh: '%dh',
    },
  });

  return {};
};

export default useDateOption;
