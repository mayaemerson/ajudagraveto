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
  
  var nomeFantasia = wsconfig.getRange(2,3).getValue()
  var endereco = wsconfig.getRange(2,7).getValue()
  var num = wsconfig.getRange(2,8).getValue()
  var complemento = wsconfig.getRange(2,9).getValue()
  var bairro = wsconfig.getRange(2,10).getValue()
  var Cidade = wsconfig.getRange(2,11).getValue()
  var uf = wsconfig.getRange(2,12).getValue()
  var celular = wsconfig.getRange(2,14).getValue()
  var email = wsconfig.getRange(2,15).getValue()


  function loadFormCadastro(){
    return render('index', {
      prodrop: dproduto,
      cmpquat: cmqt,
      nomeFantasia:nomeFantasia,
    })
  }
