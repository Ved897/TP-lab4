/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
	EleccionColorSecreto =Math.floor( Math.random()*6)+1;
		
		switch(EleccionColorSecreto)
		{
			case 1:
				
				ColorSecreto="rojo";
				break;
			case 2:
				ColorSecreto="azul";
				break;
			case 3:
				ColorSecreto="verde";
				break;
			case 4:
				ColorSecreto="amarillo";
				break;
			case 5:
				ColorSecreto="marron";
				break;
			case 6:
				ColorSecreto="celeste";
				break;
			

		}
		
	document.getElementById('ColorElejido').value=ColorSecreto;

	tiempoInicio=  new Date();
// 	tiempoInicio=tiempoInicio.getTime();
	tiempoInicio = Math.round(tiempoInicio.getTime()/1000);
	
	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	alert(tiempoInicio);
	if(colorParametro==ColorSecreto)
		{
//			tiempoFinal= new Date();
//			tiempoFinal=tiempoFinal.getTime();
			tiempoFinal = Math.round((new Date()).getTime()/1000)
			resultado=tiempoFinal-tiempoInicio;
			alert("Su tiempo fue: "+resultado + " segundos");
		}
		else
		{
			alert("Boton Incorrecto");
		}


	


}//FIN DE LA FUNCIÓN
