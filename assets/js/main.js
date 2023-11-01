//list of fake stock name and its symbol
const stockData = [
    { name: 'AeroTech Inc.', symbol: 'ATI', industry: 'Aerospace' },
    { name: 'BioPharm Corp.', symbol: 'BPC', industry: 'Biotechnology' },
    { name: 'CloudCom Systems', symbol: 'CCS', industry: 'Technology' },
    { name: 'DeltaEnergy Ltd.', symbol: 'DEL', industry: 'Energy' },
    { name: 'EcoFoods Group', symbol: 'EFG', industry: 'Food and Beverage' },
    { name: 'Fusion Motors Inc.', symbol: 'FMI', industry: 'Automotive' },
    { name: 'GreenTech Solutions', symbol: 'GTS', industry: 'Renewable Energy' },
    { name: 'HealthLinx Corp.', symbol: 'HLC', industry: 'Healthcare' },
    { name: 'InnoWare Technologies', symbol: 'IWT', industry: 'Information Technology' },
    { name: 'Jupiter Mining Co.', symbol: 'JMC', industry: 'Mining' },
    { name: 'LuxeFash Inc.', symbol: 'LXF', industry: 'Fashion and Apparel' },
    { name: 'MetaData Systems', symbol: 'MDS', industry: 'Software' },
    { name: 'NexaTech Group', symbol: 'NTG', industry: 'Telecommunications' },
    { name: 'OptiMedia Networks', symbol: 'OMN', industry: 'Media and Entertainment' },
    { name: 'PentaLogix Inc.', symbol: 'PLX', industry: 'Logistics' },
    { name: 'Quasar Dynamics', symbol: 'QDS', industry: 'Electronics' },
    { name: 'RevoPharma Ltd.', symbol: 'RPL', industry: 'Pharmaceuticals' },
    { name: 'SolarWorks Corp.', symbol: 'SWC', industry: 'Solar Energy' },
    { name: 'TechNexx Solutions', symbol: 'TNS', industry: 'Information Technology' },
    { name: 'United Foods Inc.', symbol: 'UFI', industry: 'Food and Beverage' },
    { name: 'VivaCraft Brewing', symbol: 'VCB', industry: 'Beverages' },
    { name: 'WildFire Energy', symbol: 'WFE', industry: 'Energy' }
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
const currentYear = now.getFullYear();

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

    tooltip.style.color = lineColor;

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

const description = document.getElementById("Description");
description.style.color = lineColor;
description.textContent = "Founded in " + (Math.floor(Math.random()*(currentYear-1950))+1950)+ ", " + stockData[random].name + " is a prominent player in the "
+ stockData[random].industry + " sector, known for its dedication to innovation and excellence. With a strong track record of growth and a commitment to delivering quality products and services, the company continues to make strides in its field. Their focus on "
+ stockData[random].industry + " has allowed them to remain a competitive force, earning the trust of investors and customers alike. As they navigate the challenges and opportunities of the market, " +  stockData[random].name + " remains a key influencer in the field";
