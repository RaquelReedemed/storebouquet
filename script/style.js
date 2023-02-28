

//Oscurecer Nav
const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100) { 
        nav.classList.add('bg-dark', 'shadow');
    }else{
        nav.classList.remove('bg-dark', 'shadow')
    }
} ) /* pageYOffsetdevuelve cant de pixeles que la pag ha sido desplazada hacia abajo, si el valor
 es 0, significa que la parte superior de la página está visible en la ventana del navegador,
 y si el valor es mayor que 0, significa que la página ha sido desplazada hacia abajo. */


 //Estilos barra de busqueda
const bar = document.getElementById('ctn-bars-search2');
const search2 = document.getElementById('box-search2');


//const inputSearch2 = document.getElementById('inputSearch2');


window.onscroll= function() {
    if(window.pageYOffset > 100) {
        bar.style.display = 'block';
        bar.style.width = 'fit-content';
       // bar.classList.add('fixed-top');
        search2.classList.add('box-search2');

        
    }else {
        bar.classList.remove('fixed-top');
        bar.style.display = 'none';
        search2.classList.remove('box-search2')
        
    }    
}

// funcion para que el carrito desaparezca del listado cuando se le de click al menu hamburgueza
const menuHamb = document.getElementById('menuHamb')
const carMenu = document.getElementById('mobile')

const logoCar = () => {
if(menu) {
      carMenu.style.display = 'none' 
}
}
addEventListener('click',logoCar) 

//mediaqueries para que aparezca el carrito cuando se va el menu hamburgueza

const resize = () => {
   if(innerWidth > 991) {
    carMenu.style.display = 'block'
   }
}
addEventListener('resize', resize) 
//addEventListener('DOMContentLoaded', resize)

carMenu.addEventListener('click', () => {
    if(carrito.length === 0) {
        Swal.fire({
            title: "Tu carrito esta vacio"
        })
}
else {
    location.href = "cart.html"
}
}); 

const bag = document.getElementById('lg-bag')

bag.addEventListener('click', () => {
    if(carrito.length === 0) {
        Swal.fire({
            title: "Tu carrito esta vacio"
        })
        
}
else {
    location.href = "cart.html"
}console.log(carrito)
});






//mediasqueries
  
/* const resize = () => {
        if (innerWidth > 600) {
         bar.style.left = '30%';
        } else {
         bar.style.left = '50%';
        }
    }
    addEventListener('resize', resize) //solo se aplica cuando redimenciono y no se ejecuta cuando carga la pag
    addEventListener('DOMContentLoaded', resize) //se ejecuta cuando carga la pag */

    /* const mediumBp = matchMedia('(min-width: 425px)'); //objeto
    const changeSize = MediaQueryList => {  //mql: mediaquerielist
         MediaQueryList.matches 
          ? bar.style.left = '6rem'
          :bar.style.left = ''
    }
    //addlistener,ejecutara el argumento(changeSize)cada vez q cambie el estado de la consulta
    mediumBp.addListener(changeSize)  //callback
    changeSize(mediumBp)//ejecutara funcion changeSize cuando carge la pag

    const mediumBp2 = matchMedia('(min-width: 490px)'); //objeto
    const changeSize2 = MediaQueryList => {  //mql: mediaquerielist
         MediaQueryList.matches 
          ? bar.style.left = '9rem' 
          :bar.style.left = ''
          MediaQueryList.matches 
          ? inputSearch2.style.width = '250px' 
          :inputSearch2.style.width = ''
       
    }
    mediumBp2.addListener(changeSize2) 
    changeSize2(mediumBp2)


    const mediumBp3 = matchMedia('(min-width: 600px)'); //objeto
    const changeSize3 = MediaQueryList => {  //mql: mediaquerielist
         MediaQueryList.matches 
          ? bar.style.left = '11rem' 
          :bar.style.left = ''
          MediaQueryList.matches 
          ? inputSearch2.style.width = '280px' 
          :inputSearch2.style.width = ''
       
    }
    mediumBp3.addListener(changeSize3) 
    changeSize3(mediumBp3)

     */



