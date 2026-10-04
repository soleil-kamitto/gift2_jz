# ⌚ El reloj — una carta interactiva en forma de manga

Una página web para regalar. Hay un reloj de bolsillo en el centro de la pantalla: la persona gira la manecilla y cada hora abre un **capítulo de manga** con textos, viñetas y pequeñas animaciones. Al leer todos, se desbloquea el capítulo final.

La versión original está hecha con la historia de *Fullmetal Alchemist* (Ed, Al, Winry, Hughes), pero **está pensada para que la adaptes a tu propia historia, tu pareja, tu amigo o tu anime favorito**. No necesitas saber programar a fondo: casi todo se cambia editando textos.

> Es HTML, CSS y JavaScript puro. Sin frameworks, sin instalación, sin build.

---

## Cómo se ve la estructura

| Hora del reloj | Capítulo | Idea original |
|---|---|---|
| I | `cap1` | La fecha importante y una línea de tiempo |
| III | `cap2` | Una cita famosa y un "intercambio" |
| V | `cap3` | Mantener presionado para "transmutar" y revelar un mensaje |
| VII | `cap4` | Galería de fotos con pies de foto |
| IX | `cap5` | Un viaje por estaciones (metas a futuro) |
| XI | `cap6` | Un mensaje de cuidado y cariño |
| XII | `cap12` | Capítulo final, que se desbloquea al leer los demás |

---

## Probarlo en tu computador

Solo necesitas un navegador. Para evitar problemas con los videos, mejor sírvelo con un servidor local:

```bash
# con Python
python -m http.server 8000

# o con Node
npx serve .
```

Y abre `http://localhost:8000`.

Parámetros útiles en la URL:

- `?calibrar` — muestra ayudas para alinear la manecilla con la esfera del reloj.
- `?reiniciar` — borra los capítulos marcados como leídos en tu navegador.

---

## Cómo adaptarlo a tu historia

Todo lo editable está al inicio de [script.js](script.js).

### 1. Los textos — `CONTENIDO`

El objeto `CONTENIDO` tiene todos los textos de cada capítulo: títulos, globos de diálogo, citas, fechas, estaciones, firma final.

- Cambia el texto entre comillas por el tuyo.
- Los campos que dicen `[ESCRIBE AQUÍ ...]` son huecos para completar. Mientras sigan así (o estén vacíos `""`), ese elemento **no se muestra**.
- Puedes dejar un campo vacío para ocultarlo.

```js
cap2: {
  numero: 'II',
  titulo: 'Intercambio equivalente',
  cita: 'Para obtener algo, es necesario dar algo a cambio.',
  firma: 'Alphonse Elric',
  ...
}
```

Si tu historia no es de alquimia, cambia también los textos de botones y onomatopeyas (`CLAP`, `FLASH`, `TIC TAC`) por lo que encaje con tu anime.

### 2. Las ilustraciones — `ARTE`

El objeto `ARTE` indica qué imagen va en cada lugar y su descripción para lectores de pantalla:

```js
cap1: {
  grande: ['cap1-1.jpg', 'Descripción de la imagen'],
  ...
}
```

Las imágenes viven en `assets/manga/vinetas/`. Para usar tus propias ilustraciones:

1. Crea o genera tus viñetas (blanco y negro, estilo manga, funciona mejor con dibujos densos y no tan vacíos).
2. Guárdalas en `assets/manga/vinetas/` con el nombre que quieras.
3. Actualiza el nombre y la descripción en `ARTE`.

Si tienes hojas completas con varias viñetas, recórtalas en imágenes individuales antes de usarlas.

### 3. Las fotos — capítulo 4

Crea la carpeta `assets/fotos/` y pon tus fotos como `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` y escribe el pie de foto de cada una en `cap4.fotos`. Puedes agregar o quitar fotos de la lista.

### 4. El reloj — `RELOJ`

Las imágenes del reloj están en `assets/` (`reloj-poster.jpg`, `reloj-abierto.jpg`, `reloj.mp4`, `reloj.webm`). Si cambias el reloj por otro diseño:

1. Reemplaza las imágenes y el video manteniendo los mismos nombres (o actualiza las rutas en [index.html](index.html)).
2. Abre la página con `?calibrar`.
3. Ajusta `ancho`, `alto`, `centroX`, `centroY` y `radio` en `RELOJ` hasta que la manecilla quede centrada sobre la esfera.

### 5. Cantidad y posición de capítulos — `HORAS_CAPITULO`

```js
const HORAS_CAPITULO = { 1: 'cap1', 3: 'cap2', 5: 'cap3', 7: 'cap4', 9: 'cap5', 11: 'cap6', 12: 'cap12' };
```

Cada número es la hora de la esfera donde vive un capítulo. Puedes mover capítulos de hora. El capítulo de la hora 12 es el final y se desbloquea al leer los demás.

### 6. Título, colores y fuentes

- Título y descripción de la pestaña: [index.html](index.html).
- Colores, tipografías y estilos: [styles.css](styles.css).

---

## Publicarlo

Es un sitio estático, así que sirve cualquier hosting gratuito: Vercel, Netlify, GitHub Pages o Cloudflare Pages. Solo apunta el servicio a la carpeta raíz del proyecto.

---

## Consejos para que funcione como regalo

- Escribe los textos pensando en una persona concreta: los detalles pequeños (fechas, lugares, bromas internas) son lo que hace que emocione.
- Busca una metáfora de tu anime, serie o libro favorito que conecte con su historia real.
- Revisa que no queden `[ESCRIBE AQUÍ ...]` sin completar si no quieres huecos.
- Pruébalo en el celular: es lo más probable que se use.

---

## Aviso sobre las ilustraciones

Los personajes y la obra que inspiran la versión original pertenecen a sus respectivos creadores. Este proyecto es un regalo personal sin fines de lucro. Si lo adaptas y lo publicas, usa ilustraciones propias o con permiso, y respeta los derechos de la obra en la que te inspires.
