'use strict';

/* =====================================================================
   CONTENIDO · Todos los textos de la experiencia.
   Los campos que dicen "[ESCRIBE AQUÍ ...]" los llenas tú.
   Mientras sigan así (o vacíos ""), ese elemento no se muestra.
   ===================================================================== */
const CONTENIDO = {
  inicio: {
    tocar: 'Toca el reloj',
    instruccion: 'Gira la manecilla. Cada hora guarda un capítulo.',
    guardar: 'Guárdalo. Ábrelo cuando necesites recordar.',
    volver: '⌚ volver al reloj',
  },

  cap1: {
    numero: 'I',
    titulo: "Don't forget 3. Oct.",
    globo: 'Hoy es 3 de octubre. Ed quemó su casa y grabó esta fecha en su reloj para no tener a dónde volver y obligarse a seguir adelante.',
    fechas: [
      { fecha: '2 de agosto', texto: 'Quito' },
      { fecha: '[ESCRIBE AQUÍ fecha]', texto: 'me pediste ser tu novia' },
      { fecha: '3 de octubre', texto: 'este capítulo' },
    ],
    onomatopeya: 'TIC TAC',
  },

  cap2: {
    numero: 'II',
    titulo: 'Intercambio equivalente',
    cita: 'Para obtener algo, es necesario dar algo a cambio.',
    firma: 'Alphonse Elric',
    globoIzquierda: 'Nosotros damos llamadas largas, mensajes a deshoras y abrazos que tenemos que guardar para después.',
    globoDerecha: 'Y a cambio tenemos algo que vale muchísimo más.',
  },

  cap3: {
    numero: 'III',
    titulo: 'Junta las manos',
    texto: 'Ed no necesitaba dibujar un círculo. Le bastaba con juntar las manos.',
    boton: 'Mantén presionado para transmutar',
    onomatopeyaCarga: 'CLAP',
    onomatopeyaFinal: 'FLASH',
    revelacion: 'Transmuté todo tu cansancio en esto:',
    orgullo: 'Estoy muy orgullosa de ti.',
    detalle: 'De todo lo que haces, de cómo sigues aunque estés cansado y de la persona que estás construyendo.',
    logro: '[ESCRIBE AQUÍ un logro suyo del que estés orgullosa]',
  },

  cap4: {
    numero: 'IV',
    titulo: 'Como Hughes y sus fotos',
    globo: 'Hughes le enseñaba las fotos de su familia a cualquiera que se le cruzara. Yo haría lo mismo contigo.',
    fotos: [
      { src: 'assets/fotos/1.jpg', pie: '[ESCRIBE AQUÍ]' },
      { src: 'assets/fotos/2.jpg', pie: '[ESCRIBE AQUÍ]' },
      { src: 'assets/fotos/3.jpg', pie: '[ESCRIBE AQUÍ]' },
      { src: 'assets/fotos/4.jpg', pie: '[ESCRIBE AQUÍ]' },
    ],
  },

  cap5: {
    numero: 'V',
    titulo: 'El viaje de los hermanos',
    cita: 'Una lección sin dolor no tiene sentido. Pero al superarla, ganas un corazón de acero.',
    firma: 'Edward Elric',
    estaciones: [
      { nombre: 'Estación 1', donde: 'Quito, agosto de 2026', texto: 'empezamos oficialmente' },
      { nombre: 'Estación 2', donde: 'Diciembre de 2027', texto: 'terminamos nuestras carreras' },
      { nombre: 'Estación 3', donde: 'Tú', texto: '[ESCRIBE AQUÍ su meta profesional]' },
      { nombre: 'Estación 4', donde: 'Yo', texto: 'investigar en inteligencia artificial y hacer mi maestría afuera' },
      { nombre: 'Estación final', donde: 'Nosotros', texto: 'cumplir nuestros sueños sin soltarnos' },
    ],
  },

  cap6: {
    numero: 'VI',
    titulo: 'Yo ajusto los tornillos',
    globo1: 'Winry siempre estaba lista para arreglar el automail de Ed.',
    globo2: 'Yo también quiero estar para ti. No tienes que ser de acero todo el tiempo.',
    texto: 'Cuando te canses, aquí tienes a alguien que te escucha y te vuelve a mandar al camino. Y si algo se nos rompe, lo hablamos y lo arreglamos juntos.',
    onomatopeya: 'CLANK',
    gatito: 'Al también lo hubiera querido adoptar.',
  },

  cap12: {
    numero: 'XII',
    titulo: 'Levántate y camina',
    frases: ['Levántate y camina.', 'Sigue adelante.', 'Tienes dos buenas piernas.'],
    firma: 'Edward Elric',
    propuesta: [
      'En Quito me diste un anillo. Hoy te hago una propuesta, como Ed a Winry.',
      'Te propongo un intercambio equivalente. Yo te doy la mitad de mi vida y tú me das la mitad de la tuya.',
    ],
    chiste: 'Aunque, pensándolo bien, eso no es equivalente. Yo te doy mucho más que la mitad.',
    cierre: 'Feliz 3 de octubre, Jz. No lo olvides nunca.',
    firmaFinal: 'Soleil',
  },
};

/* =====================================================================
   ARTE · Viñetas ilustradas de cada capítulo (assets/manga/vinetas/).
   Cada una es [archivo, descripción para lectores de pantalla].
   ===================================================================== */
const ARTE = {
  cap1: {
    grande: ['cap1-1.jpg', 'Ed y Al de espaldas mirando cómo arde su casa'],
    fechas: [
      ['cap1-2.jpg', 'Quito al atardecer, con el Panecillo'],
      ['cap1-3.jpg', 'Dos manos a punto de tomarse'],
      ['cap1-4.jpg', 'Una mano de automail sostiene el reloj de alquimista estatal'],
    ],
  },
  cap2: {
    cita: ['cap2-1.jpg', 'Al con su armadura sobre un círculo de transmutación'],
    izquierda: ['cap2-2.jpg', 'Un celular encendido sobre la almohada, de noche'],
    derecha: ['cap2-3.jpg', 'Una balanza: el anillo pesa más que el celular y la carta'],
    extra: ['cap2-4.jpg', 'Ed y Al de niños dibujando un círculo de transmutación'],
  },
  cap3: {
    arriba: ['cap3-1.jpg', 'Ed junta las manos y salen rayos de alquimia'],
    final: ['cap3-4.jpg', 'Ed de pie, orgulloso, con el abrigo al viento'],
  },
  cap4: {
    hughes: ['cap4-1.jpg', 'Hughes le muestra una foto de su familia a Roy, que lo mira fastidiado'],
    gags: [
      ['cap4-2.jpg', 'Hughes feliz hablando por teléfono'],
      ['cap4-4.jpg', 'Hughes sonríe mientras guarda una foto en su bolsillo'],
    ],
  },
  cap5: {
    cita: ['cap5-1.jpg', 'Ed y Al viajando en tren'],
    estaciones: [
      ['cap5-2.jpg', 'Una estación de tren antigua en Quito con una locomotora de vapor'],
      ['cap5-3.jpg', 'Dos birretes de graduación lanzados al aire'],
      ['cap5-4.jpg', 'Por la ventana del tren se ve una ciudad tecnológica'],
      ['cap5-5.jpg', 'Una laptop con una red neuronal, una maleta y un avión'],
      ['cap5-6.jpg', 'Dos personas caminan de la mano por las vías hacia el amanecer'],
    ],
  },
  cap6: {
    v1: ['cap6-1.jpg', 'Winry arregla el brazo de automail de Ed'],
    v2: ['cap6-2.jpg', 'Una mano toma la mano de metal de Ed'],
    taller: ['cap6-3.jpg', 'El taller de automail, con Den dormido en el piso'],
    gatito: 'cap6-gatito.png',
  },
  cap12: {
    frases: [
      ['cap12-1.jpg', 'Ed de pie entre las ruinas'],
      ['cap12-2.jpg', 'Unas botas dan un paso adelante'],
      ['cap12-3.jpg', 'Unas piernas corren levantando polvo'],
    ],
    propuesta: ['cap12-4.jpg', 'Ed, en la puerta del tren, voltea hacia Winry en el andén'],
    chiste: ['cap12-5.jpg', 'Winry en versión chibi, nerviosa, contando con los dedos'],
    cierre: ['cap12-6.jpg', 'Los Andes al amanecer, con un tren cruzando un puente'],
  },
};

