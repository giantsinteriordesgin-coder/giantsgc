let currentLang = "en";

// تحميل اللغة المحفوظة أول ما الصفحة تفتح
window.onload = function () {
  const savedLang = localStorage.getItem("lang");

  if (savedLang) {
    currentLang = savedLang;
    applyLang();
  }
};

// تغيير اللغة
function toggleLang(){
  currentLang = currentLang === "en" ? "ar" : "en";

  // حفظ اللغة
  localStorage.setItem("lang", currentLang);

  applyLang();
}

// تطبيق اللغة على الصفحة
function applyLang(){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent = el.getAttribute("data-" + currentLang);
  });

  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelector("button").textContent =
    currentLang === "en" ? "AR" : "EN";
}

function revealOnScroll(){
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
