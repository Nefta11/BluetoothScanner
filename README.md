# BluetoothScanner

Este es un nuevo proyecto de [**React Native**](https://reactnative.dev), creado usando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

Una aplicación para escanear y descubrir dispositivos Bluetooth cercanos en tiempo real.

## Características

- 🔍 Escaneo de dispositivos Bluetooth en tiempo real
- 📱 Compatible con Android
- 🔒 Manejo de permisos automático
- 🎨 Interfaz moderna y responsive
- ⚡ Actualización automática de la lista de dispositivos

## Comenzando

> **Nota**: Asegúrate de haber completado la guía [Configurar tu Entorno](https://reactnative.dev/docs/set-up-your-environment) antes de proceder.

## Paso 1: Iniciar Metro

Primero, necesitarás ejecutar **Metro**, la herramienta de compilación JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecuta el siguiente comando desde la raíz de tu proyecto React Native:

```sh
# Usando npm
npm start

# O usando Yarn
yarn start
```

## Paso 2: Compilar y ejecutar tu aplicación

Con Metro ejecutándose, abre una nueva ventana/panel de terminal desde la raíz de tu proyecto React Native, y usa uno de los siguientes comandos para compilar y ejecutar tu aplicación Android o iOS:

### Android

```sh
# Usando npm
npm run android

# O usando Yarn
yarn android

# O directamente
npx react-native run-android
```

### iOS

Para iOS, recuerda instalar las dependencias de CocoaPods (esto solo necesita ejecutarse en el primer clon o después de actualizar dependencias nativas).

La primera vez que crees un nuevo proyecto, ejecuta el bundler de Ruby para instalar CocoaPods:

```sh
bundle install
```

Luego, y cada vez que actualices tus dependencias nativas, ejecuta:

```sh
bundle exec pod install
```

Para más información, visita la [guía de CocoaPods Getting Started](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Usando npm
npm run ios

# O usando Yarn
yarn ios
```

Si todo está configurado correctamente, deberías ver tu nueva aplicación ejecutándose en el Emulador de Android, Simulador de iOS, o tu dispositivo conectado.

Esta es una forma de ejecutar tu aplicación — también puedes compilarla directamente desde Android Studio o Xcode.

## Paso 3: Modifica tu aplicación

¡Ahora que has ejecutado exitosamente la aplicación, hagamos algunos cambios!

Abre `App.tsx` en tu editor de texto preferido y haz algunos cambios. Cuando guardes, tu aplicación se actualizará automáticamente y reflejará estos cambios — esto es posible gracias a [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

Cuando quieras forzar una recarga, por ejemplo para reiniciar el estado de tu aplicación, puedes realizar una recarga completa:

- **Android**: Presiona la tecla <kbd>R</kbd> dos veces o selecciona **"Reload"** del **Menú de Desarrollador**, accedido vía <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) o <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Presiona <kbd>R</kbd> en el Simulador de iOS.

## Permisos Requeridos

Esta aplicación requiere los siguientes permisos en Android:

- `BLUETOOTH_SCAN` - Para escanear dispositivos Bluetooth
- `BLUETOOTH_CONNECT` - Para conectarse a dispositivos Bluetooth
- `ACCESS_FINE_LOCATION` - Requerido para el escaneo Bluetooth en Android

Los permisos se solicitan automáticamente al usuario cuando se intenta escanear por primera vez.

## ¡Felicitaciones! :tada:

Has ejecutado y modificado exitosamente tu aplicación React Native. :partying_face:

### ¿Qué sigue?

- Si quieres agregar este nuevo código React Native a una aplicación existente, revisa la [guía de Integración](https://reactnative.dev/docs/integration-with-existing-apps).
- Si tienes curiosidad por aprender más sobre React Native, revisa la [documentación](https://reactnative.dev/docs/getting-started).

## Solución de Problemas

Si tienes problemas para que los pasos anteriores funcionen, consulta la página de [Solución de Problemas](https://reactnative.dev/docs/troubleshooting).

### Problemas Comunes

**Error: "Unable to resolve module react-native-ble-plx"**
```sh
npm install react-native-ble-plx
npx react-native run-android
```

**Error: "Timeout waiting to lock build logic queue"**
```sh
cd android
.\gradlew.bat --stop
cd ..
npx react-native run-android
```

## Aprende Más

Para aprender más sobre React Native, echa un vistazo a los siguientes recursos:

- [Sitio Web de React Native](https://reactnative.dev) - aprende más sobre React Native.
- [Comenzando](https://reactnative.dev/docs/environment-setup) - una **visión general** de React Native y cómo configurar tu entorno.
- [Aprende lo Básico](https://reactnative.dev/docs/getting-started) - un **tour guiado** de los **fundamentos** de React Native.
- [Blog](https://reactnative.dev/blog) - lee las últimas publicaciones oficiales del **Blog** de React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - el **repositorio** de GitHub de código abierto para React Native.

## Dependencias Principales

- **react-native-ble-plx**: Para funcionalidad Bluetooth Low Energy
- **react-native**: Framework de desarrollo móvil multiplataforma

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir qué te gustaría cambiar.
