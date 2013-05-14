function doCalc(){
	var total= 0;
		var costo= $('#costos').val();
		var cantidad = $('#cantidad option:selected').val();
		var peso = $('input[name="peso"]:checked').val();
		var tamano = $('input[name="tamano"]:checked').val();
		var cambio = $('input[name="moneda"]:checked').val();
		var ciudad = $('input[name="ciudad"]:checked').val();
		var siete= 7;
		var dos= 2;
		var cuatro= 4;
		var cinco= 5;
		var seis= 6;
		var ocho= 8;
		var diez= 10;
		var doce= 12;
		var quince=15;
		var veinte= 20;
		var veinticinco= 25;
		var dieciseis= 16;
		var veintitres= 23;
		var treinta= 30;
		var importa= 0;

if( ciudad == 'tijuana'){

if( cantidad == 'uno' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco);
			}
			else {
				total= costo*.10+parseInt(costo);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso ligero Tamano chico
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'ligero' && tamano == 'mediano' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'ligero' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'ligero' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso ligero Tamano mediano
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'ligero' && tamano == 'grande' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'ligero' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'ligero' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso ligero tamano grande
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'medio' && tamano == 'chico' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'medio' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'medio' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'medio' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(cinco);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(cinco);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(cinco);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Medio Tamano chico
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'medio' && tamano == 'mediano' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'medio' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'medio' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'medio' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Medio Tamano Mediano
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'medio' && tamano == 'grande' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'medio' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'medio' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'medio' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Medio Tamano Grande
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'pesado' && tamano == 'chico' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'pesado' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'pesado' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'chico' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Pesado Tamano chico
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

if( cantidad == 'uno' && peso == 'pesado' && tamano == 'mediano' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'pesado' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'pesado' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'mediano' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(quince);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(quince);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(quince);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Pesado Tamano Mediano
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
if( cantidad == 'uno' && peso == 'pesado' && tamano == 'grande' )
	{
		if (costo <= 20) {
	total= parseInt(costo)+parseInt(siete)+parseInt(veinte);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(veinte);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(veinte);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(veinte);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}

if( cantidad == 'dos' && peso == 'pesado' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(veinte);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(veinte);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(veinte);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(veinte);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'tres' && peso == 'pesado' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(veinte);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(veinte);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(veinte);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(veinte);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(veinte);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(veinte);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(veinte);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(veinte);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'grande' )
	{
		if (costo <= 20) {
			total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(veinte);
			}
			else if (costo > 20 && costo <= 70) {
				total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(veinte);
			}
			else if (costo > 70 && costo <= 150){
				total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(veinte);
			}
			else if (costo > 150 && costo <= 250){
				total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(veinte);
			}
			else {
				total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(veinte);
			}
		if ( cambio =='pesos'){
			total= (total*13);
			}//tipo de cambio
}
/////////////////////////////////////////////////////Tijuana Peso Pesado Tamano grande
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

}
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// RESTO DEL PAIS
/////////////////////////////////////////////////////
if ( ciudad == 'resto'){
	importa=costo*.11
	if( cantidad == 'uno' && peso == 'ligero' && tamano == 'chico' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'ligero' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'ligero' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso ligero Tamano chico
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'ligero' && tamano == 'mediano' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'ligero' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'ligero' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso ligero Tamano mediano
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'ligero' && tamano == 'grande' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'ligero' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'ligero' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'ligero' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'ligero' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(dieciseis);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso ligero tamano grande
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'medio' && tamano == 'chico' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'medio' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'medio' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'medio' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(cinco)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso Medio Tamano chico
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'medio' && tamano == 'mediano' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'medio' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'medio' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'medio' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso Medio Tamano Mediano
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'medio' && tamano == 'grande' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'medio' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'medio' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'medio' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'medio' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(veintitres);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso Medio Tamano Grande
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'pesado' && tamano == 'chico' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'pesado' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'pesado' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'chico' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(diez)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Tijuana Peso Pesado Tamano chico
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////

	if( cantidad == 'uno' && peso == 'pesado' && tamano == 'mediano' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'pesado' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'pesado' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'mediano' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(quince)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Peso Pesado Tamano Mediano
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	if( cantidad == 'uno' && peso == 'pesado' && tamano == 'grande' )
		{
			if (costo <= 20) {
		total= parseInt(costo)+parseInt(siete)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}

	if( cantidad == 'dos' && peso == 'pesado' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(dos)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(dos)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(dos)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(dos)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(dos)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'tres' && peso == 'pesado' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(cuatro)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(cuatro)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(cuatro)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(cuatro)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(cuatro)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cuatro' && peso == 'pesado' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(seis)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(seis)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(seis)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(seis)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(seis)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	if( cantidad == 'cinco' && peso == 'pesado' && tamano == 'grande' )
		{
			if (costo <= 20) {
				total= parseInt(costo)+parseInt(siete)+parseInt(ocho)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 20 && costo <= 70) {
					total= parseInt(costo)+parseInt(doce)+parseInt(ocho)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 70 && costo <= 150){
					total= parseInt(costo)+parseInt(veinte)+parseInt(ocho)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else if (costo > 150 && costo <= 250){
					total= parseInt(costo)+parseInt(veinticinco)+parseInt(ocho)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
				else {
					total= costo*.10+parseInt(costo)+parseInt(ocho)+parseInt(veinte)+parseInt(importa)+parseInt(treinta);
				}
			if ( cambio =='pesos'){
				total= (total*13);
				}//tipo de cambio
	}
	/////////////////////////////////////////////////////Peso Pesado Tamano grande
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
}




/////////////////////////////////////////////////////Total
$("#totals").html(total.toFixed(2));
}