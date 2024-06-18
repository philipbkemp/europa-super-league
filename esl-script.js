const countries = {
	"bel": "Belgium",
	"che": "Switzerland",
	"dnk":"Denmark",
	"eir": "Ireland",
	"eng":"England",
	"hun": "Hungary",
	"ita": "Italy",
	"sco": "Scotland",
	"nld": "Netherlands"
};

if ( $("h1 .placeholder").length !== 0 ) {

	page = window.location.href.replace("file:///C:/kemphi/Personal/esl/","").split("/");
	pageEnd = page[2].split(".")[0].split("-");
	partOne = parseInt(page[0]);
	partTwo = parseInt(page[1]);
	partThree = parseInt(pageEnd[0]);
	partFour = parseInt(pageEnd[1]);

	thisSeason = ( (partOne*100) + (partTwo*10) + partThree ) + "-" + String(partFour).padStart(2,"0");
	if ( partFour === 0 ) {
		partFour = "00";
		thisSeason += "0";
	}
	$("h1").html("<span>Europa Super League</span> "+thisSeason+'<a href="../../index.html" class="btn btn-outline-dark float-end mt-2">Home</a>');

	previousSeason = [partOne,partTwo,partThree-1,parseInt(partFour)-1];
	if ( previousSeason[2] === -1 ) {
		$("#goPrev")
			.html( ( (previousSeason[0]*100) + (previousSeason[1]*10) + previousSeason[2] ) + "-" + String(previousSeason[3]).padStart(2,"0") )
			.attr("href","../"+(previousSeason[1]-1)+"/9-" + String(previousSeason[3]).padStart(2,"0") + ".html")
			;
	} else if ( previousSeason[3] === -1 ) {
		$("#goPrev")
			.html( ( (previousSeason[0]*100) + (previousSeason[1]*10) + previousSeason[2] ) + "-" + (previousSeason[1]+""+9) )
			.attr("href",previousSeason[2] + "-" + previousSeason[1] + "" + 9 + ".html")
			;
	} else {
		$("#goPrev")
			.html( ( (previousSeason[0]*100) + (previousSeason[1]*10) + previousSeason[2] ) + "-" + String(previousSeason[3]).padStart(2,"0") )
			.attr("href",previousSeason[2] + "-" + String(previousSeason[3]).padStart(2,"0") + ".html")
			;
	}
	if ( thisSeason === "1888-89" ) {
		$("#goPrev").addClass("disabled");
	}

	nextSeason = [partOne,partTwo,partThree+1,parseInt(partFour)+1];
	if ( previousSeason[2] === 10 ) {
		console.error("Marty, you're not thinking four dimensionally");
	}
	if ( nextSeason[2] === 10 ) {
		nextSeason[2] = 0;
		nextSeason[1]++;
	}
	if ( nextSeason[1] === 10 ) {
		nextSeason[1] = 0;
		nextSeason[0]++;
	}
	$("#goNext")
		.html( ( (nextSeason[0]*100) + (nextSeason[1]*10) + nextSeason[2] ) + "-" + String(nextSeason[3]).padStart(2,"0") )
		.attr("href","../../"+nextSeason[0]+"/"+nextSeason[1]+"/"+nextSeason[2] + "-" + String(nextSeason[3]).padStart(2,"0") + ".html")
		;

	data = JSON.parse(prompt("Give me data!"));

	data.forEach(team=>{
		team.played = team.win + team.draw + team.loss;
		if ( team.played !== 0 ) {
			team.points = (team.win*3) + team.draw;
			if ( typeof(team.deduct) !== "undefined" ) {
				team.points = team.points + team.deduct;
			}
			team.goalDifference = team.for - team.against;
			team.forPerGame = (team.for / team.played).toFixed(2);
			team.againstPerGame = (team.against / team.played).toFixed(2);
			team.winPercentage = (team.win / team.played).toFixed(2);
			team.goalDiffPerGame = (team.goalDifference / team.played).toFixed(2);
			team.pointsPerGame = (team.points / team.played).toFixed(2);
		} else {
			team.played =
			team.win = team.draw = team.loss =
			team.for = team.against =
			team.points = team.goalDifference =
			team.forPerGame = team.againstPerGame = team.winPercentage =
			team.goalDiffPerGame = team.pointsPerGame =
			"-";
		}
	});

	data.sort(function(a,b){
		if ( a.pointsPerGame !== b.pointsPerGame ) {
			return b.pointsPerGame - a.pointsPerGame;
		} else if ( a.goalDiffPerGame !== b.goalDiffPerGame ) {
			return b.goalDiffPerGame - a.goalDiffPerGame;
		} else if ( a.winPercentage !== b.winPercentage ) {
			return b.winPercentage - a.winPercentage;
		} else if ( a.forPerGame !== b.forPerGame ) {
			return b.forPerGame - a.forPerGame;
		}
		console.error("Teams tied on p/g + gd/g + w% + f/g",a,b);
	});

	tbody = $("#diva-pane table tbody");
	tbody.children()[0].remove();

	data.forEach(team=>{
		keys = Object.keys(team);
		tbody = $('tbody[data-teams*="'+team.id+'"]');
		if ( tbody.length === 0 ) {
			tbody = $("tbody#league_new");
		}
		position = tbody.find("tr").length +1;

		teamRow = $("<TR></TR>").attr("id",team.id);
		keys.splice(keys.indexOf("id"),1);

		rPos = $("<TD></TD>").html(position);
		teamRow.append(rPos);

		rFlag = $("<TD></TD>").append(
			$("<IMG />").attr("src","../../flags/"+team.country.toUpperCase()+".png").attr("alt",countries[team.country]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[team.country])
		);
		teamRow.append(rFlag);
		keys.splice(keys.indexOf("country"),1);

		rName = $("<TH></TH>").attr("scope","row").html(team.name);
		keys.splice(keys.indexOf("name"),1);

		if ( typeof(team.isNew) !== "undefined" ) {
			rName.append(
				$("<IMG />").attr("src","../../icons/new.png").attr("alt","New club").attr("data-bs-toggle","tooltip").attr("data-bs-title","New club")
			);
			keys.splice(keys.indexOf("isNew"),1);
		}

		if ( typeof(team.isReturning) !== "undefined" ) {
			rName.append(
				$("<IMG />").attr("src","../../icons/returning.png").attr("alt","Returning club").attr("data-bs-toggle","tooltip").attr("data-bs-title","Returning club")
			);
			keys.splice(keys.indexOf("isReturning"),1);
		}

		if ( typeof(team.isChampion) !== "undefined" ) {
			teamRow.addClass("champion");
			championNote = "Domestic Champion";
			if ( typeof(team.championNote) !== "undefined" ) {
				championNote = team.championNote;
				keys.splice(keys.indexOf("championNote"),1);
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/trophy.png").attr("alt",championNote).attr("data-bs-toggle","tooltip").attr("data-bs-title",championNote)
			);
			keys.splice(keys.indexOf("isChampion"),1);
		}

		if ( typeof(team.deduct) !== "undefined" ) {
			deduct = "Deducted " + Math.abs(team.deduct) + " point" + (Math.abs(team.deduct) !== 1 ? "s" : "");
			if ( typeof(team.deductReason) !== "undefined" ) {
				deduct += "<br />" + team.deductReason;
				keys.splice(keys.indexOf("deductReason"),1);
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/deduction.png").attr("alt",deduct).attr("data-bs-toggle","tooltip").attr("data-bs-title",deduct)
			);
			keys.splice(keys.indexOf("deduct"),1);
		}

		if ( typeof(team.isRemoved) !== "undefined" ) {
			teamRow.addClass("removed");
			removed = "Relegated from top flight";
			if ( typeof(team.removedNote) !== "undefined" ) {
				removed = team.removedNote;
				keys.splice(keys.indexOf("removedNote"),1);
			}
			if ( typeof(team.removedReason) !== "undefined" ) {
				removed = team.removedReason;
				keys.splice(keys.indexOf("removedReason"),1);
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/removed.png").attr("alt",removed).attr("data-bs-toggle","tooltip").attr("data-bs-title",removed)
			);
			keys.splice(keys.indexOf("isRemoved"),1);
		}

		teamRow.append(rName);

		["played","win","draw","loss","for","against","points","goalDifference","forPerGame","againstPerGame","winPercentage","goalDiffPerGame","pointsPerGame"].forEach(col=>{
			teamRow.append( $("<TD></TD>").html(team[col]) );
			keys.splice(keys.indexOf(col),1);
		});

		tbody.append(teamRow);

		if ( keys.length !== 0 ) {
			console.error("deal with " + keys);
		}

		position++;
	});

	if ( $("#league_new tr").length === 0 ) {
		$("#league_new").parent().parent().remove();
	}

	if ( data.length !== $("tr[id]").length ) {
		console.error("Something's wrong...");
	}
}

