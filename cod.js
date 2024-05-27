var imagem = window.document.getElementById('res_imagem')
imagem.style.display = 'none'
var res = window.document.getElementById('texto_res')
var estado = window.document.getElementById('estado_res')

function calcular() {

    /*Pega as variáveis*/
    let peso = Number(window.document.getElementById('peso').value)
    let altura = Number(window.document.getElementById('altura').value)
    /*Conta*/
    let imc = peso / altura ** 2

    /*Tratamento de erro*/
    if (peso === 0 || altura === 0 || imc <= 0 || imc > 70 || isNaN(peso) || isNaN(altura) || altura > 2.20) {
        res.innerHTML = 'Preencha os campos corretamente!</br><span style="font-size:10pt; text-decoration:underline; "><strong>Use pontos</strong>, e não virgulas</span>'

        res.style.color = 'red'
        imagem.style.display = 'none'
        imagem.style.borderRadius = 'none'
        imagem.style.boxShadow = 'none'  
        /*estado*/
        estado.style.background = 'none'
        estado.style.padding = 'none'
        estado.style.width = 'none'
        estado.style.border = 'none'
        estado.style.borderRadius = 'none'
        estado.style.display = 'none'

    } else {
        res.innerHTML = `Seu IMC = ${imc.toFixed(2)}`

        /*imagem*/
        imagem.style.display = 'inline-block'
        imagem.style.borderRadius = '25px'
        imagem.style.boxShadow = '3px 4px 4px rgb(141, 146, 150)'
        
        /*estado*/
        estado.style.background = 'rgb(217, 225, 233)'
        estado.style.padding = '10px'
        estado.style.width = '160px'
        estado.style.border = 'outset 5px'
        estado.style.borderRadius = '50%'
        estado.style.display = 'inline-block'

        res.style.color = 'black'

        /*condições*/
        if (imc > 0 && imc <= 18.4) {
            estado.innerHTML = '<strong>Abaixo do peso!</strong></br> Cuidado!'
            estado.style.color = '#4593d3'
        } else if (imc >= 18.5 && imc < 24.8) {
            estado.innerHTML = '<strong>Peso ideal!</strong></br> Perfeito!'
            estado.style.color = '#4db17b'
        } else if (imc >= 24.9 && imc < 29.9) {
            estado.innerHTML = '<strong>Acima do peso!</strong></br> Cuidado'
            estado.style.color = '#98c723'
        } else if (imc >= 30 && imc <= 70) {
            estado.innerHTML = '<strong>Obesidade</strong></br> cuidado!'
            estado.style.color = '#feb800'
        } 
    }
}

function limpar() {
    window.document.getElementById('peso').value = ''
    window.document.getElementById('altura').value = ''
}