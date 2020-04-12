var cajas = document.querySelectorAll(".cajas");
var par = document.querySelector("#par");
var impar = document.querySelector("#impar");

par.addEventListener("click", Pares);
impar.addEventListener("click", Impares);

function Pares()
{
    for(var i=0; i<cajas.length; i++)
    {
        if(i%2!=0)
        {
            cajas[i].style.background = "lime";
        }
    }
}

function Impares()
{
    for(var i=0; i<cajas.length; i++)
    {
        if(i%2==0)
        {
            cajas[i].style.background = "pink";
        }
    }
}