# Profile Maker

A little node script that outputs Markdown files from a JSON containing an array of profile objects. 

## How to use
1. Download the CSV export of form responses.
2. Replace the column headers with those in `csvHeaders.csv`.
3. Install [Miller](https://miller.readthedocs.io/en/latest/), if necessary, and use it to convert your CSV into `data.json`. For example, on Arch Linux:
```bash
sudo pacman -S miller
mlr --c2j cat myCSV.csv > data.json   
```
4. Place `data.json` into the directory containing profileMaker.js
5. Execute `node profileMaker.js`.
6. Move the markdown files from `WOB_Eleventy_Shoelace/profileMaker/profiles/` into `WOB_Eleventy_Shoelace/profiles/`.
