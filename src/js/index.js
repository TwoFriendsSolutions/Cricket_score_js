class Team {
    constructor(name, runs, wickets, overs, balls, rr, status, battingFirst, players, extras) {
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
        this.overs = overs;
        this.balls = balls;
        this.rr = rr;
        this.status = status;
        this.battingFirst = battingFirst;
        this.players = players;
        this.extras = extras;
    }
}

class Players {
    constructor(id, name, batting, bowling) { // allrounder
        this.id = id;
        this.name = name;
        this.batting = batting;
        this.bowling = bowling;
    }
}
class Batting {
    constructor(runs, noOfBalls, wicketType, wicketTaken, noOfFours, noOfSix, strikeRate, strike) {
        this.runs = runs;
        this.noOfBalls = noOfBalls;
        this.wicketType = wicketType;
        this.wicketTaken = wicketTaken;
        this.noOfFours = noOfFours;
        this.noOfSix = noOfSix;
        this.strikeRate = strikeRate;
        this.strike = strike;
    }
}
class Bowling {
    constructor(runs, balls, overs, wickets, economy) {
        this.runs = runs;
        this.balls = balls;
        this.overs = overs;
        this.wickets = wickets;
        this.economy = economy;
        // Team extras
    };
}

var team1 = new Team("team1", 0, 0, 0.0, 0, 0, false, false, [], 0);
var team2 = new Team("team2", 0, 0, 0.0, 0, 0, false, false, [], 0);

window.match = {
    team: [team1, team2],
    venue: "Perundurai Stadium",
    totalNoOfOvers: 0.0, // 0.0
    tossWonBy: "team1",
    electedTo: "bat",
    target: 0,
    crr: 0.0,
    rr: 0.0,
    batsmenInField: [0, 0], //  [0, 0]
    bowler: 0, // 0
    noOfPlayers: 11

};

//var arr = [['Elango', 'Mohan', 'Rakesh', 'Anbu', 'Dhana', 'Aravind', 'Arun', 'Ravi', 'Ram', 'Guna', 'Kamal'], ['Kohli', 'Buvi', 'Yuvi', 'Pandya', 'Rahul', 'Rohit', 'Dhawan', 'DK', 'Dhoni', 'Kedar', 'Kuldeep']]
//
//
//for (var m = 0; m < 2; m++) {
//    for (var j = 0; j < 11; j++) {
//        var z = new Players(j, arr[m][j], new Batting(0, 0, ' ', ' ', 0, 0, 0.0, false), new Bowling(0, 0, 0.0, 0, 0.0));
//        match.team[m].players.push(z);
//    }
//}

var settingTossWonBy = () => {
    if (((match.tossWonBy === match.team[0].name) && (match.electedTo === "bat")) || ((match.tossWonBy === match.team[1].name) && (match.electedTo === "bowl"))) {
        match.team[0].status = true;
        match.team[0].battingFirst = true;
        match.team[1].status = false;
        match.team[1].battingFirst = false;

        //        console.log("entered if part");
    } else {
        match.team[1].status = true;
        match.team[1].battingFirst = true;
        match.team[0].status = false;
        match.team[0].battingFirst = false;

        //        console.log("entered else part");

    }
}
var init = () => {
    for (var b = 0; b < 2; b++) {
        document.querySelector(`.header__team-${b}-name`).textContent = match.team[b].name;
        document.querySelector(`.header__team-${b}-run`).textContent = match.team[b].runs;
        document.querySelector(`.header__team-${b}-wickets`).textContent = match.team[b].wickets;
        document.querySelector(`.header__team-${b}-overs`).textContent = match.team[b].overs;
        document.querySelector(`.header__team-${b}-rr`).textContent = match.team[b].rr;
    }
}
settingTossWonBy();
init();

