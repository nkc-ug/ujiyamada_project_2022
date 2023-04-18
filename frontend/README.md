## Docker 環境での起動

```
cd frontend/ujiyamada_project_2022_app
docker-compose up
```

## 通常環境での起動

```
cd frontend/ujiyamada_project_2022_app
npx json-server -w ./db/db.json -r ./db/routes.json -p 3003
```

```
cd frontend/ujiyamada_project_2022_app
npm i
npm run dev
```
