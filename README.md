# TALLER 1 - TÓPICOS ESPECIALES I

## API TASKS

Con esta API REST usted podrá crear, actualizar, consultar y borrar tareas, las cuales estan compuestan por las siguientes propiedades:

- _description (texto):_ representa la descripción de la tarea.
- _userId (ID referencia al campo userId de la clase user):_ ID de quien creó la tarea.
- _createdAt (fecha y hora):_ fecha de creación calculada automaticamente, no es necesario enviarla.
- _updatedAt (fecha y hora):_ fecha de modificación calculada automaticamente, no es necesario enviarla.
  Ademas como lo dice el campo userId, podrá realizar estas mismas para usuarios, aqui sus propiedades:
- _firstname (texto):_ representa el nombre de usuario.
- _lastname (text):_ representa el apellido del usuario
- _lastname (email)):_ representa el correo electronico del usuario
- _userId (ID):_ Identificador único, calculado automaticamente, no es necesario enviarlo.
- _createdAt (fecha y hora):_ fecha de creación calculada automaticamente, no es necesario enviarla.
- _updatedAt (fecha y hora):_ fecha de modificación calculada automaticamente, no es necesario

Pasos para hacer uso de la API:

1. clonar el repositorio.
2. npm install.
3. npm run dev o npm start.

**nota:** _Tener en cuenta que este proyecto fue realizado con nodejs v. 10 (Instalarlo si aun no lo tiene)_

Esta API cumple con lo lineamientos del contrato REST, para hacer uso de los metodos GET, POST, PUSH, DELETE, se utiliza como origen http://localhost:3000/api/v1/user/ y http://localhost:3000/api/v1/tasks/
