'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
              +data.population / 1000000
            ).toFixed(2)} millions</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////////////

// fetch('https://restcountries.com/v3.1/name/france')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     displayCountry(data);
//   });
// };

const getCountryAndBorderCountries = function (country) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();

  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    displayCountry(data1);
    const [firstNeighbor] = data1.borders;
    if (!firstNeighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNeighbor}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      displayCountry(data2, 'neighbour');
      console.log(data2);
    });
  });
};

// getCountryAndBorderCountries('ukraine');

// const request1 = new XMLHttpRequest();
// request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request1.send();

// const getCountryData = function (countryName) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//       return data;
//     });
// };

const getDataAndConvertToJSON = function (url, error = 'Somthing goes wrong!') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${error} ${res.status}`);
    return res.json();
  });
};

const getCountryData = function (countryName) {
  getDataAndConvertToJSON(
    `https://restcountries.com/v3.1/name/${countryName}`,
    'Conuntry not found!'
  )
    .then(data => {
      displayCountry(data[0]);
      if (!data[0].borders) throw new Error('!!!');
      const firstNeighbor = data[0].borders[0];
      return getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/alpha/${firstNeighbor}`,
        'Conuntry not found!'
      );
    })
    .then(data => displayCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(err);
      displayError('Error');
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('russia');
});

// const displayCountryByGPS = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// };
// displayCountryByGPS(35.756, 139.256);

// console.log('Test start');
// setTimeout(() => console.log('Timer 0 sec'), 0);
// Promise.resolve('Completed promise 1').then(res => console.log(res));
// Promise.resolve('Completed promise 2').then(res => console.log(res));
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery begin!');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You won!');
//     } else {
//       reject(new Error('You lose!'));
//     }
//   }, 1000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(3)
//   .then(() => {
//     console.log('3');
//     return wait(2);
//   })
//   .then(() => console.log('2'));

const getUserPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getUserPosition()
  .then(position => console.log(position))
  .catch(error => console.error(error));

// ldkfl'sdkfldskfg'sd

let currentImg;
const imageContainer = document.querySelector('.images');

const createImageElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;

    imgElement.addEventListener('load', function () {
      imageContainer.append(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener('error', function () {
      imageContainer.append(imgElement);
      reject(new Error('Not found img!'));
    });
  });
};

createImageElement('img/image1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Img 1 done!');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImageElement('img/image2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Img 2 done!');
    return wait(2);
  })
  .catch(err => console.error(e));
