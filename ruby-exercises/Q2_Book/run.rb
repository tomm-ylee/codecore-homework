load './book.rb'


book = Book.new
book.title = "My Awesome Book"

book.add_chapter("My Awesome Chapter 1")
book.add_chapter("My Awesome Chapter 2")
book.book_chapters
