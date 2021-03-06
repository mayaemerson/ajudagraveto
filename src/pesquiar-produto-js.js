function pesquisarproduto(codpesquisa){
 
  const lpesquisa = wsprodutos.getRange(2,1,wsprodutos.getLastRow()).getValues()
  Logger.log(lpesquisa)
  
  const result = lpesquisa.pesquisapd(codpesquisa)
  var Linha = result + 2
  if (result !=-1){
    var carregar={};
    // wsdash.getRange(2,14).setValue("P")
    carregar.idpd = wsprodutos.getRange(Linha, 7).getValue()
    carregar.tipo = wsprodutos.getRange(Linha, 2).getValue()
    carregar.descricao = wsprodutos.getRange(Linha, 3).getValue()
    carregar.unid= wsprodutos.getRange(Linha, 4).getValue()
    carregar.vunit = wsprodutos.getRange(Linha, 5).getValue()
    carregar.estoque = wsprodutos.getRange(Linha, 6).getValue()

    return ([carregar.idpd,carregar.tipo,carregar.descricao,carregar.unid,carregar.vunit,carregar.estoque])

    
  }else{
    return 'Sretorno'
  }
  
 
}




