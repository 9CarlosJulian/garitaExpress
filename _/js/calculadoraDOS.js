function doCalc(){
	var total= 0;
		var costo= $('#costos').val();
		var peso = $('input[name="peso"]:checked').val();
		var tamano = $('input[name="tamano"]:checked').val();
		var cambio = $('input[name="moneda"]:checked').val();


if( peso == 'ligero' && tamano == 'chico' )
	{
	total= (costo*2);
		if ( cambio =='pesos'){
			total= (total*12.85);
			}//tipo de cambio
}
if ( peso == 'medio' && tamano == 'chico' )
	{
	total= (costo*3);
		if ( cambio =='pesos'){
			total= (total*12.85);
			}//tipo de cambio
	}
if ( peso == 'pesado' && tamano == 'chico' )
	{
		total= (costo*4);
			if ( cambio =='pesos'){
			total= (total*12.85);
			}//tipo de cambio
	}

$("#totals").html(total.toFixed(2));
}