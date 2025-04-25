function compilePlayers(){
    return document.getElementById("playerlist").value.split('\n');
}

function winners(){
    const matchups = compilePlayers();
    var split, newMatchups = "";
    for(let i=0;i<matchups.length;i++){
        split = matchups[i].split(" ");
        if(split[0] == "(W)"){newMatchups += split[1] + "\n";}
        else if(split[0] == "(L)"){newMatchups += split[3] + "\n";}
    }
    document.getElementById("compiled").value = newMatchups;
}

function losers(){
    const matchups = compilePlayers();
    var split, newMatchups = "";
    for(let i=0;i<matchups.length;i++){
        split = matchups[i].split(" ");
        if(split[0] == "(L)"){newMatchups += split[1] + "\n";}
        else if(split[0] == "(W)"){newMatchups += split[3] + "\n";}
    }
    document.getElementById("compiled").value = newMatchups;
}

function unplayed(){
    const matchups = compilePlayers();
    var split, newMatchups = "";
    for(let i=0;i<matchups.length;i++){
        split = matchups[i].split(" ");
        if(split.length == 3){newMatchups += split[0] + " vs " + split[2] + "\n";}
    }
    document.getElementById("compiled").value = newMatchups;
}