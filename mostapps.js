clubs = [
"Turan_Tovuz","Qarabağ_FK","Kapaz_PFK","FK_Khazar_Sumgayit","Energetik_FK","FK_Viləş_Masallı","ANS_Pivani_Bakı_FK","neftci_pfk","Khazar_Lankaran_FK","İnşaatçı_Baku_FK","ABN_Barda","Khazri_Buzovna","Shahdag_Qusar_FK","Azeri_Baku_FK","Kürmük_Qakh_FK","Avtomobilçi_Yevlax_FK","FK_Pambiqci_Neftcala","MOIK_Baku","Shamkir_FC","FK_Fərid_Baku","FC_Baku","Azerbaijan_national_under-18_football_team","Bakılı_PFK","Shafa_Baku_FK","FK_Neftqaz_Bakı","Shamakhi_FK","Araz-Naxçıvan_PFK","Tefekkur_Universitesi_Baku","Adliyya_Baku","Lokomotiv_Imisli","Karvan_FK","Mil-Muğan_FK","Karat_Baki","Göyazan_Qazakh_FK","FK_Genclerbirliyi_Sumqayit","Shuvalan_FK","Simurq_PIK","Gabala_SC","FK_Standard_Sumgayit","Mughan_FK","Ravan_Baku_FK","Sumgayit_FK","Zira_FK","Sabail_FK","Sabah_FC_(Azerbaijan)"
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