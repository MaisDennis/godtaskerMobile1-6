
Confirm/index.js

  O problema que estava tendo no Confirm (React Native Camera).

  Fala @Marcelo Augusto, cara eu tive exatemente esse problema, exatamente com a lib para tirar foto, eu resolvi no meu projeto removendo a pasta android/app/src/debug e adicionei o trecho 'android:usesCleartextTraffic="true" ' dentro da tag application no arquivo android/app/src/main/AndroidManifest.xml
  Depois que eu fiz isso minha requisição funcionou.

Icons:

  from: GoStack > Iniciando aplicativo mobile > Input & Button

  add to Android > app > build.gradle

  project.ext.vectoricons = [
    iconFontNames: ['Feather.ttf']
  ];

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Color palette
  1.  #444444
  2.  #5edc1f green apple
  3.  #F5F5F5
  3.  #fff
  4.  #fff44f yellow cattleya
  5.  #ffdd33 yellow Bell Pepper
  6.  #ff0f0f red alert
  7.  #f64C75
  8.  #009966
  9.  #beef69 green cow
  10. #ffeaac yellow canary

  11. #73c479
  12. #73a6c4
  13. #c49173
  13. #c47773
  14. #c473be
  15. #c4c473
