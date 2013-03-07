function doCalc(){
	var total= 0;
		var costo= $('#costos').val();
		var cantidad = $('input[name="cantidad"]:checked').val();
		var peso = $('input[name="peso"]:checked').val();
		var tamano = $('input[name="tamano"]:checked').val();
		var cambio = $('input[name="moneda"]:checked').val();
		var ciudad = $('input[name="ciudad"]:checked').val();
		var siete= 7;
		var dos= 2;
		var cinco= 5;
		var doce= 12;
		var veinte= 20;
		var veinticinco= 25;


if( ciudad == 'tijuana' &&	cantidad == 'uno' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo < 250) {
	total= parseInt(costo)+parseInt(siete);
			}
			else if (costo > 150) {
				total= parseInt(costo)+parseInt(veinticinco);
			}
			else {
				total= parseInt(costo)+parseInt(doce);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if ( peso == 'medio' && tamano == 'chico' )
	{
	total= (costo*3);
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
	}
if ( peso == 'pesado' && tamano == 'chico' )
	{
		total= (costo*4);
			if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
	}

$("#totals").html(total.toFixed(2));
}