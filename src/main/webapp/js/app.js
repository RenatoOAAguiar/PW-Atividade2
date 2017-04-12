$('document').ready(function(){
     $('#peso').mask("#00.00", {reverse: true});
     $('#altura').mask("#0.00" , {reverse: true});
});

var listaCampos = ['peso', 'altura', 'sexo'];
var tabelaHomens = [20.7,26.4,27.8,31.1];
var tabelaMulheres = [19.1,25.8,27.3,32.3];


function calcularPeso(){
    if(validarCamposObrigatorios()){
        $('.alert').addClass('hide');
        var peso = $('#peso').val();
        var altura = $('#altura').val();
        var sexo = $('#sexo').val();
        var imc = calcularImc(peso,altura);
        var mensagem = verificarImc(imc,sexo);
        $('#result').html(mensagem);
        $('#modalResultado').modal('show');
        
    }
    else{
        $('.alert').removeClass('hide');
    }
}


function validarCamposObrigatorios(){
    var retorno = true;
    listaCampos.forEach(function(campo){
        if($('#'+campo).val() == ''){
            retorno  = false;
        }
    });

    return retorno;
}


function calcularImc(peso,altura){
    return (peso/(altura*altura));
}

function verificarImc(imc,sexo){
    var tabela = [];
    var mensagem = '';
    if(sexo == 'M'){
        tabela = tabelaHomens;
    } else{
        tabela = tabelaMulheres;
    }
    if(imc < tabela[0]){
        mensagem = "Abaixo do peso";
    } else if( imc >= tabela[0] && imc <= tabela[1]){
        mensagem = "No peso normal";
    } else if( imc >= tabela[1] && imc <= tabela[2]){
        mensagem = "Pouco acima do peso";
    } else if( imc >= tabela[2] && imc <= tabela[3]){
        mensagem = "Acima do peso ideal";
    } else if( imc >= tabela[3]) {
        mensagem = "Obeso";
    }

    return mensagem;
}

function fecharModal(){
    $('#modalResultado').modal('hide');
     var peso = $('#peso').val('');
     var altura = $('#altura').val('');
     var sexo = $('#sexo').val('');
}