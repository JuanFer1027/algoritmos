function sumar() {
    let n1, n2, suma;

    alert("Este algoritmo suma dos numeros ingresados por el usuario");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    suma = n1 + n2;
    alert("El resultado de la suma es: "+ suma);
}

function operacionesBasicas() {
    let n1, n2, suma, resta, multiplicacion, division;

    alert("Este algoritmo suma, resta, multiplica y divide dos números ingresados por el usuario");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    suma = n1 + n2;
    resta = n1 - n2;
    multiplicacion = n1 * n2;
    division = n1 / n2;
    alert("El resultado de la suma es: "+ suma);
    alert("El resultado de la resta es: "+ resta);
    alert("El resultado de la multiplicacion es: "+ multiplicacion);
    alert("El resultado de la division es: "+ division);
}

function conversionUnidadesLongitud() {
    let metros;
    let centimetros;
    let kilometros;

    alert("Este algoritmo convierte los metros a centimetros y kilometros");
    metros = parseFloat(prompt("Ingrese un valor en metros"));

    centimetros = metros * 100;
    kilometros = metros / 1000;
    alert("El equivalente de metros a centimetros es: "+ centimetros + "centimetros");
    alert("El equivalente de metros a kilometros es: "+ kilometros + "kilometros");
}

function conversionUnidadesTemperatura() {
    let c;
    let f;
    let k;

    alert("Este algoritmo convierte los grados celsius a fahrenheit y kelvin");
    c = parseFloat(prompt("Ingrese un valor en grados celsius"));

    f = (c * 1.8) + 32
    k = c + 273.15
    alert("El equivalente de grados celsius a fahrenheit es: "+ f + "f");
    alert("El equivalente de grados celsius a kelvin es: "+ k + "k");
}

function areaPerimetroRectangulo() {
    let base;
    let altura;
    let perimetro;
    let area;

    alert("Este algoritmo da el area y perimetro de un rectangulo");
    base = parseFloat(prompt("Ingrese la base del rectangulo"));
    altura = parseFloat(prompt("Ingrese la altura del rectangulo"));

    area = base * altura; 
    perimetro = 2*(base + altura);
    alert("El area del rectangulo es: "+ area);
    alert("El perimetro del rectangulo es: "+ perimetro);
}

function promedioTresNumeros() {
    let n1, n2, n3;
    let suma;
    let promedio;

    alert("Este algoritmo suma y da el promedio de tres números");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));
    n3 = parseFloat(prompt("Ingrese el tercer valor"));

    suma = n1 + n2 + n3;
    promedio = suma / 3
    alert("La suma de las tres notas es: "+ suma);
    alert("El promedio de las tres notas es: "+ promedio);
}

function conversionTiempo() {
    let s;
    let minutos;
    let horas;

    alert("Este algoritmo convierte los segundos en horas y en minutos");
    s = parseFloat(prompt("Ingrese un valor en segundos"));

    minutos = s / 60;
    horas = s / 3600;
    alert("El equivalente de segundos a minutos es: "+ minutos + "minutos");
    alert("El equivalente de segundos a horas es: "+ horas + "horas");
}

function conversionUnidadesPeso() {
    let kg;
    let gramos;
    let libras;
    let toneladas;

    alert("Este algoritmo convierte los kilogramos en gramos, libras y toneladas");
    kg = parseFloat(prompt("Ingrese un valor en kilogramos"));

    gramos = kg * 1000;
    libras = kg * 2205;
    toneladas = kg / 1000;
    alert("El equivalente de kilogramos a gramos es: "+ gramos + "gramos");
    alert("El equivalente de kilogramos a libras es: "+ libras + "libras");
    alert("El equivalente de kilogramos a toneladas: "+ toneladas + "toneladas");
}

function pesoPlanetas() {
    let pt, pm, pv, pl, pma, pj, ps, pu, pn;

    alert("Este algoritmo determina su peso en los planetas");
    pt = parseFloat(prompt("Ingrese su peso en la tierra"));

    pt = pt * 1;
    pm = pt * 3,70;
    pv = pt * 8,87;
    pl = pt * 1,62;
    pma = pt * 3,71;
    pj = pt * 24,79;
    ps = pt * 10,44;
    pu = pt * 8,69;
    pn = pt * 11,15;
    alert("El equivalente de su peso en la tierra es: "+ pt + "kg" + "El equivalente de su peso en mercurio es: "+ pm + "kg" + "El equivalente de su peso en venus es: "+ pv + "kg" + "El equivalente de su peso en la luna es: "+ pl + "kg" + "El equivalente de su peso en marte es: "+ pma + "kg" + "El equivalente de su peso en jupiter es: "+ pj + "kg" + "El equivalente de su peso en saturno es: "+ ps + "kg" + "El equivalente de su peso en urano es: "+ pu + "kg" + "El equivalente de su peso en neptuno es: "+ pn + "kg");
}
function calculoCompra() {
    let pr1, pr2, pr3;
    let c1, c2, c3;
    let valor1, valor2, valor3;
    let total;

    alert("Este algoritmo da el calculo de una compra de tres productos");
    pr1 = parseFloat(prompt("Ingrese el valor del producto 1"));
    c1 = parseFloat(prompt("Ingrese la cantidad del producto 1"));
    pr2 = parseFloat(prompt("Ingrese el valor del producto 2"));
    c2 = parseFloat(prompt("Ingrese la cantidad del producto 2"));
    pr3 = parseFloat(prompt("Ingrese el precio del prodcuto 3"));
    c3 = parseFloat(prompt("Ingrese la cantidad del producto 3"));

    valor1 = pr1 * c1;
    valor2 = pr2 * c2;
    valor3 = pr3 * c3;
    total = valor1 + valor2 + valor3;
    alert("El valor del producto 1 es: "+ valor1 + "El valor del producto 2 es: "+ valor2 + "El valor del producto 3 es: "+ valor3 + "Y el valor total es de: "+ total);
}

