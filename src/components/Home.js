import React, {useState} from 'react'

export default function Home() {
  const [resultado, setResultado] = useState('');
  const [resultadoTimeout, setResultadoTimeout] = useState(null);

  //calculo peso e altura
  function calcular(e){
    e.preventDefault();

    const peso = parseFloat(e.target.peso.value);
    const altura = parseFloat(e.target.altura.value);

    console.log('valor do peso:', peso);
    console.log('Valor da altura:', altura);

    const imc = peso / (altura * altura);

    //descrição do resultado
    let descricao = '';
    let pesoIdeal = 0;

    if (imc < 17){
      descricao = `Cuidado você está muito abaixo do peso!`;
      pesoIdeal = 18.5 * (altura * altura);
    }
    else if (imc > 17 && imc <= 18.49){
      descricao = `Cuidado você está abaixo do peso!`;
      pesoIdeal = 18.5 * (altura * altura);
    }
    else if (imc >= 18.5 && imc < 24.99){
      descricao = `Você está no peso ideal!`;
    }
    else if (imc > 25 && imc <= 29.99){
      descricao = `Cuidado você está acima do peso!`;
      pesoIdeal = 24.99 * (altura * altura);
    }
    else if (imc > 30){
      descricao = `Cuidado você está muito acima do peso!`;
      pesoIdeal = 24.99 * (altura * altura);
    }
    

    setResultado(`${descricao} Peso Ideal: ${pesoIdeal.toFixed(2)} kg`);

    //cancelar o temporizador existente(se houver)
    if (resultadoTimeout) {
      clearTimeout(resultadoTimeout);
    }

    //definir um novo temporizador para limpar o resultado
    const newResultadoTimeout = setTimeout(() => {
      setResultado('');
    }, 3000);

    //armazenar a referencia ao temporizador
    setResultadoTimeout(newResultadoTimeout);

    //limpar os campos
    e.target.reset();
  }

  return (
    <section id='home' className='bg-accent flex items-center justify-center w-full min-h-screen'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center bg-white rounded-2xl p-8 md:p-16 mt-20 md:mt-32'>

          {/* title */}
          <div className='flex flex-col items-center text-center mb-5 pt-8 md:pt-4'>
            <h2 className='font-primary text-highlight text-[30px] md:text-[50px] font-bold'>
               Bem-estar e Saúde
            </h2>
            <h4 className='font-secondary text-highlight italic text-xl md:text-2xl mt-1 md:text-4'>
              Você mais saudável e feliz!
            </h4> 
          </div>

          {/* text & form */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          
          {/* text */}
          <div className=''>
            <p className='text-center md:text-justify max-w-[500px] font-secondary text-lg'>
              <span className='h2 text-xl  text-highlight'>Bem-vindo ao nosso site dedicado ao bem-estar e saúde!</span>  <br>
              </br>Explore recursos, informações e ferramentas para alcançar uma vida mais saudável e equilibrada. 
              Encontre artigos sobre nutrição, exercícios e dicas de estilo de vida. 
              Use nossas calculadoras, como a Calculadora de IMC, para insights valiosos 
              sobre sua saúde. Junte-se a nós nessa jornada para um você mais saudável e feliz.
            </p>
          </div>
          
          {/* form IMC */}
          <div className='text-center bg-secondary rounded-2xl m-4 p-4 md:p-8'>
            <form onSubmit={calcular}>

              {/* title */}
              <div>
                <h2 className='font-primary text-highlight text-[28px] md:text-[40px] font-bold mb-2 md:mb-4'>
                  Calculadora IMC
                </h2>
              </div>

              {/* peso */}
              <div className='font-secondary text-xl mt-5'>
                Digite seu peso:
              </div>
              <input 
                type="text" 
                name="peso" 
                id="peso" 
                placeholder="Exemplo 65" 
                className='mb-2 md:mb-4 p-2 rounded-md text-sm md:text-xl' 
              />
              
              {/* altura */} 
              <div className='font-secondary text-xl'>
                Digite sua altura:
              </div>
              <input 
                type="text" 
                name="altura" 
                id="altura" 
                placeholder="Exemplo 1.65"
                className='mb-4 md:mb-4 p-2 rounded-md text-sm md:text-xl' 
              /> 

              {/* button */}
              <button className='btn btn-sm md:btn-lg font-primary text-white md:w-auto' type="submit">
                Calcular IMC
              </button>

              {/* resultado */}
              <div className='mt-4 md:mt-6'>
                <p className='font-secondary text-lg md:text-xl'>
                  Resultado: 
                  <br></br>{resultado}
                </p>
              </div>
          </form>
          </div>  
          </div>         
        </div>         
      </div>
    </section>
  );
}
