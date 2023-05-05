import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    nom: "",
    prenom: "",
    telephone: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("user", JSON.stringify(user));
    try {
      const res = await axios.post("http://localhost:8080/users", formData);
      console.log(res.data);
      setUser({
        email: "",
        password: "",
        nom: "",
        prenom: "",
        telephone: "",
      });
      setImage(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form  className="rounded-xl drop-shadow-lg w-full m-auto flex flex-wrap  justify-center   gap-4 px-[10px]" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          value={user.nom}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          name="prenom"
          value={user.prenom}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="telephone">Téléphone</label>
        <input
          type="text"
          name="telephone"
          value={user.telephone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" name="image" onChange={handleImageChange} />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default UserForm;
