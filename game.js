let config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    backgroundColor: '#ffffff',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

let arrowDown;
let arrowDownForward;
let arrowForward;
let punchButton;
let messageInstructions;
let soundRythim;
let hadokenSoundSF2;
let cursors;
let keys;
let keySpace;
let keyEnter;

function preload(){
    this.load.image('downArrow', 'assets/downArrowWhite.png');
    this.load.image('downForwardArrow', 'assets/diagonalRightArrowWhite.png');
    this.load.image('rightArrow', 'assets/rightArrowWhite.png');
    this.load.image('punchIcon', 'assets/punch.png');

    this.load.audio('hadokenSound', 'assets/hadouken.mp3');
}

function create(){
    //SPRITES
    arrowDown = this.add.image(150, 300, 'downArrow');
    arrowDownForward = this.add.image(300, 300, 'downForwardArrow');
    arrowForward = this.add.image(450, 300, 'rightArrow');
    punchButton = this.add.image(700, 300, 'punchIcon');

    //INPUTS
    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    
    //SOUNDS
    hadokenSoundSF2 = this.sound.add('hadokenSound')
}

function update(){
    gameDirections();

    if(keySpace.isDown || keyEnter.isDown){
        punchButton.tint = 0xff0000;
        hadokenSoundSF2.play();
    }else{
        punchButton.clearTint();
    }
}

function gameDirections(){
    let downBool = false;
    let forwardBool = false;
    let downForwardBool = false;
    
    //----------
    //KEYBOARD
    //---------

    //DOWN
    if(cursors.down.isDown){
        downBool = true;
    }else{
        downBool = false;
    }
        
    //FORWARD
    if(cursors.right.isDown){
        forwardBool = true;
    }else{
        forwardBool = false;
    }

    //DOWNFORWARD
    if(cursors.down.isDown && cursors.right.isDown){
        downBool = false;
        forwardBool = false;
        downForwardBool = true;
    }else{
        downForwardBool = false;
    }

    //------
    //GAME
    //-----

    //DOWN
    if(downBool){
        arrowDown.tint = 0xff0000;
        console.log('d');
    }else{
        arrowDown.tint = 000000;
    }

    //FORWARD
    if(forwardBool){
        arrowForward.tint = 0xff0000;
        console.log('f');
    }else{
        arrowForward.tint = 000000;
    }

    //DOWNFORWARD
    if(downForwardBool){
        arrowDownForward.tint = 0xff0000;
        console.log('df');
    }else{
        arrowDownForward.tint = 0x000000;
    }
}