import React, { useState, useEffect } from "react";
import axios from "axios";

import { Form } from './components/Form';
import { Table } from './components/Table';

export function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({ id: "", isbn: "", title: "", author: "" });
  const [editing, setEditing] = useState(false);
  const [erro, setErro] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Erro ao buscar os books!", error);
      setErro("Erro ao buscar os books.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing && book._id) {
        await axios.put(`http://localhost:5000/api/books/${book._id}`, book);
      } else {
        await axios.post("http://localhost:5000/api/books", book);
      }

      setBook({ id: "", isbn: "", title: "", author: "" });
      setEditing(false);
      fetchBooks();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("ISBN já cadastrado. Por favor, use um ISBN diferente.");
      } else {
        console.error("Erro ao salvar o book:", error);
      }
    }
  };

  const handleEdit = (book) => {
    setBook(book);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Erro ao excluir o book:", error);
      setErro("Erro ao excluir o book.");
    }
  };

  return (
    <div className="App">
      <h1>Biblioteca</h1>
      <Form onChange={handleChange} book={book} onSubmit={handleSubmit} />

      {erro && <p className="erro">{erro}</p>}

      <Table bookList={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};