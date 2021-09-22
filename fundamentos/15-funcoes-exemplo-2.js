// Arrow functions (guardadas em variável)
let areaCirculo = raio => {return (Math.PI * Math.pow(raio, 2)).toFixed(2)}
let raiz1Grau = (a, b = 0) => {return (- 1 * b / a).toFixed(2)}

// Arrow functions ainda mais reduzidas
let areaRetangulo = (lado1, lado2) => (lado1 * lado2).toFixed(2)
let areaTriangulo = (base, h) => ((base * h) / 2).toFixed(2)
let areaTrapezio = (B, b, h) => ((B + b) * h / 2).toFixed(2)