// TEAM NAME SUBMIT EVENT
document.querySelector('.getting__details-submit').addEventListener('click', () => {
    var teamOneName = document.querySelector('.team__one').value;
    var teamTwoName = document.querySelector('.team__two').value;
    match.team[0].name = teamOneName;
    match.team[1].name = teamTwoName;
    match.totalNoOfOvers = parseInt(document.querySelector('.match__overs').value);
    match.venue = document.querySelector('.match__venue').value;
    match.noOfPlayers = parseInt(document.querySelector('.players__count').value);

    document.querySelector('.wonby-1').textContent = match.team[0].name;
    document.querySelector('.wonby-2').textContent = match.team[1].name;
    document.querySelector('.header__details-venue').textContent = match.venue;
    document.querySelector('.won-1').value = match.team[0].name;
    document.querySelector('.won-2').value = match.team[1].name;
    document.querySelector('.getting__details').style.display = 'none';
    document.querySelector('.toss').style.display = 'block';
});
// TOSS WIN EVENT
document.querySelector('.toss__submit').addEventListener('click', () => {
    match.tossWonBy = document.querySelector('input[name="wonby"]:checked').value;
    match.electedTo = document.querySelector('input[name="elect"]:checked').value;

    document.querySelector('.toss').style.display = 'none';
    document.querySelector('.team-name').textContent = match.tossWonBy;
    document.querySelector('.bat-bowl').textContent = match.electedTo;
    document.querySelector('.overs-number').textContent = match.totalNoOfOvers;
    document.querySelector('.target').textContent = match.target;
    document.querySelector('.players__name').style.display = 'block';
    document.querySelector('.left__heading').textContent = match.team[0].name;
    document.querySelector('.right__heading').textContent = match.team[1].name;

    init();
    hideAllDetails();
    settingTossWonBy(); //Temporarily Removed

    // setting batting First status 
    //    if (((match.tossWonBy === match.team[0].name) && (match.electedTo === "bat")) || ((match.tossWonBy === match.team[1].name) && (match.electedTo === "bowl"))) {
    //        match.team[0].status = true;
    //        match.team[0].battingFirst = true;
    //        match.team[1].status = false;
    //        match.team[1].battingFirst = false;
    //
    //        console.log("entered if part");
    //    } else {
    //        match.team[1].status = true;
    //        match.team[1].battingFirst = true;
    //        match.team[0].status = false;
    //        match.team[0].battingFirst = false;
    //
    //        console.log("entered else part");
    //
    //    }
    statusChecking();
    addPlayersInput();
});
//------------------------
var i, count = 0,
    strikerID, index;
