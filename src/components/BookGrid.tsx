import { Book } from "../types/books";

export const BookGrid = ({ booksList }: { booksList: Book[] }) => (
  <div class="card-group gap-3">
    {booksList.map((book, i) => (
      <div class="card shadow-sm" style="width: 18rem;">
        <img
          class="card-img-top"
          src={`https://source.unsplash.com/featured/?books-${i}`}
          alt="Card image cap"
          style="height: 9rem; object-fit: cover"
        />
        <div class="card-body">
          <h5 class="card-title">{book.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    ))}
  </div>
);
