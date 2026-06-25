# PuntoQR — Especificación MVP

## 1. Resumen del negocio

**PuntoQR** es un servicio para pequeños negocios, emprendedores y comercios locales que quieren conectar sus productos físicos con acciones digitales simples.

El cliente compra un pack de stickers, tarjetas o afiches con un código QR. Al escanearlo, la persona llega a una mini landing móvil del negocio, desde donde puede:

- Escribir por WhatsApp.
- Ver Instagram.
- Ver catálogo o menú.
- Copiar datos de transferencia.
- Ver ubicación.
- Ver horario de atención.
- Conocer información básica del negocio.

PuntoQR no debe sentirse como una “web barata” ni como diseño web personalizado. Debe entenderse como un sistema simple para convertir envases, stickers, tarjetas y afiches en puntos de contacto digital.

Frase conceptual del producto:

> Un QR funcional para que tus clientes puedan pedir, pagar, ver tu catálogo y contactar tu negocio desde tus productos físicos.

## 2. Decisión estratégica principal

La primera prioridad no es crear la landing comercial de venta de PuntoQR.

La primera prioridad es construir el sistema base que permita generar landings simples para clientes.

Orden correcto:

1. Diseñar una landing demo para un cliente ficticio.
2. Crear una plantilla base reutilizable.
3. Crear 2 o 3 variantes visuales.
4. Definir una estructura de datos editable por cliente.
5. Permitir crear nuevas landings a partir de esos datos.
6. Dejar preparada la base para un futuro panel admin.
7. Recién después diseñar la landing comercial completa de PuntoQR.

## 3. Qué es y qué no es PuntoQR

### PuntoQR es

- Una mini landing móvil para negocios pequeños.
- Una tarjeta digital comercial.
- Una página simple conectada a un QR físico.
- Una herramienta para pedir, pagar, contactar y ver información esencial.
- Un producto replicable, estandarizado y fácil de mantener.

### PuntoQR no es

- Un constructor tipo Wix.
- Un sitio web corporativo completo.
- Un sistema de ecommerce completo.
- Una plataforma con login para clientes en la primera versión.
- Un servicio de diseño web personalizado caso a caso.
- Una landing tipo influencer centrada solo en redes sociales.

## 4. Usuario objetivo

PuntoQR está pensado para:

- Repostería artesanal.
- Comida casera.
- Cafeterías pequeñas.
- Tiendas locales.
- Cosmética natural.
- Velas, joyería, manualidades.
- Barberías, peluquerías, servicios locales.
- Emprendimientos que venden por Instagram o WhatsApp.
- Negocios que reciben transferencias bancarias.

El usuario final que escanea el QR puede estar apurado, en la calle, usando un celular barato o con mala conexión. Por eso la landing debe ser rápida, clara y muy legible.

## 5. Propuesta de valor

Para el negocio:

- Tener un QR profesional sin tener que construir una web completa.
- Facilitar que el cliente escriba, compre o pague.
- Evitar repetir datos bancarios manualmente.
- Agregar valor al packaging, tarjeta o afiche.
- Verse más confiable y ordenado.

Para el cliente final:

- Escanear y encontrar todo en un solo lugar.
- Contactar rápido.
- Copiar datos de transferencia sin errores.
- Ver catálogo, redes, ubicación y horario.

## 6. Landing del cliente

La landing debe estar optimizada primero para celular. Debe parecer una mini tarjeta digital comercial.

### Estructura base

La landing debe incluir:

1. Imagen de portada, fondo visual o degradado.
2. Logo circular, imagen o inicial del negocio.
3. Nombre del negocio.
4. Rubro o frase breve.
5. Botón principal destacado.
6. Botones secundarios.
7. Sección de datos de transferencia.
8. Botón para copiar datos de transferencia.
9. Botón para WhatsApp.
10. Botón para Instagram.
11. Botón para catálogo o menú.
12. Botón para ubicación.
13. Horario.
14. Pie de página con el texto: **Creado con PuntoQR**.

### Acciones principales

