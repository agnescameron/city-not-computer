# Citation Readme

In order to export from Markdown to HTML (web) and ICML (Indesign Copy Markup Language), you'll need:

- Pandoc
- LateX

With the bibtex file (.bib), the markdown (.md) and the citation style (.csl) files in the same directory, run the following command:

pandoc your_doc.md -s --biliography your_bib.bib --filter pandoc-citeproc --csl chicago-fullnote-bibliography.csl -o output.html

and for ICML:

pandoc your_doc.md -s --biliography your_bib.bib --filter pandoc-citeproc --csl chicago-fullnote-bibliography.csl -o output.icml