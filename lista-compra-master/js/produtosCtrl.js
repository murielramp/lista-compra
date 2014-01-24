(function () {
    "use strict";
}());

var aplic = angular.module('listacompra',[]);
aplic.controller('listaCtrl', function listaCtrl($scope,$filter){

    $scope.lista = $scope.listaNome = $scope.listaData = $scope.produtosListas = $scope.listasProdutos =
    $scope.produto = $scope.produtoNome = $scope.produtoPreco = $scope.produtoQuant = $scope.produtoImagem = $scope.imagemUrl =
    $scope.imagemExibe = '' ;

    $scope.listasProdutos = [{
        codigo :0,
        nome: 'Lista de churrasco',
        data: '2014-01-01'
    }];

    $scope.produtosListas = [{

        cod_lista:0,
        codigo :0,
        produto: 'Picanha',
        preco : 18.99,
        quantidade: 1,
        img : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSJrdmaZ7Uf_o_js1vzJ4SnTYQnDEXV3Epo671HlNnaoRvEs0h0w'

    }];

    $scope.addLista = function (cd){
        if ($scope.listaNome === ''){
            return;
        }
        if (cd === ''){
            if ($scope.listasProdutos.length < 1){
                var cod = 0;
            }else {
                var cod = $scope.listasProdutos[$scope.listasProdutos.length - 1].codigo;
            }
            cod++;
            $scope.listasProdutos.push({
                codigo:cod,
                nome: $scope.listaNome,
                data: $scope.listaData
            });
        } else{
            var i;
            for(i = 0; i< $scope.listasProdutos.length;i++){
                if($scope.listasProdutos[i].codigo === cd){
                    $scope.listasProdutos[i].codigo = cd;
                    $scope.listasProdutos[i].nome = $scope.listaNome;
                    $scope.listasProdutos[i].data = $scope.listaData;
                }

            }
        }
        $scope.lista = $scope.listaNome = $scope.listaData = '';
    };

    $scope.listaSelect = function (cd){
        $scope.lista = cd;
    };

    $scope.produtoListaSelect = function (cd){
        $scope.cod_lista = cd;
    };

    $scope.listaDelete = function (cd){
        var delAux = $scope.listasProdutos, i;
        $scope.listasProdutos = [];

        for(i = 0; i< delAux.length;i++){
            if(delAux[i].codigo !== cd){
                $scope.listasProdutos.push(delAux[i]);
            }
        }
        i=0;
        delAux = $scope.produtosListas;
        $scope.produtosListas = [];

        for(i = 0; i < delAux.length;i++){
            if(delAux[i].codigo !== cd){
                $scope.produtosListas.push(delAux[i]);
            }
        }

    };

    $scope.addProduto = function (cd){
        if($scope.produtoNome ===''){
            return;
        }
        if(cd ===''){
            return alert('Nenhuma lista selecionada.')
        }
        if($scope.produto ===''){
            var cod_aux;
            if($scope.produtosListas.length <1){
                cod_aux=0;
            }else {
                cod_aux = $scope.produtosListas[$scope.produtosListas.length -1].codigo;
            }
            cod_aux++;
            $scope.produtosListas.push({
                cod_lista: $scope.lista,
                codigo :cod_aux,
                produto: $scope.produtoNome,
                preco : $scope.produtoPreco,
                quantidade: $scope.produtoQuant,
                img : $scope.produtoImagem
            });
        }else{
            var i;
            for(i = 0;i<$scope.produtosListas.length;i++){
                if($scope.produtosListas[i].codigo === $scope.produto){
                    $scope.produtosListas[i].cod_lista = $scope.lista;
                    $scope.produtosListas[i].produto = $scope.produtoNome;
                    $scope.produtosListas[i].preco = $scope.produtoPreco;
                    $scope.produtosListas[i].quantidade = $scope.produtoQuant;
                    $scope.produtosListas[i].img = $scope.produtoImagem;
                }
            }
        }
        $scope.produto = $scope.produtoNome = $scope.produtoPreco = $scope.produtoQuant = $scope.produtoImagem = $scope.lista= '';
    };

    $scope.produtoDelete = function (cd){
        var delProdAux = $scope.produtosListas;
        var i;
        $scope.produtosListas = [];

        for(i = 0; i < delProdAux.length;i++){
            if(delProdAux[i].codigo !== cd){
                $scope.produtosListas.push(delProdAux[i]);
            }
        }
    };

    $scope.listaEdit = function (cd,nome,data){
        $scope.lista = cd;
        $scope.listaNome = nome;
        $scope.listaData = data;
    };

    $scope.retornaLista = function(cd){
        if(cd == null  || cd === ''){
            return -1;
        }else{
            return cd;
        }

    };

    $scope.cancelar = function(){
        $scope.lista = $scope.listaNome = $scope.listaData =
        $scope.produto = $scope.produtoNome = $scope.produtoPreco =
        $scope.produtoQuant = $scope.produtoImagem ='';

    };

    $scope.produtoEdit = function(cdlista,cd,prod,preco,quant,img){
        $scope.lista = cdlista;
        $scope.produto = cd;
        $scope.produtoNome = prod;
        $scope.produtoPreco = preco;
        $scope.produtoQuant = quant;
        $scope.produtoImagem = img;
    };

    $scope.produtoUrl = function(cd){
        $scope.produtoImagem = cd;
        $scope.imagemUrl ='';
    };

    $scope.retornaImagem = function(cd){
            $scope.imagemExibe = cd;

    };

    $scope.valorTotal = function(cd){
        var t= 0,i;
        for(i = 0; i < $scope.produtosListas.length; i++){
            if($scope.produtosListas[i].cod_lista === cd){
                t += $scope.produtosListas[i].preco * $scope.produtosListas[i].quantidade;
            }
        }
        return t;
    };

});

aplic.filter('imagemPadrao', function () {
    return function (input) {
        if (typeof (input) === 'undefined' || input === '') {
            return "img/angularjs.png";
        } else {
            return input;
        }
    };
});


// Menu
$(function () {
    $('#menu a:last').tab('show');
});

//Menu da guia consultas
$(function () {
    $('#consultaMenu a:first').tab('show');
});
