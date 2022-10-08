Comando para gerar a chave ssh e adicionala ao git hub
$ ssh-keygen -t ed25519 -C daniellopes0208@hotmail.com
Após as configurações realizadas acessar a pasta onde foi gerada a chave ssh
$ cd /c/Users/DLLM/.ssh

Após pegar a chave ssh publica para adiciona-la no git hub
$ cat id_ed25519.pub

Após iniciar o agente que sera responsavel por gerenciar os acessos a chave
$ eval $(ssh-agent -s)

É após adicionar a chave privada ao agente
$ eval $(ssh-agent -s)




Inicia o react

React-naitive start –reset-cache
$ napm add eslint -D

$ npx eslint --init



Json server
$ Npm add -g json-server
$ npm install -g json-serve


Navigation

Dando problema não reconhecendo modulo tive que baixar esta dependência
$ npm install --save react-native-gesture-handler
Devido um error de hermes, por conta da versão axios esta dando problema, tive que instalar a versão anterior do Axios
(4) Restricted in strict mode, js engine: hermes (React Native + Axios 1.0.0) · Issue #4998 · axios/axios (github.com)
axios - npm (npmjs.com)
$ npm i axios@0.26.0