function nextSeason() {
	diva = []; $.each( $("#diva-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				diva.push( $(this).attr("id") );
			}
		}
	}); if ( diva.length !== 0 ) { console.log("A",diva.join("|")); }

	divb = []; $.each( $("#divb-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divb.push( $(this).attr("id") );
			}
		}
	}); if ( divb.length !== 0 ) { console.log("B",divb.join("|")); }

	divc = []; $.each( $("#divc-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divc.push( $(this).attr("id") );
			}
		}
	}); if ( divc.length !== 0 ) { console.log("C",divc.join("|")); }

	divd = []; $.each( $("#divd-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divd.push( $(this).attr("id") );
			}
		}
	}); if ( divd.length !== 0 ) { console.log("D",divd.join("|")); }

	dive = []; $.each( $("#dive-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				dive.push( $(this).attr("id") );
			}
		}
	}); if ( dive.length !== 0 ) { console.log("E",dive.join("|")); }

	divf = []; $.each( $("#divf-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divf.push( $(this).attr("id") );
			}
		}
	}); if ( divf.length !== 0 ) { console.log("F",divf.join("|")); }

	divg = []; $.each( $("#divg-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divg.push( $(this).attr("id") );
			}
		}
	}); if ( divg.length !== 0 ) { console.log("G",divg.join("|")); }

	divh = []; $.each( $("#divh-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( ! $(this).hasClass("removed") ) {
				divh.push( $(this).attr("id") );
			}
		}
	}); if ( divh.length !== 0 ) { console.log("H",divh.join("|")); }
}

