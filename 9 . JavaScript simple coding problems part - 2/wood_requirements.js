function wood_requirements(chairQuantity, bedQuantity, tableQuantity){

    const chairWoodPerPiece = 5;
    const bedWoodPerPiece = 50;
    const tableWoodPerPiece = 15;

    let totalChairWood = chairQuantity * chairWoodPerPiece;

    let totalBedWood = bedQuantity * bedWoodPerPiece;

    let totalTableWood = tableQuantity * tableWoodPerPiece;

    let totalWoodRequire = totalBedWood + totalChairWood + totalTableWood;

    return totalWoodRequire;
}

console.log(wood_requirements(10,3,3));
