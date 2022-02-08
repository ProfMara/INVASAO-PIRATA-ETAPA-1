const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, cenario;

var canvas, angle, torre, solo, canhao;

function preload() {
    cenario = loadImage("./assets/background.gif");
    torreImg = loadImage("./assets/tower.png");
}

function setup() {

    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true
    }

    solo = Bodies.rectangle(0, height - 1, width * 2, 1, options);
    World.add(world, solo);

    torre = Bodies.rectangle(160, 350, 160, 310, options);
    World.add(world, torre);

}

function draw() {
    image(cenario, 0, 0, 1200, 600)
    Engine.update(engine);


    rect(solo.position.x, solo.position.y, width * 2, 1);


    push();
    imageMode(CENTER);
    image(torreImg, torre.position.x, torre.position.y, 160, 310);
    pop();
}