var statusChecking = () => {
    if (match.team[0].status) {
        i = 0;
    } else {
        i = 1;
    }
}
var dropdownBatting = () => {
    if (match.team[i].wickets > 0) {
        var wicketID;
        if (match.team[i].players[match.batsmenInField[0]].batting.wicketType != ' ') {
            console.log('match.batsmenInField[0] is out');
            wicketID = match.batsmenInField[0];
        } else {
            console.log('match.batsmenInField[1] is out');
            wicketID = match.batsmenInField[1];
        }

        index = match.batsmenInField.indexOf(wicketID);

        var nonStriker;
        if (index === 0) {
            nonStriker = match.batsmenInField[1];
        } else {
            nonStriker = match.batsmenInField[0];
        }
        for (var j = 0; j < match.noOfPlayers; j++) {
            // BATSMEN WHO ARE NOT OUT
            if ((match.team[i].players[j].batting.wicketType === ' ') && (nonStriker != match.team[i].players[j].id)) {
                console.log((match.batsmenInField[j] != match.team[i].players[j].id));
                var optionHtml = `<option value="${match.team[i].players[j].id}">${match.team[i].players[j].name}</option>`;
                document.querySelector(".batsmen__striker").insertAdjacentHTML('beforeend', optionHtml);
            }
        }
    } else {
        // batting
        for (var j = 0; j < match.noOfPlayers; j++) {
            // BATSMEN WHO ARE NOT OUT
            if ((match.team[i].players[j].batting.wicketType === ' ')) {
                console.log((match.batsmenInField[j] != match.team[i].players[j].id));
                var optionHtml = `<option value="${match.team[i].players[j].id}">${match.team[i].players[j].name}</option>`;
                document.querySelector(".batsmen__striker").insertAdjacentHTML('beforeend', optionHtml);
            }
        }
    }
    // ONLY MATCH STARTS
    if (match.team[i].wickets === 0) {
        var HTML = `<select class="batsmen__nonStriker">
<option selected>select player 2</option>
</select>`;
        document.querySelector(".Players__on__crease-batsmen").insertAdjacentHTML('afterend', HTML);
        for (var j = 0; j < match.noOfPlayers; j++) {
            var optionHtml2 = `<option value="${match.team[i].players[j].id}" >${match.team[i].players[j].name}</option>`;
            document.querySelector(".batsmen__nonStriker").insertAdjacentHTML('beforeend', optionHtml2);
        }
    } else {
        document.querySelector(".batsmen__nonStriker").style.display = 'none';
    }
}
var dropdownBowling = () => {
    // bowling
    for (var j = 0; j < match.noOfPlayers; j++) {
        var temp = bowlingTeam();
        var optionHtml = `<option value="${match.team[temp].players[j].id}">${match.team[temp].players[j].name}</option>`;
        document.querySelector(".bowler").insertAdjacentHTML('beforeend', optionHtml);
    }
}
// PLAYERS NAME SUBMIT EVENT
document.querySelector('.players__name-submit').addEventListener('click', () => {
    for (var m = 0; m < 2; m++) {
        for (var j = 0; j < match.noOfPlayers; j++) {
            var name = document.querySelector(`.players__name-${m}-${j}`).value;
            var z = new Players(j, name, new Batting(0, 0, ' ', ' ', 0, 0, 0.0, false), new Bowling(0, 0, 0.0, 0, 0.0));
            match.team[m].players.push(z);
        }
    }
    document.querySelector('.players__name').style.display = 'none';
    // USE THIS
    document.querySelector('.Players__on__crease').style.display = 'flex';
    // TO ADD DROPDOWN
    dropdownBatting();
    dropdownBowling();
});
var county = 0;
// DROPDOWN 
document.querySelector('.Players__on__crease-submit').addEventListener('click', () => {
    if (match.team[i].wickets === 0) {
        var playerId1 = parseInt(document.querySelector('.batsmen__striker').value);
        var playerId2 = parseInt(document.querySelector('.batsmen__nonStriker').value);
        var bowlerId = parseInt(document.querySelector('.bowler').value);
        var radio = document.querySelector('input[name="strike"]:checked').value;

        match.batsmenInField[0] = playerId1;
        match.batsmenInField[1] = playerId2;
        match.bowler = bowlerId;

        if (radio === 'striker') {
            match.team[i].players[playerId1].batting.strike = true;
        } else {
            match.team[i].players[playerId2].batting.strike = true;
        }
        document.querySelector('.Players__on__crease').style.display = 'none';
        document.querySelector('.full__screen').style.display = 'none';
    } else {
        var ID = parseInt(document.querySelector('.batsmen__striker').value);
        var radio = document.querySelector('input[name="strike"]:checked').value;
        newPlayer(ID, radio);
        document.querySelector('.Players__on__crease').style.display = 'none';
        document.querySelector('.full__screen').style.display = 'none';
    }
    //    // remove dropdown datas
    var drop = document.querySelector('.batsmen__striker');
    var len = drop.length;
    for (var a = 0; a < len; a++) {
        drop.remove(0);
    }
});

//var init = () => {
//    for (var b = 0; b < 2; b++) {
//        document.querySelector(`.header__team-${b}-name`).textContent = match.team[b].name;
//        document.querySelector(`.header__team-${b}-run`).textContent = match.team[b].runs;
//        document.querySelector(`.header__team-${b}-wickets`).textContent = match.team[b].wickets;
//        document.querySelector(`.header__team-${b}-overs`).textContent = match.team[b].overs;
//        document.querySelector(`.header__team-${b}-rr`).textContent = match.team[b].rr;
//    }
//}

