import React, { useState,useEffect,useRef } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from './components/PdfGenerator';
import PdfDocument from './components/NewReceipt';
// import QRCode from 'qrcode.react';
import QRCode from 'qrcode';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = function(event) {
      const blob = new Blob([event.target.result], { type: 'application/pdf' });
      setPdfBlob(blob);
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToBase64 = () => {
    if (pdfBlob) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64String = event.target.result.split(',')[1];
        setConvertedFile(base64String);
      };
      reader.readAsDataURL(pdfBlob);
    }
  };

  const downloadConvertedFile = () => {
    if (convertedFile) {
      const byteString = atob(convertedFile);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const newBlob = new Blob([ia], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(newBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const [qrCodeDataUri, setQrCodeDataUri] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const dataUri = await QRCode.toDataURL('Your QR Code Data', { type: 'image/jpeg', quality: 0.3 });
        setQrCodeDataUri(dataUri);
      } catch (err) {
        console.error(err);
      }
    };

    generateQRCode();
  }, []);

  console.log(convertedFile);

  return (
    <div>

      <br />
      <div  className='canvas'>
        {/* <QRCode ref={qrRef} value="Your QR Code Data" /> */}
      </div>
          <br />
          <PDFDownloadLink document={<Invoice qrCodeDataUri={qrCodeDataUri} />} filename="doc">
          {({ blob, url, loading, error  }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button
              //  onClick={() => handleSubmitApplication(blob)}
              >
                Download and Pdf
                 </button>
            )
          }
        </PDFDownloadLink>
          <PDFDownloadLink document={<PdfDocument qrCodeDataUri={qrCodeDataUri} />} filename="doc">
          {({ blob, url, loading, error  }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button
              //  onClick={() => handleSubmitApplication(blob)}
              >
                Download and Pdf
                 </button>
            )
          }
        </PDFDownloadLink>
    </div>
  );
}

export default FileUploader;