/* =====================================================================
   RELOJ · Coordenadas de la esfera, en píxeles de reloj-abierto.jpg.
   Si la manecilla no queda centrada, abre la página con ?calibrar
   y ajusta estos números.
   ===================================================================== */
const RELOJ = {
  ancho: 848,            // tamaño real de reloj-abierto.jpg (y del poster y el video)
  alto: 1264,
  centroX: 424,          // centro de la esfera (la esfera está arriba; la tapa abierta, abajo)
  centroY: 584,
  radio: 245,            // radio de la esfera color crema
  radioNumeros: 0.80,    // a qué distancia del centro están los números (fracción del radio)
  largoManecilla: 0.70,  // largo de la manecilla roja (fracción del radio)
};

/* ===================================================================== */

// Hora de la esfera donde vive cada capítulo: repartidos por todo el contorno
// (I, III, V, VII, IX, XI) y el final arriba, en el XII.
const HORAS_CAPITULO = { 1: 'cap1', 3: 'cap2', 5: 'cap3', 7: 'cap4', 9: 'cap5', 11: 'cap6', 12: 'cap12' };
const PARADAS = Object.keys(HORAS_CAPITULO).map(Number).sort((a, b) => a - b); // en sentido horario
const PRIMEROS = PARADAS.filter((h) => h !== 12);
const ROMANOS = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII' };
const CLAVE_LEIDOS = 'jz-reloj-leidos-v2';

