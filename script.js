
let serverAmount = 1;

function serverListing(serverIP, name, description, mainImageURL, bannerImageURL) {

  // Create divs and add classes
  let container = document.createElement("div");
  container.classList.add("container");

  let playButton = document.createElement("div");
  playButton.textContent = "Play";
  playButton.style.textAlign = "center";
  playButton.style.lineHeight = "45px";
  playButton.onclick = function() {
    window.location.replace(serverIP);
  };

  playButton.classList.add("playButton");

  let descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = description;
  descriptionDiv.classList.add("descriptionDiv");

  let mainImageDiv = document.createElement("div");
  mainImageDiv.style.backgroundImage = "url(" + mainImageURL + ")";
  mainImageDiv.classList.add("mainImageDiv");

  let bannerImageDiv = document.createElement("div");
  bannerImageDiv.style.backgroundImage = "url('" + bannerImageURL + "')";
  bannerImageDiv.classList.add("bannerImageDiv");

  let ownerNameDiv = document.createElement("div");
  ownerNameDiv.classList.add("owerNameDiv");

  let titleDiv = document.createElement("div");
  titleDiv.textContent = name;
  titleDiv.classList.add("titleDiv");

  // Append divs
  document.body.appendChild(container);
  container.appendChild(playButton);
  container.appendChild(descriptionDiv);
  container.appendChild(mainImageDiv);
  container.appendChild(bannerImageDiv);
  container.appendChild(ownerNameDiv);
  container.appendChild(titleDiv);

  container.style.top = 2 * serverAmount + "px";
  serverAmount++;
}

serverListing("https://bloxd.io/?lobby=cypery&g=worlds", "Cypery", "Welcome to Cypery, bloxd.io's premier PvP world. Known for its intense battles and competitive spirit, Cypery stands as the ultimate destination for PvP enthusiasts. Engage in thrilling combat, showcase your strategic skills, and climb the ranks in this adrenaline-fueled arena. Join the best and become a legendary champion of Cypery!", "https://i.imgur.com/0ZhNZSw.png", "https://i.imgur.com/0ZhNZSw.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Bridger Clutch", "Bridger Clutch is a server with different Hypixel and Minemen gamemodes like boxing, sumo, fireball fight, the bridge and other more fun gamemodes you can play", "https://i.imgur.com/TXKOXUT.png", "https://i.imgur.com/UD2uxWR.png")


serverListing("https://bloxd.io/?lobby=ez_y_parkour_3&g=worlds", "Easy Parkour 3", " Welcome to ez_y_parkour_3, a bloxdio server that challenges even the best parkour players. With 100s of hard levels, you make your way through levels, finding secrets and boards to give you an advantage over others.", "https://i.imgur.com/XpdkqFZ.png", "https://i.imgur.com/9cM7DtG.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")

serverListing("https://bloxd.io/?lobby=professional-pvp&g=worlds", "Professional PVP", "A Diamond FFA PvP server with special kits, 1v1 arenas, and a mega map to explore! You can PvP anyone you like. Hop on today and you might even get tier tested!", "https://i.imgur.com/u6Ogykq.png", "https://i.imgur.com/cinaaEf.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")
serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")
