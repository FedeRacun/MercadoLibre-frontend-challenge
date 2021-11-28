# Frontend Challenge Mercado Libre

#### Pasos para iniciar la aplicacion

- `cd backend/`
- `npm i`
- `cd ..`
- `npm i`
- `npm run project`

##### Referencia

| Icono | Referencia           |
| ----- | -------------------- |
| ✅    | `Terminado`          |
| 🚀    | `Mejora tecnica`     |
| 🔜    | `Propuesta a futuro` |
| 👾   | `Deuda tecnica`  |

## Challenge

### Frontend

- En basea los diseños dados, construir las siguientes tres vistas:
  - Caja de busqueda ('/') ✅
  - Resultados de la busqueda ('/items?search=') ✅
  - Detalle del producto ('/items/:id') ✅
- Las vistas son navegables de manera independiente ✅
- Las imagenes y componentes implementan lazy loading 🚀
- El diseño es responsive a cualquier dispositivo 🚀
- Test unitarios para comprobar la creacion de los componentes 🚀
- Antes de hacer un push, el codigo se formatea y ejecuta los test 🚀
- Agregar ESlint para tener una estructura de codigo en comun 🔜
- Dockerizar el ambiente del Front 🔜
- Cambiar el nombre de las clases de CSS implementando BEM como naming convention 👾
- Audite el codigo con Lighthouse en modo incognito, orientado a mobile y sobre la pantalla de "Resultados de busqueda", estos fueron los resultados:
![image](https://user-images.githubusercontent.com/20817564/143728854-ebb16fde-6026-4b71-9b29-39407f0611f1.png)


### Backend

- Construir los siguientes endpoints para ser utilizados desde las vistas
  - /api/items?q=:query ✅
    - devolver los resultados en el formato indicado ✅
  - /api/items/:id ✅
    - devolver los resultados en el formato indicado ✅
- Dockerizar el ambiente del Back 🔜

