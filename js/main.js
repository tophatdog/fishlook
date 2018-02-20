// array of objects to store zodiac data
var aquariumfish = [
	{
		sign: "pleco",
		yourFishinfo: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/pleco.jpg",
	},
	{
		sign: "aries",
		yourFishinfo: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/sorry.jpg",
	},
	{
		sign: "cancer",
		yourFishinfo: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/sorry.jpg",
	},
	{
		sign: "capricorn",
		yourFishinfo: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/sorry.jpg",
	},
	{
		sign: "gemini",
		yourFishinfo: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/sorry.jpg",
	},
	{
		sign: "joey",
		yourFishinfo: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/fish1.jpg"

	},
	{
		sign: "libra",
		yourFishinfo: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/sorry.jpg",
	},
	{
		sign: "pisces",
		yourFishinfo: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/sorry.jpg"
	},
	{
		sign: "sagittarius",
		yourFishinfo: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sorry.jpg"
	},
	{
		sign: "scorpio",
		yourFishinfo: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/sorry.jpg"
	},
	{
		sign: "taurus",
		yourFishinfo: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/sorry.jpg"
	},
	{
		sign: "virgo",
		yourFishinfo: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/sorry.jpg"
	}
];
// This is code so the enter key also fires (runs/invokes/instantiates) the function
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		fishlist();
	};
}, false);

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function fishlist() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");

	// confirm the element exists and what value the user submits
	console.log(userdata);
	console.log("users value is: " + userdata.value);

	// loop through aquariumfish array one item at a time
	for(var i = 0; i < aquariumfish.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		// check the current item's in the aquariumfish array
		console.log("current aquariumfish sign in loop is: " + aquariumfish[i].sign);

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === aquariumfish[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");

			// check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + aquariumfish[i].image);
			console.log("current fortune value is: " + aquariumfish[i].yourFishinfo);


			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = aquariumfish[i].image;
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourFishinfo").textContent = "Your best Picks are: " + aquariumfish[i].yourFishinfo;



			// stop the function because we found a match and added the data to the screen!!!
			return;
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct Fish");

		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "Not on the fish list. Try again!";
		document.getElementById("yourFishinfo").textContent = "";
		document.getElementById("icon").src = "img/sorry.jpg";
	};
};
