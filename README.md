# The Premier League
The Premier League - Code Institute Project 2

This milestone project, as part of the Code Institute Interactive Centric Frontend Design curriculum, was created for users to navigate different statistics and information on the Premier League, including top goal scorers, most clean sheets, most money spent etc.

I chose this as my project material as I am a massive football fan (Liverpool F.C) and enjoy the statistics behind football, and believe that other fans do so as well; especially when comparing against other teams. For example, knowing which team spent the least and money and their relative positions in the table.

A user is able to compare teams from the database either as a drop-down or when clicking on different tables.

# Demo
A live demo of this project can be found at https://nathenjohns.github.io/project-two/.

This application is hosted on GitHub Pages.

# UX
This project is modeled after the real world Premier League statistics's site. A user is able to view different stats and information and compare between players and teams. I wanted to create a similar experience with my own (although not as extensive) version that would allow a user to view stats based on their favourite team/s.

Unlike the real statistics site, a user can view information based on how much money a club has spent in a year, and their win percentage relative to their purchasing power. For example, Manchester City winning the most games but spending the most money, compared to Bournemouth who spent considerably less and won only 1/3 of the games Manchester City did.

This allows a user to see for themselves the spending power and chances of success whereas the real world version does not allow you to do that. This gives the user a different and more in-depth experience.

The site allows users to view one teams statistics, all teams, or selected teams i.e. compare Liverpool to West Ham and Newcastle etc. This selection experiencem, using graphs, gives an easy to view and easy to understand example of statistical comparison between teams; something that the real world Premier League site cannot do.

I wanted to create a minimalistic design so that the page was not too busy or distracting. There is a short introduction that explains the site and multipe graphs that a user can interact with to view the data. All data is viewed on varying graphs that are aligned centrally and in rows on the page. I have also included, for user reference, the tables of the League including Top Scorers, Top Goalkeepers and the Team's League Position.

To find out more about the real world Premier League site, [click here](https://www.premierleague.com/stats).

# Technologies
1. HTML
2. CSS
3. Javascript
4. d3
5. dc

# Testing
Testing for this project was kept within the Code Editor (Cloud9) and when deployed on Google Chrome using their dev tools.

As the code is interactive and requires Javascript, dev tools on Google Chrome was used to work and test functionality and the Console (using Console Log) within the code was used
to see if the progam ran into errors. There was regular use of trial and error.

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 4, 5, 7: Chrome and Safari, iPad, Samsung Galaxy) to ensure compatibility and responsiveness.

However, due to the use of D3 and DC full responsiveness is not possible on mobile devices but was implemented where possible.

# Features
This site, as mentioned previously, was built using D3 and DC JavaScript with data in a local CSV file. The use of D3 and DC allows for easy to manage, and beautifully styled graphs to show data and stats that a user can easily navigate and view.

Functions in the graph.js file were used to build the graphs. With a functions specifically for graphs using data from the function collecting the data and then a final function to render all the data and graphs so they can be viewed on the page.

The graphs and charts are interactive so a user can click on them depending on what they want to view, but they can also view individual teams using the Selector Menu found at the top of the below, below the tables.

## Features Left to Implement
I would like to add more information at a later date as there is a whole breadth of statistics that are prevalent to the Premier League, and as this project was built some time ago most of the information is out of date and needs updating.

# Credits
## Content
All content in this project was written by me with all data and information obtained from [The Premier League](https://www.premierleague.com/).

No copyright infringement intended, as this is for educational use only.

## Media
The only image is for the logo which I aquired from this [site](https://sporting-id.com/en-gb/official-league-products/premier-league/premier-league-sleeve-badges/pl-player-sleeve-badge-910014999999074?returnurl=%2fen-gb%2fofficial-league-products%2fpremier-league%2fpremier-league-sleeve-badges%2f).

# Installation
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting:
> git clone https://github.com/NathenJohns/project-two.git

into your terminal. To cut ties with this GitHub repository, type:
> git remote rm origin into the terminal.