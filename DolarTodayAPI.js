$.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data){
  $('#DolarToday').html(`DolarToday: ${data.USD.transferencia}`);
  $('#VIP').html(`Sillas VIP Centrales: ${data.USD.transferencia.toFixed(0)*5}`);
  $('#Terreno').html(`Palco de terreno: ${data.USD.transferencia.toFixed(0)*3}`);
  $('#Laterales').html(`Sillas Laterales: ${data.USD.transferencia.toFixed(0)*1}`);
  $('#General').html(`Entrada General: ${data.USD.transferencia.toFixed(0)*0.5}`);
  $('#DolarAl').html('A la fecha de: '+data._timestamp.fecha);
    });   