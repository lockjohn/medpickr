import * as d3 from 'd3';




export const lineCircle = (dataSet) => {


//globals
let dxChoice;
let circle;
let color = d3.scaleOrdinal()
    .range(d3.schemeCategory10);
var firstDataSet = dataSet[0];
var secDataSet = dataSet[1];
var thirdDataSet = dataSet[2];
var xBuffer = 50;
var yBuffer = 150;
var lineLength = 400;



//create main svg element
const svgDoc = d3.select(".tools")
    .append("div")
    .classed("svg-container", true) //container class to make it responsive
    .append("svg")
    //responsive SVG needs these 2 attributes and no width and height attr
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-75 0 600 300")
    //class to make it responsive
    .classed("svg-content-responsive", true);

//make desciption text
svgDoc.append("text")
    .attr("x", xBuffer + (lineLength / 2))
    .attr("y", 50)
    .text("Outcomes Measures"); //this uses old method of index toggle

//create axis line
svgDoc.append("line")
    .attr("x1", xBuffer)
    .attr("y1", yBuffer)
    .attr("x1", xBuffer + lineLength)
    .attr("y2", yBuffer)
//make basic cirles
svgDoc.append("g").selectAll("circle")
    // .data(eval("dataArray"+dataIndex))
    .data(firstDataSet)//array of objects
    .enter()
    .append("circle")//each circle should be tied to an object in that array
    .attr("cx", function (d, i) {
        var spacing = lineLength / (firstDataSet.length);
        return xBuffer + (i * spacing)
    })
    .attr("cy", yBuffer)
    .attr("r", function (d, i) { return d.m1 * 10 })
    .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });


//create event handler for selected option's value
d3.select(".tools").append('select')
    .on('change', function () {
        

        var choice = d3.select('select').property('value')

        if (choice === "MDD") {
            dxChoice = firstDataSet;
        } else if (choice === "AFib") {
            dxChoice = secDataSet;
        } else {
            dxChoice = thirdDataSet;
        }
        console.log(dxChoice);
        console.log(d3.min(dxChoice));
        //need to iterate through whole dxChoice for a set of all the m1s... 
        var data =  function (dxChoice) {
           return dxChoice.map(dx => dx.m1)
        }
        var dataArray = data(dxChoice);
        console.log(d3.min(dataArray));
        console.log(d3.max(dataArray));
        var scaleRadius = d3.scaleLinear().domain([d3.min(dataArray), d3.max(dataArray)]).range([20, 60])
        // console.log(scaleRadius());

        circle = svgDoc.select("g").selectAll("circle")
            .data(dxChoice);
       
        circle.exit().remove();
        circle.enter().append("circle")
            .attr("r", 0);
        
        svgDoc.select("g").selectAll("circle")
            .data(dxChoice).transition()
            .duration(500)
            .attr("cx", function (d, i) {
              
                var spacing = lineLength / (dxChoice.length);
                return xBuffer + (i * spacing)
            })
            .attr("cy", yBuffer)
            .attr("r", function (d, i) { 
                console.log(scaleRadius(d.m1));
                
                return scaleRadius(d.m1) })
            .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });
            // .append("text")
            // .attr("x", xBuffer + (lineLength / 2))
            // .attr("y", 70)
            // .text(d.measure1);
        // d3.select("text").text(dxChoice);
    })
    .selectAll('option')
    .data(dataSet) //bind options to the three members of dataset
    .enter()
    .append('option')
    .attr('value', function (d) {
       console.log(d[0].tag)
         return d[0].tag })
    .text(function (d) { 
        console.log(d[0].tag);
        return d[0].tag});
    
}