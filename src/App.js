import './App.css';

function App() {
  var dateVariable = Date().toLocaleString();

  const imageUrl = 'https://scontent.fvca3-1.fna.fbcdn.net/v/t39.30808-6/334443229_700260268539992_7927763128681035224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=key2h-mwgi0AX_YavqX&_nc_pt=1&_nc_ht=scontent.fvca3-1.fna&oh=00_AfDEKLcswgg4i2wY-mhndh5GDPKgm4CSC5QTa457T-Mt5w&oe=655E07E4';

  const handleDownloadClick = () => {
    fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      // Tạo một đường link ẩn để tải ảnh
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'image.jpg'; 
      document.body.appendChild(downloadLink);

      // Kích hoạt sự kiện click trên link để tải ảnh
      downloadLink.click();

      // Xóa link sau khi tải xong
      document.body.removeChild(downloadLink);
    });
  }

  const handleViewImage = () => {
   window.open(imageUrl, '_blank');
  }

   return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl}
             className="App-avatar" alt="avatar" />
        <p>
          Justin Blog
        </p>
       <p> 
          <button className='button-30' onClick={handleViewImage}>View Image</button>
          // <button className='button-30' onClick={handleDownloadClick}>Download</button>
        </p>
        <a className='App-link' href="https://www.facebook.com/huyvu.phan.79/" target='_blank'>Click to follow me on Facebook!</a>
        <p>Thanks for visiting</p>
        <p>Current time: {dateVariable}</p>
      </header>
    </div>
  );
}

export default App;
