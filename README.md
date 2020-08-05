 
## Evam Test Projesi

<h3 style="color:#409dd0">*Hakkında</h3> 
Evam Streaming Analytics için hazırlanmış test projesidir. 
Proje, belirlenen formata dayanarak localstorage'a kullanıcı form listesi kaydetmeyi, kaydedilen kuıllanıcıları listelemeyi, listede arama yapmayı ve bu formların detaylıca gösterilmesini hedefler.
Projede AngularJs v1.6.9 ve bootstrap v3.3.7 kullanılmıştır.


<h3 style="color:#409dd0">*Kurulum</h3> 
-Her ne kadar angular kütüphaneyi lib içine almış olsam da, projeyi aldıktan sonra, http-server vs. gibi kütüphaneler için "npm install" yapmayı unutmayın.


<h3 style="color:#409dd0">*Kullanıcı Deneyimi Hakkında</h3> 
-Anasayfayı formList sayfası olarak belirledim. Burada girilen formlar listeleniyor. yeni form eklenebiliyor, listedeki "Detay" tuşuna basılarak mevcut form detayına gidilebiliyor. 
-forms/{{formadi}} şeklinde form detayı görüntüleniyor. eğer birden fazla aynı isimde form ismi var ise, kayıtlı formlardan ilkini getirir. bu durumu engellemek için form.name'in sonuna bir guId eklemeyi düşündüm, lakin istenilenin dışında bir linkleme olacağı için vazgeçtim. form isimlendirirken, istenilen düzeyde sağlıklı çalışması için, form isimlerinin farklı isimlerde giriş yapılmasına özen gösterilmelidir. 