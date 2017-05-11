## React.js / Node.js kurssi kevät 2017

* Tekijä: Tommi Tuura
* Aihe: Oma aihe, hakukoneen keymatcheditori

### Hakukoneen keymatcheditori

Internet/intranet-hakukoneelle on määriteltävissä normaalin 
hakusanahaun lisäksi ns. keymatch-haku (tai "elevated keywords"/"adwords" -haku), 
jossa tietyt avainsanat tuovat ensimmäiseksi "käsinmääritellyn" sivun (URL:n)
riippumatta siitä onko sivun sisällön tai muiden ominaisuuksien puolesta
relevantti hakusanaan nähden.

Käyttöliittymä muodostuu excel-tyyppisestä datagridistä, jossa ensimmäisessä 
sarakkeessa on sivun osoite, toisessa sivun otsikko (ei vaadita) ja kolmannessa
pilkuin erotettu lista hakusanoista.

Sama hakusana voi esiintyä useamman eri osoitteen keymatch-listassa. Yhteen 
osoitteeseen voi liittyä useampi keymatch. 

### Tallennus

Keymatchit tallennetaan seuraavantyyppiseen xml-tiedostoon:

```
<elevate>
  <query text="geekery">
    <doc id="https://slashdot.org" title="Slashdot: News for nerds, Stuff that matters" />
    <doc id="https://www.newegg.com" />
  </query>
  <query text="shops">
    <doc id="https://www.amazon.com" />
    <doc id="https://www.newegg.com" />
  </query>
  <query text="darkhorsecomics">
    <doc id="https://www.darkhorse.com" />
  </query>
</elevate>
```

Kyseessä on siis eräänlainen versio Solr-hakukoneen käyttämästä 
[elevate.xml](https://cwiki.apache.org/confluence/display/solr/The+Query+Elevation+Component) 
-formaatista. (Excludea emme toteuta tässä vaiheessa, ja ylimääräinen title-attribuutti on jo 
käytössä todettu toimivaksi.)

### Kehitys- ja testiympäristö

* Vagrantilla ja virtualboxilla toteutettu Centos 6. Tämä versio siksi että todennäköisesti
ohjelman olisi tultava toimeen RHEL 6 -ympäristössä.

