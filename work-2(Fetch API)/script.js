fetch("https://gorest.co.in/public/v1/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://gorest.co.in/public/v1/users", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    authorization:
      "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
