document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {

      // Cerrar todas las demás
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Abrir / cerrar la actual
      item.classList.toggle('active');
    });
  });
});


//JS DE PQRS
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pqrsForm');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generar radicado
    const radicado = `PRS-${Date.now().toString().slice(-6)}`;
    document.getElementById('radicado').value = radicado;
    document.getElementById('fecha').value = new Date().toLocaleDateString();

    form.classList.add('sending');

    emailjs.sendForm(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      form
    )
      .then(() => {
        form.classList.remove('sending');
        form.reset();

        alert(
          `Solicitud enviada correctamente.\n` +
          `Número de radicado: ${radicado}`
        );
      })
      .catch(() => {
        form.classList.remove('sending');
        alert('No fue posible enviar la solicitud. Inténtalo nuevamente.');
      });
  });
});


/*de quienes somos*/

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

/*QUIZ DE PERFUME IDEAL*/

/* MATRIZ DE PERFUMES */

const perfumes = [
  {
    id: "praessia-01",
    name: "Inspiración Olfativa: One Million",
    image: "imágenes/perfumes/one_million.webp",
    personalities: {
      fresco_vital: 15,
      libre_natural: 10,
      elegante_clasico: 25,
      esencial_moderno: 30,
      sensual_profundo: 85,
      calido_envolvente: 90,
      audaz_magnetico: 95,
      creativo_alternativo: 35
    },
    gender: "masculina"
  },

  {
    id: "praessia-02",
    name: "Inspiración Olfativa: 212 VIP",
    image: "imágenes/perfumes/212_vip_men.webp",
    personalities: {
      fresco_vital: 20,
      libre_natural: 15,
      elegante_clasico: 30,
      esencial_moderno: 45,
      sensual_profundo: 70,
      calido_envolvente: 75,
      audaz_magnetico: 85,
      creativo_alternativo: 40
    },
    gender: "masculina"
  },

  {
    id: "praessia-03",
    name: "Inspiración Olfativa: Acqua Di Gio",
    image: "x",
    personalities: {
      personalities: {
        fresco_vital: 95,
        libre_natural: 90,
        elegante_clasico: 65,
        esencial_moderno: 55,
        sensual_profundo: 30,
        calido_envolvente: 20,
        audaz_magnetico: 25,
        creativo_alternativo: 20
      },
      gender: "masculina"
    },
  },

  {
    id: "praessia-04",
    name: "Inspiración Olfativa: Can Can Paris Hilton",
    image: "x",
    personalities: {
      personalities: {
        fresco_vital: 20,
        libre_natural: 15,
        elegante_clasico: 35,
        esencial_moderno: 45,
        sensual_profundo: 85,
        calido_envolvente: 80,
        audaz_magnetico: 60,
        creativo_alternativo: 40
      },
      gender: "femenina"
    },
  },

  {
    id: "praessia-05",
    name: "Inspiración Olfativa: Loco por ti",
    image: "x",
    personalities: {
      fresco_vital: 30,
      libre_natural: 25,
      elegante_clasico: 30,
      esencial_moderno: 50,
      sensual_profundo: 75,
      calido_envolvente: 85,
      audaz_magnetico: 40,
      creativo_alternativo: 35
    },
    gender: "femenina"
  },

  {
    id: "praessia-06",
    name: "Inspiración Olfativa: Good Girl CH",
    image: "x",
    personalities: {
      fresco_vital: 15,
      libre_natural: 10,
      elegante_clasico: 55,
      esencial_moderno: 60,
      sensual_profundo: 90,
      calido_envolvente: 85,
      audaz_magnetico: 90,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-07",
    name: "Inspiración Olfativa: 212",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 55,
      elegante_clasico: 85,
      esencial_moderno: 75,
      sensual_profundo: 25,
      calido_envolvente: 30,
      audaz_magnetico: 30,
      creativo_alternativo: 25
    },
    gender: "masculina"
  },

  {
    id: "praessia-08",
    name: "Inspiración Olfativa: 212 Heroes",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 70,
      elegante_clasico: 40,
      esencial_moderno: 65,
      sensual_profundo: 35,
      calido_envolvente: 30,
      audaz_magnetico: 55,
      creativo_alternativo: 60
    },
    gender: "masculina"
  },

  {
    id: "praessia-09",
    name: "Inspiración Olfativa: 212 VIP Black",
    image: "x",
    personalities: {
      fresco_vital: 20,
      libre_natural: 25,
      elegante_clasico: 45,
      esencial_moderno: 55,
      sensual_profundo: 85,
      calido_envolvente: 70,
      audaz_magnetico: 80,
      creativo_alternativo: 60
    },
    gender: "masculina"
  },

  {
    id: "praessia-10",
    name: "Inspiración Olfativa: Polo Blue",
    image: "x",
    personalities: {
      fresco_vital: 90,
      libre_natural: 65,
      elegante_clasico: 70,
      esencial_moderno: 65,
      sensual_profundo: 20,
      calido_envolvente: 25,
      audaz_magnetico: 20,
      creativo_alternativo: 25
    },
    gender: "masculina"
  },

  {
    id: "praessia-11",
    name: "Inspiración Olfativa: 360",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 55,
      elegante_clasico: 75,
      esencial_moderno: 45,
      sensual_profundo: 20,
      calido_envolvente: 30,
      audaz_magnetico: 25,
      creativo_alternativo: 20
    },
    gender: "masculina"
  },

  {
    id: "praessia-12",
    name: "Inspiración Olfativa: Le Male Elixir",
    image: "x",
    personalities: {
      fresco_vital: 10,
      libre_natural: 20,
      elegante_clasico: 55,
      esencial_moderno: 65,
      sensual_profundo: 95,
      calido_envolvente: 90,
      audaz_magnetico: 85,
      creativo_alternativo: 65
    },
    gender: "masculina"
  },

  {
    id: "praessia-13",
    name: "Inspiración Olfativa: Black XS L'EXCE",
    image: "x",
    personalities: {
      fresco_vital: 15,
      libre_natural: 25,
      elegante_clasico: 35,
      esencial_moderno: 50,
      sensual_profundo: 75,
      calido_envolvente: 80,
      audaz_magnetico: 85,
      creativo_alternativo: 80
    },
    gender: "masculina"
  },

  {
    id: "praessia-14",
    name: "Inspiración Olfativa: CK ONE",
    image: "x",
    personalities: {
      fresco_vital: 95,
      libre_natural: 80,
      elegante_clasico: 40,
      esencial_moderno: 85,
      sensual_profundo: 15,
      calido_envolvente: 20,
      audaz_magnetico: 15,
      creativo_alternativo: 55
    },
    gender: "masculina"
  },

  {
    id: "praessia-15",
    name: "Inspiración Olfativa: Eternity",
    image: "x",
    personalities: {
      fresco_vital: 75,
      libre_natural: 60,
      elegante_clasico: 90,
      esencial_moderno: 40,
      sensual_profundo: 20,
      calido_envolvente: 35,
      audaz_magnetico: 20,
      creativo_alternativo: 25
    },
    gender: "masculina"
  },

  {
    id: "praessia-16",
    name: "Inspiración Olfativa: Fahrenheit",
    image: "x",
    personalities: {
      fresco_vital: 25,
      libre_natural: 35,
      elegante_clasico: 70,
      esencial_moderno: 30,
      sensual_profundo: 65,
      calido_envolvente: 45,
      audaz_magnetico: 75,
      creativo_alternativo: 80
    },
    gender: "masculina"
  },

  {
    id: "praessia-17",
    name: "Inspiración Olfativa: Hugo Boss",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 80,
      elegante_clasico: 40,
      esencial_moderno: 55,
      sensual_profundo: 20,
      calido_envolvente: 25,
      audaz_magnetico: 45,
      creativo_alternativo: 35
    },
    gender: "masculina"
  },

  {
    id: "praessia-18",
    name: "Inspiración Olfativa: Invictus",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 45,
      elegante_clasico: 35,
      esencial_moderno: 55,
      sensual_profundo: 40,
      calido_envolvente: 35,
      audaz_magnetico: 90,
      creativo_alternativo: 30
    },
    gender: "masculina"
  },

  {
    id: "praessia-19",
    name: "Inspiración Olfativa: Jean Paul Goutier",
    image: "x",
    personalities: {
      fresco_vital: 35,
      libre_natural: 40,
      elegante_clasico: 45,
      esencial_moderno: 40,
      sensual_profundo: 85,
      calido_envolvente: 80,
      audaz_magnetico: 75,
      creativo_alternativo: 45
    },
    gender: "masculina"
  },

  {
    id: "praessia-20",
    name: "Inspiración Olfativa: L.12.12 White",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 55,
      elegante_clasico: 60,
      esencial_moderno: 70,
      sensual_profundo: 25,
      calido_envolvente: 20,
      audaz_magnetico: 40,
      creativo_alternativo: 30
    },
    gender: "masculina"
  },

  {
    id: "praessia-21",
    name: "Inspiración Olfativa: Lacoste Red",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 65,
      elegante_clasico: 30,
      esencial_moderno: 55,
      sensual_profundo: 30,
      calido_envolvente: 25,
      audaz_magnetico: 60,
      creativo_alternativo: 35
    },
    gender: "masculina"
  },

  {
    id: "praessia-22",
    name: "Inspiración Olfativa: Lapidus",
    image: "x",
    personalities: {
      fresco_vital: 15,
      libre_natural: 20,
      elegante_clasico: 85,
      esencial_moderno: 15,
      sensual_profundo: 70,
      calido_envolvente: 85,
      audaz_magnetico: 80,
      creativo_alternativo: 30
    },
    gender: "masculina"
  },

  {
    id: "praessia-23",
    name: "Inspiración Olfativa: Tommy",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 70,
      elegante_clasico: 35,
      esencial_moderno: 55,
      sensual_profundo: 25,
      calido_envolvente: 20,
      audaz_magnetico: 45,
      creativo_alternativo: 35
    },
    gender: "masculina"
  },

  {
    id: "praessia-24",
    name: "Inspiración Olfativa: Ultramale Jean Paul Goutier",
    image: "x",
    personalities: {
      fresco_vital: 20,
      libre_natural: 25,
      elegante_clasico: 30,
      esencial_moderno: 35,
      sensual_profundo: 95,
      calido_envolvente: 90,
      audaz_magnetico: 90,
      creativo_alternativo: 55
    },
    gender: "masculina"
  },

  {
    id: "praessia-25",
    name: "Inspiración Olfativa: 212 VIP Rose",
    image: "x",
    personalities: {
      fresco_vital: 75,
      libre_natural: 45,
      elegante_clasico: 60,
      esencial_moderno: 70,
      sensual_profundo: 45,
      calido_envolvente: 40,
      audaz_magnetico: 70,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-26",
    name: "Inspiración Olfativa: Paris Hilton",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 55,
      elegante_clasico: 40,
      esencial_moderno: 65,
      sensual_profundo: 30,
      calido_envolvente: 35,
      audaz_magnetico: 50,
      creativo_alternativo: 40
    },
    gender: "femenina"
  },

  {
    id: "praessia-27",
    name: "Inspiración Olfativa: 360",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 65,
      elegante_clasico: 70,
      esencial_moderno: 75,
      sensual_profundo: 25,
      calido_envolvente: 35,
      audaz_magnetico: 40,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-28",
    name: "Inspiración Olfativa: Pure Seduction",
    image: "x",
    personalities: {
      fresco_vital: 70,
      libre_natural: 40,
      elegante_clasico: 25,
      esencial_moderno: 55,
      sensual_profundo: 65,
      calido_envolvente: 60,
      audaz_magnetico: 70,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-29",
    name: "Inspiración Olfativa: Coconut Passion",
    image: "x",
    personalities: {
      fresco_vital: 60,
      libre_natural: 55,
      elegante_clasico: 20,
      esencial_moderno: 45,
      sensual_profundo: 60,
      calido_envolvente: 85,
      audaz_magnetico: 55,
      creativo_alternativo: 40
    },
    gender: "femenina"
  },

  {
    id: "praessia-30",
    name: "Inspiración Olfativa: BFF Kim Kardashian",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 50,
      elegante_clasico: 30,
      esencial_moderno: 65,
      sensual_profundo: 40,
      calido_envolvente: 45,
      audaz_magnetico: 55,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-31",
    name: "Inspiración Olfativa: Cloud Ariana Grande",
    image: "x",
    personalities: {
      fresco_vital: 55,
      libre_natural: 45,
      elegante_clasico: 35,
      esencial_moderno: 65,
      sensual_profundo: 60,
      calido_envolvente: 90,
      audaz_magnetico: 60,
      creativo_alternativo: 55
    },
    gender: "femenina"
  },

  {
    id: "praessia-32",
    name: "Inspiración Olfativa: La Vida es Bella",
    image: "x",
    personalities: {
      fresco_vital: 50,
      libre_natural: 35,
      elegante_clasico: 80,
      esencial_moderno: 65,
      sensual_profundo: 70,
      calido_envolvente: 85,
      audaz_magnetico: 70,
      creativo_alternativo: 50
    },
    gender: "femenina"
  },

  {
    id: "praessia-33",
    name: "Inspiración Olfativa: Omnia Crystalline",
    image: "x",
    personalities: {
      fresco_vital: 90,
      libre_natural: 70,
      elegante_clasico: 75,
      esencial_moderno: 85,
      sensual_profundo: 20,
      calido_envolvente: 30,
      audaz_magnetico: 40,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-34",
    name: "Inspiración Olfativa: Paris Hilton Heiress",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 65,
      elegante_clasico: 40,
      esencial_moderno: 55,
      sensual_profundo: 35,
      calido_envolvente: 45,
      audaz_magnetico: 70,
      creativo_alternativo: 60
    },
    gender: "femenina"
  },

  {
    id: "praessia-35",
    name: "Inspiración Olfativa: Thank you, Next - Ariana Grande",
    image: "x",
    personalities: {
      fresco_vital: 55,
      libre_natural: 60,
      elegante_clasico: 30,
      esencial_moderno: 70,
      sensual_profundo: 45,
      calido_envolvente: 80,
      audaz_magnetico: 65,
      creativo_alternativo: 75
    },
    gender: "femenina"
  },

  {
    id: "praessia-36",
    name: "Inspiración Olfativa: Amor Amor",
    image: "x",
    personalities: {
      fresco_vital: 60,
      libre_natural: 55,
      elegante_clasico: 35,
      esencial_moderno: 65,
      sensual_profundo: 75,
      calido_envolvente: 80,
      audaz_magnetico: 70,
      creativo_alternativo: 60
    },
    gender: "femenina"
  },

  {
    id: "praessia-37",
    name: "Inspiración Olfativa: Omnia Coral",
    image: "x",
    personalities: {
      fresco_vital: 90,
      libre_natural: 70,
      elegante_clasico: 60,
      esencial_moderno: 75,
      sensual_profundo: 35,
      calido_envolvente: 45,
      audaz_magnetico: 55,
      creativo_alternativo: 50
    },
    gender: "femenina"
  },

  {
    id: "praessia-38",
    name: "Inspiración Olfativa: Tommy",
    image: "x",
    personalities: {
      fresco_vital: 95,
      libre_natural: 85,
      elegante_clasico: 55,
      esencial_moderno: 60,
      sensual_profundo: 20,
      calido_envolvente: 25,
      audaz_magnetico: 40,
      creativo_alternativo: 35
    },
    gender: "femenina"
  },

  {
    id: "praessia-39",
    name: "Inspiración Olfativa: Scandal Pour Homme",
    image: "x",
    personalities: {
      fresco_vital: 20,
      libre_natural: 25,
      elegante_clasico: 35,
      esencial_moderno: 55,
      sensual_profundo: 85,
      calido_envolvente: 90,
      audaz_magnetico: 95,
      creativo_alternativo: 65
    },
    gender: "masculina"
  },

  {
    id: "praessia-40",
    name: "Inspiración Olfativa: Nautica Voyage",
    image: "x",
    personalities: {
      fresco_vital: 95,
      libre_natural: 85,
      elegante_clasico: 40,
      esencial_moderno: 60,
      sensual_profundo: 20,
      calido_envolvente: 15,
      audaz_magnetico: 35,
      creativo_alternativo: 30
    },
    gender: "masculina"
  },

  {
    id: "praessia-41",
    name: "Inspiración Olfativa: Sauvage",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 55,
      elegante_clasico: 50,
      esencial_moderno: 80,
      sensual_profundo: 60,
      calido_envolvente: 45,
      audaz_magnetico: 95,
      creativo_alternativo: 50
    },
    gender: "masculina"
  },

  {
    id: "praessia-42",
    name: "Inspiración Olfativa: Angel",
    image: "x",
    personalities: {
      fresco_vital: 10,
      libre_natural: 20,
      elegante_clasico: 30,
      esencial_moderno: 55,
      sensual_profundo: 90,
      calido_envolvente: 95,
      audaz_magnetico: 85,
      creativo_alternativo: 90
    },
    gender: "masculina"
  },

  {
    id: "praessia-43",
    name: "Inspiración Olfativa: Hugo Boss Unlimited",
    image: "x",
    personalities: {
      fresco_vital: 85,
      libre_natural: 70,
      elegante_clasico: 35,
      esencial_moderno: 75,
      sensual_profundo: 30,
      calido_envolvente: 25,
      audaz_magnetico: 40,
      creativo_alternativo: 30
    },
    gender: "masculina"
  },

  {
    id: "praessia-44",
    name: "Inspiración Olfativa: Eros Versace",
    image: "x",
    personalities: {
      fresco_vital: 55,
      libre_natural: 30,
      elegante_clasico: 35,
      esencial_moderno: 65,
      sensual_profundo: 85,
      calido_envolvente: 80,
      audaz_magnetico: 90,
      creativo_alternativo: 40
    },
    gender: "masculina"
  },

  {
    id: "praessia-45",
    name: "Inspiración Olfativa: Issey Miyake",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 65,
      elegante_clasico: 70,
      esencial_moderno: 75,
      sensual_profundo: 35,
      calido_envolvente: 30,
      audaz_magnetico: 40,
      creativo_alternativo: 55
    },
    gender: "masculina"
  },

  {
    id: "praessia-46",
    name: "Inspiración Olfativa: Bleu Chanel",
    image: "x",
    personalities: {
      fresco_vital: 70,
      libre_natural: 45,
      elegante_clasico: 85,
      esencial_moderno: 90,
      sensual_profundo: 65,
      calido_envolvente: 60,
      audaz_magnetico: 70,
      creativo_alternativo: 40
    },
    gender: "masculina"
  },

  {
    id: "praessia-47",
    name: "Inspiración Olfativa: Creed Aventus",
    image: "x",
    personalities: {
      fresco_vital: 65,
      libre_natural: 50,
      elegante_clasico: 90,
      esencial_moderno: 85,
      sensual_profundo: 75,
      calido_envolvente: 65,
      audaz_magnetico: 80,
      creativo_alternativo: 60
    },
    gender: "masculina"
  },

  {
    id: "praessia-48",
    name: "Inspiración Olfativa: Creed Silver Mountain",
    image: "x",
    personalities: {
      fresco_vital: 90,
      libre_natural: 75,
      elegante_clasico: 80,
      esencial_moderno: 70,
      sensual_profundo: 40,
      calido_envolvente: 30,
      audaz_magnetico: 45,
      creativo_alternativo: 65
    },
    gender: "masculina"
  },

  {
    id: "praessia-49",
    name: "Inspiración Olfativa: Amethyst Lattafa",
    image: "x",
    personalities: {
      fresco_vital: 45,
      libre_natural: 50,
      elegante_clasico: 55,
      esencial_moderno: 65,
      sensual_profundo: 75,
      calido_envolvente: 70,
      audaz_magnetico: 60,
      creativo_alternativo: 55
    },
    gender: "unisex"
  },

  {
    id: "praessia-50",
    name: "Inspiración Olfativa: Bharara King",
    image: "x",
    personalities: {
      fresco_vital: 40,
      libre_natural: 25,
      elegante_clasico: 70,
      esencial_moderno: 75,
      sensual_profundo: 90,
      calido_envolvente: 95,
      audaz_magnetico: 90,
      creativo_alternativo: 55
    },
    gender: "masculina"
  },

  {
    id: "praessia-51",
    name: "Inspiración Olfativa: Sublime Lattafa",
    image: "x",
    personalities: {
      fresco_vital: 55,
      libre_natural: 50,
      elegante_clasico: 60,
      esencial_moderno: 65,
      sensual_profundo: 70,
      calido_envolvente: 75,
      audaz_magnetico: 55,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-52",
    name: "Inspiración Olfativa: Santal 33",
    image: "x",
    personalities: {
      fresco_vital: 30,
      libre_natural: 60,
      elegante_clasico: 55,
      esencial_moderno: 85,
      sensual_profundo: 65,
      calido_envolvente: 45,
      audaz_magnetico: 70,
      creativo_alternativo: 90
    },
    gender: "unisex"
  },

  {
    id: "praessia-53",
    name: "Inspiración Olfativa: Yara Candy",
    image: "x",
    personalities: {
      fresco_vital: 45,
      libre_natural: 40,
      elegante_clasico: 35,
      esencial_moderno: 60,
      sensual_profundo: 70,
      calido_envolvente: 85,
      audaz_magnetico: 55,
      creativo_alternativo: 40
    },
    gender: "femenina"
  },

  {
    id: "praessia-54",
    name: "Inspiración Olfativa: Odyssey Mandarin Sky",
    image: "x",
    personalities: {
      fresco_vital: 80,
      libre_natural: 60,
      elegante_clasico: 40,
      esencial_moderno: 70,
      sensual_profundo: 55,
      calido_envolvente: 65,
      audaz_magnetico: 75,
      creativo_alternativo: 45
    },
    gender: "masculina"
  },

  {
    id: "praessia-55",
    name: "Inspiración Olfativa: Yum Yum",
    image: "x",
    personalities: {
      fresco_vital: 50,
      libre_natural: 40,
      elegante_clasico: 30,
      esencial_moderno: 55,
      sensual_profundo: 65,
      calido_envolvente: 80,
      audaz_magnetico: 55,
      creativo_alternativo: 45
    },
    gender: "femenina"
  },

  {
    id: "praessia-56",
    name: "Inspiración Olfativa: Yara",
    image: "x",
    personalities: {
      fresco_vital: 45,
      libre_natural: 50,
      elegante_clasico: 55,
      esencial_moderno: 65,
      sensual_profundo: 70,
      calido_envolvente: 80,
      audaz_magnetico: 50,
      creativo_alternativo: 40
    },
    gender: "femenina"
  },

  {
    id: "praessia-57",
    name: "Inspiración Olfativa: Amber Oud Gold",
    image: "x",
    personalities: {
      fresco_vital: 60,
      libre_natural: 50,
      elegante_clasico: 55,
      esencial_moderno: 75,
      sensual_profundo: 75,
      calido_envolvente: 80,
      audaz_magnetico: 85,
      creativo_alternativo: 55
    },
    gender: "unisex"
  },

  {
    id: "praessia-58",
    name: "Inspiración Olfativa: Arabians Tonka",
    image: "x",
    personalities: {
      fresco_vital: 15,
      libre_natural: 25,
      elegante_clasico: 45,
      esencial_moderno: 60,
      sensual_profundo: 90,
      calido_envolvente: 95,
      audaz_magnetico: 90,
      creativo_alternativo: 70
    },
    gender: "unisex"
  },

  {
    id: "praessia-59",
    name: "Inspiración Olfativa: Asad Bourbon",
    image: "x",
    personalities: {
      fresco_vital: 20,
      libre_natural: 35,
      elegante_clasico: 45,
      esencial_moderno: 65,
      sensual_profundo: 85,
      calido_envolvente: 90,
      audaz_magnetico: 80,
      creativo_alternativo: 55
    },
    gender: "masculina"
  },

  {
    id: "praessia-60",
    name: "Inspiración Olfativa: Khamrah Lattafa",
    image: "x",
    personalities: {
      fresco_vital: 10,
      libre_natural: 20,
      elegante_clasico: 50,
      esencial_moderno: 70,
      sensual_profundo: 95,
      calido_envolvente: 95,
      audaz_magnetico: 85,
      creativo_alternativo: 80
    },
    gender: "unisex"
  },

  {
    id: "praessia-61",
    name: "Inspiración Olfativa: Odyssey Candee",
    image: "x",
    personalities: {
      fresco_vital: 40,
      libre_natural: 25,
      elegante_clasico: 20,
      esencial_moderno: 65,
      sensual_profundo: 70,
      calido_envolvente: 75,
      audaz_magnetico: 55,
      creativo_alternativo: 60
    },
    gender: "femenina"
  },
];


