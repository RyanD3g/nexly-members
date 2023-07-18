# *Nexly-api Docs* 🚀
***
### Siga as docs de integração para ter **100%** de aproveitamento

#### **Rotas de integração para aplicação** ⤴️ 
***

##### Rotas para alunos:
- *Cadastro*: ` /student/register `
-  *Login*: ` /student/login `
#### 1. Completar cadastro: ` /create/data/student `
  ### Dados necessários: 
`PUT`
```json
{
    "bio":"Teste de biografia",
    "cpf":"Teste de cpf 2",
    "lastname":"Teste de segundo nome",
    "name":"Teste de nome",
    "phone_number":"Teste de número 2",
    "sex":"Teste de sexo"
}
```
    - Precisa de token!

#### 2. Subir imagem de perfil: ` /upload/image/profile/student  `
### Dados necessários:
`PUT`
```json
{
    "file":"arquivo...."
}
```
    - Precisa de token!
#### 3. Cadastrar endereço: ` /create/address/student `
### Dados necessários: 
 `PUT`
```json
{
  "city":"Teste de troca cidade",
  "codeStreet":"Teste de Cep",
  "complement":"Teste de complemento",
  "number":"Teste de número",
  "street":"Teste de rua",
  "uf":"Teste de estado"
}
```

    - Precisa de token!
#### 4. Atualizar endereço: ` /update/address/student/**Id do endereço** `
### Dados necessários:
`PUT`

```json
{
  "city":"Teste de troca cidade",
  "codeStreet":"Teste de troca de Cep",
  "complement":"Teste de troca de complemento",
  "number":"Teste de troca de número",
  "street":"Teste de troca de rua",
  "uf":"Teste de troca de estado"
}

```
    - Precisa de token!

#### 5. Coletar dados de aluno: ` /profile/student/all `
`GET`
`Precisa de token!`

#### 6. Mandar código para o email: ` /recoverPass/student ` 
### Dados necessários:
`POST`
```json
{
	"email":"teste@teste.com"
}
```

#### 7. Validar código enviado ao Email: ` /validatePass/student `
### Dados necessários:
`POST`
```json
{
	"code":"116812"
}
```
    - Essa rota retorna um token!

#### 8. Trocar password: ` /changePassword/student `
### Dados necessários:
` PUT ` 
```json
{
	"newPassword":"teste",
	"confirmNewPassword":"teste"
}
```

#### 9. Escolher tags para perfil: ` /change/tags/student`
### Dados necessários:
` PUT ` 
```json
{
	"tagname":"nome da tag",
}
```

##### Observações:
###### As tags tem que ser tags já prontas feitas pelo frontend, o usuário não pode criar tags próprias.
.
#### 10. Comprar curso: ` /buy/course/student/ id do curso`
### Método:
` Post ` 
##### Observações:
###### Ainda não foi implantado a função de pagamento real. 
.
#### 11. Ver cursos comprados: ` /courses/list-my-courses/student`
### Método:
` Get ` 
```json
 - Precisa de tocken!
```

#### 12. Favoritar aula: ` /change-favorite/lesson/student`
### Método:
` Post ` 
```json
 - Precisa de tocken!
```
```json
{
    "lessonId":"id da aula favoritada",
    "lessonName":"Nome da aula favoritada",
}
```
#### 13. Ver minhas notificações: ` /my/notifications/student`
### Método:
` Get ` 
```json
 - Precisa de tocken!
```
##### Observações:
###### Após lidas, ela terão um tempo de 10 dias de vida. 
.

#### 14. Dar like em aula: ` /like/course`
### Método:
` Put ` 
```json
 - Precisa de tocken!
```

### Dados necessários:

```json
 {
    "lessonId":"Id da aula",
 }
```
#### 14. Pesquisar curso e filtrar: ` /search/courses`
### Método:
` Post ` 
```json
 - Precisa de tocken!
```

### Dados necessários:

```json
 {
    "filterForCourseName":"Nome do curso (Opicional)",
    "filterForProducer":"Nome do Produtor (Opicional)",
    "filterForTag":"Nome da tag (Opicional)"
 }
```

#### 15. Comentar em aula: ` /comment/lesson/ id do curso/ id da aula`
### Método:
` Post ` 
```json
 - Precisa de tocken!
```

### Dados necessários:

```json
 {
    "commentContent":"Comentário",
 }
```

#### 16. Pegar certificado: ` /courses/completed/`
### Método:
` Post ` 
```json
 - Precisa de tocken!
```

##### Observações:
###### Retornará todos os cursos que estão completos. 
.

