export class Point {
    constructor(
        title = '',
        latitude = '',
        longitude = '',
        slug = '',
        description = '',
        image = ''
    ) {
        this.title = title;
        this.latitude = latitude;
        this.longitude = longitude;
        this.slug = slug;
        this.description = description;
        this.image = image;
    }
}