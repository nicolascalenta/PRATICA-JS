class Producto {
    constructor(id,nombre,precio){
this.id = id;
this.nombre = nombre
this.precio = precio
this.cantidad = 1

     }

 descipcion(){
        return "id: " + this.id + " nombre: " + this.nombre + " precio: $"+ this.precio+"\n"

 }

 descipcionCarrito(){
    return "id: " + this.id + "nombre: " + this.nombre + " precio: $"+ this.precio+ "cantidad: "+ this.cantidad + "\n"
 }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }


agregar(productoNuevo) {
    let existe = this.listaCarrito.some(producto => producto.id == productoNuevo.id);
    if(!existe) {
        this.listaCarrito.push(productoNuevo);
    }
}
mostrar() {
    let descripcionListaCompra = "Carrito: \n\n";
    this.listaCarritos.forEach(producto => {
        descripcionListaCompra = descripcionListaCompra + producto.descipcionCarrito ()// Cambia descipcion() a descripcion()
    });
    return descripcionListaProducto;
}

    calcularTotal(){
     return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad , 0)

    }

    }    

class productoController {

      constructor(){
        this.listaProducto = []
      }
    
    agregar(producto){
    this.listaProducto.push(producto)    

    mostrar() {
        let descripcionListaProducto = "recordar el id de los productos\n\n";
        this.listaProducto.forEach(producto => {
          descripcionListaProducto = descripcionListaProducto + producto.descipcion()
        });
        return descripcionListaProducto;
     
    }

    


//productos
const p1 = new Producto(1,"placa",10000)
const p2 = new Producto(2,"memoria",150)
const p3 = new Producto(3,"fuente",300)
const p4 = new Producto(4,"teclado",200)
const p5 = new Producto(5,"mouse",100)



//un array para los objetos

const carrito = new Carrito()
const controladorP = new productoController()

controladorP.agregar (p1)
controladorP.agregar (p2)
controladorP.agregar (p3)
controladorP.agregar (p4)
controladorP.agregar (p5)

let rta;

do {
  alert(controladorP.mostrar());
  let id = Number(prompt("Ingrese el ID del producto que quiera comprar"));
  let cantidadDeseada = Number(prompt("Ingrese la cantidad que necesita del producto"));
  p1.cantidad = cantidadDeseada; // Establece la cantidad deseada en el producto
  carrito.agregar(p1); // Agrega el producto al carrito
  alert(carrito.mostrar());
  rta = prompt("¿Desea finalizar la compra? (Escriba 'si' para finalizar)").toLowerCase();
} while (rta !== "si");

alert("El total es de: $" + carrito.calcularTotal())}
}