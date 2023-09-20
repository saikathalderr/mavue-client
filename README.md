This is a small app for creating, assigning & sibmitting articles.
you can create a user, assign any chapter to that user. Also submit the answer.

how to start?
- First clone this and backend repo.
		- https://github.com/saikathalderr/mavue-backend
			- open in vs code & create a `.env` file
			- you need to add a postgres db url in it .env, if you have postgres in your local, then add it on .env file like this **or else follow the next point** `DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres` (then run `npm install` & `npx prisma db push` & `npx prisma db seed`
			- if you dont have postgres in your local, you can use my cloud postgress `DATABASE_URL=postgres://zxipjzli:0IExXovImiTWnUzzwdPeVTZWi59TjpsX@bubble.db.elephantsql.com/zxipjzli` 🤫 (then run `npm install`)
			- now run `npm run start`
			- the server should start at `http://localhost:4000/` it's a graphql studio, so you can play with it from accessing in this host.

- <https://github.com/saikathalderr/mavue-client>
			- open is vs code & create a `.env` file
			- add the `SERVER_URL=http://localhost:4000/graphql` to env
			- run `npm install` & run `npm run start`
			- app should open in `http://localhost:3000/`
			- thats it 🫡

note: it's just a dummy app, dont expect it to be practical :)

demo:



https://github.com/saikathalderr/mavue-client/assets/29329128/5ac2cf0a-4f2b-4c59-ac49-40fd245ed4d2

