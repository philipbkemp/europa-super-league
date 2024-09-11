const countries = {
	"alb": "Albania",
	"aut": "Austria",
	"bel": "Belgium",
	"che": "Switzerland",
	"csk": "Czechoslovakia",
	"cyp": "Cyprus",
	"eir": "Ireland",
	"eng": "England",
	"esp": "Spain",
	"est": "Estonia",
	"dnk": "Denmark",
	"fin": "Finland",
	"fra": "France",
	"hun": "Hungary",
	"irl": "Republic of Ireland",
	"isl": "Iceland",
	"ita": "Italy",
	"ltu": "Lithuania",
	"lux": "Luxembourg",
	"lva": "Latvia",
	"mlt": "Malta",
	"nir": "Northern Ireland",
	"pol": "Poland",
	"prt": "Portugal",
	"pse": "Palestine",
	"rou": "Romania",
	"sco": "Scotland",
	"swe": "Sweden",
	"yug": "Yugoslavia"
};

clubPages = ["preston_north_end_fc","akademisk_boldklub","kjobenhavns_boldklub","linfield_fc","rangers_fc","budapesti_tc","royale_union_saint_gilloise","kfc_rhodienne_de_hoek","floriana_fc","colentina_ac_bucuresti","wiener_ac","knattspyrnufelagio_fram","us_hollerich_bonnevoie","mtk_budapest_fc","knattspyrnufelagio_vikingur","sliema_wanderers_fc","ac_sparta_prague","knattspyrnufelag_reykjavikur","sk_slavia_prague","boldklubben_frem","fa_red_boys_differdange","valur","sk_rapid_wien","js_estonia_tallinn"];

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

	nextSeasonParts = [partOne,partTwo,partThree+1,parseInt(partFour)+1];
	if ( previousSeason[2] === 10 ) {
		console.error("Marty, you're not thinking four dimensionally");
	}
	if ( nextSeasonParts[2] === 10 ) {
		nextSeasonParts[2] = 0;
		nextSeasonParts[1]++;
	}
	if ( nextSeasonParts[1] === 10 ) {
		nextSeasonParts[1] = 0;
		nextSeasonParts[0]++;
	}
	$("#goNext")
		.html( ( (nextSeasonParts[0]*100) + (nextSeasonParts[1]*10) + nextSeasonParts[2] ) + "-" + String(nextSeasonParts[3]).padStart(2,"0") )
		.attr("href","../../"+nextSeasonParts[0]+"/"+nextSeasonParts[1]+"/"+nextSeasonParts[2] + "-" + String(nextSeasonParts[3]).padStart(2,"0") + ".html")
		;

	data = JSON.parse(prompt("Give me data!"));

	data.forEach(team=>{
		team.played = team.win + team.draw + team.loss;
		if ( team.played !== 0 ) {
			team.points = (team.win*3) + team.draw;
			if ( typeof(team.deduct) !== "undefined" ) {
				team.points = team.points + team.deduct;
			}
			if ( typeof(team.bonusPoints) !== "undefined" ) {
				team.points = team.points + team.bonusPoints;
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
		} else if ( a.for !== b.for ) {
			return b.for - a.for;
		} else if ( a.win !== b.win ) {
			return b.win - a.win;
		}
		console.error("Teams tied on p/g + gd/g + w% + f/g + f + win",a,b);
	});

	tbody = $("#diva-pane table tbody");
	tbody.children()[0].remove();

	data.forEach(team=>{
		keys = Object.keys(team);
		tbody = $('tbody[data-teams*="|'+team.id+'|"]');
		if ( tbody.length === 0 ) {
			tbody = $("tbody#league_new");
		} else if ( tbody.children().length !== 0 ) {
			if ( ! tbody.children()[0].getAttribute("id") ) {
				tbody.children()[0].remove();
			}
		}
		position = tbody.find("tr").length +1;

		teamRow = $("<TR></TR>").attr("id",team.id);
		keys.splice(keys.indexOf("id"),1);

		rPos = $("<TD></TD>").html(position);
		teamRow.append(rPos);

		if ( countries[team.country] ) {
			rFlag = $("<TD></TD>").append(
				$("<IMG />").attr("src","../../flags/"+team.country.toUpperCase()+".png").attr("alt",countries[team.country]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[team.country])
			);
			teamRow.append(rFlag);
			keys.splice(keys.indexOf("country"),1);
		} else {
			teamRow.append("<TD>"+team.country+"</TD>");
			console.error("deal with country / " + team.country);
		}

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

		if ( typeof(team.bonusPoints) !== "undefined" ) {
			bonusPoints = "Awarded " + Math.abs(team.bonusPoints) + " bonus point" + (Math.abs(team.bonusPoints) !== 1 ? "s" : "");
			if ( typeof(team.bonusPointsReason) !== "undefined" ) {
				bonusPoints += "<br />" + team.bonusPointsReason;
				keys.splice(keys.indexOf("bonusPointsReason"),1);
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/bonus.png").attr("alt",bonusPoints).attr("data-bs-toggle","tooltip").attr("data-bs-title",bonusPoints)
			);
			keys.splice(keys.indexOf("bonusPoints"),1);
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
} else {
	saveClubs();
}

function nextSeason() {
	diva = [];
	divb = [];
	divc = [];
	divd = [];
	dive = [];
	divf = [];
	divg = [];
	divh = [];

	$.each( $("#diva-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				divb.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				diva.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divb-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				diva.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divb.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divc-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				divb.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divc.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divd-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				divc.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divd.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#dive-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				divd.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				dive.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divf-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				dive.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divf.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divg-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				divf.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divg.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divh-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted") ) {
				divg.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divh.push( $(this).attr("id") );
			}
		}
	});

	if ( diva.length !== 0 ) { console.log("A",diva.length,("|"+diva.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divb.length !== 0 ) { console.log("B",divb.length,("|"+divb.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divc.length !== 0 ) { console.log("C",divc.length,("|"+divc.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divd.length !== 0 ) { console.log("D",divd.length,("|"+divd.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( dive.length !== 0 ) { console.log("E",dive.length,("|"+dive.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divf.length !== 0 ) { console.log("F",divf.length,("|"+divf.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divg.length !== 0 ) { console.log("G",divg.length,("|"+divg.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( divh.length !== 0 ) { console.log("H",divh.length,("|"+divh.join("|")+"|").replace(/\|\|/g,"|")); }
}

function newTeams() {
	diva = $("#league_a").data("teams")?.split("|").filter(n=>n!=="") || []; addedA = false;
	divb = $("#league_b").data("teams")?.split("|").filter(n=>n!=="") || []; addedB = false;
	divc = $("#league_c").data("teams")?.split("|").filter(n=>n!=="") || []; addedC = false;
	divd = $("#league_d").data("teams")?.split("|").filter(n=>n!=="") || []; addedD = false;
	dive = $("#league_e").data("teams")?.split("|").filter(n=>n!=="") || []; addedE = false;
	divf = $("#league_f").data("teams")?.split("|").filter(n=>n!=="") || []; addedF = false;
	divg = $("#league_g").data("teams")?.split("|").filter(n=>n!=="") || []; addedG = false;
	divh = $("#league_h").data("teams")?.split("|").filter(n=>n!=="") || []; addedH = false;
	$.each( $("#league_new tr") , function() {
		if ( diva.length < 100 ) {
			diva.push( $(this).attr("id") );
			addedA = true;
		} else if ( divb.length < 100 ) {
			divb.push( $(this).attr("id") );
			addedB = true;
		} else if ( divc.length < 100 ) {
			divc.push( $(this).attr("id") );
			addedC = true;
		} else if ( divd.length < 100 ) {
			divd.push( $(this).attr("id") );
			addedD = true;
		} else if ( dive.length < 100 ) {
			dive.push( $(this).attr("id") );
			addedE = true;
		} else if ( divf.length < 100 ) {
			divf.push( $(this).attr("id") );
			addedF = true;
		} else if ( divg.length < 100 ) {
			divg.push( $(this).attr("id") );
			addedG = true;
		} else if ( divh.length < 100 ) {
			divh.push( $(this).attr("id") );
			addedH = true;
		} else {
			console.error("TOO Many Teams!");
		}
	});
	if ( addedA ) { console.log("A",diva.length,("|"+diva.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedB ) { console.log("B",divb.length,("|"+divb.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedC ) { console.log("C",divc.length,("|"+divc.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedD ) { console.log("D",divd.length,("|"+divd.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedE ) { console.log("E",dive.length,("|"+dive.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedF ) { console.log("F",divf.length,("|"+divf.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedG ) { console.log("G",divg.length,("|"+divg.join("|")+"|").replace(/\|\|/g,"|")); }
	if ( addedH ) { console.log("H",divh.length,("|"+divh.join("|")+"|").replace(/\|\|/g,"|")); }
}

function verify() {
	teams = $("#league_a").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_a tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division A");
			}
		}
	});
	teams = $("#league_b").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_b tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division B");
			}
		}
	});
	teams = $("#league_c").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_c tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division C");
			}
		}
	});
	teams = $("#league_d").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_d tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division D");
			}
		}
	});
	teams = $("#league_e").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_e tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division E");
			}
		}
	});
	teams = $("#league_f").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_f tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division F");
			}
		}
	});
	teams = $("#league_g").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_g tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division G");
			}
		}
	});
	teams = $("#league_h").attr("data-teams")?.split("|") || [];
	teams.forEach(t=>{
		if ( t !== "" ) {
			if ( $("#league_h tr[id='"+t+"'").length === 0 ) {
				console.error("Expected to find "+t+" in Division H");
			}
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

		teamName = $("<TH></TH>");
		if ( wc[0].length === 5 ) {
			teamNameLink = $("<A></A>").html( wc[0][4] ).attr("href","clubs/"+wc[0][2].toLowerCase()+"/"+c[0]+".html");
		} else if ( wc[0].length === 6 ) {
			teamNameLink = $("<A></A>").html( wc[0][4] ).attr("href","clubs/"+wc[0][5].toLowerCase()+"/"+c[0]+".html");
		}
		teamName.append(teamNameLink);
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
		container: '#divisionsTables, #winnersTables, #historyTables, .club-list, .country-list',
		html: true
	});
});