const params = new URLSearchParams(location.search);
const CALIBRAR = params.has('calibrar');
const movReducido = window.matchMedia('(prefers-reduced-motion: reduce)');

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
const lleno = (t) => typeof t === 'string' && t.trim() !== '' && !/\[\s*ESCRIBE AQU[IÍ]/i.test(t);
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- Capítulos leídos (se recuerdan en este navegador) ---------- */
try { localStorage.removeItem('jz-reloj-leidos'); } catch (e) {} // formato anterior
if (params.has('reiniciar')) { try { localStorage.removeItem(CLAVE_LEIDOS); } catch (e) {} }
const leidos = new Set(); // claves de capítulo ('cap1'…), así no dependen de la hora donde estén
try { JSON.parse(localStorage.getItem(CLAVE_LEIDOS) || '[]').forEach((c) => leidos.add(String(c))); } catch (e) {}
function guardarLeidos() { try { localStorage.setItem(CLAVE_LEIDOS, JSON.stringify([...leidos])); } catch (e) {} }
const leido = (h) => leidos.has(HORAS_CAPITULO[h]);
const seisLeidos = () => PRIMEROS.every(leido);

/* ---------- Elementos ---------- */
const el = {
  escenario: $('#escenario'),
  zona: $('.reloj-zona'),
  reloj: $('#reloj'),
  video: $('#reloj-video'),
  esfera: $('#esfera'),
  pista: $('#pista'),
  capitulo: $('#capitulo'),
  barra: $('.capitulo-barra'),
  scroll: $('#capitulo-scroll'),
  pagina: $('#pagina'),
  destello: $('#destello'),
};

let estado = 'cerrado';   // cerrado · abriendo · navegando · capitulo · cerrando · guardado
let angulo = 0;           // ángulo continuo de la manecilla (grados, 0 = XII, sentido horario)
let horaActual = 12;
let capituloAbierto = null;
let animandoManecilla = false;
let limpiezas = [];

/* =====================================================================
   ESTADO GENERAL
   ===================================================================== */
function ponerEstado(nuevo) {
  estado = nuevo;
  el.escenario.dataset.estado = nuevo;
  const r = el.reloj;
  if (nuevo === 'cerrado' || nuevo === 'guardado') {
    r.setAttribute('role', 'button');
    r.setAttribute('tabindex', '0');
    r.setAttribute('aria-label', 'Abrir el reloj');
  } else if (nuevo === 'capitulo') {
    r.setAttribute('role', 'button');
    r.setAttribute('tabindex', '-1');
    r.setAttribute('aria-label', 'Volver al reloj');
  } else {
    r.removeAttribute('role');
    r.removeAttribute('tabindex');
    r.removeAttribute('aria-label');
  }
  el.esfera.setAttribute('tabindex', nuevo === 'navegando' ? '0' : '-1');
  el.escenario.setAttribute('aria-hidden', nuevo === 'capitulo' ? 'true' : 'false');
}

let pistaTimer = 0;
function ponerPista(texto) {
  clearTimeout(pistaTimer);
  el.pista.classList.add('oculta');
  pistaTimer = setTimeout(() => {
    el.pista.textContent = texto || '';
    el.pista.classList.toggle('oculta', !texto);
  }, 260);
}

/* =====================================================================
   APERTURA DEL RELOJ (video una sola vez → reloj-abierto.jpg)
   ===================================================================== */
function abrirReloj() {
  if (estado !== 'cerrado' && estado !== 'guardado') return;
  ponerEstado('abriendo');
  ponerPista('');
  const v = el.video;
  // Si falla la última fuente (mp4 y webm), no hay video: se abre directo
  const fuentes = v.querySelectorAll('source');
  const ultimaFuente = fuentes[fuentes.length - 1];
  let terminado = false;
  let seguro = 0;

  const terminar = () => {
    if (terminado) return;
    terminado = true;
    clearTimeout(seguro);
    v.removeEventListener('playing', alReproducir);
    v.removeEventListener('ended', terminar);
    v.removeEventListener('error', terminar);
    if (ultimaFuente) ultimaFuente.removeEventListener('error', terminar);
    el.reloj.dataset.vista = 'abierto';
    setTimeout(() => {
      ponerEstado('navegando');
      actualizarHoras();
      ponerPista(CONTENIDO.inicio.instruccion);
      if (document.activeElement === el.reloj || document.activeElement === document.body) {
        el.esfera.focus({ preventScroll: true });
      }
    }, 450);
  };
  const alReproducir = () => {
    clearTimeout(seguro);
    el.reloj.dataset.vista = 'video';
    // Si el video se queda trabado, seguimos igual
    const dur = isFinite(v.duration) && v.duration > 0 ? v.duration : 8;
    seguro = setTimeout(terminar, (dur + 3) * 1000);
  };

  v.addEventListener('playing', alReproducir);
  v.addEventListener('ended', terminar);
  v.addEventListener('error', terminar);
  if (ultimaFuente) ultimaFuente.addEventListener('error', terminar);
  seguro = setTimeout(terminar, 5000); // por si el video nunca arranca

  try { v.currentTime = 0; } catch (e) {}
  // Si la precarga ya había fallado, reintenta: o reproduce o avisa el error al instante
  if (v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) v.load();
  const p = v.play();
  if (p && p.catch) p.catch(terminar);
}

/* =====================================================================
   ESFERA SVG · manecilla roja, puntos brillantes, calibración
   ===================================================================== */
const polar = (grados, r) => {
  const a = (grados * Math.PI) / 180;
  return [RELOJ.centroX + r * Math.sin(a), RELOJ.centroY - r * Math.cos(a)];
};

// La manecilla y los puntos se dibujan a una escala fija (radio R0, centro 0,0)
// y un solo transform los lleva al centro y radio reales: así guardan la proporción con cualquier imagen.
const R0 = 380;

function construirEsfera() {
  const { centroX: cx, centroY: cy, radio: r, ancho, alto } = RELOJ;
  el.esfera.setAttribute('viewBox', `0 0 ${ancho} ${alto}`);
  el.zona.style.aspectRatio = `${ancho} / ${alto}`;
  const k = r / R0;
  const rn = R0 * RELOJ.radioNumeros;
  const L = R0 * RELOJ.largoManecilla;
  const p = (grados, rr) => { const a = (grados * Math.PI) / 180; return [rr * Math.sin(a), -rr * Math.cos(a)]; };

  let horas = '';
  PARADAS.forEach((h, i) => {
    const [x, y] = p(h * 30, rn);
    horas += `
      <g class="hora" data-hora="${h}">
        <circle class="hora-marca" cx="${x}" cy="${y}" r="${R0 * 0.135}"/>
        <circle class="hora-halo" cx="${x}" cy="${y}" r="${R0 * 0.055}" style="--retraso:-${(i * 0.35).toFixed(2)}s"/>
        <circle class="hora-punto" cx="${x}" cy="${y}" r="${R0 * 0.028}"/>
      </g>`;
  });

  // Manecilla original: hoja fina con punta de flecha y contrapeso en anillo
  const mano = `M 0 ${-L} L 24 ${-L + 62} L 8 ${-L + 54} L 9 46 L -9 46 L -8 ${-L + 54} L -24 ${-L + 62} Z`;

  el.esfera.innerHTML = `
    <defs>
      <filter id="f-brillo" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="7"/>
      </filter>
      <filter id="f-sombra" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="5" dy="8" stdDeviation="5" flood-color="#000" flood-opacity=".45"/>
      </filter>
    </defs>
    <g transform="translate(${cx} ${cy}) scale(${k})">
      <circle class="esfera-foco" cx="0" cy="0" r="${R0 + 18}"/>
      <g class="horas">${horas}</g>
      <g id="manecilla" class="manecilla" filter="url(#f-sombra)">
        <path class="manecilla-hoja" d="${mano}"/>
        <path class="manecilla-filo" d="M 0 ${-L + 8} L 0 -30"/>
        <circle class="manecilla-contrapeso" cx="0" cy="70" r="22"/>
        <circle class="manecilla-eje" cx="0" cy="0" r="24"/>
        <circle class="manecilla-eje-centro" cx="0" cy="0" r="8"/>
      </g>
      <circle id="esfera-toque" class="esfera-toque" cx="0" cy="0" r="${R0 * 1.05}"/>
    </g>
    ${CALIBRAR ? capaCalibracion() : ''}
  `;
  pintarManecilla();
}

function capaCalibracion() {
  const { centroX: cx, centroY: cy, radio: r } = RELOJ;
  const rn = r * RELOJ.radioNumeros;
  const k = r / R0;
  let puntos = '';
  for (let h = 1; h <= 12; h++) {
    const [x, y] = polar(h * 30, rn);
    const [tx, ty] = polar(h * 30, rn - 70 * k);
    puntos += `<circle cx="${x}" cy="${y}" r="${12 * k}" fill="#00E5FF"/>
      <text x="${tx}" y="${ty + 12 * k}" text-anchor="middle" font-size="${34 * k}" font-family="sans-serif" fill="#00E5FF" font-weight="700">${h}</text>`;
  }
  return `
    <g class="calibracion-capa" pointer-events="none">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#00E5FF" stroke-width="${4 * k}" stroke-dasharray="${18 * k} ${10 * k}"/>
      <circle cx="${cx}" cy="${cy}" r="${rn}" fill="none" stroke="#FF00C8" stroke-width="${3 * k}" stroke-dasharray="${6 * k} ${8 * k}"/>
      <path d="M ${cx - 40 * k} ${cy} H ${cx + 40 * k} M ${cx} ${cy - 40 * k} V ${cy + 40 * k}" stroke="#00E5FF" stroke-width="${4 * k}"/>
      ${puntos}
    </g>`;
}

function pintarManecilla() {
  $('#manecilla').setAttribute('transform', `rotate(${angulo})`);
}

const normal = (a) => ((a % 360) + 360) % 360;

/* La parada (hora con capítulo) más cercana a un ángulo */
function paradaCercana(a) {
  let mejor = PARADAS[0];
  let menor = 361;
  PARADAS.forEach((h) => {
    const d = Math.abs(((normal(a) - (h % 12) * 30 + 540) % 360) - 180);
    if (d < menor) { menor = d; mejor = h; }
  });
  return mejor;
}

function actualizarAria() {
  const h = horaActual;
  const clave = HORAS_CAPITULO[h];
  let texto = ROMANOS[h];
  if (clave) {
    texto += ` · Capítulo ${CONTENIDO[clave].numero}: ${CONTENIDO[clave].titulo}`;
    if (h === 12 && !seisLeidos()) texto += ' (se abre cuando leas los capítulos I a VI)';
    else if (leido(h)) texto += ' (leído)';
  }
  el.esfera.setAttribute('aria-valuenow', String(h));
  el.esfera.setAttribute('aria-valuetext', texto);
}

function actualizarHoras(cerca) {
  const desbloq = seisLeidos();
  $$('.hora', el.esfera).forEach((g) => {
    const h = Number(g.dataset.hora);
    g.classList.toggle('leida', leido(h));
    g.classList.toggle('cerca', h === cerca);
    if (h === 12) {
      g.classList.toggle('bloqueada', !desbloq);
      g.classList.toggle('desbloqueada', desbloq);
    }
  });
  actualizarAria();
}

/* Mueve la manecilla al ángulo destino por el camino más corto (sin animar) */
function moverA(destino) {
  const actual = normal(angulo);
  let delta = normal(destino) - actual;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  angulo += delta;
  horaActual = paradaCercana(angulo);
  pintarManecilla();
  actualizarHoras(horaActual);
}

/* Gira con animación hasta una hora */
function girarA(hora, duracion = 420, vueltasExtra = 0) {
  const destino = (hora % 12) * 30;
  let delta = normal(destino) - normal(angulo);
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  delta += 360 * vueltasExtra;
  const inicio = angulo;
  const dur = movReducido.matches ? Math.min(duracion, 200) : duracion;
  animandoManecilla = true;
  return new Promise((resolve) => {
    const t0 = performance.now();
    const paso = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      angulo = inicio + delta * e;
      pintarManecilla();
      if (k < 1) requestAnimationFrame(paso);
      else {
        angulo = inicio + delta;
        horaActual = hora;
        pintarManecilla();
        actualizarHoras(hora);
        animandoManecilla = false;
        resolve();
      }
    };
    requestAnimationFrame(paso);
  });
}

