import React from 'react'
import { useState } from 'react'

function Adoption() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://animal-wellfare-society.onrender.com/adopt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      alert(result.message || result.error);
    } catch (error) {
      alert("Error submitting request.");
    }
  };

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary">Adopt a Pet</h2>
      <form className="space-y-4"  onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} value={form.name} placeholder="Your Full Name" className="w-full border p-2 rounded" />
        <input name="email" onChange={handleChange} value={form.email}  placeholder="Email" className="w-full border p-2 rounded" />
        <input name="phone" onChange={handleChange} value={form.phone} placeholder="Phone Number" className="w-full border p-2 rounded" />
        <textarea name="message" onChange={handleChange} value={form.message} placeholder="Name and why you want to adopt?" className="w-full border p-2 rounded h-32" />
        <button type="submit" className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-hover">
          Submit Request
        </button>
      </form>
    </section>
  )
}

export default Adoption
