$(document).ready(function() {
	$("#butget").click(function() {
		$.getJSON("http://bolaoshow.herokuapp.com/service/jogos", function(data) {
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#table > tbody").append('<tr><td>'+ value.clubecasa +'</td><td>'+ value.clubevisitante +'</td><td>'+ value.numerorodada + '</tr><td>'+ value.campeonato+ '</tr>');
  				});
			});
		})
	});

	$("#butpost").click(function(){
		var j = {"clubecasa":{"clube":"36","escudo":"url","nome":"Tabajara Futebol Clube"},"clubevisitante":{"clube":38,"escudo":"url","nome":"Vasco Vice"},
		"numerorodada":$("#numerorodada").val(), "campeonato":{"ano":"2014","campeonato":37,"descricao":"Bom demais!","nome":"Campeonato do Vicente"}};

		$.ajax ({
			type: "POST",
    		url: "http://bolaoshow.herokuapp.com/service/jogos",
    		data: JSON.stringify(j),
    		processData: true,
    		contentType: "application/json"
		});

		$("#tabela > tbody").html("");
		alert($("#numerorodada").val()+ " adicionado com sucesso! Use o get e o verá na tabela.");
	});
});