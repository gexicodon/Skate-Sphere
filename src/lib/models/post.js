export class Post {
    constructor(
        title="",
        description = null,
        cover = null,
        created = new Date().toISOString().slice(0, 10),
        published = true, 
        content = null,
        link = ""
    )  {
        this.title = title;
        this.description = description;
        this.cover = cover;
        this.created = created;
        this.published = published;
        this.content = content;
        this.link = link;
    }
}