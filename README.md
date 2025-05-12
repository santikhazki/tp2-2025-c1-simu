# API TP2 - Mflix

Esta API permite consultar usuarios y películas de la base de datos MongoDB (Mflix).

## Endpoints disponibles

### Usuarios
- `GET /api/users`  
  Retorna todos los usuarios.
- `GET /api/users/:id`  
  Retorna el usuario con el ID especificado.

### Películas
- `GET /api/movies`  
  Retorna todas las películas (paginado, ver abajo).
- `GET /api/movies/:id`  
  Retorna la película con el ID especificado.

#### Paginado de películas
Puedes obtener resultados paginados usando los parámetros `pageSize` y `page`:

```
GET /api/movies?pageSize=10&page=2
```
- **pageSize**: cantidad de películas por página (opcional, por defecto 10)
- **page**: número de página (opcional, por defecto 1)

La respuesta incluye:
```json
{
  "data": [ ...películas... ],
  "total": 1000,
  "page": 2,
  "pageSize": 10,
  "totalPages": 100
}
```

## Ejemplo de uso
```bash
curl http://localhost:3001/api/movies?pageSize=5&page=1
curl http://localhost:3001/api/users
```

---

## Variables de entorno
Asegúrate de definir en Azure o localmente:
- `MONGODB_URI` (cadena de conexión a MongoDB Atlas)
- `PORT` (puerto, por defecto 3000 o 3001)

---

## Deploy
Puedes desplegar fácilmente en Azure App Service, Railway, Render, etc. Ver instrucciones en el código fuente o consultar a tu docente.
