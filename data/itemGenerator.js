// Common selectors
const damageTypeArray = ['slashing', 'piercing', 'bludgeoning']

const armorPrefixes = ['Hard', 'Guarding', 'Armored', 'Warding', 'Precise', 'Lucky',
    'Jagged', 'Spiked', 'Angry', 'Menacing', 'Brisk', 'Fleeting', 'Hasty', 'Quick',
    'Wild', 'Rash', 'Intrepid', 'Violent', 'Arcane']

const weaponPrefixes = ['Quick', 'Deadly', 'Agile', 'Nimble', 'Murderous', 'Slow', 'Sluggish',
    'Lazy', 'Annoying', 'Nasty']

const universalPrefixes = ['Keen', 'Superior', 'Forceful', 'Broken', 'Damaged', 'Shoddy',
    'Hurtful', 'Strong', 'Unpleasant', 'Weak', 'Ruthless', 'Godly', 'Demonic', 'Zealous']

const weaponNames = ['Sword', 'Longbow', 'Spear', 'Axe', 'Tome', 'Pole', 'Staff', 'Club', 'Hammer', 
    'Sickle', 'Scythe', 'Flail', 'Shortbow', 'Greatsword', 'Greataxe', 'Glaive', 'Whip',
    'Blowgun', 'Crossbow', 'Warhammer', 'Trident']

const armorNames = ['Breastplate', 'Helmet', 'Gauntlets', 'Boots', 'Pants']

const armorMaterials = ['Leather', 'Steel', 'Iron', 'Chainmail', 'Adamantium', 'Obsidian',
    'Wooden', 'Reinforced Hide']

// Rare selectors
const rarityArray = ['common', 'common', 'uncommon', 'rare', 'very rare', 'legndary', 'artifact']
const damageQuantityArray = [1, 1, 2, 3, 4]
const damageDiceArray = [4, 4, 6, 8, 10, 12]
const armorClassArray = [10, 10, 11, 12, 13, 14, 15, 16, 17, 18]


const rareSelector = function(arr) {
    const idx = Math.floor(Math.random() * Math.floor(Math.random() * arr.length))
    return arr[idx]
}

const commonSelector = function(arr) {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

const weaponGenerator = function() {
    const uPref = commonSelector(universalPrefixes)
    const wPref = commonSelector(weaponPrefixes)
    const wType = commonSelector(weaponNames)
    const iRare = rareSelector(rarityArray)
    const weight = 5
    return {
        name: `${uPref} ${wPref} ${wType}`,
        itemType: 'weapon',
        rarity: iRare,
        damage: {
            quantity: rareSelector(damageQuantityArray),
            dice: rareSelector(damageDiceArray),
            type: commonSelector(damageTypeArray)
        },
        weight
    }
}

const armorGenerator = function() {
    const uPref = commonSelector(universalPrefixes)
    const aPref = commonSelector(weaponPrefixes)
    const aMat = commonSelector(armorMaterials)
    const aType = commonSelector(armorNames)
    const aAc = rareSelector(armorClassArray)
    const iRare = rareSelector(rarityArray)
    const weight = 50
    return {
        name: `${uPref} ${aPref} ${aMat} ${aType}`,
        itemType: 'armor',
        rarity: iRare,
        ac: aAc,
        weight
    }
}

module.exports = { weaponGenerator, armorGenerator }