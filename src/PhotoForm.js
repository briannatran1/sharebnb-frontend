import { useState } from 'react';
import ShareBnbApi from './api';

const PHOTO_INITIAL_FORM_DATA = {
  "file": ""
};

function PhotoForm({ newListing }) {
  const [formData, setFormData] = useState(PHOTO_INITIAL_FORM_DATA);

  function handleChange(evt) {
    // Handles change on form{
    const { value } = evt.target;
    setFormData(value);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    await ShareBnbApi.uploadPhotos(1, formData);
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div>
        <label className='form-label'>Upload your Photos!</label>
        <br />
        <input
          type="file"
          id="listing-photos"
          name="filename"
          value={formData.file}
          onChange={handleChange} />
      </div>

      <button className='btn btn-primary'>Upload</button>
    </form>
  );
}

export default PhotoForm;