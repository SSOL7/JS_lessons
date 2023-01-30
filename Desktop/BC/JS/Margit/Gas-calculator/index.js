// function computeprice(){
//   let price = document.getElementById('price').value;
//   let fuel = document.getElementById('money').value;
//   let costper = document.getElementById('costper').value;
//   let total =  (fuel * (price)).toFixed(2);
//   let costper100 = (total * costper).toFixed(2);

//   if(total === 20){
//     document.getElementById('message').textContent = "You are paying too much for fuel";
//   }

//   document.getElementById('consumption').textContent = "Total Fuel cost = $ " + total;
//   // calculate the total fuel cost
//     // document.getElementById('consumption').textContent = ""+ costper100 + "Total Fuel cost = $ " + (fuel*costper).toFixed(2);
//   }

const calcGasoline = () => {
  const price = Number(document.getElementById('price').value);
  const money = +document.querySelector('#money').value;
  const answer = document.querySelector('#answer');

  let text;

  const amount = Math.floor(money / price);

  if(amount >= 210) {
    text = `${amount} is a good amount of fuel`;
  } else {
    text = `you need to buy more fuel, at least ${210 - amount} more`;
  }

  answer.textContent = text;


  console.log(price, money);
}

