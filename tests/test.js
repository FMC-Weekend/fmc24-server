var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "{\n  \"name\":\"shubham\"\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8000/api/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));