

const BookCard = ({book}) => {
  return (
    <div style={{border:"1px solid black",padding:"5px"}}>
    <div>
      <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
 alt="book" width={"100px"}/> 
<h3>book name: {book.book_name}</h3>
<h3>author: {book.author}</h3>
<h3>category: {book.category}</h3>
<p>release_year: {book.release_year}</p>
</div>

      </div>
  )
}

export default BookCard