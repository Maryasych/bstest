let data = document.getElementsByName('personalData'),
		cover = document.querySelector('.cover'),
    meter = document.querySelectorAll('[role="progressbar"]')[1],
    inputNum = document.querySelector('input[type="number"]'),
  	paintProgress = document.querySelector('.paintPogress');

data.forEach(item =>{
  item.oninput = (() => {
  	let val = 0;
    data.forEach((item) => {
      val += item.value.length > 0 ? 100/3 : 0;
    });
    cover.style.left = val + '%';
  });
})

paintProgress.onclick = (() => {
  inputNum.reportValidity() ? meter.style.width = inputNum.value + '%' : 0;
})