/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	numeroSecreto =Math.floor( Math.random()*3)+1;	
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;
		}
	//alert(eleccionMaquina);	


}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("La maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";

	if(eleccionHumano==eleccionMaquina)
	{
		alert("Empató.");	
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("Ganó.");
	}
	else
	{
		alert("Perdió.");	
	}

//comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("La maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";

	if(eleccionHumano==eleccionMaquina)
	{
		alert("Empató.");

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("Ganó.");
	}
	else
	{
		alert("Perdió.");
	}



}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("La maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";

	if(eleccionHumano==eleccionMaquina)
	{
		alert("Empató.");
	}
	else if(eleccionMaquina=="papel")
	{
		alert("Ganó.");
	}
	else
	{
		alert("Perdió.");
	}

}//FIN DE LA FUNCIÓN