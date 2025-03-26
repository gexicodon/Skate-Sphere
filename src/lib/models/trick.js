export class TrickContent {
    constructor(
        trickTitle = "",
        trickDescription = null,
        slug = "",
        trickVideo = "",
        category = null,
        content = ""
    ) {
        this.trickTitle = trickTitle;
        this.trickDescription = trickDescription;
        this.slug = slug;
        this.trickVideo = trickVideo;
        this.category = category;
        this.content = content;

    }
}