#### 17. Deletar conta: ` /delete/account/student`
### Método:
` Put ` 
```json
 - Precisa de tocken!
```

##### Observações:
###### Aágará a conta em 10 dias. 
.

#### 18. Desfavoritar aula: ` /unfavorite/lesson/ id da aula`
### Método:
` Delete ` 
```json
 - Precisa de tocken!
```

#### 19. Criar Ticket: ` /create/ticket`
### Método:
` Delete ` 
```json
 - Precisa de tocken!
```

### Dados necessários:
```json
 {
    "name":"Nome do usuário",
    "number":"Número do usuário",
    "category":"Categoria do problema (Tem que ser definida pelo Frontend)",
    "description":"Descrição do problema",
    "priority":"Prioridade do problema (Definida pelo frontend)"
 }
```

---
## Funções para produtores 
##### Rotas para produtores:
- *Cadastro*: ` /producer/register `
-  *Login*: ` /producer/login `
#### 1. Completar cadastro: ` /create/data/producer `
  ### Dados necessários: 
`PUT`
```json
{
  "bio":"Teste de biografia",
  "cpf":"Teste de cpf 2",
  "lastname":"Teste de segundo nome",
  "name":"Teste de nome",
  "phone_number":"Teste de número 2",
  "sex":"Teste de sexo"
}
```
    - Precisa de token!

#### 2. Subir imagem de perfil: ` /upload/image/profile/producer  `
### Dados necessários:
`PUT`
```json
{
    "file":"arquivo...."
}
```
    - Precisa de token!
#### 3. Cadastrar endereço: ` /create/address/producer `
### Dados necessários: 
 `PUT`
```json
{
  "city":"Teste de troca cidade",
  "codeStreet":"Teste de Cep",
  "complement":"Teste de complemento",
  "number":"Teste de número",
  "street":"Teste de rua",
  "uf":"Teste de estado"
}
```

    - Precisa de token!
#### 4. Atualizar endereço: ` /update/address/producer/**Id do endereço** `
### Dados necessários:
`PUT`

```json
{
  "city":"Teste de troca cidade",
  "codeStreet":"Teste de troca de Cep",
  "complement":"Teste de troca de complemento",
  "number":"Teste de troca de número",
  "street":"Teste de troca de rua",
  "uf":"Teste de troca de estado"
}

```
    - Precisa de token!

#### 5. Coletar dados do produtor: ` /profile/producer/all `
`GET`
`Precisa de token!`

#### 6. Mandar código para o email: ` /recoverPass/producer ` 
### Dados necessários:
`POST`
```json
{
	"email":"teste@teste.com"
}
```

#### 7. Validar código enviado ao Email: ` /validatePass/producer `
### Dados necessários:
`POST`
```json
{
	"code":"116812"
}
```
    - Essa rota retorna um token!

#### 8. Trocar password: ` /changePassword/producer `
### Dados necessários:
` PUT ` 
```json
{
	"newPassword":"teste",
	"confirmNewPassword":"teste"
}
```

#### 9. Criar um curso: ` /course/create/producer ` 
### Dados necessários:
`POST`
```json
{
	"name":"Javascript",
	"urlThumbCourse":"Teste.com",
	"description":"teste de descrição",
	"categorysTag":["Programação", "T.I"],
	"duration":"20h",
	"certificate":true
}
```
    - Precisa de token!

#### 10. Criar módulo do curso criado: ` /module/create/producer/id do curso `
### Dados necessários:
`POST`

```json
{
    "name":"Javascript básico",
    "description":"Daqui pra frente vc aprenderá o básico da linguagem",
    "duration":"3h"
}
```
    - Precisa de token!

#### 11. Criar aulas para o módulo: ` /lesson/create/producer/Id do módulo `
### Dados necessários:
`POST`
```json
{
    "movie":"Arquivo de video mp4, wave",
    "name":"Nome da aula",
    "description":"Descrição da aula",
    "duration":"8min"
}
```
    - Precisa de token!
#### 12. Pegar todos os cursos criados na plataforma: ` /courses/all `
### Dados necessários:
`GET`
```json
- Precisa de token!
```

#### 13. Ver notificações recebidas: `/my/notifications/producer`

### Método:
`GET`


``` json
- Precisa de token!
```

##### **Observações:**
###### Assim que a notificação é lida, automcaticamente vai ser salvo a data em que foi lida, e quando a caixa de notificações for aberta dnv, as notificações com mais de 10 dias serão apagadas
.

#### 14. Deletar um curso: `/delete/course/ id do curso`

