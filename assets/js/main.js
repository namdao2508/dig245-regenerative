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

//CEO first names
const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rose",
    "Samuel",
    "Sophia"
  ];

  //CEO last names
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Williams",
    "Jones",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson"
  ];
  

const stockName = document.getElementById("stockName");
const buyPercent = document.getElementById("buy%");
const holdPercent = document.getElementById("hold%");
const sellPercent = document.getElementById("sell%");

const random = Math.floor((Math.random()*stockData.length));
const randomPercent = Math.floor((Math.random()*100));

stockName.textContent = stockData[random].name + " (" + stockData[random].symbol + ")";

//Initialize advice percentages
buyPercent.textContent = randomPercent + "%";
var s = Math.floor(Math.random()*(100 - randomPercent));
sellPercent.textContent = s + "%";
if((100 - s) < 0){
    holdPercent.textContent = "0%";
}else{
    holdPercent.textContent = (100 - randomPercent - s) +"%";
}

const headers = document.querySelectorAll(".headers");
const holdCircle = document.getElementById("hold");

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
    holdCircle.style.backgroundColor = "black";
    holdCircle.style.color = "white";
} else {
    // Evening and Pre-Market (5pm - 9am)
    backgroundColor = 'black';
    textColor = "white";
    lineColor = "white";
    holdCircle.style.backgroundColor = "white";
    holdCircle.style.color = "black";
}

// Apply the background color to the body element
document.body.style.backgroundColor = backgroundColor;
for(const header of headers){
    header.style.color = textColor;
}

const svgContainer = document.getElementById("graphStock");
const graphWidth = 900;
const graphHeight = 300;

// Define your data arrays for different time intervals
const data1D = randomizeData(16);
const data1M = randomizeData(30);
data1M[data1M.length-1] = data1D[data1D.length-1]

const data1Y = randomizeData(12);
data1Y[data1Y.length-1] = data1D[data1D.length-1]

const data5Y = randomizeData(5);
data5Y[data5Y.length-1] = data1D[data1D.length-1]

// Initial data
let currentData = data1D;

function randomizeData(size){
    var data = new Array(size);
    for(let i = 0; i < size; i++){
        data[i] = parseFloat((Math.random()*50).toFixed(2));
    }
    return data;
}

function updateGraph(data){
    const existingSvg = document.querySelector("#graphStock svg");
    if (existingSvg) {
        existingSvg.remove();
    }

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
        var temp;

        text.addEventListener("click", () => {
            if(interval == "1M"){
                currentData = data1M;
            }else if(interval == "1Y"){
                currentData = data1Y;
            }else if(interval == "5Y"){
                currentData = data5Y;
            }else{
                currentData = data1D;
            }
            updateGraph(currentData)
        });

        text.addEventListener("mouseover", (event) => {
            text.style.opacity = 0.5;
            if(interval == "1M"){
                temp = data1M;
            }else if(interval == "1Y"){
                temp = data1Y;
            }else if(interval == "5Y"){
                temp = data5Y;
            }else{
                temp = data1D;
            }
            if(temp[temp.length - 1] - temp[0] > 0){
                text.setAttribute("fill", "rgb(0, 200, 5)");
            }else{
                text.setAttribute("fill", "rgb(255, 80, 0)");
            }
        });

        text.addEventListener("mouseout", () => {
            text.style.opacity = 1;
            text.style.color = lineColor;
            text.setAttribute("fill", lineColor); 
        });

        svg.appendChild(text);
    });

    //Get final price
    const price = document.getElementById("Price");
    price.textContent = "$" + currentData[currentData.length -1];

    //Change the change in money to color green or red
    const change = document.getElementById("Change");
    if(currentData[currentData.length -1] - currentData[0] >= 0){
        change.textContent = "+ $" + (currentData[currentData.length -1] - currentData[0]).toFixed(2);
    }else{
        change.textContent = "- $" + Math.abs((currentData[currentData.length -1] - currentData[0]).toFixed(2));
    }
    change.style.color = color;

    // Append the SVG element to the container
    svgContainer.appendChild(svg);
}

// Initial rendering of the graph with the default data (1D)
updateGraph(currentData);

//Write description of company
const description = document.getElementById("Description");
description.style.color = textColor;
var foundedDate = (Math.floor(Math.random()*(currentYear-1950))+1950);
description.textContent = "Founded in " + foundedDate + ", " + stockData[random].name + " (" + stockData[random].symbol +") is a prominent player in the "
+ stockData[random].industry + " sector, known for its dedication to innovation and excellence. With a strong track record of growth and a commitment to delivering quality products and services, the company continues to make strides in its field. Their focus on "
+ stockData[random].industry + " has allowed them to remain a competitive force, earning the trust of investors and customers alike. As they navigate the challenges and opportunities of the market, " +  stockData[random].name + " remains a key influencer in their field.";

const CEOname = document.getElementById("CEOName");
CEOname.style.color = textColor;
CEOname.textContent = firstNames[(Math.floor(Math.random()*(firstNames.length)))] + " " + lastNames[(Math.floor(Math.random()*(lastNames.length)))];

const fDate = document.getElementById("Founded");
fDate.style.color = textColor;
fDate.textContent = foundedDate;