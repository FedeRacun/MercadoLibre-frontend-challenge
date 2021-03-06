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
| β    | `Terminado`          |
| π    | `Mejora tecnica`     |
| π    | `Propuesta a futuro` |
| πΎ    | `Deuda tecnica`      |

## Challenge

### Frontend

- En basea los diseΓ±os dados, construir las siguientes tres vistas:
  - Caja de busqueda ('/') β
  - Resultados de la busqueda ('/items?search=') β
  - Detalle del producto ('/items/:id') β
- Las vistas son navegables de manera independiente β
- Las imagenes y componentes implementan lazy loading π
- El diseΓ±o es responsive a cualquier dispositivo π
- Test unitarios para comprobar la creacion de los componentes π
- Antes de hacer un push, el codigo se formatea y ejecuta los test π
- Agregar ESlint para tener una estructura de codigo en comun π
- Dockerizar el ambiente del Front π
- Cambiar el nombre de las clases de CSS implementando BEM como naming convention πΎ
- Agregar mas test a los componentes πΎ
- Audite el codigo con Lighthouse en modo incognito, orientado a mobile y sobre la pantalla de "Resultados de busqueda", estos fueron los resultados:
  ![image](https://user-images.githubusercontent.com/20817564/143728854-ebb16fde-6026-4b71-9b29-39407f0611f1.png)

### Backend

- Construir los siguientes endpoints para ser utilizados desde las vistas
  - /api/items?q=:query β
    - devolver los resultados en el formato indicado β
  - /api/items/:id β
    - devolver los resultados en el formato indicado β
- Dockerizar el ambiente del Back π

---

## Solucion

### Frontend

El Front se divide en 3 carpetas principales

- core βοΈ

  - Esta carpeta contiene los elementos principales de la aplicacion y los que se visualizan en todo momento. El `index.tsx` llama al componente `<Core/>` y este a la hoja de rutas.
    Dentro de la hoja estΓ‘ el `<Header/>` (que a su vez contiene el searchbar) y despues hay un componente `<PageContainer/>` que cumple una funcion de wrapper/container para que el sitio conserve la misma estructura sin importar la pantalla.

- modules π§©

  - Los modulos vienen a representar todo lo que seria la **entidad** de una pantalla, no solo lo visual. Dentro de estos modulos podriamos encontrar las interfaces, componentes, pantallas y hooks relacionados con la misma.

- shared π
  - Todos los componentes, interfaces, estilos o elementos que podrian reutilizarse en varias partes del sitio se encuentran aquΓ­. El spinner por ej.
  - El unico motivo por el cual esta acΓ‘ la carpeta `/assets` con todos los iconos y logos y no en la carpeta `/public` es por [un error en la version 4.0.0 de react-create-app que aun no esta solucionado](https://github.com/facebook/create-react-app/issues/9870), no me dio el tiempo lamentablemente para probar alternativas

### Backend

En el backend hay 2 actores principales que son los `controllers` y los `models`

- Dentro de `controllers` van a estar todos los archivos encargados de hacer las request a la API de MeLi y de orquestar las distintas consultas que lleguen a los endpoints
- Los controllers una vez que ya hayan obtenido la data desde la API, se lo pasan a los `models` para que estos la devuelvan en el formato requerido.

Despues hay otros componentes como el `routes.js` que es donde se van a definir los endpoints, el `config.js`que es donde vamos a poder setear la configuracion de nuestro servidor, como el puerto por ej. u otras variables de entorno, y hay una carpeta `/utils` que es donde almacenaremos todas aquellas funciones que puedan ser reutilizadas en distintas partes del back

# Screenshot

#### Searchbar
![image](https://user-images.githubusercontent.com/20817564/143826192-c9b2662e-8855-41e8-befe-b6889a55fdee.png)


#### Product List
![image](https://user-images.githubusercontent.com/20817564/143826035-d607445a-afdf-4b15-8627-17f1d1058f85.png)

#### Product Detail
![image](https://user-images.githubusercontent.com/20817564/143825883-da58c1c5-16f3-431a-8058-d8b5f75da8e2.png)
