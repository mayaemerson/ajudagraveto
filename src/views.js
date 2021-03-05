function doGet(e) {
  return loadFormCadastro ()
  }
  var  wscbproduto = wsprodutos.getRange(2, 2, wsprodutos.getRange('B2').getDataRegion().getLastRow(), 1).getValues()
  var dproduto = wscbproduto
  .map(function (r) {
    return '<option>' + r[0] + '</opton>'
  })
  .join('')

  function loadFormCadastro(){
    return render('index', {
      prodrop: dproduto,
    })
  }
