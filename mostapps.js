clubs = ["FC_Encamp","CE_Principat","fc_santa_coloma","FC_Aldosa","sporting_club_d_engordany","Inter_Club_d%27Escaldes","ue_sant_julia","Spordany_Juvenil","Costruccions_Emprimo","FC_Andorra","Sporting_Club_d%27Escaldes","Deportivo_La_Massana","UE_Les_Bons","Gimnàstic_Valira","FC_Engolasters","CE_Benito","Constel·lació_Esportiva","UE_Extremenya","FC_Lusitanos","FC_Rànger%27s","UE_Engordany","Atlètic_Club_d%27Escaldes","Casa_Estrella_del_Benfica","UE_Santa_Coloma","FC_Ordino","Penya_Encarnada_d%27Andorra","CE_Jenlai","CE_Carroi","FC_Pas_de_la_Casa","CF_Esperança_d%27Andorra","CF_Atlètic_Amèrica"];

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