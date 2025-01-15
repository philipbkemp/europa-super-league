history.scrollRestoration = 'manual';

const countries = {
	"alb": "Albania",
	"and": "Andorra",
	"arm": "Armenia",
	"aut": "Austria",
	"aze": "Azerbaijan",
	"bel": "Belgium",
	"bgr": "Bulgaria",
	"bih": "Bosnia and Herzegovina",
	"blr": "Belarus",
	"che": "Switzerland",
	"csk": "Czechoslovakia",
	"cyp": "Cyprus",
	"cze": "Czechia",
	"ede": "East Germany",
	"eir": "Ireland",
	"eng": "England",
	"esp": "Spain",
	"est": "Estonia",
	"deu": "Germany",
	"dnk": "Denmark",
	"fin": "Finland",
	"fra": "France",
	"fro": "Faroe Islands",
	"geo": "Georgia",
	"gib": "Gibraltar",
	"grc": "Greece",
	"hrv": "Croatia",
	"hun": "Hungary",
	"irl": "Republic of Ireland",
	"isl": "Iceland",
	"isr": "Israel",
	"ita": "Italy",
	"kaz": "Kazakhstan",
	"kos": "Kosovo",
	"ltu": "Lithuania",
	"lux": "Luxembourg",
	"lva": "Latvia",
	"mda": "Moldova",
	"mkd": "North Macedonia",
	"mlt": "Malta",
	"mne": "Montenegro",
	"nir": "Northern Ireland",
	"nld": "Netherlands",
	"nor": "Norway",
	"pol": "Poland",
	"prt": "Portugal",
	"pse": "Palestine",
	"rou": "Romania",
	"rus": "Russia",
	"sam": "Serbia and Montegro",
	"sco": "Scotland",
	"smr": "San Marino",
	"sov": "Soviet Union",
	"srb": "Serbia",
	"svk": "Slovakia",
	"svn": "Slovenia",
	"swe": "Sweden",
	"tur": "Turkey",
	"ukr": "Ukraine",
	"wal": "Wales",
	"wde": "West Germany",
	"yug": "Yugoslavia"
};

clubPages = ["preston_north_end_fc","linfield_fc","rangers_fc","budapesti_tc","floriana_fc","colentina_ac_bucuresti","knattspyrnufelagio_fram","mtk_budapest_fc","knattspyrnufelagio_vikingur","sliema_wanderers_fc","knattspyrnufelag_reykjavikur","valur","js_estonia_tallinn","fc_porto","ofk_beograd","hsk_gradanski_zagreb","malmo_ff","balti_laevastik_tallinn","heart_of_midlothian_fc","iprottabandalag_akraness","celtic_fc","sl_benfica","berliner_fc_dynamo","fcsb","valletta_fc","fc_norma_tallinn","fc_rapid_bucuresti","fc_dynamo_kyiv","fc_flora","fc_tvmk","gnk_dinamo_zagreb","rhyl_fc","fci_levadia_tallinn","fk_partizan","hibernians_fc","olympiacos_fc","red_star_belgrade","the_new_saints_fc"

	/*alb*/
	,"fk_partizani_tirana","kf_tirana","fk_vllaznia_shkoder"
	/*and*/
	,"ue_sant_julia","fc_santa_coloma"
	/*arm*/
	,"shirak_sc"
	/*aut*/
	,"sk_rapid_wien","wiener_ac","fk_austria_wien"
	/*aze*/
	,"neftci_pfk","qarabag_fk"
	/*bel*/
	,"kfc_rhodienne_de_hoek","royale_union_saint_gilloise","standard_liege"
	/*bgr*/
	,"pfc_levski_sofia","pfc_ludogorets_razgrad"
	/*bih*/
	,"hsk_zrinjski_mostar"
	/*blr*/
	,"fc_dinamo_minsk"
	/*che*/
	,"bsc_young_boys"
	/*cyp*/
	,"apoel_fc","ac_omonia","apollon_limassol_fc"
	/*cze*/
	,"sk_slavia_prague","ac_sparta_prague","fc_viktoria_plzen"
	/*deu*/
	,"fc_bayern_munich","bayer_04_leverkusen"
	/*dnk*/
	,"brondby_if","akademisk_boldklub","kjobenhavns_boldklub","boldklubben_frem","fc_copenhagen"
	/*fra*/
	,"paris_saint_germain_fc"
	/*fro*/
	,"havnar_boltfelag","klaksvikar_itrottarfelag","tvoroyrar_boltfelag","vikingur_gota"
	/*gib*/
	,"europa_fc","lincoln_red_imps_fc","st_josephs_fc"
	/*lux*/
	,"f91_dudelange","fa_red_boys_differdange","us_hollerich_bonnevoie","fc_differdange_03"
	/*lva*/
	,"fk_alfa","fk_ask","fk_avn","fk_liepajas_metalurgs","olimpia_liepaja","skonto_fc","fk_rfs"
	/*mda*/
	,"fc_sheriff_tiraspol"
	/*nld*/
	,"afc_ajax","feyenoord","psv_eindhoven"
	/*tur*/
	,"besiktas_jk","galatasaray_sk"

];

