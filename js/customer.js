// Kengaytirilgan menyu ma'lumotlari (kategoriyalarga bo'lingan)
const menuItems = [
    // -osh
    { id: 1, name: "Toshkent oshi (To'y oshi)", price: 35000, category: "osh", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 2, name: "Samarqand oshi", price: 38000, category: "osh", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 3, name: "Buxoro oshi (\"Sochqi oshi\")", price: 37000, category: "osh", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 4, name: "Farg'ona oshi", price: 36000, category: "osh", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
    { id: 5, name: "Devzira oshi", price: 42000, category: "osh", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },

    // -supli
    { id: 6, name: "Qaynatma sho'rva", price: 28000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 7, name: "Mastava", price: 22000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 8, name: "No'xat sho'rva (Mo'xaldak)", price: 26000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 9, name: "Moshxorda", price: 24000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 10, name: "Kalla-pacha", price: 35000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 11, name: "Chuchvara sho'rva", price: 25000, category: "supli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300" },
    { id: 12, name: "Ko'za sho'rva", price: 32000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 13, name: "Shirguruch", price: 20000, category: "supli", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300" },

    // -asosiy
    { id: 14, name: "Bifsteks", price: 40000, category: "asosiy", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300" },
    { id: 15, name: "Bistrogonav (Bef-stroganov)", price: 38000, category: "asosiy", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300" },
    { id: 16, name: "Jarkor (Jarkoye)", price: 34000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 17, name: "Lag'man (Qovurma lag'man)", price: 36000, category: "asosiy", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 18, name: "Dimlama", price: 32000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 19, name: "Tabaka jo'jasi (S-tabaka)", price: 35000, category: "asosiy", image: "https://images.unsplash.com/photo-1626509809489-44535b43d37a?w=300" },
    { id: 20, name: "Norin (Qozon norin)", price: 38000, category: "asosiy", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },

    // -hamirli
    { id: 21, name: "Manti (Go'shtli va piyozli)", price: 32000, category: "hamirli", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300" },
    { id: 22, name: "Chuchvara (Qaynatilgan yoki qovurilgan)", price: 28000, category: "hamirli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300" },
    { id: 23, name: "Cho'zma lag'mon", price: 36000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 24, name: "Qovurma lag'mon (Qovurma so'y)", price: 37000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 25, name: "Uyg'ur lag'moni", price: 38000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 26, name: "Norin", price: 38000, category: "hamirli", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 27, name: "Beshbarmoq", price: 45000, category: "hamirli", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 28, name: "Uyg'ur shivit oshi", price: 36000, category: "hamirli", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },

    // -kabob
    { id: 29, name: "Qiyma kabob", price: 18000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 30, name: "Qo'y go'shti shashligi (Klassik shashlik)", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 31, name: "Jigar shashligi", price: 20000, category: "kabob", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },
    { id: 32, name: "Qozon kabob", price: 38000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 33, name: "Tandir kabob", price: 45000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 34, name: "Jiz kabob", price: 40000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 35, name: "Napalyon", price: 25000, category: "kabob", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: 36, name: "O’rama", price: 24000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 37, name: "Norin kabob", price: 39000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 38, name: "Toyloq (Uyg'urcha) kabob", price: 25000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 39, name: "Bedana kabob", price: 30000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 40, name: "Tovuq shashligi (File kabob)", price: 19000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 41, name: "Lula-kabob", price: 21000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 42, name: "Karsak kabob", price: 23000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 43, name: "Qovurma shashlik", price: 24000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 44, name: "Quyruq kabob (Dumba kabob)", price: 25000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 45, name: "Bifshteks kabob", price: 26000, category: "kabob", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300" },
    { id: 46, name: "Tabaka kabob", price: 35000, category: "kabob", image: "https://images.unsplash.com/photo-1626509809489-44535b43d37a?w=300" },
    { id: 47, name: "Ovoza kabob", price: 24000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 48, name: "Sabzavotli kabob", price: 15000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 49, name: "Qanotcha shashligi (Tovuq qanoti)", price: 20000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 50, name: "Piyozli kabob", price: 16000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 51, name: "Qovurg'a kabob (Ribs)", price: 28000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 52, name: "Kavkazcha shashlik (Kars)", price: 27000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 53, name: "Baliq kabob", price: 30000, category: "kabob", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
    { id: 54, name: "Mushroom (Qo'ziqorin) kabob", price: 17000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 55, name: "Gilos kabob (Mevali kabob)", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 56, name: "Asalli shashlik", price: 23000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 57, name: "Achchiq (Laza) shashlik", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 58, name: "Minora kabob", price: 35000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 59, name: "Kletchatka kabob", price: 18000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 60, name: "Jigar-dumba kabob", price: 21000, category: "kabob", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },

    // -somsa
    { id: 61, name: "Tandir somsa", price: 12000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 62, name: "Qatlama (varaqi) somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 63, name: "Ko'k somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
    { id: 64, name: "Qovoqli somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 65, name: "Kartoshkali somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 66, name: "G'umma somsa (Qovurma somsa)", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 67, name: "Go'shtli-kartoshkali somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 68, name: "Pishloqli somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 69, name: "Tovuqli somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 70, name: "Qiyma somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 71, name: "Moshli somsa", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 72, name: "Zig'ir somsa", price: 13000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 73, name: "Asal solingan shirin somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 74, name: "Qora zira (yoki kunjutli) somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 75, name: "Katta to'y somsasi", price: 25000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 76, name: "Piyozli somsa (piyoz-dumba)", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 77, name: "Qo'ziqorinli somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 78, name: "Uyg'urcha somsa", price: 12000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 79, name: "Jigar somsasi", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 80, name: "Sutli xamirdan tayyorlangan somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },

    // -fastfood
    { id: 81, name: "Lavash", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 82, name: "Gamburger", price: 28000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 83, name: "Cheeseburger", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 84, name: "Shaurma (Doner)", price: 27000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 85, name: "Xot-dog", price: 18000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 86, name: "Kartoshka fri", price: 15000, category: "fastfood", image: "https://images.unsplash.com/photo-1576107232684-1279f3908591?w=300" },
    { id: 87, name: "Pitsa (30 sm / 25 sm / 20 sm)", price: 65000, category: "fastfood", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300" },
    { id: 88, name: "Klab-sendvich", price: 25000, category: "fastfood", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300" },
    { id: 89, name: "Xaggi (Haggi)", price: 29000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 90, name: "Tovuq nuggetslari", price: 22000, category: "fastfood", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
    { id: 91, name: "Tovuq tenderslari (Tenders)", price: 24000, category: "fastfood", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
    { id: 92, name: "Chikken burger", price: 27000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 93, name: "Fransuzcha hot-dog", price: 20000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 94, name: "Piyoz halqalari (Onion rings)", price: 16000, category: "fastfood", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300" },
    { id: 95, name: "Burrito", price: 32000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 96, name: "Tako", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300" },
    { id: 97, name: "Panini", price: 24000, category: "fastfood", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300" },
    { id: 98, name: "Wok lapshasi", price: 35000, category: "fastfood", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 99, name: "Korn-dog", price: 18000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 100, name: "Pishloqli tayoqchalar (Cheese-sticks)", price: 20000, category: "fastfood", image: "https://images.unsplash.com/photo-1548340795-5d512a4d3396?w=300" },

    // -ichimliklar
    { id: 101, name: "Coca-Cola (klassik) 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 102, name: "Coca-Cola (klassik) 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 103, name: "Coca-Cola (klassik) 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 104, name: "Coca-Cola (klassik) 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 105, name: "Coca-Cola (klassik) 2.0L", price: 25000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 106, name: "Coca-Cola Zero 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 107, name: "Coca-Cola Zero 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 108, name: "Coca-Cola Zero 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 109, name: "Coca-Cola Zero 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 110, name: "Coca-Cola Zero 2.0L", price: 25000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 111, name: "Fanta (apelsin) 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 112, name: "Fanta (apelsin) 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 113, name: "Fanta (apelsin) 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 114, name: "Fanta (apelsin) 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 115, name: "Fanta (apelsin) 2.0L", price: 25000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 116, name: "Sprite 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 117, name: "Sprite 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 118, name: "Sprite 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 119, name: "Sprite 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 120, name: "Sprite 2.0L", price: 25000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 121, name: "Pepsi 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300" },
    { id: 122, name: "Pepsi 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300" },
    { id: 123, name: "Pepsi 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300" },
    { id: 124, name: "Pepsi 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300" },
    { id: 125, name: "7Up 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 126, name: "7Up 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 127, name: "7Up 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 128, name: "7Up 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300" },
    { id: 129, name: "Mirinda 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 130, name: "Mirinda 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 131, name: "Mirinda 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 132, name: "Mirinda 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300" },
    { id: 133, name: "Mountain Dew 0.33L", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 134, name: "Mountain Dew 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 135, name: "Mountain Dew 1L", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 136, name: "Mountain Dew 1.5L", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 137, name: "Schweppes (Tonic / Bitter Lemon) 0.33L", price: 8000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 138, name: "Schweppes (Tonic / Bitter Lemon) 0.5L", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 139, name: "Schweppes (Tonic / Bitter Lemon) 1L", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 140, name: "Limonad klassik", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300" },
    { id: 141, name: "Mojito (alkogolsiz, shaftoli yoki qulupnayli)", price: 22000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: 142, name: "Tarhun 0.5L", price: 9000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 143, name: "Tarhun 1L", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 144, name: "Tarhun 1.5L", price: 19000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 145, name: "Baykal 0.5L", price: 9000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 146, name: "Baykal 1L", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 147, name: "Baykal 1.5L", price: 19000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 148, name: "Dushes 0.5L", price: 9000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 149, name: "Dushes 1L", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 150, name: "Dushes 1.5L", price: 19000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 151, name: "Red Bull 0.25L", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 152, name: "Red Bull 0.5L", price: 30000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 153, name: "Flash Up 0.45L", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 154, name: "Flash Up 0.5L", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 155, name: "Adrenaline Rush 0.25L", price: 17000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 156, name: "Adrenaline Rush 0.5L", price: 28000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
    { id: 157, name: "Suv (Gazli) 0.33L", price: 4000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 158, name: "Suv (Gazli) 0.5L", price: 6000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 159, name: "Suv (Gazli) 1.0L", price: 9000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 160, name: "Suv (Gazli) 1.5L", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 161, name: "Suv (Gazsiz) 0.33L", price: 4000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 162, name: "Suv (Gazsiz) 0.5L", price: 5000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 163, name: "Suv (Gazsiz) 1.0L", price: 8000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 164, name: "Suv (Gazsiz) 1.5L", price: 11000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 165, name: "Suv (Gazsiz) 2.0L", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300" },
    { id: 166, name: "Olma soki", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 167, name: "Apelsin soki", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 168, name: "Olcha soki", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 169, name: "Shaftoli soki", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 170, name: "Anor soki", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 171, name: "Multifrukt soki", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 172, name: "Tropik meva soki", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 173, name: "Ananas soki", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 174, name: "Pomidor soki (tuz va murch bilan)", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 175, name: "Ko'k choy (klassik choynakda)", price: 5000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 176, name: "Qora choy (klassik choynakda)", price: 5000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 177, name: "Limonli qora choy", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 178, name: "Limonli ko'k choy", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 179, name: "Imbir va limonli choy", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 180, name: "Mevali choy (mevali assorti)", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 181, name: "Muzli choy (Ice Tea - Shaftoli) 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
    { id: 182, name: "Muzli choy (Ice Tea - Shaftoli) 1L", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
    { id: 183, name: "Muzli choy (Ice Tea - Limon) 0.5L", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
    { id: 184, name: "Muzli choy (Ice Tea - Limon) 1L", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
    { id: 185, name: "Ko'k choy yalpiz bilan", price: 7000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 186, name: "Asalli va limonga boy isituvchi choy", price: 14000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300" },
    { id: 187, name: "Ayron (muzdek, ko'katli)", price: 10000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1628556270440-4242bb33b1e8?w=300" },
    { id: 188, name: "Muzqaymoqli kokteyl (Milkshake - vanilli)", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: 189, name: "Shokoladli milkshake", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: 190, name: "Qulupnayli milkshake", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: 191, name: "Tabiiy apelsin fresh", price: 25000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 192, name: "Tabiiy olma fresh", price: 20000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 193, name: "Tabiiy sabzi fresh", price: 18000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 194, name: "Greyprut fresh", price: 28000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300" },
    { id: 195, name: "Kompot (quritilgan mevalardan yoki olchali)", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300" },
    { id: 196, name: "Mors (reza mevali salqin ichimlik)", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300" },
    { id: 197, name: "Kofe (Americano)", price: 12000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300" },
    { id: 198, name: "Kofe (Cappuccino)", price: 15000, category: "ichimliklar", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300" }
];

// Joriy tanlangan kategoriya
let currentCategory = 'all';

// Savatcha va holatni saqlash (F5 qilinganda o'chib ketmaydi)
let cart = JSON.parse(localStorage.getItem('customer_cart')) || {};

// WebSocket orqali Render serveriga ulanish
const WS_URL = 'wss://oshxonachi-server.onrender.com'; 
let ws = new WebSocket(WS_URL);

ws.onopen = function() {
    console.log("Mijoz WebSocket serverga muvaffaqiyatli ulandi");
};

ws.onerror = function(error) {
    console.error("WebSocket xatoligi:", error);
};

// Sahifa yuklanganda menyuni va stollarni chiqarish
window.onload = function() {
    renderMenu();
    updateCartUI();
    renderTables();
};

// Kategoriyalar bo'yicha filter qilish funksiyasi
function filterMenu(category, event) {
    currentCategory = category;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderMenu();
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);
    
    if (filteredItems.length === 0) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #777;">Bu bo\'limda hozircha ovqatlar yo\'q</p>';
        return;
    }

    filteredItems.forEach(item => {
        let count = cart[item.id] ? cart[item.id].qty : 0;
        container.innerHTML += `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 150px; object-fit: cover;">
                <div style="padding: 15px;">
                    <h4 style="margin: 0 0 10px 0; font-size: 16px;">${item.name}</h4>
                    <p style="color: #d32f2f; font-weight: bold; margin: 0 0 15px 0;">${item.price} so'm</p>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <button onclick="changeQty(${item.id}, -1)" style="background: #f44336; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">-</button>
                        <span id="qty-${item.id}" style="font-weight: bold; font-size: 16px;">${count}</span>
                        <button onclick="changeQty(${item.id}, 1)" style="background: #4caf50; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">+</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function changeQty(id, delta) {
    if (!cart[id]) {
        let item = menuItems.find(i => i.id === id);
        cart[id] = { ...item, qty: 0 };
    }
    
    cart[id].qty += delta;
    if (cart[id].qty <= 0) {
        delete cart[id];
    }
    
    localStorage.setItem('customer_cart', JSON.stringify(cart));
    renderMenu();
    updateCartUI();
}

function updateCartUI() {
    let totalCount = 0;
    let totalPrice = 0;
    
    for (let id in cart) {
        totalCount += cart[id].qty;
        totalPrice += cart[id].qty * cart[id].price;
    }
    
    let cartCountEl = document.getElementById('cart-count');
    let cartTotalEl = document.getElementById('cart-total');
    if (cartCountEl) cartCountEl.innerText = totalCount;
    if (cartTotalEl) cartTotalEl.innerText = totalPrice;
    
    let modalTotal = document.getElementById('modal-cart-total');
    if (modalTotal) modalTotal.innerText = totalPrice;
}

function openCartModal() {
    let listContainer = document.getElementById('cart-items-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    let isEmpty = true;
    for (let id in cart) {
        isEmpty = false;
        listContainer.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                <span>${cart[id].name} (${cart[id].qty} ta)</span>
                <span><b>${cart[id].qty * cart[id].price} so'm</b></span>
            </div>
        `;
    }
    
    if (isEmpty) {
        listContainer.innerHTML = '<p style="text-align:center; color:#777;">Savatchangiz bo\'sh</p>';
    }
    
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function openWaiterModal() {
    document.getElementById('waiter-modal').style.display = 'flex';
}

function closeWaiterModal() {
    document.getElementById('waiter-modal').style.display = 'none';
}

function renderTables() {
    const tablesList = document.getElementById('tables-list');
    if (!tablesList) return;
    
    tablesList.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        tablesList.innerHTML += `
            <div class="table-btn" onclick="callWaiter(${i})">
                <span style="font-size: 24px;">🪑</span>
                <span>Stol #${i}</span>
            </div>
        `;
    }
}

// WebSocket orqali ofitsantga real vaqt rejimida chaqiruv yuborish
function callWaiter(tableNum) {
    const callData = {
        type: 'WAITER_CALL',
        table: tableNum,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(callData));
        alert(`Stol #${tableNum} uchun ofitsant chaqirildi! Xabar yuborildi.`);
    } else {
        alert("Server bilan aloqa yo'q! WebSocket ulanishini tekshiring.");
    }

    closeWaiterModal();
}

function toggleNameInput() {
    let type = document.getElementById('review-type').value;
    let nameInput = document.getElementById('reviewer-name');
    if (nameInput) nameInput.style.display = type === 'named' ? 'block' : 'none';
}

function submitReview() {
    alert("Fikr-mulohazangiz qabul qilindi. Rahmat!");
    let reviewText = document.getElementById('review-text');
    if (reviewText) reviewText.value = '';
}
