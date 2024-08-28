import React from 'react'

export function Table(bookList, onEdit, onDelete) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(bookList)?.map((book) => (
          <tr key={book._id}>
            <td>{book._id}</td>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <button
                onClick={() => onEdit(book)}
                className='hover:brightness-75 transition-all border-2 border-zinc-200 bg-blue-500 text-zinc-200 p-2 rounded-md'
              >Edit</button>
              <button
                onClick={() => onDelete(book._id)}
                className='hover:brightness-75 transition-all border-2 border-zinc-200 bg-red-500 text-zinc-200 p-2 rounded-md'
              >Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
