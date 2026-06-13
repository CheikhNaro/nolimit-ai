// Curated AI directory — data sourced & organized from fmhy.net/ai
// Each category carries its own signature accent for the maximalist colorway.

export const categories = [
  {
    id: "chatbots",
    label: "Chatbots",
    tagline: "Assistants conversationnels",
    blurb: "Les grands modèles, prêts à discuter, coder et réfléchir avec toi.",
    accent: "#b6f24a",
    glyph: "✺",
  },
  {
    id: "specialized",
    label: "Recherche & Savoir",
    tagline: "Chercher, comprendre, apprendre",
    blurb: "Moteurs de recherche IA, lecture de documents et assistants d'étude.",
    accent: "#22e0d6",
    glyph: "❖",
  },
  {
    id: "image",
    label: "Images",
    tagline: "Génération & édition d'images",
    blurb: "Du prompt au visuel : créer, éditer et réinventer en pixels.",
    accent: "#ff2e93",
    glyph: "✦",
  },
  {
    id: "video",
    label: "Vidéo",
    tagline: "Texte → mouvement",
    blurb: "Anime tes idées : génération de plans, clips et boucles.",
    accent: "#ff6a3d",
    glyph: "▶",
  },
  {
    id: "audio",
    label: "Musique & Audio",
    tagline: "Composer sans instrument",
    blurb: "Musique, ambiances et samples générés à la demande.",
    accent: "#9d6bff",
    glyph: "♫",
  },
  {
    id: "tts",
    label: "Voix",
    tagline: "Synthèse & clonage vocal",
    blurb: "Donne une voix à tes textes, ou clone la tienne.",
    accent: "#ffcf33",
    glyph: "◉",
  },
  {
    id: "agents",
    label: "Agents",
    tagline: "IA autonomes",
    blurb: "Des assistants qui agissent, naviguent et exécutent pour toi.",
    accent: "#4d8bff",
    glyph: "◆",
  },
  {
    id: "roleplay",
    label: "Roleplay",
    tagline: "Personnages & narration",
    blurb: "Crée des personnages, joue des histoires interactives.",
    accent: "#ff4d6d",
    glyph: "☾",
  },
  {
    id: "local",
    label: "IA Locale",
    tagline: "Hors-ligne, chez toi",
    blurb: "Fais tourner les modèles sur ta propre machine, en privé.",
    accent: "#5be584",
    glyph: "▣",
  },
  {
    id: "tools",
    label: "Outils",
    tagline: "Utilitaires & comparateurs",
    blurb: "Comparer les prix, augmenter les chatbots, explorer l'écosystème.",
    accent: "#c9a0ff",
    glyph: "✜",
  },
];

