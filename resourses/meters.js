let data = document.getElementsByName('personalData'),
		cover = document.querySelector('.cover'),
  	meter2 = document.querySelector('[role="progressbar2"]'),
  	paintProgress = document.querySelector('.paintPogress');

data.forEach(item =>{
  item.oninput = (() => {
  	let val = 0;
    data.forEach((item) => {
    	val += item.value.length > 0 ? 33.333 : 0;
    });
    cover.style.left = val + '%';
  });
})

paintProgress.onclick = (() => meter2.style.width = inputNum.value + '%')