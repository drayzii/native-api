# Native Rwanda NodeJS App template

Template of a NodeJS-Express-Postgres-Sequelize app

## Setup

- Create your repo

- Follow the following instructions to make it a copy of this one
```
// Make a bare clone of the repo

git clone --bare https://github.com/drayzii/node-setup.git

// Move to the created temporary local repo

cd node-setup.git

// Mirror push to new repository

git push --mirror {your repo link here}

cd ..

// Remove our temporary local repository

rm -rf node-setup.git  
```

- Change the default branch to develop. Go to your repo, settings, then branches.

- Clone your repo

```
git clone {your repo link here}
cd {repo-name}
```

- Add ESLint extension in VS Code

- Install sequelize and eslint globally

```
npm install eslint -g
```

```
npm install sequelize -g
```

- Then install all project dependencies

```
npm install
```

- Add a `.env` file to store all our variables.
```
touch .env
```
- Add a postgres database url link to this variable in the `.env` file

```
DEV_DATABASE_URL=
```

- Run the app with the command 
```
npm run dev
```

## Contributors

- Jonathan Shyaka