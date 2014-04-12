# Letters

*Of Performing Character Recognition*

## Overview

Fussy is used here to recognize characters, from a set of extracted features.

(see info.txt for more details).

The dataset is not small (20,000 samples), making it a good benchmark for me
to try to make Fussy faster (spoiler: might not be easy).

## Performance

#### pre-determined training and testing datasets

Performance: 93.10% (276 errors for 4000 tests)

Tested with Fussy 0.1.1

On such dataset, Fussy runs extremely slowly: it takes about 20 minutes to complete
the bench.

This is mainly because we need to map/reduce the whole database for all the 4000 tests,
 with no caching of any kind.

Also, Fussy is written in plain Javascript, and could probably benefits from
being written in another anguage (or have a native module).


## Files

#### Scripts:

 - bench.js: benchmark

#### Data files:

 - testing.csv: 4,000 letters used for testing
 - training: 16,000 letters used for training
 - schema.json: dataset schema, defining columns and types, used by the importer

### Misc:

 - info.txt: contains more information about the dataset
 - README.md: this file
 - package.json: defines dependencies

## Dataset Information

#### Reference:

Bache, K. & Lichman, M. (2013). UCI Machine Learning Repository [http://archive.ics.uci.edu/ml].
Irvine, CA: University of California, School of Information and Computer Science.

#### Source:

https://archive.ics.uci.edu/ml/datasets/Letter+Recognition

#### Origin:

David J. Slate - Odesta Corporation; 1890 Maple Ave; Suite 115; Evanston, IL 60201

#### Donor:

David J. Slate
