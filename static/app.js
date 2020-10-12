//Checking if the js file is well connected to the html:
alert("External JS file is successfully linked to the HTML file");


//asynchronous function for feching json data from Flask:
async function getJson(data){
  const response = await fetch('/result', {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    try{
      const data = await response.json();
      console.log(data);
      return updateUI(data);
    }catch(error){
      console.log('While GETing the json, the error occured: ', error);
    }
}


//Functio for User Interface update:
function updateUI(data){
  const hi = document.getElementById("hi");
  const bool = document.getElementById("boolean");
  const num = document.getElementById("number");

  hi.innerText = data.hi;
  bool.innerText = data.boolean;
  num.innerText = data.number;

  return console.log("UI update: done");
}