// BUTTON RUNS
var listDatas = document.querySelectorAll('.btn-runs');
listDatas.forEach((listdata) => {
    // BALL COUNT
    if ((listdata.classList.contains("btn-run")) || (listdata.classList.contains("btn-bye")) || (listdata.classList.contains("btn-lb"))) {
        listdata.addEventListener('click', () => {
            statusChecking();
            settingStrikerID(); // to set striker id
            runs(match.team[i], parseInt(listdata.value));
            balls(match.team[i]);
            overs(match.team[i]);
            rr(match.team[i]);
            changeDisplay(match.team[i]);
            if (count === 0) {
                changeStatus(match.team[i]);
            }
            if (match.team[i].battingFirst === false) {
                updateMatchDetailsDisplay(match.team[i]);
                decisionDisplay(match.team[i]);
            }
            // BATSMEN - RUNS COUNT
            if (listdata.classList.contains("btn-run")) {
                batsmenRuns(parseInt(listdata.value));
                // BOWLER -RUNS
                bowlerRuns(parseInt(listdata.value));
                // No Of Fours and Sixes
                if (parseInt(listdata.value) === 4) {
                    match.team[i].players[strikerID].batting.noOfFours = match.team[i].players[strikerID].batting.noOfFours + 1;
                }
                if (parseInt(listdata.value) === 6) {
                    match.team[i].players[strikerID].batting.noOfSix = match.team[i].players[strikerID].batting.noOfSix + 1;
                }
            }
            if ((listdata.classList.contains("btn-bye")) || (listdata.classList.contains("btn-lb"))) {
                // EXTRAS TEAM
                extrasCalc(parseInt(listdata.value));
            }
            // BATSMEN - BALLS COUNT
            batsmenBalls();
            // BOWLER - BALLS COUNT
            bowlerBalls();
            // CHANGE STRIKE - ODD RUNS
            if ((parseInt(listdata.value) % 2) || parseInt(listdata.value) === 1) {
                changeStrike();
            }
            // CHANGE STRIKE - OVER CHANGE
            overChange();
        });
    }
    // BALL no COUNT
    if ((listdata.classList.contains("btn-wide")) || (listdata.classList.contains("btn-no"))) {
        listdata.addEventListener('click', () => {

            statusChecking();
            settingStrikerID(); // to set striker id
            runs(match.team[i], parseInt(listdata.value));
            rr(match.team[i]);
            changeDisplay(match.team[i]);
            if (match.team[i].battingFirst === false) {
                updateMatchDetailsDisplay(match.team[i]);
                decisionDisplay(match.team[i]);
            }
            // BATSMEN - NOBALL
            if (listdata.classList.contains("btn-no")) {
                batsmenRuns(parseInt(listdata.value) - 1);
                strikeRateCalc();
            }
            // BOWLER -RUNS
            bowlerRuns(parseInt(listdata.value));
            // ECONOMY
            economyCalc();
            // CHANGE STRIKE
            if (((parseInt(listdata.value) - 1) % 2) || (parseInt(listdata.value) - 1) === 1) {
                changeStrike();
            }
            // EXTRAS TEAM
            if (listdata.classList.contains("btn-wide")) {
                extrasCalc(parseInt(listdata.value));
            }

        });
    }
});
// BUTTON WICKETS
var listWickets = document.querySelectorAll('.btn-wicket');
listWickets.forEach((listWicket) => {
    listWicket.addEventListener('click', () => {
        statusChecking();
        settingStrikerID(); // to set striker id
        wickets(match.team[i]);
        balls(match.team[i]);
        overs(match.team[i]);
        changeDisplay(match.team[i]);
        if (count === 0) {
            changeStatus(match.team[i]);
        }
        if (match.team[i].battingFirst === false) {
            updateMatchDetailsDisplay(match.team[i]);
            decisionDisplay(match.team[i]);
        }
        // BATSMEN - BALLS COUNT
        batsmenBalls();
        // BOWLER - BALLS COUNT
        bowlerBalls();
        // CHANGE STRIKE - OVER CHANGE
        overChange();
        // BATTING - WICKET TYPE
        setWicketType(listWicket.value);
        // BOWLING - WICKETS COUNT
        bowlerWickets();
        // NEW PLAYER AT CREASE
        document.querySelector('.full__screen').style.display = 'block';
        document.querySelector('.Players__on__crease').style.display = 'flex';
        document.querySelector('.Players__on__crease-bowler').style.display = 'none';

        // TO ADD DROPDOWN
        dropdownBatting();

    });
})
// RUNOUT
document.querySelector('.btn__runout').addEventListener('click', () => {
    document.querySelector('.full__screen').style.display = 'block';
    document.querySelector('.runout').style.display = 'flex';
});
// RUNOUT CLOSE
document.querySelector('.runout__close').addEventListener('click', () => {
    document.querySelector('.full__screen').style.display = 'none';
});
// RUNOUT SUBMIT
document.querySelector('.runout__submit').addEventListener('click', () => {
    var run = parseInt(document.querySelector('.runout__input').value);
    var batsmen = 'Kohli';
    var wicketTaker = 'Kuldeep'; // dropdown
    statusChecking();
    settingStrikerID();
    runs(match.team[i], run);
    wickets(match.team[i]);
    balls(match.team[i]);
    overs(match.team[i]);
    rr(match.team[i]);
    changeDisplay(match.team[i]);
    if (count === 0) {
        changeStatus(match.team[i]);
    }
    if (match.team[i].battingFirst === false) {
        updateMatchDetailsDisplay(match.team[i]);
        decisionDisplay(match.team[i]);
    }
    document.querySelector('.full__screen').style.display = 'none';
    // BATSMEN - BALLS COUNT
    batsmenBalls();
    // RUNOUT - WICKET TAKER, BATSMEN, WIKET TYPE, no.OF RUNS
    runOut(run, batsmen, wicketTaker);

});

