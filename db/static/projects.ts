const projects: Project[] = [
  {
    title: {
      en: "Online Raffle System",
      br: "Projeto de Sorteio Online",
    },
    endpoint: "Draw",
    images: [
      {
        src: "/pics/projects/sorteio-app/1.png",
        alt: "Draw",
      },
      {
        src: "/pics/projects/sorteio-app/2.png",
        alt: "Draw",
      },
      {
        src: "/pics/projects/sorteio-app/3.png",
        alt: "Draw",
      },
      {
        src: "/pics/projects/sorteio-app/4.png",
        alt: "Draw",
      },    
    ],
    description: {
      en: "I developed an online raffle system used during a live event to select participants. The process began with the user entering a keyword, which directed them to a screen where they could input their name and phone number. In the admin panel, the administrator could view the number of participants and conduct the raffle. This system ensured an interactive and organized experience for conducting raffles during live events.",
      br: "Desenvolvi um sistema de sorteio online que foi utilizado em uma live para sortear participantes. O processo começou quando o usuário digitava uma palavra-chave, o que o direcionava para uma tela onde ele podia inserir seu nome e número de celular. No painel administrativo, o administrador tinha acesso para visualizar a quantidade de participantes e realizar o sorteio. Esse sistema garantiu uma experiência interativa e organizada para a realização de sorteios em eventos ao vivo.",
    },
    repoLink: "https://www.google.com/",
    demoLink: "https://sorteio-alemdafarmacologia.vercel.app/",

    status: "completed",
    techStack: [
      { name: "React", url: "https://github.com/facebook/react" },
      { name: "Next.js", url: "https://nextjs.org/" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Supabase",
        url: "https://supabase.com/",
      },

    ],
  },
  {
    title: {
      en: "Pharmaceutical Prescription Questionnaire System",
      br: "Sistema de Questionário para Prescrição Farmacêutica",
    },
    endpoint: "prescicao",
    images: [
      {
        src: "/pics/projects/in-progress.jpg",
        alt: "prescicao",
      },

    ],
    description: {
      en: "I am developing a questionnaire system for the pharmaceutical prescription of hormonal medications. The system is designed to collect detailed patient information through specific questions, allowing for the filtering and recommendation of the most suitable medication based on the provided responses. This project aims to enhance the accuracy and personalization of prescriptions, ensuring that patients receive the most appropriate treatment for their hormonal needs.",
      br: "Estou desenvolvendo um sistema de questionário para prescrição farmacêutica de medicamentos hormonais. O sistema é projetado para coletar informações detalhadas dos pacientes através de perguntas específicas, permitindo a filtragem e recomendação do melhor medicamento com base nas respostas fornecidas. Este projeto visa aprimorar a precisão e a personalização das prescrições, garantindo que os pacientes recebam o tratamento mais adequado para suas necessidades hormonais.",
    },
    repoLink: "https://www.google.com/",
    demoLink: "https://www.google.com/",
    status: "in-progress",
    techStack: [
      { name: "React", url: "https://github.com/facebook/react" },
      { name: "Next.js", url: "https://nextjs.org/" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
      },
    ],
  },
  {
    title: {
      en: "Voice Identifier with Numerical Challenge System",
      br: "Sistema de Identificador de Voz com Desafio Numérico",
    },
    endpoint: "numero-secreto-app",
    images: [
      {
        src: "/pics/projects/numero-secreto-app/1.png",
        alt: "Meme Generator Preview",
      },
    
    ],
    description: {
      en: "I developed a voice identification system that utilizes speech recognition technology to generate a random number. The system then provides vocal feedback on whether the generated number is higher or lower, based on the user's spoken responses. This project combines voice recognition with random number generation to create an interactive and engaging experience, challenging users to adjust their answers according to the feedback received.",
      br: "Desenvolvi um sistema de identificação de voz que utiliza tecnologia de reconhecimento para gerar um número aleatório. O sistema então fornece feedback vocal sobre se o número gerado é maior ou menor, com base nas respostas faladas pelo usuário. Esse projeto combina reconhecimento de voz e geração de números aleatórios para criar uma experiência interativa e envolvente, desafiando os usuários a ajustar suas respostas conforme o feedback recebido.",
    },
    repoLink: "https://github.com/fernandofurbringer/jogo-numero-secreto",
    demoLink: "https://jogo-numero-secreto-three-lovat.vercel.app/",
    status: "completed",
    techStack: [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  
];

export default projects;
