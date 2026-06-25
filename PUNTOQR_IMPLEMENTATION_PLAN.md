# PuntoQR — Plan de implementación para Codex

## 1. Objetivo técnico

Construir la primera versión funcional de PuntoQR: un sistema simple para generar landings móviles para pequeños negocios a partir de una estructura de datos.

La prioridad es crear la landing demo, las plantillas y la arquitectura base. No construir todavía un SaaS completo ni un panel administrativo avanzado.

## 2. Instrucción general para Codex

Antes de modificar código, leer este archivo y `PUNTOQR_MVP_SPEC.md`.

Luego entregar un plan breve indicando:

1. Arquitectura propuesta.
2. Archivos principales que se crearán o modificarán.
3. Componentes que se implementarán.
4. Cómo se agregará un nuevo cliente.
5. Qué quedará listo para la siguiente etapa.

Después implementar solo la etapa solicitada.

## 3. Arquitectura sugerida

Usar:

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.
- Datos locales en archivo TypeScript.

Estructura sugerida:

```txt
src/
  app/
    page.tsx
    [slug]/
      page.tsx
    admin/
      qr/
        [slug]/
          page.tsx
  components/
    puntoqr/
      BusinessLanding.tsx
      BusinessHeader.tsx
      BusinessProfile.tsx
      ActionButton.tsx
      TransferSection.tsx
      LocationSection.tsx
      BusinessFooter.tsx
      QrPreview.tsx
  data/
    clients.ts
  types/
    puntoqr.ts
  lib/
    puntoqr.ts
```

Si el proyecto actual tiene otra estructura, adaptar sin romper convenciones existentes.

## 4. Modelo de datos

Crear un tipo TypeScript similar a:

```ts
export type PuntoQrTemplateStyle = 'claro' | 'oscuro' | 'foto';

export type TransferData = {
  titular: string;
  rut: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  correo: string;
};

export type PuntoQrClient = {
  slug: string;
  nombreNegocio: string;
  rubro: string;
  descripcion: string;
  ciudad: string;
  whatsapp: string;
  mensajeWhatsapp: string;
  instagram: string;
  catalogoUrl: string;
  ubicacionTexto: string;
  ubicacionUrl: string;
  horario: string;
  colorPrincipal: string;
  logoUrl?: string;
  portadaUrl?: string;
  estiloPlantilla: PuntoQrTemplateStyle;
  datosTransferencia: TransferData;
};
```

Crear un arreglo de clientes en `data/clients.ts`.

Cliente inicial:

```ts
export const puntoQrClients: PuntoQrClient[] = [
  {
    slug: 'dulces-martina',
    nombreNegocio: 'Dulces Martina',
    rubro: 'Repostería artesanal',
    descripcion: 'Repostería artesanal para pedidos especiales, regalos y celebraciones.',
    ciudad: 'Talca',
    whatsapp: '+56912345678',
    mensajeWhatsapp: 'Hola, vengo desde tu PuntoQR y quiero hacer una consulta.',
    instagram: 'https://instagram.com/dulcesmartina',
    catalogoUrl: '#',
    ubicacionTexto: 'Talca, Región del Maule',
    ubicacionUrl: 'https://maps.google.com',
    horario: 'Lunes a sábado, 10:00 a 19:00',
    colorPrincipal: '#D98BA6',
    logoUrl: '',
    portadaUrl: '',
    estiloPlantilla: 'claro',
    datosTransferencia: {
      titular: 'Martina González',
      rut: '12.345.678-9',
      banco: 'Banco Estado',
      tipoCuenta: 'Cuenta RUT',
      numeroCuenta: '12345678',
      correo: 'dulcesmartina@email.com',
    },
  },
];
```

Crear helpers en `lib/puntoqr.ts`:

- `getPuntoQrClientBySlug(slug)`
- `formatWhatsappUrl(client)`
- `formatTransferText(client)`
- `getClientPublicUrl(client)`

## 5. Etapas de implementación

### Etapa 1 — Datos y rutas dinámicas

Objetivo:

Crear la estructura de datos de clientes y la ruta pública dinámica.

Implementar:

- Tipo `PuntoQrClient`.
- Archivo `clients.ts`.
- Helper para buscar por slug.
- Ruta `/[slug]`.
- Página de error simple para slug inexistente.

Criterio de éxito:

- Al visitar `/dulces-martina`, se carga una página básica con los datos del cliente.
- Al visitar un slug inexistente, aparece el mensaje: `Este PuntoQR no está disponible.`

### Etapa 2 — Landing demo estilo claro

Objetivo:

Crear la primera landing real para `/dulces-martina` usando el estilo claro.

Implementar:

- `BusinessLanding`
- `BusinessHeader`
- `BusinessProfile`
- `ActionButton`
- `TransferSection`
- `BusinessFooter`

La landing debe incluir:

