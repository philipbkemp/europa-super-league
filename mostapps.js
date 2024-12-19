clubs = ["sk_rapid_wien","Wiener_Sport-Club","Wiener_AF","wiener_ac","1._Simmeringer_SC","First_Vienna_FC","Floridsdorfer_AC","fk_austria_wien","ASV_Hertha","SC_Rudolfshügel","Vienna_Cricket_and_Football-Club","SC_Wacker","SK_Admira_Wien","VfB_Mödling","Hakoah_Vienna","FC_Ostmark","SK_Slovan_HAC","SpC_Rudolfshügel","Brigittenauer_AC","SC_Nicholson","FC_Wien","SC_Libertas","SV_Donau","Favoritner_AC","Post_SV","SV_Amateure_Fiat","Grazer_SC","SK_Amateure_Steyr","Reichsbahn_Wacker_Wiener_Neustadt","LASK","Post_SV_Wien","Reichsbahn_SG_Wien","SK_Sturm_Graz","LSV_Markersdorf_an_der_Pielach","SC_Rapid_Oberlaa","SC_Helfort","SC_Ostbahn_XI","SCR_Hochstädt","SK_Vorwärts_Steyr","SV_Gloggnitz","1._Wiener_Neustädter_SC","FS_Elektra","Grazer_AK","Kapfenberger_SV","Favoritner_SK_Blau_Weiß","Salzburger_AK_1914","FC_Stadlau","Schwarz-Weiß_Bregenz","ESV_Austria_Graz","Kremser_SC","SC_Olympia_33","DSV_Leoben","SVS_Linz","SV_Schwechat","FC_Dornbirn_1913","FC_Kärnten","FC_Wacker_Innsbruck","SC_Eisenstadt","WSG_Radenthein","WSG_Tirol","VÖEST_Linz","FC_Red_Bull_Salzburg","FC_Admira_Wacker_Mödling","SK_Bischofshofen","SV_Admira_Wiener_Neustadt","Radenthein/Villacher_SV","SC_Neusiedl_am_See_1919","Union_Wels","FC_St._Veit","SV_Spittal/Drau","FC_Swarovski_Tirol","SKN_St._Pölten","FC_Linz","FC_Tirol_Innsbruck","SV_Ried","SC_Austria_Lustenau","ASKÖ_Pasching","SV_Mattersburg","FC_Wacker_Innsbruck_(2002)","SC_Rheindorf_Altach","SK_Austria_Kärnten","1._Wiener_Neustädter_SC_(2008)","Wolfsberger_AC","SV_Grödig","TSV_Hartberg","SK_Austria_Klagenfurt_(2007)","FC_Blau-Weiß_Linz","Salzburger_AK"];

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