function newTeams() {
	diva = $("#league_a").data("teams")?.split("|") || []; addedA = false;
	divb = $("#league_b").data("teams")?.split("|") || []; addedB = false;
	divc = $("#league_c").data("teams")?.split("|") || []; addedC = false;
	divd = $("#league_d").data("teams")?.split("|") || []; addedD = false;
	dive = $("#league_e").data("teams")?.split("|") || []; addedE = false;
	divf = $("#league_f").data("teams")?.split("|") || []; addedF = false;
	divg = $("#league_g").data("teams")?.split("|") || []; addedG = false;
	divh = $("#league_h").data("teams")?.split("|") || []; addedH = false;
	$.each( $("#league_new tr") , function() {
		if ( diva.length < 100 ) {
			diva.push( $(this).attr("id") );
			addedA = true;
		}
	});
	if ( addedA ) { console.log("A",diva.join("|")); }
	if ( addedB ) { console.log("B",diva.join("|")); }
	if ( addedC ) { console.log("C",diva.join("|")); }
	if ( addedD ) { console.log("D",diva.join("|")); }
	if ( addedE ) { console.log("E",diva.join("|")); }
	if ( addedF ) { console.log("F",diva.join("|")); }
	if ( addedG ) { console.log("G",diva.join("|")); }
	if ( addedH ) { console.log("H",diva.join("|")); }
}

function verify() {
	teams = $("#league_a").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_a tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division A");
		}
	});
	teams = $("#league_b").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_b tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division B");
		}
	});
	teams = $("#league_c").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_c tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division C");
		}
	});
	teams = $("#league_d").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_d tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division D");
		}
	});
	teams = $("#league_e").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_e tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division E");
		}
	});
	teams = $("#league_f").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_f tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division F");
		}
	});
	teams = $("#league_g").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_g tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division G");
		}
	});
	teams = $("#league_h").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( $("#league_h tr[id='"+t+"'").length === 0 ) {
			console.error("Expected to find "+t+" in Division H");
		}
	});
}

