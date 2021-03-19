$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Funcionalidade: Consulta"
    },
    {
      "line": 3,
      "value": "# Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 4,
      "value": "# Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 5,
      "value": "#  Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 6,
      "value": "#  Entao Exibe a expressao \"Ovo de Páscoa\" no titulo da guia"
    }
  ],
  "line": 9,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2451530200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2357273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 1461855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 10019300,
  "status": "passed"
});
formatter.after({
  "duration": 771103900,
  "status": "passed"
});
});