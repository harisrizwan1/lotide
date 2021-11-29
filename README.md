# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @harisrizwan1/lotide`

**Require it:**

`const _ = require('@harisrizwan1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: Compares the two values it takes in and prints out a message telling us if they match or not.
* `head`: Returns the first item in an array.
* `tail`: Returns an array without the first item of the provided array.
* `eqArrays`: Checks if two arrays are equal.
* `AssertArraysEqual`: Asserts if two arrays are equal or not
* `eqObjects`: Checks if two objects are equal.
* `assertObjectsEqual`: Asserts if two objects are equal or not.
* `without`: Returns a subset of a given array, removing unwanted elements.
* `flatten`: Takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
* `middle`: Returns the middle-most element(s) of the given array.
* `countOnly`: Will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `countLetters`: Takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `letterPositions`: Returns all the indices in the string where each character is found.
* `findKeyByValue`: Takes in an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `map`: will take in two arguments: An array to map and a callback function. Returns a new array based on the results of the callback function.
* `takeUntil`: Keeps collecting items from a provided array until the callback provided returns a truthy value.
* `findKey`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
