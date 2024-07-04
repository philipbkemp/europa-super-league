country = "rou";
current_season = false;
teams = [];
ADD_TABLE_STATS = false;
ISGROUPEDFIRST = false;
FOUND = false;
tbl = $("h2 span#League_table, h2 span#Final_table");
if ( tbl.length === 1 ) { FOUND = true; }
if ( !FOUND ) { tbl2 = $("h2 span#Regular_season, h2 span#Championship_play-offs, h2 span#Relegation_play-outs"); if ( tbl2.length === 3 ) { tbl = tbl2; ADD_TABLE_STATS = true; FOUND = true; } }
if ( !FOUND ) { tbl2 = $("h2 span#Regular_season, h2 span#Play-off_round, h2 span#Play-out_round"); if ( tbl2.length === 3 ) { tbl = tbl2; ADD_TABLE_STATS = true; FOUND = true; } }
if ( !FOUND ) { tbl2 = $("h2 span#Standings"); if ( tbl2.length === 1 ) { tbl = tbl2; FOUND = true; } }

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
					if ( $(cols[0]).text().trim() === "1" && !current_season) { thisClub.isChampion = true; }
					if ( relegated.indexOf($(cols[0]).text().trim()) !== -1 ) { thisClub.isRemoved = true; }
					if ( tblIndex === 0 || ( ISGROUPEDFIRST && tblIndex === 1) ) {
						teams.push(thisClub);
					} else {
						foundClub = false;
						for ( te=0 ; te!==teams.length ; te++ ) {
							if ( teams[te].id === thisClub.id ) {
								foundClub = true;
								if ( ADD_TABLE_STATS ) {
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