- Nombre del negocio.
- Rubro.
- Descripción.
- WhatsApp.
- Catálogo.
- Instagram.
- Ubicación.
- Horario.
- Datos de transferencia.
- Botón de copiar datos.
- Footer `Creado con PuntoQR`.

Criterio de éxito:

- La landing se ve bien en móvil.
- Los botones son grandes y legibles.
- El botón de copiar transferencia funciona y muestra confirmación.

### Etapa 3 — Componentes completos de acción

Objetivo:

Pulir acciones y experiencia de usuario.

Implementar:

- WhatsApp con mensaje precargado.
- Botón de catálogo.
- Botón de Instagram.
- Botón de ubicación.
- Sección de horario.
- Estado visual al copiar datos de transferencia.

Criterio de éxito:

- Todos los enlaces abren correctamente.
- El texto copiado tiene formato claro.
- La landing se entiende en menos de 5 segundos.

### Etapa 4 — Variantes visuales

Objetivo:

Crear tres estilos cerrados:

- `claro`
- `oscuro`
- `foto`

Implementar:

- Clases o componentes condicionales según `estiloPlantilla`.
- Ejemplos de clientes ficticios adicionales si ayudan a probar estilos.

Clientes de prueba opcionales:

```txt
/cafe-luna          estilo oscuro
/velas-amalia       estilo foto
```

Criterio de éxito:

- Cambiar `estiloPlantilla` modifica la apariencia sin cambiar la estructura.
- Las tres variantes mantienen buena legibilidad.

### Etapa 5 — Home simple de PuntoQR

Objetivo:

Crear una página inicial mínima en `/`.

Contenido sugerido:

```txt
PuntoQR convierte tus stickers, envases y tarjetas en puntos de contacto digital.
```

Debe incluir:

- Breve descripción.
- Botón `Ver demo`.
- Enlace a `/dulces-martina`.

Criterio de éxito:

- La home es simple y funcional.
- No intentar construir todavía una landing comercial completa.

### Etapa 6 — Visualización básica de QR

Objetivo:

Crear una ruta interna simple para visualizar el QR de cada cliente.

Ruta sugerida:

```txt
/admin/qr/[slug]
```

Debe mostrar:

- Nombre del negocio.
- URL pública.
- QR.
- Botón o instrucción para descargar si es simple de implementar.

Librería sugerida:

- `qrcode.react`
- o alguna librería compatible con el stack actual.

Criterio de éxito:

- Al entrar a `/admin/qr/dulces-martina`, se ve el QR de la URL pública.

## 6. Qué no implementar aún

No implementar en esta etapa:

- Login.
- Panel admin completo.
- Subida de imágenes.
- Base de datos.
- Pagos.
- Estadísticas reales.
- Login de cliente.
- Editor visual.
- Constructor tipo Wix.
- Landing comercial completa de PuntoQR.

## 7. Reglas de diseño

Prioridad absoluta: móvil.

La landing debe:

- Verse bien en pantalla pequeña.
- Tener botones grandes.
- Cargar rápido.
- Ser legible en malas condiciones.
- Usar buen contraste.
- Transmitir confianza.
- Funcionar aunque el cliente no tenga logo ni fotos profesionales.

Si no hay logo, mostrar iniciales o un círculo con la inicial del negocio.

Si no hay portada, usar degradado o bloque de color basado en `colorPrincipal`.

## 8. Cómo agregar un nuevo cliente

El flujo inicial debe ser simple:

1. Abrir `data/clients.ts`.
2. Copiar un objeto de cliente existente.
3. Cambiar el `slug`.
4. Cambiar datos del negocio.
5. Elegir `estiloPlantilla`.
6. Guardar.
7. Visitar `/<slug>`.

No debe requerir tocar componentes para agregar un cliente nuevo.

## 9. Criterios de entrega final

Al finalizar cada etapa, Codex debe entregar:

1. Resumen de lo implementado.
2. Archivos creados o modificados.
3. Instrucciones para probar localmente.
4. Rutas disponibles.
5. Cómo agregar o modificar un cliente.
6. Limitaciones actuales.
7. Próximo paso recomendado.

## 10. Prompt recomendado para iniciar en Codex

Usar este mensaje:

```txt
Lee docs/PUNTOQR_MVP_SPEC.md y docs/PUNTOQR_IMPLEMENTATION_PLAN.md. Implementa solo la Etapa 1: estructura de datos de clientes y ruta dinámica /[slug]. Antes de modificar código, explícame brevemente qué archivos crearás o cambiarás. No implementes todavía panel admin, base de datos, pagos ni landing comercial completa.
```

## 11. Prompt para continuar después

Cuando la Etapa 1 funcione, usar:

```txt
Lee docs/PUNTOQR_MVP_SPEC.md y docs/PUNTOQR_IMPLEMENTATION_PLAN.md. Ahora implementa solo la Etapa 2: landing demo estilo claro para /dulces-martina con componentes reutilizables. Mantén la arquitectura simple y optimizada para móvil.
```
