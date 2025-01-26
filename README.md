# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled rejections can lead to crashes or unexpected behavior.  The `bug.js` file showcases the problem, and `bugSolution.js` provides a solution.

## Problem

Asynchronous operations in Node.js often use promises.  If a promise is rejected and not handled using `.catch()`, it results in an unhandled rejection, which can lead to unpredictable behavior.

## Solution

Always handle promise rejections using `.catch()`, even if you expect no errors.  This provides robust error handling and prevents silent failures.