function relegate(fromDivision,number) {
	newDivision = "?";
	target = "league_" + fromDivision.toLowerCase();
	if ( fromDivision === "a" ) { newDivision = "B"; }
	if ( fromDivision === "b" ) { newDivision = "C"; }
	if ( fromDivision === "c" ) { newDivision = "D"; }
	if ( fromDivision === "d" ) { newDivision = "E"; }
	if ( fromDivision === "e" ) { newDivision = "F"; }
	if ( fromDivision === "f" ) { newDivision = "G"; }
	if ( fromDivision === "g" ) { newDivision = "H"; }
	toRelegate = number;
	var reversedRows = $("#"+target+" tr").toArray().reverse();
	reversedRows.forEach(function(row) {
		if ( toRelegate !== 0 && ! $(row).hasClass("removed") && ! $(row).hasClass("relegated") ) {
			$(row).addClass("relegated");
			icon = $("<IMG />").attr("src","../../icons/relegated.png").attr("alt","Relegated").attr("data-bs-toggle","tooltip").attr("data-bs-title","Relegated to Division "+newDivision);
			$($(row).find("th")[0]).append(icon);
			toRelegate = toRelegate - 1;
		}
	});
}

function promote(fromDivision,number) {
	promoted = 0;
	newDivision = "?";
	target = "league_" + fromDivision.toLowerCase();
	if ( fromDivision === "b" ) { newDivision = "A"; }
	if ( fromDivision === "c" ) { newDivision = "B"; }
	if ( fromDivision === "d" ) { newDivision = "C"; }
	if ( fromDivision === "e" ) { newDivision = "D"; }
	if ( fromDivision === "f" ) { newDivision = "E"; }
	if ( fromDivision === "g" ) { newDivision = "F"; }
	if ( fromDivision === "h" ) { newDivision = "G"; }
	$.each( $("#"+target+" tr") , function(k,v) {
		if ( promoted !== number && ! $(v).hasClass("removed") ) {
			$(v).addClass("promoted");
			promoted++;
			icon = $("<IMG />").attr("src","../../icons/promoted.png").attr("alt","Promoted").attr("data-bs-toggle","tooltip").attr("data-bs-title","Promoted to Division "+newDivision);
			$($(v).find("th")[0]).append(icon);
		}
	});
	$('[data-bs-toggle="tooltip"]').tooltip({
		container: '#divisionsTables, #winnersTables',
		html: true
	});
}

