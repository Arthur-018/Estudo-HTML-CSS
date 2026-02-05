// ===== MENU HAMBURGUER =====
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== MODAL SOBRE (DIALOG) =====
const modal = document.querySelector("#aboutModal");
const openBtn = document.querySelector("#openAbout");
const closeBtn = document.querySelector("#closeAbout");

if (modal && openBtn && closeBtn) {
  openBtn.addEventListener("click", () => {
    // se menu estiver aberto no mobile, fecha
    navLinks?.classList.remove("active");
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  // ✅ Fechar clicando fora do conteúdo (no backdrop)
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const clickDentro =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!clickDentro) modal.close();
  });
}
