# Fetch - API

[![Netlify Status](https://api.netlify.com/api/v1/badges/229100bd-06d6-4223-bd26-7069772d4837/deploy-status)](https://app.netlify.com/sites/jsfetchapi/deploys)

## :earth_americas: Deploy / Demo

- [:globe_with_meridians: :desktop_computer: Backend](https://jsfetchapi.netlify.app/.netlify/functions/server/)
- [:globe_with_meridians: :cloud: Backend / API](https://jsfetchapi.netlify.app/.netlify/functions/server/api/)
- [:globe_with_meridians: :computer: Frontend](https://jsfetchapi.netlify.app/)

## :package: How to install

```sh
  # Clone repo
  git clone https://github.com/devlegacy/fetch-api.git
```

## :rocket: How to use

### :computer: With local node

```sh
  # Install local dependencies
  npm install && npm audit fix
  # Run project
  npm start
```

### :whale2: With docker

```sh
  # Up app
  docker-compose up -d
```

```sh
  # Down app
  docker-compose down
```

### :link: Endpoints

:link: [http://localhost:8080/](http://localhost:8080/)
:link: [http://localhost:8000/](http://localhost:8000/)
:link: [http://localhost:8000/api/](http://localhost:8000/api/)

## :file_folder: Project info

+&nbsp;:open_file_folder: `api-fetch`
&nbsp;|&nbsp;&nbsp;+-- :open_file_folder: `public` Production files
&nbsp;|&nbsp;&nbsp;+-- :open_file_folder: `server` Node API server / Upload files
&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;+-- :open_file_folder: `uploads` Distribution folder for images uploaded
&nbsp;|&nbsp;&nbsp;+-- :open_file_folder: `src` Development source files

## :book: Read about

### API fetch in:

[:link: Fetch API](https://fetch.spec.whatwg.org/#fetch-api)
[:link: HTTP request methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)


[:link: Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

El Intercambio de Recursos de Origen Cruzado (Cross-Origin Resource Sharing) es un mecanismo que agrega unos encabezados (Headers) adicionales HTTP para permitir que un user agent (generalmente un navegador) obtenga permisos para acceder a los recursos de un servidor en un origin distinto (dominio) del que pertenece.

Por ejemplo una solicitud de origen cruzado seria hacer una petición AJAX desde una aplicación que se encuentra en https://dominio-a.com para cargar el recurso https://api.dominio-b.com/data.json.

Por razones de seguridad, los navegadores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un script.

Si necesitamos permitir request desde un dominio diferente al del servidor podemos usar el middleware cors para permitirlo, pero es importante no dejarlo expuesto a todos los dominios.

[:link: Access-Control-Allow-Origin](http://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
[:link: Access-Control-Allow-Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
[:link: Access-Control-Allow-Headers](https://developer.cdn.mozilla.net/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)

### Related to cookies

[:link: Access-Control-Allow-Credentials](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)

[:link: Cookies - Credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

### TypeScript notes

- [Optional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)
- [Non null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)
- [Differences in optional chaining and non null assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#parsing-differences-in-optional-chaining-and-non-null-assertions)

### Webpack notes

- ESBuilder https://dev.to/burhanuday/cut-down-your-webpack-build-times-by-half-2bh6


### Know issues

"fibers": "^5.0.0" - https://sass-lang.com/blog/node-fibers-discontinued