multiCountryClubs = ["ofk_beograd","ac_sparta_prague","sk_slavia_prague","hsk_gradanski_zagreb","linfield_fc","apoel_fc","ac_omonia","fc_dynamo_kyiv","gnk_dinamo_zagreb","fk_partizan","fc_bayern_munich","red_star_belgrade","neftci_pfk","hsk_zrinjski_mostar","fc_viktoria_plzen","bayer_04_leverkusen","fc_dinamo_minsk"];

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
	//$("h1").html("<span>Europa Super League</span> "+thisSeason+'<a href="../../index.html" class="btn btn-outline-dark float-end mt-2">Home</a>');
	$("h1 .placeholder").hide();

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

	//data = JSON.parse(prompt("Give me data!"));
	data = THEDATA;

	data.forEach(team=>{
		team.played = team.win + team.draw + team.loss;
		if ( team.played !== 0 ) {
			if ( team.penWins ) { team.draw += team.penWins; team.played += team.penWins; }
			if ( team.penLoss ) { team.draw += team.penLoss; team.played += team.penLoss; }
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
			team.pointsPerGame = (0).toFixed(2);
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
		keys = keys.filter(k=>{return k !== "id"; });

		rPos = $("<TD></TD>").html(position);
		teamRow.append(rPos);

		if ( countries[team.country] ) {
			rFlag = $("<TD></TD>").append(
				$("<IMG />").attr("src","../../flags/"+team.country.toUpperCase()+".png").attr("alt",countries[team.country]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[team.country])
			);
			teamRow.append(rFlag);
			keys = keys.filter(k=>{return k !== "country"; });
		} else {
			teamRow.append("<TD>"+team.country+"</TD>");
			console.error("deal with country / " + team.country);
		}

		rName = $("<TH></TH>").attr("scope","row").html(team.name);
		keys = keys.filter(k=>{return k !== "name"; });

		if ( typeof(team.isNew) !== "undefined" ) {
			rName.append(
				$("<IMG />").attr("src","../../icons/new.png").attr("alt","New club").attr("data-bs-toggle","tooltip").attr("data-bs-title","New club")
			);
			keys = keys.filter(k=>{return k !== "isNew"; });
		}

		if ( typeof(team.isReturning) !== "undefined" ) {
			rName.append(
				$("<IMG />").attr("src","../../icons/returning.png").attr("alt","Returning club").attr("data-bs-toggle","tooltip").attr("data-bs-title","Returning club")
			);
			keys = keys.filter(k=>{return k !== "isReturning"; });
		}

		if ( typeof(team.note) !== "undefined" ) {
			rName.append(
				$("<IMG />").attr("src","../../icons/note.png").attr("alt","Note: "+team.note).attr("data-bs-toggle","tooltip").attr("data-bs-title","Note: "+team.note)
			);
			keys = keys.filter(k=>{return k !== "note"; });
		}

		if ( typeof(team.isChampion) !== "undefined" ) {
			teamRow.addClass("champion");
			championNote = "Domestic Champion";
			if ( typeof(team.championNote) !== "undefined" ) {
				championNote = team.championNote;
				keys = keys.filter(k=>{return k !== "championNote"; });
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/trophy.png").attr("alt",championNote).attr("data-bs-toggle","tooltip").attr("data-bs-title",championNote)
			);
			keys = keys.filter(k=>{return k !== "isChampion"; });
		}

		if ( typeof(team.deduct) !== "undefined" ) {
			deduct = "Deducted " + Math.abs(team.deduct) + " point" + (Math.abs(team.deduct) !== 1 ? "s" : "");
			if ( typeof(team.deductReason) !== "undefined" ) {
				deduct += "<br />" + team.deductReason;
				keys = keys.filter(k=>{return k !== "deductReason"; });
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/deduction.png").attr("alt",deduct).attr("data-bs-toggle","tooltip").attr("data-bs-title",deduct)
			);
			keys = keys.filter(k=>{return k !== "deduct"; });
		}

		if ( typeof(team.bonusPoints) !== "undefined" ) {
			bonusPoints = "Awarded " + Math.abs(team.bonusPoints) + " bonus point" + (Math.abs(team.bonusPoints) !== 1 ? "s" : "");
			if ( typeof(team.bonusPointsReason) !== "undefined" ) {
				bonusPoints += "<br />" + team.bonusPointsReason;
				keys = keys.filter(k=>{return k !== "bonusPointsReason"; });
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/bonus.png").attr("alt",bonusPoints).attr("data-bs-toggle","tooltip").attr("data-bs-title",bonusPoints)
			);
			keys = keys.filter(k=>{return k !== "bonusPoints"; });
		}

		if ( typeof(team.isRemoved) !== "undefined" ) {
			teamRow.addClass("removed");
			removed = "Relegated from top flight";
			if ( typeof(team.removedNote) !== "undefined" ) {
				removed = team.removedNote;
				keys = keys.filter(k=>{return k !== "removedNote"; });
			}
			if ( typeof(team.removedReason) !== "undefined" ) {
				removed = team.removedReason;
				keys = keys.filter(k=>{return k !== "removedReason"; });
			}
			rName.append(
				$("<IMG />").attr("src","../../icons/removed.png").attr("alt",removed).attr("data-bs-toggle","tooltip").attr("data-bs-title",removed)
			);
			keys = keys.filter(k=>{return k !== "isRemoved"; });
		}

		teamRow.append(rName);

		["played","win","draw","loss","for","against","points","goalDifference","forPerGame","againstPerGame","winPercentage","goalDiffPerGame","pointsPerGame"].forEach(col=>{
			teamRow.append( $("<TD></TD>").html(team[col]) );
			keys = keys.filter(k=>{return k !== col; });
		});

		tbody.append(teamRow);

		keys = keys.filter(k=>{return k !== "penWin"; });
		keys = keys.filter(k=>{return k !== "penLoss"; });

		if ( typeof(team.isCurrentSeason) !== "undefined" ) {
			teamRow.addClass("current-season");
			keys = keys.filter(k=>{return k !== "isCurrentSeason"; });
		}

		if ( keys.length !== 0 ) {
			console.error("deal with " + keys);
		}

		position++;
	});

	if ( $("#league_new tr").length === 0 ) {
		$("#league_new").parent().parent().remove();
	}

	if ( data.length !== $("tr[id]").length ) {
		console.error("Something's wrong...",data.length,$("tr[id]").length);
	}

	calcPromotionRelegationLimits();

	saveClubs(false,false);

} else {
	saveClubs();
}

