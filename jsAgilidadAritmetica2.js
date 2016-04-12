/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
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
				respuesta = numeroUno / numeroDos;
				break;
			case 4://multiplicacion
				document.getElementById('Operador').value='*';
				respuesta = numeroUno * numeroDos ;
				break;
		}
}//FIN DE LA FUNCIÓN
function Responder()
{
	
temporizador = 5000;
	setTimeout(mostrarAlerta, temporizador);
	alert(setTimeout());

	
		respUsuario=document.getElementById('Respuesta').value; 
		if (respUsuario == respuesta)
		{
			alert("El resultado es correcto... ");
		} else 
				{ 
					alert("El resultado no es correcto... "); 
				}		

}//FIN DE LA FUNCIÓN

function mostrarAlerta() 
{
	alert('Han pasado 5 segundos desde la carga de la página');
	comenzar();
}