function calculoSalario() {
    let salario;
    let dias_trabajados;
    let horas_extras;
    let auxilio_transporte;
    let valor_dia;
    let pago_dia;
    let pago_total;

    alert("Este algoritmo permite calcular el pago de un trabajador");
    salario = parseFloat(prompt("Ingrese el salario del trabajador"));
    dias_trabajados = parseFloat(prompt("Ingrese los dias trabajados"));
    horas_extras = parseFloat(prompt("Ingrese el valor de las horas extras"));
    auxilio_transporte = parseFloat(prompt("Ingrese el auxilio de transporte"));

    valor_dia = salario / 30
    pago_dia = valor_dia * dias_trabajados
    pago_total = pago_dia + horas_extras + auxilio_transporte
    alert("El pago por valor del dia es: "+ valor_dia + " El pago por dias trabajados es: "+ pago_dia + " El pago total al trabajador es de: "+ pago_total)
}

function facturaServicio() {
    let c, vu, i, subtotal, valor_impuesto, total_pagar;

    alert("Este algoritmo permite hacer la factura de un servicio");
    c = parseFloat(prompt("Ingrese el valor del consumo"));
    vu = parseFloat(prompt("Ingrese el valor por unidad"));
    i = parseFloat(prompt("Ingrese el pocentaje de impuesto"));

    subtotal = c * vu;
    valor_impuesto = subtotal * i / 100;
    total_pagar = subtotal + valor_impuesto;
    alert("El subtotal a pagar es: "+ subtotal + " El valor del impuesto es de: "+ valor_impuesto + " Y el total a pagar es de: "+ total_pagar)
}

function costoViajeVehiculo() {
    let dr, cpv, prc, litros_consumidos, costo_combustible;

    alert("Este algoritmo permite calcular el costo aproximado del combustible utilizado durante un viaje");
    dr = parseFloat(prompt("Ingrese la distancia recorrida"));
    cpv = parseFloat(prompt("Ingrese el consumo promedio del vehiculo"));
    prc = parseFloat(prompt("Ingrese el precio del combustible"));

    litros_consumidos = dr / cpv;
    costo_combustible = litros_consumidos * prc;
    alert("Los litros consumidos fueron: "+ litros_consumidos + " Y el costo aproximado del combustible es: "+ costo_combustible);
}

function calculoTiempoViaje() {
    let d, vp, tiempo;

    alert("Este algoritmo permite determinar el tiempo estimado de un viaje");
    d = parseFloat(prompt("Ingrese la distancia recorrida"));
    vp = parseFloat(prompt("Ingrese la velocidad promedio"));

    tiempo = d / vp;
    alert("El tiempo estimado del viaje es de: "+ tiempo + " horas");
}

function sistemaBasicoNotas() {
    let n1, pr1, n2, pr2, n3, pr3, aporte1, aporte2, aporte3, nota_final;

    alert("Este algoritmo permite calcular la nota final de un estudiante a partir de diferentes actividades y el porcentaje que representa cada una");
    n1 = parseFloat(prompt("Ingrese la nota de la actividad 1"));
    pr1 = parseFloat(prompt("Ingrese el porcentaje de la actividad 1"));
    n2 = parseFloat(prompt("Ingrese la nota de la actividad 2"));
    pr2 = parseFloat(prompt("Ingrese el porcentaje de la actividad 2"));
    n3 = parseFloat(prompt("Ingrese la nota de la activiad 3"));
    pr3 = parseFloat(prompt("Ingrese el porcentaje de la actividad 3"));

    aporte1 = n1 * pr1 / 100;
    aporte2 = n2 * pr2 / 100;
    aporte3 = n3 * pr3 / 100;
    nota_final = aporte1 + aporte2 + aporte3;
    alert("El resultado de la actividad 1 es: "+ aporte1 + " El resultado de la actividad 2 es: "+ aporte2 + " El resultado de la actividad 3 es: "+ aporte3 + " La nota final es de: "+ nota_final);
}

function conversorMonedas() {
    let cop, dolares, euros, libras;

    alert("Este algoritmo permite ver equivalente de pesos colombianos en otras monedas");
    cop = parseFloat(prompt("Ingrese un valor en pesos colombianos"));

    dolares = cop / 3167.91;
    euros = cop / 3561.00;
    libras = cop / 4208.90;
    alert("El equivalente de pesos colombianos a dolares es: "+ dolares + "USD" + " El equivalente de pesos colombianos a euros es: "+ euros + "EUR" + " El equivalente de pesos colombianos a libras esterlinas es: "+ libras + "GBP");
}

