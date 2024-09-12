console.clear();
page = window.location.href.replace("https://en.wikipedia.org/wiki/","");
page = page.replace("2024%E2%80%9325_","");
page = page.replace("2024_","");
country = tbl = "";
teams = [];
switch ( page ) {
    case "Belgian_Pro_League": country = "bel"; tbl = "#Regular_season"; console.warn("Season will break into playoffs"); break;
    case "Luxembourg_National_Division": country = "lux"; tbl = "#League_table"; break;
    case "Premier_League": country = "eng"; tbl = "#League_table"; break;
}
$tbl = $(tbl);
if ( country === "" || tbl === "" || $tbl.length === 0 ) {
    console.error("Unknown country");
} else {
    for ( i=0 ; i!==$tbl.length ; i++ ) {
        thisTbl = $($(tbl)[i]).parent().nextAll(".wikitable")[0];
        rows = Array.from($(thisTbl).find("tr"));
        for ( r=1 ; r!==rows.length ; r++ ) {
            cols = Array.from($(rows[r]).find("td,th"));
            team = {
                country: country,
                name: $(cols[1]).text().trim(),
                id: $(cols[1]).find("a")[0].getAttribute("href").replace("/wiki/",""),
                win: parseInt($(cols[3]).text().trim()),
                draw: parseInt($(cols[4]).text().trim()),
                loss: parseInt($(cols[5]).text().trim()),
                for: parseInt($(cols[6]).text().trim()),
                against: parseInt($(cols[7]).text().trim())
            };
            teams.push(team);
        }
    }
    console.log(JSON.stringify(teams));
}