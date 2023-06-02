export const createDate = (currDate) => {
  let newDate = new Date(currDate);

  let year = newDate.getFullYear();
  let day = newDate.getDate();
  let month = newDate.getDay();
  return `${day}/${month}/${year}`;
};

export default createDate;