/* =========================
   CONFIGURACIÓN BASE
========================= */

const personalities = [
  "fresco_vital",
  "libre_natural",
  "elegante_clasico",
  "esencial_moderno",
  "sensual_profundo",
  "calido_envolvente",
  "audaz_magnetico",
  "creativo_alternativo"
];

let userPreferences = {
  gender: null
};

/* =========================
   DATA DEL QUIZ
========================= */

const quizData = [
  {
    id: "q1",
    question: "¿En qué momento del día usarías más tu perfume?",
    options: {
      A: { text: "Durante el día, como parte de mi rutina", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "En cualquier momento, quiero versatilidad", points: { elegante_clasico: 2, esencial_moderno: 1 } },
      C: { text: "Principalmente en la noche", points: { sensual_profundo: 2, calido_envolvente: 1 } },
      D: { text: "Cuando quiero destacar", points: { audaz_magnetico: 2 } }
    }
  },
  {
    id: "q2",
    question: "¿Qué sensación buscas que deje tu presencia?",
    options: {
      A: { text: "Limpia y natural", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "Elegante y cuidada", points: { elegante_clasico: 2 } },
      C: { text: "Intensa y atractiva", points: { sensual_profundo: 2, audaz_magnetico: 1 } },
      D: { text: "Diferente, con identidad propia", points: { creativo_alternativo: 2 } }
    }
  },
  {
    id: "q3",
    question: "¿Con cuál entorno te identificas más?",
    options: {
      A: { text: "Espacios abiertos, naturaleza, aire fresco", points: { libre_natural: 2, fresco_vital: 1 } },
      B: { text: "Ciudad, diseño, arquitectura", points: { esencial_moderno: 2, elegante_clasico: 1 } },
      C: { text: "Ambientes íntimos, luz baja", points: { sensual_profundo: 2, calido_envolvente: 1 } },
      D: { text: "Lugares con carácter y energía", points: { audaz_magnetico: 2 } }
    }
  },
  {
    id: "q4",
    question: "¿Qué tipo de ropa usas con más frecuencia?",
    options: {
      A: { text: "Cómoda, ligera, funcional", points: { fresco_vital: 2, libre_natural: 1 } },
      B: { text: "Sobria, bien estructurada", points: { elegante_clasico: 2 } },
      C: { text: "Moderna y esencial", points: { esencial_moderno: 2 } },
      D: { text: "Con personalidad y fuerza", points: { audaz_magnetico: 2, creativo_alternativo: 1 } }
    }
  },
  {
    id: "q5",
    question: "¿Qué clima disfrutas más?",
    options: {
      A: { text: "Cálido y soleado", points: { fresco_vital: 2 } },
      B: { text: "Templado, equilibrado", points: { elegante_clasico: 1, libre_natural: 1 } },
      C: { text: "Frío o lluvioso", points: { calido_envolvente: 2, sensual_profundo: 1 } },
      D: { text: "Me adapto a cualquiera", points: { esencial_moderno: 2 } }
    }
  },
  {
    id: "q6",
    question: "Cuando eliges un perfume, prefieres que sea:",
    options: {
      A: { text: "Refrescante y fácil de llevar", points: { fresco_vital: 2 } },
      B: { text: "Discreto pero presente", points: { esencial_moderno: 2 } },
      C: { text: "Envolvente y duradero", points: { calido_envolvente: 2 } },
      D: { text: "Que deje huella", points: { audaz_magnetico: 2 } }
    }
  },
  {
    id: "q7",
    question: "¿Cómo te gustaría que te recuerden?",
    options: {
      A: { text: "Natural y auténtico", points: { libre_natural: 2 } },
      B: { text: "Elegante y confiable", points: { elegante_clasico: 2 } },
      C: { text: "Atractivo y misterioso", points: { sensual_profundo: 2 } },
      D: { text: "Único y diferente", points: { creativo_alternativo: 2 } }
    }
  },
  {
    id: "q8",
    question: "¿Qué notas te generan más curiosidad?",
    options: {
      A: { text: "Cítricos, verdes, acuáticos", points: { fresco_vital: 2 } },
      B: { text: "Maderas suaves, iris, almizcle limpio", points: { esencial_moderno: 2 } },
      C: { text: "Especias, cuero, notas intensas", points: { audaz_magnetico: 2 } },
      D: { text: "Ámbar, vainilla, notas cálidas", points: { calido_envolvente: 2 } }
    }
  },
  {
    id: "q9",
    question: "¿En qué ocasión usarías este perfume?",
    options: {
      A: { text: "Uso diario", points: { fresco_vital: 2 } },
      B: { text: "Trabajo o reuniones", points: { elegante_clasico: 2 } },
      C: { text: "Citas o momentos especiales", points: { sensual_profundo: 2 } },
      D: { text: "Eventos o salidas sociales", points: { audaz_magnetico: 2 } }
    }
  },
  {
    id: "q10",
    question: "¿Qué tipo de fragancia te aburre más?",
    options: {
      A: { text: "Las muy intensas", points: { fresco_vital: 1, esencial_moderno: 1 } },
      B: { text: "Las demasiado clásicas", points: { creativo_alternativo: 2 } },
      C: { text: "Las muy suaves", points: { audaz_magnetico: 2 } },
      D: { text: "Las dulces", points: { libre_natural: 1, elegante_clasico: 1 } }
    }
  },
  {
    id: "q11",
    question: "¿Qué valoras más en un perfume?",
    options: {
      A: { text: "Frescura y ligereza", points: { fresco_vital: 2 } },
      B: { text: "Equilibrio y calidad", points: { elegante_clasico: 2 } },
      C: { text: "Sensación en piel", points: { sensual_profundo: 2 } },
      D: { text: "Originalidad", points: { creativo_alternativo: 2 } }
    }
  },
  {
    id: "q12",
    question: "¿Cómo te defines mejor?",
    options: {
      A: { text: "Activo y espontáneo", points: { libre_natural: 2 } },
      B: { text: "Ordenado y preciso", points: { esencial_moderno: 2 } },
      C: { text: "Seguro y decidido", points: { audaz_magnetico: 2 } },
      D: { text: "Emocional e intuitivo", points: { sensual_profundo: 2 } }
    }
  },
  {
    id: "q13",
    question: "¿Qué tan importante es que tu perfume destaque?",
    options: {
      A: { text: "Poco, prefiero discreción", points: { esencial_moderno: 2 } },
      B: { text: "Lo justo", points: { elegante_clasico: 2 } },
      C: { text: "Bastante", points: { audaz_magnetico: 2 } },
      D: { text: "Solo en momentos específicos", points: { calido_envolvente: 1, sensual_profundo: 1 } }
    }
  },
  {
    id: "q14",
    question: "¿Qué sensación final buscas al usarlo?",
    options: {
      A: { text: "Frescura prolongada", points: { fresco_vital: 2 } },
      B: { text: "Balance y armonía", points: { elegante_clasico: 2 } },
      C: { text: "Calidez y confort", points: { calido_envolvente: 2 } },
      D: { text: "Carácter y profundidad", points: { creativo_alternativo: 1, sensual_profundo: 1 } }
    }
  }
];

