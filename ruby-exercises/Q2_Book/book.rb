class Book

  def initialize
    @chapters = []
  end

  attr_accessor :title
  attr_reader :chapters

  def add_chapter (new_chapter)
    @chapters << new_chapter
  end

  def book_chapters ()
    puts "Your book, \"#{title}\", has #{chapters.length} chapters:"
    for i in 0...chapters.length
      puts "#{i+1}. #{chapters[i]}"
    end
  end

end
