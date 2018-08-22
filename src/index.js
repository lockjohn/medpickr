import * as d3 from "d3";



document.addEventListener("DOMContentLoaded", () => {
    // const canvasEl = document.getElementById("canvas");
    // canvasEl.width = 1000;
    // canvasEl.height = 650;

    // const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "purple";
    // ctx.fillRect(0, 0, 1000, 650);

    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    // // ctx.strokeStyle = "green";
    // // ctx.lineWidth = 5;
    // // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();

    //figure out why it wasnt working with dropdown variable
//have to wrap this in dom content loaded otherwise the values are null, in the examples they put script in the body element so...
// const dropdown = document.getElementsByTagName("select");
// console.log(dropdown);
// console.log(dropdown.options.selectedIndex);
// console.log(dropdown.option);


const diagnoses = ["MDD", "A Fib Stroke", "Acute Bronchitis", "Psychosis"];
    const drugs = [["fluoxetine"], ["aspirin", "warfarin"], ["cipro","azithromycin"], ["haldol", "aripiprazole"]]
let selectValue;
let drugsToList;
const svg = d3.select("svg");

const width = svg.attr("width");
const height = svg.attr("height");


let color = d3.scaleOrdinal()
        .range(d3.schemeCategory10);

const select = d3.select('aside')
  .append('select')
  	.attr('class','select')
    .on('change', onchange)

const options = select
  .selectAll('option')
	.data(diagnoses).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
    selectValue = d3.select('select').property('value')
    drugsToList = drugs[diagnoses.indexOf(selectValue)]
    
    var pills = d3.range(drugsToList.length).map(function () {
        return {
            x: Math.round(Math.random() * width + 35),
            y: Math.round(Math.random() * height + 35)
        };
    });
    console.log(pills);
    
    
    let s = d3.select('aside')
    .selectAll('p')
    .data(drugsToList)
    .text(function (d) { return d; } )
    
    s.enter().append("p")
    .text(function (d){ return d; } )
    .select('svg')
    
    s.exit().remove()
    
    console.log(svg);
    
    d3.select("svg").data(pills)
        .enter().append("use")
        .attr("href", "#pill")
        .attr("x", function (d) { 
            console.log(d);
            
            return d.x; })
        .attr("y", function (d) { return d.y; })
        .style("fill", function (d, i) { return color(i); })

    //     .call(d3.drag()
    //         .on("start", dragstarted)
    //         .on("drag", dragged)
    //         .on("end", dragended));

    // function dragstarted(d) {
    //     d3.select(this).raise().classed("active", true);
    // }

    // function dragged(d) {
    //     d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
    // }

    // function dragended(d) {
    //     d3.select(this).classed("active", false);
    // }
};

// const ps = d3.selectAll('p')

svg.on("click", function () {
    let mouse = d3.mouse(this);
    // console.log(mouse[0], mouse[1]);
    
       const pill = svg
        .append("use")
        .attr("href", "#pill")
        .attr("x", mouse[0])
        .attr("y", mouse[1])
           .style("fill", function (d, i) { return color(Math.floor(Math.random() * 11)) })
            
    const dragHandler = d3.drag()
        .on("drag", function () {
            d3.select(this)
                .attr("x", d3.event.x)
                .attr("y", d3.event.y);
        });

        dragHandler(pill);
});

    // var data = ["Option 1", "Option 2", "Option 3"];

    // var select = d3.select('body')
    //     .append('select')
    //     .attr('class', 'select')
    //     .on('change', onchange)

    // var options = select
    //     .selectAll('option')
    //     .data(data).enter()
    //     .append('option')
    //     .text(function (d) { return d; });

    // function onchange() {
    //     let selectValue = d3.select('select').property('value')
    //     d3.select('body')
    //         .append('p')
    //         .text(selectValue + ' is the last selected option.')
    // };

   



// const d = document.getElementById("diagnosis");
// console.log(d);
// let diagnosis = d.options[d.selectedIndex].getAttribute("value");
// let drugs = [];

// if (diagnosis === "A Fib") {
//   drugs = ['aspirin', 'warfarin'] 
// } else {
//     drugs = [" ",]
// };

// d3.select('.drug-list').selectAll('p').data(drugs).enter().append('p').text(function(d){ return d;});





});