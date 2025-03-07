import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure correct Firebase configuration

const KNOWN_COLLECTIONS = [
    "userProfile",
    "ML Forge",
    "Codecraft",
    "Codeblitz",
    "3 Minute Thesis",
    "STAAD Pro",
    "Cartodraft",
    "Vintage Visionaries",
    "Surveyor's Hunt",
    "BridgeIt",
    "Feast For Brains",
    "Capture The Snap"
];

const exportFirestoreData = async () => {
    try {
        let allData = [];

        for (const collectionName of KNOWN_COLLECTIONS) {
            const querySnapshot = await getDocs(collection(db, collectionName));
            querySnapshot.forEach((doc) => {
                allData.push({ collection: collectionName, id: doc.id, ...doc.data() });
            });
        }

        if (allData.length === 0) {
            console.log("No data found in Firestore.");
            return;
        }

        // Extract all possible fields (ensures consistent headers)
        const allKeys = new Set();
        allData.forEach((row) => {
            Object.keys(row).forEach((key) => allKeys.add(key));
        });

        const allFields = Array.from(allKeys); // Convert to array

        // Convert JSON to CSV
        const csvContent = convertToCSV(allData, allFields);
        downloadCSV(csvContent, "firestore_database.csv");

    } catch (error) {
        console.error("Error exporting Firestore data:", error);
    }
};

// Convert JSON data to CSV format
const convertToCSV = (data, allFields) => {
    const header = allFields.join(",") + "\n"; // Ensure all columns exist

    const rows = data.map((row) => {
        return allFields.map((field) => {
            let value = row[field];

            // Handle arrays (convert to comma-separated string)
            if (Array.isArray(value)) {
                value = `"${value.join(",")}"`; 
            } else if (value === undefined || value === null) {
                value = ""; // Fill missing fields with empty string
            }

            // Escape double quotes
            if (typeof value === "string") {
                value = `"${value.replace(/"/g, '""')}"`; 
            }

            return value;
        }).join(",");
    }).join("\n");

    return header + rows;
};

// Create a CSV file and trigger download
const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};

export default exportFirestoreData;
