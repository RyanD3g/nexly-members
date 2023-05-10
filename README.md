# *Nexly-api Docs* 🚀
***
### Siga as docs de integração para ter **100%** de aproveitamento

#### **Rotas de integração para aplicação** ⤴️ 
***

##### Rotas para alunos:
- *Cadastro*: ` /student/register `
-  *Login*: ` /student/login `
#### 1. *Completar cadastro*: ` /create/data/student `
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

#### 2. *Subir imagem de perfil*: ` /upload/image/profile/student  `
### Dados necessários:
`PUT`
```json
{
    "file":"arquivo...."
}
```
    - Precisa de token!
#### 3. *Cadastrar endereço*: ` /create/address/student `
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
#### 4. *Atualizar endereço*: ` /update/address/student/**Id do endereço** `
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
---
##### Rotas para produtores:
- *Cadastro*: ` /producer/register `
-  *Login*: ` /producer/login `
#### 1. *Completar cadastro*: ` /create/data/producer `
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

#### 2. *Subir imagem de perfil*: ` /upload/image/profile/producer  `
### Dados necessários:
`PUT`
```json
{
    "file":"arquivo...."
}
```
    - Precisa de token!
#### 3. *Cadastrar endereço*: ` /create/address/producer `
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
#### 4. *Atualizar endereço*: ` /update/address/producer/**Id do endereço** `
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
