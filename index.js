const perguntas = [
    {
      pergunta: "Qual é o nome completo de Harry Potter?",
      respostas: [
        "Harry James Potter",
        "Harry John Potter",
        "Harry William Potter",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do melhor amigo de Harry Potter?",
      respostas: [
        "Ron Weasley",
        "Draco Malfoy",
        "Hermione Granger",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o animal de estimação de Hermione Granger?",
      respostas: [
        "Gato",
        "Sapo",
        "Coruja",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do banco dos bruxos?",
      respostas: [
        "Gringotts",
        "Diagon Alley",
        "Hogsmeade",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a casa de Harry Potter em Hogwarts?",
      respostas: [
        "Grifinória",
        "Sonserina",
        "Corvinal",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts no primeiro livro/filme?",
      respostas: [
        "Alvo Dumbledore",
        "Severo Snape",
        "Rúbeo Hagrid",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o meio-irmão de Harry Potter?",
      respostas: [
        "Dudley Dursley",
        "Percy Weasley",
        "Neville Longbottom",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o feitiço usado para desarmar um oponente?",
      respostas: [
        "Expelliarmus",
        "Avada Kedavra",
        "Wingardium Leviosa",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do objeto mágico que permite a invisibilidade?",
      respostas: [
        "Cape de Invisibilidade",
        "Varinha das Varinhas",
        "Pedra da Ressurreição",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do professor de Poções em Hogwarts?",
      respostas: [
        "Severo Snape",
        "Remo Lupin",
        "Horácio Slughorn",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas)
  {
    // Clona tudo da tag template
    const quizItem = template.content.cloneNode(true)
    // Foca no h3 para colocar a pergunta.
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) 
    {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + (perguntas.indexOf(item)+1))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }