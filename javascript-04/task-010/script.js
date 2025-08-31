'use strict';

async function getActivity() {
  const res = await fetch('https://bored-api.appbrewery.com/random');
  // console.log(res);
  return res.json();
}

async function generate() {
  const data = await getActivity();
  console.log(data);
}
