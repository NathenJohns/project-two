queue()
    .defer(d3.csv, "data/premierLeague.csv")
    .await(makeGraphs);

//Make Graphs

function makeGraphs(error, premierData) {
    var ndx = crossfilter(premierData);
    
    premierData.forEach(function(d){
        d.goals = parseInt(d.goals);
        d.shots = parseInt(d.shots);
        d.wins = parseInt(d.wins);
        d.possession = parseInt(d.possession);
        d.tackles = parseInt(d.tackles);
        d.cleansheets = parseInt(d.cleansheets);
        d.conceded = parseInt(d.conceded);
        d.expenditure = parseInt(d.expenditure);
        d.transferrevenue = parseInt(d.transferrevenue);
    })
    
    show_team_selector(ndx);
    show_goals_to_shots_balance(ndx);
    show_wins_to_possession_balance(ndx);
    show_team_tackles_made(ndx);
    show_team_cleansheets(ndx);
    show_team_conceded(ndx);
    show_team_expenditure(ndx);
    show_wins_to_expenditure(ndx);
    
    dc.renderAll();
}

//Selector Menu

function show_team_selector(ndx) {
    dim = ndx.dimension(dc.pluck("team"));
    group = dim.group()
    
    dc.selectMenu("#team-selector")
        .dimension(dim)
        .group(group)
        .title(function(d){
            return d.key;
        });
}

//Team Expenditure Pie Chart

function show_team_expenditure(ndx) {
    var teamDim = ndx.dimension(dc.pluck("team"));
    var total_spend_per_team = teamDim.group().reduceSum(dc.pluck("expenditure"));
    
    dc.pieChart("#expenditure-chart")
            .height(330)
            .radius(300)
            .transitionDuration(1500)
            .dimension(teamDim)
            .group(total_spend_per_team);
}

//Wins to Expenditure Scatter Chart

function show_wins_to_expenditure(ndx) {
    var winsTwoDim = ndx.dimension(dc.pluck("wins"));
    var expenditureDim = ndx.dimension(function(d) {
        return [d.wins, d.expenditure, d.team];
    });
    var winsExpenditureGroup = expenditureDim.group();
    
    var minWins = winsTwoDim.bottom(1)[0].wins;
    var maxWins = winsTwoDim.top(1)[0].wins;
    
    dc.scatterPlot("#wins-expenditure-balance")
        .width(600)
        .height(400)
        .x(d3.scale.linear().domain([minWins, maxWins]))
        .y(d3.scale.linear().domain([0, 300]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Wins")
        .yAxisLabel("Amount Spent (millions(£))")
        .title(function(d) {
            return d.key[2] + " have " + d.key[0] + " wins having spent " + d.key[1] + " million pounds";
        })
        .dimension(expenditureDim)
        .group(winsExpenditureGroup)
        .margins({top: 10, right: 50, bottom: 50, left: 50});
}

//Goals to Shots Balance Scatter Chart

function show_goals_to_shots_balance(ndx) {
    var goalsDim = ndx.dimension(dc.pluck("goals"));
    var shotsDim = ndx.dimension(function(d) {
        return [d.goals, d.shots, d.team];
    });
    var goalsShotsGroup = shotsDim.group();
    
    var minGoals = goalsDim.bottom(1)[0].goals;
    var maxGoals = goalsDim.top(1)[0].goals;
    
    dc.scatterPlot("#goals-balance")
        .width(500)
        .height(400)
        .x(d3.scale.linear().domain([minGoals, maxGoals]))
        .y(d3.scale.linear().domain([300, 700]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Goals Scored")
        .yAxisLabel("Shots Taken")
        .title(function(d) {
            return d.key[2] + " have scored " + d.key[0] + " goals to " + d.key[1] + " shots";
        })
        .dimension(shotsDim)
        .group(goalsShotsGroup)
        .margins({top: 10, right: 25, bottom: 75, left: 75});
        
}

//Wins to Possession Scatter Chart

function show_wins_to_possession_balance(ndx) {
    var winsDim = ndx.dimension(dc.pluck("wins"));
    var possessionDim = ndx.dimension(function(d) {
        return [d.wins, d.possession, d.team];
    });
    var winsPossessionGroup = possessionDim.group();
    
    var minWins = winsDim.bottom(1)[0].wins;
    var maxWins = winsDim.top(1)[0].wins;
    
    dc.scatterPlot("#wins-possession-balance")
        .width(500)
        .height(400)
        .x(d3.scale.linear().domain([minWins, maxWins]))
        .y(d3.scale.linear().domain([30, 80]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Wins")
        .yAxisLabel("Possession Average per Game")
        .title(function(d) {
            return d.key[2] + " have " + d.key[0] + " wins with average possession per game of " + d.key[1] + "%";
        })
        .dimension(possessionDim)
        .group(winsPossessionGroup)
        .margins({top: 10, right: 25, bottom: 75, left: 75});
        
}

//Team Tackles Bar Chart

function show_team_tackles_made(ndx) {
    var teamDim = ndx.dimension(dc.pluck("team"));
    var tackles_per_team = teamDim.group().reduceSum(dc.pluck("tackles"));

    dc.barChart("#tackles-chart")
        .width(1250)
        .height(300)
        .margins({top: 10, right: 50, bottom: 50, left: 50})
        .dimension(teamDim)
        .group(tackles_per_team)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .y(d3.scale.linear().domain([400, 700]))
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Teams")
        .yAxisLabel("Total Tackles")
        .yAxis().ticks(10);
}

//Cleansheets Bar Chart

function show_team_cleansheets(ndx) {
    var teamDim = ndx.dimension(dc.pluck("team"));
    var cleansheets_per_team = teamDim.group().reduceSum(dc.pluck("cleansheets"));

    dc.barChart("#cleansheets-chart")
        .width(1250)
        .height(350)
        .margins({top: 10, right: 50, bottom: 50, left: 50})
        .dimension(teamDim)
        .group(cleansheets_per_team)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Teams")
        .yAxisLabel("Total Cleansheets")
        .yAxis().ticks(20);
}

//Conceded Goals Bar Chart

function show_team_conceded(ndx) {
    var teamDim = ndx.dimension(dc.pluck("team"));
    var conceded_per_team = teamDim.group().reduceSum(dc.pluck("conceded"));

    dc.barChart("#conceded-chart")
        .width(1250)
        .height(350)
        .margins({top: 10, right: 50, bottom: 50, left: 50})
        .dimension(teamDim)
        .group(conceded_per_team)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Teams")
        .yAxisLabel("Total Conceded")
        .yAxis().ticks(20);
}