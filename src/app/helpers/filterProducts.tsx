// helpers/filterProducts.js

import { RowData } from "../types/rowData";

// helpers/filterProducts.ts

export const filterProducts = (data: RowData[], searchTerm: string): RowData[] => {
    const words = searchTerm.toLowerCase().split(' ');

    const exactMatch = new RegExp(searchTerm.toLowerCase());

    return data.filter(row => {
        const productName = row[0]?.toLowerCase() || "";

        // Check for exact match of the entire search term.
        if (exactMatch.test(productName)) {
            return true;
        }

        // Check for exact word matches.
        for (const word of words) {
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(productName)) {
                return true;
            }
        }

        // Optional: Check for partial word matches. Remove this if undesired.
        for (const word of words) {
            if (productName.includes(word)) {
                return true;
            }
        }

        return false;
    });
}

