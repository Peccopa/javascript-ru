'use strict';

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    btn.textContent = data.city;
    console.log(data.city);

  } catch (error) {
    throw new Error(error);
  }
}

const btn = document.createElement('button');
btn.textContent = 'Click me!';
btn.addEventListener('click', getMyCity);
document.body.append(btn);
