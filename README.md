## medpickr
*Drug data visualization app that supports physician treatment-selection*


### Background and Overview

medpickr is a medical descion support tool that uses data visualization to provide a gestalt synthesis of key drug metrics (NNT, NNH, interactions...) in order to compare drug effectiveness for a given diagnosis.
Currently, key drug informatics are located in data silos: nested under descriptions of individual drugs and depicting information in non-visually distinct data tables using basic numerical representation in small font. This practice makes it difficulty to make quick and effective comparisons during the increasingly smaller amounts of allotted time per clinical encounter, as it inihibits both ease of accessing and gestalt comparision using biostatistical measures.

### Functionality & MVP  

Therefore, users will be able:

- [ ] to see prepopulated lists of visual drugs objects by selecting a primary diagnosis from a dropdown
- [ ] use drag and drop UI to select and 'pull' candidate drugs into the adjacent canvas for anaylsis
- [ ] in the canvas, see colorful visual depictions of drug-informetrics (selectable by check box below canvas) for each drug
- [ ] select addiontional drugs by drag and drop and see information rich changes in canvas depiction (x/y axis, relative size, repulsion and attraction) that signify relative difference in outcomes
- [ ] select drugs in the canvas to see drug-specific pharmacokinetic and pharmacodynamic profiles

In addition, this project will include:

- [ ] A How-to modal describing the basic functionality
- [ ] Hyperlinks to data sources in the medical literature

### Wireframes

https://drive.google.com/file/d/1CIME6mb61r66Kyh9TpmuYJN-4a6_0Ir3/view?usp=sharing

This app will consist of a sidebar with the dropdown selector for primary diagnosis and box below it to list canditate drugs, a comparison canvas to the left, toggle controls for display of drug-informetrics, canvas size-controls to zoom in or out to allow for more drug comparisons, and nav links to the Github, my LinkedIn, and the About and Details modals.  

Users will drag and drop drugs from list into canvase to intiate data display, and select data display options below the canvas to change analysis parameters.



### Architecture and Technologies

This project will be implemented with the following technologies:

- HTML/CSS for overall structure and style
- D3js for DOM manipulation and dynamic data-driven transformations
- potentially a backend to house pharmaceutical data

The project requires:

`index.html`: to house basic canvas layout and following script files:

`dataDisplay.js`: D3 script to provide visualization of data objects
`data.js`: to house prototype data for one example diagnostic class (with future implementation to a backend database)

`styles.css`

### Implementation Timeline

**Over the weekend**:
- [x] drug-informatics reasearch to establish data set
- [x] physician-user focus group research
- [x] D3 research to establish feasibility of implementation
- [x] project proposal

**Day 1**: Goals: Basic Layout

- [x] layout structure of index.html
- [ ] build out information data structure of diagnosis/drug-name/NNT/NNH

**Day 2**: Goals: Deeper Dive into D3

- [ ] build data transformation functions for each drug object
- [ ] change in relative position when two drugs share canvas based on NNT/NNH
- [ ] change in relative position when two drugs share canvas based on NNT/NNH
- [ ] order by NNT or NNH as selected

**Day 3**: Goals: Create the logic of metric-selectors

- [ ] build checkboxes selectors that connect do different display logic
- [ ] Have a functional screen on the `Canvas` frontend that correctly handles creation and data display.
- [ ] Make sure that drag and dropping, and resetting works.

**Day 4**: Goals: Style the frontend, making it user-friendly

- [ ] have checkboxes for NNT, NNH, worse major se, most frequent major se, drug contraindications
- [ ] Build out list of drugs, style the drug object to look like a pill on in the canvas
- [ ] Have a minimalist styled `Canvas`


### Follow-up features

- [ ] Create Node.js back-end database to access more drug information
- [ ] Include more dynamic data driven relative comparisons
