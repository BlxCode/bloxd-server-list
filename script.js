let serverAmount = 1;
let intervalOfPlayerCounterUpdate = 2;// rn its 5 secs

function serverListing(serverIP, name, description, mainImageURL, bannerImageURL) {

    // Create divs and add classes
    let container = document.createElement("div");
    container.classList.add("container");

    let playButton = document.createElement("div");
    playButton.textContent = "Play";
    playButton.style.textAlign = "center";
    playButton.style.lineHeight = "45px";
    playButton.onclick = function () {
        window.open(serverIP, "_blank");
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

    let ipofserver = document.createElement("div");
    ipofserver.textContent = serverIP;
    ipofserver.style.display = 'none'
    ipofserver.classList.add("ipofserver");

    let playercount = document.createElement("div");
    playercount.textContent = 0
    playercount.classList.add("playercount");

    // Append divs
    document.body.appendChild(container);
    container.appendChild(playButton);
    container.appendChild(descriptionDiv);
    container.appendChild(mainImageDiv);
    container.appendChild(bannerImageDiv);
    container.appendChild(ownerNameDiv);
    container.appendChild(titleDiv);
    container.appendChild(ipofserver);
    container.appendChild(playercount);

    container.style.top = 2 * serverAmount + "px";
    serverAmount++;
}
serverListing("https://bloxd.io/?lobby=cypery&g=worlds", "Cypery", "Welcome to Cypery, bloxd.io's premier PvP world. Known for its intense battles and competitive spirit, Cypery stands as the ultimate destination for PvP enthusiasts. Engage in thrilling combat, showcase your strategic skills, and climb the ranks in this adrenaline-fueled arena. Join the best and become a legendary champion of Cypery!", "https://i.imgur.com/0ZhNZSw.png", "https://i.imgur.com/0ZhNZSw.png")

serverListing("https://bloxd.io/?lobby=mesa_pvp&g=worlds", "Mesa PVP", "Explore the mesa in an interactive map and fight to be master of the mesa! Hosted by: Bloxd Events", "https://i.imgur.com/Xmopcoc.png", "https://i.imgur.com/hkEAnMS.png")

serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Bridger Clutch", "Bridger Clutch is a server with different Hypixel and Minemen gamemodes like boxing, sumo, fireball fight, the bridge and other more fun gamemodes you can play", "https://i.imgur.com/TXKOXUT.png", "https://i.imgur.com/UD2uxWR.png")



serverListing("https://bloxd.io/?lobby=ez_y_parkour_3&g=worlds", "Easy Parkour 3", " Welcome to ez_y_parkour_3, a bloxdio server that challenges even the best parkour players. With 100s of hard levels, you make your way through levels, finding secrets and boards to give you an advantage over others.", "https://i.imgur.com/XpdkqFZ.png", "https://i.imgur.com/9cM7DtG.png")

serverListing("https://bloxd.io/?lobby=professional-pvp&g=worlds", "Professional PVP", "A Diamond FFA PvP server with special kits, 1v1 arenas, and a mega map to explore! You can PvP anyone you like. Hop on today and you might even get tier tested!", "https://i.imgur.com/u6Ogykq.png", "https://i.imgur.com/cinaaEf.png")

serverListing("https://bloxd.io/?lobby=parkour-spirals&g=worlds", "Parkour Spirals", "Fun parkour server, built like a spirl. Has lots of levels, themed around biomes. A great way to practice your parkour or simply have fun.", "https://i.imgur.com/IXJvFp3.png", "https://i.imgur.com/2QE7FJL.png")

serverListing("https://bloxd.io/?lobby=parkour-spirals2&g=worlds", "Parkour Spirals 2", "Sequel to Parkour Spirl, this is a fun parkour map themed around biomes, built in a spirl.", "https://i.imgur.com/F6f5NFJ.png", "https://i.imgur.com/W1SCjKr.png")


serverListing("https://bloxd.io/?lobby=bridgerclutch&g=worlds", "Test", "This lengthy test paragraph is crafted to serve your testing needs. It's filled with random sentences and phrases, deliberately created to assess the performance and functionality of various systems. Testing is an integral part of the development process, ensuring that software, applications, or systems behave as expected under different conditions. During testing, developers systematically evaluate code, features, and functionalities to identify and address potential issues. This meticulous process contributes to the creation of robust and reliable software solutions.", "birb.png", "birb.png")


function reloadplayerscount() {
  fetch('https://matchmaking.bloxd.io/openWorlds').then(d => {
      d.json().then(dd => {
          document.querySelectorAll('.container').forEach(element => {
              dd.forEach(server => {
                  var lobbyname = new URL(element.getElementsByClassName('ipofserver')[0].textContent)
                  if (server.name === lobbyname.searchParams.get('lobby')) {
                      element.getElementsByClassName('playercount')[0].textContent = server.players
                  }
              })
          })
      })
  })
}

setInterval(reloadplayerscount, intervalOfPlayerCounterUpdate)
