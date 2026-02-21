'use client';
import { Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Error404() {
  const router = useRouter();

  return (
    <Container 
      className="d-flex flex-column align-items-start justify-content-center text-white"
      style={{ minHeight: '80vh', maxWidth: '800px' }}
    >
      {/* Indicador de sección muy sutil */}
      <span className="text-primary mb-4 fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '3px' }}>
        ERROR 404
      </span>

      {/* Título de gran tamaño pero peso ligero */}
      <h1 className="display-2 fw-light mb-4" style={{ lineHeight: '1.1', marginLeft: '-5px' }}>
        Parece que estás <br />
        <span className="fw-bold">un poco perdido.</span>
      </h1>

      {/* Cuerpo de texto con ancho controlado */}
      <p className="text-secondary fs-5 mb-5" style={{ maxWidth: '450px', fontWeight: '300' }}>
        La página que buscas no existe o ha sido movida. 
        Te sugerimos volver al inicio para continuar explorando.
      </p>

      {/* Botones de acción minimalistas */}
      <div className="d-flex align-items-center gap-5">
        <Button 
          variant="primary" 
          className="rounded-pill px-5 py-3 fw-bold text-uppercase border-0 shadow-sm"
          onClick={() => router.push('/')}
          style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
        >
          Ir al Inicio
        </Button>

        <button 
          className="bg-transparent border-0 text-secondary text-uppercase fw-bold p-0 transition-opacity"
          onClick={() => router.back()}
          style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: '1px solid currentColor' }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Volver atrás
        </button>
      </div>

      {/* Decoración: Solo un número fantasma muy tenue en el fondo */}
      <div 
        className="position-absolute end-0 bottom-0 p-5 opacity-10 d-none d-md-block"
        style={{ fontSize: '15rem', fontWeight: '900', zIndex: -1, pointerEvents: 'none', opacity: '0.08' }}
      >
        404
      </div>
    </Container>
  );
}