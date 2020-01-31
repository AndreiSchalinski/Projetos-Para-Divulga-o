function validarFormulario() {

	if (document.formularioPedido.textoName.value == "") {

		alert("Preencha o campo com seu Nome!");
		document.formularioPedido.textoName.focus();
		return false;
	}

	if (document.formularioPedido.datePedido.value == "") {

		alert("Prencha o campo com a data para Entrega!");
		document.formularioPedido.datePedido.focus();
		return false;
	}

	if (document.formularioPedido.horaEntrega.value == "") {
		alert("Preencha o campo com a hora de Entrega!");
		document.formularioPedido.horaEntrega.focus();
		return false;
	}

	if (document.formularioPedido.quantidadePedidos.value == "") {

		alert("Informe quantidade do pedido!");
		document.formularioPedido.quantidadePedidos.focus();
		return false;
	}

	if (document.formularioPedido.quantidadePedidos.value < 0) {

		alert("Quantidade informada é inválida!");
		document.formularioPedido.quantidadePedidos.focus();
		return false;
	}

	if (document.formularioPedido.quantidadePedidos.value > 300) {

		alert("Quantidade informada é inválida!");
		document.formularioPedido.quantidadePedidos.focus();
		return false;
	}
	if (document.formularioPedido.opcoesProduto.value == "") {
		alert("Escolha uma opção para Quitutes!");

		return false;
	}

	if (document.formularioPedido.coletarProduto.checked == false
			&& document.formularioPedido.enderecoEntrega.value == "") {
		alert("É necessário preencher o campo de tipo de entrega OU informar endereço para entrega!");
		document.formularioPedido.enderecoEntrega.focus();
		return false;
		
	}
	
	if (document.formularioPedido.numeroTelefone.value == "") {
		alert("Informe o número de telefone!");
		document.formularioPedido.numeroTelefone.focus();
		return false;
	}


	var telefoneColetado = document.formularioPedido.numeroTelefone.value;
	var expRegTelefoneCelular = new RegExp("^([0-9]{9})+$");
	var expRegTelefoneResidencial = new RegExp("^([0-9]{8})+$");
	if (!expRegTelefoneCelular.test(telefoneColetado)
			&& !expRegTelefoneResidencial.test(telefoneColetado)) {
		alert("Favor informar telefone celular ou residencial corretamente!");
		document.formularioPedido.numeroTelefone.value = "";/*
															 * limpa o campo
															 * para informar
															 * novamente
															 */
		document.formularioPedido.numeroTelefone.focus();
		return false;
	}

	alert("Orçamento efetuado com sucesso!");

	return true;
}