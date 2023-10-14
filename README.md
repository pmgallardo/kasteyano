# kasteyano
**kasteyano** es una herramienta que modifica un texto en español para aplicarle una ortografía simplificada.

Se basa en propuestas existentes de simplificación de la ortografía española, siendo la más célebre la de Gabriel García Márquez en 1997, haciéndo célebre la cita "¡jubilemos la ortografía!".

## Licencia

kasteyano se publica bajo una licencia MIT, por lo que se considera Software Libre y de Código Abierto.

## Tecnología

Está escrito en JavaScript, empleando el marco Node.js.

La idea tras esta elección es facilitar la integración con herramientas web, considerando que es en internet donde más informacíón en lenguaje escrito se puede encontrar.

De cualquier manera se puede exportar fácilmente a aplicación de escritorio a través del marco Electron o similar.

## Instalación

Como prerrequisito se requiere tener instalado el marco Node.js y los npm Express.js y EJS.

Para ejecutarlo en local, se deben copiar en una carpeta todos los ficheros.

Se accede a esta carpeta desde un terminal, y una vez allí se introduce el siguiente comando:

    npm init

Seguir las instrucciones en pantalla para generar el fichero package.json.

Para instalar las dependencias se debe ejecutar:

    npm install express --save

    npm install ejs --save

Para ejecutar el servidor en local:

    node web

Entonces acceder a la URL indicada desde la línea de comando.


## Propuestas

Puesto que no existe una propuesta unificada respecto a la simplificación ortográfica, se ofrecen las siguientes propuestas por separado:

- Eliminación de tildes
- Eliminación de 'h'
- Sustitución de 'v' por 'b'
- Sustitución de 'x' por 'ks'
- Sustitución de 'ca', 'co', 'cu' por 'ka', 'ko' y 'ku'
- Sustitución de 'q' por 'k'
- Sustitución de 'ce' y 'ci' por 'ze' y 'zi'
- Sustitución de 'll' por 'y'
- Escritura solo en mayúsculas
- Escritura solo en minúsculas

Otros cambios que quedan pendientes de implementar:
- Sustitución de 'ce', 'ci' y 'z' por 's'
- Sustitución de 'ge' y 'gi' por 'je' y 'ji'
- Sustitución de 'gue' y 'gui' por 'ge' y 'gi' (solo si se realiza también el cambio anterior)

## Ejemplo

La salida del programa depende de los parámetros que haya marcado el usuario, pues no hay ninguno obligatorio. No obstante, a modo ilustrativo se deja un ejemplo a continuación.

Texto original:

> En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor… Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.

Texto de salida:

> en un lugar de la mancha, de kuyo nombre no kiero akordarme, no a mucho tiempo ke bibia un idalgo de los de lanza en astiyero, adarga antigua, rocin flako y galgo korredor… frisaba la edad de nuestro idalgo kon los zinkuenta años; era de kompleksion rezia, seko de karnes, enjuto de rostro, gran madrugador y amigo de la kaza.
