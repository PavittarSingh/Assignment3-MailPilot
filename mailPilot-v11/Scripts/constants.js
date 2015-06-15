var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;
    // Game Constants
    constants.CLOUD_NUM = 3;
    constants.BULLET_NUM = 5;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.CONTENT_FONT = "18px Consolas";
    constants.CONTENT_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
    constants.BULLET_SPEED = 5;
    // Instructions of the game
    constants.INSTRUCTIONS = "Welcome Player. This Plane now in your hand you have to keep distance from the fireballs and you have to cover the stars from universe. If your plane hit 3 times with fire balls than plane will be crash. ";
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map