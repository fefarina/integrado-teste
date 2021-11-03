
![Integrado](https://www.bis2bis.com.br/wp-content/uploads/2020/06/integrado-parceiro-bis2bis.png)

# 👨🏻‍💻 Integrado Challenge

## 🛠 Stack

Main tools used in this project:


![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)


## ⚠️ Requirements

- Node v12+
- NPM v6.14.8+


## Getting Started
To get you started you can simply clone the repository:

```
git clone git@github.com:fefarina/integrado-teste.git
```
and install the dependencies
```
npm install
```
or

```sh
yarn start
```

### Prerequisites


A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb.

#### MongoDB
The project uses MongoDB as a database.


### Start MongoDB

Ubuntu
```
sudo service mongod start
```

MacOS
```
brew services start mongodb-community@5.0
```

#### Run the script to populate the database
```
yarn run createdb   or   npm run createdb
```

#### Run the application:


```sh
npm start   or   yarn start
```


#### Execute the requests:

List all universities (GET)

````
/universities
````

List university by id (GET)
````
/universities/id
````

List university by country (GET)
````
/universities?country=
````

New university registration (POST)

Body
````
{
  alpha_two_code:"",
  web_pages:"",
  name:"",
  country:"",
  domains:"",
  state-province:""
}
````
````
/universities
````

Update University (PUT)

Body
````
{
  web_pages:"",
  name:"",
  domains:"",
}
````
````
/universities/id
````

Delete University (DELETE)
````
/university/id
````
