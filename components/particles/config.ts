import { ISourceOptions } from "tsparticles-engine";

const particlesConfig: ISourceOptions = {
  detectRetina: true,
  fpsLimit: 120, // Ajustado para um limite um pouco mais baixo que o original, para balancear desempenho e qualidade.
  fullScreen: {
    enable: true,
  },
  particles: {
    number: {
      value: 50, // Aumentado o número de partículas para uma tela mais cheia.
      limit: 100, // Aumentado o limite máximo de partículas.
      density: {
        enable: true,
        width: 1000, // Ampliado a densidade para melhor cobertura.
        height: 1000,
      },
    },
    color: {
      value: ["#c912ed", "#00bfff", "#22dd22", "#ffd500", "#ff8000", "#ff2600"], // Adicionados os símbolos de cor hex.
    },
    shape: {
      type: "circle", // Mantido o tipo como círculo para simplicidade.
      stroke: {
        width: 1, // Adicionado um traço sutil para uma melhor definição.
        color: "#000", // Adicionado o símbolo de cor hex.
      },
      polygon: {
        sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 50, // Reduzido o tamanho da imagem para um visual mais discreto.
        height: 50,
      },
    },
    opacity: {
      value: 0.8, // Levemente reduzido para melhorar a visibilidade em diferentes fundos.
      random: false,
      anim: {
        enable: true, // Habilitado a animação para uma experiência mais dinâmica.
        speed: 1.5,
        minimumValue: 0.4,
        sync: false,
      },
    },
    size: {
      value: 5, // Aumentado o tamanho médio das partículas para mais impacto visual.
      random: {
        enable: true,
        minimumValue: 2,
      },
      anim: {
        enable: true, // Habilitado a animação de tamanho para mais dinamismo.
        speed: 30,
        minimumValue: 1,
        sync: true,
      },
    },
    links: {
      enable: true,
      distance: 100, // Aumentado a distância para uma rede mais interconectada.
      color: "#999", // Adicionado o símbolo de cor hex.
      opacity: 0.6,
      width: 1.5, // Aumentado a largura das linhas de conexão para maior visibilidade.
      consent: false,
      blink: false,
    },
    move: {
      enable: true,
      speed: 3, // Aumentado a velocidade para um movimento mais dinâmico.
      direction: "none",
      random: false,
      straight: false,
      outMode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas", // Mudado para 'canvas' para melhor compatibilidade com diferentes navegadores.
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 150, // Aumentado a distância para um efeito mais notável.
        duration: 1.5,
        speed: 6,
      },
      bubble: {
        distance: 300, // Ajustado a distância para uma bolha mais visível.
        size: 50,
        duration: 2.5,
        opacity: 0.8,
      },
      grab: {
        distance: 300,
        links: {
          opacity: 0.7,
        },
      },
      push: {
        quantity: 4, // Aumentado a quantidade de partículas adicionadas.
      },
      remove: {
        quantity: 3, // Aumentado a quantidade de partículas removidas.
      },
      repulse: {
        distance: 120, // Aumentado a distância para um efeito mais amplo.
        duration: 1.2,
      },
    },
  },
  key: "3m@62^K^88745%", // Verifique se a chave é necessária para o seu uso.
};

export default particlesConfig;
