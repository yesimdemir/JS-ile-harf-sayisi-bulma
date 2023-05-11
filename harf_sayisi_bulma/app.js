//HARF SAYISI BULMA


let metin = "Yeşim Demir, Kırklareli Üniversitesi, Yazılım Mühendisliği";
let harf = prompt("Harfi giriniz: ");
let sonuc = bul(harf);
alert("Harf sayısı: " + sonuc);

function bul(harf){
  let toplam = 0;
  for(let i=0; i<=metin.length; i++){
    if(metin.charAt(i)===harf){
      toplam+=1;
    }
  }
  return toplam;
}

