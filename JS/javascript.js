//-----------------------------------------------------
//CURTAIN MENU
/*
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}
*/

function loadXMLFile(){
    //1: Where is the XML file stored on the internet?
    let url = "https://www.nasa.gov/rss/dyn/breaking_news.rss";
    let proxy = "https://cors-anywhere.herokuapp.com/";
        //Use CORS API website as proxy to pass through CORS issue

    //2: Create an XMLHttpRequest object
    let xhttp = new XMLHttpRequest();

    //3: Send this request from browser to web server
    xhttp.open("GET", proxy + url, true); //true: asynchronus transaction
                                  //false: synchronus transaction
    
    xhttp.send();

    //4: Wait for the response until the state changed to ready
    xhttp.onreadystatechange = function() {
        //Check if the response is valid or not
        if (this.readyState == 4 && this.status == 200) {
            //Response is good and recieved XML successfully
            //Load this XML file into "contact" element
			parseXML(this);
			//let rss = this.responseText
            //document.getElementById("rssFeed").innerHTML = parseXML(rss);
        }
    };
}

function parseXML(rss) {
	let rssContent, nodes;
	const items = rss.responseXML.getElementsByTagName("item");
	rssContent = ""; //Variable "rssContent" is used to store rss content in HTML format

	//Loop through all items and extract child node content: "title", "description", "pubdate" and "link"
	for (let i = 0; i<items.length; i++) {
		nodes = items[i].children;
		//Extract "title", "description", "pubdate" and "link" of each node
		let title, description, pubdate, link;
		for (let j = 0; j < nodes.length; j++){
			if (nodes[j].tagName == "title") {
				title = nodes[j].childNodes[0].nodeValue;
			} else if (nodes[j].tagName == "description") {
				description = nodes[j].childNodes[0].nodeValue;
			} else if (nodes[j].tagName == "pubDate") {
				pubdate = nodes[j].childNodes[0].nodeValue;
			} else if (nodes[j].tagName == "link") {
				link = nodes[j].childNodes[0].nodeValue;
			}
		}

		rssContent += `
						<div class="col-12 col-md-5 m-1 border border-dark bg-light">
							<h3>${title}</h3>
							<p>${pubdate}</p>
							<p>${description}</p>
							<a href="${link}">Read More</a>
						</div>`;
	}
	
	//Write rssContent in HTML format on webpage
	document.getElementById("rssFeed").innerHTML = rssContent;
}


let products = [{id: 0, name: "DDJ-400", title: "./MEDIA/ddj-400_title.png", description: "Learning to DJ has never been easier than with the DDJ-400 2-channel DJ controller for rekordbox. Packed with features to help you comfortably develop your skills, like dedicated cue buttons, Beat FX, CDJ-style looping controls and more.", image: "https://cdn.shopify.com/s/files/1/0503/4049/5523/products/DDJ-400_prm_angle_180523_jpg_600x.jpg?v=1615420279"},
				{id: 1, name: "DDJ-800", title: "./MEDIA/ddj-800_title.png", description: "The DDJ-800 2-channel DJ controller is a pro DJ setup that's made to go wherever you do. This portable unit inherits the club-style layout and popular features of the DDJ-1000, including Color On Jog Displays, and packs it all into a lighter body. The result is a professional performance controller that you'll have no trouble transporting between gigs at weddings, parties and anywhere else you play.", image: "https://cdn.shopify.com/s/files/1/0503/4049/5523/products/DDJ-800_prm_angle_190218_jpg_600x.jpg?v=1615420299"},
				{id: 2, name: "DDJ-1000", title: "./MEDIA/ddj-1000_title.png", description: "Make the most of rekordbox's enhanced new features with our dedicated 4-channel DJ controller. Featuring the professional layout inherited from the flagship NXS2 models, it's the portable, compact solution for performing at parties and events. The DDJ-1000 features all-new high definition LCD screens on each jog wheel, allowing you to keep your eyes intuitively on the deck.", image: "https://cdn.shopify.com/s/files/1/0503/4049/5523/products/DDJ-1000_prm_angle_low_1215_jpg_600x.jpg?v=1615420074"}]


let productIndex = 0;
function nextProduct() {
	//If the index equals 4, move back to the first movie
	if (productIndex < products.length - 1) {
		productIndex++;
	} else {
		productIndex = 0;
	};

	//Extract the title, image url and display on HTML elements
	document.getElementById("manual-product-title").src = products[productIndex].title;
	document.getElementById("manual-product-description").innerHTML = products[productIndex].description;
	document.getElementById("manual-product-image").src = products[productIndex].image;
}

function previousProduct() {
	//If the index equals -1, move to the last movie
	if (productIndex > 0) {
		productIndex--;
	} else {
		productIndex = products.length - 1;
	};

	//Extract the title, image url and display on HTML elements
	document.getElementById("manual-product-title").src = products[productIndex].title;
	document.getElementById("manual-product-description").innerHTML = products[productIndex].description;
	document.getElementById("manual-product-image").src = products[productIndex].image;
}

let autoIndex = 0;
function autoSlideshow() {
	//Change the autoIndex
	if (autoIndex < products.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	};
	//Extract title and url and display them on HTML element
	document.getElementById("auto-product-title").src = products[autoIndex].title;
	document.getElementById("auto-product-description").innerHTML = products[autoIndex].description;
	document.getElementById("auto-product-image").src = products[autoIndex].image;

	//Wait 2 second and display next movie
	setTimeout(autoSlideshow, 2000); //wait 2 seconds
}

//Execute the autoSlideshow function when loading the website
autoSlideshow();

