class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this.ratings
    }
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut
    }
    toggleCheckOutStatus() {
      if(this._isCheckedOut === true)
      {
        return this._isCheckedOut = false
      }
       return this._isCheckedOut = true
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  
      return ratingsSum / this._ratings.length
    }
  addRating(arg) {
    if (arg > 0 && arg <= 5) {
        this._ratings.push(arg)
      }
      else {
        console.log('Ratings should be from 1 to 5');
      }
    }
  }
  
  class Book extends Media {
   constructor(author, title, pages) {
    super(title)
    this._author = author
    this._pages = pages
   }
   get author() {
     return this._author
   }
   get pages() {
     return this._pages
   }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title)
      this._director = director
      this._runtime = runtime
      this._movieCast = []
    }
    get director() {
      return this._director
    }
    get runtime() {
      return this._runtime 
    }
  }
  
  class CD extends Media {
   constructor(author, title, songNum) {
    super(title)
    this._author = author
    this._songNum = songNum
    this._songs = []
   }
   get author() {
     return this._author
   }
  
   get songNum() {
     return this._songNum
   }
  
   addSong(song) {
     this._songs.push(song)
   }
  
  shuffle() {
    if(this._songs.length === 0) {
      return [];
    }
    return this._songs
  }
  }
  
  class Catalog {
    constructor(category) {
      this._category = category
      if(this.category !=='books' && this.category !=='cds'
       && this.category !=='movies') {
      console.log('Invalid category. Set category to \'books\', \'cds\' or \'movies\' ')
      }
        this._books = []
        this._cds = []
        this._movies = []
      
    }
  
    get category() {
      return this._category
    }
  
    addMedia(title) { 
      if (this._category === 'books') {
        this._books.push(title)
      }
      else if (this._category === 'cds') {
         this._cds.push(title)
      } 
       else if (this._category === 'movies') {
         this._movies.push(title)
      }
      else {
        return 'No such category'
      }
  
    }
  
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544 )
  historyOfEverything.toggleCheckOutStatus()
  console.log('Checked Out? '+historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  console.log('Avg rating: '+historyOfEverything.getAverageRating())
  
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus()
  console.log('Checked Out? '+speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log('Avg rating: '+speed.getAverageRating())
  
  const viewsAlbum = new CD('Drake', 'Views', 17)
  viewsAlbum.addSong('9')
  viewsAlbum.addSong('One Dance')
  viewsAlbum.addSong('Redemption')
  viewsAlbum.addSong('Pop Style')
  
  console.log(viewsAlbum.shuffle())
  
  const aBook = new Catalog('books')
  aBook.addMedia('Sunset Beach')
  aBook.addMedia('Aladin')
  aBook.addMedia('Tarzan')
  console.log(aBook)
  
  const aCD = new Catalog('cds')
  aCD.addMedia('The Eminem Show')
  aCD.addMedia('No Pressure')
  console.log(aCD)
  
  
  
  