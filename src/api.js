const BASE_URL = "http://localhost:5001";

class ShareBnbApi {



  static async uploadPhotos(listingId, file) {

    const url = `${BASE_URL}/listings/${listingId}/photos`;

    const method = "POST";

    const headers = {
      "Content-Type": "multipart/form-data"
    };

    const body = {
      "file": file
    };

    const resp = await fetch(url, { method, headers, body });
    const photoData = await resp.json();

    return photoData;

  }
}