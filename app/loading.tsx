'use client';
import { Container, Row, Col, Card, Placeholder } from 'react-bootstrap';

export default function Loading() {
  // Creamos un array de 8 elementos para mostrar 8 tarjetas de carga
  const skeletonCards = Array.from({ length: 8 });

  return (
    <Container fluid className="px-4 px-md-5 py-5 mt-4" style={{ maxWidth: '1400px' }}>
      <Row className="gy-5 gx-md-5 justify-content-center">
        {skeletonCards.map((_, index) => (
          <Col key={index} xs={11} md={5} lg={4} xl={3}>
            <Card className="h-100 border-0 shadow-sm bg-dark overflow-hidden">
              {/* Espacio para la imagen con animación de parpadeo */}
              <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
                <Placeholder as="div" animation="glow" className="h-100" />
              </div>

              <Card.Body className="p-4">
                {/* Skeleton de la Categoría */}
                <Placeholder animation="glow">
                  <Placeholder xs={4} className="rounded-pill bg-primary opacity-25" />
                </Placeholder>

                {/* Skeleton del Título */}
                <Placeholder as={Card.Title} animation="glow" className="mt-2">
                  <Placeholder xs={9} />
                </Placeholder>

                {/* Skeleton de la Descripción */}
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={8} />
                </Placeholder>

                {/* Skeleton del Precio y Botón */}
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <Placeholder animation="glow" style={{ width: '40%' }}>
                    <Placeholder xs={12} size="lg" />
                  </Placeholder>
                  <Placeholder.Button variant="outline-light" xs={4} className="rounded-pill" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}