//ALGORITMOS CONDICIONALES

function numeroPositivo() {
    let n;

    alert("Este algoritmo permite determinar si un numero es positivo");
    n = parseFloat(prompt("Ingrese un numero"));

    if (n > 0) {
        alert("El numero es positivo")
    } else if (n < 0) {
        alert("El numero es negativo")
    } else {
        alert("Es neutro")
    }
}

function numeroParImpar() {
    let n;

    alert("Este algoritmo permite determinar si un numero es par o impar");
    n = parseFloat(prompt("Ingrese un numero"));

    if (n % 2 == 0) {
        alert("El numero es par")
    } else {
        alert("El numero es impar");
    }
}

function mayorDosNumeros() {
    let a, b;

    alert("Este algoritmo determina el mayor de dos numeros ingresados");
    a = parseFloat(prompt("Ingrese el pirmer numero"));
    b = parseFloat(prompt("Ingrese el segundo numero"));

    if (a > b) {
        alert("El numero: "+ a + " es mayor que "+ b);
    } else if (b > a) {
        alert("El numero "+ b + " es mayor que "+ a);
    } else {
        alert("El numero: "+ a + " y "+ b + " son iguales");
    }
}

function descuentoCompra() {
    let c, descuento, total_pagar;

    alert("Este algoritmo determina si una compra obtiene o no descuento");
    c = parseFloat(prompt("Ingrese el valor de la cocmpra"));

    if (c >= 200000) {
        descuento = c * 10 / 100;
    } else {
        descuento = 0;
    }
    total_pagar = c - descuento;
    alert("El descuento es de: "+ descuento + " y el total a pagar es de: "+ total_pagar);
}

function temperaturaCiudad() {
    let t;

    alert("Este algoritmo determina la temperatura de una ciudad");
    t = parseFloat(prompt("Ingrese la temperatura"));

    if (t > 30) {
        alert("La temperatura: "+ t + " es alta");
    } else {
        alert("La temperatura: "+ t + " es no alta");
    }
}

function mayorEdad() {
    let e;

    alert("Este algoritmo determina si es mayor o menor de edad");
    e = parseFloat(prompt("Ingrese la edad"));

    if (e > 17) {
        alert("Es mayor de edad");
    } else {
        alert("Es menor de edad");
    }
}

function retiroDinero() {
    let saldo_disponible, valor_retiro, saldo_final;

    alert("Este algoritmo permite hacer el retiro de un dinero");
    saldo_disponible = parseFloat(prompt("Ingrese el saldo disponible que tiene en la cuenta"));
    valor_retiro = parseFloat(prompt("Ingrese el valor a retirar"));

    if (valor_retiro <= saldo_disponible) {
        saldo_final = saldo_disponible - valor_retiro;
        alert("El saldo final es de: "+ saldo_final);
    } else {
        alert("El saldo es insuficiente");
    }
}

function envioGratuito() {
    let compra, envio, total_pagar;

    alert("Este algoritmo permite determinar si hay envio gratuito o no");
    compra = parseFloat(prompt("Ingrese el valor de la compra"));

    if (compra >= 150000) {
        envio = 0;
    } else {
        envio = 12000;
    } total_pagar = compra + envio;
    alert("El cobro del envio es de: "+ envio + " y el total a pagar es de: "+ total_pagar);
}

function numeroMayorMenor() {
    let n1, n2;

    alert("Este algoritmo permite determinar si el primer numero es mayor, menor o igual al segundo");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (n1 > n2) {
        alert("El primer numero: "+ n1 + " es mayor");
    } else if (n1 < n2) {
        alert("El primer numero: "+ n1 + " es menor");
    } else {
        alert("Los numeros: "+ n1 + " y: "+ n2 + " son iguales");
    }
}

function tarifaParqueadero() {
    let numero_horas, pago;

    alert("Este algoritmo permite saber cual es el cobro de un parqueadero segun su tiempo de permanencia en el");
    numero_horas = parseFloat(prompt("Ingrese el numero de horas que estuvo en el parqueadero"));

    if (numero_horas <= 1) {
        pago = 5000;
    } else if (numero_horas <= 3) {
        pago = 10000;
    } else if (numero_horas <= 6) {
        pago = 18000;
    } else {
        pago = 25000;
    }
    alert("El pago del parqueadero es de: "+ pago);
}

function tarifaTransporte() {
    let edad, pago;

    alert("Este algoritmo permite saber cual es el pago del transporte segun la edad");
    edad = parseInt(prompt("Ingrese la edad"));

    if (edad < 5) {
        pago = 0;
    } else if (edad <= 17) {
        pago = 2000;
    } else if (edad <= 59) {
        pago = 3500;
    } else {
        pago = 2500;
    }
    alert("El pago del pasaje es de: "+ pago);
}

function clasificacionVelocidad() {
    let velocidad;

    alert("Este algoritmo permite clasificar la velocidad de un vehiculo y clasificarla");
    velocidad = parseFloat(prompt("Ingrese la velocidad del vehiculo"));

    if (velocidad <= 30) {
        alert("La velocidad del vehiculo es baja");
    } else if (velocidad <= 60) {
        alert("La velovidad del vehiculo es moderada");
    } else if (velocidad <= 100) {
        alert("La velocidad del vehiculo es alta");
    } else {
        alert("La velocidad del vehiculo es muy alta");
    }
}

