import * as d3 from "d3";
import {antidepressantClasses, statin} from "./drug_data";
import {bubbleChart} from './bubble_charts';
import Pills from './pills';
import pills from "./pills";


document.addEventListener("DOMContentLoaded", () => {

    var chart = bubbleChart().width(1000).height(500);
    d3.select('#chart').datum(statin).call(chart);
    pills();



});