var runs = (obj, value) => {
    obj.runs = obj.runs + value;
}

var balls = (obj) => {
    obj.balls = obj.balls + 1;
}

var wickets = (obj) => {
    obj.wickets = obj.wickets + 1;
}

var overs = (obj) => {
    var intValue = parseInt(obj.balls / 6);
    var floatValue = obj.balls % 6;
    var over = parseFloat(intValue + '.' + floatValue);
    obj.overs = over;
}

var rr = (obj) => {
    if (obj.overs > 0) {
        obj.rr = (obj.runs / obj.overs).toFixed(2);
    }
}

var changeStatus = (obj) => {
    if (obj.balls === (match.totalNoOfOvers * 6) || (obj.wickets === match.noOfPlayers - 1)) {
        target(obj);
        showAllDetails();
        match.team[0].status = !(match.team[0].status);
        match.team[1].status = !(match.team[1].status);
        count = count + 1;
        statusChecking();
        document.querySelector('.team-name-chasing').textContent = match.team[i].name;
        updateMatchDetailsDisplay(match.team[i]);
    }
}

var target = (obj) => {
    match.target = obj.runs + 1;
    document.querySelector('.target').textContent = match.target;
}

var updateMatchDetailsDisplay = (obj) => {
    var remainingRuns = match.target - obj.runs;
    var remainingBalls = match.totalNoOfOvers * 6 - obj.balls;
    var rr = (remainingRuns / (match.totalNoOfOvers - obj.overs)).toFixed(2);
    document.querySelector('.remaining-runs').textContent = remainingRuns;
    document.querySelector('.remaining-balls').textContent = remainingBalls;
    document.querySelector('.crr').textContent = obj.rr;
    document.querySelector('.rr').textContent = rr;
}

var changeDisplay = (obj) => {
    document.querySelector(`.header__team-${i}-name`).textContent = match.team[i].name;
    document.querySelector(`.header__team-${i}-run`).textContent = match.team[i].runs;
    document.querySelector(`.header__team-${i}-wickets`).textContent = match.team[i].wickets;
    document.querySelector(`.header__team-${i}-overs`).textContent = match.team[i].overs;
    document.querySelector(`.header__team-${i}-rr`).textContent = match.team[i].rr;
}

var hideDetails = () => {

    document.querySelector('.header__details-remaining__balls').style.display = 'none';
    document.querySelector('.header__details-crr').style.display = 'none';
    document.querySelector('.header__details-rr').style.display = 'none';
}

var hideAllDetails = () => {
    document.querySelector('.header__details-target').style.display = 'none';
    document.querySelector('.header__details-win').style.display = 'none';
    hideDetails();
}

var showAllDetails = () => {
    document.querySelector('.header__details-target').style.display = 'block';
    document.querySelector('.header__details-win').style.display = 'block';
    document.querySelector('.header__details-remaining__balls').style.display = 'block';
    document.querySelector('.header__details-crr').style.display = 'block';
    document.querySelector('.header__details-rr').style.display = 'block';
}

