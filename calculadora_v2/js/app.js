//-----NOTA------//
/*En este ejercicio no logre inicializar las funciones dentro del objeto calculadora
funciones de onload. este mismo ejercicio lo realice sin el objeto calculadora y logre inicializar las funciones de
onload y teclado function(event) ya que tambien lo realice con la captura del teclado. acontiniacion muestro lo que no pude
hacerlo. quisiera que me ayuden con eso.
*/

/*var calculadora={
  document.onkeydown=this.teclado,
  teclado:function(event)
  {
    var tecla=event.which || event.keyCode;
  }
}*/


var calculadora={
  pantalla:document.querySelector(".pantalla #display"),
  x:"0",      //número en pantalla
  xi:1,       //iniciar número en pantalla: 1=si; 0=no;
  coma:0,     //estado coma decimal 0=no, 1=si;
  ni:0,       //número oculto o en espera.
  op:"no",    //operación en curso; "no" =  sin operación.
  num:0,        //
  digito1:0,  //contador de digitos
  signo:0,    //estado del signo 0=no 1=si
  sl:0,
  variable:0,

  mouse:function(valor)
  {
    if(valor>47 && valor<58)
    {
      this.digito1=this.digito1+1;
      if(this.digito1<9)
      {
        this.num=String.fromCharCode(valor);
        this.numero(this.num); //enviar para mostrar en pantalla
      }
    }
    if(valor==110)
    {
      //this.digito1=this.digito1+1;
      if(this.digito1<9)
      {
        this.numero(".")
      }
    }

    if(valor==106)
    {
      this.operar('*')
    }
    if(valor==107)
    {
      this.operar('+')
    }
    if(valor==109)
    {
      this.operar('-')
    }
    if(valor==111)
    {
      this.operar('/')
    }
    if(valor==13) //Tecla igual: enter
    {
      this.igualar()
    }
    if(valor==46) //Tecla borrado total: "supr"
    {
      this.borradoTotal()
    }
  },

  numero:function(xx)
  {
    if (this.x=="0" || this.xi==1)
    {
      this.digito1=1;
      this.pantalla.innerHTML=xx;
      this.x=xx;
      if (xx==".")
      {
        this.pantalla.innerHTML="0.";
        this.x=xx;
        this.coma=1;
      }
    }
    else
    {
      if (xx=="." && this.coma==0)
      {
        this.digito1=this.digito1+1;
        this.pantalla.innerHTML+=xx;
        this.x+=xx;
        this.coma=1;
      }
      else if (xx=="." && this.coma==1)
      {}
      else
      {
        this.pantalla.innerHTML+=xx;
        this.x+=xx
      }
    }
    this.xi=0
  },

  impsigno:function(xx) //colocar signo
  {
    if(xx=0)
    {
      this.x=-String(this.x);
    }
    else
    {
      this.x=-String(this.x);
    }
    this.pantalla.innerHTML=this.x;
  },

  operar:function(s)
  {
    this.igualar() //si hay operaciones pendientes se realizan primero
    this.ni=this.x      //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    this.op=s;     //guardamos tipo de operación.
    this.xi=1;     //inicializar pantalla.
    this.digito1=0;              //reinicia el conteo de los digitos
    this.coma=0;
  },

  igualar:function()
  {
    if (this.op=="no")           //no hay ninguna operación pendiente.
    {
      this.pantalla.innerHTML=this.x;	//mostramos el mismo número
    }
    else
    {
      this.sl=this.ni+this.op+this.x;        // escribimos la operación en una cadena
      this.sol=eval(this.sl);                //convertimos la cadena a código y resolvemos //eval
      this.sol=String(this.sol);
      this.sol=this.sol.substring(0,8);   //substring
      this.pantalla.innerHTML=this.sol;   //mostramos la soludión
      this.x=this.sol;                    //guardamos la solución
      this.op="no";                       //ya no hayn operaciones pendientes
      this.xi=1;                          //se puede reiniciar la pantalla.
    }
    this.digito1=0;              //reinicia el conteo de los digitos
  },

  borradoTotal:function()
  {
    this.pantalla.innerHTML=0;   //poner pantalla a 0
    this.x="0";                  //reiniciar número en pantalla
    this.coma=0;                 //reiniciar estado coma decimal
    this.ni=0                    //indicador de número oculto a 0;
    this.op="no"                 //borrar operación en curso.
    this.digito1=0;              //reinicia el conteo de los digitos
  }
}

