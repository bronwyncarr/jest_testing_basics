const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x=> x,
  createUser: () => {
    const user = { firstName: "Bronwyn" }
    user["lastName"] = "Carr"
    return user
  },
  fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1') // returns a promise
    .then(res => res.data) // returns json data
    .catch(err => `An error occured: ${err}`) // catch any error
};

module.exports = functions
