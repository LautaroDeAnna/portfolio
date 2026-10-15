# Portfolio Personal - Lautaro
> **Desarrollador Multiplataforma (DAM) | Python & 3D Generalist**

Una single-page moderna, minimalista y de alto rendimiento diseñada con HTML5 semántico, Tailwind CSS, Lucide Icons y JavaScript Vanilla.

---

## 🚀 Inicio Rápido

No requiere instalación previa de Node.js ni dependencias pesadas. Puedes abrirlo directamente:

1. **Abrir en navegador**: Haz doble clic en [`index.html`](./index.html) o haz clic derecho > *Abrir con Google Chrome / Firefox / Edge*.
2. **Con Live Server (VS Code)**: Si usas Visual Studio Code, instala la extensión *Live Server* y pulsa en "Go Live" en la barra inferior.
3. **Con Python local**:
   ```bash
   python -m http.server 3000
   ```
   Luego abre `http://localhost:3000` en tu navegador.

---

## 📁 Estructura del Proyecto

```text
Portfolio/
├── index.html        # Estructura semántica, accesibilidad y contenidos
├── css/
│   └── styles.css    # Glow sutil, transiciones de filtro, scrollbar y modal
├── js/
│   └── main.js       # Filtro dinámico, modal HD, menú responsive y copia de email
├── assets/           # Directorio para tus renders y capturas de pantalla
└── README.md         # Documentación y guía de personalización
```

---

## ✏️ Guía de Personalización (Dónde editar)

En [`index.html`](./index.html) encontrarás comentarios explicativos con el prefijo `<!-- EDITAR: ... -->` listos para ubicar rápidamente:

1. **Datos personales y Redes**:
   - Busca `https://github.com/tu-usuario` y cámbialo por tu usuario de GitHub.
   - Busca `https://linkedin.com/in/tu-perfil` y coloca tu enlace de LinkedIn.
   - Busca `contacto@lautaro.dev` y pon tu dirección de email real (tanto en el texto visible como en el `mailto:` y en la variable `emailToCopy` dentro de [`js/main.js`](./js/main.js)).

2. **Proyectos Destacados**:
   - Cada `<article class="project-card">` cuenta con el atributo `data-category="software"` o `data-category="3d"` para el sistema de filtrado interactivo.
   - Reemplaza los placeholders o mockups con tus propias imágenes colocadas en la carpeta `assets/` (ejemplo: `<img src="./assets/mi-captura.png" alt="Mi Proyecto" class="w-full h-full object-cover">`).
   - Para el render 3D, el botón *Ver Render HD* usa los atributos `data-img`, `data-title`, `data-desc` y `data-tags` para abrir el visor en alta definición automáticamente.

3. **Lab & Ejercicios de Clase**:
   - Modifica los enlaces `<a href="...">` de cada tarjeta para enlazar a tus repositorios específicos de GitHub (ejercicios de Java, scripts de Python, proyectos de bases de datos o interfaces en DAM).

---

## 🌐 Cómo Publicar tu Portfolio Gratis en Internet

### Opción 1: GitHub Pages (Recomendado - 2 minutos)
1. Sube este repositorio a tu cuenta de GitHub (`git add .`, `git commit -m "feat: portfolio inicial"`, `git push origin main`).
2. En GitHub, ve a **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Pulsa **Save**. En 1 minuto tendrás tu portfolio online en `https://tu-usuario.github.io/tu-repo`.

### Opción 2: Vercel / Netlify
1. Inicia sesión en [Vercel](https://vercel.com) o [Netlify](https://www.netlify.com).
2. Conecta tu repositorio de GitHub.
3. Al ser un sitio estático puro, se desplegará instantáneamente sin pasos de build.