function intentarAbrir(h) {
  const clave = HORAS_CAPITULO[h];
  if (!clave) return;
  if (h === 12 && !seisLeidos()) {
    const g = $('.hora[data-hora="12"]', el.esfera);
    g.classList.remove('niega');
    void g.getBoundingClientRect();
    g.classList.add('niega');
    return;
  }
  setTimeout(() => abrirCapitulo(h), 180);
}

/* ---------- Interacción con la manecilla ---------- */
function puntoSVG(e) {
  const pt = el.esfera.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;
  return pt.matrixTransform(el.esfera.getScreenCTM().inverse());
}
function anguloDePunto(p) {
  return normal((Math.atan2(p.x - RELOJ.centroX, RELOJ.centroY - p.y) * 180) / Math.PI);
}

let arrastrando = false;
function iniciarInteraccionEsfera() {
  const toque = $('#esfera-toque');

  toque.addEventListener('pointerdown', (e) => {
    if (estado !== 'navegando' || animandoManecilla) return;
    const p = puntoSVG(e);
    const d = Math.hypot(p.x - RELOJ.centroX, p.y - RELOJ.centroY);
    if (d < RELOJ.radio * 0.16) return;
    e.preventDefault();
    arrastrando = true;
    toque.setPointerCapture(e.pointerId);
    el.esfera.classList.add('arrastrando');
    moverA(anguloDePunto(p));
  });
  toque.addEventListener('pointermove', (e) => {
    if (!arrastrando) return;
    moverA(anguloDePunto(puntoSVG(e)));
  });
  const soltar = () => {
    if (!arrastrando) return;
    arrastrando = false;
    el.esfera.classList.remove('arrastrando');
    const h = paradaCercana(angulo);
    girarA(h, 260).then(() => intentarAbrir(h));
  };
  toque.addEventListener('pointerup', soltar);
  toque.addEventListener('pointercancel', soltar);
  toque.addEventListener('lostpointercapture', soltar);

  el.esfera.addEventListener('keydown', (e) => {
    if (estado !== 'navegando' || animandoManecilla) return;
    // Las flechas saltan de capítulo en capítulo por todo el contorno
    const i = PARADAS.indexOf(horaActual);
    let h;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') h = PARADAS[(i + 1) % PARADAS.length];
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') h = PARADAS[(i - 1 + PARADAS.length) % PARADAS.length];
    else if (e.key === 'Home') h = PARADAS[0];
    else if (e.key === 'End') h = 12;
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); intentarAbrir(horaActual); return; }
    else return;
    e.preventDefault();
    girarA(h, 220);
  });
}

/* =====================================================================
   CAPÍTULOS · abrir / volver
   ===================================================================== */
function moverRelojEsquina() {
  const rect = el.zona.getBoundingClientRect();
  const ancho = window.innerWidth >= 900 ? 76 : 56;
  const barra = el.barra.offsetHeight || 100;
  const izq = 14;
  const arriba = Math.max(6, (barra - ancho * 1.5) / 2);
  const s = ancho / rect.width;
  el.reloj.style.transform = `translate(${izq - rect.left}px, ${arriba - rect.top}px) scale(${s})`;
}

function abrirCapitulo(h) {
  if (estado !== 'navegando') return;
  const clave = HORAS_CAPITULO[h];
  capituloAbierto = h;
  ponerEstado('capitulo');
  ponerPista('');

  el.pagina.className = `pagina pagina-${clave}`;
  el.pagina.innerHTML = RENDER[clave](CONTENIDO[clave]);
  el.capitulo.classList.toggle('capitulo-invertido', h === 12);
  el.capitulo.hidden = false;
  el.scroll.scrollTop = 0;

  void el.pagina.offsetWidth;
  el.capitulo.classList.add('visible');
  el.pagina.classList.add('entra');
  moverRelojEsquina();

  leidos.add(clave);
  guardarLeidos();
  actualizarHoras();

  if (INIT[clave]) INIT[clave](el.pagina);
  const t = $('#titulo-cap', el.pagina);
  if (t) setTimeout(() => t.focus({ preventScroll: true }), 60);
}

function volverAlReloj() {
  if (estado !== 'capitulo') return;
  const h = capituloAbierto;
  ponerEstado(h === 12 ? 'cerrando' : 'navegando');
  limpiezas.forEach((fn) => { try { fn(); } catch (e) {} });
  limpiezas = [];

  el.pagina.classList.remove('entra');
  el.pagina.classList.add('sale');
  el.capitulo.classList.remove('visible');
  el.reloj.style.transform = '';

  setTimeout(() => {
    el.capitulo.hidden = true;
    el.pagina.innerHTML = '';
    el.pagina.classList.remove('sale');
  }, 420);

  if (h === 12) { cerrarFinal(); return; }

  ponerPista(CONTENIDO.inicio.instruccion);
  el.esfera.focus({ preventScroll: true });

  if (seisLeidos() && !leido(12)) {
    // El XII se ilumina y la manecilla gira sola hasta él
    setTimeout(async () => {
      if (estado !== 'navegando') return;
      const g = $('.hora[data-hora="12"]', el.esfera);
      g.classList.add('ilumina');
      await espera(900);
      if (estado !== 'navegando') return;
      await girarA(12, 2200, 1);
      await espera(500);
      abrirCapitulo(12);
    }, 900);
  }
}

async function cerrarFinal() {
  ponerPista('');
  await espera(800);
  el.reloj.dataset.vista = 'cerrando';
  await espera(1500);
  el.reloj.dataset.vista = 'poster';
  angulo = 0;
  horaActual = 12;
  pintarManecilla();
  ponerEstado('guardado');
  ponerPista(CONTENIDO.inicio.guardar);
  el.reloj.focus({ preventScroll: true });
}

/* =====================================================================
   PIEZAS DE DIBUJO (todo original)
   ===================================================================== */
const RUTA_VINETAS = 'assets/manga/vinetas/';
// Ilustración de una viñeta; "dentro" va encima del dibujo (por ejemplo, una onomatopeya)
const arte = (a, clase = '', dentro = '') => (a ? `
  <div class="arte-caja ${clase}">
    <img class="arte" src="${RUTA_VINETAS}${esc(a[0])}" alt="${esc(a[1])}" loading="lazy" decoding="async" draggable="false">
    ${dentro}
  </div>` : '');

