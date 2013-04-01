$(document).ready(function() {
	$("#butget").click(function() {
		$.getJSON("http://bolaoshow.herokuapp.com/service/boloes", function(data) {
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#table > tbody").append('<tr><td>'+ value.nome +'</td><td>'+ value.descricao +'</td><td>'+ value.apostadores + '</td><td>'+ value.dataCriacao + '</tr><td>'+ value.campeonato + '</tr>');
  				});
			});
		})
	});

	$("#butpost").click(function(){
		var j = {"nome":$("#nomeBolao").val(), "descricao":$("#descricaoBolao").val(), "apostadores":{"nome":$("#ApostadoresBolao").val(),"email":"naotem@naotem.com","login":"admin","senha":"123","permissao":"faz tudo!"}, "campeonato":{"nome":$("#campeonatoolao").val(), "ano":"2013", "descricao":"E apoi!"}};

		$.ajax ({
			type: "POST",
    		url: "http://bolaoshow.herokuapp.com/service/boloes",
    		data: JSON.stringify(j),
    		processData: true,
    		contentType: "application/json"
		});

		$("#tabela > tbody").html("");
		alert($("#nomeBolao").val()+ " adicionado com sucesso! Use o get e o verá na tabela.");
	});
});