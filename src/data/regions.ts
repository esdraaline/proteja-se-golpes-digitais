export type Region = {
  id: string;
  name: string;
  short: string;
  x: number; // percent
  y: number; // percent
  level: "fácil" | "médio" | "extremo";
  icon: string; // emoji
  threat: string;
  signals: string[];
  defense: string[];
  quiz: { q: string; options: string[]; correct: number; explain: string };
};

export const regions: Region[] = [
  {
    id: "pix-fantasma",
    name: "Ilha do Pix Fantasma",
    short: "Pix urgente que não é seu",
    x: 18,
    y: 30,
    level: "fácil",
    icon: "💸",
    threat:
      "Mensagem se passando por banco ou conhecido pedindo Pix urgente para uma 'chave nova'.",
    signals: [
      "Urgência exagerada ('é agora ou perde')",
      "Chave Pix diferente da habitual",
      "Áudio curto imitando voz de familiar",
    ],
    defense: [
      "Desligue e ligue de volta no número antigo",
      "Confirme a chave em outro canal",
      "Nunca pague sob pressão emocional",
    ],
    quiz: {
      q: "Seu 'filho' manda áudio pedindo Pix urgente para outra chave. O que fazer?",
      options: [
        "Pagar rápido para ajudar",
        "Ligar no número conhecido dele",
        "Responder pedindo selfie",
      ],
      correct: 1,
      explain: "Voz clonada por IA já é trivial. Sempre valide por um canal antigo e confiável.",
    },
  },
  {
    id: "deepfake-bay",
    name: "Baía do Deepfake",
    short: "Vídeos de autoridades pedindo dinheiro",
    x: 42,
    y: 18,
    level: "extremo",
    icon: "🎭",
    threat: "Vídeos hiper-realistas de CEOs, políticos ou parentes orientando transferências.",
    signals: [
      "Boca dessincronizada em frames lentos",
      "Iluminação 'plana' demais no rosto",
      "Pedido envolve dinheiro ou senha",
    ],
    defense: [
      "Peça um gesto específico ao vivo",
      "Confirme em chamada por outro app",
      "Empresas: exija dupla aprovação",
    ],
    quiz: {
      q: "Qual é o sinal MAIS confiável de deepfake hoje?",
      options: ["Voz robótica", "Pedido financeiro fora do padrão", "Vídeo curto"],
      correct: 1,
      explain:
        "A qualidade técnica já engana. O comportamento — pedir dinheiro fora do fluxo — continua sendo a bandeira vermelha.",
    },
  },
  {
    id: "porto-phishing",
    name: "Porto do Phishing",
    short: "Links que parecem oficiais",
    x: 72,
    y: 28,
    level: "fácil",
    icon: "🎣",
    threat:
      "SMS, e-mails e DMs com links para 'atualizar dados', 'liberar restituição' ou 'pacote parado'.",
    signals: [
      "Domínio com letras trocadas (rn em vez de m)",
      "Subdomínio longo antes do .com.br",
      "Botão único e enorme: 'CLIQUE AGORA'",
    ],
    defense: [
      "Nunca clique — digite o site na mão",
      "Cheque o domínio inteiro até o final",
      "Ative 2FA em tudo que dá",
    ],
    quiz: {
      q: "Qual destes domínios é provavelmente falso?",
      options: ["caixa.gov.br", "caixa-gov.com.br", "gov.br/caixa"],
      correct: 1,
      explain:
        "Domínio do governo termina em .gov.br. 'caixa-gov.com.br' é registro privado disfarçado.",
    },
  },
  {
    id: "templo-romance",
    name: "Templo do Romance",
    short: "Amor que pede investimento",
    x: 22,
    y: 62,
    level: "médio",
    icon: "💘",
    threat:
      "Perfis perfeitos que conquistam em semanas e apresentam 'oportunidade única' de investimento.",
    signals: [
      "Nunca aceita videochamada longa",
      "História cheia de tragédias",
      "Apresenta plataforma de cripto/forex",
    ],
    defense: [
      "Reverse image search na foto",
      "Não misture afeto com dinheiro",
      "Conte para alguém de fora",
    ],
    quiz: {
      q: "Após 3 semanas, ela te chama para investir numa plataforma 'da família dela'. Sinal?",
      options: ["Sorte sua", "Pig butchering clássico", "Normal hoje em dia"],
      correct: 1,
      explain:
        "É o golpe 'pig butchering': constrói vínculo, depois oferece investimento controlado por eles.",
    },
  },
  {
    id: "vale-ia",
    name: "Vale da IA Maliciosa",
    short: "Bots que ligam, vendem e chantageiam",
    x: 52,
    y: 55,
    level: "extremo",
    icon: "🤖",
    threat:
      "Agentes de IA fazem ligações personalizadas, geram nudes falsos para sextorsão e roteirizam golpes em massa.",
    signals: [
      "Voz natural mas sem hesitação humana",
      "Conhece dados públicos seus",
      "Pressiona com prazo curto",
    ],
    defense: [
      "Crie uma 'palavra-cofre' com a família",
      "Reduza pegada pública nas redes",
      "Bloqueie e denuncie no 181/MPF",
    ],
    quiz: {
      q: "Melhor defesa contra clonagem de voz por IA?",
      options: ["Não atender desconhecidos", "Palavra-cofre familiar", "Trocar de número"],
      correct: 1,
      explain: "Uma palavra combinada entre família neutraliza voz clonada em segundos.",
    },
  },
  {
    id: "mercado-falso",
    name: "Mercado das Lojas Fantasmas",
    short: "E-commerce que some no pagamento",
    x: 78,
    y: 60,
    level: "fácil",
    icon: "🛒",
    threat:
      "Lojas patrocinadas em redes com preços absurdos, frete instantâneo e Pix como única opção.",
    signals: [
      "Só aceita Pix ou boleto",
      "Sem CNPJ visível no rodapé",
      "Avaliações genéricas e novas",
    ],
    defense: [
      "Procure CNPJ na Receita",
      "Pague no cartão (chargeback)",
      "Desconfie de desconto > 50%",
    ],
    quiz: {
      q: "iPhone novo por 30% do preço, só Pix. O que é?",
      options: ["Promoção", "Golpe", "Item recondicionado"],
      correct: 1,
      explain: "Margem impossível + Pix only = golpe. Cartão te dá direito de estorno; Pix não.",
    },
  },
  {
    id: "cofre-2fa",
    name: "Cofre do 2FA",
    short: "Sua fortaleza pessoal",
    x: 50,
    y: 85,
    level: "médio",
    icon: "🛡️",
    threat: "Senha vazada é questão de tempo. Sem segundo fator, sua conta é deles.",
    signals: [
      "Login em local estranho",
      "E-mail de 'tentativa de acesso'",
      "Apps deslogados de repente",
    ],
    defense: [
      "Use app autenticador, não SMS",
      "Senhas únicas por gerenciador",
      "Chave física (FIDO2) para o crítico",
    ],
    quiz: {
      q: "Qual 2FA é o mais fraco?",
      options: ["App autenticador", "SMS", "Chave física"],
      correct: 1,
      explain: "SMS é vulnerável a SIM swap. Prefira app ou chave física para contas sensíveis.",
    },
  },
];
