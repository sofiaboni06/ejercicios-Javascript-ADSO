const monedas = {
    200: 0,
    500: 0,
    1000: 0
};

const txtMonedas200 = document.getElementById('txtMonedas200');
const txtMonedas500 = document.getElementById('txtMonedas500');
const txtMonedas1000 = document.getElementById('txtMonedas1000');
const txtTotalAlcancia = document.getElementById('txtTotalAlcancia');

function actualizarUI() {
    txtMonedas200.value = monedas[200];
    txtMonedas500.value = monedas[500];
    txtMonedas1000.value = monedas[1000];
    txtTotalAlcancia.value = monedas[200]*200 + monedas[500]*500 + monedas[1000]*1000;
}

document.getElementById('img200').addEventListener('click', () => {
    monedas[200]++;
    actualizarUI();
});
document.getElementById('img500').addEventListener('click', () => {
    monedas[500]++;
    actualizarUI();
});
document.getElementById('img1000').addEventListener('click', () => {
    monedas[1000]++;
    actualizarUI();
});

// Si quieres que el usuario pueda editar manualmente los inputs:
txtMonedas200.addEventListener('input', () => {
    monedas[200] = parseInt(txtMonedas200.value) || 0;
    actualizarUI();
});
txtMonedas500.addEventListener('input', () => {
    monedas[500] = parseInt(txtMonedas500.value) || 0;
    actualizarUI();
});
txtMonedas1000.addEventListener('input', () => {
    monedas[1000] = parseInt(txtMonedas1000.value) || 0;
    actualizarUI();
});

// Inicializar UI
actualizarUI();

// Funcionalidad para el botón "Romper..."
document.getElementById('btnRomper').addEventListener('click', () => {
    monedas[200] = 0;
    monedas[500] = 0;
    monedas[1000] = 0;
    actualizarUI();
});