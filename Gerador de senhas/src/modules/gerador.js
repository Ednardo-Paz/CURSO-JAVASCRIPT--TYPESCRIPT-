import geraSenha from './formGeraSenha.js'

const senhaGerada = document.querySelector('.senha-gerada') 
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const checkMaiuscula = document.querySelector('.chk-maiusculas')
const checkMinuscula = document.querySelector('.chk-maiusculas')
const checknumeros = document.querySelector('.chk-numeros')
const checksimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')


export default () => {
  gerarSenha.addEventListener(`click`, () => {
      console.log(checkMaiuscula.checked)
      senhaGerada.innerHTML = gera();
  })
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        checkMaiuscula.checked,
        checkMinuscula.checked,
        checknumeros.checked,
        checksimbolos.checked
    ) ;
    return senha || `Nada selecionado.`
}