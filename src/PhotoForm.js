import api from './api';

function PhotoForm() {

  async function handleSubmit(evt) {
    evt.preventDefault();
    await api.uploadPhotos();
  }

  return (
    <form>
      <label>Upload your Photos!</label>
      <input type="file" id="listing-photos" name="filename" />
      <input type="submit" />
    </form>
  );
}