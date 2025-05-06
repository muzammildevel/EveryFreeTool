const convertToWord = () => {
    if (!pdfFile) return;
  
    const formData = new FormData();
    formData.append("file", pdfFile);
  
    fetch("https://api.cloudconvert.com/convert", {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": "Bearer YOUR_CLOUDCONVERT_API_KEY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const convertedFileURL = data.output.url;  // Get the converted file URL
        setConvertedFile(convertedFileURL);
      })
      .catch((error) => {
        console.error("Error converting file:", error);
      });
  };
  