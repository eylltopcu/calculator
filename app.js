const ilksayi = document.getElementById("sayibir");
const ikincisayi = document.getElementById("sayiiki");
const sonuc = document.getElementById("sonuc");

const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let s;

function getValues() {
    const a = ilksayi.value;
    const b = ikincisayi.value;

    if (a === "" || b === "") {
        sonuc.innerHTML = "Lütfen kutuları doldurun.";
        return null;
    }
    
    return [Number(a), Number(b)];
}

const topla = (e) => {
    e.preventDefault();
    const values = getValues();
    if (!values) return;
    const [a, b] = values;
    s = a + b;
    updateSonuc();
}

const cikar = (e) => {
    e.preventDefault();
    const values = getValues();
    if (!values) return;
    const [a, b] = values;
    s = a - b;
    updateSonuc();
}

const carp = (e) => {
    e.preventDefault();
    const values = getValues();
    if (!values) return;
    const [a, b] = values;
    s = a * b;
    updateSonuc();
}

const bol = (e) => {
    e.preventDefault();
    const values = getValues();
    if (!values) return;
    const [a, b] = values;
    s = b !== 0 ? a / b : "Sıfıra bölünmez!";
    updateSonuc();
}

function updateSonuc() {
    sonuc.innerHTML = `Sonuç: ${s}`;
}

sum.addEventListener("click", topla);
sub.addEventListener("click", cikar);
multiply.addEventListener("click", carp);
divide.addEventListener("click", bol);
