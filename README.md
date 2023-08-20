<h1 align=center>cadastro-user-back-end</h1>

![Wanndeko-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![Wanndeko-repo-license](https://img.shields.io/github/license/Luk4x/iManager-json-server?style=for-the-badge&logo=unlicense&logoColor=lightgrey)

<h2>Tecnologias🖥️</h2>
<ul>
  <li><a href=https://nodejs.org>Node.Js</a></li>
  <li><a href=https://www.npmjs.com/package/express>Express</a></li>
  <li><a href=https://www.npmjs.com/package/uuid/>uuid</a></li>
  <li><a href=https://www.npmjs.com/>Npm</a></li>
</ul>

<h2>Descrição📃</h2>
<p> Esse projeto é uma api de cadastro de usarios, possui um crud completo,
recebendo o nome do usuario e idade. Serve de Base para a sua interface <a href=https://github.com/Wanndeko/cadastro-user-front>cadastro-user</a>.</p>

<h2>Utiilização🛠️</h2>
<p>get => /users -- traz todos os usarios cadastrados nos array de users</p><br>

<p>post => /users -- recebe os dados name, age do body e adiciona um id unico para depois executar o push para a array de users</p><br>

<p>put => /users/:id -- recebe os dados de name e age do body para a alteração, antes disso a rota chama um middleware que verifica o Id da ordem e caso ele não exista retorna uma mensagem de User not Found com status 404. Se tudo ocorrer bem a alteração é feita.</p><br>

<p>delete => /users/:id -- Com o Id enviado a rota é chamada, mas antes um middlware de verificação de Id é chamado e se tudo estiver correto o usuario é deletado </p><br>

<h2>Executando na Maquina</h2>
<p>Para executar este projeto basta abrir o terminal e digitar git clone copiar e colar o link (https://github.com/Wanndeko/cadastro-user-back-end.git) e teclar enter.
  Com o projeto aberto, no terminal do editor de codigo,
  digite npm install para instalar as dependencias,
  com tudo pronto digite npm run dev e se tudo ocorrer bem ira aparecer a  mensagem 🚚  vamos rodar na porta 3001</p>