function nextSeason(countOnly=false) {
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
			if ( $(this).hasClass("relegated") ) {
				divc.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				diva.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divb.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divc-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				divd.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted-twice") ) {
				diva.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				divb.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divc.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divd-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				dive.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted-twice") ) {
				divb.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				divc.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divd.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#dive-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				divf.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted-twice") ) {
				divc.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				divd.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				dive.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divf-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				divg.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted-twice") ) {
				divd.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				dive.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divf.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divg-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("relegated") ) {
				divh.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted-twice") ) {
				dive.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				divf.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divg.push( $(this).attr("id") );
			}
		}
	});
	$.each( $("#divh-pane tbody tr") , function() {
		if ( $(this).attr("id") ) {
			if ( $(this).hasClass("promoted-twice") ) {
				divf.push( $(this).attr("id") );
			} else if ( $(this).hasClass("promoted") ) {
				divg.push( $(this).attr("id") );
			} else if ( ! $(this).hasClass("removed") ) {
				divh.push( $(this).attr("id") );
			}
		}
	});

	if ( ! countOnly ) {
		if ( diva.length !== 0 ) { console.log("A",diva.length,("|"+diva.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divb.length !== 0 ) { console.log("B",divb.length,("|"+divb.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divc.length !== 0 ) { console.log("C",divc.length,("|"+divc.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divd.length !== 0 ) { console.log("D",divd.length,("|"+divd.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( dive.length !== 0 ) { console.log("E",dive.length,("|"+dive.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divf.length !== 0 ) { console.log("F",divf.length,("|"+divf.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divg.length !== 0 ) { console.log("G",divg.length,("|"+divg.join("|")+"|").replace(/\|\|/g,"|")); }
		if ( divh.length !== 0 ) { console.log("H",divh.length,("|"+divh.join("|")+"|").replace(/\|\|/g,"|")); }
	} else {
		if ( diva.length !== 0 ) { console.log("A",diva.length); }
		if ( divb.length !== 0 ) { console.log("B",divb.length); }
		if ( divc.length !== 0 ) { console.log("C",divc.length); }
		if ( divd.length !== 0 ) { console.log("D",divd.length); }
		if ( dive.length !== 0 ) { console.log("E",dive.length); }
		if ( divf.length !== 0 ) { console.log("F",divf.length); }
		if ( divg.length !== 0 ) { console.log("G",divg.length); }
		if ( divh.length !== 0 ) { console.log("H",divh.length); }
	}
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
		winningClubs[ w[3] ].push( [ w[0],w[1],w[2] ] );
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
		pos.addClass("d-none").addClass("d-sm-table-cell");
		teamRow.append(pos);

		flag = $("<TD></TD>").append(
			$("<IMG />").attr("src","flags/"+wc[0][2]+".png").attr("alt",countries[wc[0][2].toLowerCase()]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[wc[0][2].toLowerCase()])
		);;

		if ( multiCountryClubs.indexOf(wc[0][3]) !== -1 ) {
			flagsWon = [];
			flagsWon.push(wc[0][2]);
			for ( i=1 ; i!==wc.length ; i++ ) {
				if ( flagsWon.indexOf(wc[i][2]) === -1 ) {
					 flag.append(
						$("<IMG />").addClass("ms-1").attr("src","flags/"+wc[i][2]+".png").attr("alt",countries[wc[i][2].toLowerCase()]).attr("data-bs-toggle","tooltip").attr("data-bs-title",countries[wc[i][2].toLowerCase()])
					);
					flagsWon.push(wc[i][2]);
				}
			}
		}

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
		years.addClass("d-none").addClass("d-sm-table-cell");
		teamRow.append(years);

		club.append(teamRow);
	});
	club.children()[0].remove();

	country = $("#country-winners tbody");
	countryOrder.forEach(c=>{
		teamRow = $("<TR></TR>").attr("id",c[0]);

		wc = winningCountries[c[0]];

		pos = $("<TD></TD>").html( country.children().length );
		pos.addClass("d-none").addClass("d-sm-table-cell");
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
		years.addClass("d-none").addClass("d-sm-table-cell");
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
		if ( promoted !== number && ! $(v).hasClass("removed") && ! $(v).hasClass("promoted") ) {
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

function promoteTwo(fromDivision,number) {
	promoted = 0;
	newDivision = "?";
	target = "league_" + fromDivision.toLowerCase();
	if ( fromDivision === "c" ) { newDivision = "A"; }
	if ( fromDivision === "d" ) { newDivision = "B"; }
	if ( fromDivision === "e" ) { newDivision = "C"; }
	if ( fromDivision === "f" ) { newDivision = "D"; }
	if ( fromDivision === "g" ) { newDivision = "E"; }
	if ( fromDivision === "h" ) { newDivision = "F"; }
	$.each( $("#"+target+" tr") , function(k,v) {
		if ( promoted !== number && ! $(v).hasClass("removed") && ! $(v).hasClass("promoted") ) {
			$(v).addClass("promoted").addClass("promoted-twice");
			promoted++;
			icon = $("<IMG />").attr("src","../../icons/promoted-twice.png").attr("alt","Promoted").attr("data-bs-toggle","tooltip").attr("data-bs-title","Promoted to Division "+newDivision);
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

function saveClubs(refresh=false,dump=true) {
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
				vc = v;
				if ( multiCountryClubs.indexOf(vc) !== -1 ) {
					vc = countryFlag.toUpperCase() + " --- " + vc;
				}
				if ( original.indexOf("new.png") === -1 ) {
					if ( dump ) { console.warn(vc); }
				} else {
					if ( dump ) { console.error(vc); }
				}
				if ( dump ) { console.log("<tr class='"+classes+"'>"+$sr.html().replace('<a href="../../19/9/9-2000.html">1999-2000</a>','<a href="../../19/9/9-00.html">1999-00</a>')+"</tr>"); }
				$sr.html(original);
				clubName = $($sr.find("th")[0]);
				if ( v === "neftci_pfk" ) {
					countryFlag = "aze";
				} else if ( v === "hsk_zrinjski_mostar" ) {
					countryFlag = "bih";
				} else if ( v === "fc_dinamo_minsk" ) {
					countryFlag = "blr";
				} else if ( v === "apoel_fc" || v === "ac_omonia" ) {
					countryFlag = "cyp";
				} else if ( v === "ac_sparta_prague" || v === "sk_slavia_prague" || v === "fc_viktoria_plzen") {
					countryFlag = "cze";
				} else if ( v === "fc_bayern_munich" || v === "bayer_04_leverkusen" ) {
					countryFlag = "deu";
				} else if ( v === "hsk_gradanski_zagreb" || v === "gnk_dinamo_zagreb" ) {
					countryFlag = "hrv";
				} else if ( v === "ofk_beograd" || v === "fk_partizan" || v === "red_star_belgrade" ) {
					countryFlag = "srb";
				} else if ( v === "fc_dynamo_kyiv" ) {
					countryFlag = "ukr";
				}
				clubName.html( clubName.html().replace(clubName.text(),"<a href='../../clubs/"+countryFlag+"/"+$sr.attr("id")+".html'>"+clubName.text()+"</a>") );
			}
		}
	});
}

function formatFixer() {
	formatted = [];

	theSeason = document.querySelector('h1').innerText.replace("\nHome","").replace("Europa Super League","").trim();
	prevLink = document.querySelector("a#goPrev");
	prevLinkHref = prevLink.getAttribute("href").split("/");
	nextLink = document.querySelector("a#goNext");
	nextLinkHref = nextLink.getAttribute("href").split("/");
	thisPage = window.location.href.substring(window.location.href.indexOf("esl")).split("/");
	goPrev = prevLinkHref.pop(); // season
	pd = prevLinkHref.pop();
	goPrev = (pd?pd:thisPage[2]) + "/" + goPrev; // decade
	pc = prevLinkHref.pop();
	goPrev = (pc===".."||!pc?thisPage[1]:pc) + "/" + goPrev; // century
	goPrev = "../../" + goPrev; 
	goNext = nextLinkHref.pop(); // season
	nd = nextLinkHref.pop();
	goNext = (nd?nd:thisPage[2]) + "/" + goNext; // decade
	nc = nextLinkHref.pop();
	goNext =  (nc===".."||!nc?thisPage[1]:nc) + "/" + goNext; // century
	goNext = "../../" + goNext;
	tabs = [
		document.querySelector("#diva"),
		document.querySelector("#divb"),
		document.querySelector("#divc"),
		document.querySelector("#divd"),
		document.querySelector("#dive"),
		document.querySelector("#divf"),
		document.querySelector("#divg"),
		document.querySelector("#divh"),
	];
	tabLabels = ["a","b","c","d","e","f","g","h"];


	formatted.push('<!doctype html>');
	formatted.push('<html>');
		formatted.push('\t<head>');
			formatted.push('\t\t<meta charset="utf-8" />');
			formatted.push('\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />');
			formatted.push('\t\t<title>Europa Super League > '+theSeason+'</title>');
			formatted.push('\t\t<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />');
			formatted.push('\t\t<link rel="stylesheet" href="../../styles.css" />');
		formatted.push('\t</head>');
		formatted.push('\t<body>');
			formatted.push('\t\t<div class="container pt-4">');
				formatted.push('\t\t\t');
				formatted.push('\t\t\t<h1>');
					formatted.push('\t\t\t\t<span class="d-block">Europa Super League</span>');
					formatted.push('\t\t\t\t'+theSeason);
					formatted.push('\t\t\t\t<a href="../../index.html" class="btn btn-outline-dark float-end">Home</a>');
				formatted.push('\t\t\t</h1>');
				formatted.push('\t\t\t');
				formatted.push('\t\t\t<hr />');
				formatted.push('\t\t\t');
				
				formatted.push('\t\t\t<div class="row pt-3 pb-3">');
					formatted.push('\t\t\t\t<div class="col-6 col-sm-2 col-lg-1">');
						formatted.push('\t\t\t\t\t<a href="'+goPrev+'" '+(prevLink.classList.contains("disabled") ? "disabled " : "") +'class="btn btn-outline-dark w-100 px-md-0'+(prevLink.classList.contains("disabled") ? " disabled" : "")+'">'+prevLink.innerText+'</a>');
					formatted.push('\t\t\t\t</div>');
					formatted.push('\t\t\t\t');
					formatted.push('\t\t\t\t<div class="col-12 col-sm-8 offset-lg-1 text-center order-3 order-sm-2" id="divisions" role="tablist">');
					formatted.push('\t\t\t\t\t<div class="row row-cols-4 row-cols-sm-8">');
					for ( i=0 ; i!==8 ; i++ ) {
						formatted.push('\t\t\t\t\t\t<div class="col mt-2 px-sm-1 mt-sm-0">');
							if ( tabs[i].classList.contains("disabled") ) {
								formatted.push('\t\t\t\t\t\t\t<button class="w-100 btn btn-outline-dark px-1 disabled" id="div'+tabLabels[i]+'" type="button">');
							} else {
								formatted.push('\t\t\t\t\t\t\t<button class="w-100 btn btn-outline-dark px-1'+(i===0?' active':'')+'" id="div'+tabLabels[i]+'" data-bs-toggle="tab" data-bs-target="#div'+tabLabels[i]+'-pane" type="button" role="tab" aria-controls="div'+tabLabels[i]+'" aria-selected="'+(i===0?'true':'false')+'">');
							}
								formatted.push('\t\t\t\t\t\t\t\t<span class="d-none d-lg-inline-block me-1">Division</span>'+tabLabels[i].toUpperCase());
							formatted.push('\t\t\t\t\t\t\t</button>');
						formatted.push('\t\t\t\t\t\t</div>');
					}
					formatted.push('\t\t\t\t\t</div>');
					formatted.push('\t\t\t\t</div>');
					formatted.push('\t\t\t\t');
					formatted.push('\t\t\t\t<div class="col-6 col-sm-2 col-lg-1 order-2 order-sm-3 offset-lg-1">');
						formatted.push('\t\t\t\t\t<a href="'+goNext+'" '+(nextLink.classList.contains("disabled") ? "disabled " : "") +'class="btn btn-outline-dark w-100 px-md-0'+(nextLink.classList.contains("disabled") ? " disabled" : "")+'">'+nextLink.innerText+'</a>');
					formatted.push('\t\t\t\t</div>');
				formatted.push('\t\t\t</div>');

				formatted.push('\t\t\t');
				
				formatted.push('\t\t\t<div class="tab-content" id="divisionsTables">');
					for ( i=0 ; i!==8 ; i++ ) {
						if ( ! tabs[i].classList.contains("disabled") ) {
							formatted.push('\t\t\t\t<div class="tab-pane'+(i===0?' active show':'')+'" id="div'+tabLabels[i]+'-pane" role="tabpanel" aria-labelledby="div'+tabLabels[i]+'" tabindex="0">');
								formatted.push('\t\t\t\t\t<div>');
									formatted.push('\t\t\t\t\t\t<table class="table table-hover table-sm">');
										formatted.push('\t\t\t\t\t\t\t<thead>');
											formatted.push('\t\t\t\t\t\t\t\t<tr><th scope="col"></th><th scope="col"></th><th scope="col">Team</th><th scope="col">P</th><th scope="col">W</th><th scope="col">D</th><th scope="col">L</th><th scope="col">F</th><th scope="col">A</th><th scope="col">Pts</th><th scope="col">GD</th><th scope="col">F/P</th><th scope="col">A/P</th><th scope="col">W%</th><th scope="col">GD/P</th><th scope="col">Pts/P</th></tr>');
										formatted.push('\t\t\t\t\t\t\t</thead>');
										formatted.push('\t\t\t\t\t\t\t<tbody class="table-group-divider league" id="league_'+tabLabels[i]+'">');
											formatted.push('\t\t\t\t\t\t\t\t');
											clubs = document.querySelectorAll("#league_"+tabLabels[i]+" tr");

											clubs.forEach(row=>{
												clubClass = row.getAttribute("class");
												clubClass = ! clubClass ? "" : ' class="'+clubClass+'"';
												formatted.push('\t\t\t\t\t\t\t\t<tr id="'+row.getAttribute("id")+'"'+clubClass+'>'+row.innerHTML+'</tr>');
											});

											formatted.push('\t\t\t\t\t\t\t\t');
										formatted.push('\t\t\t\t\t\t\t</tbody>');
									formatted.push('\t\t\t\t\t\t</table>');
								formatted.push('\t\t\t\t\t</div>');
							formatted.push('\t\t\t\t</div>');
						}
					}
				formatted.push('\t\t\t</div>');
				
				formatted.push('\t\t\t');
			formatted.push('\t\t</div>');
			formatted.push('\t\t<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>');
			formatted.push('\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>');
			formatted.push('\t\t<script src="../../esl-script.js"></script>');
		formatted.push('\t</body>');
	formatted.push('</html>');

	console.log(formatted.join("\n"));
}

function resetPromotionRelegation() {
	document.querySelectorAll(".promoted,.relegated").forEach(e=>{e.classList.remove("promoted");e.classList.remove("relegated");});
	document.querySelectorAll("img[alt='Relegated']").forEach(e=>{e.remove();});
	document.querySelectorAll("img[alt='Promoted']").forEach(e=>{e.remove();});
}

function fixRow(league,pos) {
    clear();
    team = $("#league_"+league+" tr")[pos-1];
    cols = $(team).find("td");
    /* played */  cols[2].innerHTML = parseInt(cols[3].innerHTML) + parseInt(cols[4].innerHTML) + parseInt(cols[5].innerHTML);
    /* f per g */ cols[10].innerHTML = (parseInt(cols[6].innerHTML) / parseInt(cols[2].innerHTML)).toFixed(2);
    /* a per g */ cols[11].innerHTML = (parseInt(cols[7].innerHTML) / parseInt(cols[2].innerHTML)).toFixed(2);
    /* win % */   cols[12].innerHTML = (parseInt(cols[3].innerHTML) / parseInt(cols[2].innerHTML)).toFixed(2);
    /* gd per g */cols[13].innerHTML = ((parseInt(cols[6].innerHTML)-parseInt(cols[7].innerHTML)) / parseInt(cols[2].innerHTML)).toFixed(2);
    /* pts / g */ cols[14].innerHTML = (parseInt(cols[8].innerHTML) / parseInt(cols[2].innerHTML)).toFixed(2);
}

function calcPromotionRelegationLimits() {
	leagues = ["a","b","c","d","e","f","g"];

	for ( i=0 ; i!==leagues.length ; i++ ) {

		if ( document.querySelectorAll("#league_"+leagues[i]+" .removed").length === 0 ) {
			if ( document.querySelectorAll("#league_"+leagues[i]+" tr").length >= (90-1) ) {
				document.querySelectorAll("#league_"+leagues[i]+" tr")[90].classList.add("relegation-limit");
			}
		} else {
			if ( document.querySelectorAll("#league_"+leagues[i]+" tr:not(.removed)").length >= 90 ) {
				document.querySelectorAll("#league_"+leagues[i]+" tr:not(.removed)")[90].classList.add("relegation-limit");
			}
		}

		if ( i !== 0 ) {
			if ( document.querySelectorAll("#league_"+leagues[i]+" .removed").length <= 10 ) {
				document.querySelectorAll("#league_"+leagues[i]+" tr:not(.removed)")[10-1].classList.add("promotion-limit");
			} else {
				console.error("Change estimated number of promotion teams");
			}
		}
	}
}