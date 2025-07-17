const textarea = document.getElementById("comentarioTextarea");
const botonEnviar = document.getElementById("enviarComentario");
const zonaComentarios = document.getElementById("zonaComentarios");

const comentarioPrefabricado = [
  "¡Qué emoción esta nueva etapa de Superman! Me encanta que estén apostando por algo más luminoso y positivo.",
  "Ojalá Rachel tenga un papel fuerte, me gusta mucho su energía. Y sí, es hora de dejar atrás al Superman deprimido de siempre.",
  "Ya quiero ver el tráiler completo. ¡Estoy adentro!"
];

// Mostrar el comentario prefabricado cuando se hace foco en el textarea
textarea.addEventListener("focus", () => {
  if (textarea.value.trim() === "") {
    textarea.value = comentarioPrefabricado.join("\n\n");
  }
});

// Agregar el comentario a la página al hacer clic en "Enviar"
botonEnviar.addEventListener("click", () => {
  const nuevo = document.createElement("div");
  nuevo.classList.add("tarjetaComentario");
  nuevo.innerHTML = `
    <div class="headerComentario">
      <img src="fotoComentarios/lucia.jpg" alt="Foto de usuario">
      <p><strong>Lucía Fernández</strong> indicó que le gusta esta nota</p>
    </div>
    <hr class="lineaSeparadora">
    <div class="textoComentario">
      <p>${comentarioPrefabricado[0]}</p>
      <p>${comentarioPrefabricado[1]}</p>
      <p>${comentarioPrefabricado[2]}</p>
    </div>
    <div class="accionesComentario">
      <div class="reacciones1">
        <button><img src="fotoComentarios/Like.png" alt="Me gusta"></button>
        <button><img src="fotoComentarios/Dislike.png" alt="No me gusta"></button>
        <span><strong>A 3 personas</strong> les gustó este comentario</span>
      </div>
      <button class="responder">Responder</button>
    </div>
  `;

  zonaComentarios.appendChild(nuevo);
  textarea.value = "";
});


document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".btnVerRespuestas");

  botones.forEach(boton => {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      const respuestaID = this.dataset.id;
      const respuestaDiv = document.getElementById(respuestaID);

      if (respuestaDiv.style.display === "none" || respuestaDiv.style.display === "") {
        respuestaDiv.style.display = "block";
        this.textContent = "Ocultar respuestas";
      } else {
        respuestaDiv.style.display = "none";
        this.textContent = `Ver respuestas (${respuestaDiv.querySelectorAll(".tarjetaComentario").length})`;
      }
    });
  });
});