document.getElementById('mas').addEventListener('mousedown',function()
{
  document.getElementById('mas').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('mas').addEventListener("click",function()
{
  document.getElementById('mas').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(107);
})

document.getElementById('menos').addEventListener('mousedown',function()
{
  document.getElementById('menos').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('menos').addEventListener("click",function()
{
  document.getElementById('menos').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(109);
})

document.getElementById('por').addEventListener('mousedown',function()
{
  document.getElementById('por').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('por').addEventListener("click",function()
{
  document.getElementById('por').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(106);
})

document.getElementById('dividido').addEventListener('mousedown',function()
{
  document.getElementById('dividido').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('dividido').addEventListener("click",function()
{
  document.getElementById('dividido').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(111);
})

document.getElementById('sign').addEventListener('mousedown',function()
{
  document.getElementById('sign').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('sign').addEventListener("click",function()
{
  document.getElementById('sign').setAttribute("style","transform:scale(1,1)")
  switch (calculadora.signo)
  {
    case 0: calculadora.signo=1;
            break;
    case 1: calculadora.signo=0;
            break;
  }
  calculadora.impsigno(calculadora.signo);
})

document.getElementById('on').addEventListener('mousedown',function()
{
  document.getElementById('on').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('on').addEventListener("click",function()
{
  document.getElementById('on').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(46);
})

document.getElementById('igual').addEventListener('mousedown',function()
{
  document.getElementById('igual').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('igual').addEventListener("click",function()
{
  document.getElementById('igual').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(13);
})

document.getElementById('punto').addEventListener('mousedown',function()
{
  document.getElementById('punto').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('punto').addEventListener("click",function()
{
  document.getElementById('punto').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(110);
})

document.getElementById('0').addEventListener('mousedown',function()
{
  document.getElementById('0').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('0').addEventListener("click",function()
{
  document.getElementById('0').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(48);
})

document.getElementById('1').addEventListener('mousedown',function()
{
  document.getElementById('1').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('1').addEventListener("click",function()
{
  document.getElementById('1').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(49);
})

document.getElementById('2').addEventListener('mousedown',function()
{
  document.getElementById('2').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('2').addEventListener("click",function()
{
  document.getElementById('2').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(50);
})

document.getElementById('3').addEventListener('mousedown',function()
{
  document.getElementById('3').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('3').addEventListener("click",function()
{
  document.getElementById('3').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(51);
})

document.getElementById('4').addEventListener('mousedown',function()
{
  document.getElementById('4').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('4').addEventListener("click",function()
{
  document.getElementById('4').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(52);
})

document.getElementById('5').addEventListener('mousedown',function()
{
  document.getElementById('5').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('5').addEventListener("click",function()
{
  document.getElementById('5').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(53);
})

document.getElementById('6').addEventListener('mousedown',function()
{
  document.getElementById('6').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('6').addEventListener("click",function()
{
  document.getElementById('6').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(54);
})

document.getElementById('7').addEventListener('mousedown',function()
{
  document.getElementById('7').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('7').addEventListener("click",function()
{
  document.getElementById('7').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(55);
})

document.getElementById('8').addEventListener('mousedown',function()
{
  document.getElementById('8').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('8').addEventListener("click",function()
{
  document.getElementById('8').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(56);
})

document.getElementById('9').addEventListener('mousedown',function()
{
  document.getElementById('9').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('9').addEventListener("click",function()
{
  document.getElementById('9').setAttribute("style","transform:scale(1,1)")
  calculadora.mouse(57);
})