Los botones mínimos son:

- Pedir por WhatsApp.
- Ver catálogo.
- Copiar datos de transferencia.
- Ver Instagram.
- Ver ubicación.
- Ver horario.

### WhatsApp

El botón de WhatsApp debe abrir una conversación con mensaje precargado.

Mensaje sugerido:

```txt
Hola, vengo desde tu PuntoQR y quiero hacer una consulta.
```

### Transferencia

La sección de transferencia debe mostrar datos claros:

- Titular.
- RUT.
- Banco.
- Tipo de cuenta.
- Número de cuenta.
- Correo.

Debe existir un botón para copiar todos los datos al portapapeles.

Después de copiar, debe mostrarse una confirmación breve:

```txt
Datos copiados
```

Formato sugerido para copiar:

```txt
Dulces Martina
Martina González
RUT: 12.345.678-9
Banco Estado
Cuenta RUT
N° 12345678
Correo: dulcesmartina@email.com
```

## 7. Cliente demo

Usar inicialmente un cliente ficticio para validar el producto.

```json
{
  "slug": "dulces-martina",
  "nombreNegocio": "Dulces Martina",
  "rubro": "Repostería artesanal",
  "descripcion": "Repostería artesanal para pedidos especiales, regalos y celebraciones.",
  "ciudad": "Talca",
  "whatsapp": "+56912345678",
  "mensajeWhatsapp": "Hola, vengo desde tu PuntoQR y quiero hacer una consulta.",
  "instagram": "https://instagram.com/dulcesmartina",
  "catalogoUrl": "#",
  "ubicacionTexto": "Talca, Región del Maule",
  "ubicacionUrl": "https://maps.google.com",
  "horario": "Lunes a sábado, 10:00 a 19:00",
  "colorPrincipal": "#D98BA6",
  "logoUrl": "",
  "portadaUrl": "",
  "estiloPlantilla": "claro",
  "datosTransferencia": {
    "titular": "Martina González",
    "rut": "12.345.678-9",
    "banco": "Banco Estado",
    "tipoCuenta": "Cuenta RUT",
    "numeroCuenta": "12345678",
    "correo": "dulcesmartina@email.com"
  }
}
```

## 8. Plantillas visuales

No crear un sistema infinito de personalización. La idea comercial inicial es que el cliente elija uno de tres estilos y PuntoQR lo personalice con sus datos.

### A. Estilo Claro / Emprendedor

Características:

- Fondo claro.
- Tarjetas blancas.
- Botones redondeados.
- Imagen de portada.
- Estética limpia y cercana.

Ideal para:

- Repostería.
- Manualidades.
- Comida casera.
- Servicios simples.
- Emprendimientos familiares.

### B. Estilo Premium Oscuro

Características:

- Fondo oscuro.
- Color de acento configurable.
- Botones con borde.
- Tipografía elegante y legible.

Ideal para:

- Cafetería.
- Cosmética.
- Joyería.
- Velas.
- Barbería.
- Diseño.

### C. Estilo Foto Completa

Características:

- Foto de fondo o portada dominante.
- Capa translúcida encima.
- Botones tipo glassmorphism.
- Apariencia visual más aspiracional.

Ideal para:

- Marcas con buenas fotos de producto.
- Negocios con identidad visual fuerte.
- Productos de regalo o estética cuidada.

## 9. Estructura de datos por cliente

Cada cliente debe tener una estructura clara, idealmente en TypeScript o JSON. En el MVP puede vivir en un archivo local. Más adelante debe poder migrar a base de datos.

Campos mínimos:

- `slug`
- `nombreNegocio`
- `rubro`
- `descripcion`
- `ciudad`
- `whatsapp`
- `mensajeWhatsapp`
- `instagram`
- `catalogoUrl`
- `ubicacionTexto`
- `ubicacionUrl`
- `horario`
- `colorPrincipal`
- `logoUrl`
- `portadaUrl`
- `estiloPlantilla`
- `datosTransferencia.titular`
- `datosTransferencia.rut`
- `datosTransferencia.banco`
- `datosTransferencia.tipoCuenta`
- `datosTransferencia.numeroCuenta`
- `datosTransferencia.correo`

