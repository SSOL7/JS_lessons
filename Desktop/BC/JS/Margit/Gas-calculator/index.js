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
};

const function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}


