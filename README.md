
# **API de Envío de Correos**

Esta es una API creada con [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/) para enviar correos electrónicos utilizando [Resend](https://resend.com).

---

## **Características**

- Envío de correos electrónicos mediante un endpoint seguro.
- Configuración de credenciales y destinatarios a través de variables de entorno.
- Uso de [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) para solicitudes de diferentes orígenes.

---

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org) (versión 14 o superior).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).
- Una cuenta en [Resend](https://resend.com) para obtener tu API Key.

---

## **Instalación**

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd tu-repo
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
   ```env
   RESEND_API_KEY=tu-api-key-de-resend
   EMAIL_FROM=no-reply@tudominio.com
   EMAIL_TO=destinatario@correo.com
   PORT=3000
   ```

---

## **Uso en local**

1. **Inicia el servidor:**
   ```bash
   node api/index.js
   ```

2. **Accede a la API en:**
   ```
   http://localhost:3000
   ```

---

## **Endpoints**

### **1. `GET /`**

- **Descripción:** Verifica que el servidor esté funcionando correctamente.
- **Respuesta de ejemplo:**
  ```json
  {
    "message": "Express on Vercel!!"
  }
  ```

---

### **2. `POST /api/send-email`**

- **Descripción:** Envía un correo electrónico utilizando Resend.
- **Cuerpo de la solicitud:** Debe enviarse en formato JSON.
  ```json
  {
    "user_name": "Tu Nombre",
    "user_email": "tu-email@gmail.com",
    "subject": "Asunto del correo",
    "message": "Este es el contenido del mensaje."
  }
  ```

- **Respuesta exitosa:**
  ```json
  {
    "message": "Email enviado con éxito."
  }
  ```

- **Errores posibles:**
  - Si falta algún dato en el cuerpo de la solicitud:
    ```json
    {
      "message": "Error al enviar el correo."
    }
    ```

---

## **Despliegue en Vercel**

1. **Configura las variables de entorno en Vercel**:
   Ve a `Settings > Environment Variables` en tu proyecto en Vercel y añade las siguientes variables:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`

2. **Despliega el proyecto:**
   - Desde la línea de comandos:
     ```bash
     vercel
     ```

   - O conecta tu repositorio en el dashboard de [Vercel](https://vercel.com).

---

## **Licencia**

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).