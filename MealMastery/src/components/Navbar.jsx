
import React, { useState } from "react";
import logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [addRecipe, setAddRecipe] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    prep_time: '',
    cook_time: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log(formData)
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      prep_time: '',
      cook_time: '',
      image: null,
    })
    setAddRecipe(false)
    try {
      await axios.post('http://localhost:8000/addrecipe/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Recipe added successfully!');
      setAddRecipe(false); // Close the modal on success
    } catch (error) {
      console.error('There was an error adding the recipe!', error);
    }
  };

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img src={logo} className="hidden md:block w-8 h-8 lg:w-14 lg:h-14" />
          Meal <span>Mastery</span>
        </a>
        <button
          className="border-2 border-white p-2 rounded-md text-green-600 bg-buttonbg shadow-xl"
          onClick={() => setAddRecipe(true)}
        >
          Add Recipe
        </button>
      </nav>
      {addRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 text-black">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setAddRecipe(false)}
            >
              <AiOutlineClose />
            </button>
            <h2 className="text-2xl mb-4">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={4}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Instructions:</label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={6}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Preparation Time (minutes):</label>
                <input
                  type="number"
                  name="prep_time"
                  value={formData.prep_time}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Cooking Time (minutes):</label>
                <input
                  type="number"
                  name="cook_time"
                  value={formData.cook_time}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded-md shadow-md hover:bg-green-700"
              >
                Add Recipe
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
