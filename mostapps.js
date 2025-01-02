clubs = [
"RFC_Liège","Royal_Antwerp_F.C.","Sporting_Club_de_Bruxelles","Léopold_FC","kfc_rhodienne_de_hoek","Club_Brugge_KV","Union_F.C._d%27Ixelles","Athletic_and_Running_Club_de_Bruxelles","K._Beerschot_V.A.C.","Skill_F.C._de_Bruxelles","R.C.S._Verviétois","Cercle_Brugge_K.S.V.","royale_union_saint_gilloise","R._Daring_Club_Molenbeek","K.V._Kortrijk","Royal_Excelsior_Sports_Club","K.R.C._Gent","standard_liege","K.R.C._Mechelen","K.A.A._Gent","R._Uccle_Sport","R.S.C._Anderlecht","K.V._Mechelen","K._Berchem_Sport","R.W.D._Molenbeek_(1909)","R.F.C._Tilleur","R.C.S._La_Forestoise","Lierse_S.K.","K._Tubantia_Borgerhout_V.K.","R.R.F.C._Montegnée","KFC_Turnhout","K._Lyra","K.V.V._Belgica_Edegem_Sport","R._Olympic_Charleroi_Châtelet_Farciennes","K.V.K._Tienen-Hageland","K._Boom_F.C.","S.C._Eendracht_Aalst","K._Sint-Niklase_S.K.E.","Royal_Charleroi_S.C.","K._Stade_Leuven","K._Beringen_F.C.","R.F.C._Tournai","K._Waterschei_S.V._Thor_Genk","Sint-Truidense_V.V.","Beerschot_A.C.","K.R.C._Genk","K._Patro_Eisden_Maasmechelen","K.F.C._Diest","K.S.V._Waregem","K.S.K._Beveren","K.V.V._Crossing_Elewijt","A.S.V._Oostende_K.M.","K.S.C._Lokeren_Oost-Vlaanderen","R.A.A._Louviéroise","K.S.C._Hasselt","K.S.K._Tongeren","R.F.C._Seraing_(1904)","Wavre_Sports_FC","K.F.C._Lommel_S.K.","K.V._Oostende","K.R.C._Zuid-West-Vlaanderen","R.E._Mouscron","K.V.C._Westerlo","K.F.C._Verbroedering_Geel","R.A.E.C._Mons_(1910)","K._Beringen-Heusden-Zolder","R.W.D.M._Brussels_F.C.","S.V._Zulte_Waregem","K.S.V._Roeselare","F.C.V._Dender_E.H.","Royale_Union_Tubize-Braine","K.A.S._Eupen","Oud-Heverlee_Leuven","S.K._Beveren","Royal_Excel_Mouscron","K_Beerschot_VA","R.F.C._Seraing_(1922)","R.W.D._Molenbeek_(2015)"
];

esl = [];

clubs.forEach(c=>{
	esl[c] = 0;
});

if ( localStorage.esl ) {
	esl = JSON.parse(localStorage.esl);
}

clubs.forEach(c=>{
	esl[c] += document.querySelector("*[id='"+c+"'") ? 1 : 0;
});

localStorage.esl = JSON.stringify({...esl});