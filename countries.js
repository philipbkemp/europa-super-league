function getCountry(c,secondAttempt) {
    switch (c) {
        case "Albania": return "ALB";
        case "Andorra": return "AND";
        case "Armenia": return "ARM";
        case "Austria": return "AUT";
        case "Azerbaijan": return "AZE";
        case "Belarus": return "BLR";
        case "Belgium": return "BEL";
        case "Bohemia and Moravia": return "BOM";
        case "Bosnia and Herzegovina": return "BIH";
        case "Bulgaria": return "BGR";
        case "Croatia":return "HRV"
        case "Cyprus": return "CYP";
        case "Czechoslovakia": return "CSK";
        case "Czech Republic": return "CZE";
        case "Denmark": return "DNK";
        case "England": return "ENG";
        case "East Germany": return "EDE";
        case "Estonia": return "EST";
        case "Faroe Islands": return "FRO";
        case "Finland": return "FIN";
        case "France": return "FRA";
        case "FR Yugoslavia": return "FYG";
        case "Georgia": return "GEO";
        case "Germany": return "DEU";
        case "Gibraltar": return "GIB";
        case "Greece": return "GRC";
        case "Hungary": return "HUN";
        case "Iceland":return "ISL"
        case "Ireland": return "EIR";
        case "Israel": return "ISR";
        case "Italy": return "ITA";
        case "Kazakhstan": return "KZA";
        case "Kosovo": return "KOS";
        case "Latvia": return "LVA";
        case "Lithuania": return "LTU";
        case "Luxembourg": return "LUX";
        case "Macedonia": return "MAC";
        case "Malta": return "MLT";
        case "Moldova": return "MDA";
        case "Montenegro": return "MNE";
        case "Netherlands": return "NLD";
        case "Northern Ireland": return "NIR";
        case "North Macedonia": return "MKD";
        case "Norway": return "NOR";
        case "Palestine": return "PSE";
        case "Poland": return "POL";
        case "Portugal": return "PRT";
        case "Republic of Ireland": return "IRL";
        case "Romania": return "ROU"
        case "Russia":return "RUS"
        case "San Marino": return "SMR";
        case "Scotland": return "SCO";
        case "Serbia": return "SRB";
        case "Serbia and Montenegro": return "SAM";
        case "Slovakia": return "SVK";
        case "Slovenia": return "SVN";
        case "Soviet Union": return "SOV";
        case "Spain": return "ESP";
        case "Sweden": return "SWE"
        case "Switzerland": return "CHE";
        case "Turkey": return "TUR";
        case "Ukraine": return "UKR";
        case "Wales": return "WAL";
        case "West Germany": return "WDE";
        case "Yugoslavia": return "YUG";
        default:
            if ( secondAttempt ) {
                console.warn("New country",c);
            } else {
                years = $(".mw-page-title-main").text().replace(" in European football (UEFA)","").split("–");
                years.forEach(y=>{
                    if ( String(y).length === 4 ) {
                        y = y.split("")[2] + "" + y.split("")[3];
                    }
                    c = c.replace("'" + y,"");
                });
                c = c.replace("FIGC-CCI","");
                c = c.replace("(Finals)","");
                c = c.replace("(National Division )","").replace("(National Division  )","");
                c = c.trim();
                return getCountry(c,true);
            }
    }
}
console.clear();
leagues = [];
$.each( $($(".navbox-list-with-group")[0]).find("LI") , function(k,v) {
    leagues.push( getCountry($(v).text() , false) );
});
console.log( $(".mw-page-title-main").text().replace(" in European football (UEFA)","").replace("–","-") + "|" + leagues.join("|") + "|");