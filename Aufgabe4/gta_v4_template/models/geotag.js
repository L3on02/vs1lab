// File origin: VS1LAB A3

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/** * 
 * A class representing geotags.
 * GeoTag objects should contain at least all fields of the tagging form.
 */
class GeoTag {
    #name      = "";
    #hashtag   = "";
    #longitude = 0;
    #latitude  = 0;
    #id        = 0;

    constructor(latitude,longitude,name,hashtag,id) {
        this.#name = name;
        this.#hashtag = hashtag;
        this.#longitude = longitude;
        this.#latitude = latitude;
        this.#id = id;
    }

    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            latitude: this.#latitude,
            longitude: this.#longitude,
            hashtag: this.#hashtag
        }
    }
    get name() {
        return this.#name;
    }
    get hashtag() {
        return this.#hashtag;
    }
    get latitude() {
        return this.#latitude;
    }
    get longitude() {
        return this.#longitude;
    }
    get id() {
        return this.#id;
    }
    set name(arg) {
        this.#name = arg;
    }
    set hashtag(arg) {
        this.#hashtag = arg;
    }
    set latitude(arg) {
        this.#latitude = arg;
    }
    set longitude(arg) {
        this.#longitude = arg;
    }
    set id(arg) {
        this.#id = arg;
    }
}

module.exports = GeoTag;
