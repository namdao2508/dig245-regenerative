//list of fake stock name and its symbol
const stockData = [
    { name: 'Alpha Industries', symbol: 'ALPH' },
    { name: 'Beta Corporation', symbol: 'BETA' },
    { name: 'Gamma Holdings', symbol: 'GAMA' },
    { name: 'Delta Ventures', symbol: 'DELT' },
    { name: 'Epsilon Securities', symbol: 'EPSI' },
    { name: 'Zeta Investments', symbol: 'ZETA' },
    { name: 'Eta Financials', symbol: 'ETAF' },
    { name: 'Theta Equities', symbol: 'THET' },
    { name: 'Iota Capital', symbol: 'IOTA' },
    { name: 'Kappa Trading', symbol: 'KAPP' },
    { name: 'Lambda Assets', symbol: 'LAMB' },
    { name: 'Mu Exchange', symbol: 'MU' },
    { name: 'Nu Stocks', symbol: 'NU' },
    { name: 'Xi Investments', symbol: 'XI' },
    { name: 'Omicron Securities', symbol: 'OMIC' },
    { name: 'Pi Financials', symbol: 'PIFI' },
    { name: 'Rho Holdings', symbol: 'RHO' },
    { name: 'Sigma Ventures', symbol: 'SIGM' },
    { name: 'Tau Industries', symbol: 'TAUI' },
    { name: 'Upsilon Corporation', symbol: 'UPSI' },
    { name: 'Phi Equities', symbol: 'PHIE' },
    { name: 'Chi Investments', symbol: 'CHI' },
    { name: 'Psi Trading', symbol: 'PSI' },
    { name: 'Omega Capital', symbol: 'OMEG' },
    { name: 'Acme Stocks', symbol: 'ACME' },
    { name: 'Widget Holdings', symbol: 'WIDG' },
    { name: 'Tech Ventures', symbol: 'TECH' },
    { name: 'Innovative Equities', symbol: 'INOV' },
    { name: 'Global Investments', symbol: 'GLBL' },
    { name: 'Sunrise Securities', symbol: 'SUNS' },
    { name: 'Moonshot Financials', symbol: 'MOON' },
    { name: 'Stellar Holdings', symbol: 'STEL' },
    { name: 'Galaxy Ventures', symbol: 'GALX' },
    { name: 'Cosmic Investments', symbol: 'COSM' },
    { name: 'Starlight Equities', symbol: 'STAR' },
    { name: 'Nebula Corporation', symbol: 'NEBU' },
    { name: 'Comet Trading', symbol: 'COMT' },
    { name: 'Asteroid Assets', symbol: 'ASTR' },
    { name: 'Planet Stocks', symbol: 'PLAN' },
    { name: 'Rocket Financials', symbol: 'ROCK' },
    { name: 'Satellite Holdings', symbol: 'SATE' },
    { name: 'Astronaut Securities', symbol: 'ASTO' },
    { name: 'Orbit Investments', symbol: 'ORBT' },
    { name: 'Space Ventures', symbol: 'SPAC' },
    { name: 'Gravity Equities', symbol: 'GRAV' },
    { name: 'Black Hole Corporation', symbol: 'BLCK' },
    { name: 'Supernova Stocks', symbol: 'SPNV' },
    { name: 'Alien Technologies', symbol: 'ALIN' },
    { name: 'Interstellar Trading', symbol: 'INTR' },
    { name: 'Cosmonaut Investments', symbol: 'COSO' },
    { name: 'Constellation Financials', symbol: 'CONS' },
    { name: 'Milky Way Holdings', symbol: 'MILK' },
    { name: 'Andromeda Equities', symbol: 'ANDR' },
    { name: 'UFO Securities', symbol: 'UFO' },
    { name: 'SpaceX Assets', symbol: 'SPX' },
    { name: 'Rocketeer Stocks', symbol: 'RCKT' },
    { name: 'Starship Ventures', symbol: 'SHIP' },
    { name: 'Cosmic Travelers', symbol: 'COST' },
    { name: 'Astronomical Capital', symbol: 'ASTR' },
    { name: 'Comet Holdings', symbol: 'COMT' },
    { name: 'Saturn Trading', symbol: 'SATN' },
    { name: 'Neptune Investments', symbol: 'NEPT' },
    { name: 'Pluto Financials', symbol: 'PLUT' },
    { name: 'Mars Equities', symbol: 'MARS' },
    { name: 'Venus Corporation', symbol: 'VENS' },
    { name: 'Jupiter Securities', symbol: 'JUP' },
    { name: 'Mercury Assets', symbol: 'MERC' },
    { name: 'Apollo Stocks', symbol: 'APLO' },
    { name: 'Orion Ventures', symbol: 'ORIO' },
    { name: 'Hubble Investments', symbol: 'HUBL' },
    { name: 'Asteroid Financials', symbol: 'ASTR' },
    { name: 'Big Bang Equities', symbol: 'BIBE' },
    { name: 'Quasar Holdings', symbol: 'QUAS' },
    { name: 'Supernova Trading', symbol: 'SUNO' },
    { name: 'Pulsar Securities', symbol: 'PULS' },
    { name: 'Cosmic Rays Assets', symbol: 'CORA' },
    { name: 'Black Matter Stocks', symbol: 'BLMA' },
    { name: 'Alien Civilization Ventures', symbol: 'ALCV' },
    { name: 'Space Odyssey Investments', symbol: 'SOIN' },
    { name: 'Stargate Financials', symbol: 'STGA' },
    { name: 'Astro Explorer Equities', symbol: 'ASXP' },
    { name: 'Cosmic Dust Corporation', symbol: 'CODU' },
    { name: 'Uranus Securities', symbol: 'URAN' },
    { name: 'Hyperspace Assets', symbol: 'HSPA' },
    { name: 'Exoplanet Stocks', symbol: 'EXPL' },
    { name: 'Celestial Ventures', symbol: 'CELE' },
    { name: 'Time Traveler Financials', symbol: 'TTIM' },
    { name: 'Starfleet Equities', symbol: 'STFE' },
    { name: 'Warp Drive Investments', symbol: 'WARP' },
    { name: 'Aurora Borealis Corporation', symbol: 'AURB' },
    { name: 'Nebula Securities', symbol: 'NEBS' },
    { name: 'Cybertron Assets', symbol: 'CYBR' },
    { name: 'Dark Matter Stocks', symbol: 'DMAT' },
    { name: 'Astrobiology Ventures', symbol: 'ASTB' },
    { name: 'Quantum Leap Financials', symbol: 'QLEP' },
];

