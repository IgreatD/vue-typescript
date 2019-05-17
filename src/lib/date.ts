import moment from 'moment';
moment.locale('zh-CN');
export const currentDate = moment().format('YYYY-MM-DD');
