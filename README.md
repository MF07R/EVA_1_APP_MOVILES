# Login App  con React Native

aplicacion movil desarrollada con React Native + Expo que implementa un sistema basico de autenticacion con navegacion entre pantallas.

este proyecto fue creado con fines educativos para practicar: 

- navegacion con expo Router
- paso de parametros entre pantallas
- uso de hooks en React Native

## caracteristicas

* pantalla de login con validacion
* navegacion con Expo Router
* paso de datos entre pantallas (email)
* pantalla home con mensaje personalizado
* pantalla de perfil
* manejo de errores en el login


## tecnologias utilizadas

* Reac Native
* Expo Router
* TypeScript

# Logica de autenticacion

un sistema de login simulado en el cual: 

* se ingresa un mail y una contraseña
* la contraseña valida es 1234
* si la contraseña es incorrecta, mostrara un error
* si la contraseña es correcta, el usuario sera redirigido a la pantalla principal
* el email se pasa como parametro a otras pantallas usando useLocalSearchParams




# Estructura del proyecto

/app
....../(tabs)
   ............index.tsx -------> Pantalla Home
   ............profile.tsx ------>Pantalla Perfil
   .......... _layout.tsx ------>Configuración de tabs
  index.tsx ----------->Login
  _layout.tsx --------->Navegación principal
  modal.tsx ---------->Pantalla modal

/components
/constants
/assets






# Instalacion y ejecucion

este proyecto utiliza yarn como gestor de paquetes

1. clona el repositorio: 

    git clone https://github.com/MF07R/EVA_1_APP_MOVILES.git

2. entra al proyecto: 

     cd EVA_1_APP_MOVILES.git

3. instala dependencias: 

     yarn install

4. Ejecuta la App

      yarn expo start

5. se puede abrir en: 

     * Android
     * IOS
     * Expo Go


## Flujo de la aplicacion

- usuario ingresa email y contraseña
- se valida la contraseña
- si contraseña es correcta --> navega a tabs
- se muestra mensaje de bienvenida con el email
- puede navegar entre home y profile
- si contraseña es erronea --> mensaje de error

### Autora

Maria Fernanda Rojas
https://www.youtube.com/watch?v=64AVtYsjTM4
