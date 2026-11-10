import { createContext, useContext, useState } from 'react'

const InventarioContext = createContext()

export function InventarioProvider({ children }) {

  const [articulos, setArticulos] = useState([
    { id: 1, nombre: 'Leche entera', marca: 'Colun', tipo: 'Lácteos', cantidad: 20 },
    { id: 2, nombre: 'Arroz grado 1', marca: 'Tucapel', tipo: 'Abarrotes', cantidad: 15 },
    { id: 3, nombre: 'Bebida cola 1.5L', marca: 'CocaCola', tipo: 'Bebidas', cantidad: 30 },
  ])

  const [carrito, setCarrito] = useState([])

  // --- Funciones de inventario ---

  const agregarArticulo = (articulo) => {
    setArticulos((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...articulo,
        cantidad: Number(articulo.cantidad), 
      },
    ])
  }

  // Elimina un artículo del inventario por su id
  const eliminarArticulo = (id) => {
    setArticulos((prev) => prev.filter((a) => a.id !== id))
  }

  // Devuelve un artículo por id (lo usa la pantalla de detalle)
  const obtenerArticulo = (id) =>
    articulos.find((a) => a.id === Number(id))

  // --- Funciones del carrito---

  // Agrega una unidad de un artículo al carrito y RESTA 1 del stock del inventario
  const agregarAlCarrito = (articuloId) => {
    const articulo = articulos.find((a) => a.id === articuloId)
    if (!articulo || articulo.cantidad <= 0) return // sin stock, no hace nada

    // 1) Restar stock del inventario general
    setArticulos((prev) =>
      prev.map((a) =>
        a.id === articuloId ? { ...a, cantidad: a.cantidad - 1 } : a,
      ),
    )

    // 2) Sumar la unidad al carrito (o crear el item si no existía)
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === articuloId)
      if (existe) {
        return prev.map((item) =>
          item.id === articuloId
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        )
      }
      return [...prev, { id: articulo.id, nombre: articulo.nombre, marca: articulo.marca, tipo: articulo.tipo, cantidad: 1 }]
    })
  }

  // Disminuye una unidad del carrito y DEVUELVE 1 al stock del inventario
  const quitarDelCarrito = (articuloId) => {
    const item = carrito.find((i) => i.id === articuloId)
    if (!item) return

    // 1) Devolver stock al inventario general
    setArticulos((prev) =>
      prev.map((a) =>
        a.id === articuloId ? { ...a, cantidad: a.cantidad + 1 } : a,
      ),
    )

    // 2) Restar la unidad del carrito (y eliminar el item si llega a 0)
    setCarrito((prev) =>
      prev
        .map((i) =>
          i.id === articuloId ? { ...i, cantidad: i.cantidad - 1 } : i,
        )
        .filter((i) => i.cantidad > 0),
    )
  }

  return (
    <InventarioContext.Provider
      value={{
        articulos,
        carrito,
        agregarArticulo,
        eliminarArticulo,
        obtenerArticulo,
        agregarAlCarrito,
        quitarDelCarrito,
      }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

// 3) Hook personalizado para consumir el contexto de forma cómoda
export function useInventario() {
  return useContext(InventarioContext)
}
