# Emotiv

*Of Detecting Eye State From An Emotiv Headset*

## Overview

Fussy is used here to detect eye state (either closed or open) from EEG data,
provided by the Emotiv EEG Neuroheadset.

## Performance

#### randomly sampled

- Trained on 13,980 random samples;
- Tested on the remaining 1,000.

Average performance: 81% (+/- 2%, for 10 runs of the bench.js script)

Tested with Fussy 0.1.1

## Files

#### Scripts:

 - bench.js: benchmark

#### Data files:

 - data.csv: 14,980 categorized samples, sorted by time
 - schema.json: dataset schema, defining columns and types, used by the importer

### Misc:

 - README.md: this file
 - package.json: defines dependencies

## Dataset Information

#### Reference:

Bache, K. & Lichman, M. (2013). UCI Machine Learning Repository [http://archive.ics.uci.edu/ml].
Irvine, CA: University of California, School of Information and Computer Science.

#### Source:

https://archive.ics.uci.edu/ml/datasets/EEG+Eye+State

#### Origin:

Oliver Roesler, Baden-Wuerttemberg Cooperative State University (DHBW), Stuttgart, Germany

#### Donor:

Oliver Roesler
