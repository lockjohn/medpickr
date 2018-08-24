import * as d3 from 'd3';
import { antidepressantClasses, anticoagulants, statinPrimaryCVD, statin } from "./drug_data";

const dataSet = [antidepressantClasses, anticoagulants, statinPrimaryCVD]

export const lineCircle = (dataSet) => {


//globals
let dxChoice;
let circle;
let color = d3.scaleOrdinal()
    .range(d3.schemeCategory10);
var dataIndex = 1;
var dataIndices = [dataArray1, dataArray2]; //will become options, aka named by dx and hold drug object data?
var firstDataSet = Object.values(dataSet[0]);
var secDataSet = dataSet[1];
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
    .data(dataSet[0])
    .enter()
    .append("circle")
    .attr("cx", function (d, i) {
        var spacing = lineLength / (firstDataSet.length);
        return xBuffer + (i * spacing)
    })
    .attr("cy", yBuffer)
    .attr("r", function (d, i) { return d.m1 })
    .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });

//create event handler for selected option's value
d3.select(".tools").append('select')
    .on('change', function () {

        dxChoice = d3.select('select').property('value')
        // dxChoice = dxChoice.split(',');
       

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
            .attr("r", function (d, i) { return d.m1 })
            .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });


        d3.select("text").text(dxChoice);
    })
    .selectAll('option')
    .data(dataSet)
    .enter()
    .append('option')
    .attr('value', function (d) { return d })
    .text(function (d) { 
        if (d.m1 === "warfarin"){
        return "A.Fib Stroke Prevention" } else if 
        (d.m1 === "Statin for 5 yrs")
        {
            return "Primary CVD Prevention";
        } else {
            return "MDD";
        }});
    
}