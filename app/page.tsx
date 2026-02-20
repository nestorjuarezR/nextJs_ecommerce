"use server";
import ProductoCard from "./components/Product/ProductoCard";
import prisma from "@/prisma/prisma";
import { Pagination } from 'react-bootstrap'; // Importar componente
import Link from 'next/link';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home(props: { searchParams: SearchParams }) {

  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const pageSize = 3;
  const skip = (page - 1) * pageSize;

  // Ejecutamos ambas consultas para obtener datos y el total
  const [productos, totalProductos] = await Promise.all([
    prisma.producto.findMany({
      include: { categeoria: true },
      skip: skip,
      take: pageSize
    }),
    prisma.producto.count()
  ]);

  const totalPages = Math.ceil(totalProductos / pageSize);

  // Simulación de carga
  await new Promise(resolve => setTimeout(resolve, 500))

  return (
    <>
      <main className="container-fluid px-4 px-md-5 py-5 mt-4" style={{ maxWidth: '1400px' }}>
        <div className="row gy-5 gx-md-5 justify-content-center">
          {productos.map((producto) => (
            <div key={producto.id} className="col-11 col-md-5 col-lg-4 col-xl-3">
              <ProductoCard producto={producto} />
            </div>
          ))}
        </div>

        {/* Componente Paginador corregido */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination>
              <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                <Link className="page-link" href={`/?page=${page - 1}`}>
                  &laquo; Anterior
                </Link>
              </li>
              
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <li key={pageNum} className={`page-item ${page === pageNum ? 'active' : ''}`}>
                    <Link className="page-link" href={`/?page=${pageNum}`}>
                      {pageNum}
                    </Link>
                  </li>
                );
              })}

              <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
                <Link className="page-link" href={`/?page=${page + 1}`}>
                  Siguiente &raquo;
                </Link>
              </li>
            </Pagination>
          </div>
        )}
      </main>
    </>
  );
}