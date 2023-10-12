import { useState } from 'react';
import api from './api';

function PhotoForm() {
  const [formData, setFormData] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await api.uploadPhotos();
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div>
        <label className='form-label'>Upload your Photos!</label>
        <br />
        <input
          type="file"
          id="listing-photos"
          name="filename" />
      </div>

      <button className='btn btn-primary'>Upload</button>
    </form>
  );
}

export default PhotoForm;