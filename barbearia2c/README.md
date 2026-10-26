# Barbearia 2C — landing page

Projeto estático em HTML, CSS e JavaScript puro, sem dependências, build ou backend. Paleta carvão, marfim e dourado baseada nas três capturas fornecidas. Não foram criadas fotografias ou avaliações fictícias.

## 1. Abra no VS Code

1. Extraia o ZIP.
2. No VS Code, selecione **Arquivo > Abrir Pasta** e escolha `barbearia-2c`.
3. Abra `index.html` diretamente no navegador pelo explorador de arquivos. Não é preciso instalar Node.js.
4. Opcional: com a extensão Live Server já instalada, clique com o botão direito em `index.html` e escolha **Open with Live Server**.
5. Salve as alterações e atualize a página no navegador.

## 2. Estrutura

```text
barbearia-2c/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/
│   ├── carlos.jpeg
│   ├── portfolio.jpg
│   └── perfil.jpg
├── .nojekyll
└── README.md
```

## 3. Configure antes de publicar

Abra `js/script.js`. O objeto **CONFIG**, no início do arquivo, reúne:

| Campo | O que inserir |
| --- | --- |
| `nome` | Nome exibido no cabeçalho e rodapé e no título carregado pelo JavaScript |
| `whatsapp` | Telefone real entre aspas: 55 + DDD + número, somente dígitos, sem +, espaços ou traços |
| `mensagem` | Mensagem de agendamento dos botões gerais |
| `endereco` | Endereço completo real |
| `horarios` | Dias e horários reais; use `\n` para quebrar linhas |
| `mapsUrl` | URL HTTPS real da localização no Google Maps |

O número foi intencionalmente deixado vazio. Não foi usado o telefone de divulgação de curso que aparece em uma das imagens, pois não há confirmação de que seja o número para agendamentos.

Enquanto o número estiver vazio ou tiver formato inválido, clicar em um CTA abre um aviso com alternativa de contato pelo Instagram. Depois de configurar, todos os CTAs com `data-whatsapp` passam a usar `https://wa.me/` com a mensagem codificada. Os três links de serviços usam mensagens específicas; edite o trecho `link.dataset.service` do JavaScript para personalizá-las. O formato do telefone é validado, mas isso não confirma que a conta existe: faça um teste com o número real.

O link do Maps só aparece com uma URL HTTPS dos domínios Google permitidos no código. O endereço e os horários permanecem como “a informar” até serem preenchidos.

### Textos e identidade

- `index.html`: títulos, descrições, serviços, nome editorial “Barbearia 2C”, nome Carlos Augusto e links do Instagram. Use **Ctrl+H** para localizar as ocorrências ao adaptar para outro negócio.
- Atualize também `<title>`, a meta `description` e os textos alternativos no HTML para manter SEO e versão sem JavaScript coerentes.
- `css/style.css`: cores nas variáveis `:root`; tipografia, espaços e regras de layout.
- O ano do rodapé é atualizado automaticamente.
- Os serviços foram baseados nas referências de cortes e barba. Confirme oferta, textos e disponibilidade antes da publicação.
- Não há mapa incorporado, rastreadores, formulário, cookies de análise, avaliações ou preços inventados.
- Open Graph, URL canônica e dados estruturados locais ficam para quando houver domínio, endereço e informações comerciais confirmadas.

## 4. Imagens

Os três arquivos originais estão incluídos sem alteração de pixels:

- `carlos.jpeg`: retrato da primeira captura, usado no destaque; o logotipo presente na própria foto é preservado.
- `portfolio.jpg`: captura do portfólio, enquadrada em dois detalhes de cortes.
- `perfil.jpg`: captura do perfil, usada no cartão sobre a identidade profissional.

O enquadramento é feito apenas com CSS. As capturas de portfólio e perfil podem ser abertas completas ao clicar nos cartões. Não foram apresentadas fotos inventadas do ambiente, pois as referências não mostram o espaço completo.

Para substituir, coloque a nova imagem em `assets/images/`, atualize o `src`, `width`, `height` e `alt` em `index.html`. As regras `.hero-photo > img`, `.gallery-shot img`, `.cut-one img`, `.cut-two img` e `.profile-window img` foram calibradas para as capturas atuais. Com fotos novas, ajuste-as ou remova o posicionamento absoluto e use `width:100%;height:100%;object-fit:cover` nos respectivos quadros.

As capturas têm resolução limitada; fotos originais em alta resolução poderão melhorar a apresentação em monitores grandes.

## 5. Publicar no GitHub Pages

1. Entre na sua conta do GitHub e crie um repositório público, por exemplo `barbearia-2c`.
2. Envie o **conteúdo** da pasta extraída para a raiz do repositório: `index.html`, `css`, `js`, `assets`, `.nojekyll` e `README.md`. Não envie apenas o ZIP nem coloque tudo dentro de uma segunda pasta.
3. Confirme o envio com um commit na branch `main`.
4. Abra **Settings > Pages** no repositório.
5. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
6. Escolha **main** e **/(root)**, clique em **Save** e aguarde a publicação.
7. Use a URL exibida pelo próprio GitHub em Pages. Para um repositório de projeto, costuma seguir `https://SEU-USUARIO.github.io/barbearia-2c/`.
8. Confira imagens, navegação e agendamento no endereço publicado.

Não há comando de build. Os caminhos `./css`, `./js` e `./assets` funcionam também no subdiretório do repositório. `.nojekyll` evita processamento Jekyll.

Para atualizar, edite os arquivos, envie as novas versões e faça outro commit na mesma branch. Acompanhe a execução na aba **Actions**. Se uma imagem falhar, confira maiúsculas/minúsculas do nome e a pasta: GitHub diferencia `Foto.jpg` de `foto.jpg`.

Documentação oficial consultada em 26/10/2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 6. Acessibilidade e funcionamento

- Link para pular navegação, HTML semântico, um H1 e hierarquia de títulos.
- Foco visível, menu com `aria-expanded`, fechamento via Escape e diálogo nativo com retorno de foco.
- Menu permanece acessível sem JavaScript; os CTAs levam ao contato, que contém Instagram.
- Movimento reduzido respeitado; imagens abaixo da dobra com lazy loading.
- Sem recursos de fontes ou scripts de terceiros. Links externos usam proteção `noopener`.

## 7. Verificações

Sintaxe JavaScript e referências locais verificadas. Revisão visual em desktop e quadro mobile de 390 px, teste de abertura/fechamento do menu e teste do aviso de agendamento realizados no Chrome de prévia. As quatro instâncias das três imagens carregaram; largura útil mobile de 375 px sem overflow horizontal. O WhatsApp real e o Maps dependem da configuração do proprietário; não foi enviado contato nem feita publicação em conta GitHub.

Antes de divulgar: preencha os dados, confira o telefone real, teste no seu celular e valide os links após publicar.
