function saludar({ nombre, idioma }) {
  if (idioma === "en") return `Hello, ${nombre || "unknown"}!`;
  return `Hola, ${nombre || "desconocido"}!`;
}

function despedir(nombre) {
  return `Hasta luego, ${nombre}!`;
}

console.log(saludar({ nombre: "estudiante", idioma: "es" }));
console.log(despedir("estudiante"));