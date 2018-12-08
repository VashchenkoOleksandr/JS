//level 5
//Не працює 
//просто видає true
//
//for (i = 0; i < 35; i++) {
//    if (isFree('east') == true) { 
//        east(); 
//    } else if (isFree('south') == true) { 
//        south(); 
//    } else if (isFree('west') == true) { 
//        west(); 
//    } else if (isFree('north') == true) { north(); } 
//}

//Зробив тупо через while

while (isFree('east')) { east(); }
while (isFree('south')) { south(); }
while (isFree('west')) { west(); }
while (isFree('south')) { south(); }
while (isFree('west')) { west(); }
while (isFree('north')) { north(); }
while (isFree('west')) { west(); }
while (isFree('south')) { south(); }
while (isFree('east')) { east(); }