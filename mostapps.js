clubs = ["FC_Ararat_Yerevan","shirak_sc","FC_Urartu","FC_Pyunik","FC_Van_Yerevan","Araks_Ararat_FC","Erebuni-Homenmen_FC","Yerazank_FC","Nairi_SC","Arabkir_FC","FC_Kotayk","Impuls_FC","BMA-Arai_Echmiadzin","Kasakh_FC","FC_Malatia","FC_Lernagorts_Kapan","Aznavour_FC","FC_Zangezour","Lori_FC","FC_Yerevan","Lernayin_Artsakh_FC","Aragats_Gyumri_FC","FC_BKMA_Yerevan","FC_Dvin_Artashat","Zvartnots-AAL_FC","Kilikia_FC","FC_Mika","FC_Dinamo_Yerevan","Spartak_Yerevan_FC","Ulisses_FC","FC_Armavir_(Armenia)","FC_Gandzasar_Kapan","FC_Alashkert","FC_Ararat-Armenia","FC_Noah","FC_Van","Noravank_SC","Sevan_FC","FC_West_Armenia"];

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