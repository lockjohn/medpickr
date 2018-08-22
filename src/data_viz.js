import * as d3 from 'd3';

var dataArray1 = [30, 35, 45, 55, 70];
var dataArray2 = [50, 55, 45, 35, 20, 25, 25, 40];

//globals
let dxChoice;
let circle;
let color = d3.scaleOrdinal()
    .range(d3.schemeCategory10);
var dataIndex = 1;
var dataIndices = [dataArray1, dataArray2]; //will become options, aka named by dx and hold drug object data?
var firstDataSet = dataIndices[0];
var secDataSet = dataIndices[1];
var xBuffer = 50;
var yBuffer = 150;
var lineLength = 400;




//create main svg element
const svgDoc = d3.select("body")
    .append("div")
    .classed("svg-container", true) //container class to make it responsive
    .append("svg")
    //responsive SVG needs these 2 attributes and no width and height attr
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 400")
    //class to make it responsive
    .classed("svg-content-responsive", true);

//make desciption text
svgDoc.append("text")
    .attr("x", xBuffer + (lineLength / 2))
    .attr("y", 50)
    .text("chose a dx"); //this uses old method of index toggle

//create axis line
svgDoc.append("line")
    .attr("x1", xBuffer)
    .attr("y1", yBuffer)
    .attr("x1", xBuffer + lineLength)
    .attr("y2", yBuffer)
//make basic cirles
svgDoc.append("g").selectAll("circle")
    // .data(eval("dataArray"+dataIndex))
    .data(dataIndices[0])
    .enter()
    .append("circle")
    .attr("cx", function (d, i) {
        var spacing = lineLength / (firstDataSet.length);
        return xBuffer + (i * spacing)
    })
    .attr("cy", yBuffer)
    .attr("r", function (d, i) { return d })
    .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });

//create event handler for selected option's value
d3.select("header").append('select')
    .on('change', function () {

        dxChoice = d3.select('select').property('value')
        dxChoice = dxChoice.split(',');
        // dxChoice = secDataSet;
        // console.log("dx", dxChoice);
        //prev example where 'value' was a 'color'
        // d3.select('circle')
        //   .transition()
        //   .duration(1000)
        //   .attr('fill',colorsChoice)

        circle = svgDoc.select("g").selectAll("circle")
            .data(dxChoice);
        // console.log('update:', circle.size());
        // circle.exit().remove();//remove unneeded circles
        // console.log('exit:',circle.size());
        circle.exit().remove();
        circle.enter().append("circle")
            .attr("r", 0);
        // .merge(circle)//merge needed? fix other prob first
        // .attr("r",0);//create any new circles needed
        // console.log('enter/update:',circle.size());
        //update all circles to new positions
        svgDoc.select("g").selectAll("circle")
            .data(dxChoice).transition()
            .duration(500)
            .attr("cx", function (d, i) {
                // var spacing = lineLength/(eval("dataArray"+dataIndex).length);
                var spacing = lineLength / (dxChoice.length);
                return xBuffer + (i * spacing)
            })
            .attr("cy", yBuffer)
            .attr("r", function (d, i) { return d })
            .attr("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) });


        d3.select("text").text(dxChoice);
    })
    .selectAll('option')
    .data(dataIndices)
    .enter()
    .append('option')
    .attr('value', function (d) { return d })
    .text(function (d) { return d })