### Método:
`Delete`
``` json
- Precisa de token!
```
##### **Observações:**
###### Assim que o curso for apagado, ele dará um prazo de 10 dias. Por de baixo dos panos uma notidicação é enviada aos estudantes que possuem o curso, avisando eles que o curso será deletado. Caso o curso não seja seu, uma mensagem de erro virá como resposta do servidor, avisando que o curso não é seu.
.

#### 15. Cancelar deleção do curso: `/cancel/delete/course/ id do curso`

### Método:
`Put`
``` json
- Precisa de token!
```

##### **Observações:**
###### Caso o curso não exista, ou já tenha sido apagado, ele retorna uma mensagem de erro, avisando que o curso não existe.
.


#### 16. Adicionar material ao curso: `/material/add/ id da aula`

### Método:
`Put`
``` json
- Precisa de token!
```

### Dados necessários:
```json
{
    "material":"Arquivo PDF e/ou .Docx"
}
```

##### **Observações:**
###### Caso a aula não exista, ou já tenha sido apagada, ele retorna uma mensagem de erro, avisando que a aula não existe.
.


#### 17. Excluir material do curso: `/delete/material/ id da aula`

### Método:
`Delete`
``` json
- Precisa de token!
```

##### **Observações:**
###### Caso a aula não exista, ou já tenha sido apagada, ele retorna uma mensagem de erro, avisando que a aula não existe.
.

#### 18. Trocar alguma aula do curso: `/swap/lesson/ id da aula`

### Método:
`Put`
``` json
- Precisa de token!
```
### Dados necessários:
```json
{
    "urlMovie":"Arquivo de video mp4, wave",
    "name":"Nome da aula",
    "description":"Descrição da aula",
    "duration":"8min"
}
```
##### **Observações:**
###### Caso a aula não exista, ou já tenha sido apagada, ele retorna uma mensagem de erro, avisando que a aula não existe. Em caso de erro, ele retornará o status `500`
.

#### 19. Deletar conta pessoal: `/delete/account/producer`

### Método:
`Delete`
``` json
- Precisa de token!
```

##### **Observações:**
###### Caso a conta não exista, ou já tenha sido apagada, ele retorna uma mensagem de erro, avisando que a conta não existe. Por debaixo dos panos os alunos que possuem o curso dele, será avisado por notificação.


## Novas Funções 
### Tickets 🎫 (Chat de resposta com websocket)
#### 1. Responder um ticket (Função apenas do produtor):  `/create/room/ ID DO TICKET`

### Método:
`Post`

#### Dados nescessários:
```json
{
    "nameRoom":"Nome da sala criada"
}
```

```json
- Precisa de Token!
```

##### **Observações:**
###### Chame essa rota junto com os eventos socket descatados logo a seguir.

#### 1.1 Emitir evento de entrada em uma sala: `Use o socket.io`

### Evento de **emmit**: `selectRoom`
### Dentro do emmit enviado ao backend, envie os seguimtes dados:



```json
{
    nameRoom:"Nome da sala"
}
```

```Use token!!```

**Após emitir esse evento, emita o seguinte evento:** `enterRoom` **e não envie nenhum dado, apenas emita o evento.**

##### **Observações:**
###### Após emitir os eventos listados a cima, toda vez que um produtor ou aluno for entrar em uma sala, vai ser necessário esse processo, a unica diferença é que se a sala já existir, não precisa chamar no controller, apenas use o websocket para emitir os eventos e passar os nomes das salas. Não crie salas repetidas, se atente a isso.

#### 1.2 Enviar mensagens (Produtor e aluno): `Use o socket.io`
### Evento de **emmit**: `message`
### Dentro do emmit enviado ao backend, envie os seguimtes dados:

```json
{
    nameRoom:"Nome da sala",
    message:"Menssagem",
}
```

```Use token!!```

### Após isso, escute o evento `newMessage`, para mostrar a mensagem retornada do backend.

#### Após enviar essa mensagem com websocket, por debaixo dos panos, cadastre cada mensagem na rota: `/message/send/ ID DA SALA`

### Método:
`Post`

```Use token!!```

### Dados Nescessários:
```json
{
    user:"Nome do usuário que enviou",
    contentMessage:"Conteúdo da mensagem",
}
```

#### 2. Pegar mensagens anteriormente enviadas naquela sala: `/messages/all/ ID DA SALA`:

### Método:
`Get`

```Use token!!```

#### 3. Listar todas as minhas salas (Produtor): `/room/all`:

### Método:
`Get`

```Use token!!```
