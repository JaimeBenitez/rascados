const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export const countDays = (date_end) => {

  const date_ini = new Date('2024', '1', '6')
  
  let diff = date_end.getTime() - date_ini.getTime();

  return Math.floor(diff / day);
}