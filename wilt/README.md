# Wilt

*Of Detecting Diseased Trees In Quickbird Imagery*

## Overview

Fussy is used here to classify Remote Sensing data (Quickbird) into either "diseased trees" or other land cover.

The performances are average.

## Performance

#### pre-determined training and testing datasets

Performance: 65.40% (173 errors for 500 tests)

Tested with Fussy 0.1.1

## Files

#### Scripts:

 - bench.js: benchmark

#### Data files:

 - testing.csv: 500 samples, used for testing
 - training: 4339 samples, used for training
 - schema.json: dataset schema, defining columns and types, used by the importer

### Misc:

 - README.md: this file
 - package.json: defines dependencies

## Dataset Information

#### Reference:

Bache, K. & Lichman, M. (2013). UCI Machine Learning Repository [http://archive.ics.uci.edu/ml].
Irvine, CA: University of California, School of Information and Computer Science.

#### Source:

https://archive.ics.uci.edu/ml/datasets/Wilt

#### Origin:

Brian Johnson; Institute for Global Environmental Strategies; 2108-11 Kamiyamaguchi, Hayama, Kanagawa,240-0115 Japan;

#### Donor:

Brian Johnson