const onom = (t, clase = '') => (lleno(t) ? `<span class="onom ${clase}" aria-hidden="true">${esc(t)}</span>` : '');
const globo = (t, cola = 'izq', clase = '') => (lleno(t) ? `<p class="globo cola-${cola} ${clase}">${esc(t)}</p>` : '');

function cabecera(d) {
  return `
    <header class="pagina-cabecera">
      <p class="pagina-num">Capítulo ${esc(d.numero)}</p>
      <h2 class="pagina-titulo" id="titulo-cap" tabindex="-1">${esc(d.titulo)}</h2>
    </header>`;
}
function pie() {
  return `<footer class="pagina-pie"><button type="button" class="boton-volver" data-volver>${esc(CONTENIDO.inicio.volver)}</button></footer>`;
}

/* Círculo de transmutación original: cada trazo se dibuja por separado */
function circuloTransmutacion() {
  const f = (n) => n.toFixed(2);
  const circ = (r, cx = 0, cy = 0) => `M${f(cx - r)} ${f(cy)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
  const pt = (gr, r) => { const a = (gr * Math.PI) / 180; return [r * Math.sin(a), -r * Math.cos(a)]; };
  const poli = (n, r, rot) => {
    let d = '';
    for (let i = 0; i < n; i++) { const [x, y] = pt(rot + (i * 360) / n, r); d += `${i ? 'L' : 'M'}${f(x)} ${f(y)}`; }
    return d + 'Z';
  };
  const t = [];
  t.push({ d: circ(186), w: 4 });
  t.push({ d: circ(172), w: 2.5 });
  let marcas = '';
  for (let i = 0; i < 72; i++) {
    const [x1, y1] = pt(i * 5, i % 6 === 0 ? 158 : 165);
    const [x2, y2] = pt(i * 5, 172);
    marcas += `M${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}`;
  }
  t.push({ d: marcas, w: 2, fade: true });
  t.push({ d: poli(3, 158, 0), w: 3 });
  t.push({ d: poli(3, 158, 180), w: 3 });
  for (let i = 0; i < 6; i++) { const [x, y] = pt(i * 60, 158); t.push({ d: circ(13, x, y), w: 2.5 }); }
  t.push({ d: circ(122), w: 2 });
  t.push({ d: circ(100), w: 3 });
  t.push({ d: poli(4, 100, 0), w: 2 });
  t.push({ d: poli(4, 100, 45), w: 2 });
  // pequeños signos entre las puntas de la estrella
  for (let i = 0; i < 6; i++) {
    const [x, y] = pt(30 + i * 60, 142);
    let d;
    if (i % 3 === 0) d = circ(8, x, y) + `M${f(x - 12)} ${f(y)}L${f(x + 12)} ${f(y)}`;
    else if (i % 3 === 1) d = `M${f(x)} ${f(y - 9)}L${f(x + 8)} ${f(y + 6)}L${f(x - 8)} ${f(y + 6)}Z`;
    else d = `M${f(x)} ${f(y + 9)}L${f(x + 8)} ${f(y - 6)}L${f(x - 8)} ${f(y - 6)}ZM${f(x - 6)} ${f(y - 1)}L${f(x + 6)} ${f(y - 1)}`;
    t.push({ d, w: 2 });
  }
  t.push({ d: circ(46), w: 2.5 });
  return `<svg class="circulo" viewBox="-200 -200 400 400" aria-hidden="true" focusable="false">
    ${t.map((x) => `<path class="trazo${x.fade ? ' trazo-fade' : ''}" d="${x.d}" stroke-width="${x.w}" pathLength="1"/>`).join('')}
  </svg>`;
}

/* Engranajes que encajan entre sí */
function engranajePath(cx, cy, dientes, m, desfase) {
  const rp = dientes * m;
  const ro = rp + m;
  const ri = rp - 1.25 * m;
  const paso = 360 / dientes;
  const p = (gr, r) => { const a = (gr * Math.PI) / 180; return `${(cx + r * Math.sin(a)).toFixed(2)} ${(cy - r * Math.cos(a)).toFixed(2)}`; };
  let d = '';
  for (let k = 0; k < dientes; k++) {
    const c = desfase + k * paso;
    d += `${k ? 'L' : 'M'}${p(c - paso * 0.5, ri)}L${p(c - paso * 0.27, ri)}L${p(c - paso * 0.15, ro)}L${p(c + paso * 0.15, ro)}L${p(c + paso * 0.27, ri)}`;
  }
  d += 'Z';
  return { d, rp };
}
function engranajes() {
  const m = 5;
  const g1 = { cx: 105, cy: 112, t: 12 };
  const th = -20; // dirección de g1 a g2
  const g2 = { t: 8 };
  const rp1 = g1.t * m, rp2 = g2.t * m;
  g2.cx = g1.cx + (rp1 + rp2) * Math.sin((th * Math.PI) / 180 + Math.PI / 2);
  g2.cy = g1.cy - (rp1 + rp2) * Math.cos((th * Math.PI) / 180 + Math.PI / 2);
  // direcciones medidas como "horas": 0 = arriba, sentido horario
  const dir12 = 90 + th;
  g1.of = dir12;
  g2.of = dir12 + 180 + 180 / g2.t;
  const g3 = { t: 6 };
  const dir23 = 150;
  const rp3 = g3.t * m;
  g3.cx = g2.cx + (rp2 + rp3) * Math.sin((dir23 * Math.PI) / 180);
  g3.cy = g2.cy - (rp2 + rp3) * Math.cos((dir23 * Math.PI) / 180);
  const fase2 = normal(dir23 - g2.of) % (360 / g2.t);
  g3.of = dir23 + 180 + fase2 * (rp2 / rp3) + 180 / g3.t;

  const dibujar = (g, i) => {
    const { d, rp } = engranajePath(g.cx, g.cy, g.t, m, g.of);
    let agujeros = '';
    if (g.t >= 8) {
      const n = g.t >= 12 ? 5 : 4;
      for (let k = 0; k < n; k++) {
        const a = (k * 360) / n + 18;
        const x = g.cx + rp * 0.55 * Math.sin((a * Math.PI) / 180);
        const y = g.cy - rp * 0.55 * Math.cos((a * Math.PI) / 180);
        agujeros += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${(rp * 0.17).toFixed(2)}"/>`;
      }
    }
    return `<g class="engranaje" data-dientes="${g.t}" data-sentido="${i === 1 ? -1 : 1}" style="transform-origin:${g.cx.toFixed(2)}px ${g.cy.toFixed(2)}px">
      <path class="engranaje-cuerpo" d="${d}"/>
      ${agujeros}
      <circle class="engranaje-eje" cx="${g.cx.toFixed(2)}" cy="${g.cy.toFixed(2)}" r="${(rp * 0.22).toFixed(2)}"/>
      <circle class="engranaje-centro" cx="${g.cx.toFixed(2)}" cy="${g.cy.toFixed(2)}" r="3.5"/>
    </g>`;
  };
  return `<svg class="engranajes-svg" viewBox="0 0 300 200" aria-hidden="true" focusable="false">${dibujar(g1, 0)}${dibujar(g2, 1)}${dibujar(g3, 2)}</svg>`;
}

