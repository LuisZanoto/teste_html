const englishText = new Map(Object.entries({
    "oficina": "workshop",
    "Navegação do artigo": "Article navigation",
    "Projeto": "Project",
    "Cálculos": "Calculations",
    "Ensaio": "Test",
    "Selecionar idioma": "Select language",
    "Contador global de visitas": "Global visitor counter",
    "Carregando visitas": "Loading visits",
    "Projeto de oficina · Aeromodelismo": "Workshop project · Model aviation",
    "Uma mufla artesanal para o motor": "A homemade muffler for a",
    "Do escape original a um silenciador construído com um paliteiro inox, um tubo perfurado e defletores de ralo de pia. Um relato de construção, dimensionamento e ensaio inicial.": "From the original exhaust to a silencer made from a stainless-steel toothpick holder, a perforated tube, and sink-drain baffles. A report on its construction, sizing, and initial testing.",
    "Motor 2 tempos de roçadeira adaptado": "Adapted two-stroke brush-cutter engine",
    "Leitura técnica · 8 etapas": "Technical report · 8 sections",
    "Dados do conjunto": "Setup specifications",
    "Cilindrada": "Displacement",
    "Motor com hub e hélice": "Engine with hub and propeller",
    "Hélice de madeira": "Wooden propeller",
    "Inox + aço": "Stainless steel + steel",
    "Materiais da mufla": "Muffler materials",
    "Conteúdo do artigo": "Article contents",
    "Neste artigo": "In this article",
    "Ponto de partida": "Starting point",
    "Componentes": "Components",
    "Defletores": "Baffles",
    "Dimensionamento": "Sizing",
    "Ensaio e observações": "Testing and observations",
    "Atualização do amaciamento": "Break-in update",
    "O escape original como referência": "The original exhaust as a reference",
    "O projeto parte de um motor utilitário de dois tempos, originalmente de roçadeira, preparado para aeromodelismo. O escape original de aço-carbono, cortado como modelo de referência, orientou o desenvolvimento da mufla artesanal.": "This project starts with a utility two-stroke engine originally made for a brush cutter and adapted for model aviation. The original carbon-steel exhaust, cut open as a reference, guided the design of the homemade muffler.",
    "Escape original cortado, usado como modelo para o aprimoramento.": "Original exhaust cut open and used as a reference for improvements.",
    "Segundo as anotações do projeto, o escape original cortado tem cerca de 70 mL e 9 saídas  5 mm. A proposta foi experimentar uma câmara maior e materiais simples, sem tratar o resultado como uma mufla comercial já validada.": "According to the project notes, the original cut-open exhaust holds about 70 mL and has 9 outlets 5 mm across. The goal was to experiment with a larger chamber and simple materials, not to present the result as a commercially validated muffler.",
    "Materiais acessíveis": "Accessible materials",
    "Peças comuns, outra função": "Everyday parts, a different purpose",
    "O corpo principal é um paliteiro cilíndrico de aço inox, com dimensões externas anotadas de 50 × 93 mm. O conjunto interno aproveita um tubo de ferro de solda de 80 W, perfurado para distribuir os gases, e peças de ralo de pia que formam os defletores.": "The main body is a cylindrical stainless-steel toothpick holder, with recorded external dimensions of 50 × 93 mm. Inside, a perforated 80 W soldering-iron tube distributes the exhaust gases, while sink-drain parts serve as baffles.",
    "Corpo, tubo perfurado e componentes reunidos para a montagem.": "Body, perforated tube, and components gathered for assembly.",
    "Corpo:": "Body:",
    "paliteiro de aço inox, cerca de 50 mm de diâmetro por 93 mm de comprimento.": "stainless-steel toothpick holder, about 50 mm in diameter and 93 mm long.",
    "Tubo interno:": "Inner tube:",
    "tubo de aproximadamente 11 mm, com 28 furos de 2,5 mm.": "approximately 11 mm tube with 28 holes measuring 2.5 mm.",
    "Defletores:": "Baffles:",
    "duas meias-esferas de ralo de pia, instaladas em posições sucessivas.": "two sink-drain hemispheres installed one after the other.",
    "Saída auxiliar:": "Auxiliary outlet:",
    "dois furos M8/M5 mm na tampa, formando o bypass registrado no ensaio.": "two M8/M5 mm holes in the end cap, forming the bypass recorded during testing.",
    "Caminho dos gases": "Gas flow path",
    "O ralo de pia vira defletor": "A sink drain becomes a baffle",
    "As meias-esferas de ralo foram escolhidas para desviar e repartir o fluxo dentro do corpo. As anotações descrevem uma área parcialmente restritiva, próxima de 40%, e posicionam os dois defletores aproximadamente a um terço e a dois terços do comprimento do paliteiro.": "The drain hemispheres were chosen to redirect and distribute flow inside the body. The notes describe a partially restrictive area, approximately 40%, and place the two baffles at roughly one-third and two-thirds of the toothpick holder's length.",
    "Meia-esfera perfurada usada para mudar a direção e difundir o fluxo.": "Perforated hemisphere used to redirect and diffuse the flow.",
    "Trajeto descrito dos gases": "Described exhaust-gas path",
    "Saída do motor": "Engine outlet",
    "Expansão e curva": "Expansion and bend",
    "Defletores e tubo perfurado": "Baffles and perforated tube",
    "Saída principal + bypass": "Main outlet + bypass",
    "Esse arranjo descreve o caminho pretendido, mas não substitui uma medição de contrapressão. Curvas, furos e mudanças de seção influenciam o escoamento real.": "This layout describes the intended path, but does not replace a back-pressure measurement. Bends, holes, and changes in cross-section affect the actual flow.",
    "Cálculos do projeto": "Project calculations",
    "Áreas nominais e limites da estimativa": "Nominal areas and limits of the estimate",
    "As contas abaixo usam as dimensões e quantidades anotadas durante a construção. Elas permitem comparar áreas geométricas, mas não representam a área efetiva de escoamento nem uma medição de pressão.": "The calculations below use the dimensions and quantities recorded during construction. They allow a comparison of geometric areas, but do not represent the effective flow area or a pressure measurement.",
    "Áreas de passagem calculadas a partir das dimensões registradas": "Flow areas calculated from the recorded dimensions",
    "Trecho": "Section",
    "Cálculo": "Calculation",
    "Área aproximada": "Approximate area",
    "Saída do bloco": "Cylinder outlet",
    "Pré-difusor, duas aberturas": "Pre-diffuser, two openings",
    "Área defletores 40% aberto": "Baffle area, 40% open",
    "28 furos do tubo": "28 holes in the tube",
    "Saída do tubo de 11 mm": "11 mm tube outlet",
    "Dois furos de bypass de 5 mm": "Two 5 mm bypass holes",
    "Saídas finais somadas": "Combined final outlets",
    "Volume: valor geométrico, não medido": "Volume: geometric estimate, not measured",
    "Usando 50 × 93 mm como se o corpo fosse um cilindro, o envelope externo equivale a π × 25² × 93 ≈ 182,4 cm³. Dividido por 26 cm³, resulta em k ≈ 7,0. Como as dimensões são externas e os componentes ocupam espaço interno, isso é apenas uma estimativa superior do volume útil, não uma medição da câmara.": "Treating the 50 × 93 mm body as a cylinder gives an external envelope of π × 25² × 93 ≈ 182.4 cm³. Dividing by 26 cm³ gives k ≈ 7.0. Since these are external dimensions and the components occupy interior space, this is only an upper estimate of usable volume, not a measurement of the chamber.",
    "Os 28 furos somam cerca de 137 mm², enquanto a saída principal e o bypass somam aproximadamente 134 mm². Essa soma é uma comparação de áreas nominais: a disposição em caminhos distintos, as curvas e as perdas locais impedem concluir, só com esses números, qual é o gargalo efetivo.": "The 28 holes add up to about 137 mm², while the main outlet and bypass total approximately 134 mm². This is a comparison of nominal areas: separate flow paths, bends, and local losses mean these figures alone cannot identify the actual restriction.",
    "Estimativas de referência": "Reference estimates",
    "O Motor 2 tempos usa a razão entre a area total de saida gases (134mm²)/ área de saida do bloco (216mm²). Resultando em relação de restrição de 62%.": "For this two-stroke engine, the ratio of total exhaust outlet area (134 mm²) to cylinder outlet area (216 mm²) is 62%, according to the notes.",
    "Conjunto instalado": "Installed assembly",
    "A mufla no motor": "The muffler on the engine",
    "Com o corpo fechado e preso ao motor, o protótipo mantém o formato compacto do paliteiro. A montagem fotografada documenta a solução física; alinhamento, fixação resistente à vibração e vedação precisam ser verificados antes de cada funcionamento.": "With the body closed and attached to the engine, the prototype retains the toothpick holder's compact shape. The photograph documents the physical setup; alignment, vibration-resistant fastening, and sealing should be checked before each run.",
    "Motor completo com a mufla artesanal instalada.": "Complete engine with the homemade muffler installed.",
    "Vídeo do funcionamento do motor": "Video of the engine running",
    "Seu navegador não consegue reproduzir este vídeo.": "Your browser cannot play this video.",
    "Funcionamento": "Running",
    "RPM medido: máximo de 6.250 RPM e marcha lenta de 3.100 RPM. Observe também o nível de ruído e a resposta à aceleração.": "Recorded speed: 6,250 RPM maximum and 3,100 RPM at idle. Also note the noise level and throttle response.",
    "Ensaio e observações": "Testing and observations",
    "O que mudou no teste inicial": "What changed in the initial test",
    "O registro relata aproximadamente 6.000 rpm antes da alteração e ruído alto e agudo. Após a abertura de dois furos de bypass de 5 mm e a retirada do filtro de ar, o motor chegou a 7.500 rpm e ruído reduzido com som mais grave. Como duas mudanças foram feitas ao mesmo tempo, esse resultado não isola o efeito da mufla. Com o motor aquecendo, a carburação foi enriquecida e o ajuste passou a cerca de 6.500 rpm.": "The notes report approximately 6,000 RPM before the changes, with loud, high-pitched noise. After two 5 mm bypass holes were opened and the air filter was removed, the engine reached 7,500 RPM and the noise became quieter and deeper. Since both changes were made at the same time, this result does not isolate the muffler's effect. As the engine heated up, the mixture was enriched and the setting was adjusted to about 6,500 RPM.",
    "Sequência de rotações relatada": "Reported RPM sequence",
    "Configuração inicial": "Initial setup",
    "Bypass + filtro removido": "Bypass + filter removed",
    "Após enriquecer a mistura": "After enriching the mixture",
    "Vela do motor após o ensaio, com coloração descrita nas anotações como café com leite": "Spark plug after testing; its colour was described in the notes as milky coffee",
    "Vela observada após o teste; a cor foi descrita como “café com leite”.": "Spark plug inspected after the test; its colour was described as “milky coffee.”",
    "As anotações também registram cerca de duas horas de funcionamento acumulado, alternância entre proporções de óleo de 25:1, 32:1 e 28:1, e aquecimento percebido após ciclos curtos. A coloração da vela e a sensação ao toque são observações qualitativas: não confirmam, sozinhas, temperatura segura ou carburação ideal.": "The notes also record about two hours of total running time, changes between oil ratios of 25:1, 32:1, and 28:1, and heat noticed after short runs. Spark-plug colour and touch are qualitative observations: on their own, they do not confirm a safe temperature or ideal mixture.",
    "Leitura responsável do ensaio": "Interpreting the test responsibly",
    "Naquele ensaio inicial, ainda não havia medição de temperatura; também não foram medidos ruído em dB(A) ou contrapressão, nem houve teste controlado que isolasse cada alteração. Para avaliar desempenho e segurança, é importante registrar as condições do ensaio e usar instrumentos adequados.": "During that initial test, temperature, dB(A) noise, and back pressure had not yet been measured, nor had a controlled test isolated each change. Evaluating performance and safety requires recording test conditions and using appropriate instruments.",
    "Atualização do ensaio": "Test update",
    "Temperatura e resposta após três horas": "Temperature and response after three hours",
    "Com aproximadamente três horas de amaciamento, foi feita uma avaliação com termômetro digital a laser. As leituras abaixo são temperaturas de superfície nos pontos indicados, não medições internas do motor.": "After approximately three hours of break-in, temperatures were checked with a digital infrared thermometer. The readings below are surface temperatures at the specified points, not internal engine temperatures.",
    "Temperaturas de superfície registradas no ensaio": "Surface temperatures recorded during testing",
    "Condição": "Condition",
    "Ponto observado": "Measurement point",
    "Leitura": "Reading",
    "Média rotação, 4.500 RPM": "Mid-range, 4,500 RPM",
    "Ponto de maior temperatura, sob a parte traseira do bloco, cerca de 1 cm abaixo da vela, sem incidência direta de ar": "Hottest point, beneath the rear of the cylinder block, about 1 cm below the spark plug, away from direct airflow",
    "Topo do motor": "Top of the engine",
    "Ponto de maior temperatura": "Hottest point",
    "Segundo o relato, a leitura se estabilizou e não subiu durante cinco minutos funcionando em média rotação. Como o termômetro infravermelho mede a superfície e o resultado depende do ponto, da emissividade e das condições de medição, esses valores não determinam, por si só, a temperatura interna nem confirmam uma faixa segura de operação.": "According to the report, the reading stabilised and did not rise during five minutes of running at mid-range speed. An infrared thermometer measures the surface, and results depend on the target point, emissivity, and measurement conditions. These values alone do not establish internal temperature or confirm a safe operating range.",
    "A marcha lenta, antes em 3.100 RPM, passou a 3.500 RPM. A rotação máxima chegou a 6.800 RPM, mas foi mantida por apenas alguns segundos; a medição de temperatura em 6.500 RPM foi de 139 °C. A carburação não foi alterada neste ensaio, pois o autor considerou as temperaturas observadas satisfatórias.": "Idle speed increased from 3,100 to 3,500 RPM. Maximum speed reached 6,800 RPM, but was held for only a few seconds; the temperature reading at 6,500 RPM was 139 °C. The mixture was not adjusted during this test because the author considered the observed temperatures satisfactory.",
    "Também foi percebida uma resposta de aceleração mais rápida, sem engasgos: da lenta à rotação máxima, o tempo relatado caiu de cerca de 1,5 segundo para 1 segundo. A vela manteve a coloração descrita anteriormente, com metade escura, semelhante a verniz marrom brilhante, e metade café com leite.": "Throttle response also seemed quicker, with no hesitation: the reported time from idle to maximum speed fell from about 1.5 seconds to 1 second. The spark plug retained the previously described colour, half dark with a glossy brown, varnish-like appearance and half milky coffee.",
    "O que este registro permite concluir": "What this report can tell us",
    "As leituras documentam pontos e condições específicos do ensaio, mas não substituem acompanhamento controlado da temperatura e da carburação. Evite tratar a temperatura de superfície como temperatura do cilindro ou como confirmação isolada de segurança.": "These readings document specific test points and conditions, but do not replace controlled monitoring of temperature and mixture. Surface temperature should not be treated as cylinder temperature or as standalone proof of safety.",
    "Fechamento": "Conclusion",
    "Um protótipo documentado, ainda em avaliação": "A documented prototype, still under evaluation",
    "O trabalho mostra como componentes acessíveis podem formar uma mufla experimental para um motor de 26 cm³. As dimensões e os cálculos ajudam a explicar as escolhas de projeto; o ensaio inicial aponta mudanças de rotação, houve redução de ruído, mas falta quantificar com decibelimetro. Medições controladas são o próximo passo para comparar versões com precisão.": "This project shows how accessible components can be used to build an experimental muffler for a 26 cm³ engine. The dimensions and calculations explain the design choices; initial testing suggests changes in RPM and reduced noise, which still needs to be quantified with a sound-level meter. Controlled measurements are the next step for accurately comparing versions.",
    "Caderno de oficina · Projeto de mufla para aeromodelismo": "Workshop notes · Model aircraft muffler project",
    "Voltar ao início": "Back to top",
    "Etapa": "Step",
    "Etapa 01": "Step 01",
    "Etapa 02": "Step 02",
    "Etapa 03": "Step 03",
    "Etapa 04": "Step 04",
    "Etapa 05": "Step 05"
}));