function mesDias() {
    let numero_mes, dias;

    alert("Este algoritmo permite determinar cuantos dias tiene un mes");
    numero_mes = parseInt(prompt("Ingrese el numero del mes"));

    if (numero_mes == 2) {
        dias = 28;
    } else if (numero_mes == 4 || numero_mes == 6 || numero_mes == 9 || numero_mes == 11) {
        dias = 30;
    } else {
        dias = 31;
    }
    alert("El mes: "+ numero_mes + " tiene "+ dias + " dias");
}

function accesoAtraccion() {
    let edad, estatura;

    alert("Este algoritmo permite saber el ingreso a una atraccion segun su edad y su estatura");
    edad = parseInt(prompt("Ingrese la edad"));
    estatura = parseFloat(prompt("Ingrese la estatura"));

    if (edad >= 12 && estatura >= 1.40) {
        alert("Si puede ingresar a la atraccion");
    } else {
        alert("No puede ingresar a la atraccion");
    }
}

function descuentoCliente() {
    let tipo_cliente;
    let compra, descuento, total;

    alert("Este algoritmo permite saber si un cliente recibe descuento o no");
    tipo_cliente = prompt("Ingrese el tipo de cliente que eres");
    compra = parseFloat(prompt("Ingrese el valor de la compra"));

    if (compra >= 200000) {
        if (tipo_cliente == "Normal") {
            descuento = compra * 5 / 100;
        } else if (tipo_cliente == "Frecuente") {
            descuento = compra * 10 / 100;
        } 
    } else {
        descuento = 0;
    }
    total = compra - descuento;
    alert("El descuento fue de: "+ descuento + " y el total a pagar es de: "+ total);
}

function cajeroAutomatico() {
    let saldo_disponible, valor_retiro;

    alert("Este algoritmo permite hacer un cajero automatico");
    saldo_disponible = parseFloat(prompt("Ingrese el saldo disponible"));
    valor_retiro = parseFloat(prompt("Ingrese el valor a retirar"));

    if (valor_retiro <= 0) {
        alert("El retiro debe ser mayor a 0");
    } else if (valor_retiro % 10000 == 0) {
      if (valor_retiro > saldo_disponible) {
        alert("Saldo insuficiente");
      } else {
        alert("Retiro aprobado");
      }
} else {
    alert("El retiro debe ser multiplo de 10000");
    }
}

function validacionContraseña() {
    let usuario;
    let clave;
    let user;
    let pass;

    alert("Este algoritmo permite hacer la validacion de una contraseña");
    usuario = "admin";
    clave = 123;
    user = prompt("Ingrese su usuario");
    pass = parseInt(prompt("Ingrese la contraseña"));

    if (usuario == user) {
        if (clave == pass) {
            alert("Bienvenido");
        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("Usuario no valido");
    }
}

function añoBisiesto() {
    let año;

    alert("Este algoritmo permite determinar si el año es bisiesto");
    año = parseInt(prompt("Ingrese el año"));

    if (año % 400 == 0) {
        alert("El año: "+ año + " es bisiesto");
    } else if (año % 100 == 0) {
        alert("El año: "+ año + " no es bisiesto");
    } else if (año % 4 == 0) {
        alert("El año: "+ año + " es bisiesto");
    } else {
        alert("El año: "+ año + " no es bisiesto");
    }
}

function clasificacionTriangulos() {
    let lado1, lado2, lado3;

    alert("Este algoritmo permite clasificar los triangulos segun sus lados");
    lado1 = parseFloat(prompt("Ingrese la primer medida"));
    lado2 = parseFloat(prompt("Ingrese la segunda medida"));
    lado3 = parseFloat(prompt("Ingrese la tercer medida"));

    if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
        if ((lado1 === lado2) && (lado2 === lado3)) {
            alert("Es un triangulo equilatero");
        } else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
            alert("Es un triangulo isosceles");
        } else {
            alert("Es un triangulo escaleno");
        }
    } else {
        alert("Los lados no forman un triangulo");
    }
}

function calculadora() {
    let n1, n2, operacion, resultado;

    alert("Este algoritmo permite escoger una opcion de una calculadora");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    operacion = parseInt(prompt("Seleccione una operacion"));

    if (operacion == 1) {
        resultado = n1 + n2;
        alert("El resultado de sumar: "+ n1 + " y "+ n2 + " da: "+ resultado);
    } else if (operacion == 2) {
        resultado = n1 - n2;
        alert("El resulatdo de restar: "+ n1 + " y "+ n2 + " da: "+ resultado);
    } else if (operacion == 3) {
        resultado = n1 * n2;
        alert("El resultado de multiplicar: "+ n1 + " y "+ n2 + " da: "+ resultado);
    } else if (operacion == 4) {
        if (n2 == 0) {
            alert("No se puede dividir entre cero");
        } else {
            resultado = n1 / n2;
            alert("El resultado de dividir: "+ n1 + " y "+ n2 + " da: "+ resultado);
        }
    } else {
        alert("Operacion no valida");
    }
}

