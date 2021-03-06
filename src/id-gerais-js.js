function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function NovoPedidoId(){

  getRndNumber()
  var NiD = getRndNumber(1, 99999)
   var id = ("0000" + NiD).slice(-5)
   var idss ={};
   idss.idPd = "PD" + Ano + Dia +  id + segundos + "SC"
   idss.idCd = "CT" + Ano + Dia + id + segundos + "SC"
return ([ idss.idPd, idss.idCd])
 
}