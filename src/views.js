function doGet(e) {
  return loadFormCadastro ()
  }
  var  wscbproduto = wsprodutos.getRange(2, 1, wsprodutos.getRange('A2').getDataRegion().getLastRow(), 1).getValues()
  var dproduto = wscbproduto
  .map(function (r) {
    return '<option>' + r[0] + '</opton>'
  })
  .join('')
 
  var  cmbqt =  wsqt.getRange(1, 1,  wsqt.getRange('A1').getDataRegion().getLastRow(), 1).getValues()
  var cmqt = cmbqt
  .map(function (r) {
    return '<option>' + r[0] + '</opton>'
  })
  .join('')
  function loadFormCadastro(){
    return render('index', {
      prodrop: dproduto,
      cmpquat: cmqt,
    })
  }
