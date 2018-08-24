import * as d3 from "d3";
import { antidepressantClasses, anticoagulants, statinPrimaryCVD, statin} from "./drug_data";
import {bubbleChart} from './bubble_charts';
import pills from "./pills";
import {lineCircle} from "./line_circ";


document.addEventListener("DOMContentLoaded", () => {

    var chart = bubbleChart().width(1000).height(500);
    d3.select('#chart').datum(statin).call(chart);
    
    pills();
    const dataSet = [antidepressantClasses, anticoagulants, statinPrimaryCVD];
    lineCircle(dataSet);

});