## 10. Rutas públicas

Debe existir una ruta pública por cliente.

Ejemplo:

```txt
/dulces-martina
```

En Next.js puede implementarse como:

```txt
/[slug]
```

La app debe buscar los datos del cliente según el `slug` y renderizar la landing correspondiente.

Si el slug no existe, mostrar una página simple:

```txt
Este PuntoQR no está disponible.
```

## 11. Generación o visualización de QR

Incluir una función básica para generar o mostrar el QR asociado a la URL pública del cliente.

Ruta sugerida:

```txt
/admin/qr/dulces-martina
```

Debe mostrar:

- Nombre del negocio.
- URL de la landing.
- QR correspondiente.
- Botón para descargar QR como imagen PNG, si es razonable implementarlo en esta etapa.

Si la descarga PNG complica demasiado, dejar la función preparada y documentada para la siguiente etapa.

## 12. Home simple de PuntoQR

La landing comercial completa de PuntoQR no es prioridad de esta etapa.

Por ahora, crear una home muy simple en `/` con:

- Frase de presentación.
- Breve explicación.
- Botón para ver la demo.

Texto sugerido:

```txt
PuntoQR convierte tus stickers, envases y tarjetas en puntos de contacto digital.
```

Botón:

```txt
Ver demo
```

Destino:

```txt
/dulces-martina
```

## 13. Futuro panel administrativo

No implementar todavía un panel admin completo, pero dejar la arquitectura preparada.

Más adelante el panel debería permitir:

- Crear nuevo cliente.
- Editar datos del cliente.
- Elegir plantilla.
- Subir logo o imagen.
- Generar QR.
- Ver URL pública.
- Activar o desactivar landing.
- Registrar cambios.
- Ver estadísticas de escaneo.

## 14. Alcance técnico sugerido

Tecnologías sugeridas:

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.
- Vercel para despliegue.
- Datos iniciales en archivo local.
- Más adelante migrable a PostgreSQL, Supabase o Neon.

No usar por ahora:

- WordPress.
- Wix.
- Carrd como backend principal.
- Constructor visual complejo.
- Login de clientes.
- Pagos online.
- Panel de cliente final.

## 15. Criterios de calidad

El MVP debe cumplir:

1. **Claridad comercial:** la landing debe parecer útil para un pequeño negocio real.
2. **Rapidez:** debe cargar rápido.
3. **Simplicidad:** debe ser fácil crear nuevos clientes.
4. **Escalabilidad:** agregar un cliente debe requerir solo agregar un objeto de datos.
5. **Diseño móvil:** debe verse excelente en celular.
6. **Botones grandes:** fáciles de tocar.
7. **Legibilidad:** no usar textos pequeños ni contrastes débiles.
8. **Confianza:** los datos deben verse claros y ordenados.
9. **Reutilización:** usar componentes reutilizables.
10. **Sin sobreingeniería:** no construir funcionalidades innecesarias todavía.

## 16. Componentes sugeridos

Crear componentes reutilizables como:

- `BusinessLanding`
- `BusinessHeader`
- `BusinessProfile`
- `ActionButton`
- `TransferSection`
- `LocationSection`
- `BusinessFooter`
- `QrPreview`

## 17. Alcance exacto de la primera etapa

Implementar ahora:

- Landing demo pública para `/dulces-martina`.
- Sistema por slug para landings.
- Tres variantes visuales: claro, oscuro premium y foto completa.
- Objeto de datos del cliente.
- Botones de acción.
- Copiado de datos de transferencia.
- Home simple de PuntoQR con enlace a la demo.
- Ruta o sección básica para visualizar QR del cliente.

No implementar todavía:

- Login.
- Panel admin completo.
- Subida de imágenes.
- Base de datos.
- Pagos.
- Estadísticas reales.
- Edición por parte del cliente.
- Landing comercial completa.