function checkRemoved() {
	lastYear = prompt("Who was removed last year?");
	lastYear = lastYear.split("|");
	$.each(lastYear,function(k,v){
		if ( $("tr[id='"+v+"']").length !== 0 ) {
			console.error("REMOVED / BUT PRESENT",v);
		}
	});

	removedIds = [];
	$.each( $(".removed"), function(k,v){
		removedIds.push( $(v).attr("id") );
	});
	console.log("REMOVED:",removedIds.join("|"));
}

function listClubsForCountry() {
	data = JSON.parse(prompt("feed me data"));
	teams = data.teams;
	teams.sort();
	thisSeason = data.previous;

	btns = [];
	thisSeasonBtns = [];

	$.each(teams,function(k,v){
		if ( thisSeason.indexOf(v) === -1 ) {
			btns.push('<div class="col"><a class="btn btn-outline-dark w-100 mb-2 disabled" disabled href="'+v+'.html">'+v+'</a></div>');
		} else {
			thisSeasonBtns.push('<div class="col"><a class="btn btn-outline-dark w-100 mb-2 disabled" disabled href="'+v+'.html">'+v+'</a></div>');
		}
	});

	console.warn("This season");
	console.log(thisSeasonBtns.join("\n"));
	console.warn("Previous teams");
	console.log(btns.join("\n"));
}

