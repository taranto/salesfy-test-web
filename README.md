
PT version:

-Encontre sua versão do chrome (normalmente em help -> about google chrome )
-Encontre a versão do chromedriver compatível com seu chrome: https://sites.google.com/a/chromium.org/chromedriver/downloads
*Atualmente a versão 2.38 do chromedriver (versão que está comitada) está associada a versão 65.0.3325.181 (Official Build) (64-bit) do browser chrome. Ela funciona bem para a versão 83.0.4103.39 do browser chrome (versão corrente do dia 25/05/2020). Caso não funcione bem, execute o `npm uninstall chromedriver` e `npm install chromedriver@xxx --save` com a versão mais correta.
-`yarn full-reinstall`
-`yarn compile`
-Altere o email/senha do usuário de teste de acordo com o que estiver disponível no seu banco de dados (no arquivo src/Env.ts)
-Rode o projeto Backend (`yarn online`)
-Rode o projeto Frontend (`yarn web-dev`)
-Rode o projeto de teste (`yarn test`)
*Uma vez que o projeto de teste execute, o chrome abrirá sozinho e uma série de cliques e escritas serão feitas automaticamente.


EN version:

-Find your chrome version (usually at help -> about google chrome)
-Find your chromedriver version compatible with your chrome: https://sites.google.com/a/chromium.org/chromedriver/downloads
*Actually the chromedriver's 2.38 version (the one commited) is associated to the version 65.0.3325.181 (official build) (64-bit) of chrome browser. It works well for the version 83.0.4103.39 of chrome browser (current version of 25/05/2020). If it doesn't work well, run `npm uninstall chromedriver` and `npm install chromedriver@xxx --save` switching `xxx` with the most correct version.
-`yarn full-reinstall`
-`yarn compile`
-Switch the email/password of the test user according to your database (at src/Env.ts)
-Run the Backend project (`yarn online`)
-Run the Frontend project (`yarn web-dev`)
-Run this test project (`yarn test`)
*As soon as this project test runs, the chorme browser will open up by itself and a series of mouse clicks and keyboard types would start to be made automatically.
