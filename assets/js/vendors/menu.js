const menu = document.querySelector(".menu-block");
const menuMain = menu.querySelector(".site-menu-main");
const submenuAll = menu.querySelectorAll(".sub-menu");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
  return array[array.length - 1];
}
function last2(array) {
  return array[array.length - 2];
}

// Klik menu <a> — langsung tutup (mobile only)
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) return;

  const targetLink = e.target.closest("a");
  if (targetLink && window.innerWidth <= 991) {
    console.log("✅ Klik <a>, langsung tutup menu (tanpa cek sub-menu)");
    toggleMenu();
  }
});

// Tombol kembali dari submenu (desktop only)
goBack.addEventListener("click", () => {
  if (subMenuArray.length === 0) return;

  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);

  subMenuArray.pop();
  subMenuTextArray.pop();

  if (lastItem) {
    const el = document.getElementById(lastItem);
    if (el) {
      el.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => el.classList.remove("active"), 300);
    }
    menu.querySelector(".current-menu-title").innerHTML = lastItemText || "";
  }

  if (subMenuArray.length === 0) {
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }
});

// Toggle menu on/off
menuTrigger.addEventListener("click", () => {
  console.log("🍔 Klik tombol buka menu");
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  console.log("❌ Klik tombol close menu");
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  console.log("🌫 Klik di luar menu (overlay)");
  toggleMenu();
});

// Fungsi toggle menu
function toggleMenu() {
  const isOpening = !menu.classList.contains("active");
  console.log(isOpening ? "🟢 Membuka menu" : "🔴 Menutup menu");

  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");

  if (!isOpening) {
    console.log("🧹 Reset semua submenu dan judul");
    submenuAll.forEach((sub) => sub.classList.remove("active"));
    subMenuArray = [];
    subMenuTextArray = [];
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }
}

// Fungsi submenu (khusus desktop atau future use)
function showSubMenu(hasChildren) {
  const subMenu = hasChildren.querySelector(".sub-menu");
  if (!subMenu) return;

  submenuAll.forEach((submenu) => submenu.classList.remove("active"));

  subMenuArray.push(subMenu.id);
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";

  const menuTitle = hasChildren.querySelector(".drop-trigger")?.textContent || "Submenu";
  subMenuTextArray.push(menuTitle);

  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

// Auto close menu jika resize ke desktop
window.onresize = function () {
  if (this.innerWidth > 991 && menu.classList.contains("active")) {
    console.log("📏 Resize ke desktop, tutup menu");
    toggleMenu();
  }
};
