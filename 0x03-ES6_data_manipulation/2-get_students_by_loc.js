const getStudentsByLocation = (students, city) => {
  const arrayObject = students.filter((func) => func.location === city);
  return arrayObject;
};

export default getStudentsByLocation;
