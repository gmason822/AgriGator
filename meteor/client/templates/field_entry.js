$("#task").change(function() {
	if ($("#task").value() === "planting"){
		$("#bed_plant").css("display", "block");
	}
});

$("#soil_check").click(function() {
	if($("#soil_check").is(':checked')){
		$('#soil_info').css("display","block");
	}
});

