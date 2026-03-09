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

// AQUÍ ESTÁN LOS DATOS DE TUS LIBROS
const libros = ref([
  {
    titulo: "Mundos Poderes y Palabras (1996)", // Cambia el título si portada1.jpg pertenece a otro libro
    portada: "/poeta-arnoldo-sagastizado/portada1.jpg",    // Aquí estamos llamando a tu imagen local
    frases: [
      "[Pega aquí el primer fragmento poético o frase célebre de este libro]",
      "[Pega aquí la segunda frase o pensamiento destacado]",
      "[Pega aquí una tercera frase impactante]"
    ]
  },
  {
    titulo: "Los Secretos de Lavinia (2010)",
    portada: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", // Reemplazarás esto luego con /portada2.jpg
    frases: [
      "Una obra romántica psicológica y social...",
      "El misterio de Lavinia se esconde en los silencios prolongados.",
      "Las verdades más profundas a veces no se dicen con palabras."
    ]
  },
  {
    titulo: "El Nido del Tiempo (2013)",
    portada: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop", // Reemplazarás esto luego con /portada3.jpg
    frases: [
      "El tiempo construye su nido con las ramas de la memoria.",
      "Cada recuerdo es un ave que vuelve a su punto de origen.",
      "Volar no requiere alas, requiere el coraje de soltar las amarras."
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-modal {
  animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
