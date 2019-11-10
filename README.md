![Thiago Marinho](https://pbs.twimg.com/profile_banners/41742474/1490016588/1500x500)

# API GraphQL com NodeJS, Server Yoga GraphQL + MongoDB e Mongoose

Este é um tutorial básico de implemetação de um servidor que expôe uma API em GraphQL para frontend fazer um CRUD de usuário.

## Post no blog

[https://www.tgmarinho.com/introducao_ao_graphql_com_nodejs_e_mongodb/](https://www.tgmarinho.com/introducao_ao_graphql_com_nodejs_e_mongodb/)

## Configurar

* Baixe o projeto:

```
1. git clone https://github.com/tgmarinho/graphql-node-blog.git
2. cd graphql-node-blog
```

* Instala as dependências:

```
3. yarn
4. yarn start
```

ou

```
3. npm install
4. npm start
```

Abra a url [http://localhost:4000/](http://localhost:4000/) e comece a brincar:


Queries and Mutations nammed.

```
query myNamedQuery {
  users {
    id
    name
    email
  }
}

mutation createNewUser {
  createUser(name: "Joao", email: "jo@gmail.com") {
    name
    id
  }
}

```

Buscar um usuário com ID específico e retornar o seu nome:

```
{
  user(id: "5dc736d0fb540d5d3b5ca5d8") {
    name
  }
}


```

Retornar nome e email de todos os usuários

```
{
  users {
    name
    email
  }
}

```

Utilize o playground para fazer suas queries e mutations


## Playground Screenshot
![](https://raw.githubusercontent.com/tgmarinho/graphql-node-blog/master/screenshots/graphql_print1.png)


## Author

| ![Thiago Marinho](https://avatars2.githubusercontent.com/u/380327?s=150&v=3)|
|:---------------------:|
|  [Thiago Marinho](https://github.com/tgmarinho/)   |


Thanks!
