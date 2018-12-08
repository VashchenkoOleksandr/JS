//level 5
//Не працює 
//просто видає true
//
//for (i = 0; i < 35; i++) {
//    if (isFree ('east')) { 
//        east(); 
//    } else if (isFree ('south')) { 
//        south(); 
//    } else if (isFree ('west')) { 
//        west(); 
//    } else if (isFree ('north')) { north(); } 
//}
//
//
//
//for (i = 0; i < 35; i++) {
//        east(); 
//    if (isFree ('south')) { 
//        while (isFree ('south')) { south(); }
//    } else if (isFree ('north')) {
//    while (isFree ('north')) { north(); } 
//    } else if (isFree ('west')) { 
//        while (isFree ('west')) { west(); }
//    } 
//}

//Зробив через while

while (isFree ('east')) { east(); }
while (isFree ('south')) { south(); }
while (isFree ('west')) { west(); }
while (isFree ('south')) { south(); }
while (isFree ('west')) { west(); }
while (isFree ('north')) { north(); }
while (isFree ('west')) { west(); }
while (isFree ('south')) { south(); }
while (isFree ('east')) { east(); }