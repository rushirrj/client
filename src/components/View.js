import React, { useState } from 'react';
import axios from 'axios';

function View() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleFileUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      setUploadStatus('File uploaded successfully!');
    }).catch(error => {
      setUploadStatus('File upload failed. Please try again later.');
    });
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = () => {
    axios.get('/api/search', {
      params: {
        q: searchTerm
      }
    }).then(response => {
      setSearchResults(response.data.results);
    }).catch(error => {
      setSearchResults([]);
    });
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.filename}</li>
        ))}
      </ul>
    </div>
  );
}

export default View;
