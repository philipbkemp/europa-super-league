country = "mkd";
current_season = false;
teams = [];
ADD_TABLE_STATS = [false];
ISGROUPEDFIRST = false;
FOUND = false;
tbl = $("#League_table, #League, #Final_table, #Final_Table, #League_standings, #Final_league_table, #Preliminary_stage, #Final_standings, #Regular_season");
if ( tbl.length === 1 ) { FOUND = true; }

tbl2 = $("#Regular_season, #Championship_round, #Relegation_round");
if ( tbl2.length === 3 ) { FOUND = true; ADD_TABLE_STATS = [false,false]; console.warn("C/R"); tbl=tbl2;}
/*
*/

if ( FOUND ) {
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
		TYPE_WINBYTHREE = ["Pos","Team","Pld","W","W3","D","L3","L","GF","GA"]; IS_WINBYTHREE = 0;
		TYPE_GOALESS_DRAW = ["Pos","Team","Pld","W","D","0–0","L","GF","GA"]; IS_GOALESS_DRAW = 0;
		TYPE_SOVIET_REPUBLIC = ["Pos","Republic","Team","Pld","W","D","L","GF","GA"]; IS_SOVIET_REPUBLIC = 0;
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
					if ( IS_PENDRAW !== TYPE_PENALTYDRAW.length) {
						for ( i=0; i!=TYPE_WINBYTHREE.length; i++ ) {
							if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_WINBYTHREE[i] ) { IS_WINBYTHREE++ }
						}
						if ( IS_WINBYTHREE !== TYPE_WINBYTHREE.length) {
							for ( i=0; i!=TYPE_GOALESS_DRAW.length; i++ ) {
								if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_GOALESS_DRAW[i] ) { IS_GOALESS_DRAW++ }
							}
							if ( TYPE_GOALESS_DRAW !== TYPE_GOALESS_DRAW.length) {
								for ( i=0; i!=TYPE_SOVIET_REPUBLIC.length; i++ ) {
									if ( $($(firstRow[i]).contents()[0]).text().trim() === TYPE_SOVIET_REPUBLIC[i] ) { IS_SOVIET_REPUBLIC++ }
								}
							}
						}
					}
				}
			}
		}
		if ( IS_STANDARD === TYPE_STANDARD.length ||
			IS_HOMEAWAY === TYPE_HOMEAWAY.length ||
			IS_NODRAWS === TYPE_NODRAWS.length ||
			IS_PENDRAW === TYPE_PENALTYDRAW.length ||
			IS_WINBYTHREE === TYPE_WINBYTHREE.length ||
			IS_GOALESS_DRAW === TYPE_GOALESS_DRAW.length ||
			IS_SOVIET_REPUBLIC === TYPE_SOVIET_REPUBLIC.length
		) {
			for ( r=1; r!==rows.length; r++ ) {
				cols = Array.from($($(rows)[r]).find("th, td"));
				if ( $($(cols)[0]).text().trim() !== "" ) {
					thisClub = {};
					if ( IS_SOVIET_REPUBLIC === TYPE_SOVIET_REPUBLIC.length ) {
						if ( $($(cols[2]).find("a")).length !== 0 ) {
							theClubId = $($(cols[2]).find("a")[0]).attr("href").replace("/wiki/","").replace("/w/index.php?title=","").replace("&action=edit&redlink=1","");
							//theClubName = $($(cols[2]).find("a")[0]).text().trim();
							theClubName = $(cols[2]).text().trim().replace(" (C)","").replace(" (R)","").replace(" (O)","").replace(" (W)","").replace(" (E)","");
						} else {
							theClubName = $(cols[1]).text().trim();
							theClubName = theClubName.replace(" (E)","");
							theClubName = theClubName.replace(" (C)","");
							theClubId = theClubName.toLowerCase().split(" ").join("_");
							console.warn(theClubId);
						}
					} else {
						if ( $($(cols[1]).find("a")).length !== 0 ) {
							theClubId = $($(cols[1]).find("a")[0]).attr("href").replace("/wiki/","").replace("/w/index.php?title=","").replace("&action=edit&redlink=1","");
							if ( theClubId.indexOf("_Socialist_Republic") !== -1 ) {
								theClubId = $($(cols[1]).find("a")[1]).attr("href").replace("/wiki/","").replace("/w/index.php?title=","").replace("&action=edit&redlink=1","");
							}
							//theClubName = $($(cols[1]).find("a")[0]).text().trim();
							theClubName = $(cols[1]).text().trim().replace(" (C)","").replace(" (R)","").replace(" (O)","").replace(" (W)","").replace(" (E)","");
						} else {
							theClubName = $(cols[1]).text().trim();
							theClubName = theClubName.replace(" (E)","");
							theClubName = theClubName.replace(" (C)","");
							theClubId = theClubName.toLowerCase().split(" ").join("_");
							console.warn(theClubId);
						}
					}
					if ( theClubId === "RFK" ) {
						console.warn(theClubId);
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
					} else if ( IS_WINBYTHREE === TYPE_WINBYTHREE.length ) {
						thisClub = {
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()),
							draw: parseInt($(cols[5]).text().trim()),
							loss: parseInt($(cols[7]).text().trim()),
							for: parseInt($(cols[8]).text().trim()),
							against: parseInt($(cols[9]).text().trim()),
							winByThree: parseInt($(cols[4]).text().trim()), // POL, 1986-87 to 1989-90, +1 for win by 3+ goals // Albania also used this in 89/90 2pts for win, 3pts for win+3, -1pts for loss by 3+
							lossByThree: parseInt($(cols[6]).text().trim()) // POL, 1986-87 to 1989-90, -1 for loss by 3+ goals // Albania also used this in 89/90 2pts for win, 3pts for win+3, -1pts for loss by 3+
						};
					} else if ( IS_GOALESS_DRAW === TYPE_GOALESS_DRAW.length ) {
						thisClub ={
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[3]).text().trim()),
							draw: parseInt($(cols[4]).text().trim()) + parseInt($(cols[5]).text().trim()),
							loss: parseInt($(cols[6]).text().trim()),
							for: parseInt($(cols[7]).text().trim()),
							against: parseInt($(cols[8]).text().trim())
						};
					} else if ( IS_SOVIET_REPUBLIC === TYPE_SOVIET_REPUBLIC.length ) {
						thisClub ={
							country: country,
							name: theClubName,
							id: theClubId,
							win: parseInt($(cols[4]).text().trim()),
							draw: parseInt($(cols[5]).text().trim()),
							loss: parseInt($(cols[6]).text().trim()),
							for: parseInt($(cols[7]).text().trim()),
							against: parseInt($(cols[8]).text().trim())
						};
					}
					if ( current_season ) {
						thisClub.isCurrentSeason = true;
					}
					if ( $(cols[0]).text().trim() === "1" && !current_season) { thisClub.isChampion = true; }
					if ( relegated.indexOf($(cols[0]).text().trim()) !== -1 ) { thisClub.isRemoved = true; }

					if ( thisClub.name === "SC Wacker" ) { thisClub.id = "SC_Wacker"; }
					if ( ["SK Admira Wien","SK Admira Wien Energie"].includes(thisClub.name) ) { thisClub.id = "SK_Admira_Wien"; }
					if ( thisClub.name === "VfB Mödling" ) { thisClub.id = "VfB_Mödling"; }

					if ( tblIndex === 0 || ( ISGROUPEDFIRST && tblIndex === 1) ) {
						teams.push(thisClub);
					} else {
						foundClub = false;
						for ( te=0 ; te!==teams.length ; te++ ) {
							if ( teams[te].id === thisClub.id ) {
								foundClub = true;
								if ( ADD_TABLE_STATS[tblIndex-1] ) {
									teams[te].win += thisClub.win;
									teams[te].draw += thisClub.draw;
									teams[te].loss += thisClub.loss;
									teams[te].for += thisClub.for;
									teams[te].against += thisClub.against;
								} else {
									teams[te].win = thisClub.win;
									teams[te].draw = thisClub.draw;
									teams[te].loss = thisClub.loss;
									teams[te].for = thisClub.for;
									teams[te].against = thisClub.against;
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