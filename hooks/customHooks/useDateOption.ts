import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

const useDateOption = () => {
  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);

  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s', // e.g. in 2 hours, %s been replaced with 2hours
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours', // e.g. 2 hours, %d been replaced with 2
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    },
  });

  return {};
};

export default useDateOption;
