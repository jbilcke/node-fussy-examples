# Sonar

*Of Detecting Mines And Not Rocks*

## Overview

Fussy is used here to classify sonar signals as either being mines or rocks,
using a database of pre-classified events.

The dataset is really small, making it a good choice to experiment with Fussy.

## Performance

#### pre-determined training and testing datasets

Performance: 92.31% (8 errors for 104 tests)

Tested with Fussy 0.1.1

## Files

#### Scripts:

 - bench.js: benchmark

#### Data files:

 - testing.csv: 104 sonar events, used for testing
 - training: 104 sonar events, used for training
 - schema.json: dataset schema, defining columns and types, used by the importer

### Misc:

 - info.txt: contains information about the original dataset
 - README.md: this file
 - package.json: defines dependencies

## Dataset Information

#### Reference:

Bache, K. & Lichman, M. (2013). UCI Machine Learning Repository [http://archive.ics.uci.edu/ml].
Irvine, CA: University of California, School of Information and Computer Science.

#### Source:

https://archive.ics.uci.edu/ml/datasets/Connectionist+Bench+%28Sonar%2C+Mines+vs.+Rocks%29

#### Origin:

The data set was contributed to the benchmark collection by Terry Sejnowski, now at the Salk Institute and the University of California at San Deigo. The data set was developed in collaboration with R. Paul Gorman of Allied-Signal Aerospace Technology Center.

#### Donor:

Terry Sejnowski