const stockName = document.getElementById("stockName");
const buyPercent = document.getElementById("buy%");
const holdPercent = document.getElementById("hold%");
const sellPercent = document.getElementById("sell%");

const random = Math.floor((Math.random()*stockData.length));
const randomPercent = Math.floor((Math.random()*100));

stockName.textContent = stockData[random].name + " (" + stockData[random].symbol + ")";

buyPercent.textContent = randomPercent + "%";

var s = Math.floor(Math.random()*(100 - randomPercent));
sellPercent.textContent = s + "%";
if((100 - s) < 0){
    holdPercent.textContent = "0%";
}else{
    holdPercent.textContent = (100 - randomPercent - s) +"%";
}

const headers = document.querySelectorAll(".headers");
const labels = document.querySelectorAll(".label");
const now = new Date();
const currentHour = now.getHours();

// Define different background colors based on time of day
let backgroundColor;
let textColor;
let lineColor;

if (currentHour >= 9 && currentHour < 17) {
    // Market Opens (9am - 5pm)
    backgroundColor = 'white';
    textColor = "black";
    lineColor = "rgb(30,33,36)";
} else {
    // Evening and Pre-Market (5pm - 9am)
    backgroundColor = 'black';
    textColor = "white";
    lineColor = "white";
}

// Apply the background color to the body element
document.body.style.backgroundColor = backgroundColor;
for(const header of headers){
    header.style.color = textColor;
}

for(const label of labels){
    label.style.color = textColor;
}

