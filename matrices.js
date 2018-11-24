var div1 = document.getElementById("suma_matrices");
var div2 = document.getElementById("multiplicacion_matrices");
var i, j;
var contador;
var m1suma = [];
var m2suma = [];
var mRsuma = [];
var id;
var intentos;
var m1 = "Matriz 1:<br>";
var m2 = "Matriz 2:<br>";
mR = "Matriz Resultado:<br>";
var m1multiplicacion = "Matriz 1:<br>";
var m2multiplicacion = "Matriz 2:<br>";
var mRmultiplicacion = "Matriz resultado: <br>";
reset();

//Suma de matrices
function calcularS(){
   var size_suma = document.getElementById("size_suma").value;
   //Crear la primera matriz para la suma
   if(valEntrada(size_suma) && size_suma> 0){
      contador = 0;
      for(i = 0; i < size_suma; ++i){
         for(j = 0; j < size_suma; ++j){
            intentos = 0;
            do{
               if(intentos != 0){
                  alert("El valor ingresado no es valido, vuelva a intentarlo");
               }
               m1suma[contador] = prompt("MATRIZ 1 Valor posicion: " +(i+1)+","+(j+1));
               intentos = 1;
            }while(!valEntrada(m1suma[contador]));
            ++contador;
         }
      }
      contador=0;
      for(i = 0; i < size_suma; ++i){
         for(j = 0; j < size_suma; ++j){
            intentos = 0;
            do{
               if(intentos != 0){
                  alert("El valor ingresado no es valido, vuelva a intentarlo");
               }
               m2suma[contador] = prompt("MATRIZ 2 Valor posicion: " +(i+1)+","+(j+1));
               intentos = 1;
            }while(!valEntrada(m2suma[contador]));
            ++contador;
         }
      }

      //Calcular matriz resultado
      for(i = 0; i < (size_suma*size_suma); ++i){
         mRsuma[i] = parseInt(m1suma[i]) + parseInt(m2suma[i]);
      }

      //Imprimir matrices
      contador = 0;
      for(i = 0; i < size_suma; ++i){
         for(j = 0; j < size_suma; ++j){
            
            m1 += "<input id=\"m1_suma_" +i+j+" \" size=\"3\" readonly value =\""+m1suma[contador]+"\">";
            ++contador;
         }
         m1 += "<br>";
      }

      contador = 0;
      for(i = 0; i < size_suma; ++i){
         for(j = 0; j < size_suma; ++j){
            m2 += "<input id=\"m2_suma_" +i+j+" \" size=\"3\" readonly value =\""+m2suma[contador]+"\">";
            ++contador;
         }
         m2 += "<br>";
      }

      contador = 0;
      for(i = 0; i < size_suma; ++i){
         for(j = 0; j < size_suma; ++j){
            mR += "<input id=\"m2_suma_" +i+j+" \" size=\"3\" readonly value =\""+mRsuma[contador]+"\">";
            ++contador;
         }
         mR += "<br>";
      }
      document.getElementById("m1_suma").innerHTML = m1;
      document.getElementById("m2_suma").innerHTML = m2;
      document.getElementById("mR_suma").innerHTML = mR;
   }
   else{
      alert("El valor no es un tamaño valido.");
      reset();
   }
   m1 = "Matriz 1:<br>";
   m2 = "Matriz 2:<br>";
   mR = "Matriz Resultado:<br>";
}

