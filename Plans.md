# Planos da nexly:

***
## Planos para alunos:

### RF 
- [ x ] Os alunos podem se cadastrar 
- [ x ] Os alunos podem concluir o cadastro dos dados (Endereço, informações pessoais)
- [ x ] Os alunos podem fazer login com a conta cadastrada 
- [ x ] Os alunos podem comprar cursos
- [ x ] Os alunos podem ver todos os cursos da plataforma
- [ x ] Os alunos podem ter cursos favoritos
- [ x ] Os alunos podem escolher tags 
- [ x ] Os alunos podem dar like nos videos
- [ x ] Os alunos podem ter notificações 
- [ x ] Os alunos podem pesquisar qualquer curso 

- [ ] Os alunos podem ter certificado
- [ ] Os alunos podem alterar a velocidade e a qualidade do video

### RN
- [ x ] Os alunos não podem se cadastrar com um email existente
- [ x ] Os alunos tem que estar com o cadastro completo para poder avançar na plataforma
- [ x ] Os alunos tem que colocar um email existente para fazer login
- [ - ] Os alunos não podem perder o curso comprado 
- [ x ] Ao adicionar como "favoritos", ele deve ter o direito de "desfavoritar"
- [ x ] As notificações tem que serem mostradas se lidas ou não
- [ x ] Caso a Tag não esteja disponivel, ele deve salvar como outros
- [ x ] Ao pesquisar pelo curso, ele pode filtrar por "Produtor", "Tag", ou o "nome do curso"
- [ x ] Caso um aluno não escolha as tags, tem que ser salvo como "Outros"
- [ x ] As notificações antigas tem que ser apagadas.
- [ x ] As notificações tem q serem marcadas como lidas.

- [ ] Os recomendados devem ser baseado nas tags

- [ ] Os alunos não podem compartilhar seu curso
- [ ] O certificado tem que ser liberado ao final de cada curso (Completo)

***
## Planos para produtores:

### RF 
- [ x ] Os produtores podem se cadastrar 
- [ x ] Os produtores podem concluir o cadastro dos dados (Endereço, informações pessoais)
- [ x ] Os produtores podem fazer login com a conta cadastrada 
- [ x ] Os produtores podem criar um curso
- [ x ] Os produtores podem escolher tags de cada curso
- [ x ] Os produtores podem ver todos os cursos da plataforma
- [ x ] Os produtores podem ter notificações
- [ x ] Os produtores podem pesquisar qualquer curso

- [ ] Os produtores podem alterar a velocidade e a qualidade do video

- [ ] Os produtores podem criar certificados para seus cursos
- [ ] Os produtores podem ver e responder os comentários feitos
- [ ] O material do curso pode ser disponibilizados para seus alunos 

### RN
- [ x ] Os produtores não podem se cadastrar com um email existente
- [ x ] Os produtores tem que estar com o cadastro completo para poder avançar na plataforma
- [ x ] Os produtores precisam estar com a assinatura em dia para fazer qualquer coisa na plataforma
- [ x ] Os produtores tem que colocar um email existente para fazer login
- [ x ] Os produtores só podem criar um curso se a conta não estiver suspensa
- [ x ] As Tags do curso se não cadastradas, podem ser "outros"
- [ x ] Apenas os produtores podem ver suas notificações.
- [ x ] Quando ele ler a notificação, tem que ir para o campo de "lidas".
- [ x ] Cada notificação tem um tempo de vida para ser apagada.

- [ ] Se tem certificado, ou não, tem que aparecer no dash do curso
- [ ] As notificações dos produtores devem servir para: Situação da conta, Likes, Comentários e afins...
- [ ] Apenas o produtor do curso e seus alunos devem poder comentar naquele curso 


### RNF
- [ x ] O banco de dados tem que abrir e fechar a conexão sempre
- [ ] Ao usar a recuperação de senha, use o REDIS, para verificar a qntdade de tentativas
- [ ] Os cursos presentes na plataforma tem que estar de 5 em 5min no REDIS para evitar congestionamento 
- [ ] A aplicação tem que se proteger de XSS e DDoS
- [ ] Sempre renderizar os erros de forma correta 
- [ ] Refatorar todos os controllers com Try/Catch
- [ ] Troque as senhas de banco e etc.
