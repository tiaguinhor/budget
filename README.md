# Virtual Budget

## Install/Deploy

1 - First, download the updated versions of [NodeJS] (https://nodejs.org/) and [GitHub] (https://github.com)

2 - After this, open the Terminal and run the following commands (even if you have previously installed, run them again to update if any):

```bash
npm install -g gulp
npm install -g bower
```

3 - Soon after, still in the terminal, navigate to the project root directory and run the command:

```bash
npm install
bower install
```

and finally the command:

```bash
gulp
```

this command will cause the project to be minified and processed in real time, making each change your code is updated in multiple browsers at the same time without running the refresh manually on each.

##GENERAL OBSERVATIONS

1 - Wait about 10 minutes until the end gulp to perform all tasks. The time will vary according to the computer configuration. At the end, automatically localhost page of the project will be initialized (http://localhost:8080/budget/dist/) and automatically synchronized to each change.

2 - Any code change should be made directly to the 'src' folder of the project, which is responsible for distributing the final files in the 'dist' folder, they are CSS, JS, Fonts, Images, etc.

3 - In the 'application' folder of the project, is the app that is being developed with Ionic2 and AngularJS2.



##PORTUGUÊS

#Orçamento Virtual

##Instalação/Deploy

1 - Primeiramente, baixe as versões atualizadas do [NodeJS](https://nodejs.org/) e [GitHub](https://github.com)

2 - Após isso, abra o terminal e execute os comandos abaixo (mesmo que já tenha instalado anteriormente, execute-os novamente para caso haja alguma atualização):

```bash
npm install -g gulp
npm install -g bower
```

3 - Logo após, ainda no terminal, navegue até o diretório raiz do projeto e execute os comandos:

```bash
npm install
bower install
```

e finalmente o comando:

```bash
gulp
```

esse comando fará com que o projeto seja minificado e processado em tempo real, fazendo com que cada alteração do seu código seja atualizado em vários navegadores ao mesmo tempo, sem precisar executar o refresh manualmente em cada um deles.

##OBSERVAÇÕES GERAIS

1 - Aguarde em torno de 10 minutos até que o gulp termine de executar todas as tarefas. O tempo irá variar de acordo com a configuração do computador. Ao término, automaticamente a página localhost do projeto será inicializada (http://localhost:8080/budget/dist/) e sincronizada automaticamente a cada alteração.

2 - Toda alteração de código deve ser feita diretamente na pasta 'src' do projeto, que é responsável pela distribuição dos arquivos finais na pasta 'dist', sendo eles CSS, JS, Fonts, Images, etc.

3 - Na pasta 'application' do projeto, se encontra o app que está sendo desenvolvido com Ionic2 e AngularJS2.