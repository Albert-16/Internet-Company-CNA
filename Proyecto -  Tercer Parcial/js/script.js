/* Navegacios*/
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // Botón para volver al inicio
};
// FUNCIÓN QUE CONTRAE LA BARRA DE NAVBAR AÑADIENDO LA CLASE TOP-NAV-COLLAPSE
function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
		(document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// NAVBAR PARA MOVILES
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// HOVER EN ESCRITORIOS
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function () {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}

// HOVER
const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
    document
        .querySelector(".dropdown")
        .addEventListener("mouseleave", toggleDropdown);
    document
        .querySelector(".dropdown")
        .addEventListener("mouseover", toggleDropdown);

    // CLICK
    document.querySelector(".dropdown").addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
}

/* CARD SLIDER - SWIPER*/
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
        // window <= 767px
        767: {
        slidesPerView: 1,
        },
        // window <= 991px
        991: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
    },
});

/*BOTÓN VOLVER ARRIBA */
//Para el Boton
myButton = document.getElementById("myBtn");

// CUANDO EL USUARIO SE DESPLAZA HACIA ABAJO 20PX DESDE LA PARTE SUPERIOR DEL DOCUMENTO, MUESTRA EL BOTÓN
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
/* BOTÓN VOLVER ARRIBA */
// OBTENER EL BOTÓN
// CUANDO EL USUARIO HAGA CLIC EN EL BOTÓN, SE DESPLAZARA A LA PARTE SUPERIOR
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// AOS ANIMACIÓN DE DESPLAZAMIENTO
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // Indicamos que la funcion solo debe hacerse una vez al desplazaese hacia abajo
});
