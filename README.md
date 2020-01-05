### Project

This Project represents a Gantt chart.<br/>
It has a list of topics and each topic is represented by a gantt chart. <br />
Each topic has a title, start date, end date and list of campaigns. <br/>
Each campaign has a title, start date, end date, description and color and is represented by a row in the chart. <br />

### Bar

Logo, main title and Topics component.

### Topics

Dropdown which contains list of components and you can change the current represented topic in the chart from the dropdown.

### Chart

Contains `ChartTitles`, `Timeline` , `ChartDetails` (left side of the chart) and `ChartGraph` (right side of the chart) components

### ChartTitles

Contains only the titles(Campaign name, start date, end date and duration)

### ChartDetails

Contains the values of ChartTiltes for each campaign in rows. <br />
Each row is clickable and it opens a popup with the campaign details represented in `CampaignDetails` component

### Timeline

`Timeline` component which is the row of dates at the top.

### ChartGraph

The right side of the chart contains the colored div/box for each campaign whre each campaign's width is computed based on its start date and end date<br /> this div is draggable but it has limits which are the topic's start date and end date.

### Form

Form for adding new campaign.

### Modal

Popup modal which content is changed (either campaign details or add campaign)
