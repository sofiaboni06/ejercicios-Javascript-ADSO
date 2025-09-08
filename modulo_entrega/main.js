import { 
  enRango, 
  calcularDescuento, 
  categoriaIMC, 
  nivelRiesgo, 
  esBisiesto, 
  esElegibleParaPrestamo, 
  consultarLibrosPorPalabraClaveTitulo,
  consultarLibrosPaginas,
  Alcancia,
  Contacto
} from './utilidades.js';

const sidebar = document.getElementById("sidebar");
const contenido = document.getElementById("contenido");
const hamburger = document.getElementById("hamburger");

// Animación del menú hamburguesa
hamburger.addEventListener("click", () => {
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    contenido.style.marginLeft = "0";
  } else {
    sidebar.style.width = "250px";
    contenido.style.marginLeft = "250px";
  }
});

// Navegación de ejercicios
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const ejercicio = e.target.getAttribute("data-ejercicio");
    cargarEjercicio(ejercicio);
  });
});

function cargarEjercicio(num) {
  contenido.classList.remove("animate__fadeIn");
  void contenido.offsetWidth;
  contenido.classList.add("animate__fadeIn");

  switch (num) {
    // ==================================
    // EJERCICIO 1
    // ==================================
    case "1":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 400px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 1: enRango</h3>
            <form id="form-rango" class="text-center">
              <div class="mb-3">
                <input type="number" id="numero" class="form-control text-center" placeholder="Ingresa un número" required>
              </div>
              <button class="btn btn-primary w-100" type="submit">Verificar</button>
            </form>
            <h4 id="resultado" class="mt-4 text-center text-primary fw-bold"></h4>
          </div>
        </div>
      `;
      const form = document.getElementById("form-rango");
      const input = document.getElementById("numero");
      const resultado = document.getElementById("resultado");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const numero = parseInt(input.value);
        resultado.textContent = enRango(numero);
        resultado.classList.remove("animate__fadeInUp");
        void resultado.offsetWidth;
        resultado.classList.add("animate__animated", "animate__fadeInUp");
        input.value = "";
      });
      break;

    // ==================================
    // EJERCICIO 2
    // ==================================
    case "2":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 400px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 2: calcularDescuento</h3>
            <form id="form-descuento" class="text-center">
              <div class="mb-3">
                <input type="number" id="precio" class="form-control text-center" placeholder="Ingresa el precio" required>
              </div>
              <button class="btn btn-success w-100" type="submit">Calcular</button>
            </form>
            <h4 id="resultado-descuento" class="mt-4 text-center text-success fw-bold"></h4>
          </div>
        </div>
      `;
      const form2 = document.getElementById("form-descuento");
      const input2 = document.getElementById("precio");
      const resultado2 = document.getElementById("resultado-descuento");
      form2.addEventListener("submit", (e) => {
        e.preventDefault();
        const precio = parseFloat(input2.value);
        resultado2.textContent = calcularDescuento(precio);
        resultado2.classList.remove("animate__fadeInUp");
        void resultado2.offsetWidth;
        resultado2.classList.add("animate__animated", "animate__fadeInUp");
        input2.value = "";
      });
      break;

    // ==================================
    // EJERCICIO 3
    // ==================================
    case "3":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 400px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 3: categoriaIMC</h3>
            <form id="form-imc" class="text-center">
              <div class="mb-3">
                <input type="number" step="0.1" id="imc" class="form-control text-center" placeholder="Ingresa tu IMC" required>
              </div>
              <button class="btn btn-warning w-100" type="submit">Calcular</button>
            </form>
            <h4 id="resultado-imc" class="mt-4 text-center text-warning fw-bold"></h4>
          </div>
        </div>
      `;
      const form3 = document.getElementById("form-imc");
      const input3 = document.getElementById("imc");
      const resultado3 = document.getElementById("resultado-imc");
      form3.addEventListener("submit", (e) => {
        e.preventDefault();
        const imc = parseFloat(input3.value);
        resultado3.textContent = categoriaIMC(imc);
        resultado3.classList.remove("animate__fadeInUp");
        void resultado3.offsetWidth;
        resultado3.classList.add("animate__animated", "animate__fadeInUp");
        input3.value = "";
      });
      break;

    // ==================================
    // EJERCICIO 4
    // ==================================
    case "4":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 420px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 4: nivelRiesgo</h3>
            <form id="form-riesgo" class="text-center">
              <div class="mb-3">
                <input type="number" id="edad" class="form-control text-center" placeholder="Ingresa la edad" required>
              </div>
              <div class="form-check form-switch mb-3 d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" id="enfermedades">
                <label class="form-check-label ms-2" for="enfermedades">¿Tiene enfermedades previas?</label>
              </div>
              <button class="btn btn-danger w-100" type="submit">Evaluar</button>
            </form>
            <h4 id="resultado-riesgo" class="mt-4 text-center text-danger fw-bold"></h4>
          </div>
        </div>
      `;
      const form4 = document.getElementById("form-riesgo");
      const inputEdad = document.getElementById("edad");
      const inputEnfermedades = document.getElementById("enfermedades");
      const resultado4 = document.getElementById("resultado-riesgo");
      form4.addEventListener("submit", (e) => {
        e.preventDefault();
        const edad = parseInt(inputEdad.value);
        const enfermedades = inputEnfermedades.checked;
        resultado4.textContent = nivelRiesgo(edad, enfermedades);
        resultado4.classList.remove("animate__fadeInUp");
        void resultado4.offsetWidth;
        resultado4.classList.add("animate__animated", "animate__fadeInUp");
        inputEdad.value = "";
        inputEnfermedades.checked = false;
      });
      break;

    // ==================================
    // EJERCICIO 5
    // ==================================
    case "5":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 400px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 5: esBisiesto</h3>
            <form id="form-bisiesto" class="text-center">
              <div class="mb-3">
                <input type="number" id="anio" class="form-control text-center" placeholder="Ingresa un año" required>
              </div>
              <button class="btn btn-info w-100" type="submit">Verificar</button>
            </form>
            <h4 id="resultado-bisiesto" class="mt-4 text-center fw-bold"></h4>
          </div>
        </div>
      `;
      const form5 = document.getElementById("form-bisiesto");
      const input5 = document.getElementById("anio");
      const resultado5 = document.getElementById("resultado-bisiesto");
      form5.addEventListener("submit", (e) => {
        e.preventDefault();
        const anio = parseInt(input5.value);
        resultado5.textContent = esBisiesto(anio);
        resultado5.classList.remove("text-success", "text-danger", "animate__fadeInUp");
        void resultado5.offsetWidth;
        if (resultado5.textContent === "Es bisiesto") {
          resultado5.classList.add("text-success");
        } else {
          resultado5.classList.add("text-danger");
        }
        resultado5.classList.add("animate__animated", "animate__fadeInUp");
        input5.value = "";
      });
      break;

    // ==================================
    // EJERCICIO 6
    // ==================================
    case "6":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 420px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 6: esElegibleParaPrestamo</h3>
            <form id="form-prestamo" class="text-center">
              <div class="mb-3">
                <input type="number" id="salario" class="form-control text-center" placeholder="Ingresa el salario mensual" required>
              </div>
              <div class="mb-3">
                <input type="number" id="puntaje" class="form-control text-center" placeholder="Ingresa el puntaje de crédito" required>
              </div>
              <button class="btn btn-dark w-100" type="submit">Evaluar</button>
            </form>
            <h4 id="resultado-prestamo" class="mt-4 text-center fw-bold"></h4>
          </div>
        </div>
      `;
      const form6 = document.getElementById("form-prestamo");
      const inputSalario = document.getElementById("salario");
      const inputPuntaje = document.getElementById("puntaje");
      const resultado6 = document.getElementById("resultado-prestamo");
      form6.addEventListener("submit", (e) => {
        e.preventDefault();
        const salario = parseFloat(inputSalario.value);
        const puntaje = parseInt(inputPuntaje.value);
        resultado6.textContent = esElegibleParaPrestamo(salario, puntaje);
        resultado6.classList.remove("text-success", "text-danger", "animate__fadeInUp");
        void resultado6.offsetWidth;
        if (resultado6.textContent === "Elegible para préstamo") {
          resultado6.classList.add("text-success");
        } else {
          resultado6.classList.add("text-danger");
        }
        resultado6.classList.add("animate__animated", "animate__fadeInUp");
        inputSalario.value = "";
        inputPuntaje.value = "";
      });
      break;

    // ==================================
    // EJERCICIO 7
    // ==================================
    case "7":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:70vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 500px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 7: Libros</h3>
            <form id="form-libros" class="text-center mb-3">
              <div class="mb-3">
                <input type="text" id="palabra" class="form-control text-center" placeholder="Buscar en títulos..." required>
              </div>
              <button class="btn btn-primary w-100" type="submit">Buscar</button>
            </form>
            <h5 class="mt-3">Resultados:</h5>
            <ul id="resultado-libros" class="list-group mb-4"></ul>
            <button id="btn-paginas" class="btn btn-secondary w-100">Mostrar títulos y páginas</button>
            <ul id="resultado-paginas" class="list-group mt-3"></ul>
          </div>
        </div>
      `;
      const form7 = document.getElementById("form-libros");
      const inputPalabra = document.getElementById("palabra");
      const resultadoLibros = document.getElementById("resultado-libros");
      const btnPaginas = document.getElementById("btn-paginas");
      const resultadoPaginas = document.getElementById("resultado-paginas");
      form7.addEventListener("submit", (e) => {
        e.preventDefault();
        resultadoLibros.innerHTML = "";
        resultadoPaginas.innerHTML = "";
        const palabra = inputPalabra.value.trim();
        const encontrados = consultarLibrosPorPalabraClaveTitulo(palabra);
        if (encontrados.length > 0) {
          encontrados.forEach(libro => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${libro.titulo} - ${libro.autor}`;
            resultadoLibros.appendChild(li);
          });
        } else {
          resultadoLibros.innerHTML = `<li class="list-group-item text-danger">No se encontraron libros.</li>`;
        }
        inputPalabra.value = "";
      });
      btnPaginas.addEventListener("click", () => {
        resultadoPaginas.innerHTML = "";
        const lista = consultarLibrosPaginas();
        if (lista.length > 0) {
          lista.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${item.titulo} - ${item.paginas} páginas`;
            resultadoPaginas.appendChild(li);
          });
        } else {
          resultadoPaginas.innerHTML = `<li class="list-group-item text-danger">No hay libros para mostrar.</li>`;
        }
      });
      break;

    // ==================================
    // EJERCICIO 8
    // ==================================
    case "8":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:80vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 500px; border-radius: 15px;">
            <h3 class="text-center mb-3">Ejercicio 8: Proyecto Alcancía</h3>
            <div class="mb-3">
              <label class="form-label">Agregar moneda:</label>
              <select id="moneda" class="form-select">
                <option value="200">$200</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
              </select>
            </div>
            <button id="btn-agregar" class="btn btn-primary w-100 mb-2" type="button">Agregar</button>
            <button id="btn-contar" class="btn btn-info w-100 mb-2" type="button">Contar monedas</button>
            <button id="btn-total" class="btn btn-success w-100 mb-2" type="button">Calcular total</button>
            <button id="btn-romper" class="btn btn-danger w-100 mb-2" type="button">Romper alcancía</button>
            <button id="btn-nueva" class="btn btn-secondary w-100 mb-2" type="button">Nueva alcancía</button>
            <h5 class="mt-3">Resultados:</h5>
            <div id="resultado-alcancia" class="alert alert-light text-dark"></div>
          </div>
        </div>
      `;
      let miAlcancia = new Alcancia();
      const selectMoneda = document.getElementById("moneda");
      const btnAgregar = document.getElementById("btn-agregar");
      const btnContar = document.getElementById("btn-contar");
      const btnTotal = document.getElementById("btn-total");
      const btnRomper = document.getElementById("btn-romper");
      const btnNueva = document.getElementById("btn-nueva");
      const resultadoAlcancia = document.getElementById("resultado-alcancia");
      btnAgregar.addEventListener("click", () => {
        const valor = parseInt(selectMoneda.value);
        miAlcancia.agregarMoneda(valor);
        resultadoAlcancia.textContent = `Se agregó una moneda de $${valor}`;
        resultadoAlcancia.className = "alert alert-success animate__animated animate__fadeInUp";
      });
      btnContar.addEventListener("click", () => {
        const conteo = miAlcancia.contarMonedas();
        resultadoAlcancia.innerHTML = `
          <strong>Monedas:</strong><br>
          $200: ${conteo.monedas200} <br>
          $500: ${conteo.monedas500} <br>
          $1000: ${conteo.monedas1000}
        `;
        resultadoAlcancia.className = "alert alert-info animate__animated animate__fadeInUp";
      });
      btnTotal.addEventListener("click", () => {
        const total = miAlcancia.calcularTotal();
        resultadoAlcancia.textContent = `Total ahorrado: $${total}`;
        resultadoAlcancia.className = "alert alert-primary animate__animated animate__fadeInUp";
      });
      btnRomper.addEventListener("click", () => {
        const total = miAlcancia.romperAlcancia();
        resultadoAlcancia.textContent = `Rompiste la alcancía. Recuperaste $${total}`;
        resultadoAlcancia.className = "alert alert-danger animate__animated animate__fadeInUp";
      });
      btnNueva.addEventListener("click", () => {
        miAlcancia = new Alcancia();
        resultadoAlcancia.textContent = "Nueva alcancía creada. Está vacía.";
        resultadoAlcancia.className = "alert alert-secondary animate__animated animate__fadeInUp";
      });
      break;

    // ==================================
    // EJERCICIO 9 (CON SWEETALERT2)
    // ==================================
    case "9":
      contenido.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="min-height:80vh;">
          <div class="card p-4 text-dark shadow-lg" style="width: 700px; border-radius: 15px;">
            <h3 class="text-center mb-3">Agenda de Contactos</h3>
            <form id="form-contacto" class="mb-3">
              <div class="row mb-2">
                <div class="col-md-6">
                  <input type="text" id="contacto-id" class="form-control mb-2" placeholder="Identificación" required>
                </div>
                <div class="col-md-6">
                  <input type="text" id="contacto-nombre" class="form-control mb-2" placeholder="Nombre" required>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6">
                  <input type="text" id="contacto-apellido" class="form-control mb-2" placeholder="Apellido" required>
                </div>
                <div class="col-md-6">
                  <input type="email" id="contacto-correo" class="form-control mb-2" placeholder="Correo" required>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-12">
                  <input type="text" id="contacto-celular" class="form-control mb-2" placeholder="Celular" required>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <button type="button" id="btn-agregar" class="btn btn-primary">Agregar</button>
                <button type="button" id="btn-consultar" class="btn btn-info">Consultar</button>
                <button type="button" id="btn-actualizar" class="btn btn-warning">Actualizar</button>
                <button type="button" id="btn-eliminar" class="btn btn-danger">Eliminar</button>
              </div>
            </form>
            <h5 class="mt-4">Contactos:</h5>
            <table class="table table-striped table-bordered mt-2">
              <thead class="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Celular</th>
                </tr>
              </thead>
              <tbody id="tabla-contactos"></tbody>
            </table>
          </div>
        </div>
      `;
      let contactos = [];
      const id = document.getElementById("contacto-id");
      const nombre = document.getElementById("contacto-nombre");
      const apellido = document.getElementById("contacto-apellido");
      const correo = document.getElementById("contacto-correo");
      const celular = document.getElementById("contacto-celular");
      const tabla = document.getElementById("tabla-contactos");
      const btnAgregarC = document.getElementById("btn-agregar");
      const btnConsultarC = document.getElementById("btn-consultar");
      const btnActualizarC = document.getElementById("btn-actualizar");
      const btnEliminarC = document.getElementById("btn-eliminar");

      function renderTabla() {
        tabla.innerHTML = "";
        contactos.forEach(c => {
          tabla.innerHTML += `
            <tr>
              <td>${c.id}</td>
              <td>${c.nombre}</td>
              <td>${c.apellido}</td>
              <td>${c.correo}</td>
              <td>${c.celular}</td>
            </tr>
          `;
        });
      }

      btnAgregarC.addEventListener("click", () => {
        if (contactos.find(c => c.id === id.value)) {
          Swal.fire("Error", "Ya existe un contacto con esa identificación", "error");
          return;
        }
        const nuevo = new Contacto(id.value, nombre.value, apellido.value, correo.value, celular.value);
        contactos.push(nuevo);
        renderTabla();
        Swal.fire("Éxito", "Contacto agregado con éxito", "success");
      });

      btnConsultarC.addEventListener("click", () => {
        const encontrado = contactos.find(c => c.id === id.value);
        if (encontrado) {
          nombre.value = encontrado.nombre;
          apellido.value = encontrado.apellido;
          correo.value = encontrado.correo;
          celular.value = encontrado.celular;
          Swal.fire("Encontrado", "Contacto encontrado", "info");
        } else {
          Swal.fire("Error", "No se encontró un contacto con esa identificación", "error");
        }
      });

      btnActualizarC.addEventListener("click", () => {
        const indice = contactos.findIndex(c => c.id === id.value);
        if (indice !== -1) {
          contactos[indice].nombre = nombre.value;
          contactos[indice].apellido = apellido.value;
          contactos[indice].correo = correo.value;
          contactos[indice].celular = celular.value;
          renderTabla();
          Swal.fire("Actualizado", "Contacto actualizado correctamente", "success");
        } else {
          Swal.fire("Error", "No se encontró un contacto con esa identificación", "error");
        }
      });

      btnEliminarC.addEventListener("click", () => {
        const indice = contactos.findIndex(c => c.id === id.value);
        if (indice !== -1) {
          contactos.splice(indice, 1);
          renderTabla();
          Swal.fire("Eliminado", "Contacto eliminado con éxito", "success");
        } else {
          Swal.fire("Error", "No se encontró un contacto con esa identificación", "error");
        }
      });
      break;
  }
}
