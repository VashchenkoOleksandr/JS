//level 6

//вийшов дуже простий код. Хочу зробити щось цікавіше
//
//while (isFree('south')) { south(); }
//while (isFree('east')) { east(); }
//while (isFree('north')) { north(); }
//while (isFree('east')) { east(); }
//while (isFree('north')) { north(); }
//while (isFree('east')) { east(); }
//while (isFree('south')) { south(); }
//north();
//while (isFree('west')) { west(); }
//while (isFree('south')) { south(); }
//while (isFree('east')) { east(); }


while (isFree('south')) { south(); }
while (isFree('east')) { east(); }
while (isFree('north')) { north(); }
while (isFree('east')) { east(); }
while (isFree('north')) { north(); }
while (isFree('east')) { east(); }

for (i = 0; i < 4; i++) {
    south();
}
while (isFree('west')) { west(); }
for (i = 0; i < 3; i++) {
  if (isFree('south')) {
    south();
  }
  while (isFree('east')) { east(); }
}