var decisionDisplay = (obj) => {
    if (obj.balls === (match.totalNoOfOvers * 6) || (obj.wickets === match.noOfPlayers - 1) || (obj.runs >= match.target)) {
        console.log(obj.balls, obj.wickets, obj.runs, match.target);
        document.querySelector('.header__buttons').style.display = 'none';
        if (obj.runs === match.target - 1) {
            document.querySelector('.header__details-win').textContent = `Match is Drawn`;
        } else if (obj.runs < match.target) {

            document.querySelector('.header__details-win').textContent = `${obj.name} lost the match`;
        } else {
            document.querySelector('.header__details-win').textContent = `${obj.name} won the match`;
        }

        hideDetails();
    }
}
// DYNAMICALLY CREATNG PLAYERS LIST
var addPlayersInput = () => {
    var tempHTML = ` `;
    for (var m = 0; m <= 1; m++) {
        for (var j = 0; j < match.noOfPlayers; j++) {
            var inputHTML = `<input type="text" class="players__name-${m}-${j}" placeholder="Player ${j + 1}">`;
            tempHTML = tempHTML + inputHTML;
        }
        if (m === 0) {
            document.querySelector('.left').insertAdjacentHTML('beforeend', tempHTML);
            tempHTML = ` `;
        } else {
            document.querySelector('.right').insertAdjacentHTML('beforeend', tempHTML);
        }
    }
}
statusChecking();
//console.log(match.team[i].players[match.batsmenInField[0]]);
//console.log(match.team[i].players[match.batsmenInField[1]]);
//match.team[i].players[match.batsmenInField[1]].batting.strike = true;


var settingStrikerID = () => {
    if (match.team[i].players[match.batsmenInField[0]].batting.strike) {
        strikerID = match.team[i].players[match.batsmenInField[0]].id;
    } else {
        strikerID = match.team[i].players[match.batsmenInField[1]].id;
    }
}

var batsmenRuns = (run) => {
    match.team[i].players[strikerID].batting.runs = match.team[i].players[strikerID].batting.runs + run;
    //    console.log(match.team[i].players[strikerID].batting.runs);
}
var batsmenBalls = () => {
    match.team[i].players[strikerID].batting.noOfBalls = match.team[i].players[strikerID].batting.noOfBalls + 1;
    strikeRateCalc();

    //    console.log(`ball${match.team[i].players[strikerID].batting.noOfBalls}`);
}
var bowlerRuns = (run) => {
    match.team[bowlingTeam()].players[match.bowler].bowling.runs = match.team[bowlingTeam()].players[match.bowler].bowling.runs + run;
}
var bowlerBalls = () => {
    match.team[bowlingTeam()].players[match.bowler].bowling.balls = match.team[bowlingTeam()].players[match.bowler].bowling.balls + 1;
    // BOWLER OVER CALCULATION
    bowlerOverCalc();
    economyCalc();
}
var bowlerWickets = () => {
    match.team[bowlingTeam()].players[match.bowler].bowling.wickets = match.team[bowlingTeam()].players[match.bowler].bowling.wickets + 1;
}
var changeStrike = () => {
    if (match.batsmenInField[0] === strikerID) {
        match.team[i].players[match.batsmenInField[0]].batting.strike = false;
        match.team[i].players[match.batsmenInField[1]].batting.strike = true;
    } else {
        match.team[i].players[match.batsmenInField[1]].batting.strike = false;
        match.team[i].players[match.batsmenInField[0]].batting.strike = true;
    }
}

var overChange = () => {
    if ((match.team[i].balls % 6 === 0)) {
        changeStrike();
    }
}

var strikeRateCalc = () => {
    if (match.team[i].players[strikerID].batting.noOfBalls) {
        match.team[i].players[strikerID].batting.strikeRate = parseFloat(((match.team[i].players[strikerID].batting.runs / match.team[i].players[strikerID].batting.noOfBalls) * 100).toFixed(2));
    }
}

