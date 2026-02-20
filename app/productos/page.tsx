import { mockProductos } from "@/lib/mockProducto";

export default function Productos(){
    return(
        <p>Mostrando {mockProductos.length} productos</p>
    )
}