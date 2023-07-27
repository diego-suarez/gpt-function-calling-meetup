import React from 'react';

function FunctionCalling() {
  return (
    <section>
      <section className="flex flex-col items-center">
        <h2>Function Calling</h2>
        <ul>
          <li>Se definen funciones y sus argumentos</li>
          <li>El modelo elige cuál llamar</li>
          <li>Híbrido entre texto y funciones</li>
          <li>Se puede forzar la llamada</li>
          <li>Las respuestas son estructuradas</li>
          <li>JSON Schema</li>
        </ul>
      </section>
      <section>
        <h3>JSON Schema</h3>
        <pre>
          <code data-trim data-noescape className="language-json">
            {`
            {
              "name": "print_year",
              "description": "Imprime un año en pantalla",
              "parameters": {
                  "type": "object",
                  "properties": {
                      "year": {
                          "type": "integer",
                          "description": "El año a imprimir"
                      }
                  },
                  "required": ["year"]
              },
            }
          `}
          </code>
        </pre>
      </section>
      <section className="flex flex-col items-center">
        <h2>Usos</h2>
        <ul>
          <li>Estructurar/extraer datos de un texto</li>
          <li>Asistentes que pueden ejecutar acciones</li>
          <li>Generar datos estructurados</li>
          <li>Otros?</li>
        </ul>
      </section>
    </section>
  );
}

export default FunctionCalling;