//----------------------------------------------//

//Font style array
let fonts = [
			{id: 0, name: "Default Font", fontStyle: "font-family:default;"},
			{id: 1, name: "Verdana", fontStyle: "font-family:verdana;"},
			{id: 2, name: "Courier", fontStyle: "font-family:courier;"},
			{id: 3, name: "Lucida Console", fontStyle: "font-family:lucida-console;"},
			{id: 4, name: "Perpetua", fontStyle: "font-family:perpetua;"},
			{id: 5, name: "Cambria", fontStyle: "font-family:cambria;"},
			{id: 6, name: "Sans Serif", fontStyle: "font-family:sans-serif;"}
			];

//Background color array
let colors = [
			{id: 0, name: "Default Color", colorStyle: "#f8f9fa"},
			{id: 1, name: "Orange", colorStyle: "#ffc107"},
			{id: 2, name: "Green", colorStyle: "#198754"},
			{id: 3, name: "Blue", colorStyle: "#0d6efd"}
			];

//Function for loading options into the font and background color select customisation
function loadCustomOptions() {
	let font = document.getElementById("selectFont");
	let color = document.getElementById("selectBgColor");

	//Font loop
	for (let i = 0; i < fonts.length; i++) {
		let fontOption = document.createElement("option");

		fontOption.value = fonts[i].id.toString();
		fontOption.textContent = fonts[i].name.toString();

		font.appendChild(fontOption);
	}
	font.selectedFont = 0;

	//Color loop
	for (let j = 0; j < colors.length; j++) {
		let colorOption = document.createElement("option");

		colorOption.value = colors[j].id.toString();
		colorOption.textContent = colors[j].name.toString();

		color.appendChild(colorOption);
	}
	color.selectedColor = 0;
}

loadCustomOptions();


//Function for changing the text font of the customisation section
function displayFont() {
	let selectedFont = document.getElementById("selectFont").value;
	document.getElementById("custom-product-description").style = fonts[selectedFont].fontStyle;
}

//Function for changing background color of customisation section
function displayBgColor() {
	let selectedColor = document.getElementById("selectBgColor").value;
	document.getElementById("customBackground").style.backgroundColor = colors[selectedColor].colorStyle;
}

function loadProducts() {
	let product = document.getElementById("selectProduct");

	for (let i = 0; i < products.length; i++) {
		let productOption = document.createElement("option")

		productOption.value = products[i].id.toString();
		productOption.textContent = products[i].name.toString();

		product.appendChild(productOption);
	}

	products.selectedProduct = "0";
}

loadProducts();

function displayProduct() {
	let selectedProduct = document.getElementById("selectProduct").value;
	document.getElementById("select-product-title").innerHTML = products[selectedProduct].name;
	document.getElementById("select-product-description").innerHTML = products[selectedProduct].description;
	document.getElementById("select-product-image").src = products[selectedProduct].image;
}

function addProductToList() {
	let newProductName = document.getElementById("new-product-name").value;
	let newProductDescription = document.getElementById("new-product-description").value;
	let newProductImage = document.getElementById("new-product-image").value;
	let newProductID = products.length;

	if ((newProductName == "" || newProductDescription == "" || newProductImage == "")) {
		alert("ERROR: Data is incomplete");
	} else {
		products.push({id: newProductID, title: "", name: newProductName, description: newProductDescription, image: newProductImage})

		alert("New product was added successfully")
		
		//{id: 1, name: "DDJ-800", title: "./MEDIA/ddj-800_title.png", description: "sional.", image: "https://cd"}

		//Reload the drop down list
		//Remove all current options
		document.getElementById("selectProduct").options.length = 0;

		//Load the updated products list
		loadProducts();

		//Empty the inputs
		document.getElementById("new-product-name").value = "";
		document.getElementById("new-product-description").value = "";
		document.getElementById("new-product-image").value = "";
	}
}

let currentVotes = {like: 13, dislike: 4};

//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//RULE: Allow to vote only one up: UP or DOWN
let votestatus = {like: false, dislike: false};

//Click like button
function like() {
	//Check if the current votestatus is like
	if (votestatus.like == false) {
		//Increase a Like: Increase the like number by 1
		document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
		//Switch button to green
		document.getElementById("likeButton").className = "btn btn-success";
		//Change the votestatus of like
		votestatus.like = true;


		//Check the dislike - if dislike has been voted, down it by one and change status to False and change background color back
		if (votestatus.dislike == true) {
			document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
			votestatus.dislike = false;
			document.getElementById("dislikeButton").className = "btn btn-outline-danger";
		}

	} else {
		//Keep the current number of like 
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		//Change the color of the like button back to default
		document.getElementById("likeButton").className = "btn btn-outline-success";
		//Change the current status of like button
		votestatus.like = false;
	}
}

function dislike() {
	//Check if the current votestatus is dislike
	if (votestatus.dislike == false) {
		//Increase a Dislike: Increase the like number by 1
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
		//Switch button to red
		document.getElementById("dislikeButton").className = "btn btn-danger";
		//Change the votestatus of dislike
		votestatus.dislike = true;

		//Check the like - if like has been voted, down it by one and change status to False and change background color back
		if (votestatus.like == true) {
			document.getElementById("likeNumber").innerHTML = currentVotes.like;
			votestatus.like = false;
			document.getElementById("likeButton").className = "btn btn-outline-success";
		}

	} else {
		//Keep the current number of dislike
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		//Change the colo of the dislike button back to default
		document.getElementById("dislikeButton").className = "btn btn-outline-danger";
		//Change the current status of dislike button
		votestatus.dislike = false;
	}
}