function getWinner() {
	u = window.location.href.split("/");
	uri = u[u.length-3] + "/" + u[u.length-2] + "/" + u[u.length-1];
	year = $("h1").clone().children().remove().end().text().trim();
	winner = $( $("#league_a tr")[0] );
	country = $(winner.find("img")[0]).attr("src").split("/").pop().split(".")[0];
	id = winner.attr("id");
	club = $(winner.find("th")[0]).text();

	json = [
		uri,year,country,id,club
	];
	console.log(
		JSON.stringify(json)
	);
}

if ( typeof(winners) !== "undefined" ) {
	winningClubs = [];
	clubOrder = [];
	winningCountries = [];
	countryOrder = [];
	winners.forEach(w=>{
		if ( typeof(winningCountries[ w[2] ]) === "undefined" ) {
			winningCountries[ w[2] ] = [ w ];
			countryOrder.push([w[2],0]);
		}
		if ( typeof(winningClubs[ w[3] ]) === "undefined" ) {
			winningClubs[ w[3] ] = [ w ];
			clubOrder.push([w[3],0]);
		}

		clubOrder[ clubOrder.findIndex(c=>{return c[0]===w[3];}) ][1]++;
		countryOrder[ countryOrder.findIndex(c=>{return c[0]===w[2];}) ][1]++;

		winningCountries[ w[2] ].push( [ w[0],w[1] ] );
		winningClubs[ w[3] ].push( [ w[0],w[1] ] );
	});

	clubOrder.sort(function(a,b){
		return b[1]-a[1];
	});
	countryOrder.sort(function(a,b){
		return b[1]-a[1];
	});

	club = $("#club-winners tbody");
	clubOrder.forEach(c=>{
		teamRow = $("<TR></TR>").attr("id",c[0]);

		wc = winningClubs[c[0]];

		pos = $("<TD></TD>").html( club.children().length );
		teamRow.append(pos);

		flag = $("<TD></TD>").append(
			$("<IMG />").attr("src","flags/"+wc[0][2]+".png").attr("alt",countries[wc[0][2].toLowerCase()]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[wc[0][2].toLowerCase()])
		);
		teamRow.append(flag);

		teamName = $("<TH></TH>").html( wc[0][4] );
		teamRow.append(teamName);

		titles = $("<TD></TD>").html( c[1] ).addClass("text-center");
		teamRow.append(titles);

		years = $("<TD></TD>");
		for ( i=1 ; i!==wc.length ; i++ ) {
			year = $("<A></A>").attr("href",wc[i][0]).html(wc[i][1]).addClass("me-2");
			years.append(year);
		}
		teamRow.append(years);

		club.append(teamRow);
	});
	club.children()[0].remove();

	country = $("#country-winners tbody");
	countryOrder.forEach(c=>{
		teamRow = $("<TR></TR>").attr("id",c[0]);

		wc = winningCountries[c[0]];

		pos = $("<TD></TD>").html( country.children().length );
		teamRow.append(pos);
		
		flag = $("<TD></TD>").append(
			$("<IMG />").attr("src","flags/"+wc[0][2]+".png").attr("alt",countries[wc[0][2].toLowerCase()]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[wc[0][2].toLowerCase()])
		);
		teamRow.append(flag);

		teamName = $("<TH></TH>").html( countries[wc[0][2].toLowerCase()] );
		teamRow.append(teamName);

		titles = $("<TD></TD>").html( c[1] ).addClass("text-center");
		teamRow.append(titles);

		years = $("<TD></TD>");
		for ( i=1 ; i!==wc.length ; i++ ) {
			year = $("<A></A>").attr("href",wc[i][0]).html(wc[i][1]).addClass("me-2");
			years.append(year);
		}
		teamRow.append(years);

		country.append(teamRow);
	});
	country.children()[0].remove();
}

$(document).ready(function(){
	$('[data-bs-toggle="tooltip"]').tooltip({
		container: '#divisionsTables, #winnersTables',
		html: true
	});
});
