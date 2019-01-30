# TALLER 1 y 2 - TÓPICOS ESPECIALES I

## API TASKS CON MONGO DB Y EXPRESS

Con esta API REST usted podrá crear, actualizar, consultar y borrar usuarios y tareas, los cuales estan compuestos por las siguientes propiedades:

Tasks - tareas

- _description (texto):_ representa la descripción de la tarea.
- _userId (ID referencia al campo userId de la clase user):_ ID de quien creó la tarea.
- _createdAt (fecha y hora):_ fecha de creación calculada automaticamente, no es necesario enviarla.
- _updatedAt (fecha y hora):_ fecha de modificación calculada automaticamente, no es necesario enviarla.

User - Usuario
  
- _firstname (texto):_ representa el nombre de usuario.
- _lastname (texto):_ representa el apellido del usuario
- _email (texto):_ representa el correo electronico del usuario
- _userId (ID):_ Identificador único, calculado automaticamente, no es necesario enviarlo.
- _createdAt (fecha y hora):_ fecha de creación calculada automaticamente, no es necesario enviarla.
- _updatedAt (fecha y hora):_ fecha de modificación calculada automaticamente, no es necesario

Pasos para hacer uso de la API:

1. clonar el repositorio.

```shell
git clone https://github.com/antpon007/taller_topicos_tareas
```

2. correr el comando para instalar las dependencias

```shell
npm install
```

3. Cree archivo con el nombre ".env" y coloque las siguientes variables (puerto: cambielo en caso que sea necesario,XXXXXX:usuario y XXXXXXXX:contraseña de la BD dada en clases):

```text
SERVER_PORT=3000
DATABASE_URL =XXXXXX:XXXXXXX123@ds023448.mlab.com:23448/XXXXXX
```

4. ejecutar dependiendo del entorno (desarrollo o producción)
```shell
npm run dev
```
 o 
 
```shell
npm start
```


**nota:** _Tener en cuenta que este proyecto fue realizado con nodejs v. 10 (Instalarlo si aun no lo tiene)_

Esta API cumple con lo lineamientos del contrato REST, para hacer uso de los metodos GET, POST, PUSH, DELETE, se utiliza como origen http://localhost:3000/api/v1/user/ y http://localhost:3000/api/v1/tasks/

# Rutas

## user

| Ruta            | Metodo | Parametros | Body                                | Descripción               |
| --------------- | :----: | ---------: | ----------------------------------- | ------------------------- |
| /api/v1/user      |  GET   |           |                                   | devuelve todos los usuarios creados            |
| /api/v1/user      |  POST  |            | firstname: string, lastname: string, email: string | Crea una nuevo usuario        |
| /api/v1/user/{id} |  GET   | id: string (userId: uid del usuario) |                                    | devuelve el usuario con Id {id}     |
| /api/v1/user/{id} |  PUT   | id: string (userId: uid del usuario)  | description: string, userId: uid del usuario | actualiza el usuario  con Id {id} |
| /api/v1/user/{id} | DELETE | id: string (userId: uid del usuario) |                                    | borra el usuario con Id {id} |

## Tasks

| Ruta            | Metodo | Parametros | Body                                | Descripción               |
| --------------- | :----: | ---------: | ----------------------------------- | ------------------------- |
| /api/v1/tasks      |  GET   |           |                                   | devuelve todas las tareas creadas          |
| /api/v1/tasks      |  POST  |            | description: string, userId: uid del usuario | Crea una nueva tarea        |
| /api/v1/tasks/{id} |  GET   | id: string, userId: uid de la tarea |                                    | devuelve la tarea con Id {id}     |
| /api/v1/tasks/{id} |  PUT   | id: string, userId: uid de la tarea  | description: string, userId: uid del usuario | actualiza la tarea  con Id {id} |
| /api/v1/tasks/{id} | DELETE | id: string, userId: uid de la tarea |                                    | borra la tarea con Id {id} |