// The following creates the SVG element for 
// a line chart to represent the stock
const graphWidth = 900;
const graphHeight = 300;

var data = new Array(16);
for(let i = 0; i < data.length; i++){
    data[i] = parseFloat((Math.random()*50).toFixed(2));
}

// Get the SVG container element
const svgContainer = document.getElementById("graphStock");

// Create an SVG element with a viewBox for scaling
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "100%"); //Update the width attribute
svg.setAttribute("height", graphHeight); // Update the height attribute
svg.setAttribute("viewBox", `0 0 ${graphWidth+50} ${graphHeight+50}`); // Update viewBox dimensions

// Create a polyline element for the line graph
const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

// Create a polyline element for the bottom of the graph
const polyline2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

// Get color of graph
var color;
if(data[data.length - 1] < data[0]){
    color = "rgb(255, 80, 0)";
}else{
    color = "rgb(0, 200, 5)";
}

polyline.setAttribute("fill", "none");
polyline.setAttribute("stroke", color);
polyline.setAttribute("stroke-width", "1");

polyline2.setAttribute("fill", "none");
polyline2.setAttribute("stroke", lineColor);
polyline2.setAttribute("stroke-width", "1");

// Calculate the points for the polyline based on the data and the new height
const points = data.map((value, index) => `${(index * (graphWidth / (data.length - 1)) )},${graphHeight - (value * (graphHeight / 50))}`).join(" ");
const points2 = data.map((value, index) => `${(index * (graphWidth / (data.length - 1)) )},${graphHeight}`).join(" ");
polyline.setAttribute("points", points);
polyline2.setAttribute("points", points2);

// Append the polyline to the SVG element
svg.appendChild(polyline);
svg.appendChild(polyline2);

// Add circles to represent data points
data.forEach((value, index) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const x = index * (graphWidth / (data.length - 1));
    const y = graphHeight - (value * (graphHeight / 50));
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 3); // Set the radius of the circle
    circle.setAttribute("fill", color); // Set the fill color

    // Add mouseover event listener to show tooltip
    circle.addEventListener("mouseover", (event) => {
        const tooltip = document.getElementById("tooltip");
        tooltip.style.opacity = 1;
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY - 30 + "px";
        tooltip.innerText = "$" + value;
        circle.style.opacity = 0.5;
    });

    // Add mouseout event listener to hide tooltip
    circle.addEventListener("mouseout", () => {
        const tooltip = document.getElementById("tooltip");
        tooltip.style.opacity = 0;
        circle.style.opacity = 1;
    });

    if (currentHour >= 9 && currentHour < 17) {
        // Market Opens (9am - 5pm)
        tooltip.style.color = "black";
    } else {
        // Evening and Pre-Market (5pm - 9am)
        tooltip.style.color = "white";
    }

    svg.appendChild(circle);
});

const timeIntervals = ["1D", "1M", "1Y", "5Y"];
const xPositions = [0, 50, 100, 150];
const spacing = graphWidth / (timeIntervals.length - 1); // Adjust the spacing as needed
timeIntervals.forEach((interval, index) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("y", graphHeight + 40); // Adjust the vertical position as needed
    text.setAttribute("x", xPositions[index]);
    text.setAttribute("text-anchor", "start"); // Set to "start" for left alignment
    text.setAttribute("fill", lineColor); // Text color
    text.textContent = interval;

    text.addEventListener("mouseover", (event) => {
        text.style.opacity = 0.5;
    });

    text.addEventListener("mouseout", () => {
        text.style.opacity = 1;
    });

    svg.appendChild(text);
});

// Append the SVG element to the container
svgContainer.appendChild(svg);

const price = document.getElementById("Price");
price.textContent = "$" + data[data.length -1];

const change = document.getElementById("Change");
if(data[data.length -1] - data[0] >= 0){
    change.textContent = "+ $" + (data[data.length -1] - data[0]).toFixed(2);
}else{
    change.textContent = "- $" + Math.abs((data[data.length -1] - data[0]).toFixed(2));
}

change.style.color = color;