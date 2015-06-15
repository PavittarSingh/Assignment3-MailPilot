module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;

    // Game Constants
    export var CLOUD_NUM: number = 3;
    export var BULLET_NUM: number = 5;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var CONTENT_FONT = "18px Consolas";
    export var CONTENT_COLOUR = "#FFFF00";
    export var PLANE_LIVES = 3;
    export var BULLET_SPEED = 5;

    // Instructions of the game
    export var INSTRUCTIONS: string = "Welcome Player. This Plane now in your hand you have to keep distance from the fireballs and you have to cover the stars from universe. If your plane hit 3 times with fire balls than plane will be crash. ";
}