function sistemaTarifasEquipaje() {
    let peso_maleta;

    alert("Este algoritmo permite determinar el costo adicional de una maleta segun su peso");
    peso_maleta = parseFloat(prompt("Ingrese el peso de la maleta"));

    if (peso_maleta <= 23) {
        alert("El peso: "+ peso_maleta + " no tiene ningun costo adicional");
    } else if (peso_maleta <= 30) {
        alert("El peso: "+ peso_maleta + " tiene un costo adicional de $50.000");
    } else if (peso_maleta <= 40) {
        alert("El peso: "+ peso_maleta + " tiene un costo adicional de $100.000");
    } else {
        alert("El peso de la maleta no se permite transportar");
    }
}

function facturaCompra() {
    let valor_compra, descuento, valor_descuento, iva, total;

    alert("Este algoritmo permite hacer la factura de una compra");
    valor_compra = parseFloat(prompt("Ingrese el valor de la compra"));

    if (valor_compra < 100000) {
        descuento = 0;
    } else if (valor_compra < 300000) {
        descuento = valor_compra * 0.05;
    } else if (valor_compra < 500000) {
        descuento = valor_compra * 0.10;
    } else {
        descuento = valor_compra * 0.15;
    }
    valor_descuento = valor_compra - descuento;
    iva = valor_descuento * 0.19;
    total = valor_descuento + iva;
    alert("El subtotal de la compra es de: "+ valor_compra + " El descuento es de: "+ descuento + " El valor con descuento es de: "+ valor_descuento + " El IVA fue de: "+ iva + " Y el total de la compra es de: "+ total);
}

function sistemaCalificacionRiesgo() {
    let edad, ingresos_mensuales;

    alert("Este algoritmo permite clasificar una solicitud de credito segun sus datos");
    edad = parseInt(prompt("Ingrese la edad"));
    ingresos_mensuales = parseFloat(prompt("Ingrese los ingresos mensuales"));

    if (edad < 18) {
        alert("No elegible");
    } else if (edad <= 25) {
        if (ingresos_mensuales >= 2000000) {
            alert("Elegible");
        } else {
            alert("No elegible");
        }
    } else if (ingresos_mensuales >= 1500000) {
        alert("Elegible");
    } else {
        alert("No elegible");
    }
}

function mayorMenorIgualdad() {
    let n1, n2, n3, mayor, menor;

    alert("Este algoritmo permite determinar el numero mayor, menor y si existen numeros iguales entre 3 numeros");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    n3 = parseFloat(prompt("Ingrese el tercer numero"));
    mayor = n1;
    menor = n1;

    if (n2 > mayor) {
        mayor = n2;
    } 
    if (n3 > mayor) {
        mayor = n3;
    } 
    if (n2 < menor) {
        menor = n2;
    } 
    if (n3 < menor) {
        menor = n3;
    } alert("El numero mayor es: "+ mayor);
    alert("El numero menor es: "+ menor);
    if ((n1 === n2) || (n1 === n3) || (n2 === n3)) {
        alert("Existen valores iguales");
    } else {
        alert("No existen valores iguales");
    }
}

function parqueaderoExamen() {
    let tipo_vehiculo;
    let horas, total_pagar, descuento, precio;

    alert("Este algoritmo es para un parqueadero");
    tipo_vehiculo = "Automovil";
    tipo_vehiculo = "Motocicleta";
    horas = 0;

    tipo_vehiculo = prompt("Ingrese el tipo de vehiculo (Automovil o Motocicleta)");
    horas = parseFloat(prompt("Ingrese cuantas horas estuvo en el establecimiento"));

    if (horas <= 0) {
        alert("Error: Las horas deben ser mayores a cero");
    } else if (tipo_vehiculo == "Automovil") {
        precio = 5000;
    if (horas > 5) {
        descuento = 0.10;
    } else {
        descuento = 0;
    } 
    total_pagar = precio * horas * (1 - descuento);
    alert("El tipo de vehciulo es: "+ tipo_vehiculo);
    alert("El total a pagar es de: $" + total_pagar);

    } else if (tipo_vehiculo == "Motocicleta") {
        precio = 3000;
    if (horas > 5) {
        descuento = 0.10;
    } else {
        descuento = 0;
    } 
    total_pagar = precio * horas * (1 - descuento);
    alert("El tipo de vehciulo es: "+ tipo_vehiculo);
    alert("El total a pagar es de: $" + total_pagar);
    }
}

//ALGORITMOS DE BUCLES

function contarNumeros() {
    let vi, vf, contador;

    alert("Este algoritmo permite dar un valor incial y un valor final y mostrar todos los numeros comprendidos entre ambos valores");
    vi = parseFloat(prompt("Ingrese el valor inicial"));
    vf = parseFloat(prompt("Ingrese el valor final"));
    contador = vi;

    while (contador <= vf) {
        console.log("Mostrando: "+ contador);
        contador = contador + 1;
    }
}

function cuentaRegresiva() {
    let contador;

    alert("Este algoritmo permite realizar una cuenta regresiva desde un valor ingresado por el usuario hasta llegar a cero");
    contador = parseFloat(prompt("Ingrese un numero para hacer la cuenta regresiva"));

    while (contador >= 0) {
        console.log("Mostrando: "+ contador);
        contador = contador - 1;
    } console.log("La cuenta a terminado");
}