const SVG_TREN = `<svg viewBox="0 0 36 66" aria-hidden="true" focusable="false">
  <circle cx="13" cy="2" r="3.2" class="t-humo"/>
  <circle cx="21" cy="-3" r="4" class="t-humo"/>
  <rect x="4" y="6" width="28" height="19" rx="3" class="t-cuerpo"/>
  <rect x="9" y="10" width="18" height="11" rx="2" class="t-techo"/>
  <rect x="8" y="23" width="20" height="35" rx="10" class="t-cuerpo"/>
  <path d="M4 25 H32" class="t-raya"/>
  <circle cx="18" cy="35" r="4" class="t-cupula"/>
  <circle cx="18" cy="49" r="4.6" class="t-chimenea"/>
  <path d="M6 59 H30 L26 64 H10 Z" class="t-chimenea"/>
</svg>`;

/* =====================================================================
   RENDER DE CADA CAPÍTULO
   ===================================================================== */
const RENDER = {
  cap1(d) {
    const A = ARTE.cap1;
    const fechas = d.fechas.map((f, i) => ({ ...f, arte: A.fechas[i] })).filter((f) => lleno(f.fecha) && lleno(f.texto));
    return `${cabecera(d)}
      <div class="vinetas vinetas-c1" style="--n:${Math.max(1, fechas.length)}">
        <section class="vineta v-grande con-arte">
          ${arte(A.grande, '', onom(d.onomatopeya, 'onom-tictac pop'))}
          <div class="texto-arte">${globo(d.globo, 'arriba', 'globo-grande')}</div>
        </section>
        ${fechas.map((f, i) => `
          <section class="vineta v-fecha con-arte">
            ${arte(f.arte)}
            <div class="placa">
              <p class="grabado" style="--giro:${[-2, 1.5, -1][i % 3]}deg">
                <span class="grabado-fecha">${esc(f.fecha)}</span><span class="grabado-sep"> · </span><span class="grabado-texto">${esc(f.texto)}</span>
              </p>
            </div>
          </section>`).join('')}
      </div>
      ${pie()}`;
  },

  cap2(d) {
    const A = ARTE.cap2;
    return `${cabecera(d)}
      <div class="vinetas vinetas-c2">
        <section class="vineta v-ancha con-arte">
          ${arte(A.cita)}
          <div class="texto-arte">
            <blockquote class="cita">
              <p>${esc(d.cita)}</p>
              ${lleno(d.firma) ? `<footer class="firma">${esc(d.firma)}</footer>` : ''}
            </blockquote>
          </div>
        </section>
        <section class="vineta v-izq con-arte">
          ${arte(A.izquierda)}
          <div class="texto-arte">${globo(d.globoIzquierda, 'arriba')}</div>
        </section>
        <section class="vineta v-der con-arte">
          ${arte(A.derecha)}
          <div class="texto-arte">${globo(d.globoDerecha, 'arriba')}</div>
        </section>
        <section class="vineta v-extra con-arte">${arte(A.extra)}</section>
      </div>
      ${pie()}`;
  },

  cap3(d) {
    const A = ARTE.cap3;
    return `${cabecera(d)}
      <div class="vinetas vinetas-c3">
        <section class="vineta v-c3-arte con-arte">
          ${arte(A.arriba)}
          ${lleno(d.texto) ? `<div class="texto-arte"><p class="narracion">${esc(d.texto)}</p></div>` : ''}
        </section>
        <section class="vineta v-completa trama trama-suave">
          <div class="circulo-zona">
            <canvas class="chispas" aria-hidden="true"></canvas>
            ${circuloTransmutacion()}
            <div class="revelacion" role="status">
              <p class="revelacion-1">${esc(d.revelacion)}</p>
              <p class="revelacion-2">${esc(d.orgullo)}</p>
            </div>
            ${onom(d.onomatopeyaCarga, 'onom-clap')}
            ${onom(d.onomatopeyaFinal, 'onom-flash')}
          </div>
          <button type="button" class="boton-transmutar">${esc(d.boton)}</button>
          <div class="detalle">
            ${A.final ? `<div class="detalle-arte">${arte(A.final)}</div>` : ''}
            ${lleno(d.detalle) ? `<p>${esc(d.detalle)}</p>` : ''}
            ${lleno(d.logro) ? `<p class="detalle-logro">${esc(d.logro)}</p>` : ''}
          </div>
        </section>
      </div>
      ${pie()}`;
  },

  cap4(d) {
    const A = ARTE.cap4;
    const clases = ['alta', 'ancha', 'peq-a', 'peq-b'];
    return `${cabecera(d)}
      <div class="vinetas vinetas-c4">
        <section class="vineta v-hughes con-arte">
          <div class="texto-arte texto-arriba">${globo(d.globo, 'izq')}</div>
          ${arte(A.hughes)}
        </section>
        <div class="fotos">
          ${d.fotos.map((f, i) => {
            const pie = lleno(f.pie) ? f.pie : '';
            const alt = pie ? `Foto ${i + 1}: ${pie}` : `Foto nuestra número ${i + 1}`;
            return `
            <figure class="vineta foto foto-${clases[i]} trama">
              <button type="button" class="foto-boton" aria-pressed="false" aria-label="${esc(alt)}. Tocar para ver a color" style="--giro:${[-2.2, 1.6, 2.4, -1.4][i]}deg">
                <span class="foto-marco">
                  <img class="foto-bn" src="${esc(f.src)}" alt="${esc(alt)}" draggable="false">
                  <img class="foto-color" src="${esc(f.src)}" alt="" aria-hidden="true" draggable="false">
                </span>
              </button>
              ${pie ? `<figcaption class="foto-pie">${esc(pie)}</figcaption>` : ''}
            </figure>`;
          }).join('')}
        </div>
        ${A.gags.map((g, i) => `<section class="vineta v-gag v-gag-${i + 1} con-arte">${arte(g)}</section>`).join('')}
      </div>
      ${pie()}`;
  },

  cap5(d) {
    const A = ARTE.cap5;
    const est = d.estaciones.map((e, i) => ({ ...e, arte: A.estaciones[i] })).filter((e) => lleno(e.texto));
    return `${cabecera(d)}
      <section class="vineta v-cita-c5 con-arte">
        ${arte(A.cita)}
        <div class="texto-arte">
          <blockquote class="cita">
            <p>${esc(d.cita)}</p>
            ${lleno(d.firma) ? `<footer class="firma">${esc(d.firma)}</footer>` : ''}
          </blockquote>
        </div>
      </section>
      <div class="viaje">
        <svg class="via" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="durmientes" width="26" height="16" patternUnits="userSpaceOnUse">
              <rect x="0" y="6" width="26" height="4.5" rx="1" fill="#111"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="26" height="100%" fill="url(#durmientes)"/>
          <line x1="6" y1="0" x2="6" y2="100%" stroke="#111" stroke-width="3"/>
          <line x1="20" y1="0" x2="20" y2="100%" stroke="#111" stroke-width="3"/>
        </svg>
        <div class="tren" aria-hidden="true">${SVG_TREN}</div>
        <ol class="estaciones">
          ${est.map((e, i) => `
            <li class="estacion vineta ${i === est.length - 1 ? 'estacion-final' : ''}">
              ${arte(e.arte, 'estacion-arte')}
              <p class="estacion-nombre">${esc(e.nombre)}</p>
              <p class="estacion-donde">${esc(e.donde)}</p>
              <p class="estacion-texto">${esc(e.texto)}</p>
            </li>`).join('')}
        </ol>
      </div>
      ${pie()}`;
  },

  cap6(d) {
    const A = ARTE.cap6;
    return `${cabecera(d)}
      <div class="vinetas vinetas-c6">
        <section class="vineta v-c6a con-arte">
          ${arte(A.v1)}
          <div class="texto-arte">${globo(d.globo1, 'arriba')}</div>
        </section>
        <section class="vineta v-c6b con-arte">
          ${arte(A.v2)}
          <div class="texto-arte">${globo(d.globo2, 'arriba')}</div>
        </section>
        <section class="vineta v-c6c con-arte">
          ${arte(A.taller)}
          ${onom(d.onomatopeya, 'onom-clank')}
          <div class="taller-centro">
            <button type="button" class="engranajes" aria-label="Girar los engranajes">${engranajes()}</button>
            ${globo(d.texto, 'arriba', 'globo-c6c')}
          </div>
          <div class="gatito-zona">
            <span class="globo globo-gatito" role="status"></span>
            <button type="button" class="gatito" aria-label="Gatito" aria-expanded="false">
              <img src="${RUTA_VINETAS}${A.gatito}" alt="" draggable="false">
            </button>
          </div>
        </section>
      </div>
      ${pie()}`;
  },

  cap12(d) {
    const A = ARTE.cap12;
    const frases = d.frases.map((f, i) => ({ f, a: A.frases[i] })).filter((x) => lleno(x.f));
    return `${cabecera(d)}
      <div class="vinetas vinetas-c12">
        ${frases.map((x, i) => `
          <section class="vineta v-frase v-frase-${i + 1} con-arte revelar">
            ${arte(x.a)}
            <div class="texto-arte">
              <div class="frase-caja">
                <p class="frase">${esc(x.f)}</p>
                ${i === frases.length - 1 && lleno(d.firma) ? `<p class="firma">${esc(d.firma)}</p>` : ''}
              </div>
            </div>
          </section>`).join('')}
        <section class="vineta v-propuesta con-arte revelar">
          ${arte(A.propuesta)}
          <div class="texto-propuesta">
            ${d.propuesta.filter(lleno).map((p, i) => `<p class="propuesta propuesta-${i + 1}">${esc(p)}</p>`).join('')}
          </div>
        </section>
        <section class="vineta v-chiste con-arte revelar">
          <div class="texto-arte texto-arriba">${globo(d.chiste, 'izq')}</div>
          ${arte(A.chiste)}
        </section>
        <section class="vineta v-cierre con-arte revelar">
          ${arte(A.cierre)}
          <div class="cierre">
            ${lleno(d.cierre) ? `<p class="cierre-texto">${esc(d.cierre)}</p>` : ''}
            ${lleno(d.firmaFinal) ? `<p class="cierre-firma">${esc(d.firmaFinal)}</p>` : ''}
          </div>
        </section>
      </div>
      ${pie()}`;
  },
};

