class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("tree.png");
        this.image.scale = 0.1;
    }
display(){
    
    imageMode(CENTER);
    var pos1 = this.tree.position.x;
    var pos2 = this.tree.position.y;
    image(this.image,pos1,pos2,600,600);
}
}