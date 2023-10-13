import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShareBnbApi from './api';

const PHOTO_INITIAL_FORM_DATA = {
  "file": ""
};

function PhotoForm() {
  const [formData, setFormData] = useState(PHOTO_INITIAL_FORM_DATA);
  const { listing_id } = useParams();

  // Handles change on form
  function handleChange(evt) {
    setFormData(evt.target.files[0]);
  };

  /** handles submission of photo */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await ShareBnbApi.uploadPhotos(listing_id, formData);
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
          onChange={handleChange} />
      </div>

      <button className='btn btn-primary'>Upload</button>
    </form>
  );
}

export default PhotoForm;