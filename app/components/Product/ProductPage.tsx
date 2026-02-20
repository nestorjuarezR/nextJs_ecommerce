'use client';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Producto, Categoria } from '@prisma/client';
import { formatPrecio } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Props {
  producto: Producto & { categeoria: Categoria };
}

export default function ProductoDetalle({ producto }: Props) {
  const router = useRouter();

  return (
    <Container className="py-5 mt-5 text-white">
      {/* Botón Volver */}
      <Button 
        variant="link" 
        className="text-secondary p-0 mb-4 text-decoration-none d-flex align-items-center"
        onClick={() => router.back()}
      >
        <span className="me-2">←</span> Volver a la tienda
      </Button>

      <Row className="gx-lg-5">
        {/* Columna Imagen */}
        <Col lg={7} className="mb-4">
          <div className="rounded-4 overflow-hidden bg-secondary bg-opacity-10 shadow-lg">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="img-fluid w-100 object-fit-cover"
              style={{ minHeight: '500px', maxHeight: '700px' }}
            />
          </div>
        </Col>

        {/* Columna Información */}
        <Col lg={5} className="d-flex flex-column">
          <div className="mb-3">
            <Badge bg="primary" className="rounded-pill px-3 py-2 text-uppercase fw-bold">
              {producto.categeoria.nombre}
            </Badge>
          </div>

          <h1 className="display-5 fw-bold mb-3">{producto.nombre}</h1>
          
          <h2 className="text-primary fs-1 fw-light mb-4">
            {formatPrecio(producto.precio)}
          </h2>

          <div className="border-top border-secondary opacity-25 my-4"></div>

          <h5 className="text-secondary text-uppercase small fw-bold mb-3">Descripción</h5>
          <p className="lead text-secondary-emphasis mb-5" style={{ lineHeight: '1.8' }}>
            {producto.description}
          </p>

          <div className="mt-auto">
            <Button size="lg" variant="primary" className="w-100 rounded-pill py-3 fw-bold shadow-sm">
              Añadir al Carrito
            </Button>
            <p className="text-center text-secondary small mt-3">
              Envío gratuito en todos los pedidos superiores a $50
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}