/* =========================
   RENDER QUIZ
========================= */

function renderQuiz() {
  const form = document.getElementById("praessia-quiz");

  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
    fieldset.innerHTML = `<legend>${i + 1}. ${q.question}</legend>`;

    for (const key in q.options) {
      fieldset.innerHTML += `
        <label>
          <input type="radio" name="${q.id}" value="${key}">
          ${q.options[key].text}
        </label><br>
      `;
    }

    form.appendChild(fieldset);
  });

  // Pregunta de género (FINAL)
  const genderFieldset = document.createElement("fieldset");
  genderFieldset.innerHTML = `
    <legend>¿Cómo te gustaría que te recomendemos tu fragancia?</legend>
    <label><input type="radio" name="gender" value="femenina"> Femenina</label><br>
    <label><input type="radio" name="gender" value="masculina"> Masculina</label><br>
    <label><input type="radio" name="gender" value="unisex"> Unisex</label>
  `;
  form.appendChild(genderFieldset);
}

function calculateAffinity(userScores, perfume) {
  let total = 0;

  for (const personality in userScores) {
    if (perfume.personalities[personality]) {
      total += userScores[personality] * perfume.personalities[personality];
    }
  }

  return total;
}

function getRecommendedPerfumes(userScores, gender) {
  return perfumes
    .filter(p => p.gender === gender || p.gender === "unisex")
    .map(p => ({
      ...p,
      affinity: calculateAffinity(userScores, p)
    }))
    .sort((a, b) => b.affinity - a.affinity);
}


