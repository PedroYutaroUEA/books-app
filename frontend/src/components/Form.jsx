import React from 'react'

export function Form({ onSubmit, onChange, book }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="isbn"
        value={book.isbn}
        onChange={onChange}
        placeholder="ISBN"
        required
      />
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={onChange}
        placeholder="Título"
        required
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={onChange}
        placeholder="Autor"
        required
      />
      <button type="submit">Salvar</button>
    </form>
  )
}
