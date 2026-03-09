<template>
  <section id="libros" class="py-24 bg-slate-950 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-yellow-500 font-medium tracking-[0.2em] uppercase text-sm mb-2 block">Bibliografía</span>
        <h2 class="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">Obras Publicadas</h2>
        <div class="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(libro, index) in libros"
          :key="index"
          class="group cursor-pointer"
          @click="abrirLibro(libro)"
        >
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg border border-slate-800 transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
            <img
              :src="libro.portada"
              :alt="libro.titulo"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm border border-yellow-500 px-4 py-2 bg-slate-950/80">Ver Fragmentos</span>
            </div>
          </div>
          <h3 class="mt-6 font-['Playfair_Display'] text-xl text-white text-center group-hover:text-yellow-400 transition-colors">{{ libro.titulo }}</h3>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="libroSeleccionado" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl" @click.self="cerrarLibro">
        <div class="relative max-w-2xl w-full bg-slate-900 border border-yellow-500/30 p-8 md:p-12 rounded-3xl shadow-2xl animate-modal">

          <button @click="cerrarLibro" class="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors text-2xl">✕</button>

          <div class="text-center">
            <span class="text-yellow-500 text-sm uppercase tracking-widest mb-2 block">Fragmentos de</span>
            <h2 class="font-['Playfair_Display'] text-3xl md:text-4xl text-white mb-8">{{ libroSeleccionado.titulo }}</h2>

            <div class="space-y-8">
              <div v-for="(frase, i) in libroSeleccionado.frases" :key="i" class="relative">
                <p class="text-slate-300 italic text-lg leading-relaxed font-light">"{{ frase }}"</p>
                <div v-if="i < 2" class="w-12 h-px bg-slate-800 mx-auto mt-8"></div>
              </div>
            </div>

            <button @click="cerrarLibro" class="mt-12 px-8 py-3 bg-yellow-500 text-slate-950 font-bold rounded-full hover:bg-yellow-400 transition-all">
              Cerrar Lectura
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const libroSeleccionado = ref(null);

// GALERÍA REAL DE OBRAS DE ARNOLDO SAGASTIZADO
const libros = ref([
  {
    titulo: "Mundos, Poderes y Palabras",
    portada: "/poeta-arnoldo-sagastizado/portada1.jpg",
    frases: [
      "Fragmento o poema destacado de esta obra...",
      "Otra frase importante de este libro..."
    ]
  },
  {
    titulo: "Los Secretos de Lavinia (2010)",
    portada: "/poeta-arnoldo-sagastizado/portada2.jpg", // Solo guarda la imagen como portada2.jpg en public
    frases: [
      "Una obra romántica psicológica y social.",
      "Fragmento destacado de la novela..."
    ]
  },
  {
    titulo: "El Nido del Tiempo (2013)",
    portada: "/poeta-arnoldo-sagastizado/portada3.jpg", // Guarda la imagen como portada3.jpg en public
    frases: [
      "Primer fragmento poético de El Nido del Tiempo...",
      "Segundo verso destacado de la obra..."
    ]
  },
  {
    titulo: "El Sistema (1996)",
    portada: "/poeta-arnoldo-sagastizado/portada4.jpg", // Guarda la imagen como portada4.jpg en public
    frases: [
      "Fragmento de su primera novela...",
      "Cita destacada sobre la sociedad o el sistema..."
    ]
  },
  {
    titulo: "Para mi Ada sin H (1995)",
    portada: "/poeta-arnoldo-sagastizado/portada5.jpg", // Guarda la imagen como portada5.jpg en public
    frases: [
      "Poemario galardonado con el Primer Premio Nacional de poesía CONCULTURA.",
      "Verso premiado..."
    ]
  },
  {
    titulo: "Los Niños de Bagdad (2006)",
    portada: "/poeta-arnoldo-sagastizado/portada6.jpg", // Guarda la imagen como portada6.jpg en public
    frases: [
      "Una irreverente obra de ensayo a raíz de los ataques a Irak...",
      "Cita reflexiva del ensayo..."
    ]
  }
]);

const abrirLibro = (libro) => {
  libroSeleccionado.value = libro;
  document.body.style.overflow = 'hidden';
};

const cerrarLibro = () => {
  libroSeleccionado.value = null;
  document.body.style.overflow = 'auto';
};
</script>
