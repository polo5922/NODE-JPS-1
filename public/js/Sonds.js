var music = new BABYLON.Sound("laser", "assets/sonds/laser.wav", scene,
 function () {
  // Sound has been downloaded & decoded
  laser.play();
 }
);
