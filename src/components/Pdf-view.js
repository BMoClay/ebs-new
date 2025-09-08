    import React, { useState } from 'react';
    import { Document, Page } from 'react-pdf';

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