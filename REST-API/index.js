const url = 'http://localhost:3000';

const path = {
  employees: '/REST-API/employees',
  posts: '/REST-API/posts',
  comments: '/REST-API/comments',
  profile: '/REST-API/profile',
};

const generateQueryString = (queryParams = []) => {
  queryParams.length
    ? `?${queryParams.map((i) => `${i.key}=${i.value}`).join('&')}`
    : ``;
};

const getEmployees = async (queryParams) => {
  const response = await fetch(
    `${url}${path.employees}${generateQueryString(queryParams)}`
  );
  const data = await response.json();
  console.log(data);
};

getEmployees([{ key: 'role', value: 'manager' }]);
