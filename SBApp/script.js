'use strict';

// alert(`
//   user: PIN:
//   cm    3333
//   as    2222
//   ci    1111
//   `);

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500.11, 250.53, -300.29, 5000.53, -110.34, -170, 1100, 19],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2024-09-08T11:42:26.371Z',
    '2024-09-09T07:43:59.331Z',
    '2024-09-10T15:21:20.814Z',
    '2024-09-11T17:26:11.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400.56, -1350, -70.44, -210, -2000.62, 5500, -374],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2024-09-08T11:42:26.371Z',
    '2024-09-09T07:43:59.331Z',
    '2024-09-10T15:21:20.814Z',
    '2024-09-11T17:26:11.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'CAD',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseNickname = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatTransactionsDate = function (date, locale) {
  const getDatBetweenTwoDates = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
  const daysPassed = getDatBetweenTwoDates(new Date(), date);
  if (daysPassed === 0) return 'Сегодня';
  if (daysPassed === 1) return 'Вчера';
  if (daysPassed <= 4) return `${daysPassed} дня назад`;
  else {
    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';
  const transacs = sort
    ? account.transactions.slice().sort((x, y) => x - y)
    : account.transactions;
  transacs.forEach((trans, index) => {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.transactionsDates[index]);
    const transDate = formatTransactionsDate(date, account.locale);

    const formattedTrans = formatCurrency(
      trans,
      account.locale,
      account.currency
    );

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type 
      transactions__type--${transType}">${index + 1} ${transType}</div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${formattedTrans}</div>
    </div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

const createNicknames = function (accs) {
  accs.forEach(acc => {
    acc.nickname = acc.userName
      .toLowerCase()
      .split(' ')
      .reduce((a, v) => (a += v[0]), '');
  });
};
createNicknames(accounts);

const displayBalance = function (account) {
  const balance = account.transactions.reduce((a, v) => a + v);
  account.balance = balance;
  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
};

const displayTotal = function (account) {
  labelSumIn.textContent = formatCurrency(
    account.transactions.reduce((a, v) => (v > 0 ? a + v : a + 0), 0),
    account.locale,
    account.currency
  );
  labelSumOut.textContent = formatCurrency(
    account.transactions.reduce((a, v) => (v < 0 ? a + v : a + 0), 0),
    account.locale,
    account.currency
  );

  labelSumInterest.textContent = formatCurrency(
    account.transactions.reduce((a, v) => {
      let interest = v > 0 ? (v * account.interest) / 100 : 0;
      return interest >= 5 ? a + interest : a + 0;
    }, 0),
    account.locale,
    account.currency
  );
};

const updateUi = function (account) {
  displayTransactions(account);
  displayBalance(account);
  displayTotal(account);
};

let currentAccount, currentLogoutTimer;

// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = 1;

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseNickname.value === currentAccount.nickname &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const currentAccountIndex = accounts.findIndex(
      account => account.nickname === currentAccount.nickname
    );
    accounts.splice(currentAccountIndex, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Войдите в свой аккаунт';
  }
  inputCloseNickname.value = '';
  inputCloseNickname.blur();
  inputClosePin.value = '';
  inputClosePin.blur();
});

const startLogOutTimer = function () {
  const logOutTimerCallback = function () {
    let minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    let seconds = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${minutes} ${seconds}`;
    if (time === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Войдите в свой аккаунт';
      clearInterval(logOutTimer);
    }
    time -= 1;
  };
  let time = 300;
  logOutTimerCallback();
  const logOutTimer = setInterval(logOutTimerCallback, 1000);
  return logOutTimer;
};

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.nickname === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Рады, что вы снова с нами, ${
      currentAccount.userName.split(' ')[0]
    }!`;

    // const now = new Date();
    // const day = String(now.getDate()).padStart(2, '0');
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const year = now.getFullYear();
    // labelDate.textContent = `${day}/${month}/${year}`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    inputLoginUsername.value = '';
    inputCloseNickname.blur();
    inputLoginPin.value = '';
    inputLoginPin.blur();
    if (currentLogoutTimer) clearInterval(currentLogoutTimer);
    currentLogoutTimer = startLogOutTimer();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find(e => e.nickname === recipientNickname);
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAccount &&
    currentAccount.nickname !== recipientAccount.nickname
  ) {
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(-transferAmount);

    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());

    updateUi(currentAccount);

    clearInterval(currentLogoutTimer);
    currentLogoutTimer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(trans => trans >= (loanAmount / 100) * 10)
  ) {
    setTimeout(function () {
      currentAccount.transactions.push(loanAmount);
      currentAccount.transactionsDates.push(new Date().toISOString());
      updateUi(currentAccount);
    }, 1000);
  }
  inputLoanAmount.value = '';
  clearInterval(currentLogoutTimer);
  currentLogoutTimer = startLogOutTimer();
});

let transactionsSorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayTransactions(currentAccount, !transactionsSorted);
  transactionsSorted = !transactionsSorted;
  clearInterval(currentLogoutTimer);
  currentLogoutTimer = startLogOutTimer();
});

// document.querySelectorAll('.transactions__row"').forEach((row, i) => {
//   if (i % 2 === 0) {
//     row.style.backgroundColor = 'grey';
//   }
// });
