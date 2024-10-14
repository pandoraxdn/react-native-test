# React Native

## 1.- Software requerido
- Nodejs https://nodejs.org/en/
- Vscode https://code.visualstudio.com/
- Expo (android) https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share
- Expo (ios) https://apps.apple.com/mx/app/expo-go/id982107779

- Nota: en caso de error en el cual no deje instalar por medio de npm, colocar en el cmd/terminal:
```bash
C:\User\Desktop> npm install -g npm
```

## 2.- Proceso de instalación de React Native

### 2.1.- Creación de carpeta de React Native
```bash
C:\User\Desktop\ReactNative> dir
```

## 3.- Crear mi primera app
```bash
C:\User\Desktop\ReactNative> npx create-expo-app@latest --template blank-typescript myapp
```

### 3.1.- Expo en navegador web
```bash
C:\User\Desktop\ReactNative> npx expo install react-dom react-native-web @expo/metro-runtime
```

### 3.2.- Expo margen de pantalla y notch
```bash
C:\User\Desktop\ReactNative> npx expo install react-native-safe-area-context
```
