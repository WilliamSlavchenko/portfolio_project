import React from 'react';

function splitStringUsingRegex(inputString) {
    const characters = [];
    const regex = /[\s\S]/gu;  // Corrected the regex syntax

    let match;

    while ((match = regex.exec(inputString)) != null) {
        characters.push(match[0]);
    }

    return characters;
}

export default splitStringUsingRegex;