const englishAttributes = new Map(Object.entries({
    "Caderno de oficina, início": "Workshop notes, home",
    "Navegação do artigo": "Article navigation",
    "Selecionar idioma": "Select language",
    "Contador global de visitas": "Global visitor counter",
    "Dados do conjunto": "Setup specifications",
    "Conteúdo do artigo": "Article contents",
    "Motor de 26 cc com o escape original instalado, usado como referência do projeto": "26 cc engine with the original exhaust installed, used as a project reference",
    "Componentes desmontados da mufla artesanal: corpo inox, tubo perfurado e peças reaproveitadas": "Disassembled homemade muffler components: stainless-steel body, perforated tube, and reused parts",
    "Defletor hemisférico perfurado feito a partir de um ralo de pia de cozinha": "Perforated hemispherical baffle made from a kitchen sink drain",
    "Trajeto descrito dos gases": "Described exhaust-gas path",
    "Motor 26 cc com a mufla artesanal instalada e hélice de madeira": "26 cc engine with the homemade muffler installed and a wooden propeller",
    "Vídeo do funcionamento do motor": "Video of the engine running",
    "Sequência de rotações relatada": "Reported RPM sequence",
    "Vela do motor após o ensaio, com coloração descrita nas anotações como café com leite": "Spark plug after testing; its colour was described in the notes as milky coffee"
}));

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const invariantEnglishText = new Set(["engine"]);
const existingEnglishText = new Set(englishText.values());
const languageButtons = document.querySelectorAll("[data-language]");
const pageTitle = document.querySelector("title");
const pageDescription = document.querySelector('meta[name="description"]');
const englishTitle = "Homemade muffler for a 26 cc engine | Workshop notes";
const englishDescription = "Project report: building a homemade muffler for a 26 cc two-stroke engine adapted for model aviation, using accessible materials and area calculations.";
const portugueseTitle = "Mufla artesanal para motor 26 cc | Caderno de oficina";
const portugueseDescription = "Relato de projeto: desenvolvimento de uma mufla artesanal para motor 2 tempos de 26 cc adaptado ao aeromodelismo, com materiais acessíveis e cálculos de área.";

