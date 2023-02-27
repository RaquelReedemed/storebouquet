 //clase carrito

 class Carrito {
    constructor(id, nombre, cantidad, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
        this.total = precio * cantidad;
    }
}

 //se guardaran los productos para luego dibujar
 let carrito = [];

 //constante
 
 const contenedorCarrito = document.getElementById('contenedor-carrito');

 document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    listarCarrito()
 })


 //despues de click en COMPRAR se agregan los prod al carrito 

 
const agregarAlCarrito = (id) => {
  
    
        //busca elemento id que debe ser igual a al valor de la variable id
    const producto = data.find(el => el.id === id)
    
    if (producto) {

        const productoCarrito = new Carrito(producto.id, producto.nombre, 1, producto.precio, producto.imagen); 

        if (carrito.some(el => el.id === id)) {
            const target = carrito.find(el => el.id === id);
            carrito = carrito.filter(el => el.id !== id);

            const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen);
            carrito.push(nuevoProducto)
        } else {
            carrito.push(productoCarrito);
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se a añadido al carrito',
            showConfirmButton: false,
            timer: 1500,
          })
    }
      
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito)); //localStorage.setItem() metodo para almacenar en el navegador como una cadeja JSON. 'JSON.stringify(carrito) se utiliza para convertir el objeto JS en JSON
    listarCarrito(carrito)
    actualizarTotal()
    }



const listarCarrito = (carrito) => {
    
    console.log('vacio')
    if(carrito.length === 0) {
        contenedorCarrito.innerText = "carrito vacio"
        console.log('carrito vacio')
        return;  
    }
    let acumulador = '';

    carrito.forEach((producto) => {
        acumulador += `
        <tr>
           <td><a href="#"><i class="far fa-times-circle"></i></a></td>
           <td><img src="${producto.imagen}" alt="img" alt=""></td>
           <td>${producto.nombre}</td>
           <td>$${producto.precio}</td>
           <td><input type="number" value="1"></td>
           <td>$118.19</td>
        </tr>
        `

    })

    contenedorCarrito.innerHTML = acumulador;
   // actualizarNumerito() 
    
};

listarCarrito(carrito);


 //recuperando del storage

if (localStorage.getItem('carrito')) {  //comprueba si hay una clave llamada 'carrito' en el local
    //json.parse(), transforma de cadena a objetoJS y dicho objeto se asignara a 'carrito'
    carrito = JSON.parse(localStorage.getItem('carrito'));
    listarCarrito(carrito)
  //  actualizarTotal()
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
