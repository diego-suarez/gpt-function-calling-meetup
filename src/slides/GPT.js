import React from 'react';
import wat from '../images/wat.jpeg';

function GPT() {
  return (
    <section>
      <section>
        <h2>GPT API&apos;s</h2>
        <ul>
          <li>Modelos GPT</li>
          <li>Recorrido por las API&apos;s de GPT</li>
        </ul>
      </section>

      <section>
        <h2>Modelos GPT</h2>
        <ul>
          <li>Modelos grandes de lenguaje</li>
          <li>Entrenados con mucho texto</li>
          <li>Predicen las próximas palabras</li>
        </ul>
      </section>

      <section>
        <h2>Historia de las API&apos;s de GPT</h2>
        <img src={wat} alt="wat" loading="lazy" />
      </section>

      <section>
        <h2>Historia de las API&apos;s de GPT</h2>
        <ul>
          <li>Text completion</li>
          <li>Chat completion</li>
          <li>System prompt</li>
          <li>Chat completion con Function calling</li>
        </ul>
      </section>

      <section>
        <h3>Text completion</h3>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <pre>
              <code data-trim data-noescape className="language-py">
                {`
            response = openai.Completion.create(
              model="text-davinci-003",
              prompt="Estoy en el 2023. Cuál será el próximo año bisiesto?"
            )
          `}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="language-json">
                {`
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "text": "\n\nEl 2024 será el próximo año bisiesto."
    }
  ],
  "created": 1687803840,
  "id": "cmpl-7VlAWXWFzjJL6zuNI6LQzB4qL3z1s",
  "model": "text-davinci-003",
  "object": "text_completion",
  "usage": {
    "completion_tokens": 16,
    "prompt_tokens": 20,
    "total_tokens": 36
  }
}
          `}
              </code>
            </pre>
          </div>
          <div>
            <ul>
              <p>Modelo más &apos;crudo&apos;</p>
              <p>Generación</p>
              <p>Clasificaciones simples</p>
              <p>No conversacional</p>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3>Chat completion</h3>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <pre>
              <code data-trim data-noescape className="language-py">
                {`
            response = openai.ChatCompletion.create(
              model="gpt-3.5-turbo",
              messages=[
                {
                  "role": "user",
                  "content": "Estoy en el 2023. Cuál será el próximo año bisiesto?"
                }
              ]
            )
          `}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="language-json">
                {`
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "El próximo año bisiesto será 2024.",
        "role": "assistant"
      }
    }
  ]
          `}
              </code>
            </pre>
          </div>
          <div>
            <ul>
              <li>Conversacional</li>
              <li>Difícil darle instrucciones</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>System prompt</h3>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <pre>
              <code data-trim data-noescape className="language-py">
                {`
            response = openai.ChatCompletion.create(
              model="gpt-3.5-turbo",
              messages=[
                { "role": "system", "content": f"""
                  Eres un asistente de calendario.
                  El usuario te hará preguntas y solo responderás con el año que te piden, sin ninguna explicación.
                  Solo responde con el año.
                  Hoy es: {date.today()}
                """ },
                { "role": "user", "content": "Cuál será el próximo año bisiesto?" }
              ]
            )
          `}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="language-json">
                {`
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "2024.",
        "role": "assistant"
      }
    }
  ]
}
          `}
              </code>
            </pre>
          </div>
          <div>
            <ul>
              <li>Separación entre mensajes y contexto + instrucciones</li>
              <li>Conversacional</li>
              <li>No tan fiable en el formato</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default GPT;
