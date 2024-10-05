// Function to count flavors
function countFlavors(flavorArray) {
    const flavorCount = {};
    for (const flavor of flavorArray) {
        const normalizedFlavor = flavor.trim().toLowerCase(); // Normalize the flavor string
        if (flavorCount[normalizedFlavor]) {
            flavorCount[normalizedFlavor]++;
        } else {
            flavorCount[normalizedFlavor] = 1;
        }
    }
    return flavorCount;
}

// Prompt user for froyo flavors
const userInputString = prompt("Please enter your favorite froyo flavors, separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Split the input into an array
const flavorArray = userInputString.split(",");

// Count the flavors
const flavorCount = countFlavors(flavorArray);

// Display the results in the console as a table
console.table(flavorCount);