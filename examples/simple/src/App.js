import React, { PureComponent } from 'react';
import { PdfRenderer, PdfjsLib } from 'react-pdfjs-multi';
import './App.css';
import 'react-pdfjs-multi/dist/react-pdfjs-multi.css';

class App extends PureComponent {
  state = {
    pdfDoc: null,
  };

  async componentDidMount() {
    const pdfDoc = await PdfjsLib.getDocument({
      url: 'pdfs/compressed.tracemonkey-pldi-09.pdf',
    });

    this.setState(() => ({ pdfDoc }));
  }

  render() {
    const { pdfDoc } = this.state;

    if (!pdfDoc) return false;

    return <PdfRenderer pdfDoc={pdfDoc} />;
  }
}

export default App;
