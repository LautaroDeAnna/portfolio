/**
 * ==========================================================================
 * LÓGICA INTERACTIVA - PORTFOLIO LAUTARO
 * Desarrollador Multiplataforma (DAM) | Python & 3D Generalist
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Sistema de Filtrado de Proyectos
  initProjectFilters();

  // 3. Modal / Lightbox para Renders 3D y Demos
  initModalViewer();

  // 4. Copiar correo al portapapeles
  initCopyEmail();

  // 5. Menú móvil responsive
  initMobileMenu();

  // 6. Actualizar año en el Footer dinámicamente
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

/**
 * Filtrado dinámico de proyectos mediante vanilla JS
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Actualizar estilos activos de los botones
      filterButtons.forEach((b) => {
        b.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-500', 'shadow-indigo-500/20');
        b.classList.add('bg-zinc-900/80', 'text-zinc-400', 'border-zinc-800', 'hover:text-zinc-200');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.remove('bg-zinc-900/80', 'text-zinc-400', 'border-zinc-800', 'hover:text-zinc-200');
      btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-500', 'shadow-indigo-500/20');
      btn.setAttribute('aria-selected', 'true');

      // Filtrar cards con animación suave
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden-card');
          card.classList.add('visible-card');
        } else {
          card.classList.remove('visible-card');
          card.classList.add('hidden-card');
        }
      });
    });
  });
}

/**
 * Visor Modal para renders 3D en alta resolución
 */
function initModalViewer() {
  const modal = document.getElementById('renderModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');
  const triggerButtons = document.querySelectorAll('[data-open-modal]');

  if (!modal) return;

  const openModal = (btn) => {
    const title = btn.getAttribute('data-title') || 'Vista Previa';
    const desc = btn.getAttribute('data-desc') || '';
    const imgUrl = btn.getAttribute('data-img') || '';
    const tags = (btn.getAttribute('data-tags') || '').split(',').map((t) => t.trim());

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalImage) {
      modalImage.src = imgUrl;
      modalImage.alt = title;
    }

    if (modalTags) {
      modalTags.innerHTML = '';
      tags.forEach((tag) => {
        if (!tag) return;
        const span = document.createElement('span');
        span.className = 'px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60';
        span.textContent = tag;
        modalTags.appendChild(span);
      });
    }

    modal.classList.remove('hidden');
    // Forzar repaint antes de añadir clase de opacidad
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  };

  triggerButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Cerrar con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * Función para copiar correo electrónico al portapapeles con feedback visual
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const emailToCopy = 'contacto@lautaro.dev'; // EDITAR: Tu correo electrónico real

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      if (copyFeedback) {
        copyFeedback.classList.remove('opacity-0', 'pointer-events-none');
        copyFeedback.classList.add('opacity-100');
        setTimeout(() => {
          copyFeedback.classList.remove('opacity-100');
          copyFeedback.classList.add('opacity-0', 'pointer-events-none');
        }, 2500);
      }
    } catch (err) {
      console.warn('No se pudo copiar automáticamente:', err);
    }
  });
}

/**
 * Control del menú de navegación móvil
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
