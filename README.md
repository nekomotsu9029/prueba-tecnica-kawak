# Prueba técnica Full Stack Developer - KAWAK

## Api para escribir un archivo en disco

* **Requerimientos**: _Exponga una API con un método POST, que permita tomar los datos que ingresan y guarde los datos en un archivo en disco. La aplicación debe manejar excepciones, y en caso de que por ejemplo, la ruta del archivo donde se va a guardar la información no exista, tiene que devolver una excepción y un mensaje de HTTP adecuado._

* **Endpoint**: /api/write

* **Method**: POST

* **Body**: {
    "file_name": String,
    "content": String,
    "extension": String
}

## Explicar conceptualmente cómo funciona WebSockets o una tecnología similar

* _WebSocket puede entenderse como un canal de comunicación abierto, en el cual queda abierta una conexión activa tras el establecimiento de comunicación inicial entre el cliente y el servidor. Así, el servidor también puede enviar información nueva al cliente sin que este tenga que solicitarlo previamente cada vez._

## Describir cómo es el flujo de datos entre dos componentes en una aplicación VueJS (Un componente que llama a otro).

## ¿Qué es en VueJS el Virtual DOM?

* _El modelo de objetos de documento, o DOM, es un tipo de interfaz que trata todo el lenguaje de marcado (su HTML) como nodos conectados. El Virtual DOM en VueJs es una abstraccion del DOM tradicional y se encuentra entre el DOM real y la instancia de Vue, El Virtual DOM está hecho de componentes de Vue, que son objetos de JavaScript que amplían la instancia de Vue, este ultimo se usa debido a la gran diferencia en velocidad y eficiencia en comparación con el DOM real ya que es más pequeño que el DOM real, por lo que es muy eficiente._