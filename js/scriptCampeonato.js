$(document).ready(function() {
	$("#butget").click(function() {
		$.getJSON("http://bolaoshow.herokuapp.com/service/campeonatos", function(data) {
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#table > tbody").append('<tr><td>'+ value.nome +'</td><td>'+ value.ano +'</td><td>'+ value.descricao + '</tr>');
  				});
			});
		})
	});

	$("#butpost").click(function(){
		var j = {"nome":$("#nome").val(), "ano":$("#ano").val(), "descricao":$("#descricao").val()};

		$.ajax ({
			type: "POST",
    		url: "http://bolaoshow.herokuapp.com/service/campeonatos",
    		data: JSON.stringify(j),
    		processData: true,
    		contentType: "application/json"
		});

		$("#tabela > tbody").html("");
		alert($("#nome").val()+ " adicionado com sucesso! Use o get e o verá na tabela.");
	});
});