function numerosPares() {
    let vl, contador;

    alert("Este algoritmo permite ingresar un numero limite y mostrar los numeros pares comprendidos entre 1 y ese limite");
    vl = parseFloat(prompt("Ingrese el valor limite"));
    contador = 1;

    while (contador <= vl) {
        if (contador % 2 == 0) {
            console.log("Mostrando pares: "+ contador);
        } contador = contador + 1;
    }
}

function numerosImpares() {
   let vl;
   
    alert("Este algoritmo permite ingresar un numero limite y mostrar los numeros impares comprendidos entre 1 y ese limite");
    vl = parseFloat(prompt("Ingrese el valor limite"))

    for (let i = 1; i <= vl; i++) {
        if (i % 2 == 0) {
        } else {
            console.log("Mostrando impares: "+ i);
        }    
    }
}

function sumaNumeros() {
    let limite, suma;

    alert("Este algoritmo permite calcular la suma de de todos los numeros comprendidos entre 1 y N");
    limite = parseFloat(prompt("Ingrese el valor limte"));
    suma = 0;

    for (let i = 1; i <= limite; i++) {
        suma = suma + i;
    } console.log("El resultado de la suma es: "+ suma);
}

function tablaMultiplicar() {
    let n, m;

    alert("Este algoritmo permite solicitar un numero y mostrar su tabla de multiplicar desde 1 hasta 10");
    n = parseFloat(prompt("Ingrese el numero a multiplicar"));

    for (let i = 1; i <= 10; i++) {
        m = i * n;
        console.log("El resultado de multiplicar: "+ n + " x "+ i + " = "+ m);
    }
}

function contarParesImpares() {
    let limite, cant_pares, cant_impares;

    alert("Este algoritmo permite solicitar un numero limite y recorrer todos los numeros desde 1 hasta el limite y mostrar la cantidad de pares e impares");
    limite = parseFloat(prompt("Ingrese el numero limite"));
    cant_impares = 0;
    cant_pares =  0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 == 0) {
        cant_pares = cant_pares + 1;
    } else {
        cant_impares = cant_impares + 1;
    }
    }
    console.log("La cantidad de pares es: "+ cant_pares + " y la cantidad de impares es: "+ cant_impares);
}

function promedioNumeros() {
    let cant_numeros, n, suma, promedio;

    alert("Este algoritmo permite calcular el promedio de x numeros");
    cant_numeros = parseInt(prompt("Ingrese la cantida de numeros que desea ingresar"));
    suma = 0;

    for (let i = 1; i <= cant_numeros; i++) {
         n = parseInt(prompt("Ingrese un numero"));
        suma = suma + n;
    }
    promedio = suma / cant_numeros;
    console.log("La cantidad de numeros ingresados es: "+ cant_numeros + " La suma de los numeros es: "+ suma + " Y el promedio es de: "+ promedio);
}

function numeroMayor() {
    let cant_numeros, n, numero_mayor;

    alert("Este algoritmo permite determinar cual es el numero mayor");
    cant_numeros = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar"));
    n = parseFloat(prompt("Ingrese un numero"));
    numero_mayor = n;

    for (let i = 2; i <= cant_numeros; i++) {
        n = parseFloat(prompt("Ingrese un numero"));
        if (n > numero_mayor) {
            numero_mayor = n;
        } 
    }
    console.log("El numero mayor es: "+ numero_mayor);
}

function numeroMayor() {
    let cant_numeros, n, numero_menor;

    alert("Este algoritmo permite determinar cual es el numero menor");
    cant_numeros = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar"));
    n = parseFloat(prompt("Ingrese un numero"));
    numero_menor = n;

    for (let i = 2; i <= cant_numeros; i++) {
        n = parseFloat(prompt("Ingrese un numero"));
        if (n > numero_menor) {
        } else {
            numero_menor = n;
        }
    }
    console.log("El numero menor es: "+ numero_menor);
}

function clasificacionNumeros() {
    let cant_numeros, n, positivos, negativos, ceros;

    alert("Este algoritmo permite clasificar numeros ingresados en positivos, negativos y ceros");
    cant_numeros = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar"));
    positivos = 0;
    negativos = 0;
    ceros = 0;

    for (let i = 1; i <= cant_numeros; i++) {
        n = parseFloat(prompt("Ingrese un numero"));
        if (n > 0) {
            positivos = positivos + 1;
        } else if (n < 0) {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }
    }
    console.log("La cantidad de positivos es: "+ positivos + " La cantidad de negativos es: "+ negativos + " Y la cantudad de ceros es: "+ ceros);
}

function estadisticasVentas() {
    let cantidad_ventas, venta, total, promedio, venta_mayor, venta_menor;

    alert("Este algoritmo permite hacer las estadisitcas de ventas");
    cantidad_ventas = parseInt(prompt("Ingrese la cantidad de ventas durante el dia"));
    venta = parseFloat(prompt("Ingrese el valor de la venta"));
    total = venta;
    venta_mayor = venta;
    venta_menor = venta;

    for (let i = 2; i <= cantidad_ventas; i++) {
        venta = parseFloat(prompt("Ingrese el valor de la venta"));
        total = total + venta;
        if (venta > venta_mayor) {
            venta_mayor = venta;
        } else if (venta < venta_menor) {
            venta_menor = venta;
        }
    }
    promedio = total / cantidad_ventas;
    console.log("El total de ventas es: "+ total + " El promedio de ventas es de: "+ promedio + " La venta de mayor valor es: "+ venta_mayor + " La venta de menor valor es: "+ venta_menor);
}

