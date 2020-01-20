var ventas = [{
    "code": "234",
    "valor": 1000000
  }, {
    "code": "123",
    "valor": 5000000
  }, {
    "code": "898",
    "valor": 2500000
  }, {
    "code": "981",
    "valor": 1500000
  }, {
    "code": "884",
    "valor": 10000000
  }, {
    "code": "777",
    "valor": 21000000
  }, {
    "code": "893",
    "valor": 49000000
  }, {
    "code": "001",
    "valor": 100000000
  }, {
    "code": "531",
    "valor": 70000000
  }, {
    "code": "009",
    "valor": 210000000
  }]

  const leerJSON = ventas => {     
    // usando TemplateString
    const ans =  `---VENTAS---<br>                      
                  <ul>
                      ${ventas.map(venta => `<li>codigo: ${venta.code}  -   valor: ${venta.valor} </li>`).join('')}
                  </ul>`

    // a la antigua
    // let ans = "---VENTAS---<br>"
    // for (const i in ventas) {
    //     ans += 'codigo: ' + ventas[i].code + '- valor: ' + ventas[i].valor + '<br>'
    // }

      document.getElementById('ventas').innerHTML = ans
  }

  const mostrarVentas = () => leerJSON(ventas)

  const reducer = (acum, {valor}) => acum + valor

  const calcularTotal = ventas => {
    let total = ventas.reduce(reducer, 0)

    document.getElementById('total').innerHTML = total
  }

  const mostrarTotal = () => calcularTotal(ventas)