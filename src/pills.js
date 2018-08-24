import * as d3 from "d3";



 const pills = () => {

    // const svg = d3.select("#pills");

    // const width = svg.attr("width");
    // const height = svg.attr("height");
    
    let color = d3.scaleOrdinal()
        .range(d3.schemeCategory10);

    // const svgDoc = d3.select("#pills")
    //     .append("div")
    //     .classed("svg-container", true) //container class to make it responsive
    //     .append("svg")
    //     //responsive SVG needs these 2 attributes and no width and height attr
    //     .attr("preserveAspectRatio", "xMinYMin meet")
    //     .attr("viewBox", "0 0 600 400")
    //     //class to make it responsive
    //     .classed("svg-content-responsive", true);
    
    const   container = d3.select("#pills");

    container.on("click", function () {
        let mouse = d3.mouse(this);

        const pill = container
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


    };

export default pills;