function ingresarNumerosCero() {
    let n, suma, promedio, cantidad;

    alert("Este algoritmo permite hacer un ingreso de numeros por el usuario, si ingresa el cero la cuenta termina");

    n = parseInt(prompt("Ingrese un numero"));
    suma = 0;
    cantidad = 0;

    while (n != 0) {
        suma = suma + n;
        cantidad = cantidad + 1;
        n = parseInt(prompt("Ingrese un numero"));
    }
    promedio = suma / cantidad;
    console.log("La cantidad de numeros ingresados es: "+ cantidad + " La suma es de: "+ suma + " Y el promedio es de: "+ promedio);
}

function validacionContraseña() {
    let clave;

    alert("Este algoritmo permite hacer la validacion de una contraseña");
    clave = prompt("Ingrese la clave");

    while (clave != 123) {
        alert("Contraseña incorrecta");
        clave = prompt("Ingrese la clave nuevamente");
    }
    console.log("Contraseña Correcta-Acceso Permitido");
}

function menuOpciones() {
    let opcion;

    alert("Este algoritmo muestra un menu con opciones");
    opcion = 0;

    while (opcion != 4) {
        console.log("MENU DE OPCIONES");
        console.log("1. Mostrar Mensaje");
        console.log("2. Mostrar Informacion");
        console.log("3. Realizar Una Operacion");
        console.log("4. Salir del Sistema");
        opcion = parseInt(prompt("Ingrese el numero de la opcion que necesita"));
        if (opcion == 1) {
            console.log("Hola usuario, Bienvenido");
        } else if (opcion == 2) {
            console.log("Este menu fue programado en JavaScript");
        } else if (opcion == 3) {
            console.log("2 + 2 = 4");
        } else if (opcion == 4) {
            console.log("Saliendo del Sistema.....");
        } else {
            console.log("Opcion no Valida");
        }
    }
}

function cajeroAutomatico() {
    let saldo, opcion, valor;

    alert("Este algoritmo permite hacer un cajero automatico con un saldo inicial de $500.000");
    saldo = 500000;
    opcion = 0;

    while (opcion != 4) {
        console.log("CAJERO AUTOMATICO");
        console.log("1. Consultar Saldo");
        console.log("2. Retirar Dinero");
        console.log("3. Depositar Dinero");
        console.log("4. Salir del Sistema");
        opcion = parseInt(prompt("Ingrese el numero de la opcion que necesita"));
        if (opcion == 1) {
            console.log("Saldo disponible: "+ saldo);
        } else if (opcion == 2) {
            valor = parseFloat(prompt("Ingrese el valor a retirar"));
            if (valor <= saldo) {
                saldo = saldo - valor;
                alert("Retiro realizado");
            } else {
                alert("Saldo insuficiente");
            }
        } else if (opcion == 3) {
            valor = parseFloat(prompt("Ingrese el valor a depositar"));
            if (valor > 0) {
                saldo = saldo + valor;
                alert("Deposito realizado");
            }
        } else if (opcion == 4) {
            alert("Gracias por utilizar el cajero, buen dia.....");
        }
    }
}

function sistemaNotas() {
    let cant_estudiantes, aprobados, reprobados, nota, suma_notas, promedio, nota_mayor, nota_menor;

    alert("Este algoritmo permite hacer el sistema de notas de los estudiantes");
    aprobados = 0;
    reprobados = 0;
    suma_notas = 0;

    cant_estudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
    nota = parseFloat(prompt("Ingrese la nota del estudiante"));
    suma_notas = nota;
    nota_mayor = nota;
    nota_menor = nota;

    if (nota >= 3) {
        aprobados  = 1;
    } else {
        reprobados = 1;
    }
    for (let i = 2; i <= cant_estudiantes; i++) {
        nota = parseFloat(prompt("Ingrese la nota del estudiante"));
        suma_notas = suma_notas + nota;
        if (nota >= 3) {
            aprobados = aprobados + 1;
        } else {
            reprobados = reprobados + 1;
        }
        if (nota > nota_mayor) {
            nota_mayor = nota;
        }
        if (nota < nota_menor) {
            nota_menor = nota;
        }
    }
    promedio = suma_notas / cant_estudiantes;
    console.log("Cantidad de estudiantes: "+ cant_estudiantes + " Cantidad de aprobados: "+ aprobados + " Cantidad de reprobados: "+ reprobados + " Promedio del grupo: "+ promedio + " Nota mas alta: "+ nota_mayor + " Nota mas baja: "+ nota_menor);
}

function adivinarNumero() {
    let numero_secreto, inetnto, intentos;

    alert("Este algoritmo permite adivinar un numero secreto");
    numero_secreto = Math.floor(Math.random() * 101);
    intentos = 0;
    intento = parseInt(prompt("Intente adivinar cual es el numero secreto"));

    while (intento != numero_secreto) {
        if (intento < numero_secreto) {
            alert("El numero secreto es mayor");
        } else {
            alert("El numero secreto es menor");
        }
        intento = parseInt(prompt("Intentelo de nuevo"));
        intentos = intentos + 1;
    }
    alert("Uy no, casi que no lo adivina papacho, muy bien");
    console.log("Cantidad de intentos: "+ intentos);
}

