import moment from 'moment';
moment.locale('zh-CN');
export function financial(x: string) {
  return Number.parseFloat(x).toFixed(2);
}

export function formatYMDHM(date: string) {
  return moment(date).format('YYYY-MM-DD HH:mm');
}
export function formatYMD(date: string) {
  return moment(date).format('YYYY-MM-DD');
}

export function formatMD(date: string) {
  return moment(date).format('MM-DD');
}

export function formatHS(date: string) {
  return moment(date).format('HH:mm');
}
