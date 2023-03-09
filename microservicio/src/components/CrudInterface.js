import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudInterface() {
  const [data, setData] = useState([]);
  const [newEntity, setNewEntity] = useState({
    name: '',
    grade: ''
  });
  const [editingEntity, setEditingEntity] = useState(null);
  const [editingFields, setEditingFields] = useState({
    name: '',
    grade: ''
  });

  useEffect(() => {
    getEntityData();
  }, []);

  const getEntityData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/students');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createEntity = async () => {
    const { name, grade } = newEntity;
    try {
      await axios.post('http://localhost:8000/students', {
        name,
        grade
      });
      getEntityData();
      setNewEntity({ name: '', grade: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const updateEntity = async (id) => {
    const { name, grade } = editingFields;
    try {
      await axios.put(`http://localhost:8000/students/${id}`, {
        name,
        grade
      });
      getEntityData();
      setEditingEntity(null);
      setEditingFields({ name: '', grade: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEntity = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/students/${id}`);
      getEntityData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (editingEntity) {
      setEditingFields((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setNewEntity((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleEdit = (entity) => {
    setEditingEntity(entity);
    setEditingFields({ name: entity.name, grade: entity.grade });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingEntity) {
      updateEntity(editingEntity.id);
    } else {
      createEntity();
    }
  };

  return (
    <div>
      <h1>CRUD hecho con microservicios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Crud</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entity) => (
            <tr key={entity.id}>
              <td>{entity.id}</td>
              <td>{entity.name}</td>
              <td>{entity.grade}</td>
              <td>
                <button onClick={() => updateEntity(entity.id)}>Edit</button>
                <button onClick={() => deleteEntity(entity.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newEntity.name} onChange={handleInputChange} />
        </label>
        <label>
          Grade:
          <input type="text" name="grade" value={newEntity.grade} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Estudiante Lista</h2>
      <ul>
        {data.map((entity) => (
          <li key={entity.id}>{entity.name} - {entity.grade}</li>
        ))}
      </ul>
    </div>
  );
}

export default CrudInterface;