function registroProductos() {
    let cant_productos, nombre, precio, cant_disponible, valor_inventario, precio_mayor, precio_menor;

    alert("Este algoritmo permite hacer el registro de x productos");
    cant_productos = parseInt(prompt("Ingrese la cantidad de productos que desea ingresar"));
    nombre = prompt("Ingrese el nombre del producto");
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    cant_disponible = parseInt(prompt("Ingrese la cantidad disponible del producto"));
    valor_inventario = precio * cant_disponible;
    precio_mayor = precio;
    precio_menor = precio;

    for (let i = 2; i <= cant_productos; i++) {
        nombre = prompt("Ingrese el nombre del producto");
        precio = parseFloat(prompt("Ingrese el precio del producto"));
        cant_disponible = parseInt(prompt("Ingrese la cantidad disponible del producto"));
        valor_inventario = valor_inventario + (precio * cant_disponible);
        if (precio > precio_mayor) {
            precio_mayor = precio;
        } else if (precio < precio_menor) {
            precio_menor = precio;
        }
    }
    console.log("Cantidad total de productos registrados: "+ cant_productos + " Valor total del inventario: "+ valor_inventario + " Precio mayor: "+ precio_mayor + " Precio menor: "+ precio_menor);
}

function acumuladorLimite() {
    let numeros, suma, promedio, cantidad;

    alert("Este algoritmo permite hacer un acumulador hasta que se alcance el valor 100 o se supere");
    suma = 0;
    cantidad = 0;

    while (suma < 100) {
        numeros = parseFloat(prompt("Ingrese un numero"));
        suma = suma + numeros;
        cantidad = cantidad + 1;
    }
    promedio = suma / cantidad;
    console.log("Cantidad de numeros ingresados: "+ cantidad + " Suma acumulada de: "+ suma + " Promedio de los numeros: "+ promedio);
}

function sistemaCompras() {
    let nombre, respuesta, precio, cantidad, valor_producto, subtotal, descuento, iva, total_pagar, cant_productos;

    alert("Este algoritmo permite hacer un sistema de compras");
    respuesta = "Si";
    subtotal = 0;
    cant_productos = 0;

    while (respuesta == "Si") {
        nombre = prompt("Ingrese el nombre del producto");
        precio = parseFloat(prompt("Ingrese el precio del producto"));
        cantidad = parseInt(prompt("Ingrese la cantidad"));
        valor_producto = precio * cantidad;
        subtotal = subtotal + valor_producto;
        cant_productos = cant_productos + 1;
        respuesta = prompt("¿Desea agregar otro producto? (Si/No)");
    }
    if (subtotal < 100000) {
        descuento = 0;
    } else if (subtotal < 300000) {
        descuento = subtotal * 0.05;
    } else if (subtotal < 500000) {
        descuento = subtotal * 0.10;
    } else {
        descuento = subtotal * 0.15;
    }
    subtotal = subtotal - descuento;
    iva = subtotal * 0.19;
    total_pagar = subtotal + iva;
    console.log("Cantidad de productos registrados: "+ cant_productos + " Subtotal de: "+ subtotal + " Descuento de: "+ descuento + " IVA de: "+ iva + " Total a pagar: "+ total_pagar);
}

//CONDICIONALES CON SWITCH CASE

function NumeroDeMes() {
    let mes_n;

    alert("Este algoritmo dice que mes es segun el numero que ingrese el usuario");
    mes_n = parseInt(prompt("Ingrese el numero de un mes"));

    switch (mes_n) {
        case 1:
            console.log("El mes es Enero");
            break;
    
        case 2:
            console.log("El mes es Febrero");
            break;

        case 3: 
        console.log("El mes es Marzo");
            break;
        
        case 4: 
            console.log("El mes es Abril");
            break;

        case 5:
            console.log("El mes es Mayo");
            break;

        case 6:
            console.log("El mes es Junio");
            break;

        case 7:
            console.log("El mes es Julio");
            break;

        case 8:
            console.log("El mes es Agosto");
            break;

        case 9:
            console.log("EL mes es Septiembre");
            break;

        case 10:
            console.log("El mes es Octubre");
            break;

        case 11:
            console.log("El mes es Noviembre");
            break;

        case 12:
            console.log("El mes es Diciembre");
            break;

        default: 
            console.log("El numero ingresado no equivale a ningun mes");
            break;
    }
}

// Algoritmos Array con For

function frutas() {
    let frutas = ["manzana", "pera", "uva", "mango"];

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
        
    }
}

function nombres() {
    let nombres = [];

    for (let i = 0; i < 3; i++) {
        let nombre = prompt("Ingresa un nombre:");
        nombres.push(nombre);
        
    }

    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
        
    }
}

function edades() {
    let edades = [];

    for (let i = 0; i < 4; i++) {
        let edad = parseInt(prompt("Ingrese una edad"));
        edades.push(edad);

    }

    for (let i = 0; i < edades.length; i++) {
        console.log(edades[i]);
    }
}