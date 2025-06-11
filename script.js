const arrayPlaceholder = [ 'Enter the city name','शहर का नाम दर्ज करें','नगरस्य नाम प्रविष्टं कुर्वन्तु ', 'શહેરનું નામ દાખલ કરો' ]
const inputPlace = document.querySelector("#input-place")
let index = 0
setInterval(() => {
	inputPlace.placeholder = arrayPlaceholder[index++]
	if(index == arrayPlaceholder.length) index = 0;
}, 2000)




  const searchIcon = document.querySelector("#search-icon")
  searchIcon.addEventListener("click" ,() => {
	const apiKey = '026079c827254e5dc16ca8269eefdb1a';
	const city =  document.querySelector("#input-place").value
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	
	fetch(apiUrl)
	  .then(response => response.json())
	  .then(data => {
		console.log(data); // Weather data object
		//   displays temperature
		document.querySelector("h3").innerText = "";
		let degree = data.main.temp
		document.querySelector('#temperature').innerText= degree + "°C";
		const emoji = document.querySelector("#emoji")
		if(degree > 35) {
			emoji.src = "images/tooHot.png";
            document.querySelector("h3").innerText = "ALERT: TOO HOT OUTSIDE";
		}else if (degree > 25) {
			emoji.src = "images/moderatelyHot.png";

		  } else if (degree > 15) {
			emoji.src = "images/moderate.png";
		  } else if (degree > 5) {
			emoji.src = "images/slightlyCold.png";
		  } else {
			emoji.src = "images/veryCold.png";
		  }
	  })
	  .catch(error => {
		console.error('Error fetching data:', error)
		 alert("Error fetching data")
	  }
	);
  })