console.clear();
page = window.location.href.replace("https://en.wikipedia.org/wiki/","");
page = page.replace("2024%E2%80%9325_","");
page = page.replace("2024_","");
page = page.split("#")[0];
page = page.split(":")[1] ?? page;
country = tbl = tbl2 = "";
teams = [];
switch ( page ) {
	case "A_Lyga": 															country = "ltu";		tbl = "#League_table";			break;
	case "Allsvenskan": 													country = "swe";	tbl = "#League_table";			break;
	case "Armenian_Premier_League": 								country = "arm";	tbl = "#League_table";			break;
	case "Austrian_Football_Bundesliga": 							country = "aut";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Azerbaijan_Premier_League": 							country = "aze";		tbl = "#League_table";			break;
	case "Belarusian_Premier_League": 							country = "blr";		tbl = "#League_table";			break;
	case "Belgian_Pro_League": 										country = "bel"; 	tbl = "#Regular_season"; 		console.warn("Season will break into playoffs"); 	break;
	case "Besta_deild_karla": 											country = "isl";		tbl = "#Championship_Round, #Relegation_Round";	break;
	case "Bundesliga": 														country = "deu";	tbl = "#League_table";			break;
	case "Campionato_Sammarinese_di_Calcio": 				country = "smr";	tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Croatian_Football_League": 								country = "hrv";		tbl = "#League_table";			break;
	case "Cymru_Premier": 												country = "wal";		tbl = "#League_table";			break;
	case "Cypriot_First_Division": 										country = "cyp";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Czech_First_League": 										country = "cze";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Danish_Superliga": 											country = "dnk"; 	tbl = "#Regular_season"; 		console.warn("Season will break into playoffs"); 	break;
	case "Ekstraklasa": 													country = "pol";		tbl = "#League_table";			break;
	case "Eliteserien": 														country = "nor";		tbl = "#League_table";			break;
	case "Eredivisie": 														country = "nld"; 	tbl = "#League_table"; 			break;
	case "Erovnuli_Liga": 													country = "geo";	tbl = "#League_table";			break;
	case "Faroe_Islands_Premier_League": 						country = "fro";		tbl = "#League_table";			break;
	case "First_Professional_Football_League_(Bulgaria)": 	country = "bgr";		tbl = "#Regular_season";		console.warn("Season will break into playoffs");	break;
	case "Football_Superleague_of_Kosovo": 						country = "kos";		tbl = "#League_table";			break;
	case "Gibraltar_Football_League": 								country = "gib";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Kategoria_Superiore": 										country = "alb";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Kazakhstan_Premier_League": 							country = "kaz";		tbl = "#League_table";			break;
	case "Israeli_Premier_League": 									country = "isr";		tbl = "#Regular_season";		console.warn("Season will break into playoffs");	break;
	case "La_Liga": 															country = "esp";	tbl = "#League_table";			break;
	case "Latvian_Higher_League": 									country = "lva";		tbl = "#League_table";			break;
	case "League_of_Ireland_Premier_Division": 				country = "irl";		tbl = "#League_table";			break;
	case "Liga_I": 															country = "rou";		tbl = "#Regular_season";		console.warn("Season will break into playoffs");	break;
	case "Ligue_1": 															country = "fra";		tbl = "#League_table";			break;
	case "Luxembourg_National_Division": 						country = "lux"; 	tbl = "#League_table"; 			break;
	case "Macedonian_First_Football_League": 					country = "mkd";	tbl = "#League_table";			break;
	//case "Maltese_Premier_League": 								country = "mlt";		tbl = "#First_phase";				console.warn("Season will break into playoffs");	break;
	case "Maltese_Premier_League": 								country = "mlt";		tbl = "#Top_Six, #Play-Out";	tbl2 = "#Closing_Round"; console.warn("Season will break into closing round"); break;
	case "Meistriliiga": 														country = "est";		tbl = "#League_table";			break;
	case "Moldovan_Super_Liga": 										country = "mda";	tbl = "#Phase_I";					console.warn("Season will break into playoffs");	break;
	case "Montenegrin_First_League": 								country = "mne";	tbl = "#League_table";			break;
	case "Nemzeti_Bajnoks%C3%A1g_I":							country = "hun";	tbl = "#League_table";			break;
	case "NIFL_Premiership": 											country = "nir";		tbl = "#League_table";			break;
	case "Premier_League": 												country = "eng"; 	tbl = "#League_table"; 			break;
	case "Premier_League_of_Bosnia_and_Herzegovina": 	country = "bih";		tbl = "#League_table"; 			break;
	case "Primeira_Liga": 													country = "prt";		tbl = "#League_table";			break;
	case "Primera_Divisi%C3%B3":  									country = "and";	tbl = "#League_table";			break;
	case "Primera_Divisi%C3%B3": 									country = "and";	tbl = "h2[id^='Standings']";	break;
	case "Russian_Premier_League": 								country = "rus";		tbl = "#League_table"; 			break;
	case "Scottish_Premiership": 										country = "sco"; 	tbl = "#League_table"; 			break;
	case "Serbian_SuperLiga": 											country = "srb";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Serie_A": 															country = "ita"; 		tbl = "#League_table"; 			break;
	case "Slovak_First_Football_League": 							country = "svk";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Slovenian_PrvaLiga": 										country = "svn";	tbl = "#League_table";			break;
	case "Super_League_Greece": 									country = "grc";		tbl = "#League_table";			console.warn("Season will break into playoffs");	break;
	case "Swiss_Super_League": 										country = "che"; 	tbl = "#Table"; 						break;
	case "S%C3%BCper_Lig": 											country = "tur";		tbl = "#League_table";			break;
	case "Ukrainian_Premier_League": 								country = "ukr";		tbl = "#League_table";			break;
	case "Veikkausliiga": 													country = "fin";		tbl = "#Championship_Round, #Relegation_Round"; break;
	default: console.error(page);
}
$tbl = $(tbl);
if ( country === "" || tbl === "" || $tbl.length === 0 ) {
	console.error("Unknown country",country,tbl);
} else {
	for ( i=0 ; i!==$tbl.length ; i++ ) {
		thisTbl = $($(tbl)[i]).parent().nextAll(".wikitable")[0];
		rows = Array.from($(thisTbl).find("tr"));
		for ( r=1 ; r!==rows.length ; r++ ) {
			cols = Array.from($(rows[r]).find("td,th"));
			if ( $(cols[1]).text().trim() !== "" ) {
				teamName = $(cols[1]).text().trim()
					.replace(" (C)","")
					.replace(" (Q)","")
					.replace(" (R)","")
					.replace(" (O)","")
					.replace(" (W)","")
					.replace(" (V)","")
					.replace("[a]","")
					.replace(" (V, Z)")
					.replace(" (Z)","")
					;
				team = {
					country: country,
					name: teamName,
					id: $(cols[1]).find("a")[0].getAttribute("href").replace("/wiki/",""),
					win: parseInt($(cols[3]).text().trim()),
					draw: parseInt($(cols[4]).text().trim()),
					loss: parseInt($(cols[5]).text().trim()),
					for: parseInt($(cols[6]).text().trim()),
					against: parseInt($(cols[7]).text().trim())
				};
				if ( $(cols[1]).text().trim().indexOf(" (C)") !== -1 ) {
					team.isChampion = true;
				}
				if ( $(cols[1]).text().trim().indexOf(" (R)") !== -1 ) {
					team.isRemoved = true;
				}
				if ( $(cols[9]).find("a").length !== 0 ) {
					noteId = $(cols[9]).find("a").attr("href").replace("#","");
					note = document.querySelector("*[id='"+noteId+"'] .reference-text");
					noteText = note.innerText;
					knownTexts = [
						"Penya Encarnada were deducted three points.",
						"Hapoel Be'er Sheva had 2 points deducted following riot in Bnei Sakhnin match.[8]",
						"Bnei Sakhnin had 1 point deducted following riot in Hapoel Be'er Sheva match.[8]",
						"Shakhtyor Soligorsk were deducted 20 points for match-fixing.[5]",
						"On 19 April, Valmiera were deducted three points, with an additional six points and a suspended 25 points deduction being issued on 11 October due to licensing regulation breaches.[4][5]"
					];
					if ( ! knownTexts.includes(noteText) && noteText.toLowerCase().indexOf("head-to-head") === -1) {
						console.error("Note about " + team.id , noteText );
					}
				}

				if ( tbl2 === "" ) {
					teams.push(team);
				} else {
					secondRow = $("#Closing_Round").parent().nextAll(".wikitable").find("a[href='/wiki/"+team.id+"']").parent().parent();
					secondCols = Array.from($(secondRow).find("td,th"));
					team.win += parseInt($(secondCols[3]).text().trim());
					team.draw += parseInt($(secondCols[4]).text().trim());
					team.loss += parseInt($(secondCols[5]).text().trim());
					team.for += parseInt($(secondCols[6]).text().trim());
					team.against += parseInt($(secondCols[7]).text().trim());
					teams.push(team);
				}

			}
		}
	}
	console.log(JSON.stringify(teams));
}