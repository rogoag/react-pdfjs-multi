# react-pdfjs-multi

[![Build Status](https://travis-ci.org/marcklei/react-pdfjs-multi.svg?branch=master)](https://travis-ci.org/marcklei/react-pdfjs-multi)
[![David Dependencies](https://david-dm.org/marcklei/react-pdfjs-multi.svg)](https://david-dm.org/marcklei/react-pdfjs-multi)

React wrapper for pdfjs with multiple file support.

This library uses [pdf.js][1].

For a preview of the current development visit [github pages][2].

> What does in development mean:
>
> 1.  **MINOR** versions represent **breaking changes**
> 1.  **PATCH** versions represent **fixes _and_ features**
> 1.  There are **no deprecation warnings** between releases

## Installation & Usage

`yarn add react-pdfjs-multi`

or

`npm i react-pdfjs-multi`

### PdfMultiViewer

tbd.

### PdfRenderer

If you like to implement your own custom multi renderer logic you can use the PdfRenderer component. For an implementation example see [Example][3].

Props:

| Name     | Required | Default | Type               | Description                                                    |
| -------- | -------- | ------- | ------------------ | -------------------------------------------------------------- |
| pdfDoc   | true     |         | {PDFDocumentProxy} | A proxy of the pdf document to display                         |
| autoZoom |          | true    | {boolean}          | enables/disables autoZoom on component mount and window resize |
| controls |          | true    | {boolean}          | enables/disables controls to e.g. change renderer zoom         |

[1]: https://mozilla.github.io/pdf.js/
[2]: https://marcklei.github.io/react-pdfjs-multi/
[3]: https://github.com/marcklei/react-pdfjs-multi/blob/master/examples/simple/src/App.js