var bowlingTeam = () => {
    if (i === 0) {
        return 1;
    } else {
        return 0;
    }
}
var bowlerOverCalc = () => {
    var ballsCount = match.team[bowlingTeam()].players[match.bowler].bowling.balls;
    var intValue = parseInt(ballsCount / 6);
    var floatValue = ballsCount % 6;
    var over = parseFloat(intValue + '.' + floatValue);
    match.team[bowlingTeam()].players[match.bowler].bowling.overs = over;
}

var economyCalc = () => {
    if (match.team[bowlingTeam()].players[match.bowler].bowling.balls) {
        var eco = match.team[bowlingTeam()].players[match.bowler].bowling.runs / match.team[bowlingTeam()].players[match.bowler].bowling.overs;
        match.team[bowlingTeam()].players[match.bowler].bowling.economy = eco.toFixed(2);
    }
}
var extrasCalc = (extra) => {
    match.team[i].extras = match.team[i].extras + extra;
}
var setWicketType = (wicketType) => {
    match.team[i].players[strikerID].batting.wicketType = wicketType;

    // WICKET BOWLER NAME
    match.team[i].players[strikerID].batting.wicketTaken = match.team[bowlingTeam()].players[match.bowler].name;

    // SETTING STRIKE - FALSE
    match.team[i].players[strikerID].batting.strike = false;
}
var runOut = (noOfRuns, batsmen, wicketTaker) => {
    // NO OF RUNS
    match.team[i].players[strikerID].batting.runs = match.team[i].players[strikerID].batting.runs + noOfRuns;
    // WICKET TAKER
    if (match.team[i].players[match.batsmenInField[0]].name === batsmen) {
        match.team[i].players[match.batsmenInField[0]].batting.wicketTaken = wicketTaker;
        // WICKET TYPE
        match.team[i].players[match.batsmenInField[0]].batting.wicketType = 'Runout';
        // NEW PLAYER AT CREASE
        newPlayer();
    } else {
        match.team[i].players[match.batsmenInField[1]].batting.wicketTaken = wicketTaker;
        match.team[i].players[match.batsmenInField[1]].batting.wicketType = 'Runout';
    }
    console.log(match.team[i].players[match.batsmenInField[0]]);
    console.log(match.team[i].players[match.batsmenInField[0]]);
}
var newPlayer = (ID, radio) => {
    match.batsmenInField[index] = ID; // dropdown selected value
    // RADIO
    if (radio === 'striker') {
        match.team[i].players[ID].batting.strike = true;
    } else {
        if (index === 0) {
            match.team[i].players[match.batsmenInField[1]].batting.strike = true;
        } else {
            match.team[i].players[match.batsmenInField[0]].batting.strike = true;
        }
    }
}

/*
var dropdownBatting = () => {
//    document.querySelector('.Players__on__crease').style.display = 'flex';
    // batting
    for (var j = 0; j < match.noOfPlayers; j++) {
        var optionHtml = `<option value="${match.team[i].players[j].id}">${match.team[i].players[j].name}</option>`;
        document.querySelector(".batsmen__striker").insertAdjacentHTML('beforeend', optionHtml);
    }
    // ONLY MATCH STARTS
    if(match.team[i].wickets === 0){
        var HTML = `<select class="batsmen__nonStriker">
                    <option selected>select player 2</option>
                    </select>`;
        document.querySelector(".Players__on__crease-batsmen").insertAdjacentHTML('afterend', HTML);
        for (var j = 0; j < match.noOfPlayers; j++) {
            var optionHtml2 = `<option value="${match.team[i].players[j].id}" >${match.team[i].players[j].name}</option>`;
            document.querySelector(".batsmen__nonStriker").insertAdjacentHTML('beforeend', optionHtml2);
        }
    }
}
var dropdownBowling = () {
//    document.querySelector('.Players__on__crease').style.display = 'flex';
    // bowling
    for (var j = 0; j < match.noOfPlayers; j++) {
        var temp = bowlingTeam();
        //        if (i === 0) {
        //            temp = 1;
        //        } else {
        //            temp = 0;
        //        }
        var optionHtml = `<option value="${match.team[temp].players[j].id}">${match.team[temp].players[j].name}</option>`;
        document.querySelector(".bowler").insertAdjacentHTML('beforeend', optionHtml);
    }
}
*/
