const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 80, bottom: 60, left: 60, right: 60 },
  info: {
    Title: 'Principais IAs no Mercado e suas Aplicações',
    Author: 'Vitor Manoel',
  }
});

doc.pipe(fs.createWriteStream('resumo_ias.pdf'));

doc.font('Helvetica-Bold').fontSize(16).text('SENAI - Viena', { align: 'center' });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Data: 29/09/2026', { align: 'center' });
doc.text('Autor: Vitor Manoel', { align: 'center' });
doc.text('Instrutor: Samuel Nascimento', { align: 'center' });
doc.moveDown(1);

doc.font('Helvetica-Bold').fontSize(14).text('Principais IAs no Mercado e suas Aplicações', { align: 'center' });
doc.moveDown(1);

doc.font('Helvetica').fontSize(10).text(
  'A Inteligência Artificial (IA) tem se consolidado como uma das tecnologias mais transformadoras do século XXI, revolucionando setores como saúde, indústria, educação, entretenimento e negócios. Este documento apresenta um panorama das principais IAs disponíveis no mercado atual e suas aplicações práticas.',
  { align: 'justify' }
);
doc.moveDown(1);

const topicos = [
  {
    titulo: '1. ChatGPT (OpenAI)',
    conteudo: 'O ChatGPT é o modelo de linguagem mais conhecido do mundo, baseado na arquitetura GPT (Generative Pre-trained Transformer). Suas aplicações incluem atendimento ao cliente, redação de conteúdo, tradução, programação, tutoria personalizada e suporte técnico. A versão GPT-4 trouxe avanços em raciocínio, compreensão de imagens e maior precisão nas respostas.'
  },
  {
    titulo: '2. Gemini (Google DeepMind)',
    conteudo: 'O Gemini é a família de modelos multimodais do Google, capaz de processar texto, imagens, áudio e vídeo de forma integrada. É utilizado em buscas inteligentes, assistentes virtuais, análise de documentos, pesquisa científica e integração com o ecossistema Google Workspace.'
  },
  {
    titulo: '3. Claude (Anthropic)',
    conteudo: 'O Claude é um assistente de IA desenvolvido pela Anthropic, focado em segurança e alinhamento. Destaca-se em análise de documentos longos, redação avançada, programação e tarefas que exigem raciocínio complexo. É amplamente utilizado em ambientes corporativos e educacionais.'
  },
  {
    titulo: '4. Midjourney',
    conteudo: 'O Midjourney é uma IA generativa especializada em criação de imagens a partir de descrições textuais (prompts). Suas aplicações abrangem design gráfico, publicidade, arte conceitual, arquitetura, moda e produção de conteúdo visual para redes sociais e marketing.'
  },
  {
    titulo: '5. DALL-E (OpenAI)',
    conteudo: 'O DALL-E é um sistema de geração de imagens da OpenAI que cria visuais realistas e artísticos a partir de textos. É utilizado em design, ilustração, criação de campanhas publicitárias, prototipagem visual e geração de conteúdo para jogos e entretenimento.'
  },
  {
    titulo: '6. Copilot (Microsoft)',
    conteudo: 'O Microsoft Copilot é um assistente de IA integrado ao Windows, Office 365 e GitHub. Auxilia na produtividade corporativa, geração de documentos, planilhas, apresentações, escrita de código, automação de tarefas repetitivas e análise de dados em tempo real.'
  },
  {
    titulo: '7. Stable Diffusion',
    conteudo: 'O Stable Diffusion é um modelo de código aberto para geração de imagens, permitindo personalização e execução local. É amplamente utilizado por desenvolvedores, artistas e empresas para criação de conteúdo visual, design de produtos, jogos e aplicações que exigem geração de imagens sob demanda.'
  },
  {
    titulo: '8. IBM Watson',
    conteudo: 'O IBM Watson é uma plataforma de IA corporativa com foco em análise de dados, processamento de linguagem natural e machine learning. Suas aplicações incluem diagnóstico médico, análise financeira, chatbots empresariais, previsão de demanda e otimização de cadeias de suprimentos.'
  },
  {
    titulo: '9. Perplexity AI',
    conteudo: 'A Perplexity AI é um mecanismo de busca inteligente que combina IA generativa com pesquisa em tempo real. Oferece respostas precisas com fontes citadas, sendo utilizada para pesquisa acadêmica, jornalismo, análise de mercado e tomada de decisão baseada em dados atualizados.'
  },
  {
    titulo: '10. Runway ML',
    conteudo: 'A Runway ML é uma plataforma de IA criativa voltada para produção de vídeo, edição generativa e efeitos visuais. É utilizada na indústria cinematográfica, publicidade, criação de conteúdo para redes sociais e desenvolvimento de experiências interativas.'
  }
];

topicos.forEach(topico => {
  doc.font('Helvetica-Bold').fontSize(11).text(topico.titulo);
  doc.font('Helvetica').fontSize(10).text(topico.conteudo, { align: 'justify' });
  doc.moveDown(0.8);
});

doc.moveDown(1);
doc.font('Helvetica-Bold').fontSize(11).text('Conclusão');
doc.font('Helvetica').fontSize(10).text(
  'O mercado de Inteligência Artificial está em rápida expansão, com novas ferramentas surgindo constantemente. A escolha da IA ideal depende das necessidades específicas de cada projeto ou negócio. O domínio dessas tecnologias torna-se cada vez mais essencial para profissionais de todas as áreas, impulsionando a inovação e a competitividade no mercado global.',
  { align: 'justify' }
);

doc.end();
console.log('PDF gerado com sucesso: resumo_ias.pdf');
