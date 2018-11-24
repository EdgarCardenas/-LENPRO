//Funciona
function llenarEscalaResultado(){
	var seleccion = document.getElementById("escalaOriginal").value;
	switch(seleccion){
		case "":
		document.getElementById("escalaResultado").innerHTML = "";
		break;
		case "celsius":
			document.getElementById("escalaResultado").innerHTML = `
			<option value="" selected>-Selecciona una temperatura-</option>
			
			<option value="fahrenheit">Fahrenheit</option>
			<option value="kelvin">Kelvin</option>
			<option value="rankine">Rankine</option>
			`;
		break;
		case "fahrenheit":
			document.getElementById("escalaResultado").innerHTML = `
			<option value="" selected>-Selecciona una temperatura-</option>
			<option value="celsius">Celsius</option>
			
			<option value="kelvin">Kelvin</option>
			<option value="rankine">Rankine</option>
			`;
		break;
		case "kelvin":
			document.getElementById("escalaResultado").innerHTML = `
			<option value="" selected>-Selecciona una temperatura-</option>
			<option value="celsius">Celsius</option>
			<option value="fahrenheit">Fahrenheit</option>
			
			<option value="rankine">Rankine</option>
			`;
		break;
		case "rankine":
			document.getElementById("escalaResultado").innerHTML = `
			<option value="" selected>-Selecciona una temperatura-</option>
			<option value="celsius">Celsius</option>
			<option value="fahrenheit">Fahrenheit</option>
			<option value="kelvin">Kelvin</option>
			
			`;
		break;
	}
}

//En proceso
function validarEscalas(escalaOriginal,escalaResultado){
	if(escalaOriginal == "" || escalaResultado == ""){
		return false;
	}
	else{
		return true;
	}
}

function validarTemperatura(escalaOriginal,tempOriginal){
	var prueba;
	if(isNaN(tempOriginal)){
		return false;
	}
	switch(escalaOriginal){//Convertir a kelvin para validar
		case "celsius":
			if(tempOriginal > -273.15){
				return true;	
			}
		break;
		case "fahrenheit":
			if(tempOriginal > -459.67){
				return true;
			}
		break;
		case "kelvin":
		case "rankine":
			if(tempOriginal > 0){
				return true;
			}
		break;
	}
	return false;
}

function convertir() {
	var escalaOriginal = document.getElementById("escalaOriginal").value;
	var tempOriginal = document.getElementById("tempOriginal").value;
	tempOriginal = parseFloat(tempOriginal); //Especificar que es un numero
	var escalaResultado = document.getElementById("escalaResultado").value;
	var tempResultado;
	if(validarEscalas(escalaOriginal,escalaResultado)){
		if(validarTemperatura(escalaOriginal,tempOriginal)){
			//Conversiones
			switch(escalaOriginal){
				case "celsius":
					switch(escalaResultado){
						case "fahrenheit":
							tempResultado = (tempOriginal*1.8)+32;
						break;
						case "kelvin":
							tempResultado = tempOriginal+273.15;
						break;
						case "rankine":
							tempResultado = (9*tempOriginal)/5 + 491.67;
						break;
					}
				break;
				case "fahrenheit":
					switch(escalaResultado){
						case "celsius":
							tempResultado = (tempOriginal-32)/1.8;
						break;
						case "kelvin":
							tempResultado = (5/9)*(tempOriginal-32)+273.15;
						break;
						case "rankine":
							tempResultado = tempOriginal + 459.67;
						break;
					}
				break;
				case "kelvin":
					switch(escalaResultado){
						case "celsius":
							tempResultado = tempOriginal-273.15;
						break;
						case "fahrenheit":
							tempResultado = 1.8*(tempOriginal-273.15)+32;
						break;
						case "rankine":
							tempResultado = tempOriginal*1.8;
						break;
					}
				break;
				case "rankine":
					switch(escalaResultado){
						case "celsius":
							tempResultado = (5*(tempOriginal-491.67))/9
						break;
						case "fahrenheit":
							tempResultado = tempOriginal-459.67;
						break;
						case "kelvin":
							tempResultado = (5*(tempOriginal-491.67))/9 +273.15;
						break;
					}
				break;
			}
			document.getElementById("tempResultado").value = tempResultado;
		}
		else{
			alert("La temperatura que ingreso no es valida, vuelva a intentarlo.");
			document.getElementById("tempOriginal").value  = "";
		}
	}
	else{
		alert("Las escalas son incorrectas, vuelva a intentarlo.");
		document.getElementById("escalaOriginal").selectedIndex = "0";
		document.getElementById("escalaResultado").innerHTML = "";
	}
}

