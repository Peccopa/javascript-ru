const url = 'http://localhost:3000';

const path = {
  employees: '/employees',
  posts: '/posts',
  comments: '/comments',
  profile: '/profile',
};

const getEmployees = async () => {
  const response = await fetch(`${url}${path.employees}`);
  const data = await response.json();
  console.log(data);
};

getEmployees();