export const ais = [
  // ---------- Chatbots ----------
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", category: "chatbots", desc: "L'assistant d'OpenAI : conversation, raisonnement, images et code.", tags: ["texte", "code", "image"], free: true, hot: true },
  { id: "claude", name: "Claude", url: "https://claude.ai/", category: "chatbots", desc: "L'IA d'Anthropic, excellente en écriture longue, analyse et code.", tags: ["texte", "code", "analyse"], free: true, hot: true },
  { id: "gemini", name: "Gemini", url: "https://gemini.google.com/", category: "chatbots", desc: "Le modèle multimodal de Google, intégré à tout l'écosystème.", tags: ["texte", "image", "multimodal"], free: true },
  { id: "grok", name: "Grok", url: "https://grok.com/", category: "chatbots", desc: "L'assistant de xAI avec accès temps réel à X.", tags: ["texte", "temps-réel"], free: true },
  { id: "deepseek", name: "DeepSeek", url: "https://chat.deepseek.com/", category: "chatbots", desc: "Modèle de raisonnement open puissant et gratuit.", tags: ["texte", "raisonnement"], free: true },
  { id: "qwen", name: "Qwen", url: "https://chat.qwen.ai/", category: "chatbots", desc: "La famille de modèles d'Alibaba, multilingue et multimodale.", tags: ["texte", "image", "multimodal"], free: true },
  { id: "mistral", name: "Mistral", url: "https://chat.mistral.ai", category: "chatbots", desc: "Le chat français Le Chat, rapide et efficace.", tags: ["texte", "code"], free: true },
  { id: "copilot", name: "Microsoft Copilot", url: "https://copilot.microsoft.com", category: "chatbots", desc: "L'assistant de Microsoft basé sur GPT, intégré à Windows.", tags: ["texte", "image"], free: true },
  { id: "metaai", name: "Meta AI", url: "https://www.meta.ai/", category: "chatbots", desc: "L'assistant Llama de Meta, génération d'images incluse.", tags: ["texte", "image"], free: true },
  { id: "kimi", name: "Kimi", url: "https://www.kimi.com/", category: "chatbots", desc: "Chatbot à très grand contexte, idéal documents longs.", tags: ["texte", "long-contexte"], free: true },
  { id: "groq", name: "Groq", url: "https://console.groq.com/playground", category: "chatbots", desc: "Inférence ultra-rapide sur plusieurs modèles open.", tags: ["texte", "rapide"], free: true },
  { id: "aistudio", name: "Google AI Studio", url: "https://aistudio.google.com/", category: "chatbots", desc: "Terrain de jeu Gemini avec réglages avancés et API.", tags: ["texte", "dev", "api"], free: true },

  // ---------- Specialized / Research ----------
  { id: "perplexity", name: "Perplexity", url: "https://www.perplexity.ai/", category: "specialized", desc: "Moteur de réponse avec sources citées en temps réel.", tags: ["recherche", "sources"], free: true, hot: true },
  { id: "notebooklm", name: "NotebookLM", url: "https://notebooklm.google.com/", category: "specialized", desc: "Ton notebook IA : interroge tes propres documents et sources.", tags: ["documents", "étude"], free: true, hot: true },
  { id: "exa", name: "Exa", url: "https://exa.ai/search", category: "specialized", desc: "Recherche sémantique pensée pour les IA et la veille.", tags: ["recherche", "sémantique"], free: true },
  { id: "scispace", name: "SciSpace", url: "https://scispace.com/", category: "specialized", desc: "Lis et comprends des articles scientifiques avec une IA.", tags: ["science", "papers"], free: true },
  { id: "elicit", name: "Elicit", url: "https://elicit.com/", category: "specialized", desc: "Assistant de recherche académique et revue de littérature.", tags: ["science", "recherche"], free: true },
  { id: "iask", name: "iAsk AI", url: "https://iask.ai/", category: "specialized", desc: "Moteur de réponse direct et factuel.", tags: ["recherche", "réponses"], free: true },
  { id: "learnabout", name: "Learn About", url: "https://learning.google.com/experiments/learn-about", category: "specialized", desc: "Expérience Google pour apprendre n'importe quel sujet pas à pas.", tags: ["apprentissage"], free: true },
  { id: "docsgpt", name: "DocsGPT", url: "https://www.docsgpt.cloud/", category: "specialized", desc: "Pose des questions à ta documentation technique.", tags: ["documents", "dev"], free: true },
  { id: "rytr", name: "Rytr", url: "https://rytr.me/", category: "specialized", desc: "Assistant de rédaction pour contenus marketing et emails.", tags: ["écriture", "marketing"], free: true },
  { id: "alphaxiv", name: "alphaXiv", url: "https://www.alphaxiv.org/", category: "specialized", desc: "Discute et annote les preprints arXiv en communauté.", tags: ["science", "papers"], free: true },

  // ---------- Image ----------
  { id: "recraft", name: "Recraft", url: "https://www.recraft.ai/", category: "image", desc: "Génération d'images vectorielles et brand kits cohérents.", tags: ["image", "vectoriel", "design"], free: true, hot: true },
  { id: "bingcreate", name: "Bing Image Creator", url: "https://www.bing.com/images/create", category: "image", desc: "Génération gratuite propulsée par DALL·E.", tags: ["image"], free: true },
  { id: "reve", name: "Reve Image", url: "https://app.reve.com", category: "image", desc: "Génération haute fidélité avec un excellent rendu du texte.", tags: ["image", "qualité"], free: true, hot: true },
  { id: "mage", name: "Mage.space", url: "https://www.mage.space/", category: "image", desc: "Stable Diffusion gratuit et sans filtre dans le navigateur.", tags: ["image", "stable-diffusion"], free: true },
  { id: "perchance-img", name: "Perchance", url: "https://perchance.org/ai-photo-generator", category: "image", desc: "Générateur d'images illimité et sans inscription.", tags: ["image", "illimité"], free: true },
  { id: "dreamina", name: "Dreamina", url: "https://dreamina.capcut.com/ai-tool/home?type=image", category: "image", desc: "Suite créative image de CapCut, très généreuse.", tags: ["image", "édition"], free: true },
  { id: "qwen-img", name: "Qwen Image", url: "https://chat.qwen.ai/", category: "image", desc: "Génération et édition d'images via le chat Qwen.", tags: ["image", "édition"], free: true },
  { id: "ideogram-vheer", name: "Vheer", url: "https://vheer.com/", category: "image", desc: "Outils image-to-image et effets gratuits.", tags: ["image", "édition"], free: true },
  { id: "civitai", name: "Civitai", url: "https://civitai.com/", category: "image", desc: "La plus grande bibliothèque de modèles et LoRA Stable Diffusion.", tags: ["modèles", "communauté"], free: true },
  { id: "iopaint", name: "IOPaint", url: "https://www.iopaint.com/", category: "image", desc: "Inpainting et retouche par IA, gratuit et open source.", tags: ["édition", "inpainting"], free: true },
  { id: "recraft-aigallery", name: "AI Gallery", url: "https://aigallery.app/", category: "image", desc: "Explore et génère des images dans une galerie communautaire.", tags: ["image", "galerie"], free: true },

  // ---------- Video ----------
  { id: "googleflow", name: "Google Flow", url: "https://labs.google/fx/tools/flow", category: "video", desc: "Studio de génération vidéo de Google (Veo).", tags: ["vidéo", "veo"], free: true, hot: true },
  { id: "wan", name: "Wan AI", url: "https://create.wan.video/", category: "video", desc: "Génération vidéo open d'Alibaba, qualité impressionnante.", tags: ["vidéo", "open"], free: true, hot: true },
  { id: "pixverse", name: "PixVerse", url: "https://pixverse.ai/", category: "video", desc: "Clips animés à partir de texte ou d'images.", tags: ["vidéo", "animation"], free: true },
  { id: "genmo", name: "Genmo", url: "https://www.genmo.ai/", category: "video", desc: "Génération vidéo open source via le modèle Mochi.", tags: ["vidéo", "open"], free: true },
  { id: "dreamina-video", name: "Dreamina Video", url: "https://dreamina.capcut.com/ai-tool/home?type=video", category: "video", desc: "Génération vidéo intégrée à l'écosystème CapCut.", tags: ["vidéo", "édition"], free: true },
  { id: "geminigen-video", name: "GeminiGen Video", url: "https://geminigen.ai/app/video-gen", category: "video", desc: "Interface simple pour générer des vidéos par IA.", tags: ["vidéo"], free: true },
  { id: "eggnog", name: "Eggnog", url: "https://www.eggnog.ai/", category: "video", desc: "Crée des personnages cohérents et des courts métrages IA.", tags: ["vidéo", "personnages"], free: true },
  { id: "bingvideo", name: "Bing Video Creator", url: "https://www.bing.com/images/create/ai-video-generator", category: "video", desc: "Générateur vidéo gratuit de Microsoft.", tags: ["vidéo"], free: true },

  // ---------- Audio / Music ----------
  { id: "suno", name: "Suno", url: "https://suno.com/", category: "audio", desc: "Compose des chansons complètes avec paroles à partir d'un prompt.", tags: ["musique", "chanson"], free: true, hot: true },
  { id: "musicfx", name: "MusicFX", url: "https://labs.google/fx/tools/music-fx", category: "audio", desc: "Génère des boucles musicales par IA, signé Google.", tags: ["musique", "boucles"], free: true },
  { id: "stableaudio", name: "Stable Audio", url: "https://www.stableaudio.com/", category: "audio", desc: "Génération audio et musique par Stability AI.", tags: ["musique", "audio"], free: true },
  { id: "mubert", name: "Mubert", url: "https://mubert.com/", category: "audio", desc: "Musique royalty-free générée pour tes projets.", tags: ["musique", "royalty-free"], free: true },
  { id: "aiva", name: "AIVA", url: "https://aiva.ai/", category: "audio", desc: "Compositeur IA orienté musique de film et orchestrale.", tags: ["musique", "orchestral"], free: true },
  { id: "soundraw", name: "SOUNDRAW", url: "https://soundraw.io/", category: "audio", desc: "Crée et personnalise des morceaux libres de droits.", tags: ["musique", "royalty-free"], free: true },
  { id: "boomy", name: "Boomy", url: "https://boomy.com/", category: "audio", desc: "Génère des morceaux en secondes, même sans expérience.", tags: ["musique", "facile"], free: true },
  { id: "mmaudio", name: "MMAudio", url: "https://hkchengrex.com/MMAudio/", category: "audio", desc: "Génère des effets sonores synchronisés à une vidéo.", tags: ["audio", "sfx"], free: true },

  // ---------- TTS / Voice ----------
  { id: "elevenlabs", name: "ElevenLabs", url: "https://elevenlabs.io/", category: "tts", desc: "La référence en voix IA ultra-réalistes et clonage.", tags: ["voix", "clonage"], free: true, hot: true },
  { id: "kokoro", name: "Kokoro TTS", url: "https://huggingface.co/spaces/hexgrad/Kokoro-TTS", category: "tts", desc: "Synthèse vocale open source légère et naturelle.", tags: ["voix", "open"], free: true, hot: true },
  { id: "openaifm", name: "OpenAI.fm", url: "https://www.openai.fm/", category: "tts", desc: "Démo de voix expressives signées OpenAI.", tags: ["voix", "expressif"], free: true },
  { id: "fishaudio", name: "Fish Audio", url: "https://fish.audio/", category: "tts", desc: "TTS et clonage vocal multilingue de qualité.", tags: ["voix", "clonage"], free: true },
  { id: "speechma", name: "Speechma", url: "https://speechma.com/", category: "tts", desc: "Texte en parole gratuit avec de nombreuses voix.", tags: ["voix", "gratuit"], free: true },
  { id: "naturalreaders", name: "NaturalReaders", url: "https://www.naturalreaders.com/online/", category: "tts", desc: "Lecteur vocal en ligne pour articles et documents.", tags: ["voix", "lecture"], free: true },
  { id: "applio", name: "Applio", url: "https://applio.org/", category: "tts", desc: "Clonage et conversion de voix simple et puissant.", tags: ["voix", "conversion"], free: true },
  { id: "fakeyou", name: "FakeYou", url: "https://fakeyou.com/", category: "tts", desc: "Voix de personnages célèbres en deepfake audio.", tags: ["voix", "personnages"], free: true },
  { id: "cartesia", name: "Cartesia", url: "https://play.cartesia.ai/", category: "tts", desc: "Synthèse vocale temps réel à très faible latence.", tags: ["voix", "temps-réel"], free: true },

  // ---------- Agents ----------
  { id: "hermes", name: "Hermes Agent", url: "https://hermes-agent.nousresearch.com/", category: "agents", desc: "Agent autonome signé Nous Research.", tags: ["agent", "autonome"], free: true },
  { id: "openclaw", name: "OpenClaw", url: "https://openclaw.ai/", category: "agents", desc: "Agent IA open pour automatiser des tâches web.", tags: ["agent", "web"], free: true },
  { id: "tldraw", name: "tldraw computer", url: "https://computer.tldraw.com/", category: "agents", desc: "Construis des flux d'agents visuels sur un canvas infini.", tags: ["agent", "no-code", "visuel"], free: true, hot: true },
  { id: "coze", name: "Coze", url: "https://space.coze.cn/", category: "agents", desc: "Plateforme pour créer des bots et agents sans code.", tags: ["agent", "no-code"], free: true },

  // ---------- Roleplay ----------
  { id: "chub", name: "Chub", url: "https://chub.ai/", category: "roleplay", desc: "Immense bibliothèque de personnages pour le roleplay.", tags: ["personnages", "rp"], free: true, hot: true },
  { id: "perchance-rp", name: "Perchance Character Chat", url: "https://perchance.org/ai-character-chat", category: "roleplay", desc: "Chat de personnages IA gratuit et illimité.", tags: ["personnages", "illimité"], free: true },
  { id: "aidungeon", name: "AI Dungeon", url: "https://aidungeon.com/", category: "roleplay", desc: "Aventures textuelles infinies pilotées par IA.", tags: ["aventure", "narration"], free: true },
  { id: "hammerai", name: "HammerAI", url: "https://www.hammerai.com/characters", category: "roleplay", desc: "Chat de personnages, en ligne ou en local.", tags: ["personnages", "local"], free: true },
  { id: "agnai", name: "Agnai", url: "https://agnai.chat/", category: "roleplay", desc: "Frontend de roleplay multi-utilisateur et multi-modèle.", tags: ["rp", "frontend"], free: true },
  { id: "flowgpt", name: "FlowGPT", url: "https://flowgpt.com", category: "roleplay", desc: "Communauté de prompts et personnages IA.", tags: ["prompts", "communauté"], free: true },

  // ---------- Local ----------
  { id: "lmstudio", name: "LM Studio", url: "https://lmstudio.ai/", category: "local", desc: "Télécharge et fais tourner des LLM en local, interface soignée.", tags: ["local", "desktop"], free: true, hot: true },
  { id: "ollama", name: "Ollama", url: "https://ollama.com/", category: "local", desc: "Lance des modèles open en une ligne de commande.", tags: ["local", "cli"], free: true, hot: true },
  { id: "jan", name: "Jan", url: "https://jan.ai/", category: "local", desc: "Alternative open source à ChatGPT, 100% hors-ligne.", tags: ["local", "open"], free: true },
  { id: "openwebui", name: "Open WebUI", url: "https://openwebui.com/", category: "local", desc: "Interface web élégante pour tes modèles locaux.", tags: ["local", "ui"], free: true },
  { id: "gpt4all", name: "GPT4All", url: "https://www.nomic.ai/gpt4all", category: "local", desc: "Écosystème pour faire tourner des LLM sur ton matériel.", tags: ["local", "desktop"], free: true },
  { id: "sillytavern", name: "SillyTavern", url: "https://docs.sillytavern.app/", category: "local", desc: "Frontend avancé pour le roleplay avec modèles locaux ou API.", tags: ["local", "rp"], free: true },
  { id: "anythingllm", name: "AnythingLLM", url: "https://anythingllm.com/", category: "local", desc: "App tout-en-un pour discuter avec tes documents en privé.", tags: ["local", "documents"], free: true },
  { id: "cherrystudio", name: "Cherry Studio", url: "https://www.cherry-ai.com/", category: "local", desc: "Client de bureau multi-modèle, local et cloud.", tags: ["local", "desktop"], free: true },

  // ---------- Tools ----------
  { id: "countless", name: "AI Price Compare", url: "https://countless.dev/", category: "tools", desc: "Compare les prix de tous les modèles d'API en un coup d'œil.", tags: ["prix", "api"], free: true, hot: true },
  { id: "futuretools", name: "FutureTools", url: "https://www.futuretools.io/?pricing-model=free", category: "tools", desc: "Annuaire massif d'outils IA, filtrable par prix.", tags: ["annuaire", "découverte"], free: true },
  { id: "openrouter", name: "OpenRouter", url: "https://openrouter.ai/rankings", category: "tools", desc: "Une seule API pour des centaines de modèles + classements.", tags: ["api", "classements"], free: true },
  { id: "artificialanalysis", name: "Artificial Analysis", url: "https://artificialanalysis.ai/", category: "tools", desc: "Compare vitesse, qualité et prix des modèles.", tags: ["benchmark", "comparatif"], free: true },
  { id: "pageassist", name: "Page Assist", url: "https://github.com/n4ze3m/page-assist", category: "tools", desc: "Extension navigateur pour interroger tes modèles locaux.", tags: ["extension", "local"], free: true },
  { id: "huggingface", name: "Hugging Face", url: "https://huggingface.co/", category: "tools", desc: "Le hub central des modèles, datasets et démos IA.", tags: ["hub", "modèles"], free: true },
  { id: "modelsdev", name: "Models.dev", url: "https://models.dev/", category: "tools", desc: "Base de données ouverte des modèles et de leurs specs.", tags: ["annuaire", "specs"], free: true },
  { id: "vramcalc", name: "VRAM Calculator", url: "https://huggingface.co/spaces/NyxKrage/LLM-Model-VRAM-Calculator", category: "tools", desc: "Estime la VRAM nécessaire pour faire tourner un modèle.", tags: ["local", "calcul"], free: true },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

export function getCategory(id) {
  return categoryMap[id];
}

export function aisByCategory(id) {
  return ais.filter((a) => a.category === id);
}

export function getAi(id) {
  return ais.find((a) => a.id === id);
}

export const allTags = [...new Set(ais.flatMap((a) => a.tags))].sort();
