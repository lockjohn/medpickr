import * as d3 from 'd3';

export const bubbleChart = () => {
    var width = 960,
        height = 960,
        maxRadius = 6,
        columnForColors = "id",
        columnForRadius = "m1",
        nodePadding = 0;

        // {id: "overall NNT"
        // measure1: "To prevent cardiovascular death over 3.9 yrs",
        // m1: "500", info: url}

    function chart(selection) {
        var data = selection.datum();
       
        // data = data.sort(function(a,b){ return b.size - a.size; });
        var div = selection,
            svg = div.selectAll('svg');
        // svg.attr('width', width).attr('height', height);

        var tooltip = selection
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("color", "white")
            .style("padding", "8px")
            .style("background-color", "#626D71")
            .style("border-radius", "6px")
            .style("text-align", "center")
            .style("font-family", "monospace")
            .style("width", "400px")
            .text("");


        // var simulation = d3.forceSimulation(data)
            // .force("charge", d3.forceManyBody().strength([-50])
            // .force("x", d3.forceX(0))
            // .force("y", d3.forceY(0))
            // .on("tick", ticked);
            var colorCircles = d3.scaleOrdinal(d3.schemeCategory10);
            var scaleRadius = d3.scaleLinear().domain([d3.min(data, function(d) {
                return +d[columnForRadius];
            }), d3.max(data, function(d) {
                return +d[columnForRadius];
            })]).range([50, 100])

            let simulation = d3.forceSimulation()
              .force("forceX", d3.forceX(10).strength(.1))
              .force("forceY", d3.forceY(10).strength(.1))
              .force("center", d3.forceCenter().x(width * .5).y(height * .5))
              .force("charge", d3.forceManyBody().strength())


              //update the simulation based on the data
          simulation.nodes(data).force("collide", d3.forceCollide().radius(function(d){
        
            return scaleRadius(d.m1);
          }).iterations(2)).on("tick", function(d){
                    node
                        .attr("cx", function(d){ return d.x; })
                        .attr("cy", function(d){ return d.y; })  });


        function ticked(e) {
            node.attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });
        }



        var node = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g").append("circle")
            .attr('r', function(d) {
                return scaleRadius(d[columnForRadius])
            })
            .text(function(d){return d.m1})
            .style("fill", function(d) {
                return colorCircles(d[columnForColors])
            });
            // .attr('transform', 'translate(' + [width / 2, height / 2] + ')')

          // svg.selectAll("g")
          //     .append("text")
          //     .text( function(d) {return d.id})
          //     .attr('font-size',8)//font size
          //     .attr('x', function(d){
          //       console.log('d',d);
          //         return d.x; })
          //     .attr('y', function(d){ return d.vy; });

          node.on("mouseover", function(d) {
                tooltip.html(d[columnForColors] + "<br>" + d.measure1 + "<br>" + d[columnForRadius]);
                return tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                return tooltip.style("visibility", "hidden");
            }).call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


              // console.log(d3.selectAll('g'));

            // const g = d3.selectAll('g').selectAll('text').data(data).enter().append('text').text( function(d) {return d.id});

      function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }

    // const textElems = select("g").selectAll("circle")
    //     .selectAll('text')
    //     .data(data)
    //     .enter().append('text')
    //     .text(node => node.id)
    //     .attr('font-size',8)//font size
    //     .attr('dx', -10)//positions text towards the left of the center of the circle
    //     .attr('dy',4)

    // function types(d){
    //   d.gdp = +d.gdp;
    //   d.size = +d.gdp / sizeDivisor;
    //   d.size < 3 ? d.radius = 3 : d.radius = d.size;
    //   return d;
    // }
    }

    chart.width = function(value) {
        if (!arguments.length) {
            return width;
        }
        width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) {
            return height;
        }
        height = value;
        return chart;
    };


    chart.columnForColors = function(value) {
        if (!arguments.columnForColors) {
            return columnForColors;
        }
        columnForColors = value;
        return chart;
    };

    chart.columnForRadius = function(value) {
        if (!arguments.columnForRadius) {
            return columnForRadius;
        }
        columnForRadius = value;
        return chart;
    };

    return chart;
}
