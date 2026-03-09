<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <h2 class="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-bold text-center mb-4">
      Obras Destacadas
    </h2>
    <div class="w-24 h-1 bg-yellow-500 mx-auto mb-16 rounded-full"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(poema, index) in poemas"
        :key="index"
        class="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] cursor-pointer"
        @mouseenter="activePoem = index"
        @mouseleave="activePoem = null"
      >
        <div class="text-yellow-500 text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
          ❝
        </div>

        <h3 class="font-['Playfair_Display'] text-2xl text-white font-semibold mb-3">
          {{ poema.titulo }}
        </h3>

        <p class="text-slate-400 font-light leading-relaxed italic mb-6 line-clamp-4">
          {{ poema.fragmento }}
        </p>

        <button class="text-yellow-500 text-sm font-medium tracking-wider uppercase flex items-center gap-2 group-hover:text-yellow-400">
          Leer completo
          <span class="transform group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activePoem = ref(null);

const poemas = ref([
  {
    titulo: "Ecos del Volcán",
    fragmento: "Bajo la sombra del Chaparrastique, la tierra murmura viejas canciones. El calor funde los recuerdos y la ceniza bautiza al nuevo amanecer, donde el campesino siembra esperanzas..."
  },
  {
    titulo: "Lágrimas de Jade",
    fragmento: "No llores por el río que se seca, llora por el hombre que olvidó cómo beber de sus manos. La naturaleza nos observa con ojos de jade, esperando nuestro retorno..."
  },
  {
    titulo: "El Vuelo del Torogoz",
    fragmento: "Libertad pintada en alas de colores vibrantes. No hay jaula que contenga el espíritu de aquel que nació para surcar los cielos de un país herido pero vivo..."
  }
]);
</script>
