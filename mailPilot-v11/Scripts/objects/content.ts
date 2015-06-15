/// <reference path="../constants.ts" />
module objects {
    export class Content extends createjs.Text {
        constructor(x: number, y: number, contentText: string) {
            super(contentText, constants.CONTENT_FONT, constants.CONTENT_COLOUR);
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.lineWidth = stage.canvas.width - (this.x * 2);
            this.lineHeight = 20;
        }
    }
}  