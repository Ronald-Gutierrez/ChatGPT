


# Chat GPT 3.5 Web App

Este proyecto es una aplicación web de chat que utiliza la API de GPT-3.5 para proporcionar respuestas basadas en texto a las consultas de los usuarios. La aplicación se desarrolla utilizando React con Vite y se integra con OpenAI's GPT-3 API.

<p align="center">
  <img src="https://github.com/Ronald-Gutierrez/ChatGPT/blob/main/react-chatgpt/src/assets/Screenshot_1.png" alt="Logo_BusGo">
</p>

## Requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/)
- Git: [Descargar e instalar Git](https://git-scm.com/)

## Configuración

1. Clona este repositorio en tu máquina:

   ```bash
   https://github.com/Ronald-Gutierrez/ChatGPT.git

2. Cambia al directorio del proyecto:

   ```bash
   cd ChatGPT
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega tu API key de GPT-3.5. Puedes obtener una clave API de OpenAI registrándote en [OpenAI](https://beta.openai.com/signup/). El contenido del archivo `.env` debe verse así:

   ```plaintext
   OPENAI_API_KEY= TU_API_KEY
   ```

   Reemplaza `TU_API_KEY` con tu clave API.

## Ejecución

Una vez que hayas configurado el proyecto, puedes iniciar la aplicación web con el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador. Puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de JavaScript para la interfaz de usuario.
- [Vite](https://vitejs.dev/) - Build tool para aplicaciones web.
- [OpenAI](https://beta.openai.com/signup/) - Proveedores de la API de GPT-3.5.
```
