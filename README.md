[live site](lockjohn.github.io/medpickr/)

## medpickr
*A drug data visualization app that supports physician treatment-selection*


### Background and Overview

medpickr is a medical descion support tool that uses data visualization to provide a gestalt synthesis of key drug metrics (NNT, NNH, interactions...) in order to compare drug effectiveness for a given diagnosis.
Currently, key drug informatics are located in data silos: nested under descriptions of individual drugs and depicting information in non-visually distinct data tables using basic numerical representation in small font. This practice makes it difficulty to make quick and effective comparisons during the increasingly smaller amounts of allotted time per clinical encounter, as it inihibits both ease of accessing and gestalt comparision using biostatistical measures.

### Functionality & MVP  
Users can choose a diagnosis and see different drug treatment options
Users can get more information about how each option compares in effectiveness to others by click or hovering
Users can interact with visual representations of the data (click, drag) and implement force features of D3 library

### Architecture and Technologies

This project uses:

- HTML/CSS for content and style of DOM
- D3js for DOM manipulation and dynamic data-driven transformations outputted to SVG objects
- to further expand capabilities will require a database backend to house pharmaceutical data

The project requires:

`index.html`: to house basic canvas layout and following script files:

`dataDisplay.js`: D3 script to provide visualization of data objects

`data.js`: to house prototype data for one example diagnostic class (with future implementation to a backend database)

`styles.css`


### Follow-up features

- [ ] Create Node.js back-end database to access more drug information
- [ ] Include more dynamic data driven relative comparisons
