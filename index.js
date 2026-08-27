function saludar(nombre) {
  if (!nombre) return "Hola, desconocido!";
  return `Hola, ${nombre}!`;
}

function despedir(nombre) {
  return `Hasta luego, ${nombre}!`;
}

console.log(saludar("estudiante"));
console.log(despedir("estudiante"));