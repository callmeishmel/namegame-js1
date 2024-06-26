<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://github.com/aspiringx/namegame-js1/assets/11307718/e12fe9a8-b8cc-408e-923b-799168fc71a3" width="250" alt="NameGame Logo"></a></p>
<p align="center">Node • TypeOrm • Koa • REST • GraphQL • TypeScript</p>

## Quick start
1. Clone repo `git clone https://github.com/aspiringx/namegame-js1.git`
2. Run `npm install`
3. Copy `.env.example` as `.env` and populate the database environmental variables.
	  ***NOTE: Node server defaults to port 3000. MYSQL_PORT defaults to 3306.***
4. ***(Optional)*** To build and populate a working development database use the following.
	  *From the project root folder*

	  - `docker compose -f ./docker-mysql-dev.yaml up -d`
	  ***NOTE:*** This creates a simple mysql container with the `MYSQL_` `.env` variable values.
    - Create a new database named `MYSQL_DATABASE` (from .env). When the container from the above step is running, you can connect and do this. 
	  - `npm run migration:run` will build out the database schema.
	  - `npm run schema:seed` will populate the `users`, `groups` and `group_users` tables.
5. Run `npm run watch` to start server in hot reload dev mode.

## DB: Schema
- To build the database schema use the command `npm run migration:run`
- To rebuild the database in case of an entity / schema problem use:
	- `npm run schema:drop` followed by `npm run migration:run`

## DB: Seeding
- To populate the database the command `npm run schema:seed`
	- ***NOTE: Seeder will populate the following tables only if currently empty***
		- Users - 1000 rows with random null email and phone verification dates.
		- Groups - 150 rows and some with a parent_id pointing to another group.
		- GroupUsers - ~10k rows linked to existing users / groups.

## API Documentation
[Postman Public Collection](https://www.postman.com/igdev25/workspace/namegame-js1/collection/32355234-d2081825-2bb1-4031-b8b2-ce2181fd95a2?action=share&creator=32355234)

## GraphQL
The app is set up to use Apollo Server by accessing `localhost:3000/graphql`
```
// There is currently basic schemas to fetch all user and group data with more on the way.
// Query example *(Fields available are based on table schema)

  query {
    users {
      first_name
      last_name
    } 
  }
```

## TODO
The app is stable for branching as of commit [00844a1](https://github.com/aspiringx/namegame-js1/commit/00844a1874a5214f99d8dfa27f00e4cfdf379a3b) - The following list are the planned tasks to make the app production ready:
- API call response structure. (This should be uniform with both REST and GraphQL responses.)
- Error handling policy between controller, service and repository layers.
- Secure app via auth protocol (likely JWT).
- Unit testing.
- Create additional API endpoints once app functionality is better defined.
- Create additional GraphQL endpoints taking into account Entity relations.
- Containerize application to mainstream environment compatibility.
- Turn off Apollo Server sandbox access for production.
