// we use extends to create a child class
// Inside this child class, we can use a constructor which 
//will take the same arguments that the bird object take
// we use super() to transfer all the properties of the parent class 

class Bird extends BaseClass {
  constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
   
  }

  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}


// the first argument is for the image
  //2nd and 3rd are for position
  // 4th and 5th are for width and height 
  