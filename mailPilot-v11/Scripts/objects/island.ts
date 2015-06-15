/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "island");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

          
            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
        
            this.image.x -= this.dx;
            if (this.image.x < -1 * (this.width)) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.width + this.stage.canvas.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}