/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto =Math.floor( Math.random()*100)+1;
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;

}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	
	if(numeroIngresado==numeroSecreto)
		{		
			switch(contadorIntentos)
			{
				case 1:
					alert("1º intento: usted es un psíquico");
					break;
				case 2:
					alert("2º intento: excelente percepción");
					break;
				case 3:
					alert("3º intento:Esto es suerte");
					break;
				case 4:
					alert("4º intento: Excelente técnica");
					break;
				case 5:
					alert("5º intento:usted está en la media");
					break;
				default:
					if(contadorIntentos<10)
					{
						alert("Desde  6 Intentos hasta 10: falta técnica");
					}
					else
					{
						alert("Más de 10 intentos: afortunado en el amor!!");
					}
					
					break;
			}		

		}
	else if(numeroIngresado<numeroSecreto)
		{
			alert("falta para llegar al numero secreto... ");
		} else { alert("se pasó del numero secreto... "); }
	
	

}