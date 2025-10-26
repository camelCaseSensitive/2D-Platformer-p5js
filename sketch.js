// Function for generating rectangles
function rectangle(x, y, w, h){
  return({
    x: x,
    y: y,
    w: w,
    h: h,
    draw: function(){
      // fill(70, 140, 70)
      noFill()
      stroke(0)
      rect(this.x, this.y, this.w, this.h)
    }
  })
  
}

function preload() {
  attack1 = [
    loadImage("sprites/individual_sprites/adventurer-attack1-00.png"),
    loadImage("sprites/individual_sprites/adventurer-attack1-01.png"),
    loadImage("sprites/individual_sprites/adventurer-attack1-02.png"),
    loadImage("sprites/individual_sprites/adventurer-attack1-03.png"),
    loadImage("sprites/individual_sprites/adventurer-attack1-04.png")
  ];
  attack2 = [
    loadImage("sprites/individual_sprites/adventurer-attack2-00.png"),
    loadImage("sprites/individual_sprites/adventurer-attack2-01.png"),
    loadImage("sprites/individual_sprites/adventurer-attack2-02.png"),
    loadImage("sprites/individual_sprites/adventurer-attack2-03.png"),
    loadImage("sprites/individual_sprites/adventurer-attack2-04.png"),
    loadImage("sprites/individual_sprites/adventurer-attack2-05.png")
  ];
  attack3 = [
    loadImage("sprites/individual_sprites/adventurer-attack3-00.png"),
    loadImage("sprites/individual_sprites/adventurer-attack3-01.png"),
    loadImage("sprites/individual_sprites/adventurer-attack3-02.png"),
    loadImage("sprites/individual_sprites/adventurer-attack3-03.png"),
    loadImage("sprites/individual_sprites/adventurer-attack3-04.png"),
    loadImage("sprites/individual_sprites/adventurer-attack3-05.png")
  ];
  ledgeclimb = [
    loadImage("sprites/individual_sprites/adventurer-crnr-clmb-00.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-clmb-01.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-clmb-02.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-clmb-03.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-clmb-04.png"),
  ];
  ledgegrab = [
    loadImage("sprites/individual_sprites/adventurer-crnr-grb-00.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-grb-01.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-grb-02.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-grb-03.png")
  ];
  ledgejump = [
    loadImage("sprites/individual_sprites/adventurer-crnr-jmp-00.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-jmp-01.png"),
    loadImage("sprites/individual_sprites/adventurer-crnr-jmp-02.png")
  ];
  crouch = [
    loadImage("sprites/individual_sprites/adventurer-crouch-00.png"),
    loadImage("sprites/individual_sprites/adventurer-crouch-01.png"),
    loadImage("sprites/individual_sprites/adventurer-crouch-02.png"),
    loadImage("sprites/individual_sprites/adventurer-crouch-03.png")
  ];
  die = [
    loadImage("sprites/individual_sprites/adventurer-die-00.png"),
    loadImage("sprites/individual_sprites/adventurer-die-01.png"),
    loadImage("sprites/individual_sprites/adventurer-die-02.png"),
    loadImage("sprites/individual_sprites/adventurer-die-03.png"),
    loadImage("sprites/individual_sprites/adventurer-die-04.png"),
    loadImage("sprites/individual_sprites/adventurer-die-05.png"),
    loadImage("sprites/individual_sprites/adventurer-die-06.png")
  ];
  fall = [
    loadImage("sprites/individual_sprites/adventurer-fall-00.png"),
    loadImage("sprites/individual_sprites/adventurer-fall-01.png")
  ];
  hurt = [
    loadImage("sprites/individual_sprites/adventurer-hurt-00.png"),
    loadImage("sprites/individual_sprites/adventurer-hurt-01.png"),
    loadImage("sprites/individual_sprites/adventurer-hurt-02.png")
  ];
  idle = [
    loadImage("sprites/individual_sprites/adventurer-idle-00.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-01.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-02.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-03.png")
  ];
  idleSword = [
    loadImage("sprites/individual_sprites/adventurer-idle-2-00.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-2-01.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-2-02.png"),
    loadImage("sprites/individual_sprites/adventurer-idle-2-03.png")
  ];
  jump = [
    loadImage("sprites/individual_sprites/adventurer-jump-00.png"),
    loadImage("sprites/individual_sprites/adventurer-jump-01.png"),
    loadImage("sprites/individual_sprites/adventurer-jump-02.png"),
    loadImage("sprites/individual_sprites/adventurer-jump-03.png")
  ];
  run = [
    loadImage("sprites/individual_sprites/adventurer-run-00.png"),
    loadImage("sprites/individual_sprites/adventurer-run-01.png"),
    loadImage("sprites/individual_sprites/adventurer-run-02.png"),
    loadImage("sprites/individual_sprites/adventurer-run-03.png"),
    loadImage("sprites/individual_sprites/adventurer-run-04.png"),
    loadImage("sprites/individual_sprites/adventurer-run-05.png")
  ];
  slide = [
    loadImage("sprites/individual_sprites/adventurer-slide-00.png"),
    loadImage("sprites/individual_sprites/adventurer-slide-01.png")
  ];
  roll = [
    loadImage("sprites/individual_sprites/adventurer-smrslt-00.png"),
    loadImage("sprites/individual_sprites/adventurer-smrslt-01.png"),
    loadImage("sprites/individual_sprites/adventurer-smrslt-02.png"),
    loadImage("sprites/individual_sprites/adventurer-smrslt-03.png")
  ];
  endslide = [
    loadImage("sprites/individual_sprites/adventurer-stand-00.png"),
    loadImage("sprites/individual_sprites/adventurer-stand-01.png"),
    loadImage("sprites/individual_sprites/adventurer-stand-02.png")
  ];
}


