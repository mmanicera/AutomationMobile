# Automatizacion Web December labs

Proyecto de automatizacion mobile para el formulario get In touch 

## Pre-Requisitos

Tener NodeJS instalado 

Instalar Android studio
Iniciar Device emulator manager

Crear 2 devices llamados Device 1 y Device 2 con Android 11

Ejecutarlos

## Devices elegidos
Pixel 4 y pixel 5 con android 11 
chrome 83

## Instalacion

Install my-project with npm

```bash
  npm install
```



## Running Tests

En una terminal ejecutar:

```bash
appium --chromedriver-executable ".\chromedriver_win32\chromedriver.exe"
```
Esto va a dejar ejecutando el servidor de appium

Luego en otra terminal:
```bash
 node getInTouch.js
```


## Authors

- [@MarcosManicera](https://www.github.com/mmanicera)


## Mejoras a futuro

- Agregar Selectores a un JSON separado a modo de repositorio

- Separar tests para que queden Negativo y positivo (enviar sin campos y enviar con campos correctos en test distintos)

- Agregar chai assertions
