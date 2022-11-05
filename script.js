console.log("JS OK");

let lista =[];
let botonAddProduct = document.getElementById("agregarProducto");
let botonDeleteProduct = document.getElementById("botonDeleteProduct");
let newProduct = document.getElementById("nuevoProducto");
let deleteProducto = document.getElementById("deleteProducto");
let viejoProducto = document.getElementById("viejoProducto");
let productoCambiado = document.getElementById("productoCambiado");
let botonModificarProducto = document.getElementById("botonModificarProducto");



function agregarProducto() {
    let newProduct = document.getElementById("nuevoProducto").value.trim();

    if (lista.includes(newProduct)) {
        document.getElementById("errorAdd").innerHTML = "El producto ya existe!"
    } else if (newProduct == "") {
        document.getElementById("errorAdd").innerHTML = "Por favor escribe un producto"
    }
    else {
        lista.push(newProduct);
        document.getElementById("errorAdd").innerHTML = "El producto fue agregado a la lista!"
    };
    
  
}

function publishLista() {
   let listaLen = lista.length;
   let text = "<ul>";
   for (let i=0; i<listaLen; i++) {
    text +="<li>" + lista[i] + "</li>"
   }
   text += "</ul>"
    document.getElementById("listaDisplay").innerHTML = text;
};

function buscarProducto() {
    let product = deleteProducto.value.trim();
    let productRange;

    if (lista.includes(product) == false) {
        document.getElementById("errorDelete").innerHTML = "El producto no se encuentra"
    } else {
        productRange = lista.indexOf(product);
        lista.splice(productRange,1);
        document.getElementById("errorDelete").innerHTML = "El producto fue eliminado"

    }
};

function modificarProducto(){
    let product = viejoProducto.value;
    let productRange;
    console.log(lista.includes(product));
    console.log(viejoProducto.value);

    if (lista.includes(viejoProducto.value) == false) {
        document.getElementById("errorModif").innerHTML = "El producto no se encuentra"
        console.log(viejoProducto.value);
    }else if (lista.includes(productoCambiado.value)) {
        document.getElementById("errorModif").innerHTML = "El producto ya existe"
    } else {
        productRange = lista.indexOf(product);
        lista.splice(productRange,1,productoCambiado.value);
        viejoProducto.value = "";
        productoCambiado.value = "";
        document.getElementById("errorModif").innerHTML = "El producto fue modificado con exito"

    }
};

function deleteCampo () {
    newProduct.value = "";
    deleteProducto.value = "";

};

// enter = click
newProduct.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("agregarProducto").click();
  }
});

deleteProducto.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("botonDeleteProduct").click();
    }
  });

  productoCambiado.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("botonModificarProducto").click();
    }
 });



botonAddProduct.addEventListener("click",agregarProducto);
botonAddProduct.addEventListener("click",publishLista);
botonAddProduct.addEventListener("click",deleteCampo);
botonDeleteProduct.addEventListener("click", buscarProducto);
botonDeleteProduct.addEventListener("click", publishLista);
botonDeleteProduct.addEventListener("click", deleteCampo);
botonModificarProducto.addEventListener("click",modificarProducto);
botonModificarProducto.addEventListener("click",publishLista);
botonModificarProducto.addEventListener("click", deleteCampo);
