import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// Remove or update these CSS imports as they're causing the error
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

function PdfViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* Add navigation buttons if needed to change pageNumber */}
    </div>
  );
}

export default PdfViewer;