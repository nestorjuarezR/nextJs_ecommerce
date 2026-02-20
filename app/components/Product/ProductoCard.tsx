'use client';
import { Card, Button, Ratio } from 'react-bootstrap';
import { Categoria, Producto } from '@prisma/client';
import { formatPrecio } from '@/lib/utils';
import Link from 'next/link';

// Definimos que el producto viene con la categoría incluida
interface ProductoConCategoria extends Producto {
  categeoria: Categoria; 
}

export default function ProductoCard({ producto }: {producto: ProductoConCategoria}) {
  return (
    <Card className="h-100 border-1 border-darkrounded shadow-sm bg-dark text-white overflow-hidden shadow-hover mx-auto">
      {/* Ratio sustituye al div ratio de Bootstrap */}
      <Ratio aspectRatio="1x1" className="bg-secondary bg-opacity-10">
        <Card.Img 
          variant="top" 
          src={producto.imagen} 
          alt={producto.nombre}
          className="object-fit-cover"
        />
      </Ratio>

      <Card.Body className="d-flex flex-column p-4">
        <small className="text-primary text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem' }}>
          {producto.categeoria?.nombre || 'General'}
        </small>
        
        <Card.Title as="h5" className="fw-semibold mb-2 fs-5">
          {producto.nombre}
        </Card.Title>
        
        <Card.Text className="text-secondary small mb-3 text-truncate-2">
          {producto.description}
        </Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fs-4 fw-bold text-primary">
            {formatPrecio(producto.precio)}
          </span>
          
          {/* Usamos as={Link} para mantener la navegación de Next.js */}
            <Button 
            as={Link as any} 
            href={producto.slug ? `/producto/${producto.slug}` : '#'} 
            variant="outline-light" 
            // ... resto de props
            >
                Ver Detalles
            </Button>
        </div>
      </Card.Body>

      {/* Importante:styled-jsx sigue funcionando igual en Client Components si lo necesitas */}
      <style jsx>{`
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Card>
  );
}