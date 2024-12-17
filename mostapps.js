clubs = ["kf_tirana","KF_Skënderbeu_Korçë","fk_vllaznia_shkoder","KF_Teuta","KF_Elbasani","Flamurtari_FC","KF_Besa_Kavajë","KS_Pogradeci","KF_Besëlidhja_Lezhë","FK_Tomori_Berat","fk_partizani_tirana","KF_Luftëtari","FK_Apolonia_Fier","KF_Erzeni_Shijak","FC_Dinamo_City","Spartaku_Shkodër","KF_Naftëtari","Luftëtari_i_Sh.B.O.__Enver_Hoxha_","Dinamo_Durrësi","KF_Spartak_Tirana","Dinamo_Shkodra","KF_Tekstilisti_Stalin","KF_Lushnja","KF_Korabi_Peshkopi","Shkëndija_Tiranë","KS_Studenti","KF_Albpetrol_Patos","KF_Burreli","KF_Përmeti","KF_Kastrioti_Krujë","KF_Laçi","KF_Selenica","KF_Sopoti_Librazhd","KF_Shkumbini_Peqin","KF_Iliria_Fushë-Krujë","KF_Bylis","KF_Egnatia","FC_Gramozi","FC_Kamza","FK_Kukësi","KF_Tërbuni_Pukë","AF_Elbasani"];

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