/* =========================
   RESULTADO
========================= */

function runQuiz() {
  const scores = {};
  personalities.forEach(p => scores[p] = 0);

  quizData.forEach(q => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (!selected) return;

    const points = q.options[selected.value].points;
    for (const p in points) {
      scores[p] += points[p];
    }
  });

  const genderSelected = document.querySelector(`input[name="gender"]:checked`);
  userPreferences.gender = genderSelected ? genderSelected.value : "unisex";

  const recommendations = getRecommendedPerfumes(scores, userPreferences.gender);
  if (!recommendations.length) return;

  const primary = recommendations[0];
  const secondary = recommendations[1];

  document.getElementById("quiz-result").innerHTML = `
    <h3>Tu fragancia ideal Praessia</h3>

    <div class="result-card primary">
      <h4>Recomendación principal</h4>
      <img src="${primary.image}" alt="${primary.name}" class="img-fluid">
      <p class="perfume-name"><strong>${primary.name}</strong></p>

      <a 
        href="https://tu-tienda-shopify.com/${primary.id}" 
        class="praessia-btn primary"
        target="_blank"
        rel="noopener"
      >
        Comprar esta fragancia
      </a>
    </div>

    ${secondary ? `
    
    <div class="result-divider"></div>

    <div class="result-card secondary">
      <h4>También podrías disfrutar</h4>

      <img 
        src="${secondary.image}" 
        alt="${secondary.name}" 
        class="img-fluid"
      >

      <p class="perfume-name">${secondary.name}</p>

      <a 
        href="https://tu-tienda-shopify.com/${secondary.id}"
        class="praessia-btn secondary-cta"
        target="_blank"
        rel="noopener"
      >
        Ver esta alternativa
      </a>
    </div>
  ` : ""}

    <div class="quiz-repeat">
      <button class="praessia-btn secondary" onclick="resetQuiz()">
        Repetir el quiz
      </button>
    </div>
  `;
}

function resetQuiz() {
  document.getElementById("praessia-quiz").reset();
  document.getElementById("quiz-result").innerHTML = "";
  userPreferences.gender = null;

  document.getElementById("praessia-quiz").scrollIntoView({
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", renderQuiz);



/* ================================================
   exploration.js
   Animación fade-up para bloques de la página
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

});

/* ================================================
   bienvenida_qr.js
   Animación de entrada suave – Praessia
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Elementos que entran en secuencia
  const secuencia = [
    document.querySelector('.qr-logo'),
    document.querySelector('.qr-welcome'),
    document.querySelector('.qr-hero h1'),
    document.querySelector('.qr-intro'),
    document.querySelector('.qr-divider'),
    document.querySelector('.qr-btn-primary'),
    document.querySelector('.qr-btn-secondary'),
    document.querySelector('.qr-footer-note'),
  ];

  // Dispara cada elemento con un retardo acumulado
  secuencia.forEach(function (el, index) {
    if (!el) return;
    el.classList.add('qr-hidden'); // estado inicial: invisible
    setTimeout(function () {
      el.classList.add('qr-visible'); // entra suavemente
    }, 180 * index); // 180ms entre cada elemento
  });

});