function setLanguage(language) {
    const isEnglish = language === "en";
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) {
        if (!originalText.has(textNode)) {
            originalText.set(textNode, textNode.nodeValue);
        }
        const source = originalText.get(textNode);
        const trimmed = source.trim();
        const translated = isEnglish ? englishText.get(trimmed) : trimmed;
        if (translated !== undefined) {
            const start = source.length - source.trimStart().length;
            const end = source.length - source.trimEnd().length;
            textNode.nodeValue = `${source.slice(0, start)}${translated}${end ? source.slice(-end) : ""}`;
        } else if (
            isEnglish &&
            /[A-Za-zÀ-ÿ]{4}/.test(trimmed) &&
            !invariantEnglishText.has(trimmed) &&
            !existingEnglishText.has(trimmed)
        ) {
            console.warn("Missing English translation for page text:", trimmed);
        }
    }

    document.querySelectorAll("[alt], [aria-label]").forEach((element) => {
        ["alt", "aria-label"].forEach((attribute) => {
            if (!element.hasAttribute(attribute)) return;
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const originals = originalAttributes.get(element);
            if (originals[attribute] === undefined) originals[attribute] = element.getAttribute(attribute);
            const source = originals[attribute];
            if (attribute === "aria-label" && element.matches("[data-language]")) return;
            const translated = isEnglish ? englishAttributes.get(source) : source;
            if (translated !== undefined) element.setAttribute(attribute, translated);
        });
    });

    pageTitle.textContent = isEnglish ? englishTitle : portugueseTitle;
    pageDescription.content = isEnglish ? englishDescription : portugueseDescription;
    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    window.dispatchEvent(new CustomEvent("languagechange", { detail: language }));

    try {
        localStorage.setItem("site-language", language);
    } catch (error) {
        console.warn("Could not save the selected language.", error);
    }
}

let preferredLanguage = "pt-BR";
try {
    preferredLanguage = localStorage.getItem("site-language") === "en" ? "en" : "pt-BR";
} catch (error) {
    console.warn("Could not read the saved language preference.", error);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(preferredLanguage);
