$(document).ready(function() {
	$("#butget").click(function() {
		$.getJSON("http://bolaoshow.herokuapp.com/service/clubes", function(data) {
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#table > tbody").append('<tr><td>'+ value.nome +'</td><td>'+ value.escudo +'</td><td>'+ value.clube + '</tr>');
  				});
			});
		})
	});

	$("#butpost").click(function(){
		var j = {"nome":$("#nomeClube").val()};

		$.ajax ({
			type: "POST",
    		url: "http://bolaoshow.herokuapp.com/service/clubes",
    		data: JSON.stringify(j),
    		processData: true,
    		contentType: "application/json"
		});

		$("#tabela > tbody").html("");
		alert($("#nomeClube").val()+ " adicionado com sucesso! Use o get e o verá na tabela.");
	});
});