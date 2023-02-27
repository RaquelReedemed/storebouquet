
/* -------------------------------------------------------------------------- */
/*                                 Contenedor Productos                       */
/* -------------------------------------------------------------------------- */

const dataProductos = [
    {
        id: 1,
        nombre: 'Flor#1',
        cantidad: 10,
        precio: 1500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653636/flores/pexels-photo-1883380_iqtfvx.webp'
    },
    {
        id: 2,
        nombre: 'Flor#2',
        cantidad: 35,
        precio: 3000,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653636/flores/pexels-photo-931162_b5t7eq.jpg'
    },  
    {
        id: 3,
        nombre: 'Flor#3',
        cantidad: 23,
        precio: 7500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653636/flores/pexels-photo-1058771_zxkfqc.jpg'
    },  
    {
        id: 4,
        nombre: 'Flor#4',
        cantidad: 70,
        precio: 6000,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653636/flores/pexels-photo-1109561_xo3wz2.webp'
    },  
    {
        id: 5,
        nombre: 'Flor#5',
        cantidad: 7,
        precio: 3500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-931168_hl4vga.jpg'
    },
    {
        id: 6,
        nombre: 'Flor#6',
        cantidad: 7,
        precio: 2500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-931180_w3qe2e.jpg'
    },
    {
        id: 7,
        nombre: 'Flor#7',
        cantidad: 10,
        precio: 1500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-931180_w3qe2e.jpg'
    },
    {
        id: 8,
        nombre: 'Flor#8',
        cantidad: 35,
        precio: 3000,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-931179_i4v1cq.jpg'
    },  
    {
        id: 9,
        nombre: 'Flor#9',
        cantidad: 23,
        precio: 7500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-226145_halriv.webp'
    },  
    {
        id: 10,
        nombre: 'Flor#10',
        cantidad: 70,
        precio: 6000,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653635/flores/pexels-photo-931154_e7qsfk.jpg'
    },  
    {
        id: 11,
        nombre: 'Flor#11',
        cantidad: 7,
        precio: 3500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676653587/flores/pexels-photo-112396_r7nddu.webp'
    },
    {
        id: 12,
        nombre: 'Flor#12',
        cantidad: 7,
        precio: 2500,
        imagen: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg'
    },
];

let data = []
//guardar en el localStorage
if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));//guarda en formato json en el localStorage
} else {
    data = dataProductos;
} 




 const contenedor = document.querySelector('.box-container');


const dibujarProductos = (data, contenedor ) => {
    let acumulador = '';
    data.forEach(element => {
        acumulador += `
        <div class="boxProd" >
        <img src="${element.imagen}" alt="img">
        <h3>${element.nombre}</h3>
        <div class="price">${element.precio}</div>
        <a  href="#" onclick="agregarAlCarrito(${element.id})"  <i class="fal fa-shopping-cart cart"></i></a>
    </div>
        `
    });
    contenedor.innerHTML = acumulador;
   //setItem(key, value), 
    localStorage.setItem('data',JSON.stringify(data))//JSON.stringify(), convierte los datos en json
};

dibujarProductos(data, contenedor) 




 //recuperando del storage


if (localStorage.getItem ('data')) {
    const consultasViejas = JSON.parse(localStorage.getItem('data'));
 
    consultasViejas.forEach( (el) => {
         (el.id, el.nombre, el.cantidad, el.imagen, el.precio);
         console.log(consultasViejas);
     })
     dibujarProductos(consultasViejas,contenedor)
 }






/* -------------------------------------------------------------------------- */
/*                                 Buscador interactivo                       */
/* -------------------------------------------------------------------------- */


inputSearch = document.getElementById('inputSearch');
box_search =document.getElementById('box-search');


box_search2 = document.getElementById('box-search2');
inputSearch2 = document.getElementById('inputSearch2');



 //creando filtrado de busqueda

 inputSearch.addEventListener('keyup', () => {
  //convertir el valor del input en mayuscula
  filter = inputSearch.value.toUpperCase();
  //li sera igual a los li que se obtiene del getelementbytagname
  li = box_search.getElementsByTagName("li") //
  //recorriendo elementos a filtrar mediante los "li"
  for (i = 0; i < li.length; i++){ //i arranca en 0, si i es menor a la longitud del objeto li el bucle incrementara 1 e interara atraves de todos los elementos de li

    a = li[i].getElementsByTagName("a")[0]; // se utiliza para acceder al primer elemento <a></a> dentro del li. Devuelte HTMLcollection de todos los a. [0], se utiliza para acceder al primer elemento de la coleccion
    textValue = a.textContent

    if(textValue.toUpperCase().indexOf(filter) > -1){ //si el valor ingresado en el buscador se encuentra en el texValue (li->a) el indexof devolvera un numero positivo

        li[i].style.display = "";
        box_search.style.display = "block";

        if (inputSearch.value === ""){   //si el biscador no tiene texto no se abre el box
            box_search.style.display = "none";
        }

    }else{  //sino hay conincidencias no mostrara nada el box
        li[i].style.display = "none";
    }
}
 });


 ////////////////////

 inputSearch2.addEventListener('keyup', () => {
    //convertir el valor del input en mayuscula
    filter = inputSearch2.value.toUpperCase();
    //li sera igual a los li que se obtiene del getelementbytagname
    li = box_search2.getElementsByTagName("li") //
  
    //recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){ //i arranca en 0, si i es menor a la longitud del objeto li el bucle incrementara 1 e interara atraves de todos los elementos de li
  
      a = li[i].getElementsByTagName("a")[0]; // se utiliza para acceder al primer elemento <a></a> dentro del li. Devuelte HTMLcollection de todos los a. [0], se utiliza para acceder al primer elemento de la coleccion
      textValue = a.textContent
  
      if(textValue.toUpperCase().indexOf(filter) > -1){ //si el valor ingresado en el buscador se encuentra en el texValue (li->a) el indexof devolvera un numero positivo
  
          li[i].style.display = "";
          box_search2.style.display = "block";
  
          if (inputSearch2.value === ""){   //si el buscador no tiene texto no se abre el box
              box_search2.style.display = "none";
          }
  
      }else{  //sino hay conincidencias no mostrara nada el box
          li[i].style.display = "none";
      }
  }
   });





