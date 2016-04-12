/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{

	respuesta = 0;
	numeroUno =Math.floor( Math.random()*10)+1;
	document.getElementById('PrimerNumero').value=numeroUno;
	
	numeroDos =Math.floor( Math.random()*10)+1;
	document.getElementById('SegundoNumero').value=numeroDos;

	numeroOperacion =Math.floor( Math.random()*4)+1;
	
		switch(numeroOperacion)
		{
			case 1://suma
				document.getElementById('Operador').value='+';
				respuesta = numeroUno + numeroDos ;
				break;
			case 2://resta
				document.getElementById('Operador').value='-';
				respuesta = numeroUno - numeroDos ;
				break;
			case 3://division
				document.getElementById('Operador').value='/';
				respuesta = numeroUno / numeroDos ;	

				if(!Number.isInteger(respuesta))
				{
					respuesta = respuesta.toFixed(2);		
//				    alert (respuesta);
				}
				
				
				break;
			case 4://multiplicacion
				document.getElementById('Operador').value='*';
				respuesta = (numeroUno * numeroDos);
				break;
		}

}//FIN DE LA FUNCIÓN
function Responder()
{
	respUsuario=document.getElementById('Respuesta').value; 
	if (respUsuario == respuesta)
	{
		alert("El resultado es correcto... ");
		exit();
	} else { alert("El resultado no es correcto... "); 
				exit();}
	
//    comenzar();

}//FIN DE LA FUNCIÓN