function saveClubs(refresh=false) {
	console.clear();
	$.each(clubPages,function(k,v){
		saveRow = $("tr[id='"+v+"']");
		if ( saveRow.length !== 0 ) {
			$sr = $(saveRow[0]);
			if ( refresh ) {
				teamName = $sr.find("A")[0].innerHTML;
				$sr.find("A")[0].remove();
				$sr.find("TH")[0].prepend(teamName);
				$sr = $(saveRow[0]);
			}
			original = $sr.html();
			if ( original.indexOf("<a ") === -1) {
				year = $("h1").text().replace("Europa Super League","").replace("Home","").trim();
				year = $("<A></A>").attr("href","../../"+year[0]+""+year[1]+"/"+year[2]+"/"+year[3]+"-"+year.split("-").pop()+".html").html(year)
				$sr.prepend( $("<TD></TD>").html( year ) );
				$($sr.find("td")[1]).prepend( $($("#"+v).parent()).attr("id").split("_")[1].toUpperCase() );
				country = $sr.find("img[src*='/flags/']");
				countryFlag = country.attr("src").split("/").pop().split(".")[0].toLowerCase();
				$(country.parent()).remove();
				classes = $sr.attr("class") || "";
				if ( $sr.html().indexOf("<td>A1</td>") === -1 ) {
					classes = classes.replace("champion","");
				}
				if ( original.indexOf("new.png") === -1 ) {
					console.warn(v);
				} else {
					console.error(v);
				}
				console.log("<tr class='"+classes+"'>"+$sr.html()+"</tr>");
				$sr.html(original);
				clubName = $($sr.find("th")[0]);
				clubName.html( clubName.html().replace(clubName.text(),"<a href='../../clubs/"+countryFlag+"/"+$sr.attr("id")+".html'>"+clubName.text()+"</a>") );
			}
		}
	});
}