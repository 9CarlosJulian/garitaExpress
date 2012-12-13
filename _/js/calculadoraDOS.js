function doCalc(){
	var total= 0;
		var costo= $('#costos').val();
		var peso = $('input[name="peso"]:checked').val();
		var tamano = $('input[name="tamano"]:checked').val();
if( peso == 'ligero' && tamano == 'chico' ){
	
	total= (costo*2);
}
if ( peso == 'medio' && tamano == 'chico' ){
	total= (costo*3);
}
if ( peso == 'pesado' && tamano == 'chico' ){
	total= (costo*4);
}
$("#totals").html(total.toFixed(2));
}