let jumpPressed = false;

// The player object
// let 

function setup() {
  createCanvas(800, 600);
  rect2 = rectangle(10, height-40, 800, 40)
  rect33 = rectangle(400, height-160, 200, 40)
  rect4 = rectangle(250, height-300, 200, 50)
  rect5 = rectangle(400, 100, 50, 50)
  rect6 = rectangle(150, 160, 50, 50)
  rect7 = rectangle(-200, 2000, 500, 50)
  rects = [rect2, rect33, rect4, rect5, rect6, rect7, rectangle(500, 10, 200, 10)]
  

  p = {
    x: 100,
    y: 100,
    w: 15, 
    h: 37,
    vx: 0,
    vy: 0,
    anim: {
      attack1: attack1,
      attack2: attack2, 
      attack3: attack3, 
      ledgeclimb: ledgeclimb,
      ledgegrab: ledgegrab,
      ledgejump: ledgejump,
      crouch: crouch,  
      die: die,
      fall: fall,  
      idle: idle, 
      idleSword: idleSword, 
      jump: jump,
      run: run,  
      slide: slide, 
      roll: roll,  
      endslide: endslide
    },
    state: "idleSword",
    prevState: "none",
    animFrame: 0,
    animSpeed: 0.1253,
    anticipate: "FLOOR",
    facing: "left",
    onGround: false,
    colliding: false,
    jump: false,
    frameSinceJump: 0,
    draw: function() {
      // if(stand[0].width != )
      // rect(this.x, this.y, this.w, this.h)
      // rect(this.x, this.y, this.w, this.h)

      let frames = this.anim[this.state].length;
      if(this.state != this.prevState){
        this.animFrame = 0;
        this.prevState = this.state;
      }

      if(this.state == "run"){
        // this.animSpeed = abs(this.vx)/20
        // this.animSpeed = max(0.1253, abs(this.vx)/20)
        this.animSpeed = 0.2

      } else {
        this.animSpeed = 0.1253
      }

      if(this.facing == "right") {
        image(this.anim[this.state][floor(this.animFrame)], this.x - 17, this.y)
      } else {
        push()
          translate(this.x + 33, this.y)
          scale(-1, 1)
          image(this.anim[this.state][floor(this.animFrame)], 0, 0)
        pop()
      }

      this.animFrame += this.animSpeed;
      if(this.animFrame > frames){
        this.animFrame = 0
      }
    },
    update: function() {
      if(!this.onGround && p.state != "ledgegrab") {
        this.vy += 0.3;
        if(keyIsDown(LEFT_ARROW)){
          this.vx -= 0.2
          this.facing = "left"
        }
        if(keyIsDown(RIGHT_ARROW)){
          this.vx += 0.2
          this.facing = "right"
        }
        this.vx *= 0.95

        if(this.vy < 0) {
          if(this.state != "ledgejump") this.state = "jump"
        } else {
          this.state = "fall"
          this.frameSinceJump = 0
        }

        if(keyIsDown(UP_ARROW) && (this.state == "jump" || this.state == "ledgejump") && this.frameSinceJump < 10){
          // console.log("FUCK")
          if(this.state == "ledgejump") {
            this.vy -= 0.3
          } else if (this.state = "jump"){
            this.vy -= 0.7
          }
          this.frameSinceJump += 1
        }
      } else if(p.state != "ledgegrab") {
        this.vy = 0;
        
        if(keyIsDown(LEFT_ARROW)){
          this.vx -= 1
          this.state = "run"
          this.facing = "left"
        } 
        if(keyIsDown(RIGHT_ARROW)){
          this.vx += 1
          this.state = "run"
          this.facing = "right"
        } else if(!keyIsDown(LEFT_ARROW)){
          this.state = "idle"
        }
        
        if(keyIsDown(UP_ARROW) && jumpPressed) this.jump = true;
        if(this.jump){
          this.vy = -max(abs(this.vx)*0.5, 3);
          this.jump = false;
          this.onGround = false;
        }
        this.vx *= 0.8
      } else if (p.state == "ledgegrab"){
        this.vy = 0
        if(keyIsDown(DOWN_ARROW)){
          p.state = "fall"
          if(this.facing == "left"){
            p.vx += 1;
          } else {
            p.vx -= 1
          }
        }
        if(keyIsDown(LEFT_ARROW) && this.facing == "right"){
          p.state = "fall"
          p.vx -= 1;
        }
        if(keyIsDown(RIGHT_ARROW) && this.facing == "left"){
          p.state = "fall"
          p.vx += 1;
        }
        if(keyIsDown(UP_ARROW) && jumpPressed){
          p.state = "ledgejump"
          this.vy = -max(abs(this.vx)*0.5, 3);
          this.jump = false;
          this.onGround = false;
        }
      }
      this.y += this.vy;
      this.x += this.vx;
    }
    
  }

  
  origin = {
    x: width/2,
    y: height/2
  }

  center = {
    x: width/2,
    y: height/2
  }
  dx = center.x - p.x;
  dy = center.y - p.y;
}