/* =====================================================================
   INTERACCIONES DE CADA CAPÍTULO
   ===================================================================== */
function repetirAnimacion(nodo, clase) {
  nodo.classList.remove(clase);
  void nodo.getBoundingClientRect();
  nodo.classList.add(clase);
}

/* --- Chispas en canvas (Capítulo III) --- */
function crearChispas(canvas, zona) {
  const ctx = canvas.getContext('2d');
  let parts = [];
  let w = 0, h = 0;
  const ajustar = () => {
    const r = zona.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  ajustar();
  window.addEventListener('resize', ajustar);
  limpiezas.push(() => window.removeEventListener('resize', ajustar));

  const nueva = (fuerza) => {
    const a = Math.random() * Math.PI * 2;
    const R = (Math.min(w, h) / 2) * (0.45 + Math.random() * 0.5);
    const v = (0.05 + Math.random() * 0.22) * fuerza;
    parts.push({
      x: w / 2 + Math.cos(a) * R, y: h / 2 + Math.sin(a) * R,
      vx: Math.cos(a) * v + (Math.random() - 0.5) * 0.08, vy: Math.sin(a) * v + (Math.random() - 0.5) * 0.08,
      vida: 1, dec: 0.0012 + Math.random() * 0.0016,
      blanca: Math.random() < 0.45,
    });
  };
  return {
    emitir(p) { const n = 1 + Math.floor(p * 3); for (let i = 0; i < n; i++) nueva(1); },
    estallido() { for (let i = 0; i < 90; i++) nueva(2.6); },
    activas: () => parts.length > 0,
    actualizar(dt) {
      ctx.clearRect(0, 0, w, h);
      parts = parts.filter((q) => (q.vida -= q.dec * dt) > 0);
      ctx.lineCap = 'round';
      for (const q of parts) {
        q.x += q.vx * dt; q.y += q.vy * dt;
        ctx.globalAlpha = Math.max(0, q.vida);
        ctx.lineWidth = q.blanca ? 3 : 2.4;
        ctx.strokeStyle = q.blanca ? '#ffffff' : '#B3121B';
        ctx.shadowColor = q.blanca ? 'rgba(179,18,27,.9)' : 'rgba(17,17,17,.35)';
        ctx.shadowBlur = q.blanca ? 8 : 2;
        ctx.beginPath();
        ctx.moveTo(q.x, q.y);
        ctx.lineTo(q.x - q.vx * 26, q.y - q.vy * 26);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    },
  };
}

const INIT = {
  cap3(p) {
    const boton = $('.boton-transmutar', p);
    const zona = $('.circulo-zona', p);
    const trazos = $$('.circulo .trazo', p);
    const clap = $('.onom-clap', p);
    const flash = $('.onom-flash', p);
    const seccion = $('.v-completa', p);
    const chispas = crearChispas($('.chispas', p), zona);
    const N = trazos.length;
    let progreso = 0, presionado = false, completo = false, raf = 0, ultimo = 0;

    const pintar = () => {
      trazos.forEach((t, i) => {
        const ini = (i / N) * 0.72;
        const local = Math.min(1, Math.max(0, (progreso - ini) / 0.28));
        if (t.classList.contains('trazo-fade')) t.style.opacity = local;
        else t.style.strokeDashoffset = String(1 - local);
      });
      if (clap) {
        clap.style.opacity = progreso > 0.01 ? Math.min(1, progreso * 2.5) : 0;
        clap.style.transform = `translate(-50%, -50%) rotate(-10deg) scale(${0.35 + progreso * 1.05})`;
      }
      boton.style.setProperty('--carga', progreso.toFixed(3));
      zona.classList.toggle('cargando', progreso > 0 && !completo);
    };

    const completar = () => {
      completo = true;
      presionado = false;
      progreso = 1;
      pintar();
      if (navigator.vibrate) { try { navigator.vibrate(80); } catch (e) {} }
      repetirAnimacion(el.destello, 'activo');
      zona.classList.add('completo');
      seccion.classList.add('completo');
      if (clap) clap.style.opacity = 0;
      if (flash) repetirAnimacion(flash, 'pop');
      if (!movReducido.matches) chispas.estallido();
      boton.setAttribute('aria-hidden', 'true');
      boton.tabIndex = -1;
      const t = setTimeout(() => boton.classList.add('oculto'), 500);
      limpiezas.push(() => clearTimeout(t));
    };

    const paso = (t) => {
      const dt = ultimo ? Math.min(64, t - ultimo) : 16;
      ultimo = t;
      if (!completo) {
        progreso = presionado ? Math.min(1, progreso + dt / 2000) : Math.max(0, progreso - dt / 700);
        pintar();
        if (presionado && !movReducido.matches) chispas.emitir(progreso);
        if (progreso >= 1) completar();
      }
      chispas.actualizar(dt);
      if (presionado || (!completo && progreso > 0) || chispas.activas()) raf = requestAnimationFrame(paso);
      else { raf = 0; ultimo = 0; }
    };
    const arrancar = () => { if (!raf) { ultimo = 0; raf = requestAnimationFrame(paso); } };
    const presionar = () => { if (completo) return; presionado = true; boton.classList.add('presionado'); arrancar(); };
    const soltar = () => { presionado = false; boton.classList.remove('presionado'); };

    boton.addEventListener('pointerdown', (e) => { e.preventDefault(); try { boton.setPointerCapture(e.pointerId); } catch (x) {} presionar(); });
    boton.addEventListener('pointerup', soltar);
    boton.addEventListener('pointercancel', soltar);
    boton.addEventListener('lostpointercapture', soltar);
    boton.addEventListener('contextmenu', (e) => e.preventDefault());
    boton.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) presionar(); }
    });
    boton.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') soltar(); });
    boton.addEventListener('blur', soltar);

    pintar();
    limpiezas.push(() => { cancelAnimationFrame(raf); raf = 0; });
  },

  cap4(p) {
    const fotos = $('.fotos', p);
    const figuras = $$('.foto', p);
    let faltan = 0;
    figuras.forEach((fig) => {
      const b = $('.foto-boton', fig);
      const img = $('.foto-bn', fig);
      // Si una foto todavía no existe, se esconde su viñeta en vez de dejar un marco vacío
      const falla = () => {
        if (fig.hidden) return;
        fig.hidden = true;
        faltan += 1;
        fotos.classList.add('incompleta');
        fotos.hidden = faltan === figuras.length;
      };
      img.addEventListener('error', falla);
      if (img.complete && img.naturalWidth === 0) falla();
      b.addEventListener('click', () => {
        const on = !fig.classList.contains('a-color');
        fig.classList.toggle('a-color', on);
        b.setAttribute('aria-pressed', String(on));
      });
    });
  },

  cap5(p) {
    const tren = $('.tren', p);
    const estaciones = $$('.estacion', p);
    let maxIdx = -1;

    const moverTren = () => {
      if (maxIdx < 0) return;
      const e = estaciones[maxIdx];
      const y = e.offsetTop + e.offsetHeight / 2 - tren.offsetHeight / 2;
      tren.style.transform = `translateY(${Math.max(0, y)}px)`;
    };
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('visible');
        maxIdx = Math.max(maxIdx, estaciones.indexOf(en.target));
        io.unobserve(en.target);
      });
      moverTren();
    }, { root: el.scroll, threshold: 0.55 });
    estaciones.forEach((e) => io.observe(e));
    $$('.estacion img', p).forEach((im) => im.addEventListener('load', moverTren));
    window.addEventListener('resize', moverTren);
    limpiezas.push(() => { io.disconnect(); window.removeEventListener('resize', moverTren); });
  },

  cap6(p) {
    const boton = $('.engranajes', p);
    const clank = $('.onom-clank', p);
    const grupos = $$('.engranaje', p);
    let giro = 0;
    boton.addEventListener('click', () => {
      const antes = giro;
      giro += 120;
      grupos.forEach((g) => {
        const t = Number(g.dataset.dientes);
        const sentido = Number(g.dataset.sentido);
        const f = (12 / t) * sentido;
        const anterior = g._anim;
        g._anim = g.animate(
          [{ transform: `rotate(${antes * f}deg)` }, { transform: `rotate(${giro * f}deg)` }],
          { duration: movReducido.matches ? 300 : 1300, easing: 'cubic-bezier(.25,1.35,.5,1)', fill: 'forwards' }
        );
        if (anterior) anterior.cancel();
      });
      if (clank) repetirAnimacion(clank, 'pop');
    });

    const gato = $('.gatito', p);
    const globito = $('.globo-gatito', p);
    gato.addEventListener('click', () => {
      const abierto = gato.getAttribute('aria-expanded') !== 'true';
      gato.setAttribute('aria-expanded', String(abierto));
      globito.textContent = abierto ? CONTENIDO.cap6.gatito : '';
      globito.classList.toggle('visible', abierto);
      repetirAnimacion(gato, 'salta');
    });
  },

  cap12(p) {
    const items = $$('.revelar', p);
    const cola = [];
    let ocupado = true;
    const timers = [];
    const procesar = () => {
      if (ocupado || !cola.length) return;
      ocupado = true;
      cola.sort((a, b) => items.indexOf(a) - items.indexOf(b));
      cola.shift().classList.add('visible');
      timers.push(setTimeout(() => { ocupado = false; procesar(); }, 1100));
    };
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        cola.push(en.target);
        io.unobserve(en.target);
      });
      procesar();
    }, { root: el.scroll, threshold: 0.35 });
    items.forEach((i) => io.observe(i));
    timers.push(setTimeout(() => { ocupado = false; procesar(); }, 900));
    limpiezas.push(() => { io.disconnect(); timers.forEach(clearTimeout); });
  },
};

