const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.instruments = []
HomeInventoryDatabase.electronics = []

const ikeaTable = {
    name: "Ikea Kitchen Table",
    location: "Kitchen",
    description: "I eat off this table. It's also really good for sitting mail on."
}

const couch = {
    name: "Couch",
    location: "Living Room",
    description: "This couch mostly belongs to the dogs, but they let me sit on it sometimes."
}

const octatrack = {
    name: "Octatrack Sampler",
    location: "Studio",
    description: "This is one of the most complicated 'instruments' I own."
}

const referenceMonitors = {
    name: "Studio Reference Monitors",
    location: "Studio",
    description: "These fancy schmancy studio monitors sound incredible."
}

const recordPlayer = {
    name: "Record Player",
    location: "Living Room",
    description: "Decent record player for whenever I have time to listen to records."
}

const guitar = {
    name: "DiPinto Guitar",
    location: "Studio",
    description: "This guitar is in need of repair, but I really love playing it when it works."
}

const synthesizer = {
    name: "Korg Minilogue Synthesizer",
    location: "Studio",
    description: "This was the first analog synthesizer that I've ever owned."
}

const television = {
    name: "Flatscreen TV",
    location: "Living Room",
    description: "I really like this TV because I got a great deal on it and it is one of the last plasma tvs in production."
}

const amazonEcho = {
    name: "Amazon Echo",
    location: "Kitchen",
    description: "I love the Echo because I can turn on and off my smart lights without getting out of the chair."
}

const roomba = {
    name: "Roomba Vacuum Cleaner",
    location: "Kitchen",
    description: "This robotic vacuum cleaner is great because I own dogs and hate to vacuum."
}

HomeInventoryDatabase.electronics.push(amazonEcho, roomba, television, referenceMonitors, recordPlayer)
HomeInventoryDatabase.furniture.push(couch, ikeaTable)
HomeInventoryDatabase.instruments.push(octatrack, synthesizer, guitar)


const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")


