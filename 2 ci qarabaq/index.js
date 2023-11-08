const martyrs = [
    { name: "Abakarov Nail Müzəffər", birthdate: "24.07.2001", deathdate: "04.10.2020", medals: ["Vətən uğrunda", "Laçının azad olunmasına görə"] },
    { name: "Abbasov Ağababa Səfər", birthdate: "14.03.2002", deathdate: "29.09.2020", medals: ["Vətən uğrunda", "Füzulinin azad olunmasına görə"] },
    { name: "Abasov Ayaz Nizami", birthdate: "20.12.1998", deathdate: "03.10.2020", medals: ["Vətən uğrunda", "Cəbrayılın azad olunmasına görə"] },
    { name: "Abasov Davud Yalçın", birthdate: "19.11.1999", deathdate: "16.10.2020", medals: ["Vətən uğrunda", "Döyüşdə fərqlənməyə görə", "Xocavəndin azad olunmasına görə"] },
    { name: "Abasov Elvin Səxavət", birthdate: "17.06.1993", deathdate: "22.11.2020", medals: ["Vətən uğrunda", "Xocavəndin azad olunmasına görə"] },
    { name: "Abbasov Ruslan Hikmət", birthdate: "24.05.2000", deathdate: "14.10.2020", medals: ["Vətən uğrunda", "Füzulinin azad olunmasına görə"] },
    { name: "Abasov Samir Adəm", birthdate: "24.08.2001", deathdate: "13.10.2020", medals: ["Vətən uğrunda", "Laçının azad olunmasına görə"] },
    { name: "Abasov Seymur Adil", birthdate: "10.08.1999", deathdate: "29.10.2020", medals: ["Vətən uğrunda"] },
    { name: "Abbasbəyli Həmid Cavanşir", birthdate: "17.11.1991", deathdate: "20.10.2020", medals: ["Qarabağ ordeni", "Vətən uğrunda", "Cəbrayılın azad olunmasına görə", "Füzulinin azad olunmasına görə", "Xocavəndin azad olunmasına görə", "Azərbaycan Respublikası Silahlı Qüvvələrinin 90 illiyi (1918-2008) yubiley medalı", "Azərbaycan Ordusunun 100 illiyi (1918–2018) yubiley medalı", "Qələbə Günü münasibətilə hərbi paradda iştiraka görə medalı (Rusiya)"] },
    { name: "Abbasəliyev Hüseyn Adil", birthdate: "22.10.2000", deathdate: "29.09.2020", medals: ["Vətən uğrunda", "Suqovuşanın azad olunmasına görə"] },
    { name: "Abbaslı Arif Firuz", birthdate: "15.12.1993", deathdate: "12.10.2020", medals: ["Qarabağ ordeni", "Vətən uğrunda", "Kəlbəcərin azad olunmasına görə"] },
    { name: "Abbaslı Elgin Ağayar", birthdate: "16.05.1991", deathdate: "10.11.2020", medals: ["Vətən uğrunda", "Füzulinin azad olunmasına görə"] },
    { name: "Abbaslı Elgiz Fuad", birthdate: "21.05.1998", deathdate: "08.10.2020", medals: ["Vətən uğrunda", "Cəsur döyüşçü", "Füzulinin azad olunmasına görə", "Qubadlının azad olunmasına görə"] },
    { name: "Abbaslı Elnur Yaşar", birthdate: "17.07.1992", deathdate: "08.10.2020", medals: ["Vətən uğrunda", "Suqovuşanın azad olunmasına görə"] },
    { name: "Abbaslı Hikmət Zahir", birthdate: "18.01.1999", deathdate: "09.11.2021", medals: ["Vətən uğrunda", "İgidliyə görə", "Cəbrayılın azad olunmasına görə", "Xocavəndin azad olunmasına görə", "Füzulinin azad olunmasına görə", "Şuşanın azad olunmasına görə"] },
    { name: "Abbaslı Munis Həbibullah", birthdate: "18.03.2000", deathdate: "15.10.2020", medals: ["Vətən uğrunda", "İgidliyə görə", "Füzulinin azad olunmasına görə"] },
    { name: "Abbasov Ağaqardaş İlham", birthdate: "28.09.1992", deathdate: "28.09.2020", medals: ["Vətən uğrunda", "Füzulinin azad olunmasına görə"] },
    { name: "Abbasov Asim Rasim", birthdate: "26.05.1987", deathdate: "28.09.2020", medals: ["Vətən uğrunda"] },
    { name: "Abbasov Aslan Vəliyəddin", birthdate: "25.12.1995", deathdate: "10.10.2020", medals: ["Vətən uğrunda"] },
    { name: "Abbasov Bəşir Nizami", birthdate: "22.10.1998", deathdate: "08.10.2020", medals: ["Vətən uğrunda"] }
];


const shuhedInfoElement = document.querySelector('.shuhed-info');

function displayMartyrInfo() {
    const randomIndex = Math.floor(Math.random() * martyrs.length);
    const martyr = martyrs[randomIndex];
    shuhedInfoElement.textContent = `${martyr.name} - Doğum Tarihi: ${martyr.birthdate} - Ölüm Tarihi: ${martyr.deathdate} - Madalyalar: ${martyr.medals.join(', ')}`;
}

setInterval(displayMartyrInfo, 3000);