/* =====================================================================
   ARRANQUE
   ===================================================================== */
function iniciar() {
  construirEsfera();
  iniciarInteraccionEsfera();
  $$('[data-volver]').forEach((b) => { b.textContent = CONTENIDO.inicio.volver; });

  el.reloj.addEventListener('click', () => {
    if (estado === 'cerrado' || estado === 'guardado') abrirReloj();
    else if (estado === 'capitulo') volverAlReloj();
  });
  el.reloj.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && (estado === 'cerrado' || estado === 'guardado')) {
      e.preventDefault();
      abrirReloj();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-volver]')) volverAlReloj();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && estado === 'capitulo') volverAlReloj();
  });
  window.addEventListener('resize', () => { if (estado === 'capitulo') moverRelojEsquina(); });

  ponerEstado('cerrado');
  actualizarHoras();

  if (CALIBRAR) {
    el.reloj.dataset.vista = 'abierto';
    ponerEstado('navegando');
    const c = $('#calibracion');
    c.hidden = false;
    c.textContent = `Calibración · centroX ${RELOJ.centroX} · centroY ${RELOJ.centroY} · radio ${RELOJ.radio} · radioNumeros ${RELOJ.radioNumeros} — ajusta RELOJ al inicio de script.js`;
    ponerPista(CONTENIDO.inicio.instruccion);
  } else {
    ponerPista(CONTENIDO.inicio.tocar);
  }
}

iniciar();
