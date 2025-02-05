class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state (state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(bookName), 1)
        }
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark (mark, item) {
        if (mark < 2 || mark > 5) {
            return false;
        }

        if (!this.marks.hasOwnProperty(item)) {
            this.marks[item] = [];
        }

        this.marks[item].push(mark);
    }

    getAverageBySubject (item) {
        if (!this.marks.hasOwnProperty(item)) {
            return 0;
        }

        return this.marks[item].reduce((acc, item) => acc + item, 0) / this.marks[item].length;
    }

    getAverage () {
        const item = Object.keys(this.marks);
        let sum;

        item.reduce((acc, item) => {
            acc += this.getAverageBySubject(item);
            return sum = acc;
        }, 0);

        return isNaN(sum) ? 0 : sum / item.length;
    }
}