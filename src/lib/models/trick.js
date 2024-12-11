export class Trick {
    constructor(
        trickTitle = "",
        trickDescription = null,
        trickLink = "",
        trickVideo = "",
        category = null
    ) {
        this.trickTitle = trickTitle;
        this.trickDescription = trickDescription;
        this.trickLink = trickLink;
        this.trickVideo = trickVideo;
        this.category = category

    }
}