//Multiplicacion de matrices
function calcularM(){
   var fmatrizA = document.getElementById("fmatrizA").value;
   var cmatrizA = document.getElementById("cmatrizA").value;
   var fmatrizB = document.getElementById("fmatrizB").value;
   var cmatrizB = document.getElementById("cmatrizB").value;

   if(valEntrada(fmatrizA) && valEntrada(fmatrizB) && valEntrada(cmatrizA) && valEntrada(cmatrizB) && (cmatrizA == fmatrizB)){
      alert("Multiplicacion valida");
      //Generar matriz 1 y 2
      var m1_multi = new Array(fmatrizA);
      for (i = 0; i < fmatrizA; ++i){
         m1_multi[i]=new Array(cmatrizA);
      }
      
      var m2_multi = new Array(fmatrizB);
      for (i = 0; i < fmatrizB; ++i){
         m2_multi[i]=new Array(cmatrizB);
      }

      var mR_multi = new Array(fmatrizA);
      for(i = 0; i < fmatrizA; ++i){
         mR_multi[i] = new Array(cmatrizB);
      }
      //Inicializar matriz resultado en 0
      for(i = 0; i < fmatrizA; ++i){
         for(j =0; j < cmatrizB; ++j){
            mR_multi[i][j] = 0;
         }
      }

      //Llenar las 2 matrices
      for(i = 0; i <fmatrizA; ++i){
         for(j = 0; j <cmatrizA; ++j){
            m1_multi[i][j] = prompt("Matriz 1 Valor posicion "+(i+1)+(j+1));
         }
      }
      for(i = 0; i <fmatrizB; ++i){
         for(j = 0; j <cmatrizB; ++j){
            m2_multi[i][j] = prompt("Matriz 2 Valor posicion "+(i+1)+(j+1));
         }
      }

      //Resolver
      var k;
      
      for (i=0;i<fmatrizA;++i){
         for (j=0;j<cmatrizB;++j){
           for (k=0;k<cmatrizA;++k){
               mR_multi[i][j]+= m1_multi[i][k]*m2_multi[k][j]; 
            }
         }
      }

      //Mostrar matrices
      //Matriz 1
      for(i = 0; i < fmatrizA; ++i){
         for(j = 0; j < cmatrizA; ++j){
            m1multiplicacion += "<input size=\"3\" value=\""+ m1_multi[i][j]+"\">"
         }
         m1multiplicacion += "<br>"
      }
      //Matriz 2
      for(i = 0; i < fmatrizB; ++i){
         for(j = 0; j < cmatrizB; ++j){
            m2multiplicacion += "<input size=\"3\" value=\""+ m2_multi[i][j]+"\">"
         }
         m2multiplicacion += "<br>"
      }
      //Matriz resultado
      for(i = 0; i < fmatrizA; ++i){
         for(j = 0; j < cmatrizB; ++j){
            mRmultiplicacion += "<input size=\"3\" value=\""+ mR_multi[i][j]+"\">"
         }
         mRmultiplicacion += "<br>"
      }
      document.getElementById("m1_multiplicacion").innerHTML = m1multiplicacion;
      document.getElementById("m2_multiplicacion").innerHTML = m2multiplicacion;
      document.getElementById("mR_multiplicacion").innerHTML = mRmultiplicacion;
   }
   else{
      alert("No has ingresado dimensiones validas para la multiplicacion");
      reset();
   }
   m1multiplicacion = "Matriz 1:<br>";
   m2multiplicacion = "Matriz 2:<br>";
   mRmultiplicacion = "Matriz resultado: <br>";
}

//Funciones auxiliares
function mostrarFormulario(){
   var operacion = document.getElementById("operacion").value;
   if(operacion == "suma"){
      div2.style.display = "none";
      div1.style.display ="block";
   }
   else if(operacion == "multiplicacion"){
      div1.style.display = "none";
      div2.style.display ="block";
   }
   else{
      reset();
   }
}

function reset(){
   document.getElementById("operacion").selectedIndex = "0";
   div1.style.display = "none";
   div2.style.display = "none";
   //Suma
   document.getElementById("size_suma").value="";
   document.getElementById("m1_suma").innerHTML=m1;
   document.getElementById("m2_suma").innerHTML=m2;
   document.getElementById("mR_suma").innerHTML=mR;
   //Multiplicacion
   document.getElementById("fmatrizA").value = "";
   document.getElementById("cmatrizA").value = "";
   document.getElementById("fmatrizB").value = "";
   document.getElementById("cmatrizB").value = "";
   document.getElementById("m1_multiplicacion").innerHTML=m1multiplicacion;
   document.getElementById("m2_multiplicacion").innerHTML=m2multiplicacion;
   document.getElementById("mR_multiplicacion").innerHTML=mRmultiplicacion;
}

function valEntrada(entrada){
   if(isNaN(entrada)){
      return false;
   }
   else if(entrada == parseInt(entrada,10)){
      return true;
   }
}