function draw() {
  background(240, 340, 255);
  
  dx = center.x - p.x;
  dy = center.y - p.y;
  
  if(abs(dx) > 100){
    center.x -= dx - 100 * dx / abs(dx)
  }
  
  if(abs(dy) > 100){
    center.y -= dy - 100 * dy / abs(dy)
  }
  
  translate(origin.x - center.x, origin.y - center.y)
  
  p.colliding = false;
  
  for(let i = 0; i < rects.length; i++){
    let r = rects[i];
    let top = new rectangle(r.x, r.y - 10, r.w, 10)
    let btm = new rectangle(r.x, r.y + r.h, r.w, 10)
    let lt = new rectangle(r.x - 10, r.y, 10, r.h)
    let rt = new rectangle(r.x + r.w, r.y, 10, r.h)
    
    // Draw colliders
    // top.draw()
    // btm.draw()
    // lt.draw()
    // rt.draw()

    // Additional Criteria or Smoother Gameplay
    if(rectCollision(lt, p) ){
      if(p.vx > 0 && p.y + p.h - 10 > top.y + top.h && p.state != "ledgegrab"){
        p.anticipate = "LEFT"
      } else if(p.vx >= 0 && p.vy >= 0 && p.y - top.y < 10) {
        p.state = "ledgegrab"
        p.facing = "right"
        p.y = top.y + 3
        p.x = top.x - p.w - 3
        stroke(1)
        // line(p.x, p.y, p.x, top.y)
        p.vx = 0
      }
    }
    if(rectCollision(rt, p)){
      if(p.vx < 0 && p.y + p.h - 10 > top.y + top.h && p.state != "ledgegrab"){
        p.anticipate = "RIGHT"
      } else if(p.vx <= 0 && p.vy >= 0 && p.y - top.y < 10) {
        p.state = "ledgegrab"
        p.facing = "left"
        p.y = top.y + 3
        p.x = top.x + top.w 
        stroke(1)
        // line(p.x, p.y, p.x, top.y)
        p.vx = 0
      }
      p.anticipate = "RIGHT"
    }
    if(rectCollision(btm, p)) {
      p.anticipate = "CEILING"
    }
    if(rectCollision(top, p)){
      if(p.y + p.h-5 < top.y + top.h && p.vy > 0){
        p.anticipate = "FLOOR"
      }
      p.colliding = true;
    }
    
    // if(rectCollision(lt, p)){
    //   p.anticipate = "LEFT"
    // }
    // if(rectCollision(rt, p)){
    //   p.anticipate = "RIGHT"
    // }
    // if(rectCollision(btm, p)) {
    //   p.anticipate = "CEILING"
    // }
    // if(rectCollision(top, p)){
    //   p.anticipate = "FLOOR"
    // } 
    
    if(rectCollision(p, r) && p.state != "ledgegrab"){
      if(p.anticipate == "FLOOR"){
        p.vy = 0;
        p.y = r.y - p.h 
        p.onGround = true;
        p.colliding = true;
      }
      if(p.anticipate == "CEILING"){
        if(p.vy < 0) {
          p.vy = 0;
          p.y = r.y + r.h
        } 
        p.colliding = true;
      }
      if(p.anticipate == "RIGHT"){
        p.vx = 0;
        p.x = r.x + r.w
        p.colliding = true;
      }
      if(p.anticipate == "LEFT"){
        p.vx = 0;
        p.x = r.x - p.w
        p.colliding = true;
      }
    }
  }
  
  if(!p.colliding){
    p.onGround = false
  }
  
  p.update()
  p.draw()
  for(let i = 0; i < rects.length; i++){
    rects[i].draw()
  }
  jumpPressed = false;


  // Draw camera range
  // circle(origin.x, origin.y, 10)
  // circle(center.x, center.y, 10)
  // push()
  //   noFill()
  //   rect(center.x - 100, center.y - 100, 200, 200)
  // pop()
}

function keyPressed(){
  if(keyCode == 38){
    jumpPressed = true;
    if(p.onGround) p.jump = true;
  } 
}

function keyReleased(){

  // Prevents double jump effect
  if(keyCode == 38 && p.state == "jump"){
    p.frameSinceJump = 10;
  }
}

function rectCollision(r1, r2){
  if (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.h + r1.y > r2.y
  ) {
    return true
  } else {
    // No collision
    return false
  }

}
