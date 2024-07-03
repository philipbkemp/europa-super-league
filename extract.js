country = "lux";
current_season = false;
teams = [];
IS_AUTUMN_SPRING = false;
IS_CHAMP_RELEG = false;
ISGROUPEDFIRST = false;
tbl = $("h2 span#League_table");
if ( tbl.length === 0 ) { tbl = $("h2 span#Final_league_table"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_Division"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#League_standings"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Table"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Autumn_"+parseInt(window.location.href.split("%E2")[0].split("/").pop())+", h2 span#Spring_"+(parseInt(window.location.href.split("%E2")[0].split("/").pop())+1)); IS_AUTUMN_SPRING = true; if ( tbl.length !== 2 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = [ ...$("h2 span#Regular_season, h2 span#Championship_round"), ...$("h2 span#Relegation_round").parent().nextAll("h3").find("span#Group_A"), ...$("h2 span#Relegation_round").parent().nextAll("h3").find("span#Group_B") ]; IS_CHAMP_RELEG = true; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h2 span#Championship_round, h2 span#Relegation_round"); IS_CHAMP_RELEG = true; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h2 span#Championship_round, h2 span#Qualification_round"); IS_CHAMP_RELEG = true; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Standings"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Scottish_League"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#League_summary"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_competition"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h2 span#Championship_playoff, h3 span#Group_A, h3 span#Group_B"); IS_CHAMP_RELEG = false; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h2 span#Championship_playoff, h3 span#Group_A, h3 span#Group_B, h2 span#Relegation_playoff"); IS_CHAMP_RELEG = false; if ( tbl.length !== 5 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h2 span#Championship_play-offs, h3 span#Group_A, h3 span#Group_B"); IS_CHAMP_RELEG = false; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h3 span#Play-Off_I, h3 span#Play-Off_II"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season, h3 span#Play-off_I, h3 span#Play-off_II"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Final_classification"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Main_tournament"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Classification"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Nationalliga_standings"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#League_standings_Nationalliga_A"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Championship_group, h3 span#Playout_group"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Playoff, h3 span#Playout"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h2 span#Playoff"); IS_CHAMP_RELEG = false; if ( tbl.length !== 2 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Championship_group, h4 span#Group_A, h4 span#Group_B"); IS_CHAMP_RELEG = false; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_group, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_round, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Champion_Playoffs, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Regular_season, h3 span#Champion_playoffs, h2 span[id='Nationalliga_A/B_playoffs']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_round, h3 span[id='Promotion/relegation_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Final_standings"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Group_A, h3 span#Group_B, h2 span#Second_stage"); IS_CHAMP_RELEG = false; ISGROUPEDFIRST = true; if ( tbl.length !== 3 ) { tbl = []; ISGROUPEDFIRST = false; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Championship_playoff, h3 span#Relegation_playoff"); IS_CHAMP_RELEG = true; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#League_table, h2 span#Play-off_round, h2 span#Play-out_round"); IS_CHAMP_RELEG = true; if ( tbl.length !== 3 ) { tbl = []; } }
//if ( tbl.length === 1 || tbl.length === 0 ) { tbl = $("h2 span#League_table, h2 span#Play-off_round, h2 span#Play-out_round"); IS_CHAMP_RELEG = true; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_phase, h3 span#Championship_stage, h4 span#Group_A, h4 span#Group_B"); IS_CHAMP_RELEG = true; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_phase, h3 span#Championship_stage, h4 span#Group_1, h4 span#Group_2"); IS_CHAMP_RELEG = true; if ( tbl.length !== 4 ) { tbl = []; } }


if ( tbl.length === 0 ) { tbl = $("h3 span#League_table"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#League_table"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_phase"); if ( tbl.length !== 1 ) { tbl = []; } }

if ( tbl.length !== 0 ) {
	tblTotal = tbl.length;
	for ( tblIndex=0 ; tblIndex!==tblTotal ; tblIndex++ ) {
		if ( tblTotal === 1 && !current_season) { relegated = prompt("Any relegations?").split(",");
		} else { relegated = [] };
		thisTbl = $($(tbl)[tblIndex]).parent().nextAll(".wikitable")[0];
		rows = Array.from($(thisTbl).find("tr"));
		firstRow = Array.from($($(rows)[0]).find("th, td"));
		TYPE_STANDARD = ["Pos","Team","Pld","W","D","L","GF","GA"]; IS_STANDARD = 0;
		TYPE_HOMEAWAY = ["Pos","Team","Pld","HW","HD","HL","HGF","HGA","AW","AD","AL","AGF","AGA"]; IS_HOMEAWAY = 0;
		TYPE_NODRAWS = ["Pos","Team","Pld","W","L","GF","GA"]; IS_NODRAWS = 0;
		TYPE_PENALTYDRAW = ["Pos","Team","Pld","W","PKW","PKL","L","GF","GA"]; IS_PENDRAW = 0;
		for ( i=0; i!=TYPE_STANDARD.length; i++ ) {
			if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_STANDARD[i] ) { IS_STANDARD++ }
		}
		if ( IS_STANDARD !== TYPE_STANDARD.length ) {
			for ( i=0; i!=TYPE_HOMEAWAY.length; i++ ) {
				if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_HOMEAWAY[i] ) { IS_HOMEAWAY++ }
			}
			if ( IS_HOMEAWAY !== TYPE_HOMEAWAY.length ) {
				for ( i=0; i!=TYPE_NODRAWS.length; i++ ) {
					if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_NODRAWS[i] ) { IS_NODRAWS++ }
				}
				if ( IS_NODRAWS !== TYPE_NODRAWS.length) {
				for ( i=0; i!=TYPE_PENALTYDRAW.length; i++ ) {
					if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_PENALTYDRAW[i] ) { IS_PENDRAW++ }
				}
				}
			}
		}
		/*console.log(
			IS_STANDARD === TYPE_STANDARD.length,
			IS_HOMEAWAY === TYPE_HOMEAWAY.length,
			IS_NODRAWS === TYPE_NODRAWS.length,
			IS_PENDRAW === TYPE_PENALTYDRAW.length
		);*/
		if ( IS_STANDARD === TYPE_STANDARD.length ||
			IS_HOMEAWAY === TYPE_HOMEAWAY.length ||
			IS_NODRAWS === TYPE_NODRAWS.length ||
			IS_PENDRAW === TYPE_PENALTYDRAW.length
		) {
			for ( r=1; r!==rows.length; r++ ) {
				cols = Array.from($($(rows)[r]).find("th, td"));
				if ( $($(cols)[0]).text().trim() !== "" ) {
					thisClub = {};
					if ( $($(cols[1]).find("a")).length !== 0 ) {
						theClubId = $($(cols[1]).find("a")[0]).attr("href").replace("/wiki/","").replace("/w/index.php?title=","").replace("&action=edit&redlink=1","");
						theClubName = $($(cols[1]).find("a")[0]).text().trim();
					} else {
						theClubName = $(cols[1]).text().trim();
						theClubName = theClubName.replace(" (E)","");
						theClubId = theClubName.toLowerCase().split(" ").join("_");
						console.log(theClubId);
					}
					if ( IS_STANDARD === TYPE_STANDARD.length ) {
						thisClub ={
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()),
							draw: parseInt($(cols[4]).text().trim()),
							loss: parseInt($(cols[5]).text().trim()),
							for: parseInt($(cols[6]).text().trim()),
							against: parseInt($(cols[7]).text().trim())
						};
					} else if ( IS_HOMEAWAY === TYPE_HOMEAWAY.length ) {
						thisClub = {
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()) + parseInt($(cols[8]).text().trim()),
							draw: parseInt($(cols[4]).text().trim()) + parseInt($(cols[9]).text().trim()),
							loss: parseInt($(cols[5]).text().trim()) + parseInt($(cols[10]).text().trim()),
							for: parseInt($(cols[6]).text().trim()) + parseInt($(cols[11]).text().trim()),
							against: parseInt($(cols[7]).text().trim()) + parseInt($(cols[12]).text().trim())
						};
					} else if ( IS_NODRAWS === TYPE_NODRAWS.length ) {
						thisClub = {
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()),
							draw: 0,
							loss: parseInt($(cols[4]).text().trim()),
							for: parseInt($(cols[5]).text().trim()),
							against: parseInt($(cols[6]).text().trim())
						};
					} else if ( IS_PENDRAW === TYPE_PENALTYDRAW.length ) {
						console.error("Penalites after draw, TBC");
						thisClub = {
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()),
							draw: 0,
							loss: parseInt($(cols[6]).text().trim()),
							for: parseInt($(cols[7]).text().trim()),
							against: parseInt($(cols[8]).text().trim()),
							penWin: parseInt($(cols[4]).text().trim()), // HUN, 1988-89, 2pts for PenWin after draw
							penLoss: parseInt($(cols[5]).text().trim()) // HUN, 1988-89, 0pts for PenLos after draw
						};
					}
					if ( current_season ) {
						thisClub.isCurrentSeason = true;
					}
					if ( country === "lux" ) {
						if ( thisClub.id === "FC_Schifflange_95" && thisClub.name === "National Schifflange" ) {
							thisClub.id = "National_Schifflange";
						} else if ( thisClub.id === "Union_05_Kayl-T%C3%A9tange" && thisClub.name === "SC Tétange" ) {
							thisClub.id = "SC_Tétange"
						} else if ( thisClub.id === "F91_Dudelange" && thisClub.name === "US Dudelange" ) {
							thisClub.id = "US_Dudelange";
						} else if ( thisClub.id === "F91_Dudelange" && thisClub.name === "Alliance Dudelange" ) {
							thisClub.id = "Alliance_Dudelange";
						} else if ( thisClub.id === "FC_Differdange_03" && thisClub.name === "AS Differdange" ) {
							thisClub.id = "AS_Differdange";
						} else if ( thisClub.id === "FC_Rodange_91" && thisClub.name === "Chiers Rodange" ) {
							thisClub.id = "FC_Chiers";
						} else if ( thisClub.id === "FC_Rodange_91" && thisClub.name === "Racing Rodange" ) {
							thisClub.id = "FC_Racing";
						} else if ( thisClub.id === "FC_Alliance_%C3%84ischdall" && thisClub.name === "FC Olympique Eischen" ) {
							thisClub.id = "FC_Olympique_Eischen";
						} else if ( thisClub.id === "UN_K%C3%A4erjeng_97" && thisClub.name === "Jeunesse Hautcharage" ) {
							thisClub.id = "Jeunesse_Hautcharage";
						} else if ( thisClub.id === "F91_Dudelange" && thisClub.name === "F91 Dudelange" ) {
							thisClub.id = "F91_Dudelange";
						} else if ( thisClub.id === "FC_Rodange_91" && ["FC Rodange 91","Rodange 91"].includes(thisClub.name) ) {
							thisClub.id = "FC_Rodange_91";
						} else if ( thisClub.id === "FC_Schifflange_95" && thisClub.name === "Schifflange 95" ) {
							thisClub.id = "FC_Schifflange_95";
						} else if ( thisClub.id === "FC_Differdange_03" && ["Differdange 03","FC Differdange 03"].includes(thisClub.name) ) {
							thisClub.id = "FC_Differdange_03";
						} else if ( thisClub.id === "Union_05_Kayl-T%C3%A9tange" && thisClub.name === "Union 05 Kayl-Tétange" ) {
							thisClub.id = "Union_05_Kayl-T%C3%A9tange"
						} else if ( ["FC_Schifflange_95","Union_05_Kayl-T%C3%A9tange","F91_Dudelange","FC_Differdange_03","FC_Rodange_91","FC_Alliance_%C3%84ischdall"].includes(thisClub.id) ) {
							console.warn("Club merge?",thisClub.id);
						}
					}
					if ( $(cols[0]).text().trim() === "1" && !current_season) { thisClub.isChampion = true; }
					if ( relegated.indexOf($(cols[0]).text().trim()) !== -1 ) { thisClub.isRemoved = true; }
					if ( tblIndex === 0 || ( ISGROUPEDFIRST && tblIndex === 1) ) {
						teams.push(thisClub);
					} else {
						foundClub = false;
						for ( te=0 ; te!==teams.length ; te++ ) {
							if ( teams[te].id === thisClub.id ) {
								foundClub = true;
								if ( IS_CHAMP_RELEG ) {
									teams[te].win = thisClub.win;
									teams[te].draw = thisClub.draw;
									teams[te].loss = thisClub.loss;
									teams[te].for = thisClub.for;
									teams[te].against = thisClub.against;
								} else {
									teams[te].win += thisClub.win;
									teams[te].draw += thisClub.draw;
									teams[te].loss += thisClub.loss;
									teams[te].for += thisClub.for;
									teams[te].against += thisClub.against;
								}
							}
						}
						if ( ! foundClub ) {
							console.error("club in sequel not in original",thisClub.id);
						}
					}
				}
			}
		} else {
			console.error("Unknown table format",firstRow);
		}
	}
} else {
	console.error("Unknown table");
}
console.log(JSON.stringify(teams));