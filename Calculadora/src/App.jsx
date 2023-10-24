import { useState } from 'react'
import * as S from "./Style";


function App() {
  const [numero, setNumero] = useState(0);
  const [numeroAnterior, setNumeroAnterior] = useState(0);
  const [operacao, setOperacao] = useState();
  
  function inserirNumero(e){
    const inserir = e.target.value
    if (numero === 0){
      setNumero(inserir)
    }else{
      setNumero(numero + inserir)
  }
}
function limpar(){
  setNumero(0)
}

function realizandoOperacao(e){
  const operador = e.target.value
  setOperacao(operador);
  setNumeroAnterior(numero);
  setNumero(0);
}

function resultado(){
  if(operacao === "+"){
    setNumero(Number(numeroAnterior) + Number(numero))
  } else if(operacao === "-") {
    setNumero(numeroAnterior - numero)
  } else if(operacao === "/") {
    setNumero(numeroAnterior / numero)
  } else if(operacao === "x" ){
    setNumero(numeroAnterior * numero)
  }

}


  return (
    <S.Main>
      <S.H1>{numero}</S.H1>
      <S.Div>
      <div>
        {/* usei a propriedade "value", para determinar que o valor que eu eu quero é aquele no caso dos números e operações */}
        <S.Button onClick={realizandoOperacao} value={"+"} >+</S.Button>
        <S.Button onClick={realizandoOperacao} value={"-"} >-</S.Button>
        <S.Button onClick={realizandoOperacao} value={"/"} >/</S.Button>
        <S.Button onClick={realizandoOperacao} value={"x"}>x</S.Button>
        </div>
        <div>
        <S.Button onClick={limpar}>C</S.Button>
        <S.Button onClick={inserirNumero} value={1}>1</S.Button>
        <S.Button onClick={inserirNumero} value={2}>2</S.Button>
        <S.Button onClick={inserirNumero} value={3}>3</S.Button>
        </div>
        <div>
        <S.Button onClick={inserirNumero} value={4}>4</S.Button>
        <S.Button onClick={inserirNumero} value={5}>5</S.Button>
        <S.Button onClick={inserirNumero} value={6} >6</S.Button>
        <S.Button onClick={inserirNumero} value={7} >7</S.Button>
        </div>
        <div>
        <S.Button onClick={inserirNumero} value={8} >8</S.Button>
        <S.Button onClick={inserirNumero} value={9} >9</S.Button>
        <S.Button onClick={inserirNumero} value={0}>0</S.Button>
        <S.Button onClick={resultado}>=</S.Button>
        </div>
      </S.Div>
    </S.Main>
  )
}

export default App
