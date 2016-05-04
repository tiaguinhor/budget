# Virtual Budget

##Demo && Freelancer
http://budget.ogaiti.com.br Test the online application and already enjoy to make a budget ;)

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

## APPLICATION OPTIONS
The file 'src/js/app/controllers/HomeController.js', at the beginning of the code, there is an area for the application's options and can customize them as you see fit. The options are:

* $rootScope.email: Changes the email which will be sent to the budget
* _hourValue: Determines the value/hour
* _hourStaticPage: How many hours on average do you spend to develop a static page
* _hourDynamicPage: How many hours on average do you spend to develop a dynamic page
* _hourResponsive: How many hours on average do you spend to develop a responsive page
* _hourWorkPerDay: How many hours do you work a day in your time freelancer
* _templateValue: Determines the value of a site with template
* _responsiveValue: Determines the value of a responsive site
* _mvcValue: Determines the value of a site with MVC architecture
* _domainValue: Determines the value of a domain with annual hosting
* _maintenanceValue: Determines the amount of your monthly maintenance

##GENERAL OBSERVATIONS

1 - Wait about 10 minutes until the end gulp to perform all tasks. The time will vary according to the computer configuration. At the end, automatically localhost page of the project will be initialized (http://localhost:8080/budget/dist/) and automatically synchronized to each change.

2 - Any code change should be made directly to the 'src' folder of the project, which is responsible for distributing the final files in the 'dist' folder, they are CSS, JS, Fonts, Images, etc.

3 - In the 'application' folder of the project, is the app that is being developed with Ionic2 and AngularJS2.


=================
## *PORTUGUÊS
=================

#Orçamento Virtual

##Demo && Freelancer
http://budget.ogaiti.com.br Teste a aplicação online e já aproveite para fazer um orçamento ;)

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

##OPÇÕES DO APLICATIVO
No arquivo 'src/js/app/controllers/HomeController.js', logo no início do código, existe uma área destinada as opções do aplicativo, podendo customizá-los conforme achar necessário. As opções são:

* $rootScope.email: Altera o email para onde será enviado o orçamento
* _hourValue: Determina o seu valor/hora
* _hourStaticPage: Quantas horas em média você gasta para desenvolver uma página estática
* _hourDynamicPage: Quantas horas em média você gasta para desenvolver uma página dinâmica
* _hourResponsive: Quantas horas em média você gasta para desenvolver uma página responsiva
* _hourWorkPerDay: Quantas horas vocês trabalha por dia em seu horário freelancer
* _templateValue: Determina o valor de um site com template
* _responsiveValue: Determina o valor de um site responsivo
* _mvcValue: Determina o valor de um site com arquitetura MVC
* _domainValue: Determina o valor de um domínio com hospedagem anual
* _maintenanceValue: Determina o valor da sua manutenção mensal

##OBSERVAÇÕES GERAIS

1 - Aguarde em torno de 10 minutos até que o gulp termine de executar todas as tarefas. O tempo irá variar de acordo com a configuração do computador. Ao término, automaticamente a página localhost do projeto será inicializada (http://localhost:8080/budget/dist/) e sincronizada automaticamente a cada alteração.

2 - Toda alteração de código deve ser feita diretamente na pasta 'src' do projeto, que é responsável pela distribuição dos arquivos finais na pasta 'dist', sendo eles CSS, JS, Fonts, Images, etc.

3 - Na pasta 'application' do projeto, se encontra o app que está sendo desenvolvido com Ionic2 e AngularJS2.