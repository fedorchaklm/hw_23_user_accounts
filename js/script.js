let users = [
  {
    index: 0,
    isActive: true,
    balance: "$2,226.60",
    name: "Eugenia Sawyer",
    gender: "female",
    phone: "+1 (840) 583-3207",
    address: "949 John Street, Rose, Puerto Rico, 1857",
  },
  {
    index: 1,
    isActive: true,
    balance: "$2,613.77",
    name: "Pauline Gallegos",
    gender: "female",
    phone: "+1 (985) 593-3328",
    address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
  },
  {
    index: 2,
    isActive: false,
    balance: "$3,976.41",
    name: "Middleton Chaney",
    gender: "male",
    phone: "+1 (995) 591-2478",
    address: "807 Fleet Walk, Brutus, Arkansas, 9783",
  },
  {
    index: 3,
    isActive: true,
    balance: "$1,934.58",
    name: "Burns Poole",
    gender: "male",
    phone: "+1 (885) 559-3422",
    address: "730 Seba Avenue, Osage, Alabama, 6290",
  },
  {
    index: 4,
    isActive: true,
    balance: "$3,261.65",
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
    address: "120 Scholes Street, Kirk, Michigan, 1018",
  },
  {
    index: 5,
    isActive: false,
    balance: "$1,790.56",
    name: "Suzette Lewis",
    gender: "female",
    phone: "+1 (837) 586-3283",
    address: "314 Dunne Place, Bawcomville, Guam, 9053",
  },
];

// Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.

function getNumberFromStr(str) {
  return Number(str.replace(/[$,]/g, ""));
}

function getArrayOfPhoneNumbersWithBigBalance(users, minBalance) {
  return users.reduce((arrOfPhoneNumbers, user) => {
    const { balance, phone } = user;
    return getNumberFromStr(balance) >= minBalance
      ? arrOfPhoneNumbers.concat([phone])
      : arrOfPhoneNumbers;
  }, []);
}

document.write(`<p style = "font-size: 1.5rem"> Масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.</p>
  <p style = "font-size: 1.5rem">[${getArrayOfPhoneNumbersWithBigBalance(users, 2000)}]</p>
  <p style = "font-size: 1.5rem">Загальний баланс усіх користувачів = ${getTotalBalanceOfUsers(users)}$</p>
  `);

  // І знайти суму всіх балансів користувачів
  function getTotalBalanceOfUsers(users) {
    return users.reduce((acc, user) => {
      const {balance} = user;
      return acc += getNumberFromStr(balance);
    }, 0).toFixed(2);
  }