country = "che";
current_season = false;
teams = [];
IS_AUTUMN_SPRING = false;
IS_CHAMP_RELEG = false;
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
if ( tbl.length === 0 ) { tbl = $("h2 span#Regular_season"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Final_classification"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Main_tournament"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Classification"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#Nationalliga_standings"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#League_standings_Nationalliga_A"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Championship_group, h3 span#Playout_group"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Playoff, h3 span#Playout"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h2 span#Playoff"); IS_CHAMP_RELEG = false; if ( tbl.length !== 2 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#League_table"); if ( tbl.length !== 1 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h2 span#First_stage, h3 span#Championship_group, h4 span#Group_A, h4 span#Group_B"); IS_CHAMP_RELEG = false; if ( tbl.length !== 4 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_group, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_round, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Champion_Playoffs, h3 span[id='Promotion/relegation_group_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Regular_season, h3 span#Champion_playoffs, h2 span[id='Nationalliga_A/B_playoffs']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length === 0 ) { tbl = $("h3 span#Qualification_phase, h3 span#Championship_round, h3 span[id='Promotion/relegation_NLA/NLB']"); IS_CHAMP_RELEG = false; if ( tbl.length !== 3 ) { tbl = []; } }
if ( tbl.length !== 0 ) {
	tblTotal = tbl.length;
	for ( tblIndex=0 ; tblIndex!==tblTotal ; tblIndex++ ) {
		if ( tblTotal === 1 && !current_season) { relegated = prompt("Any relegations?").split(",");
		} else { relegated = [] };
		thisTbl = $($(tbl)[tblIndex]).parent().nextAll(".wikitable")[0];
		rows = Array.from($(thisTbl).find("tr"));
		firstRow = Array.from($($(rows)[0]).find("th, td"));
		TYPE_STANDARD = ["Pos","Team","Pld","W","D","L","GF","GA"]; IS_STANDARD = true;
		TYPE_HOMEAWAY = ["Pos","Team","Pld","HW","HD","HL","HGF","HGA","AW","AD","AL","AGF","AGA"]; IS_HOMEAWAY = true;
		TYPE_NODRAWS = ["Pos","Team","Pld","W","L","GF","GA"]; IS_NODRAWS = true;
		for ( i=0; i!=TYPE_STANDARD.length; i++ ) {
			if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_STANDARD[i] ) { IS_STANDARD = IS_STANDARD && true; } else { IS_STANDARD = false; }
		}
		if ( ! IS_STANDARD ) {
			for ( i=0; i!=TYPE_HOMEAWAY.length; i++ ) {
				if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_HOMEAWAY[i] ) { IS_HOMEAWAY = IS_HOMEAWAY && true; } else { IS_HOMEAWAY = false; }
			}
			if ( ! IS_HOMEAWAY ) {
				for ( i=0; i!=TYPE_NODRAWS.length; i++ ) {
					if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_NODRAWS[i] ) { IS_NODRAWS = IS_NODRAWS && true; } else { IS_NODRAWS = false; }
				}
			}
		}
		if ( IS_STANDARD || IS_HOMEAWAY || IS_NODRAWS ) {
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
					if ( IS_STANDARD ) {
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
					} else if ( IS_HOMEAWAY ) {
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
					} else if ( IS_NODRAWS ) {
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
					}
					if ( current_season ) {
						thisClub.isCurrentSeason = true;
					}
					if ( $(cols[0]).text().trim() === "1" && !current_season) { thisClub.isChampion = true; }
					if ( relegated.indexOf($(cols[0]).text().trim()) !== -1 ) { thisClub.isRemoved = true; }
					if ( tblIndex === 0 ) {
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