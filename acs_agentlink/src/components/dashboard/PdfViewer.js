import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack'; // Import pdf.js

// Set the workerSrc (optional but recommended for better performance)
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null); // Reference for the canvas element

  useEffect(() => {
    const fetchAndRenderPDF = async () => {
      try {
        // Fetch the PDF as a Blob from the API
        const response = await fetch(pdfUrl);
        const pdfBlob = await response.blob();
        const pdfData = await pdfBlob.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        console.log(`PDF loaded. Number of pages: ${pdf.numPages}`);

        // Extract text from the first page
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        
        let extractedText = '';
        textContent.items.forEach((item) => {
          extractedText += item.str + ' ';
        });
        
        setText(extractedText);

        // Now render the first page to a canvas
        const viewport = page.getViewport({ scale: 1.5 }); // Adjust the scale if needed
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        setLoading(false);
      } catch (error) {
        console.error('Error fetching or processing PDF:', error);
        setLoading(false);
      }
    };

    fetchAndRenderPDF();
  }, [pdfUrl]); // Re-run when pdfUrl changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h3>Extracted Text:</h3>
            <p>{text}</p>
          </div>
          <canvas ref={canvasRef}></canvas>
        </>
      )}
    </div>
  );
};

export default PdfViewer;
