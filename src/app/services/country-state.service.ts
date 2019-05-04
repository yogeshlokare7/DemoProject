import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryStateService {
  constructor() { }

  getCountries() {
    return [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burma",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo, Democratic Republic",
      "Congo, Republic of the",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Germany",
      "Ghana",
      "Greece",
      "Greenland",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Korea North",
      "Korea South",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedoniac",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Mongolia",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Samoa",
      "San Marinoc",
      "Saudi Arabia",
      "Senegal",
      "Serbia and Montenegro",
      "Seychelles",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ];
  }

  getStates() {
    return [
      {
        country: "Afghanistan",
        name: "Badakhshan"
      },
      {
        country: "Afghanistan",
        name: "Badghis"
      },
      {
        country: "Afghanistan",
        name: "Baghlan"
      },
      {
        country: "Afghanistan",
        name: "Balkh"
      },
      {
        country: "Afghanistan",
        name: "Bamian"
      },
      {
        country: "Afghanistan",
        name: "Daykondi"
      },
      {
        country: "Afghanistan",
        name: "Farah"
      },
      {
        country: "Afghanistan",
        name: "Faryab"
      },
      {
        country: "Afghanistan",
        name: "Ghazni"
      },
      {
        country: "Afghanistan",
        name: "Ghowr"
      },
      {
        country: "Afghanistan",
        name: "Helmand"
      },
      {
        country: "Afghanistan",
        name: "Herat"
      },
      {
        country: "Afghanistan",
        name: "Jowzjan"
      },
      {
        country: "Afghanistan",
        name: "Kabul"
      },
      {
        country: "Afghanistan",
        name: "Kandahar"
      },
      {
        country: "Afghanistan",
        name: "Kapisa"
      },
      {
        country: "Afghanistan",
        name: "Khost"
      },
      {
        country: "Afghanistan",
        name: "Konar"
      },
      {
        country: "Afghanistan",
        name: "Kondoz"
      },
      {
        country: "Afghanistan",
        name: "Laghman"
      },
      {
        country: "Afghanistan",
        name: "Lowgar"
      },
      {
        country: "Afghanistan",
        name: "Nangarhar"
      },
      {
        country: "Afghanistan",
        name: "Nimruz"
      },
      {
        country: "Afghanistan",
        name: "Nurestan"
      },
      {
        country: "Afghanistan",
        name: "Oruzgan"
      },
      {
        country: "Afghanistan",
        name: "Paktia"
      },
      {
        country: "Afghanistan",
        name: "Paktika"
      },
      {
        country: "Afghanistan",
        name: "Panjshir"
      },
      {
        country: "Afghanistan",
        name: "Parvan"
      },
      {
        country: "Afghanistan",
        name: "Samangan"
      },
      {
        country: "Afghanistan",
        name: "Sar-e Pol"
      },
      {
        country: "Afghanistan",
        name: "Takhar"
      },
      {
        country: "Afghanistan",
        name: "Vardak"
      },
      {
        country: "Afghanistan",
        name: "Zabol"
      },

      //Albania
      {
        country: "Albania",
        name: "Berat"
      },
      {
        country: "Albania",
        name: "Dibres"
      },
      {
        country: "Albania",
        name: "Durres"
      },
      {
        country: "Albania",
        name: "Elbasan"
      },
      {
        country: "Albania",
        name: "Fier"
      },
      {
        country: "Albania",
        name: "Gjirokastre"
      },
      {
        country: "Albania",
        name: "Korce"
      },
      {
        country: "Albania",
        name: "Kukes"
      },
      {
        country: "Albania",
        name: "Lezhe"
      },
      {
        country: "Albania",
        name: "Shkoder"
      },
      {
        country: "Albania",
        name: "Tirane"
      },
      {
        country: "Albania",
        name: "Vlore"
      },

      //Algeria
      {
        country: "Algeria",
        name: "Adrar"
      },
      {
        country: "Algeria",
        name: "Ain Defla"
      },
      {
        country: "Algeria",
        name: "Ain Temouchent"
      },
      {
        country: "Algeria",
        name: "Alger"
      },
      {
        country: "Algeria",
        name: "Annaba"
      },
      {
        country: "Algeria",
        name: "Batna"
      },
      {
        country: "Algeria",
        name: "Bechar"
      },
      {
        country: "Algeria",
        name: "Bejaia"
      },
      {
        country: "Algeria",
        name: "Biskra"
      },
      {
        country: "Algeria",
        name: "Blida"
      },
      {
        country: "Algeria",
        name: "Bordj Bou Arreridj"
      },
      {
        country: "Algeria",
        name: "Bouira"
      },
      {
        country: "Algeria",
        name: "Boumerdes"
      },
      {
        country: "Algeria",
        name: "Chlef"
      },
      {
        country: "Algeria",
        name: "Constantine"
      },
      {
        country: "Algeria",
        name: "Djelfa"
      },
      {
        country: "Algeria",
        name: "El Bayadh"
      },
      {
        country: "Algeria",
        name: "El Oued"
      },
      {
        country: "Algeria",
        name: "El Tarf"
      },
      {
        country: "Algeria",
        name: "Ghardaia"
      },
      {
        country: "Algeria",
        name: "Guelma"
      },
      {
        country: "Algeria",
        name: "Illizi"
      },
      {
        country: "Algeria",
        name: "Jijel"
      },
      {
        country: "Algeria",
        name: "Khenchela"
      },
      {
        country: "Algeria",
        name: "Laghouat"
      },
      {
        country: "Algeria",
        name: "Muaskar"
      },
      {
        country: "Algeria",
        name: "Medea"
      },
      {
        country: "Algeria",
        name: "Mila"
      },
      {
        country: "Algeria",
        name: "Mostaganem"
      },
      {
        country: "Algeria",
        name: "M'Sila"
      },
      {
        country: "Algeria",
        name: "Naama"
      },
      {
        country: "Algeria",
        name: "Oran"
      },
      {
        country: "Algeria",
        name: "Ouargla"
      },
      {
        country: "Algeria",
        name: "Oum el Bouaghi"
      },
      {
        country: "Algeria",
        name: "Relizane"
      },
      {
        country: "Algeria",
        name: "Saida"
      },
      {
        country: "Algeria",
        name: "Setif"
      },
      {
        country: "Algeria",
        name: "Sidi Bel Abbes"
      },
      {
        country: "Algeria",
        name: "Skikda"
      },
      {
        country: "Algeria",
        name: "Souk Ahras"
      },
      {
        country: "Algeria",
        name: "Tamanghasset"
      },
      {
        country: "Algeria",
        name: "Tebessa"
      },
      {
        country: "Algeria",
        name: "Tiaret"
      },
      {
        country: "Algeria",
        name: "Tindouf"
      },
      {
        country: "Algeria",
        name: "Tipaza"
      },
      {
        country: "Algeria",
        name: "Tissemsilt"
      },
      {
        country: "Algeria",
        name: "Tizi Ouzou"
      },
      {
        country: "Algeria",
        name: "Tlemcen"
      },

      //Andorra
      {
        country: "Andorra",
        name: "Andorra la Vella"
      },
      {
        country: "Andorra",
        name: "Canillo"
      },
      {
        country: "Andorra",
        name: "Encamp"
      },
      {
        country: "Andorra",
        name: "Escaldes-Engordany"
      },
      {
        country: "Andorra",
        name: "La Massana"
      },
      {
        country: "Andorra",
        name: "Ordino"
      },
      {
        country: "Andorra",
        name: "Sant Julia de Loria"
      },

      //[
      {
        country: "Angola",
        name: "Bengo"
      },
      {
        country: "Angola",
        name: "Benguela"
      },
      {
        country: "Angola",
        name: "Bie"
      },
      {
        country: "Angola",
        name: "Cabinda"
      },
      {
        country: "Angola",
        name: "Cuando Cubango"
      },
      {
        country: "Angola",
        name: "Cuanza Norte"
      },
      {
        country: "Angola",
        name: "Cuanza Sul"
      },
      {
        country: "Angola",
        name: "Cunene"
      },
      {
        country: "Angola",
        name: "Huambo"
      },
      {
        country: "Angola",
        name: "Huila"
      },
      {
        country: "Angola",
        name: "Luanda"
      },
      {
        country: "Angola",
        name: "Lunda Norte"
      },
      {
        country: "Angola",
        name: "Lunda Sul"
      },
      {
        country: "Angola",
        name: "Malanje"
      },
      {
        country: "Angola",
        name: "Moxico"
      },
      {
        country: "Angola",
        name: "Namibe"
      },
      {
        country: "Angola",
        name: "Uige"
      },
      {
        country: "Angola",
        name: "Zaire"
      },

      //[
      {
        country: "Antigua and Barbuda",
        name: "Barbuda"
      },
      {
        country: "Antigua and Barbuda",
        name: "Redonda"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint George"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint John"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint Mary"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint Paul"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint Peter"
      },
      {
        country: "Antigua and Barbuda",
        name: "Saint Philip"
      },

      //[
      {
        country: "Argentina",
        name: "Buenos Aires"
      },
      {
        country: "Argentina",
        name: "Buenos Aires Capital"
      },
      {
        country: "Argentina",
        name: "Catamarca"
      },
      {
        country: "Argentina",
        name: "Chaco"
      },
      {
        country: "Argentina",
        name: "Chubut"
      },
      {
        country: "Argentina",
        name: "Cordoba"
      },
      {
        country: "Argentina",
        name: "Corrientes"
      },
      {
        country: "Argentina",
        name: "Entre Rios"
      },
      {
        country: "Argentina",
        name: "Formosa"
      },
      {
        country: "Argentina",
        name: "Jujuy"
      },
      {
        country: "Argentina",
        name: "La Pampa"
      },
      {
        country: "Argentina",
        name: "La Rioja"
      },
      {
        country: "Argentina",
        name: "Mendoza"
      },
      {
        country: "Argentina",
        name: "Misiones"
      },
      {
        country: "Argentina",
        name: "Neuquen"
      },
      {
        country: "Argentina",
        name: "Rio Negro"
      },
      {
        country: "Argentina",
        name: "Salta"
      },
      {
        country: "Argentina",
        name: "San Juan"
      },
      {
        country: "Argentina",
        name: "San Luis"
      },
      {
        country: "Argentina",
        name: "Santa Cruz"
      },
      {
        country: "Argentina",
        name: "Santa Fe"
      },
      {
        country: "Argentina",
        name: "Santiago del Estero"
      },
      {
        country: "Argentina",
        name: "Tierra del Fuego"
      },
      {
        country: "Argentina",
        name: "Tucuman"
      },

      //[
      {
        country: "Armenia",
        name: "Aragatsotn"
      },
      {
        country: "Armenia",
        name: "Ararat"
      },
      {
        country: "Armenia",
        name: "Armavir"
      },
      {
        country: "Armenia",
        name: "Geghark'unik'"
      },
      {
        country: "Armenia",
        name: "Kotayk'"
      },
      {
        country: "Armenia",
        name: "Lorri"
      },
      {
        country: "Armenia",
        name: "Shirak"
      },
      {
        country: "Armenia",
        name: "Syunik'"
      },
      {
        country: "Armenia",
        name: "Tavush"
      },
      {
        country: "Armenia",
        name: "Vayots' Dzor"
      },
      {
        country: "Armenia",
        name: "Yerevan"
      },

      //[
      {
        country: "Austria",
        name: "Burgenland"
      },
      {
        country: "Austria",
        name: "Kaernten"
      },
      {
        country: "Austria",
        name: "Niederoesterreich"
      },
      {
        country: "Austria",
        name: "Oberoesterreich"
      },
      {
        country: "Austria",
        name: "Salzburg"
      },
      {
        country: "Austria",
        name: "Steiermark"
      },
      {
        country: "Austria",
        name: "Tirol"
      },
      {
        country: "Austria",
        name: "Vorarlberg"
      },
      {
        country: "Austria",
        name: "Wien"
      },

      //[
      {
        country: "Azerbaijan",
        name: "Abseron Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Agcabadi Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Agdam Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Agdas Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Agstafa Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Agsu Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Astara Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Balakan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Barda Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Beylaqan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Bilasuvar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Cabrayil Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Calilabad Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Daskasan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Davaci Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Fuzuli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Gadabay Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Goranboy Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Goycay Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Haciqabul Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Imisli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Ismayilli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Kalbacar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Kurdamir Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Lacin Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Lankaran Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Lerik Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Masalli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Neftcala Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Oguz Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qabala Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qax Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qazax Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qobustan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Quba Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qubadli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Qusar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Saatli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Sabirabad Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Saki Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Salyan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Samaxi Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Samkir Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Samux Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Siyazan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Susa Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Tartar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Tovuz Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Ucar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Xacmaz Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Xanlar Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Xizi Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Xocali Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Xocavand Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Yardimli Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Yevlax Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Zangilan Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Zaqatala Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Zardab Rayonu"
      },
      {
        country: "Azerbaijan",
        name: "Ali Bayramli Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Baki Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Ganca Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Lankaran Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Mingacevir Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Naftalan Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Saki Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Sumqayit Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Susa Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Xankandi Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Yevlax Sahari"
      },
      {
        country: "Azerbaijan",
        name: "Naxcivan Muxtar"
      },

      {
        country: "Bahamas",
        name: "Acklins and Crooked Islands"
      },
      {
        country: "Bahamas",
        name: "Bimini"
      },
      {
        country: "Bahamas",
        name: "Cat Island"
      },
      {
        country: "Bahamas",
        name: "Exuma"
      },
      {
        country: "Bahamas",
        name: "Freeport"
      },
      {
        country: "Bahamas",
        name: "Fresh Creek"
      },
      {
        country: "Bahamas",
        name: "Governor's Harbour"
      },
      {
        country: "Bahamas",
        name: "Green Turtle Cay"
      },
      {
        country: "Bahamas",
        name: "Harbour Island"
      },
      {
        country: "Bahamas",
        name: "High Rock"
      },
      {
        country: "Bahamas",
        name: "Inagua"
      },
      {
        country: "Bahamas",
        name: "Kemps Bay"
      },
      {
        country: "Bahamas",
        name: "Long Island"
      },
      {
        country: "Bahamas",
        name: "Marsh Harbour"
      },
      {
        country: "Bahamas",
        name: "Mayaguana"
      },
      {
        country: "Bahamas",
        name: "New Providence"
      },
      {
        country: "Bahamas",
        name: "Nichollstown and Berry Islands"
      },
      {
        country: "Bahamas",
        name: "Ragged Island"
      },
      {
        country: "Bahamas",
        name: "Rock Sound"
      },
      {
        country: "Bahamas",
        name: "Sandy Point"
      },
      {
        country: "Bahamas",
        name: "San Salvador and Rum Cay"
      },
      //[
      {
        country: "Bahrain",
        name: "Al Hadd"
      },
      {
        country: "Bahrain",
        name: "Al Manamah"
      },
      {
        country: "Bahrain",
        name: "Al Mintaqah al Gharbiyah"
      },
      {
        country: "Bahrain",
        name: "Al Mintaqah al Wusta"
      },
      {
        country: "Bahrain",
        name: "Al Mintaqah ash Shamaliyah"
      },
      {
        country: "Bahrain",
        name: "Al Muharraq"
      },
      {
        country: "Bahrain",
        name: "Ar Rifa' wa al Mintaqah al Janubiyah"
      },
      {
        country: "Bahrain",
        name: "Jidd Hafs"
      },
      {
        country: "Bahrain",
        name: "Madinat Hamad"
      },
      {
        country: "Bahrain",
        name: "Madinat 'Isa"
      },
      {
        country: "Bahrain",
        name: "Juzur Hawar"
      },
      {
        country: "Bahrain",
        name: "Sitrah"
      },

      //[
      {
        country: "Bangladesh",
        name: "Barisal"
      },
      {
        country: "Bangladesh",
        name: "Chittagong"
      },
      {
        country: "Bangladesh",
        name: "Dhaka"
      },
      {
        country: "Bangladesh",
        name: "Khulna"
      },
      {
        country: "Bangladesh",
        name: "Rajshahi"
      },
      {
        country: "Bangladesh",
        name: "Sylhet"
      },
      {
        country: "Barbados",
        name: "Christ Church"
      },
      {
        country: "Barbados",
        name: "Saint Andrew"
      },
      {
        country: "Barbados",
        name: "Saint George"
      },
      {
        country: "Barbados",
        name: "Saint James"
      },
      {
        country: "Barbados",
        name: "Saint John"
      },
      {
        country: "Barbados",
        name: "Saint Joseph"
      },
      {
        country: "Barbados",
        name: "Saint Lucy"
      },
      {
        country: "Barbados",
        name: "Saint Michael"
      },
      {
        country: "Barbados",
        name: "Saint Peter"
      },
      {
        country: "Barbados",
        name: "Saint Philip"
      },
      {
        country: "Barbados",
        name: "Saint Thomas"
      },
      //[
      {
        country: "Belarus",
        name: "Brest"
      },
      {
        country: "Belarus",
        name: "Homyel"
      },
      {
        country: "Belarus",
        name: "Horad Minsk"
      },
      {
        country: "Belarus",
        name: "Hrodna"
      },
      {
        country: "Belarus",
        name: "Mahilyow"
      },
      {
        country: "Belarus",
        name: "Minsk"
      },
      {
        country: "Belarus",
        name: "Vitsyebsk"
      },

      //[
      {
        country: "Belgium",
        name: "Antwerpen"
      },
      {
        country: "Belgium",
        name: "Brabant Wallon"
      },
      {
        country: "Belgium",
        name: "Brussels"
      },
      {
        country: "Belgium",
        name: "Flanders"
      },
      {
        country: "Belgium",
        name: "Hainaut"
      },
      {
        country: "Belgium",
        name: "Liege"
      },
      {
        country: "Belgium",
        name: "Limburg"
      },
      {
        country: "Belgium",
        name: "Luxembourg"
      },
      {
        country: "Belgium",
        name: "Namur"
      },
      {
        country: "Belgium",
        name: "Oost-Vlaanderen"
      },
      {
        country: "Belgium",
        name: "Vlaams-Brabant"
      },
      {
        country: "Belgium",
        name: "Wallonia"
      },
      {
        country: "Belgium",
        name: "West-Vlaanderen"
      },

      //[
      {
        country: "Belize",
        name: "Belize"
      },
      {
        country: "Belize",
        name: "Cayo"
      },
      {
        country: "Belize",
        name: "Corozal"
      },
      {
        country: "Belize",
        name: "Orange Walk"
      },
      {
        country: "Belize",
        name: "Stann Creek"
      },
      {
        country: "Belize",
        name: "Toledo"
      },
      {
        country: "Benin",
        name: "Alibori"
      },
      {
        country: "Benin",
        name: "Atakora"
      },
      {
        country: "Benin",
        name: "Atlantique"
      },
      {
        country: "Benin",
        name: "Borgou"
      },
      {
        country: "Benin",
        name: "Collines"
      },
      {
        country: "Benin",
        name: "Donga"
      },
      {
        country: "Benin",
        name: "Kouffo"
      },
      {
        country: "Benin",
        name: "Littoral"
      },
      {
        country: "Benin",
        name: "Mono"
      },
      {
        country: "Benin",
        name: "Oueme"
      },
      {
        country: "Benin",
        name: "Plateau"
      },
      {
        country: "Benin",
        name: "Zou"
      },

      //[
      {
        country: "Bermuda",
        name: "Devonshire"
      },
      {
        country: "Bermuda",
        name: "Hamilton"
      },
      {
        country: "Bermuda",
        name: "Hamilton"
      },
      {
        country: "Bermuda",
        name: "Paget"
      },
      {
        country: "Bermuda",
        name: "Pembroke"
      },
      {
        country: "Bermuda",
        name: "Saint George"
      },
      {
        country: "Bermuda",
        name: "Saint George's"
      },
      {
        country: "Bermuda",
        name: "Sandys"
      },
      {
        country: "Bermuda",
        name: "Smith's"
      },
      {
        country: "Bermuda",
        name: "Southampton"
      },
      {
        country: "Bermuda",
        name: "Warwick"
      },

      {
        country: "Bhutan",
        name: "Bumthang"
      },
      {
        country: "Bhutan",
        name: "Chukha"
      },
      {
        country: "Bhutan",
        name: "Dagana"
      },
      {
        country: "Bhutan",
        name: "Gasa"
      },
      {
        country: "Bhutan",
        name: "Haa"
      },
      {
        country: "Bhutan",
        name: "Lhuntse"
      },
      {
        country: "Bhutan",
        name: "Mongar"
      },
      {
        country: "Bhutan",
        name: "Paro"
      },
      {
        country: "Bhutan",
        name: "Pemagatshel"
      },
      {
        country: "Bhutan",
        name: "Punakha"
      },
      {
        country: "Bhutan",
        name: "Samdrup Jongkhar"
      },
      {
        country: "Bhutan",
        name: "Samtse"
      },
      {
        country: "Bhutan",
        name: "Sarpang"
      },
      {
        country: "Bhutan",
        name: "Thimphu"
      },
      {
        country: "Bhutan",
        name: "Trashigang"
      },
      {
        country: "Bhutan",
        name: "Trashiyangste"
      },
      {
        country: "Bhutan",
        name: "Trongsa"
      },
      {
        country: "Bhutan",
        name: "Tsirang"
      },
      {
        country: "Bhutan",
        name: "Wangdue Phodrang"
      },
      {
        country: "Bhutan",
        name: "Zhemgang"
      },

      {
        country: "Bolivia",
        name: "Chuquisaca"
      },
      {
        country: "Bolivia",
        name: "Cochabamba"
      },
      {
        country: "Bolivia",
        name: "Beni"
      },
      {
        country: "Bolivia",
        name: "La Paz"
      },
      {
        country: "Bolivia",
        name: "Oruro"
      },
      {
        country: "Bolivia",
        name: "Pando"
      },
      {
        country: "Bolivia",
        name: "Potosi"
      },
      {
        country: "Bolivia",
        name: "Santa Cruz"
      },
      {
        country: "Bolivia",
        name: "Tarija"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Una-Sana [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Posavina [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Tuzla [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Zenica-Doboj [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Bosnian Podrinje [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Central Bosnia [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Herzegovina-Neretva [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "West Herzegovina [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Sarajevo [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: " West Bosnia [Federation]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Banja Luka [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Bijeljina [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Doboj [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Fo?a [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Sarajevo-Romanija [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Trebinje [RS]"
      },
      {
        country: "Bosnia and Herzegovina",
        name: "Vlasenica [RS]"
      },
      {
        country: "Botswana",
        name: "Central"
      },
      {
        country: "Botswana",
        name: "Ghanzi"
      },
      {
        country: "Botswana",
        name: "Kgalagadi"
      },
      {
        country: "Botswana",
        name: "Kgatleng"
      },
      {
        country: "Botswana",
        name: "Kweneng"
      },
      {
        country: "Botswana",
        name: "North East"
      },
      {
        country: "Botswana",
        name: "North West"
      },
      {
        country: "Botswana",
        name: "South East"
      },
      {
        country: "Botswana",
        name: "Southern"
      },
      {
        country: "Brazil",
        name: "Acre"
      },
      {
        country: "Brazil",
        name: "Alagoas"
      },
      {
        country: "Brazil",
        name: "Amapa"
      },
      {
        country: "Brazil",
        name: "Amazonas"
      },
      {
        country: "Brazil",
        name: "Bahia"
      },
      {
        country: "Brazil",
        name: "Ceara"
      },
      {
        country: "Brazil",
        name: "Distrito Federal"
      },
      {
        country: "Brazil",
        name: "Espirito Santo"
      },
      {
        country: "Brazil",
        name: "Goias"
      },
      {
        country: "Brazil",
        name: "Maranhao"
      },
      {
        country: "Brazil",
        name: "Mato Grosso"
      },
      {
        country: "Brazil",
        name: "Mato Grosso do Sul"
      },
      {
        country: "Brazil",
        name: "Minas Gerais"
      },
      {
        country: "Brazil",
        name: "Para"
      },
      {
        country: "Brazil",
        name: "Paraiba"
      },
      {
        country: "Brazil",
        name: "Parana"
      },
      {
        country: "Brazil",
        name: "Pernambuco"
      },
      {
        country: "Brazil",
        name: "Piaui"
      },
      {
        country: "Brazil",
        name: "Rio de Janeiro"
      },
      {
        country: "Brazil",
        name: "Rio Grande do Norte"
      },
      {
        country: "Brazil",
        name: "Rio Grande do Sul"
      },
      {
        country: "Brazil",
        name: "Rondonia"
      },
      {
        country: "Brazil",
        name: "Roraima"
      },
      {
        country: "Brazil",
        name: "Santa Catarina"
      },
      {
        country: "Brazil",
        name: "Sao Paulo"
      },
      {
        country: "Brazil",
        name: "Sergipe"
      },
      {
        country: "Brazil",
        name: "Tocantins"
      },
      {
        country: "Brunei",
        name: "Belait"
      },
      {
        country: "Brunei",
        name: "Brunei and Muara"
      },
      {
        country: "Brunei",
        name: "Temburong"
      },
      {
        country: "Brunei",
        name: "Tutong"
      },

      //[
      {
        country: "Bulgaria",
        name: "Blagoevgrad"
      },
      {
        country: "Bulgaria",
        name: "Burgas"
      },
      {
        country: "Bulgaria",
        name: "Dobrich"
      },
      {
        country: "Bulgaria",
        name: "Gabrovo"
      },
      {
        country: "Bulgaria",
        name: "Khaskovo"
      },
      {
        country: "Bulgaria",
        name: "Kurdzhali"
      },
      {
        country: "Bulgaria",
        name: "Kyustendil"
      },
      {
        country: "Bulgaria",
        name: "Lovech"
      },
      {
        country: "Bulgaria",
        name: "Montana"
      },
      {
        country: "Bulgaria",
        name: "Pazardzhik"
      },
      {
        country: "Bulgaria",
        name: "Pernik"
      },
      {
        country: "Bulgaria",
        name: "Pleven"
      },
      {
        country: "Bulgaria",
        name: "Plovdiv"
      },
      {
        country: "Bulgaria",
        name: "Razgrad"
      },
      {
        country: "Bulgaria",
        name: "Ruse"
      },
      {
        country: "Bulgaria",
        name: "Shumen"
      },
      {
        country: "Bulgaria",
        name: "Silistra"
      },
      {
        country: "Bulgaria",
        name: "Sliven"
      },
      {
        country: "Bulgaria",
        name: "Smolyan"
      },
      {
        country: "Bulgaria",
        name: "Sofiya"
      },
      {
        country: "Bulgaria",
        name: "Sofiya-Grad"
      },
      {
        country: "Bulgaria",
        name: "Stara Zagora"
      },
      {
        country: "Bulgaria",
        name: "Turgovishte"
      },
      {
        country: "Bulgaria",
        name: "Varna"
      },
      {
        country: "Bulgaria",
        name: "Veliko Turnovo"
      },
      {
        country: "Bulgaria",
        name: "Vidin"
      },
      {
        country: "Bulgaria",
        name: "Vratsa"
      },
      {
        country: "Bulgaria",
        name: "Yambol"
      },
      {
        country: "Burkina Faso",
        name: "Bale"
      },
      {
        country: "Burkina Faso",
        name: "Bam"
      },
      {
        country: "Burkina Faso",
        name: "Banwa"
      },
      {
        country: "Burkina Faso",
        name: "Bazega"
      },
      {
        country: "Burkina Faso",
        name: "Bougouriba"
      },
      {
        country: "Burkina Faso",
        name: "Boulgou"
      },
      {
        country: "Burkina Faso",
        name: "Boulkiemde"
      },
      {
        country: "Burkina Faso",
        name: "Comoe"
      },
      {
        country: "Burkina Faso",
        name: "Ganzourgou"
      },
      {
        country: "Burkina Faso",
        name: "Gnagna"
      },
      {
        country: "Burkina Faso",
        name: "Gourma"
      },
      {
        country: "Burkina Faso",
        name: "Houet"
      },
      {
        country: "Burkina Faso",
        name: "Ioba"
      },
      {
        country: "Burkina Faso",
        name: "Kadiogo"
      },
      {
        country: "Burkina Faso",
        name: "Kenedougou"
      },
      {
        country: "Burkina Faso",
        name: "Komondjari"
      },
      {
        country: "Burkina Faso",
        name: "Kompienga"
      },
      {
        country: "Burkina Faso",
        name: "Kossi"
      },
      {
        country: "Burkina Faso",
        name: "Koulpelogo"
      },
      {
        country: "Burkina Faso",
        name: "Kouritenga"
      },
      {
        country: "Burkina Faso",
        name: "Kourweogo"
      },
      {
        country: "Burkina Faso",
        name: "Leraba"
      },
      {
        country: "Burkina Faso",
        name: "Loroum"
      },
      {
        country: "Burkina Faso",
        name: "Mouhoun"
      },
      {
        country: "Burkina Faso",
        name: "Namentenga"
      },
      {
        country: "Burkina Faso",
        name: "Nahouri"
      },
      {
        country: "Burkina Faso",
        name: "Nayala"
      },
      {
        country: "Burkina Faso",
        name: "Noumbiel"
      },
      {
        country: "Burkina Faso",
        name: "Oubritenga"
      },
      {
        country: "Burkina Faso",
        name: "Oudalan"
      },
      {
        country: "Burkina Faso",
        name: "Passore"
      },
      {
        country: "Burkina Faso",
        name: "Poni"
      },
      {
        country: "Burkina Faso",
        name: "Sanguie"
      },
      {
        country: "Burkina Faso",
        name: "Sanmatenga"
      },
      {
        country: "Burkina Faso",
        name: "Seno"
      },
      {
        country: "Burkina Faso",
        name: "Sissili"
      },
      {
        country: "Burkina Faso",
        name: "Soum"
      },
      {
        country: "Burkina Faso",
        name: "Sourou"
      },
      {
        country: "Burkina Faso",
        name: "Tapoa"
      },
      {
        country: "Burkina Faso",
        name: "Tuy"
      },
      {
        country: "Burkina Faso",
        name: "Yagha"
      },
      {
        country: "Burkina Faso",
        name: "Yatenga"
      },
      {
        country: "Burkina Faso",
        name: "Ziro"
      },
      {
        country: "Burkina Faso",
        name: "Zondoma"
      },
      {
        country: "Burkina Faso",
        name: "Zoundweogo"
      },
      {
        country: "Burma",
        name: "Ayeyarwady"
      },
      {
        country: "Burma",
        name: "Bago"
      },
      {
        country: "Burma",
        name: "Magway"
      },
      {
        country: "Burma",
        name: "Mandalay"
      },
      {
        country: "Burma",
        name: "Sagaing"
      },
      {
        country: "Burma",
        name: "Tanintharyi"
      },
      {
        country: "Burma",
        name: "Yangon"
      },
      {
        country: "Burma",
        name: "Chin State"
      },
      {
        country: "Burma",
        name: "Kachin State"
      },
      {
        country: "Burma",
        name: "Kayin State"
      },
      {
        country: "Burma",
        name: "Kayah State"
      },
      {
        country: "Burma",
        name: "Mon State"
      },
      {
        country: "Burma",
        name: "Rakhine State"
      },
      {
        country: "Burma",
        name: "Shan State"
      },

      //[
      {
        country: "Burundi",
        name: "Bubanza"
      },
      {
        country: "Burundi",
        name: "Bujumbura Mairie"
      },
      {
        country: "Burundi",
        name: "Bujumbura Rural"
      },
      {
        country: "Burundi",
        name: "Bururi"
      },
      {
        country: "Burundi",
        name: "Cankuzo"
      },
      {
        country: "Burundi",
        name: "Cibitoke"
      },
      {
        country: "Burundi",
        name: "Gitega"
      },
      {
        country: "Burundi",
        name: "Karuzi"
      },
      {
        country: "Burundi",
        name: "Kayanza"
      },
      {
        country: "Burundi",
        name: "Kirundo"
      },
      {
        country: "Burundi",
        name: "Makamba"
      },
      {
        country: "Burundi",
        name: "Muramvya"
      },
      {
        country: "Burundi",
        name: "Muyinga"
      },
      {
        country: "Burundi",
        name: "Mwaro"
      },
      {
        country: "Burundi",
        name: "Ngozi"
      },
      {
        country: "Burundi",
        name: "Rutana"
      },
      {
        country: "Burundi",
        name: "Ruyigi"
      },

      //[
      {
        country: "Cambodia",
        name: "Banteay Mean Chey"
      },
      {
        country: "Cambodia",
        name: "Batdambang"
      },
      {
        country: "Cambodia",
        name: "Kampong Cham"
      },
      {
        country: "Cambodia",
        name: "Kampong Chhnang"
      },
      {
        country: "Cambodia",
        name: "Kampong Spoe"
      },
      {
        country: "Cambodia",
        name: "Kampong Thum"
      },
      {
        country: "Cambodia",
        name: "Kampot"
      },
      {
        country: "Cambodia",
        name: "Kandal"
      },
      {
        country: "Cambodia",
        name: "Koh Kong"
      },
      {
        country: "Cambodia",
        name: "Kracheh"
      },
      {
        country: "Cambodia",
        name: "Mondol Kiri"
      },
      {
        country: "Cambodia",
        name: "Otdar Mean Chey"
      },
      {
        country: "Cambodia",
        name: "Pouthisat"
      },
      {
        country: "Cambodia",
        name: "Preah Vihear"
      },
      {
        country: "Cambodia",
        name: "Prey Veng"
      },
      {
        country: "Cambodia",
        name: "Rotanakir"
      },
      {
        country: "Cambodia",
        name: "Siem Reab"
      },
      {
        country: "Cambodia",
        name: "Stoeng Treng"
      },
      {
        country: "Cambodia",
        name: "Svay Rieng"
      },
      {
        country: "Cambodia",
        name: "Takao"
      },
      {
        country: "Cambodia",
        name: "Keb"
      },
      {
        country: "Cambodia",
        name: "Pailin"
      },
      {
        country: "Cambodia",
        name: "Phnom Penh"
      },
      {
        country: "Cambodia",
        name: "Preah Seihanu"
      },

      {
        country: "Cameroon",
        name: "Adamaoua"
      },
      {
        country: "Cameroon",
        name: "Centre"
      },
      {
        country: "Cameroon",
        name: "Est"
      },
      {
        country: "Cameroon",
        name: "Extreme-Nord"
      },
      {
        country: "Cameroon",
        name: "Littoral"
      },
      {
        country: "Cameroon",
        name: "Nord"
      },
      {
        country: "Cameroon",
        name: "Nord-Ouest"
      },
      {
        country: "Cameroon",
        name: "Ouest"
      },
      {
        country: "Cameroon",
        name: "Sud"
      },
      {
        country: "Cameroon",
        name: "Sud-Ouest"
      },

      //[
      {
        country: "Canada",
        name: "Alberta"
      },
      {
        country: "Canada",
        name: "British Columbia"
      },
      {
        country: "Canada",
        name: "Manitoba"
      },
      {
        country: "Canada",
        name: "New Brunswick"
      },
      {
        country: "Canada",
        name: "Newfoundland and Labrador"
      },
      {
        country: "Canada",
        name: "Northwest Territories"
      },
      {
        country: "Canada",
        name: "Nova Scotia"
      },
      {
        country: "Canada",
        name: "Nunavut"
      },
      {
        country: "Canada",
        name: "Ontario"
      },
      {
        country: "Canada",
        name: "Prince Edward Island"
      },
      {
        country: "Canada",
        name: "Quebec"
      },
      {
        country: "Canada",
        name: "Saskatchewan"
      },
      {
        country: "Canada",
        name: "Yukon Territory"
      },


      //[
      {
        country: "Central African Republic",
        name: "Bamingui-Bangoran"
      },
      {
        country: "Central African Republic",
        name: "Bangui"
      },
      {
        country: "Central African Republic",
        name: "Basse-Kotto"
      },
      {
        country: "Central African Republic",
        name: "Haute-Kotto"
      },
      {
        country: "Central African Republic",
        name: "Haut-Mbomou"
      },
      {
        country: "Central African Republic",
        name: "Kemo"
      },
      {
        country: "Central African Republic",
        name: "Lobaye"
      },
      {
        country: "Central African Republic",
        name: "Mambere-Kadei"
      },
      {
        country: "Central African Republic",
        name: "Mbomou"
      },
      {
        country: "Central African Republic",
        name: "Nana-Grebizi"
      },
      {
        country: "Central African Republic",
        name: "Nana-Mambere"
      },
      {
        country: "Central African Republic",
        name: "Ombella-Mpoko"
      },
      {
        country: "Central African Republic",
        name: "Ouaka"
      },
      {
        country: "Central African Republic",
        name: "Ouham"
      },
      {
        country: "Central African Republic",
        name: "Ouham-Pende"
      },
      {
        country: "Central African Republic",
        name: "Sangha-Mbaere"
      },
      {
        country: "Central African Republic",
        name: "Vakaga"
      },

      {
        country: "Chad",
        name: "Batha"
      },
      {
        country: "Chad",
        name: "Biltine"
      },
      {
        country: "Chad",
        name: "Borkou-Ennedi-Tibesti"
      },
      {
        country: "Chad",
        name: "Chari-Baguirmi"
      },
      {
        country: "Chad",
        name: "Guéra"
      },
      {
        country: "Chad",
        name: "Kanem"
      },
      {
        country: "Chad",
        name: "Lac"
      },
      {
        country: "Chad",
        name: "Logone Occidental"
      },
      {
        country: "Chad",
        name: "Logone Oriental"
      },
      {
        country: "Chad",
        name: "Mayo-Kebbi"
      },
      {
        country: "Chad",
        name: "Moyen-Chari"
      },
      {
        country: "Chad",
        name: "Ouaddaï"
      },
      {
        country: "Chad",
        name: "Salamat"
      },
      {
        country: "Chad",
        name: "Tandjile"
      },


      //[
      {
        country: "Chile",
        name: "Aysen"
      },
      {
        country: "Chile",
        name: "Antofagasta"
      },
      {
        country: "Chile",
        name: "Araucania"
      },
      {
        country: "Chile",
        name: "Atacama"
      },
      {
        country: "Chile",
        name: "Bio-Bio"
      },
      {
        country: "Chile",
        name: "Coquimbo"
      },
      {
        country: "Chile",
        name: "O'Higgins"
      },
      {
        country: "Chile",
        name: "Los Lagos"
      },
      {
        country: "Chile",
        name: "Magallanes y la Antartica Chilena"
      },
      {
        country: "Chile",
        name: "Maule"
      },
      {
        country: "Chile",
        name: "Santiago Region Metropolitana"
      },
      {
        country: "Chile",
        name: "Tarapaca"
      },
      {
        country: "Chile",
        name: "Valparaiso"
      },

      //[
      {
        country: "China",
        name: "Anhui"
      },
      {
        country: "China",
        name: "Fujian"
      },
      {
        country: "China",
        name: "Gansu"
      },
      {
        country: "China",
        name: "Guangdong"
      },
      {
        country: "China",
        name: "Guizhou"
      },
      {
        country: "China",
        name: "Hainan"
      },
      {
        country: "China",
        name: "Hebei"
      },
      {
        country: "China",
        name: "Heilongjiang"
      },
      {
        country: "China",
        name: "Henan"
      },
      {
        country: "China",
        name: "Hubei"
      },
      {
        country: "China",
        name: "Hunan"
      },
      {
        country: "China",
        name: "Jiangsu"
      },
      {
        country: "China",
        name: "Jiangxi"
      },
      {
        country: "China",
        name: "Jilin"
      },
      {
        country: "China",
        name: "Liaoning"
      },
      {
        country: "China",
        name: "Qinghai"
      },
      {
        country: "China",
        name: "Shaanxi"
      },
      {
        country: "China",
        name: "Shandong"
      },
      {
        country: "China",
        name: "Shanxi"
      },
      {
        country: "China",
        name: "Sichuan"
      },
      {
        country: "China",
        name: "Yunnan"
      },
      {
        country: "China",
        name: "Zhejiang"
      },
      {
        country: "China",
        name: "Guangxi"
      },
      {
        country: "China",
        name: "Nei Mongol"
      },
      {
        country: "China",
        name: "Ningxia"
      },
      {
        country: "China",
        name: "Xinjiang"
      },
      {
        country: "China",
        name: "Xizang (Tibet)"
      },
      {
        country: "China",
        name: "Beijing"
      },
      {
        country: "China",
        name: "Chongqing"
      },
      {
        country: "China",
        name: "Shanghai"
      },
      {
        country: "China",
        name: "Tianjin"
      },
      {
        country: "Colombia",
        name: "Amazonas"
      },
      {
        country: "Colombia",
        name: "Antioquia"
      },
      {
        country: "Colombia",
        name: "Arauca"
      },
      {
        country: "Colombia",
        name: "Atlantico"
      },
      {
        country: "Colombia",
        name: "Bogota District Capital"
      },
      {
        country: "Colombia",
        name: "Bolivar"
      },
      {
        country: "Colombia",
        name: "Boyaca"
      },
      {
        country: "Colombia",
        name: "Caldas"
      },
      {
        country: "Colombia",
        name: "Caqueta"
      },
      {
        country: "Colombia",
        name: "Casanare"
      },
      {
        country: "Colombia",
        name: "Cauca"
      },
      {
        country: "Colombia",
        name: "Cesar"
      },
      {
        country: "Colombia",
        name: "Choco"
      },
      {
        country: "Colombia",
        name: "Cordoba"
      },
      {
        country: "Colombia",
        name: "Cundinamarca"
      },
      {
        country: "Colombia",
        name: "Guainia"
      },
      {
        country: "Colombia",
        name: "Guaviare"
      },
      {
        country: "Colombia",
        name: "Huila"
      },
      {
        country: "Colombia",
        name: "La Guajira"
      },
      {
        country: "Colombia",
        name: "Magdalena"
      },
      {
        country: "Colombia",
        name: "Meta"
      },
      {
        country: "Colombia",
        name: "Narino"
      },
      {
        country: "Colombia",
        name: "Norte de Santander"
      },
      {
        country: "Colombia",
        name: "Putumayo"
      },
      {
        country: "Colombia",
        name: "Quindio"
      },
      {
        country: "Colombia",
        name: "Risaralda"
      },
      {
        country: "Colombia",
        name: "San Andres & Providencia"
      },
      {
        country: "Colombia",
        name: "Santander"
      },
      {
        country: "Colombia",
        name: "Sucre"
      },
      {
        country: "Colombia",
        name: "Tolima"
      },
      {
        country: "Colombia",
        name: "Valle del Cauca"
      },
      {
        country: "Colombia",
        name: "Vaupes"
      },
      {
        country: "Colombia",
        name: "Vichada"
      },
      {
        country: "Comoros",
        name: "Grande Comore (Njazidja)"
      },
      {
        country: "Comoros",
        name: "Anjouan (Nzwani)"
      },
      {
        country: "Comoros",
        name: "Moheli (Mwali)"
      },

      {
        country: "Comoros",
        name: "Grande Comore (Njazidja)"
      },
      {
        country: "Comoros",
        name: "Anjouan (Nzwani)"
      },
      {
        country: "Comoros",
        name: "Moheli (Mwali)"
      },
      {
        country: "Congo, Republic of the",
        name: "Bouenza"
      },
      {
        country: "Congo, Republic of the",
        name: "Brazzaville"
      },
      {
        country: "Congo, Republic of the",
        name: "Cuvette"
      },
      {
        country: "Congo, Republic of the",
        name: "Cuvette-Ouest"
      },
      {
        country: "Congo, Republic of the",
        name: "Kouilou"
      },
      {
        country: "Congo, Republic of the",
        name: "Lekoumou"
      },
      {
        country: "Congo, Republic of the",
        name: "Likouala"
      },
      {
        country: "Congo, Republic of the",
        name: "Niari"
      },
      {
        country: "Congo, Republic of the",
        name: "Plateaux"
      },
      {
        country: "Congo, Republic of the",
        name: "Pool"
      },
      {
        country: "Congo, Republic of the",
        name: "Sangha"
      },
      {
        country: "Costa Rica",
        name: "Alajuela"
      },
      {
        country: "Costa Rica",
        name: "Cartago"
      },
      {
        country: "Costa Rica",
        name: "Guanacaste"
      },
      {
        country: "Costa Rica",
        name: "Heredia"
      },
      {
        country: "Costa Rica",
        name: "Limon"
      },
      {
        country: "Costa Rica",
        name: "Puntarenas"
      },
      {
        country: "Costa Rica",
        name: "San Jose"
      },

      {
        country: "Croatia",
        name: "Bjelovarsko-Bilogorska"
      },
      {
        country: "Croatia",
        name: "Brodsko-Posavska"
      },
      {
        country: "Croatia",
        name: "Dubrovacko-Neretvanska"
      },
      {
        country: "Croatia",
        name: "Istarska"
      },
      {
        country: "Croatia",
        name: "Karlovacka"
      },
      {
        country: "Croatia",
        name: "Koprivnicko-Krizevacka"
      },
      {
        country: "Croatia",
        name: "Krapinsko-Zagorska"
      },
      {
        country: "Croatia",
        name: "Licko-Senjska"
      },
      {
        country: "Croatia",
        name: "Medimurska"
      },
      {
        country: "Croatia",
        name: "Osjecko-Baranjska"
      },
      {
        country: "Croatia",
        name: "Pozesko-Slavonska"
      },
      {
        country: "Croatia",
        name: "Primorsko-Goranska"
      },
      {
        country: "Croatia",
        name: "Sibensko-Kninska"
      },
      {
        country: "Croatia",
        name: "Sisacko-Moslavacka"
      },
      {
        country: "Croatia",
        name: "Splitsko-Dalmatinska"
      },
      {
        country: "Croatia",
        name: "Varazdinska"
      },
      {
        country: "Croatia",
        name: "Viroviticko-Podravska"
      },
      {
        country: "Croatia",
        name: "Vukovarsko-Srijemska"
      },
      {
        country: "Croatia",
        name: "Zadarska"
      },
      {
        country: "Croatia",
        name: "Zagreb"
      },
      {
        country: "Croatia",
        name: "Zagrebacka"
      },

      {
        country: "Cuba",
        name: "Camaguey"
      },
      {
        country: "Cuba",
        name: "Ciego de Avila"
      },
      {
        country: "Cuba",
        name: "Cienfuegos"
      },
      {
        country: "Cuba",
        name: "Ciudad de La Habana"
      },
      {
        country: "Cuba",
        name: "Granma"
      },
      {
        country: "Cuba",
        name: "Guantanamo"
      },
      {
        country: "Cuba",
        name: "Holguin"
      },
      {
        country: "Cuba",
        name: "Isla de la Juventud"
      },
      {
        country: "Cuba",
        name: "La Habana"
      },
      {
        country: "Cuba",
        name: "Las Tunas"
      },
      {
        country: "Cuba",
        name: "Matanzas"
      },
      {
        country: "Cuba",
        name: "Pinar del Rio"
      },
      {
        country: "Cuba",
        name: "Sancti Spiritus"
      },
      {
        country: "Cuba",
        name: "Santiago de Cuba"
      },
      {
        country: "Cuba",
        name: "Villa Clara"
      },

      {
        country: "Cyprus",
        name: "Famagusta"
      },
      {
        country: "Cyprus",
        name: "Kyrenia"
      },
      {
        country: "Cyprus",
        name: "Larnaca"
      },
      {
        country: "Cyprus",
        name: "Limassol"
      },
      {
        country: "Cyprus",
        name: "Nicosia"
      },
      {
        country: "Cyprus",
        name: "Paphos"
      },
      //
      {
        country: "Czech Republic",
        name: "Jihocesky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Jihomoravsky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Karlovarsky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Kralovehradecky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Liberecky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Moravskoslezsky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Olomoucky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Pardubicky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Plzensky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Praha"
      },
      {
        country: "Czech Republic",
        name: "Stredocesky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Ustecky Kraj"
      },
      {
        country: "Czech Republic",
        name: "Vysocina"
      },
      {
        country: "Czech Republic",
        name: "Zlinsky Kraj"
      },
      //
      {
        country: "Denmark",
        name: "Arhus"
      },
      {
        country: "Denmark",
        name: "Bornholm"
      },
      {
        country: "Denmark",
        name: "Frederiksberg"
      },
      {
        country: "Denmark",
        name: "Frederiksborg"
      },
      {
        country: "Denmark",
        name: "Fyn"
      },
      {
        country: "Denmark",
        name: "Kobenhavn"
      },
      {
        country: "Denmark",
        name: "Kobenhavns"
      },
      {
        country: "Denmark",
        name: "Nordjylland"
      },
      {
        country: "Denmark",
        name: "Ribe"
      },
      {
        country: "Denmark",
        name: "Ringkobing"
      },
      {
        country: "Denmark",
        name: "Roskilde"
      },
      {
        country: "Denmark",
        name: "Sonderjylland"
      },
      {
        country: "Denmark",
        name: "Storstrom"
      },
      {
        country: "Denmark",
        name: "Vejle"
      },
      {
        country: "Denmark",
        name: "Vestsjalland"
      },
      {
        country: "Denmark",
        name: "Viborg"
      },
      //
      {
        country: "Djibouti",
        name: "Ali Sabih"
      },
      {
        country: "Djibouti",
        name: "Dikhil"
      },
      {
        country: "Djibouti",
        name: "Djibouti"
      },
      {
        country: "Djibouti",
        name: "Obock"
      },
      {
        country: "Djibouti",
        name: "Tadjoura"
      },
      //
      {
        country: "Dominica",
        name: "Saint Andrew"
      },
      {
        country: "Dominica",
        name: "Saint David"
      },
      {
        country: "Dominica",
        name: "Saint George"
      },
      {
        country: "Dominica",
        name: "Saint John"
      },
      {
        country: "Dominica",
        name: "Saint Joseph"
      },
      {
        country: "Dominica",
        name: "Saint Luke"
      },
      {
        country: "Dominica",
        name: "Saint Mark"
      },
      {
        country: "Dominica",
        name: "Saint Patrick"
      },
      {
        country: "Dominica",
        name: "Saint Paul"
      },
      {
        country: "Dominica",
        name: "Saint Peter"
      },
      //
      {
        country: "Dominican Republic",
        name: "Azua"
      },
      {
        country: "Dominican Republic",
        name: "Baoruco"
      },
      {
        country: "Dominican Republic",
        name: "Barahona"
      },
      {
        country: "Dominican Republic",
        name: "Dajabon"
      },
      {
        country: "Dominican Republic",
        name: "Distrito Nacional"
      },
      {
        country: "Dominican Republic",
        name: "Duarte"
      },
      {
        country: "Dominican Republic",
        name: "Elias Pina"
      },
      {
        country: "Dominican Republic",
        name: "El Seibo"
      },
      {
        country: "Dominican Republic",
        name: "Espaillat"
      },
      {
        country: "Dominican Republic",
        name: "Hato Mayor"
      },
      {
        country: "Dominican Republic",
        name: "Independencia"
      },
      {
        country: "Dominican Republic",
        name: "La Altagracia"
      },
      {
        country: "Dominican Republic",
        name: "La Romana"
      },
      {
        country: "Dominican Republic",
        name: "La Vega"
      },
      {
        country: "Dominican Republic",
        name: "Maria Trinidad Sanchez"
      },
      {
        country: "Dominican Republic",
        name: "Monsenor Nouel"
      },
      {
        country: "Dominican Republic",
        name: "Monte Cristi"
      },
      {
        country: "Dominican Republic",
        name: "Monte Plata"
      },
      {
        country: "Dominican Republic",
        name: "Pedernales"
      },
      {
        country: "Dominican Republic",
        name: "Peravia"
      },
      {
        country: "Dominican Republic",
        name: "Puerto Plata"
      },
      {
        country: "Dominican Republic",
        name: "Salcedo"
      },
      {
        country: "Dominican Republic",
        name: "Samana"
      },
      {
        country: "Dominican Republic",
        name: "Sanchez Ramirez"
      },
      {
        country: "Dominican Republic",
        name: "San Cristobal"
      },
      {
        country: "Dominican Republic",
        name: "San Jose de Ocoa"
      },
      {
        country: "Dominican Republic",
        name: "San Juan"
      },
      {
        country: "Dominican Republic",
        name: "San Pedro de Macoris"
      },
      {
        country: "Dominican Republic",
        name: "Santiago"
      },
      {
        country: "Dominican Republic",
        name: "Santiago Rodriguez"
      },
      {
        country: "Dominican Republic",
        name: "Santo Domingo"
      },
      {
        country: "Dominican Republic",
        name: "Valverde"
      },
      //
      {
        country: "East Timor",
        name: "Aileu"
      },
      {
        country: "East Timor",
        name: "Ainaro"
      },
      {
        country: "East Timor",
        name: "Baucau"
      },
      {
        country: "East Timor",
        name: "Bobonaro"
      },
      {
        country: "East Timor",
        name: "Cova-Lima"
      },
      {
        country: "East Timor",
        name: "Dili"
      },
      {
        country: "East Timor",
        name: "Ermera"
      },
      {
        country: "East Timor",
        name: "Lautem"
      },
      {
        country: "East Timor",
        name: "Liquica"
      },
      {
        country: "East Timor",
        name: "Manatuto"
      },
      {
        country: "East Timor",
        name: "Manufahi"
      },
      {
        country: "East Timor",
        name: "Oecussi"
      },
      {
        country: "East Timor",
        name: "Viqueque"
      },
      //
      {
        country: "Ecuador",
        name: "Azuay"
      },
      {
        country: "Ecuador",
        name: "Bolivar"
      },
      {
        country: "Ecuador",
        name: "Canar"
      },
      {
        country: "Ecuador",
        name: "Carchi"
      },
      {
        country: "Ecuador",
        name: "Chimborazo"
      },
      {
        country: "Ecuador",
        name: "Cotopaxi"
      },
      {
        country: "Ecuador",
        name: "El Oro"
      },
      {
        country: "Ecuador",
        name: "Esmeraldas"
      },
      {
        country: "Ecuador",
        name: "Galapagos"
      },
      {
        country: "Ecuador",
        name: "Guayas"
      },
      {
        country: "Ecuador",
        name: "Imbabura"
      },
      {
        country: "Ecuador",
        name: "Loja"
      },
      {
        country: "Ecuador",
        name: "Los Rios"
      },
      {
        country: "Ecuador",
        name: "Manabi"
      },
      {
        country: "Ecuador",
        name: "Morona-Santiago"
      },
      {
        country: "Ecuador",
        name: "Napo"
      },
      {
        country: "Ecuador",
        name: "Orellana"
      },
      {
        country: "Ecuador",
        name: "Pastaza"
      },
      {
        country: "Ecuador",
        name: "Pichincha"
      },
      {
        country: "Ecuador",
        name: "Sucumbios"
      },
      {
        country: "Ecuador",
        name: "Tungurahua"
      },
      {
        country: "Ecuador",
        name: "Zamora-Chinchipe"
      },
      //Egypt
      {
        country: "Egypt",
        name: "Ad Daqahliyah"
      },
      {
        country: "Egypt",
        name: "Al Bahr al Ahmar"
      },
      {
        country: "Egypt",
        name: "Al Buhayrah"
      },
      {
        country: "Egypt",
        name: "Al Fayyum"
      },
      {
        country: "Egypt",
        name: "Al Gharbiyah"
      },
      {
        country: "Egypt",
        name: "Al Iskandariyah"
      },
      {
        country: "Egypt",
        name: "Al Isma'iliyah"
      },
      {
        country: "Egypt",
        name: "Al Jizah"
      },
      {
        country: "Egypt",
        name: "Al Minufiyah"
      },
      {
        country: "Egypt",
        name: "Al Minya"
      },
      {
        country: "Egypt",
        name: "Al Qahirah"
      },
      {
        country: "Egypt",
        name: "Al Qalyubiyah"
      },
      {
        country: "Egypt",
        name: "Al Wadi al Jadid"
      },
      {
        country: "Egypt",
        name: "Ash Sharqiyah"
      },
      {
        country: "Egypt",
        name: "As Suways"
      },
      {
        country: "Egypt",
        name: "Aswan"
      },
      {
        country: "Egypt",
        name: "Asyut"
      },
      {
        country: "Egypt",
        name: "Bani Suwayf"
      },
      {
        country: "Egypt",
        name: "Bur Sa'id"
      },
      {
        country: "Egypt",
        name: "Dumyat"
      },
      {
        country: "Egypt",
        name: "Janub Sina'"
      },
      {
        country: "Egypt",
        name: "Kafr ash Shaykh"
      },
      {
        country: "Egypt",
        name: "Matruh"
      },
      {
        country: "Egypt",
        name: "Qina"
      },
      {
        country: "Egypt",
        name: "Shamal Sina'"
      },
      {
        country: "Egypt",
        name: "Suhaj"
      },
      //
      {
        country: "El Salvador",
        name: "Ahuachapan"
      },
      {
        country: "El Salvador",
        name: "Cabanas"
      },
      {
        country: "El Salvador",
        name: "Chalatenango"
      },
      {
        country: "El Salvador",
        name: "Cuscatlan"
      },
      {
        country: "El Salvador",
        name: "La Libertad"
      },
      {
        country: "El Salvador",
        name: "La Paz"
      },
      {
        country: "El Salvador",
        name: "La Union"
      },
      {
        country: "El Salvador",
        name: "Morazan"
      },
      {
        country: "El Salvador",
        name: "San Miguel"
      },
      {
        country: "El Salvador",
        name: "San Salvador"
      },
      {
        country: "El Salvador",
        name: "Santa Ana"
      },
      {
        country: "El Salvador",
        name: "San Vicente"
      },
      {
        country: "El Salvador",
        name: "Sonsonate"
      },
      {
        country: "El Salvador",
        name: "Usulutan"
      },
      //
      {
        country: "Equatorial Guinea",
        name: "Annobon"
      },
      {
        country: "Equatorial Guinea",
        name: "Bioko Norte"
      },
      {
        country: "Equatorial Guinea",
        name: "Bioko Sur"
      },
      {
        country: "Equatorial Guinea",
        name: "Centro Sur"
      },
      {
        country: "Equatorial Guinea",
        name: "Kie-Ntem"
      },
      {
        country: "Equatorial Guinea",
        name: "Litoral"
      },
      {
        country: "Equatorial Guinea",
        name: "Wele-Nzas"
      },
      {
        country: "Eritrea",
        name: "Anseba"
      },
      {
        country: "Eritrea",
        name: "Debub"
      },
      {
        country: "Eritrea",
        name: "Debubawi K'eyih Bahri"
      },
      {
        country: "Eritrea",
        name: "Gash Barka"
      },
      {
        country: "Eritrea",
        name: "Ma'akel"
      },
      {
        country: "Eritrea",
        name: "Semenawi Keyih Bahri"
      },
      {
        country: "Estonia",
        name: "Harjumaa (Tallinn)"
      },
      {
        country: "Estonia",
        name: "Hiiumaa (Kardla)"
      },
      {
        country: "Estonia",
        name: "Ida-Virumaa (Johvi)"
      },
      {
        country: "Estonia",
        name: "Jarvamaa (Paide)"
      },
      {
        country: "Estonia",
        name: "Jogevamaa (Jogeva)"
      },
      {
        country: "Estonia",
        name: "Laanemaa (Haapsalu)"
      },
      {
        country: "Estonia",
        name: "Laane-Virumaa (Rakvere)"
      },
      {
        country: "Estonia",
        name: "Parnumaa (Parnu)"
      },
      {
        country: "Estonia",
        name: "Polvamaa (Polva)"
      },
      {
        country: "Estonia",
        name: "Raplamaa (Rapla)"
      },
      {
        country: "Estonia",
        name: "Saaremaa (Kuressaare)"
      },
      {
        country: "Estonia",
        name: "Tartumaa (Tartu)"
      },
      {
        country: "Estonia",
        name: "Valgamaa (Valga)"
      },
      {
        country: "Estonia",
        name: "Viljandimaa (Viljandi)"
      },
      {
        country: "Estonia",
        name: "Vorumaa (Voru)"
      },
      {
        country: "Ethiopia",
        name: "Addis Ababa"
      },
      {
        country: "Ethiopia",
        name: "Afar"
      },
      {
        country: "Ethiopia",
        name: "Amhara"
      },
      {
        country: "Ethiopia",
        name: "Binshangul Gumuz"
      },
      {
        country: "Ethiopia",
        name: "Dire Dawa"
      },
      {
        country: "Ethiopia",
        name: "Gambela Hizboch"
      },
      {
        country: "Ethiopia",
        name: "Harari"
      },
      {
        country: "Ethiopia",
        name: "Oromia"
      },
      {
        country: "Ethiopia",
        name: "Somali"
      },
      {
        country: "Ethiopia",
        name: "Tigray"
      },
      {
        country: "Ethiopia",
        name: "Southern Nations, Nationalities, and Peoples Region"
      },
      {
        country: "Fiji",
        name: "Central (Suva)"
      },
      {
        country: "Fiji",
        name: "Eastern (Levuka)"
      },
      {
        country: "Fiji",
        name: "Northern (Labasa)"
      },
      {
        country: "Fiji",
        name: "Rotuma"
      },
      {
        country: "Fiji",
        name: "Western (Lautoka)"
      },
      {
        country: "Finland",
        name: "Aland"
      },
      {
        country: "Finland",
        name: "Etela-Suomen Laani"
      },
      {
        country: "Finland",
        name: "Ita-Suomen Laani"
      },
      {
        country: "Finland",
        name: "Lansi-Suomen Laani"
      },
      {
        country: "Finland",
        name: "Lappi"
      },
      {
        country: "Finland",
        name: "Oulun Laani"
      },
      //france

      {
        country: "France",
        name: "Alsace"
      },
      {
        country: "France",
        name: "Aquitaine"
      },
      {
        country: "France",
        name: "Auvergne"
      },
      {
        country: "France",
        name: "Basse-Normandie"
      },
      {
        country: "France",
        name: "Bourgogne"
      },
      {
        country: "France",
        name: "Bretagne"
      },
      {
        country: "France",
        name: "Centre"
      },
      {
        country: "France",
        name: "Champagne-Ardenne"
      },
      {
        country: "France",
        name: "Corse"
      },
      {
        country: "France",
        name: "Franche-Comte"
      },
      {
        country: "France",
        name: "Haute-Normandie"
      },
      {
        country: "France",
        name: "Ile-de-France"
      },
      {
        country: "France",
        name: "Languedoc-Roussillon"
      },
      {
        country: "France",
        name: "Limousin"
      },
      {
        country: "France",
        name: "Lorraine"
      },
      {
        country: "France",
        name: "Midi-Pyrenees"
      },
      {
        country: "France",
        name: "Nord-Pas-de-Calais"
      },
      {
        country: "France",
        name: "Pays de la Loire"
      },
      {
        country: "France",
        name: "Picardie"
      },
      {
        country: "France",
        name: "Poitou-Charentes"
      },
      {
        country: "France",
        name: "Provence-Alpes-Cote d'Azur"
      },
      {
        country: "France",
        name: "Rhone-Alpes"
      },

      {
        country: "Gabon",
        name: "Estuaire"
      },
      {
        country: "Gabon",
        name: "Haut-Ogooue"
      },
      {
        country: "Gabon",
        name: "Moyen-Ogooue"
      },
      {
        country: "Gabon",
        name: "Ngounie"
      },
      {
        country: "Gabon",
        name: "Nyanga"
      },
      {
        country: "Gabon",
        name: "Ogooue-Ivindo"
      },
      {
        country: "Gabon",
        name: "Ogooue-Lolo"
      },
      {
        country: "Gabon",
        name: "Ogooue-Maritime"
      },
      {
        country: "Gabon",
        name: "Woleu-Ntem"
      },
      //
      {
        country: "Gambia",
        name: "Banjul"
      },
      {
        country: "Gambia",
        name: "Central River"
      },
      {
        country: "Gambia",
        name: "Lower River"
      },
      {
        country: "Gambia",
        name: "North Bank"
      },
      {
        country: "Gambia",
        name: "Upper River"
      },
      {
        country: "Gambia",
        name: "Western"
      },
      //
      {
        country: "Germany",
        name: "Baden-Wuerttemberg"
      },
      {
        country: "Germany",
        name: "Bayern"
      },
      {
        country: "Germany",
        name: "Berlin"
      },
      {
        country: "Germany",
        name: "Brandenburg"
      },
      {
        country: "Germany",
        name: "Bremen"
      },
      {
        country: "Germany",
        name: "Hamburg"
      },
      {
        country: "Germany",
        name: "Hessen"
      },
      {
        country: "Germany",
        name: "Mecklenburg-Vorpommern"
      },
      {
        country: "Germany",
        name: "Niedersachsen"
      },
      {
        country: "Germany",
        name: "Nordrhein-Westfalen"
      },
      {
        country: "Germany",
        name: "Rheinland-Pfalz"
      },
      {
        country: "Germany",
        name: "Saarland"
      },
      {
        country: "Germany",
        name: "Sachsen"
      },
      {
        country: "Germany",
        name: "Sachsen-Anhalt"
      },
      {
        country: "Germany",
        name: "Schleswig-Holstein"
      },
      {
        country: "Germany",
        name: "Thueringen"
      },
      //
      {
        country: "Ghana",
        name: "Ashanti"
      },
      {
        country: "Ghana",
        name: "Brong-Ahafo"
      },
      {
        country: "Ghana",
        name: "Central"
      },
      {
        country: "Ghana",
        name: "Eastern"
      },
      {
        country: "Ghana",
        name: "Greater Accra"
      },
      {
        country: "Ghana",
        name: "Northern"
      },
      {
        country: "Ghana",
        name: "Upper East"
      },
      {
        country: "Ghana",
        name: "Upper West"
      },
      {
        country: "Ghana",
        name: "Volta"
      },
      {
        country: "Ghana",
        name: "Western"
      },
      //
      {
        country: "Greece",
        name: "Agion Oros"
      },
      {
        country: "Greece",
        name: "Achaia"
      },
      {
        country: "Greece",
        name: "Aitolia kai Akarmania"
      },
      {
        country: "Greece",
        name: "Argolis"
      },
      {
        country: "Greece",
        name: "Arkadia"
      },
      {
        country: "Greece",
        name: "Arta"
      },
      {
        country: "Greece",
        name: "Attiki"
      },
      {
        country: "Greece",
        name: "Chalkidiki"
      },
      {
        country: "Greece",
        name: "Chanion"
      },
      {
        country: "Greece",
        name: "Chios"
      },
      {
        country: "Greece",
        name: "Dodekanisos"
      },
      {
        country: "Greece",
        name: "Drama"
      },
      {
        country: "Greece",
        name: "Evros"
      },
      {
        country: "Greece",
        name: "Evrytania"
      },
      {
        country: "Greece",
        name: "Evvoia"
      },
      {
        country: "Greece",
        name: "Florina"
      },
      {
        country: "Greece",
        name: "Fokidos"
      },
      {
        country: "Greece",
        name: "Fthiotis"
      },
      {
        country: "Greece",
        name: "Grevena"
      },
      {
        country: "Greece",
        name: "Ileia"
      },
      {
        country: "Greece",
        name: "Imathia"
      },
      {
        country: "Greece",
        name: "Ioannina"
      },
      {
        country: "Greece",
        name: "Irakleion"
      },
      {
        country: "Greece",
        name: "Karditsa"
      },
      {
        country: "Greece",
        name: "Kastoria"
      },
      {
        country: "Greece",
        name: "Kavala"
      },
      {
        country: "Greece",
        name: "Kefallinia"
      },
      {
        country: "Greece",
        name: "Kerkyra"
      },
      {
        country: "Greece",
        name: "Kilkis"
      },
      {
        country: "Greece",
        name: "Korinthia"
      },
      {
        country: "Greece",
        name: "Kozani"
      },
      {
        country: "Greece",
        name: "Kyklades"
      },
      {
        country: "Greece",
        name: "Lakonia"
      },
      {
        country: "Greece",
        name: "Larisa"
      },
      {
        country: "Greece",
        name: "Lasithi"
      },
      {
        country: "Greece",
        name: "Lefkas"
      },
      {
        country: "Greece",
        name: "Lesvos"
      },
      {
        country: "Greece",
        name: "Magnisia"
      },
      {
        country: "Greece",
        name: "Messinia"
      },
      {
        country: "Greece",
        name: "Pella"
      },
      {
        country: "Greece",
        name: "Pieria"
      },
      {
        country: "Greece",
        name: "Preveza"
      },
      {
        country: "Greece",
        name: "Rethynnis"
      },
      {
        country: "Greece",
        name: "Rodopi"
      },
      {
        country: "Greece",
        name: "Samos"
      },
      {
        country: "Greece",
        name: "Serrai"
      },
      {
        country: "Greece",
        name: "Thesprotia"
      },
      {
        country: "Greece",
        name: "Thessaloniki"
      },
      {
        country: "Greece",
        name: "Trikala"
      },
      {
        country: "Greece",
        name: "Voiotia"
      },
      {
        country: "Greece",
        name: "Xanthi"
      },
      {
        country: "Greece",
        name: "Zakynthos"
      },
      //
      {
        country: "Greenland",
        name: "Avannaa (Nordgronland)"
      },
      {
        country: "Greenland",
        name: "Tunu (Ostgronland)"
      },
      {
        country: "Greenland",
        name: "Kitaa (Vestgronland)"
      },
      //
      {
        country: "Grenada",
        name: "Carriacou and Petit Martinique"
      },
      {
        country: "Grenada",
        name: "Saint Andrew"
      },
      {
        country: "Grenada",
        name: "Saint David"
      },
      {
        country: "Grenada",
        name: "Saint George"
      },
      {
        country: "Grenada",
        name: "Saint John"
      },
      {
        country: "Grenada",
        name: "Saint Mark"
      },
      {
        country: "Grenada",
        name: "Saint Patrick"
      },
      //
      {
        country: "Guatemala",
        name: "Alta Verapaz"
      },
      {
        country: "Guatemala",
        name: "Baja Verapaz"
      },
      {
        country: "Guatemala",
        name: "Chimaltenango"
      },
      {
        country: "Guatemala",
        name: "Chiquimula"
      },
      {
        country: "Guatemala",
        name: "El Progreso"
      },
      {
        country: "Guatemala",
        name: "Escuintla"
      },
      {
        country: "Guatemala",
        name: "Guatemala"
      },
      {
        country: "Guatemala",
        name: "Huehuetenango"
      },
      {
        country: "Guatemala",
        name: "Izabal"
      },
      {
        country: "Guatemala",
        name: "Jalapa"
      },
      {
        country: "Guatemala",
        name: "Jutiapa"
      },
      {
        country: "Guatemala",
        name: "Peten"
      },
      {
        country: "Guatemala",
        name: "Quetzaltenango"
      },
      {
        country: "Guatemala",
        name: "Quiche"
      },
      {
        country: "Guatemala",
        name: "Retalhuleu"
      },
      {
        country: "Guatemala",
        name: "Sacatepequez"
      },
      {
        country: "Guatemala",
        name: "San Marcos"
      },
      {
        country: "Guatemala",
        name: "Santa Rosa"
      },
      {
        country: "Guatemala",
        name: "Solola"
      },
      {
        country: "Guatemala",
        name: "Suchitepequez"
      },
      {
        country: "Guatemala",
        name: "Totonicapan"
      },
      {
        country: "Guatemala",
        name: "Zacapa"
      },
      //
      {
        country: "Guinea",
        name: "Beyla"
      },
      {
        country: "Guinea",
        name: "Boffa"
      },
      {
        country: "Guinea",
        name: "Boke"
      },
      {
        country: "Guinea",
        name: "Conakry"
      },
      {
        country: "Guinea",
        name: "Coyah"
      },
      {
        country: "Guinea",
        name: "Dabola"
      },
      {
        country: "Guinea",
        name: "Dalaba"
      },
      {
        country: "Guinea",
        name: "Dinguiraye"
      },
      {
        country: "Guinea",
        name: "Dubreka"
      },
      {
        country: "Guinea",
        name: "Faranah"
      },
      {
        country: "Guinea",
        name: "Forecariah"
      },
      {
        country: "Guinea",
        name: "Fria"
      },
      {
        country: "Guinea",
        name: "Gaoual"
      },
      {
        country: "Guinea",
        name: "Gueckedou"
      },
      {
        country: "Guinea",
        name: "Kankan"
      },
      {
        country: "Guinea",
        name: "Kerouane"
      },
      {
        country: "Guinea",
        name: "Kindia"
      },
      {
        country: "Guinea",
        name: "Kissidougou"
      },
      {
        country: "Guinea",
        name: "Koubia"
      },
      {
        country: "Guinea",
        name: "Koundara"
      },
      {
        country: "Guinea",
        name: "Kouroussa"
      },
      {
        country: "Guinea",
        name: "Labe"
      },
      {
        country: "Guinea",
        name: "Lelouma"
      },
      {
        country: "Guinea",
        name: "Lola"
      },
      {
        country: "Guinea",
        name: "Macenta"
      },
      {
        country: "Guinea",
        name: "Mali"
      },
      {
        country: "Guinea",
        name: "Mamou"
      },
      {
        country: "Guinea",
        name: "Mandiana"
      },
      {
        country: "Guinea",
        name: "Nzerekore"
      },
      {
        country: "Guinea",
        name: "Pita"
      },
      {
        country: "Guinea",
        name: "Siguiri"
      },
      {
        country: "Guinea",
        name: "Telimele"
      },
      {
        country: "Guinea",
        name: "Tougue"
      },
      {
        country: "Guinea",
        name: "Yomou"
      },
      //
      {
        country: "Guinea-Bissau",
        name: "Bafata"
      },
      {
        country: "Guinea-Bissau",
        name: "Biombo"
      },
      {
        country: "Guinea-Bissau",
        name: "Bissau"
      },
      {
        country: "Guinea-Bissau",
        name: "Bolama"
      },
      {
        country: "Guinea-Bissau",
        name: "Cacheu"
      },
      {
        country: "Guinea-Bissau",
        name: "Gabu"
      },
      {
        country: "Guinea-Bissau",
        name: "Oio"
      },
      {
        country: "Guinea-Bissau",
        name: "Quinara"
      },
      {
        country: "Guinea-Bissau",
        name: "Tombali"
      },
      //
      {
        country: "Guyana",
        name: "Barima-Waini"
      },
      {
        country: "Guyana",
        name: "Cuyuni-Mazaruni"
      },
      {
        country: "Guyana",
        name: "Demerara-Mahaica"
      },
      {
        country: "Guyana",
        name: "East Berbice-Corentyne"
      },
      {
        country: "Guyana",
        name: "Essequibo Islands-West Demerara"
      },
      {
        country: "Guyana",
        name: "Mahaica-Berbice"
      },
      {
        country: "Guyana",
        name: "Pomeroon-Supenaam"
      },
      {
        country: "Guyana",
        name: "Potaro-Siparuni"
      },
      {
        country: "Guyana",
        name: "Upper Demerara-Berbice"
      },
      {
        country: "Guyana",
        name: "Upper Takutu-Upper Essequibo"
      },
      {
        country: "Haiti",
        name: "Artibonite"
      },
      {
        country: "Haiti",
        name: "Centre"
      },
      {
        country: "Haiti",
        name: "Grand 'Anse"
      },
      {
        country: "Haiti",
        name: "Nord"
      },
      {
        country: "Haiti",
        name: "Nord-Est"
      },
      {
        country: "Haiti",
        name: "Nord-Ouest"
      },
      {
        country: "Haiti",
        name: "Ouest"
      },
      {
        country: "Haiti",
        name: "Sud"
      },
      {
        country: "Haiti",
        name: "Sud-Est"
      },
      {
        country: "Honduras",
        name: "Atlantida"
      },
      {
        country: "Honduras",
        name: "Choluteca"
      },
      {
        country: "Honduras",
        name: "Colon"
      },
      {
        country: "Honduras",
        name: "Comayagua"
      },
      {
        country: "Honduras",
        name: "Copan"
      },
      {
        country: "Honduras",
        name: "Cortes"
      },
      {
        country: "Honduras",
        name: "El Paraiso"
      },
      {
        country: "Honduras",
        name: "Francisco Morazan"
      },
      {
        country: "Honduras",
        name: "Gracias a Dios"
      },
      {
        country: "Honduras",
        name: "Intibuca"
      },
      {
        country: "Honduras",
        name: "Islas de la Bahia"
      },
      {
        country: "Honduras",
        name: "La Paz"
      },
      {
        country: "Honduras",
        name: "Lempira"
      },
      {
        country: "Honduras",
        name: "Ocotepeque"
      },
      {
        country: "Honduras",
        name: "Olancho"
      },
      {
        country: "Honduras",
        name: "Santa Barbara"
      },
      {
        country: "Honduras",
        name: "Valle"
      },
      {
        country: "Honduras",
        name: "Yoro"
      },
      {
        country: "Hungary",
        name: "Bacs-Kiskun"
      },
      {
        country: "Hungary",
        name: "Baranya"
      },
      {
        country: "Hungary",
        name: "Bekes"
      },
      {
        country: "Hungary",
        name: "Borsod-Abauj-Zemplen"
      },
      {
        country: "Hungary",
        name: "Csongrad"
      },
      {
        country: "Hungary",
        name: "Fejer"
      },
      {
        country: "Hungary",
        name: "Gyor-Moson-Sopron"
      },
      {
        country: "Hungary",
        name: "Hajdu-Bihar"
      },
      {
        country: "Hungary",
        name: "Heves"
      },
      {
        country: "Hungary",
        name: "Jasz-Nagykun-Szolnok"
      },
      {
        country: "Hungary",
        name: "Komarom-Esztergom"
      },
      {
        country: "Hungary",
        name: "Nograd"
      },
      {
        country: "Hungary",
        name: "Pest"
      },
      {
        country: "Hungary",
        name: "Somogy"
      },
      {
        country: "Hungary",
        name: "Szabolcs-Szatmar-Bereg"
      },
      {
        country: "Hungary",
        name: "Tolna"
      },
      {
        country: "Hungary",
        name: "Vas"
      },
      {
        country: "Hungary",
        name: "Veszprem"
      },
      {
        country: "Hungary",
        name: "Zala"
      },
      {
        country: "Hungary",
        name: "Bekescsaba"
      },
      {
        country: "Hungary",
        name: "Debrecen"
      },
      {
        country: "Hungary",
        name: "Dunaujvaros"
      },
      {
        country: "Hungary",
        name: "Eger"
      },
      {
        country: "Hungary",
        name: "Gyor"
      },
      {
        country: "Hungary",
        name: "Hodmezovasarhely"
      },
      {
        country: "Hungary",
        name: "Kaposvar"
      },
      {
        country: "Hungary",
        name: "Kecskemet"
      },
      {
        country: "Hungary",
        name: "Miskolc"
      },
      {
        country: "Hungary",
        name: "Nagykanizsa"
      },
      {
        country: "Hungary",
        name: "Nyiregyhaza"
      },
      {
        country: "Hungary",
        name: "Pecs"
      },
      {
        country: "Hungary",
        name: "Sopron"
      },
      {
        country: "Hungary",
        name: "Szeged"
      },
      {
        country: "Hungary",
        name: "Szekesfehervar"
      },
      {
        country: "Hungary",
        name: "Szolnok"
      },
      {
        country: "Hungary",
        name: "Szombathely"
      },
      {
        country: "Hungary",
        name: "Tatabanya"
      },
      {
        country: "Hungary",
        name: "Veszprem"
      },
      {
        country: "Hungary",
        name: "Zalaegerszeg"
      },
      //Iceland
      {
        country: "Iceland",
        name: "Austurland"
      },
      {
        country: "Iceland",
        name: "Hofudhborgarsvaedhi"
      },
      {
        country: "Iceland",
        name: "Nordhurland Eystra"
      },
      {
        country: "Iceland",
        name: "Nordhurland Vestra"
      },
      {
        country: "Iceland",
        name: "Sudhurland"
      },
      {
        country: "Iceland",
        name: "Sudhurnes"
      },
      {
        country: "Iceland",
        name: "Vestfirdhir"
      },
      {
        country: "Iceland",
        name: "Vesturland"
      },
      //India
      {
        country: "India",
        name: "Andaman and Nicobar Islands"
      },
      {
        country: "India",
        name: "Andhra Pradesh"
      },
      {
        country: "India",
        name: "Arunachal Pradesh"
      },
      {
        country: "India",
        name: "Assam"
      },
      {
        country: "India",
        name: "Bihar"
      },
      {
        country: "India",
        name: "Chandigarh"
      },
      {
        country: "India",
        name: "Chhattisgarh"
      },
      {
        country: "India",
        name: "Dadra and Nagar Haveli"
      },
      {
        country: "India",
        name: "Daman and Diu"
      },
      {
        country: "India",
        name: "Delhi"
      },
      {
        country: "India",
        name: "Goa"
      },
      {
        country: "India",
        name: "Gujarat"
      },
      {
        country: "India",
        name: "Haryana"
      },
      {
        country: "India",
        name: "Himachal Pradesh"
      },
      {
        country: "India",
        name: "Jammu and Kashmir"
      },
      {
        country: "India",
        name: "Jharkhand"
      },
      {
        country: "India",
        name: "Karnataka"
      },
      {
        country: "India",
        name: "Kerala"
      },
      {
        country: "India",
        name: "Lakshadweep"
      },
      {
        country: "India",
        name: "Madhya Pradesh"
      },
      {
        country: "India",
        name: "Maharashtra"
      },
      {
        country: "India",
        name: "Manipur"
      },
      {
        country: "India",
        name: "Meghalaya"
      },
      {
        country: "India",
        name: "Mizoram"
      },
      {
        country: "India",
        name: "Nagaland"
      },
      {
        country: "India",
        name: "Orissa"
      },
      {
        country: "India",
        name: "Pondicherry"
      },
      {
        country: "India",
        name: "Punjab"
      },
      {
        country: "India",
        name: "Rajasthan"
      },
      {
        country: "India",
        name: "Sikkim"
      },
      {
        country: "India",
        name: "Tamil Nadu"
      },
      {
        country: "India",
        name: "Tripura"
      },
      {
        country: "India",
        name: "Uttaranchal"
      },
      {
        country: "India",
        name: "Uttar Pradesh"
      },
      {
        country: "India",
        name: "West Bengal"
      },
      //Indonesia
      {
        country: "Indonesia",
        name: "Aceh"
      },
      {
        country: "Indonesia",
        name: "Bali"
      },
      {
        country: "Indonesia",
        name: "Banten"
      },
      {
        country: "Indonesia",
        name: "Bengkulu"
      },
      {
        country: "Indonesia",
        name: "Gorontalo"
      },
      {
        country: "Indonesia",
        name: "Irian Jaya Barat"
      },
      {
        country: "Indonesia",
        name: "Jakarta Raya"
      },
      {
        country: "Indonesia",
        name: "Jambi"
      },
      {
        country: "Indonesia",
        name: "Jawa Barat"
      },
      {
        country: "Indonesia",
        name: "Jawa Tengah"
      },
      {
        country: "Indonesia",
        name: "Jawa Timur"
      },
      {
        country: "Indonesia",
        name: "Kalimantan Barat"
      },
      {
        country: "Indonesia",
        name: "Kalimantan Selatan"
      },
      {
        country: "Indonesia",
        name: "Kalimantan Tengah"
      },
      {
        country: "Indonesia",
        name: "Kalimantan Timur"
      },
      {
        country: "Indonesia",
        name: "Kepulauan Bangka Belitung"
      },
      {
        country: "Indonesia",
        name: "Kepulauan Riau"
      },
      {
        country: "Indonesia",
        name: "Lampung"
      },
      {
        country: "Indonesia",
        name: "Maluku"
      },
      {
        country: "Indonesia",
        name: "Maluku Utara"
      },
      {
        country: "Indonesia",
        name: "Nusa Tenggara Barat"
      },
      {
        country: "Indonesia",
        name: "Nusa Tenggara Timur"
      },
      {
        country: "Indonesia",
        name: "Papua"
      },
      {
        country: "Indonesia",
        name: "Riau"
      },
      {
        country: "Indonesia",
        name: "Sulawesi Barat"
      },
      {
        country: "Indonesia",
        name: "Sulawesi Selatan"
      },
      {
        country: "Indonesia",
        name: "Sulawesi Tengah"
      },
      {
        country: "Indonesia",
        name: "Sulawesi Tenggara"
      },
      {
        country: "Indonesia",
        name: "Sulawesi Utara"
      },
      {
        country: "Indonesia",
        name: "Sumatera Barat"
      },
      {
        country: "Indonesia",
        name: "Sumatera Selatan"
      },
      {
        country: "Indonesia",
        name: "Sumatera Utara"
      },
      {
        country: "Indonesia",
        name: "Yogyakarta"
      },
      {
        country: "Iran",
        name: "Ardabil"
      },
      {
        country: "Iran",
        name: "Azarbayjan-e Gharbi"
      },
      {
        country: "Iran",
        name: "Azarbayjan-e Sharqi"
      },
      {
        country: "Iran",
        name: "Bushehr"
      },
      {
        country: "Iran",
        name: "Chahar Mahall va Bakhtiari"
      },
      {
        country: "Iran",
        name: "Esfahan"
      },
      {
        country: "Iran",
        name: "Fars"
      },
      {
        country: "Iran",
        name: "Gilan"
      },
      {
        country: "Iran",
        name: "Golestan"
      },
      {
        country: "Iran",
        name: "Hamadan"
      },
      {
        country: "Iran",
        name: "Hormozgan"
      },
      {
        country: "Iran",
        name: "Ilam"
      },
      {
        country: "Iran",
        name: "Kerman"
      },
      {
        country: "Iran",
        name: "Kermanshah"
      },
      {
        country: "Iran",
        name: "Khorasan-e Janubi"
      },
      {
        country: "Iran",
        name: "Khorasan-e Razavi"
      },
      {
        country: "Iran",
        name: "Khorasan-e Shemali"
      },
      {
        country: "Iran",
        name: "Khuzestan"
      },
      {
        country: "Iran",
        name: "Kohgiluyeh va Buyer Ahmad"
      },
      {
        country: "Iran",
        name: "Kordestan"
      },
      {
        country: "Iran",
        name: "Lorestan"
      },
      {
        country: "Iran",
        name: "Markazi"
      },
      {
        country: "Iran",
        name: "Mazandaran"
      },
      {
        country: "Iran",
        name: "Qazvin"
      },
      {
        country: "Iran",
        name: "Qom"
      },
      {
        country: "Iran",
        name: "Semnan"
      },
      {
        country: "Iran",
        name: "Sistan va Baluchestan"
      },
      {
        country: "Iran",
        name: "Tehran"
      },
      {
        country: "Iran",
        name: "Yazd"
      },
      {
        country: "Iran",
        name: "Zanjan"
      },
      //
      {
        country: "Iraq",
        name: "Al Anbar"
      },
      {
        country: "Iraq",
        name: "Al Basrah"
      },
      {
        country: "Iraq",
        name: "Al Muthanna"
      },
      {
        country: "Iraq",
        name: "Al Qadisiyah"
      },
      {
        country: "Iraq",
        name: "An Najaf"
      },
      {
        country: "Iraq",
        name: "Arbil"
      },
      {
        country: "Iraq",
        name: "As Sulaymaniyah"
      },
      {
        country: "Iraq",
        name: "At Ta'mim"
      },
      {
        country: "Iraq",
        name: "Babil"
      },
      {
        country: "Iraq",
        name: "Baghdad"
      },
      {
        country: "Iraq",
        name: "Dahuk"
      },
      {
        country: "Iraq",
        name: "Dhi Qar"
      },
      {
        country: "Iraq",
        name: "Diyala"
      },
      {
        country: "Iraq",
        name: "Karbala'"
      },
      {
        country: "Iraq",
        name: "Maysan"
      },
      {
        country: "Iraq",
        name: "Ninawa"
      },
      {
        country: "Iraq",
        name: "Salah ad Din"
      },
      {
        country: "Iraq",
        name: "Wasit"
      },
      //
      {
        country: "Ireland",
        name: "Carlow"
      },
      {
        country: "Ireland",
        name: "Cavan"
      },
      {
        country: "Ireland",
        name: "Clare"
      },
      {
        country: "Ireland",
        name: "Cork"
      },
      {
        country: "Ireland",
        name: "Donegal"
      },
      {
        country: "Ireland",
        name: "Dublin"
      },
      {
        country: "Ireland",
        name: "Galway"
      },
      {
        country: "Ireland",
        name: "Kerry"
      },
      {
        country: "Ireland",
        name: "Kildare"
      },
      {
        country: "Ireland",
        name: "Kilkenny"
      },
      {
        country: "Ireland",
        name: "Laois"
      },
      {
        country: "Ireland",
        name: "Leitrim"
      },
      {
        country: "Ireland",
        name: "Limerick"
      },
      {
        country: "Ireland",
        name: "Longford"
      },
      {
        country: "Ireland",
        name: "Louth"
      },
      {
        country: "Ireland",
        name: "Mayo"
      },
      {
        country: "Ireland",
        name: "Meath"
      },
      {
        country: "Ireland",
        name: "Monaghan"
      },
      {
        country: "Ireland",
        name: "Offaly"
      },
      {
        country: "Ireland",
        name: "Roscommon"
      },
      {
        country: "Ireland",
        name: "Sligo"
      },
      {
        country: "Ireland",
        name: "Tipperary"
      },
      {
        country: "Ireland",
        name: "Waterford"
      },
      {
        country: "Ireland",
        name: "Westmeath"
      },
      {
        country: "Ireland",
        name: "Wexford"
      },
      {
        country: "Ireland",
        name: "Wicklow"
      },
      {
        country: "Israel",
        name: "Central"
      },
      {
        country: "Israel",
        name: "Haifa"
      },
      {
        country: "Israel",
        name: "Jerusalem"
      },
      {
        country: "Israel",
        name: "Northern"
      },
      {
        country: "Israel",
        name: "Southern"
      },
      {
        country: "Israel",
        name: "Tel Aviv"
      },
      {
        country: "Italy",
        name: "Abruzzo"
      },
      {
        country: "Italy",
        name: "Basilicata"
      },
      {
        country: "Italy",
        name: "Calabria"
      },
      {
        country: "Italy",
        name: "Campania"
      },
      {
        country: "Italy",
        name: "Emilia-Romagna"
      },
      {
        country: "Italy",
        name: "Friuli-Venezia Giulia"
      },
      {
        country: "Italy",
        name: "Lazio"
      },
      {
        country: "Italy",
        name: "Liguria"
      },
      {
        country: "Italy",
        name: "Lombardia"
      },
      {
        country: "Italy",
        name: "Marche"
      },
      {
        country: "Italy",
        name: "Molise"
      },
      {
        country: "Italy",
        name: "Piemonte"
      },
      {
        country: "Italy",
        name: "Puglia"
      },
      {
        country: "Italy",
        name: "Sardegna"
      },
      {
        country: "Italy",
        name: "Sicilia"
      },
      {
        country: "Italy",
        name: "Toscana"
      },
      {
        country: "Italy",
        name: "Trentino-Alto Adige"
      },
      {
        country: "Italy",
        name: "Umbria"
      },
      {
        country: "Italy",
        name: "Valle d'Aosta"
      },
      {
        country: "Italy",
        name: "Veneto"
      },
      {
        country: "Jamaica",
        name: "Clarendon"
      },
      {
        country: "Jamaica",
        name: "Hanover"
      },
      {
        country: "Jamaica",
        name: "Kingston"
      },
      {
        country: "Jamaica",
        name: "Manchester"
      },
      {
        country: "Jamaica",
        name: "Portland"
      },
      {
        country: "Jamaica",
        name: "Saint Andrew"
      },
      {
        country: "Jamaica",
        name: "Saint Ann"
      },
      {
        country: "Jamaica",
        name: "Saint Catherine"
      },
      {
        country: "Jamaica",
        name: "Saint Elizabeth"
      },
      {
        country: "Jamaica",
        name: "Saint James"
      },
      {
        country: "Jamaica",
        name: "Saint Mary"
      },
      {
        country: "Jamaica",
        name: "Saint Thomas"
      },
      {
        country: "Jamaica",
        name: "Trelawny"
      },
      {
        country: "Jamaica",
        name: "Westmoreland"
      },
      {
        country: "Japan",
        name: "Aichi"
      },
      {
        country: "Japan",
        name: "Akita"
      },
      {
        country: "Japan",
        name: "Aomori"
      },
      {
        country: "Japan",
        name: "Chiba"
      },
      {
        country: "Japan",
        name: "Ehime"
      },
      {
        country: "Japan",
        name: "Fukui"
      },
      {
        country: "Japan",
        name: "Fukuoka"
      },
      {
        country: "Japan",
        name: "Fukushima"
      },
      {
        country: "Japan",
        name: "Gifu"
      },
      {
        country: "Japan",
        name: "Gumma"
      },
      {
        country: "Japan",
        name: "Hiroshima"
      },
      {
        country: "Japan",
        name: "Hokkaido"
      },
      {
        country: "Japan",
        name: "Hyogo"
      },
      {
        country: "Japan",
        name: "Ibaraki"
      },
      {
        country: "Japan",
        name: "Ishikawa"
      },
      {
        country: "Japan",
        name: "Iwate"
      },
      {
        country: "Japan",
        name: "Kagawa"
      },
      {
        country: "Japan",
        name: "Kagoshima"
      },
      {
        country: "Japan",
        name: "Kanagawa"
      },
      {
        country: "Japan",
        name: "Kochi"
      },
      {
        country: "Japan",
        name: "Kumamoto"
      },
      {
        country: "Japan",
        name: "Kyoto"
      },
      {
        country: "Japan",
        name: "Mie"
      },
      {
        country: "Japan",
        name: "Miyagi"
      },
      {
        country: "Japan",
        name: "Miyazaki"
      },
      {
        country: "Japan",
        name: "Nagano"
      },
      {
        country: "Japan",
        name: "Nagasaki"
      },
      {
        country: "Japan",
        name: "Nara"
      },
      {
        country: "Japan",
        name: "Niigata"
      },
      {
        country: "Japan",
        name: "Oita"
      },
      {
        country: "Japan",
        name: "Okayama"
      },
      {
        country: "Japan",
        name: "Okinawa"
      },
      {
        country: "Japan",
        name: "Osaka"
      },
      {
        country: "Japan",
        name: "Saga"
      },
      {
        country: "Japan",
        name: "Saitama"
      },
      {
        country: "Japan",
        name: "Shiga"
      },
      {
        country: "Japan",
        name: "Shimane"
      },
      {
        country: "Japan",
        name: "Shizuoka"
      },
      {
        country: "Japan",
        name: "Tochigi"
      },
      {
        country: "Japan",
        name: "Tokushima"
      },
      {
        country: "Japan",
        name: "Tokyo"
      },
      {
        country: "Japan",
        name: "Tottori"
      },
      {
        country: "Japan",
        name: "Toyama"
      },
      {
        country: "Japan",
        name: "Wakayama"
      },
      {
        country: "Japan",
        name: "Yamagata"
      },
      {
        country: "Japan",
        name: "Yamaguchi"
      },
      {
        country: "Japan",
        name: "Yamanashi"
      },
      //
      {
        country: "Jordan",
        name: "Ajlun"
      },
      {
        country: "Jordan",
        name: "Al 'Aqabah"
      },
      {
        country: "Jordan",
        name: "Al Balqa'"
      },
      {
        country: "Jordan",
        name: "Al Karak"
      },
      {
        country: "Jordan",
        name: "Al Mafraq"
      },
      {
        country: "Jordan",
        name: "'Amman"
      },
      {
        country: "Jordan",
        name: "At Tafilah"
      },
      {
        country: "Jordan",
        name: "Az Zarqa'"
      },
      {
        country: "Jordan",
        name: "Irbid"
      },
      {
        country: "Jordan",
        name: "Jarash"
      },
      {
        country: "Jordan",
        name: "Ma'an"
      },
      {
        country: "Jordan",
        name: "Madaba"
      },
      {
        country: "Kazakhstan",
        name: "Almaty Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Almaty Qalasy"
      },
      {
        country: "Kazakhstan",
        name: "Aqmola Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Aqtobe Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Astana Qalasy"
      },
      {
        country: "Kazakhstan",
        name: "Atyrau Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Batys Qazaqstan Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Bayqongyr Qalasy"
      },
      {
        country: "Kazakhstan",
        name: "Mangghystau Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Ongtustik Qazaqstan Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Pavlodar Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Qaraghandy Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Qostanay Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Qyzylorda Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Shyghys Qazaqstan Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Soltustik Qazaqstan Oblysy"
      },
      {
        country: "Kazakhstan",
        name: "Zhambyl Oblysy"
      },
      {
        country: "Kenya",
        name: "Central"
      },
      {
        country: "Kenya",
        name: "Coast"
      },
      {
        country: "Kenya",
        name: "Eastern"
      },
      {
        country: "Kenya",
        name: "Nairobi Area"
      },
      {
        country: "Kenya",
        name: "North Eastern"
      },
      {
        country: "Kenya",
        name: "Nyanza"
      },
      {
        country: "Kenya",
        name: "Rift Valley"
      },
      {
        country: "Kenya",
        name: "Western"
      },
      {
        country: "Korea North",
        name: "Chagang"
      },
      {
        country: "Korea North",
        name: "North Hamgyong"
      },
      {
        country: "Korea North",
        name: "South Hamgyong"
      },
      {
        country: "Korea North",
        name: "North Hwanghae"
      },
      {
        country: "Korea North",
        name: "South Hwanghae"
      },
      {
        country: "Korea North",
        name: "Kangwon"
      },
      {
        country: "Korea North",
        name: "North P'yongan"
      },
      {
        country: "Korea North",
        name: "South P'yongan"
      },
      {
        country: "Korea North",
        name: "Yanggang"
      },
      {
        country: "Korea North",
        name: "Kaesong"
      },
      {
        country: "Korea North",
        name: "Najin"
      },
      {
        country: "Korea North",
        name: "Namp'o"
      },
      {
        country: "Korea North",
        name: "Pyongyang"
      },
      {
        country: "Korea South",
        name: "Seoul"
      },
      {
        country: "Korea South",
        name: "Busan City"
      },
      {
        country: "Korea South",
        name: "Daegu City"
      },
      {
        country: "Korea South",
        name: "Incheon City"
      },
      {
        country: "Korea South",
        name: "Gwangju City"
      },
      {
        country: "Korea South",
        name: "Daejeon City"
      },
      {
        country: "Korea South",
        name: "Ulsan"
      },
      {
        country: "Korea South",
        name: "Gyeonggi Province"
      },
      {
        country: "Korea South",
        name: "Gangwon Province"
      },
      {
        country: "Korea South",
        name: "North Chungcheong Province"
      },
      {
        country: "Korea South",
        name: "South Chungcheong Province"
      },
      {
        country: "Korea South",
        name: "North Jeolla Province"
      },
      {
        country: "Korea South",
        name: "South Jeolla Province"
      },
      {
        country: "Korea South",
        name: "North Gyeongsang Province"
      },
      {
        country: "Korea South",
        name: "South Gyeongsang Province"
      },
      {
        country: "Korea South",
        name: "Jeju"
      },
      {
        country: "Kuwait",
        name: "Al Ahmadi"
      },
      {
        country: "Kuwait",
        name: "Al Farwaniyah"
      },
      {
        country: "Kuwait",
        name: "Al Asimah"
      },
      {
        country: "Kuwait",
        name: "Al Jahra"
      },
      {
        country: "Kuwait",
        name: "Hawalli"
      },
      {
        country: "Kuwait",
        name: "Mubarak Al-Kabeer"
      },
      {
        country: "Kyrgyzstan",
        name: "Batken Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Bishkek Shaary"
      },
      {
        country: "Kyrgyzstan",
        name: "Chuy Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Jalal-Abad Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Naryn Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Osh Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Talas Oblasty"
      },
      {
        country: "Kyrgyzstan",
        name: "Ysyk-Kol Oblasty"
      },
      {
        country: "Laos",
        name: "Attapu"
      },
      {
        country: "Laos",
        name: "Bokeo"
      },
      {
        country: "Laos",
        name: "Bolikhamxai"
      },
      {
        country: "Laos",
        name: "Champasak"
      },
      {
        country: "Laos",
        name: "Houaphan"
      },
      {
        country: "Laos",
        name: "Khammouan"
      },
      {
        country: "Laos",
        name: "Louangnamtha"
      },
      {
        country: "Laos",
        name: "Louangphrabang"
      },
      {
        country: "Laos",
        name: "Oudomxai"
      },
      {
        country: "Laos",
        name: "Phongsali"
      },
      {
        country: "Laos",
        name: "Salavan"
      },
      {
        country: "Laos",
        name: "Savannakhet"
      },
      {
        country: "Laos",
        name: "Viangchan"
      },
      {
        country: "Laos",
        name: "Viangchan"
      },
      {
        country: "Laos",
        name: "Xaignabouli"
      },
      {
        country: "Laos",
        name: "Xaisomboun"
      },
      {
        country: "Laos",
        name: "Xekong"
      },
      {
        country: "Laos",
        name: "Xiangkhoang"
      },
      {
        country: "Latvia",
        name: "Aizkraukles Rajons"
      },
      {
        country: "Latvia",
        name: "Aluksnes Rajons"
      },
      {
        country: "Latvia",
        name: "Balvu Rajons"
      },
      {
        country: "Latvia",
        name: "Bauskas Rajons"
      },
      {
        country: "Latvia",
        name: "Cesu Rajons"
      },
      {
        country: "Latvia",
        name: "Daugavpils"
      },
      {
        country: "Latvia",
        name: "Daugavpils Rajons"
      },
      {
        country: "Latvia",
        name: "Dobeles Rajons"
      },
      {
        country: "Latvia",
        name: "Gulbenes Rajons"
      },
      {
        country: "Latvia",
        name: "Jekabpils Rajons"
      },
      {
        country: "Latvia",
        name: "Jelgava"
      },
      {
        country: "Latvia",
        name: "Jelgavas Rajons"
      },
      {
        country: "Latvia",
        name: "Jurmala"
      },
      {
        country: "Latvia",
        name: "Kraslavas Rajons"
      },
      {
        country: "Latvia",
        name: "Kuldigas Rajons"
      },
      {
        country: "Latvia",
        name: "Liepaja"
      },
      {
        country: "Latvia",
        name: "Liepajas Rajons"
      },
      {
        country: "Latvia",
        name: "Limbazu Rajons"
      },
      {
        country: "Latvia",
        name: "Ludzas Rajons"
      },
      {
        country: "Latvia",
        name: "Madonas Rajons"
      },
      {
        country: "Latvia",
        name: "Ogres Rajons"
      },
      {
        country: "Latvia",
        name: "Preilu Rajons"
      },
      {
        country: "Latvia",
        name: "Rezekne"
      },
      {
        country: "Latvia",
        name: "Rezeknes Rajons"
      },
      {
        country: "Latvia",
        name: "Riga"
      },
      {
        country: "Latvia",
        name: "Rigas Rajons"
      },
      {
        country: "Latvia",
        name: "Saldus Rajons"
      },
      {
        country: "Latvia",
        name: "Talsu Rajons"
      },
      {
        country: "Latvia",
        name: "Tukuma Rajons"
      },
      {
        country: "Latvia",
        name: "Valkas Rajons"
      },
      {
        country: "Latvia",
        name: "Valmieras Rajons"
      },
      {
        country: "Latvia",
        name: "Ventspils"
      },
      {
        country: "Latvia",
        name: "Ventspils Rajons"
      },
      {
        country: "Lebanon",
        name: "Beyrouth"
      },
      {
        country: "Lebanon",
        name: "Beqaa"
      },
      {
        country: "Lebanon",
        name: "Liban-Nord"
      },
      {
        country: "Lebanon",
        name: "Liban-Sud"
      },
      {
        country: "Lebanon",
        name: "Mont-Liban"
      },
      {
        country: "Lebanon",
        name: "Nabatiye"
      },
      {
        country: "Lesotho",
        name: "Berea"
      },
      {
        country: "Lesotho",
        name: "Butha-Buthe"
      },
      {
        country: "Lesotho",
        name: "Leribe"
      },
      {
        country: "Lesotho",
        name: "Mafeteng"
      },
      {
        country: "Lesotho",
        name: "Maseru"
      },
      {
        country: "Lesotho",
        name: "Mohale's Hoek"
      },
      {
        country: "Lesotho",
        name: "Mokhotlong"
      },
      {
        country: "Lesotho",
        name: "Qacha's Nek"
      },
      {
        country: "Lesotho",
        name: "Quthing"
      },
      {
        country: "Lesotho",
        name: "Thaba-Tseka"
      },
      {
        country: "Liberia",
        name: "Bomi"
      },
      {
        country: "Liberia",
        name: "Bong"
      },
      {
        country: "Liberia",
        name: "Gbarpolu"
      },
      {
        country: "Liberia",
        name: "Grand Bassa"
      },
      {
        country: "Liberia",
        name: "Grand Cape Mount"
      },
      {
        country: "Liberia",
        name: "Grand Gedeh"
      },
      {
        country: "Liberia",
        name: "Grand Kru"
      },
      {
        country: "Liberia",
        name: "Lofa"
      },
      {
        country: "Liberia",
        name: "Margibi"
      },
      {
        country: "Liberia",
        name: "Maryland"
      },
      {
        country: "Liberia",
        name: "Montserrado"
      },
      {
        country: "Liberia",
        name: "Nimba"
      },
      {
        country: "Liberia",
        name: "River Cess"
      },
      {
        country: "Liberia",
        name: "River Gee"
      },
      {
        country: "Liberia",
        name: "Sinoe"
      },
      {
        country: "Libya",
        name: "Ajdabiya"
      },
      {
        country: "Libya",
        name: "Al 'Aziziyah"
      },
      {
        country: "Libya",
        name: "Al Fatih"
      },
      {
        country: "Libya",
        name: "Al Jabal al Akhdar"
      },
      {
        country: "Libya",
        name: "Al Jufrah"
      },
      {
        country: "Libya",
        name: "Al Khums"
      },
      {
        country: "Libya",
        name: "Al Kufrah"
      },
      {
        country: "Libya",
        name: "An Nuqat al Khams"
      },
      {
        country: "Libya",
        name: "Ash Shati'"
      },
      {
        country: "Libya",
        name: "Awbari"
      },
      {
        country: "Libya",
        name: "Az Zawiyah"
      },
      {
        country: "Libya",
        name: "Banghazi"
      },
      {
        country: "Libya",
        name: "Darnah"
      },
      {
        country: "Libya",
        name: "Ghadamis"
      },
      {
        country: "Libya",
        name: "Gharyan"
      },
      {
        country: "Libya",
        name: "Misratah"
      },
      {
        country: "Libya",
        name: "Murzuq"
      },
      {
        country: "Libya",
        name: "Sabha"
      },
      {
        country: "Libya",
        name: "Sawfajjin"
      },
      {
        country: "Libya",
        name: "Surt"
      },
      {
        country: "Libya",
        name: "Tarabulus"
      },
      {
        country: "Libya",
        name: "Tarhunah"
      },
      {
        country: "Libya",
        name: "Tubruq"
      },
      {
        country: "Libya",
        name: "Yafran"
      },
      {
        country: "Libya",
        name: "Zlitan"
      },
      {
        country: "Liechtenstein",
        name: "Balzers"
      },
      {
        country: "Liechtenstein",
        name: "Eschen"
      },
      {
        country: "Liechtenstein",
        name: "Gamprin"
      },
      {
        country: "Liechtenstein",
        name: "Mauren"
      },
      {
        country: "Liechtenstein",
        name: "Planken"
      },
      {
        country: "Liechtenstein",
        name: "Ruggell"
      },
      {
        country: "Liechtenstein",
        name: "Schaan"
      },
      {
        country: "Liechtenstein",
        name: "Schellenberg"
      },
      {
        country: "Liechtenstein",
        name: "Triesen"
      },
      {
        country: "Liechtenstein",
        name: "Triesenberg"
      },
      {
        country: "Liechtenstein",
        name: "Vaduz"
      },
      {
        country: "Lithuania",
        name: "Alytaus"
      },
      {
        country: "Lithuania",
        name: "Kauno"
      },
      {
        country: "Lithuania",
        name: "Klaipedos"
      },
      {
        country: "Lithuania",
        name: "Marijampoles"
      },
      {
        country: "Lithuania",
        name: "Panevezio"
      },
      {
        country: "Lithuania",
        name: "Siauliu"
      },
      {
        country: "Lithuania",
        name: "Taurages"
      },
      {
        country: "Lithuania",
        name: "Telsiu"
      },
      {
        country: "Lithuania",
        name: "Utenos"
      },
      {
        country: "Lithuania",
        name: "Vilniaus"
      },
      {
        country: "Luxembourg",
        name: "Diekirch"
      },
      {
        country: "Luxembourg",
        name: "Grevenmacher"
      },
      {
        country: "Luxembourg",
        name: "Luxembourg"
      },
      //Macedoniac

      {
        country: "Macedoniac",
        name: "Aerodrom"
      },
      {
        country: "Macedoniac",
        name: "Aracinovo"
      },
      {
        country: "Macedoniac",
        name: "Berovo"
      },
      {
        country: "Macedoniac",
        name: "Bitola"
      },
      {
        country: "Macedoniac",
        name: "Bogdanci"
      },
      {
        country: "Macedoniac",
        name: "Bogovinje"
      },
      {
        country: "Macedoniac",
        name: "Bosilovo"
      },
      {
        country: "Macedoniac",
        name: "Brvenica"
      },
      {
        country: "Macedoniac",
        name: "Butel"
      },
      {
        country: "Macedoniac",
        name: "Cair"
      },
      {
        country: "Macedoniac",
        name: "Caska"
      },
      {
        country: "Macedoniac",
        name: "Centar"
      },
      {
        country: "Macedoniac",
        name: "Centar Zupa"
      },
      {
        country: "Macedoniac",
        name: "Cesinovo"
      },
      {
        country: "Macedoniac",
        name: "Cucer-Sandevo"
      },
      {
        country: "Macedoniac",
        name: "Debar"
      },
      {
        country: "Macedoniac",
        name: "Debartsa"
      },
      {
        country: "Macedoniac",
        name: "Delcevo"
      },
      {
        country: "Macedoniac",
        name: "Demir Hisar"
      },
      {
        country: "Macedoniac",
        name: "Demir Kapija"
      },
      {
        country: "Macedoniac",
        name: "Dojran"
      },
      {
        country: "Macedoniac",
        name: "Dolneni"
      },
      {
        country: "Macedoniac",
        name: "Drugovo"
      },
      {
        country: "Macedoniac",
        name: "Gazi Baba"
      },
      {
        country: "Macedoniac",
        name: "Gevgelija"
      },
      {
        country: "Macedoniac",
        name: "Gjorce Petrov"
      },
      {
        country: "Macedoniac",
        name: "Gostivar"
      },
      {
        country: "Macedoniac",
        name: "Gradsko"
      },
      {
        country: "Macedoniac",
        name: "Ilinden"
      },
      {
        country: "Macedoniac",
        name: "Jegunovce"
      },
      {
        country: "Macedoniac",
        name: "Karbinci"
      },
      {
        country: "Macedoniac",
        name: "Karpos"
      },
      {
        country: "Macedoniac",
        name: "Kavadarci"
      },
      {
        country: "Macedoniac",
        name: "Kicevo"
      },
      {
        country: "Macedoniac",
        name: "Kisela Voda"
      },
      {
        country: "Macedoniac",
        name: "Kocani"
      },
      {
        country: "Macedoniac",
        name: "Konce"
      },
      {
        country: "Macedoniac",
        name: "Kratovo"
      },
      {
        country: "Macedoniac",
        name: "Kriva Palanka"
      },
      {
        country: "Macedoniac",
        name: "Krivogastani"
      },
      {
        country: "Macedoniac",
        name: "Krusevo"
      },
      {
        country: "Macedoniac",
        name: "Kumanovo"
      },
      {
        country: "Macedoniac",
        name: "Lipkovo"
      },
      {
        country: "Macedoniac",
        name: "Lozovo"
      },
      {
        country: "Macedoniac",
        name: "Makedonska Kamenica"
      },
      {
        country: "Macedoniac",
        name: "Makedonski Brod"
      },
      {
        country: "Macedoniac",
        name: "Mavrovo i Rastusa"
      },
      {
        country: "Macedoniac",
        name: "Mogila"
      },
      {
        country: "Macedoniac",
        name: "Negotino"
      },
      {
        country: "Macedoniac",
        name: "Novaci"
      },
      {
        country: "Macedoniac",
        name: "Novo Selo"
      },
      {
        country: "Macedoniac",
        name: "Ohrid"
      },
      {
        country: "Macedoniac",
        name: "Oslomej"
      },
      {
        country: "Macedoniac",
        name: "Pehcevo"
      },
      {
        country: "Macedoniac",
        name: "Petrovec"
      },
      {
        country: "Macedoniac",
        name: "Plasnica"
      },
      {
        country: "Macedoniac",
        name: "Prilep"
      },
      {
        country: "Macedoniac",
        name: "Probistip"
      },
      {
        country: "Macedoniac",
        name: "Radovis"
      },
      {
        country: "Macedoniac",
        name: "Rankovce"
      },
      {
        country: "Macedoniac",
        name: "Resen"
      },
      {
        country: "Macedoniac",
        name: "Rosoman"
      },
      {
        country: "Macedoniac",
        name: "Saraj"
      },
      {
        country: "Macedoniac",
        name: "Skopje"
      },
      {
        country: "Macedoniac",
        name: "Sopiste"
      },
      {
        country: "Macedoniac",
        name: "Staro Nagoricane"
      },
      {
        country: "Macedoniac",
        name: "Stip"
      },
      {
        country: "Macedoniac",
        name: "Struga"
      },
      {
        country: "Macedoniac",
        name: "Strumica"
      },
      {
        country: "Macedoniac",
        name: "Studenicani"
      },
      {
        country: "Macedoniac",
        name: "Suto Orizari"
      },
      {
        country: "Macedoniac",
        name: "Sveti Nikole"
      },
      {
        country: "Macedoniac",
        name: "Tearce"
      },
      {
        country: "Macedoniac",
        name: "Tetovo"
      },
      {
        country: "Macedoniac",
        name: "Valandovo"
      },
      {
        country: "Macedoniac",
        name: "Vasilevo"
      },
      {
        country: "Macedoniac",
        name: "Veles"
      },
      {
        country: "Macedoniac",
        name: "Vevcani"
      },
      {
        country: "Macedoniac",
        name: "Vinica"
      },
      {
        country: "Macedoniac",
        name: "Vranestica"
      },
      {
        country: "Macedoniac",
        name: "Vrapciste"
      },
      {
        country: "Macedoniac",
        name: "Zajas"
      },
      {
        country: "Macedoniac",
        name: "Zelenikovo"
      },
      {
        country: "Macedoniac",
        name: "Zelino"
      },
      {
        country: "Macedoniac",
        name: "Zrnovci"
      },

      //Madagascar

      {
        country: "Madagascar",
        name: "Antananarivo"
      },
      {
        country: "Madagascar",
        name: "Antsiranana"
      },
      {
        country: "Madagascar",
        name: "Fianarantsoa"
      },
      {
        country: "Madagascar",
        name: "Mahajanga"
      },
      {
        country: "Madagascar",
        name: "Toamasina"
      },
      {
        country: "Madagascar",
        name: "Toliara"
      },

      //Malawi
      {
        country: "Malawi",
        name: "Balaka"
      },
      {
        country: "Malawi",
        name: "Blantyre"
      },
      {
        country: "Malawi",
        name: "Chikwawa"
      },
      {
        country: "Malawi",
        name: "Chiradzulu"
      },
      {
        country: "Malawi",
        name: "Chitipa"
      },
      {
        country: "Malawi",
        name: "Dedza"
      },
      {
        country: "Malawi",
        name: "Dowa"
      },
      {
        country: "Malawi",
        name: "Karonga"
      },
      {
        country: "Malawi",
        name: "Kasungu"
      },
      {
        country: "Malawi",
        name: "Likoma"
      },
      {
        country: "Malawi",
        name: "Lilongwe"
      },
      {
        country: "Malawi",
        name: "Machinga"
      },
      {
        country: "Malawi",
        name: "Mangochi"
      },
      {
        country: "Malawi",
        name: "Mchinji"
      },
      {
        country: "Malawi",
        name: "Mulanje"
      },
      {
        country: "Malawi",
        name: "Mwanza"
      },
      {
        country: "Malawi",
        name: "Mzimba"
      },
      {
        country: "Malawi",
        name: "Ntcheu"
      },
      {
        country: "Malawi",
        name: "Nkhata Bay"
      },
      {
        country: "Malawi",
        name: "Nkhotakota"
      },
      {
        country: "Malawi",
        name: "Nsanje"
      },
      {
        country: "Malawi",
        name: "Ntchisi"
      },
      {
        country: "Malawi",
        name: "Phalombe"
      },
      {
        country: "Malawi",
        name: "Rumphi"
      },
      {
        country: "Malawi",
        name: "Salima"
      },
      {
        country: "Malawi",
        name: "Thyolo"
      },
      {
        country: "Malawi",
        name: "Zomba"
      },
      //Malaysia
      {
        country: "Malaysia",
        name: "Johor"
      },
      {
        country: "Malaysia",
        name: "Kedah"
      },
      {
        country: "Malaysia",
        name: "Kelantan"
      },
      {
        country: "Malaysia",
        name: "Kuala Lumpur"
      },
      {
        country: "Malaysia",
        name: "Labuan"
      },
      {
        country: "Malaysia",
        name: "Malacca"
      },
      {
        country: "Malaysia",
        name: "Negeri Sembilan"
      },
      {
        country: "Malaysia",
        name: "Pahang"
      },
      {
        country: "Malaysia",
        name: "Perak"
      },
      {
        country: "Malaysia",
        name: "Perlis"
      },
      {
        country: "Malaysia",
        name: "Penang"
      },
      {
        country: "Malaysia",
        name: "Sabah"
      },
      {
        country: "Malaysia",
        name: "Sarawak"
      },
      {
        country: "Malaysia",
        name: "Selangor"
      },
      {
        country: "Malaysia",
        name: "Terengganu"
      },

      {
        country: "Maldives",
        name: "Alifu"
      },
      {
        country: "Maldives",
        name: "Baa"
      },
      {
        country: "Maldives",
        name: "Dhaalu"
      },
      {
        country: "Maldives",
        name: "Faafu"
      },
      {
        country: "Maldives",
        name: "Gaafu Alifu"
      },
      {
        country: "Maldives",
        name: "Gaafu Dhaalu"
      },
      {
        country: "Maldives",
        name: "Gnaviyani"
      },
      {
        country: "Maldives",
        name: "Haa Alifu"
      },
      {
        country: "Maldives",
        name: "Haa Dhaalu"
      },
      {
        country: "Maldives",
        name: "Kaafu"
      },
      {
        country: "Maldives",
        name: "Laamu"
      },
      {
        country: "Maldives",
        name: "Lhaviyani"
      },
      {
        country: "Maldives",
        name: "Maale"
      },
      {
        country: "Maldives",
        name: "Meemu"
      },
      {
        country: "Maldives",
        name: "Noonu"
      },
      {
        country: "Maldives",
        name: "Raa"
      },
      {
        country: "Maldives",
        name: "Seenu"
      },
      {
        country: "Maldives",
        name: "Shaviyani"
      },
      {
        country: "Maldives",
        name: "Thaa"
      },
      {
        country: "Maldives",
        name: "Vaavu"
      },
      //Mali
      {
        country: "Mali",
        name: "Bamako (Capital)"
      },
      {
        country: "Mali",
        name: "Gao"
      },
      {
        country: "Mali",
        name: "Kayes"
      },
      {
        country: "Mali",
        name: "Kidal"
      },
      {
        country: "Mali",
        name: "Koulikoro"
      },
      {
        country: "Mali",
        name: "Mopti"
      },
      {
        country: "Mali",
        name: "Segou"
      },
      {
        country: "Mali",
        name: "Sikasso"
      },
      {
        country: "Mali",
        name: "Tombouctou"
      },

      //Mauritania
      {
        country: "Mauritania",
        name: "Adrar"
      },
      {
        country: "Mauritania",
        name: "Assaba"
      },
      {
        country: "Mauritania",
        name: "Brakna"
      },
      {
        country: "Mauritania",
        name: "Dakhlet Nouadhibou"
      },
      {
        country: "Mauritania",
        name: "Gorgol"
      },
      {
        country: "Mauritania",
        name: "Guidimaka"
      },
      {
        country: "Mauritania",
        name: "Hodh Ech Chargui"
      },
      {
        country: "Mauritania",
        name: "Hodh El Gharbi"
      },
      {
        country: "Mauritania",
        name: "Inchiri"
      },
      {
        country: "Mauritania",
        name: "Nouakchott"
      },
      {
        country: "Mauritania",
        name: "Tagant"
      },
      {
        country: "Mauritania",
        name: "Tiris Zemmour"
      },
      {
        country: "Mauritania",
        name: "Trarza"
      },
      //Mauritius

      {
        country: "Mauritius",
        name: "Agalega Islands"
      },
      {
        country: "Mauritius",
        name: "Black River"
      },
      {
        country: "Mauritius",
        name: "Cargados Carajos Shoals"
      },
      {
        country: "Mauritius",
        name: "Flacq"
      },
      {
        country: "Mauritius",
        name: "Grand Port"
      },
      {
        country: "Mauritius",
        name: "Moka"
      },
      {
        country: "Mauritius",
        name: "Pamplemousses"
      },
      {
        country: "Mauritius",
        name: "Plaines Wilhems"
      },
      {
        country: "Mauritius",
        name: "Port Louis"
      },
      {
        country: "Mauritius",
        name: "Riviere du Rempart"
      },
      {
        country: "Mauritius",
        name: "Rodrigues"
      },
      {
        country: "Mauritius",
        name: "Savanne"
      },

      //Mexico
      {
        country: "Mexico",
        name: "Aguascalientes"
      },
      {
        country: "Mexico",
        name: "Baja California"
      },
      {
        country: "Mexico",
        name: "Baja California Sur"
      },
      {
        country: "Mexico",
        name: "Campeche"
      },
      {
        country: "Mexico",
        name: "Chiapas"
      },
      {
        country: "Mexico",
        name: "Chihuahua"
      },
      {
        country: "Mexico",
        name: "Coahuila de Zaragoza"
      },
      {
        country: "Mexico",
        name: "Colima"
      },
      {
        country: "Mexico",
        name: "Distrito Federal"
      },
      {
        country: "Mexico",
        name: "Durango"
      },
      {
        country: "Mexico",
        name: "Guanajuato"
      },
      {
        country: "Mexico",
        name: "Guerrero"
      },
      {
        country: "Mexico",
        name: "Hidalgo"
      },
      {
        country: "Mexico",
        name: "Jalisco"
      },
      {
        country: "Mexico",
        name: "Mexico"
      },
      {
        country: "Mexico",
        name: "Michoacan de Ocampo"
      },
      {
        country: "Mexico",
        name: "Morelos"
      },
      {
        country: "Mexico",
        name: "Nayarit"
      },
      {
        country: "Mexico",
        name: "Nuevo Leon"
      },
      {
        country: "Mexico",
        name: "Oaxaca"
      },
      {
        country: "Mexico",
        name: "Puebla"
      },
      {
        country: "Mexico",
        name: "Queretaro de Arteaga"
      },
      {
        country: "Mexico",
        name: "Quintana Roo"
      },
      {
        country: "Mexico",
        name: "San Luis Potosi"
      },
      {
        country: "Mexico",
        name: "Sinaloa"
      },
      {
        country: "Mexico",
        name: "Sonora"
      },
      {
        country: "Mexico",
        name: "Tabasco"
      },
      {
        country: "Mexico",
        name: "Tamaulipas"
      },
      {
        country: "Mexico",
        name: "Tlaxcala"
      },
      {
        country: "Mexico",
        name: "Veracruz-Llave"
      },
      {
        country: "Mexico",
        name: "Yucatan"
      },
      {
        country: "Mexico",
        name: "Zacatecas"
      },

      //Moldova
      {
        country: "Moldova",
        name: "Anenii Noi"
      },
      {
        country: "Moldova",
        name: "Basarabeasca"
      },
      {
        country: "Moldova",
        name: "Briceni"
      },
      {
        country: "Moldova",
        name: "Cahul"
      },
      {
        country: "Moldova",
        name: "Cantemir"
      },
      {
        country: "Moldova",
        name: "Calarasi"
      },
      {
        country: "Moldova",
        name: "Causeni"
      },
      {
        country: "Moldova",
        name: "Cimislia"
      },
      {
        country: "Moldova",
        name: "Criuleni"
      },
      {
        country: "Moldova",
        name: "Donduseni"
      },
      {
        country: "Moldova",
        name: "Drochia"
      },
      {
        country: "Moldova",
        name: "Dubasari"
      },
      {
        country: "Moldova",
        name: "Edinet"
      },
      {
        country: "Moldova",
        name: "Falesti"
      },
      {
        country: "Moldova",
        name: "Floresti"
      },
      {
        country: "Moldova",
        name: "Glodeni"
      },
      {
        country: "Moldova",
        name: "Hincesti"
      },
      {
        country: "Moldova",
        name: "Ialoveni"
      },
      {
        country: "Moldova",
        name: "Leova"
      },
      {
        country: "Moldova",
        name: "Nisporeni"
      },
      {
        country: "Moldova",
        name: "Ocnita"
      },
      {
        country: "Moldova",
        name: "Orhei"
      },
      {
        country: "Moldova",
        name: "Rezina"
      },
      {
        country: "Moldova",
        name: "Riscani"
      },
      {
        country: "Moldova",
        name: "Singerei"
      },
      {
        country: "Moldova",
        name: "Soldanesti"
      },
      {
        country: "Moldova",
        name: "Soroca"
      },
      {
        country: "Moldova",
        name: "Stefan-Voda"
      },
      {
        country: "Moldova",
        name: "Straseni"
      },
      {
        country: "Moldova",
        name: "Taraclia"
      },
      {
        country: "Moldova",
        name: "Telenesti"
      },
      {
        country: "Moldova",
        name: "Ungheni"
      },
      {
        country: "Moldova",
        name: "Balti"
      },
      {
        country: "Moldova",
        name: "Bender"
      },
      {
        country: "Moldova",
        name: "Chisinau"
      },
      {
        country: "Moldova",
        name: "Gagauzia"
      },
      {
        country: "Moldova",
        name: "Stinga Nistrului"
      },
      //Mongolia


      {
        country: "Mongolia",
        name: "Arhangay"
      },
      {
        country: "Mongolia",
        name: "Bayanhongor"
      },
      {
        country: "Mongolia",
        name: "Bayan-Olgiy"
      },
      {
        country: "Mongolia",
        name: "Bulgan"
      },
      {
        country: "Mongolia",
        name: "Darhan Uul"
      },
      {
        country: "Mongolia",
        name: "Dornod"
      },
      {
        country: "Mongolia",
        name: "Dornogovi"
      },
      {
        country: "Mongolia",
        name: "Dundgovi"
      },
      {
        country: "Mongolia",
        name: "Dzavhan"
      },
      {
        country: "Mongolia",
        name: "Govi-Altay"
      },
      {
        country: "Mongolia",
        name: "Govi-Sumber"
      },
      {
        country: "Mongolia",
        name: "Hentiy"
      },
      {
        country: "Mongolia",
        name: "Hovd"
      },
      {
        country: "Mongolia",
        name: "Hovsgol"
      },
      {
        country: "Mongolia",
        name: "Omnogovi"
      },
      {
        country: "Mongolia",
        name: "Orhon"
      },
      {
        country: "Mongolia",
        name: "Ovorhangay"
      },
      {
        country: "Mongolia",
        name: "Selenge"
      },
      {
        country: "Mongolia",
        name: "Suhbaatar"
      },
      {
        country: "Mongolia",
        name: "Tov"
      },
      {
        country: "Mongolia",
        name: "Ulaanbaatar"
      },
      {
        country: "Mongolia",
        name: "Uvs"
      },
      //Morocco
      {
        country: "Morocco",
        name: "Agadir"
      },
      {
        country: "Morocco",
        name: "Al Hoceima"
      },
      {
        country: "Morocco",
        name: "Azilal"
      },
      {
        country: "Morocco",
        name: "Beni Mellal"
      },
      {
        country: "Morocco",
        name: "Ben Slimane"
      },
      {
        country: "Morocco",
        name: "Boulemane"
      },
      {
        country: "Morocco",
        name: "Casablanca"
      },
      {
        country: "Morocco",
        name: "Chaouen"
      },
      {
        country: "Morocco",
        name: "El Jadida"
      },
      {
        country: "Morocco",
        name: "El Kelaa des Sraghna"
      },
      {
        country: "Morocco",
        name: "Er Rachidia"
      },
      {
        country: "Morocco",
        name: "Essaouira"
      },
      {
        country: "Morocco",
        name: "Fes"
      },
      {
        country: "Morocco",
        name: "Figuig"
      },
      {
        country: "Morocco",
        name: "Guelmim"
      },
      {
        country: "Morocco",
        name: "Ifrane"
      },
      {
        country: "Morocco",
        name: "Kenitra"
      },
      {
        country: "Morocco",
        name: "Khemisset"
      },
      {
        country: "Morocco",
        name: "Khenifra"
      },
      {
        country: "Morocco",
        name: "Khouribga"
      },
      {
        country: "Morocco",
        name: "Laayoune"
      },
      {
        country: "Morocco",
        name: "Larache"
      },
      {
        country: "Morocco",
        name: "Marrakech"
      },
      {
        country: "Morocco",
        name: "Meknes"
      },
      {
        country: "Morocco",
        name: "Nador"
      },
      {
        country: "Morocco",
        name: "Ouarzazate"
      },
      {
        country: "Morocco",
        name: "Oujda"
      },
      {
        country: "Morocco",
        name: "Rabat-Sale"
      },
      {
        country: "Morocco",
        name: "Safi"
      },
      {
        country: "Morocco",
        name: "Settat"
      },
      {
        country: "Morocco",
        name: "Sidi Kacem"
      },
      {
        country: "Morocco",
        name: "Tangier"
      },
      {
        country: "Morocco",
        name: "Tan-Tan"
      },
      {
        country: "Morocco",
        name: "Taounate"
      },
      {
        country: "Morocco",
        name: "Taroudannt"
      },
      {
        country: "Morocco",
        name: "Tata"
      },
      {
        country: "Morocco",
        name: "Taza"
      },
      {
        country: "Morocco",
        name: "Tetouan"
      },
      {
        country: "Morocco",
        name: "Tiznit"
      },

      //Mozambique
      {
        country: "Mozambique",
        name: "Cabo Delgado"
      },
      {
        country: "Mozambique",
        name: "Gaza"
      },
      {
        country: "Mozambique",
        name: "Inhambane"
      },
      {
        country: "Mozambique",
        name: "Manica"
      },
      {
        country: "Mozambique",
        name: "Maputo"
      },
      {
        country: "Mozambique",
        name: "Cidade de Maputo"
      },
      {
        country: "Mozambique",
        name: "Nampula"
      },
      {
        country: "Mozambique",
        name: "Niassa"
      },
      {
        country: "Mozambique",
        name: "Sofala"
      },
      {
        country: "Mozambique",
        name: "Tete"
      },
      {
        country: "Mozambique",
        name: "Zambezia"
      },
      //Namibia

      {
        country: "Namibia",
        name: "Caprivi"
      },
      {
        country: "Namibia",
        name: "Erongo"
      },
      {
        country: "Namibia",
        name: "Hardap"
      },
      {
        country: "Namibia",
        name: "Karas"
      },
      {
        country: "Namibia",
        name: "Khomas"
      },
      {
        country: "Namibia",
        name: "Kunene"
      },
      {
        country: "Namibia",
        name: "Ohangwena"
      },
      {
        country: "Namibia",
        name: "Okavango"
      },
      {
        country: "Namibia",
        name: "Omaheke"
      },
      {
        country: "Namibia",
        name: "Omusati"
      },
      {
        country: "Namibia",
        name: "Oshana"
      },
      {
        country: "Namibia",
        name: "Oshikoto"
      },
      {
        country: "Namibia",
        name: "Otjozondjupa"
      },
      //Nepal
      {
        country: "Nepal",
        name: "Bagmati"
      },
      {
        country: "Nepal",
        name: "Bheri"
      },
      {
        country: "Nepal",
        name: "Dhawalagiri"
      },
      {
        country: "Nepal",
        name: "Gandaki"
      },
      {
        country: "Nepal",
        name: "Janakpur"
      },
      {
        country: "Nepal",
        name: "Karnali"
      },
      {
        country: "Nepal",
        name: "Kosi"
      },
      {
        country: "Nepal",
        name: "Lumbini"
      },
      {
        country: "Nepal",
        name: "Mahakali"
      },
      {
        country: "Nepal",
        name: "Mechi"
      },
      {
        country: "Nepal",
        name: "Narayani"
      },
      {
        country: "Nepal",
        name: "Rapti"
      },
      {
        country: "Nepal",
        name: "Sagarmatha"
      },
      {
        country: "Nepal",
        name: "Seti"
      },

      //Netherlands
      {
        country: "Netherlands",
        name: "Drenthe"
      },
      {
        country: "Netherlands",
        name: "Flevoland"
      },
      {
        country: "Netherlands",
        name: "Friesland"
      },
      {
        country: "Netherlands",
        name: "Gelderland"
      },
      {
        country: "Netherlands",
        name: "Groningen"
      },
      {
        country: "Netherlands",
        name: "Limburg"
      },
      {
        country: "Netherlands",
        name: "Noord-Brabant"
      },
      {
        country: "Netherlands",
        name: "Noord-Holland"
      },
      {
        country: "Netherlands",
        name: "Overijssel"
      },
      {
        country: "Netherlands",
        name: "Utrecht"
      },
      {
        country: "Netherlands",
        name: "Zeeland"
      },
      {
        country: "Netherlands",
        name: "Zuid-Holland"
      },
      //New Zealand
      {
        country: "New Zealand",
        name: "Auckland"
      },
      {
        country: "New Zealand",
        name: "Bay of Plenty"
      },
      {
        country: "New Zealand",
        name: "Canterbury"
      },
      {
        country: "New Zealand",
        name: "Chatham Islands"
      },
      {
        country: "New Zealand",
        name: "Gisborne"
      },
      {
        country: "New Zealand",
        name: "Hawke's Bay"
      },
      {
        country: "New Zealand",
        name: "Manawatu-Wanganui"
      },
      {
        country: "New Zealand",
        name: "Marlborough"
      },
      {
        country: "New Zealand",
        name: "Nelson"
      },
      {
        country: "New Zealand",
        name: "Northland"
      },
      {
        country: "New Zealand",
        name: "Otago"
      },
      {
        country: "New Zealand",
        name: "Southland"
      },
      {
        country: "New Zealand",
        name: "Taranaki"
      },
      {
        country: "New Zealand",
        name: "Tasman"
      },
      {
        country: "New Zealand",
        name: "Waikato"
      },
      {
        country: "New Zealand",
        name: "Wellington"
      },
      {
        country: "New Zealand",
        name: "West Coast"
      },

      //Nicaragua
      {
        country: "Nicaragua",
        name: "Atlantico Norte"
      },
      {
        country: "Nicaragua",
        name: "Atlantico Sur"
      },
      {
        country: "Nicaragua",
        name: "Boaco"
      },
      {
        country: "Nicaragua",
        name: "Carazo"
      },
      {
        country: "Nicaragua",
        name: "Chinandega"
      },
      {
        country: "Nicaragua",
        name: "Chontales"
      },
      {
        country: "Nicaragua",
        name: "Esteli"
      },
      {
        country: "Nicaragua",
        name: "Granada"
      },
      {
        country: "Nicaragua",
        name: "Jinotega"
      },
      {
        country: "Nicaragua",
        name: "Leon"
      },
      {
        country: "Nicaragua",
        name: "Madriz"
      },
      {
        country: "Nicaragua",
        name: "Managua"
      },
      {
        country: "Nicaragua",
        name: "Masaya"
      },
      {
        country: "Nicaragua",
        name: "Matagalpa"
      },
      {
        country: "Nicaragua",
        name: "Nueva Segovia"
      },
      {
        country: "Nicaragua",
        name: "Rio San Juan"
      },
      {
        country: "Nicaragua",
        name: "Rivas"
      },
      //Niger
      {
        country: "Niger",
        name: "Agadez"
      },
      {
        country: "Niger",
        name: "Diffa"
      },
      {
        country: "Niger",
        name: "Dosso"
      },
      {
        country: "Niger",
        name: "Maradi"
      },
      {
        country: "Niger",
        name: "Niamey"
      },
      {
        country: "Niger",
        name: "Tahoua"
      },
      {
        country: "Niger",
        name: "Tillaberi"
      },
      {
        country: "Niger",
        name: "Zinder"
      },
      //Nigeria
      {
        country: "Nigeria",
        name: "Abia"
      },
      {
        country: "Nigeria",
        name: "Abuja Federal Capital"
      },
      {
        country: "Nigeria",
        name: "Adamawa"
      },
      {
        country: "Nigeria",
        name: "Akwa Ibom"
      },
      {
        country: "Nigeria",
        name: "Anambra"
      },
      {
        country: "Nigeria",
        name: "Bauchi"
      },
      {
        country: "Nigeria",
        name: "Bayelsa"
      },
      {
        country: "Nigeria",
        name: "Benue"
      },
      {
        country: "Nigeria",
        name: "Borno"
      },
      {
        country: "Nigeria",
        name: "Cross River"
      },
      {
        country: "Nigeria",
        name: "Delta"
      },
      {
        country: "Nigeria",
        name: "Ebonyi"
      },
      {
        country: "Nigeria",
        name: "Edo"
      },
      {
        country: "Nigeria",
        name: "Ekiti"
      },
      {
        country: "Nigeria",
        name: "Enugu"
      },
      {
        country: "Nigeria",
        name: "Gombe"
      },
      {
        country: "Nigeria",
        name: "Imo"
      },
      {
        country: "Nigeria",
        name: "Jigawa"
      },
      {
        country: "Nigeria",
        name: "Kaduna"
      },
      {
        country: "Nigeria",
        name: "Kano"
      },
      {
        country: "Nigeria",
        name: "Katsina"
      },
      {
        country: "Nigeria",
        name: "Kebbi"
      },
      {
        country: "Nigeria",
        name: "Kogi"
      },
      {
        country: "Nigeria",
        name: "Kwara"
      },
      {
        country: "Nigeria",
        name: "Lagos"
      },
      {
        country: "Nigeria",
        name: "Nassarawa"
      },
      {
        country: "Nigeria",
        name: "Niger"
      },
      {
        country: "Nigeria",
        name: "Ogun"
      },
      {
        country: "Nigeria",
        name: "Ondo"
      },
      {
        country: "Nigeria",
        name: "Osun"
      },
      {
        country: "Nigeria",
        name: "Oyo"
      },
      {
        country: "Nigeria",
        name: "Plateau"
      },
      {
        country: "Nigeria",
        name: "Rivers"
      },
      {
        country: "Nigeria",
        name: "Sokoto"
      },
      {
        country: "Nigeria",
        name: "Taraba"
      },
      {
        country: "Nigeria",
        name: "Yobe"
      },
      {
        country: "Nigeria",
        name: "Zamfara"
      },
      //Norway
      {
        country: "Norway",
        name: "Akershus"
      },
      {
        country: "Norway",
        name: "Aust-Agder"
      },
      {
        country: "Norway",
        name: "Buskerud"
      },
      {
        country: "Norway",
        name: "Finnmark"
      },
      {
        country: "Norway",
        name: "Hedmark"
      },
      {
        country: "Norway",
        name: "Hordaland"
      },
      {
        country: "Norway",
        name: "More og Romsdal"
      },
      {
        country: "Norway",
        name: "Nordland"
      },
      {
        country: "Norway",
        name: "Nord-Trondelag"
      },
      {
        country: "Norway",
        name: "Oppland"
      },
      {
        country: "Norway",
        name: "Oslo"
      },
      {
        country: "Norway",
        name: "Ostfold"
      },
      {
        country: "Norway",
        name: "Rogaland"
      },
      {
        country: "Norway",
        name: "Sogn og Fjordane"
      },
      {
        country: "Norway",
        name: "Sor-Trondelag"
      },
      {
        country: "Norway",
        name: "Telemark"
      },
      {
        country: "Norway",
        name: "Troms"
      },
      {
        country: "Norway",
        name: "Vest-Agder"
      },
      {
        country: "Norway",
        name: "Vestfold"
      },
      //Oman
      {
        country: "Oman",
        name: "Ad Dakhiliyah"
      },
      {
        country: "Oman",
        name: "Al Batinah"
      },
      {
        country: "Oman",
        name: "Al Wusta"
      },
      {
        country: "Oman",
        name: "Ash Sharqiyah"
      },
      {
        country: "Oman",
        name: "Az Zahirah"
      },
      {
        country: "Oman",
        name: "Masqat"
      },
      {
        country: "Oman",
        name: "Musandam"
      },
      {
        country: "Oman",
        name: "Dhofar"
      },

      //Pakistan
      {
        country: "Pakistan",
        name: "Balochistan"
      },
      {
        country: "Pakistan",
        name: "North-West Frontier Province"
      },
      {
        country: "Pakistan",
        name: "Punjab"
      },
      {
        country: "Pakistan",
        name: "Sindh"
      },
      {
        country: "Pakistan",
        name: "Islamabad Capital Territory"
      },
      {
        country: "Pakistan",
        name: "Federally Administered Tribal Areas"
      },

      //Panama
      {
        country: "Panama",
        name: "Bocas del Toro"
      },
      {
        country: "Panama",
        name: "Chiriqui"
      },
      {
        country: "Panama",
        name: "Cocle"
      },
      {
        country: "Panama",
        name: "Colon"
      },
      {
        country: "Panama",
        name: "Darien"
      },
      {
        country: "Panama",
        name: "Herrera"
      },
      {
        country: "Panama",
        name: "Los Santos"
      },
      {
        country: "Panama",
        name: "Panama"
      },
      {
        country: "Panama",
        name: "San Blas"
      },
      {
        country: "Panama",
        name: "Veraguas"
      },
      //Papua New Guinea
      {
        country: "Papua New Guinea",
        name: "Bougainville"
      },
      {
        country: "Papua New Guinea",
        name: "Central"
      },
      {
        country: "Papua New Guinea",
        name: "Chimbu"
      },
      {
        country: "Papua New Guinea",
        name: "Eastern Highlands"
      },
      {
        country: "Papua New Guinea",
        name: "East New Britain"
      },
      {
        country: "Papua New Guinea",
        name: "East Sepik"
      },
      {
        country: "Papua New Guinea",
        name: "Enga"
      },
      {
        country: "Papua New Guinea",
        name: "Gulf"
      },
      {
        country: "Papua New Guinea",
        name: "Madang"
      },
      {
        country: "Papua New Guinea",
        name: "Manus"
      },
      {
        country: "Papua New Guinea",
        name: "Milne Bay"
      },
      {
        country: "Papua New Guinea",
        name: "Morobe"
      },
      {
        country: "Papua New Guinea",
        name: "National Capital"
      },
      {
        country: "Papua New Guinea",
        name: "New Ireland"
      },
      {
        country: "Papua New Guinea",
        name: "Northern"
      },
      {
        country: "Papua New Guinea",
        name: "Sandaun"
      },
      {
        country: "Papua New Guinea",
        name: "Southern Highlands"
      },
      {
        country: "Papua New Guinea",
        name: "Western"
      },
      {
        country: "Papua New Guinea",
        name: "Western Highlands"
      },
      {
        country: "Papua New Guinea",
        name: "West New Britain"
      },

      //Paraguay
      {
        country: "Paraguay",
        name: "Alto Paraguay"
      },
      {
        country: "Paraguay",
        name: "Alto Parana"
      },
      {
        country: "Paraguay",
        name: "Amambay"
      },
      {
        country: "Paraguay",
        name: "Asuncion"
      },
      {
        country: "Paraguay",
        name: "Boqueron"
      },
      {
        country: "Paraguay",
        name: "Caaguazu"
      },
      {
        country: "Paraguay",
        name: "Caazapa"
      },
      {
        country: "Paraguay",
        name: "Canindeyu"
      },
      {
        country: "Paraguay",
        name: "Central"
      },
      {
        country: "Paraguay",
        name: "Concepcion"
      },
      {
        country: "Paraguay",
        name: "Cordillera"
      },
      {
        country: "Paraguay",
        name: "Guaira"
      },
      {
        country: "Paraguay",
        name: "Itapua"
      },
      {
        country: "Paraguay",
        name: "Misiones"
      },
      {
        country: "Paraguay",
        name: "Neembucu"
      },
      {
        country: "Paraguay",
        name: "Paraguari"
      },
      {
        country: "Paraguay",
        name: "Presidente Hayes"
      },
      {
        country: "Paraguay",
        name: "San Pedro"
      },

      //Peru
      {
        country: "Peru",
        name: "Amazonas"
      },
      {
        country: "Peru",
        name: "Ancash"
      },
      {
        country: "Peru",
        name: "Apurimac"
      },
      {
        country: "Peru",
        name: "Arequipa"
      },
      {
        country: "Peru",
        name: "Ayacucho"
      },
      {
        country: "Peru",
        name: "Cajamarca"
      },
      {
        country: "Peru",
        name: "Callao"
      },
      {
        country: "Peru",
        name: "Cusco"
      },
      {
        country: "Peru",
        name: "Huancavelica"
      },
      {
        country: "Peru",
        name: "Huanuco"
      },
      {
        country: "Peru",
        name: "Ica"
      },
      {
        country: "Peru",
        name: "Junin"
      },
      {
        country: "Peru",
        name: "La Libertad"
      },
      {
        country: "Peru",
        name: "Lambayeque"
      },
      {
        country: "Peru",
        name: "Lima"
      },
      {
        country: "Peru",
        name: "Loreto"
      },
      {
        country: "Peru",
        name: "Madre de Dios"
      },
      {
        country: "Peru",
        name: "Moquegua"
      },
      {
        country: "Peru",
        name: "Pasco"
      },
      {
        country: "Peru",
        name: "Piura"
      },
      {
        country: "Peru",
        name: "Puno"
      },
      {
        country: "Peru",
        name: "San Martin"
      },
      {
        country: "Peru",
        name: "Tacna"
      },
      {
        country: "Peru",
        name: "Tumbes"
      },
      {
        country: "Peru",
        name: "Ucayali"
      },

      //Philippines
      {
        country: "Philippines",
        name: "Abra"
      },
      {
        country: "Philippines",
        name: "Agusan del Norte"
      },
      {
        country: "Philippines",
        name: "Agusan del Sur"
      },
      {
        country: "Philippines",
        name: "Aklan"
      },
      {
        country: "Philippines",
        name: "Albay"
      },
      {
        country: "Philippines",
        name: "Antique"
      },
      {
        country: "Philippines",
        name: "Apayao"
      },
      {
        country: "Philippines",
        name: "Aurora"
      },
      {
        country: "Philippines",
        name: "Basilan"
      },
      {
        country: "Philippines",
        name: "Bataan"
      },
      {
        country: "Philippines",
        name: "Batanes"
      },
      {
        country: "Philippines",
        name: "Batangas"
      },
      {
        country: "Philippines",
        name: "Biliran"
      },
      {
        country: "Philippines",
        name: "Benguet"
      },
      {
        country: "Philippines",
        name: "Bohol"
      },
      {
        country: "Philippines",
        name: "Bukidnon"
      },
      {
        country: "Philippines",
        name: "Bulacan"
      },
      {
        country: "Philippines",
        name: "Cagayan"
      },
      {
        country: "Philippines",
        name: "Camarines Norte"
      },
      {
        country: "Philippines",
        name: "Camarines Sur"
      },
      {
        country: "Philippines",
        name: "Camiguin"
      },
      {
        country: "Philippines",
        name: "Capiz"
      },
      {
        country: "Philippines",
        name: "Catanduanes"
      },
      {
        country: "Philippines",
        name: "Cavite"
      },
      {
        country: "Philippines",
        name: "Cebu"
      },
      {
        country: "Philippines",
        name: "Compostela"
      },
      {
        country: "Philippines",
        name: "Davao del Norte"
      },
      {
        country: "Philippines",
        name: "Davao del Sur"
      },
      {
        country: "Philippines",
        name: "Davao Oriental"
      },
      {
        country: "Philippines",
        name: "Eastern Samar"
      },
      {
        country: "Philippines",
        name: "Guimaras"
      },
      {
        country: "Philippines",
        name: "Ifugao"
      },
      {
        country: "Philippines",
        name: "Ilocos Norte"
      },
      {
        country: "Philippines",
        name: "Ilocos Sur"
      },
      {
        country: "Philippines",
        name: "Iloilo"
      },
      {
        country: "Philippines",
        name: "Isabela"
      },
      {
        country: "Philippines",
        name: "Kalinga"
      },
      {
        country: "Philippines",
        name: "Laguna"
      },
      {
        country: "Philippines",
        name: "Lanao del Norte"
      },
      {
        country: "Philippines",
        name: "Lanao del Sur"
      },
      {
        country: "Philippines",
        name: "La Union"
      },
      {
        country: "Philippines",
        name: "Leyte"
      },
      {
        country: "Philippines",
        name: "Maguindanao"
      },
      {
        country: "Philippines",
        name: "Marinduque"
      },
      {
        country: "Philippines",
        name: "Masbate"
      },
      {
        country: "Philippines",
        name: "Mindoro Occidental"
      },
      {
        country: "Philippines",
        name: "Mindoro Oriental"
      },
      {
        country: "Philippines",
        name: "Misamis Occidental"
      },
      {
        country: "Philippines",
        name: "Misamis Oriental"
      },
      {
        country: "Philippines",
        name: "Mountain Province"
      },
      {
        country: "Philippines",
        name: "Negros Occidental"
      },
      {
        country: "Philippines",
        name: "Negros Oriental"
      },
      {
        country: "Philippines",
        name: "North Cotabato"
      },
      {
        country: "Philippines",
        name: "Northern Samar"
      },
      {
        country: "Philippines",
        name: "Nueva Ecija"
      },
      {
        country: "Philippines",
        name: "Nueva Vizcaya"
      },
      {
        country: "Philippines",
        name: "Palawan"
      },
      {
        country: "Philippines",
        name: "Pampanga"
      },
      {
        country: "Philippines",
        name: "Pangasinan"
      },
      {
        country: "Philippines",
        name: "Quezon"
      },
      {
        country: "Philippines",
        name: "Quirino"
      },
      {
        country: "Philippines",
        name: "Rizal"
      },
      {
        country: "Philippines",
        name: "Romblon"
      },
      {
        country: "Philippines",
        name: "Samar"
      },
      {
        country: "Philippines",
        name: "Sarangani"
      },
      {
        country: "Philippines",
        name: "Siquijor"
      },
      {
        country: "Philippines",
        name: "Sorsogon"
      },
      {
        country: "Philippines",
        name: "South Cotabato"
      },
      {
        country: "Philippines",
        name: "Southern Leyte"
      },
      {
        country: "Philippines",
        name: "Sultan Kudarat"
      },
      {
        country: "Philippines",
        name: "Sulu"
      },
      {
        country: "Philippines",
        name: "Surigao del Norte"
      },
      {
        country: "Philippines",
        name: "Surigao del Sur"
      },
      {
        country: "Philippines",
        name: "Tarlac"
      },
      {
        country: "Philippines",
        name: "Tawi-Tawi"
      },
      {
        country: "Philippines",
        name: "Zambales"
      },
      {
        country: "Philippines",
        name: "Zamboanga del Norte"
      },
      {
        country: "Philippines",
        name: "Zamboanga del Sur"
      },
      {
        country: "Philippines",
        name: "Zamboanga Sibugay"
      },
      //Poland
      {
        country: "Poland",
        name: "Greater Poland (Wielkopolskie)"
      },
      {
        country: "Poland",
        name: "Kuyavian-Pomeranian (Kujawsko-Pomorskie)"
      },
      {
        country: "Poland",
        name: "Lesser Poland (Malopolskie)"
      },
      {
        country: "Poland",
        name: "Lodz (Lodzkie)"
      },
      {
        country: "Poland",
        name: "Lower Silesian (Dolnoslaskie)"
      },
      {
        country: "Poland",
        name: "Lublin (Lubelskie)"
      },
      {
        country: "Poland",
        name: "Lubusz (Lubuskie)"
      },
      {
        country: "Poland",
        name: "Masovian (Mazowieckie)"
      },
      {
        country: "Poland",
        name: "Opole (Opolskie)"
      },
      {
        country: "Poland",
        name: "Podlasie (Podlaskie)"
      },
      {
        country: "Poland",
        name: "Pomeranian (Pomorskie)"
      },
      {
        country: "Poland",
        name: "Silesian (Slaskie)"
      },
      {
        country: "Poland",
        name: "Subcarpathian (Podkarpackie)"
      },
      {
        country: "Poland",
        name: "Swietokrzyskie (Swietokrzyskie)"
      },
      {
        country: "Poland",
        name: "Warmian-Masurian (Warminsko-Mazurskie)"
      },
      {
        country: "Poland",
        name: "West Pomeranian (Zachodniopomorskie)"
      },
      //Portugal
      {
        country: "Portugal",
        name: "Aveiro"
      },
      {
        country: "Portugal",
        name: "Acores"
      },
      {
        country: "Portugal",
        name: "Beja"
      },
      {
        country: "Portugal",
        name: "Braga"
      },
      {
        country: "Portugal",
        name: "Braganca"
      },
      {
        country: "Portugal",
        name: "Castelo Branco"
      },
      {
        country: "Portugal",
        name: "Coimbra"
      },
      {
        country: "Portugal",
        name: "Evora"
      },
      {
        country: "Portugal",
        name: "Faro"
      },
      {
        country: "Portugal",
        name: "Guarda"
      },
      {
        country: "Portugal",
        name: "Leiria"
      },
      {
        country: "Portugal",
        name: "Lisboa"
      },
      {
        country: "Portugal",
        name: "Madeira"
      },
      {
        country: "Portugal",
        name: "Portalegre"
      },
      {
        country: "Portugal",
        name: "Porto"
      },
      {
        country: "Portugal",
        name: "Santarem"
      },
      {
        country: "Portugal",
        name: "Setubal"
      },
      {
        country: "Portugal",
        name: "Viana do Castelo"
      },
      {
        country: "Portugal",
        name: "Vila Real"
      },
      {
        country: "Portugal",
        name: "Viseu"
      },
      //Qatar
      {
        country: "Qatar",
        name: "Ad Dawhah"
      },
      {
        country: "Qatar",
        name: "Al Ghuwayriyah"
      },
      {
        country: "Qatar",
        name: "Al Jumayliyah"
      },
      {
        country: "Qatar",
        name: "Al Khawr"
      },
      {
        country: "Qatar",
        name: "Al Wakrah"
      },
      {
        country: "Qatar",
        name: "Ar Rayyan"
      },
      {
        country: "Qatar",
        name: "Jarayan al Batinah"
      },
      {
        country: "Qatar",
        name: "Madinat ash Shamal"
      },
      {
        country: "Qatar",
        name: "Umm Sa'id"
      },
      {
        country: "Qatar",
        name: "Umm Salal"
      },

      //Romania
      {
        country: "Romania",
        name: "Alba"
      },
      {
        country: "Romania",
        name: "Arad"
      },
      {
        country: "Romania",
        name: "Arges"
      },
      {
        country: "Romania",
        name: "Bacau"
      },
      {
        country: "Romania",
        name: "Bihor"
      },
      {
        country: "Romania",
        name: "Bistrita-Nasaud"
      },
      {
        country: "Romania",
        name: "Botosani"
      },
      {
        country: "Romania",
        name: "Braila"
      },
      {
        country: "Romania",
        name: "Brasov"
      },
      {
        country: "Romania",
        name: "Bucuresti"
      },
      {
        country: "Romania",
        name: "Buzau"
      },
      {
        country: "Romania",
        name: "Calarasi"
      },
      {
        country: "Romania",
        name: "Caras-Severin"
      },
      {
        country: "Romania",
        name: "Cluj"
      },
      {
        country: "Romania",
        name: "Constanta"
      },
      {
        country: "Romania",
        name: "Covasna"
      },
      {
        country: "Romania",
        name: "Dimbovita"
      },
      {
        country: "Romania",
        name: "Dolj"
      },
      {
        country: "Romania",
        name: "Galati"
      },
      {
        country: "Romania",
        name: "Gorj"
      },
      {
        country: "Romania",
        name: "Giurgiu"
      },
      {
        country: "Romania",
        name: "Harghita"
      },
      {
        country: "Romania",
        name: "Hunedoara"
      },
      {
        country: "Romania",
        name: "Ialomita"
      },
      {
        country: "Romania",
        name: "Iasi"
      },
      {
        country: "Romania",
        name: "Ilfov"
      },
      {
        country: "Romania",
        name: "Maramures"
      },
      {
        country: "Romania",
        name: "Mehedinti"
      },
      {
        country: "Romania",
        name: "Mures"
      },
      {
        country: "Romania",
        name: "Neamt"
      },
      {
        country: "Romania",
        name: "Olt"
      },
      {
        country: "Romania",
        name: "Prahova"
      },
      {
        country: "Romania",
        name: "Salaj"
      },
      {
        country: "Romania",
        name: "Satu Mare"
      },
      {
        country: "Romania",
        name: "Sibiu"
      },
      {
        country: "Romania",
        name: "Suceava"
      },
      {
        country: "Romania",
        name: "Teleorman"
      },
      {
        country: "Romania",
        name: "Timis"
      },
      {
        country: "Romania",
        name: "Tulcea"
      },
      {
        country: "Romania",
        name: "Vaslui"
      },
      {
        country: "Romania",
        name: "Vilcea"
      },
      {
        country: "Romania",
        name: "Vrancea"
      },
      //Russia
      {
        country: "Russia",
        name: "Amur"
      },
      {
        country: "Russia",
        name: "Arkhangel'sk"
      },
      {
        country: "Russia",
        name: "Astrakhan'"
      },
      {
        country: "Russia",
        name: "Belgorod"
      },
      {
        country: "Russia",
        name: "Bryansk"
      },
      {
        country: "Russia",
        name: "Chelyabinsk"
      },
      {
        country: "Russia",
        name: "Chita"
      },
      {
        country: "Russia",
        name: "Irkutsk"
      },
      {
        country: "Russia",
        name: "Ivanovo"
      },
      {
        country: "Russia",
        name: "Kaliningrad"
      },
      {
        country: "Russia",
        name: "Kaluga"
      },
      {
        country: "Russia",
        name: "Kamchatka"
      },
      {
        country: "Russia",
        name: "Kemerovo"
      },
      {
        country: "Russia",
        name: "Kirov"
      },
      {
        country: "Russia",
        name: "Kostroma"
      },
      {
        country: "Russia",
        name: "Kurgan"
      },
      {
        country: "Russia",
        name: "Kursk"
      },
      {
        country: "Russia",
        name: "Leningrad"
      },
      {
        country: "Russia",
        name: "Lipetsk"
      },
      {
        country: "Russia",
        name: "Magadan"
      },
      {
        country: "Russia",
        name: "Moscow"
      },
      {
        country: "Russia",
        name: "Murmansk"
      },
      {
        country: "Russia",
        name: "Nizhniy Novgorod"
      },
      {
        country: "Russia",
        name: "Novgorod"
      },
      {
        country: "Russia",
        name: "Novosibirsk"
      },
      {
        country: "Russia",
        name: "Omsk"
      },
      {
        country: "Russia",
        name: "Orenburg"
      },
      {
        country: "Russia",
        name: "Orel"
      },
      {
        country: "Russia",
        name: "Penza"
      },
      {
        country: "Russia",
        name: "Perm'"
      },
      {
        country: "Russia",
        name: "Pskov"
      },
      {
        country: "Russia",
        name: "Rostov"
      },
      {
        country: "Russia",
        name: "Ryazan'"
      },
      {
        country: "Russia",
        name: "Sakhalin"
      },
      {
        country: "Russia",
        name: "Samara"
      },
      {
        country: "Russia",
        name: "Saratov"
      },
      {
        country: "Russia",
        name: "Smolensk"
      },
      {
        country: "Russia",
        name: "Sverdlovsk"
      },
      {
        country: "Russia",
        name: "Tambov"
      },
      {
        country: "Russia",
        name: "Tomsk"
      },
      {
        country: "Russia",
        name: "Tula"
      },
      {
        country: "Russia",
        name: "Tver'"
      },
      {
        country: "Russia",
        name: "Tyumen'"
      },
      {
        country: "Russia",
        name: "Ul'yanovsk"
      },
      {
        country: "Russia",
        name: "Vladimir"
      },
      {
        country: "Russia",
        name: "Volgograd"
      },
      {
        country: "Russia",
        name: "Vologda"
      },
      {
        country: "Russia",
        name: "Voronezh"
      },
      {
        country: "Russia",
        name: "Yaroslavl'"
      },
      {
        country: "Russia",
        name: "Adygeya"
      },
      {
        country: "Russia",
        name: "Altay"
      },
      {
        country: "Russia",
        name: "Bashkortostan"
      },
      {
        country: "Russia",
        name: "Buryatiya"
      },
      {
        country: "Russia",
        name: "Chechnya"
      },
      {
        country: "Russia",
        name: "Chuvashiya"
      },
      {
        country: "Russia",
        name: "Dagestan"
      },
      {
        country: "Russia",
        name: "Ingushetiya"
      },
      {
        country: "Russia",
        name: "Kabardino-Balkariya"
      },
      {
        country: "Russia",
        name: "Kalmykiya"
      },
      {
        country: "Russia",
        name: "Karachayevo-Cherkesiya"
      },
      {
        country: "Russia",
        name: "Kareliya"
      },
      {
        country: "Russia",
        name: "Khakasiya"
      },
      {
        country: "Russia",
        name: "Komi"
      },
      {
        country: "Russia",
        name: "Mariy-El"
      },
      {
        country: "Russia",
        name: "Mordoviya"
      },
      {
        country: "Russia",
        name: "Sakha"
      },
      {
        country: "Russia",
        name: "North Ossetia"
      },
      {
        country: "Russia",
        name: "Tatarstan"
      },
      {
        country: "Russia",
        name: "Tyva"
      },
      {
        country: "Russia",
        name: "Udmurtiya"
      },
      {
        country: "Russia",
        name: "Aga Buryat"
      },
      {
        country: "Russia",
        name: "Chukotka"
      },
      {
        country: "Russia",
        name: "Evenk"
      },
      {
        country: "Russia",
        name: "Khanty-Mansi"
      },
      {
        country: "Russia",
        name: "Komi-Permyak"
      },
      {
        country: "Russia",
        name: "Koryak"
      },
      {
        country: "Russia",
        name: "Nenets"
      },
      {
        country: "Russia",
        name: "Taymyr"
      },
      {
        country: "Russia",
        name: "Ust'-Orda Buryat"
      },
      {
        country: "Russia",
        name: "Yamalo-Nenets"
      },
      {
        country: "Russia",
        name: "Altay"
      },
      {
        country: "Russia",
        name: "Khabarovsk"
      },
      {
        country: "Russia",
        name: "Krasnodar"
      },
      {
        country: "Russia",
        name: "Krasnoyarsk"
      },
      {
        country: "Russia",
        name: "Primorskiy"
      },
      {
        country: "Russia",
        name: "Stavropol'"
      },
      {
        country: "Russia",
        name: "Moscow"
      },
      {
        country: "Russia",
        name: "St. Petersburg"
      },
      {
        country: "Russia",
        name: "Yevrey"
      },
      //Samoa
      {
        country: "Samoa",
        name: "A'ana"
      },
      {
        country: "Samoa",
        name: "Aiga-i-le-Tai"
      },
      {
        country: "Samoa",
        name: "Atua"
      },
      {
        country: "Samoa",
        name: "Fa'asaleleaga"
      },
      {
        country: "Samoa",
        name: "Gaga'emauga"
      },
      {
        country: "Samoa",
        name: "Gagaifomauga"
      },
      {
        country: "Samoa",
        name: "Palauli"
      },
      {
        country: "Samoa",
        name: "Satupa'itea"
      },
      {
        country: "Samoa",
        name: "Tuamasaga"
      },
      {
        country: "Samoa",
        name: "Va'a-o-Fonoti"
      },
      {
        country: "Samoa",
        name: "Vaisigano"
      },
      //Rwanda
      {
        country: "Rwanda",
        name: "Butare"
      },
      {
        country: "Rwanda",
        name: "Byumba"
      },
      {
        country: "Rwanda",
        name: "Cyangugu"
      },
      {
        country: "Rwanda",
        name: "Gikongoro"
      },
      {
        country: "Rwanda",
        name: "Gisenyi"
      },
      {
        country: "Rwanda",
        name: "Gitarama"
      },
      {
        country: "Rwanda",
        name: "Kibungo"
      },
      {
        country: "Rwanda",
        name: "Kibuye"
      },
      {
        country: "Rwanda",
        name: "Kigali Rurale"
      },
      {
        country: "Rwanda",
        name: "Kigali-ville"
      },
      {
        country: "Rwanda",
        name: "Umutara"
      },
      {
        country: "Rwanda",
        name: "Ruhengeri"
      },
      //San Marinoc
      {
        country: "San Marinoc",
        name: "Acquaviva"
      },
      {
        country: "San Marinoc",
        name: "Borgo Maggiore"
      },
      {
        country: "San Marinoc",
        name: "Chiesanuova"
      },
      {
        country: "San Marinoc",
        name: "Domagnano"
      },
      {
        country: "San Marinoc",
        name: "Faetano"
      },
      {
        country: "San Marinoc",
        name: "Fiorentino"
      },
      {
        country: "San Marinoc",
        name: "Montegiardino"
      },
      {
        country: "San Marinoc",
        name: "San Marino Citta"
      },
      {
        country: "San Marinoc",
        name: "Serravalle"
      },
      //Saudi Arabia
      {
        country: "Saudi Arabia",
        name: "Al Bahah"
      },
      {
        country: "Saudi Arabia",
        name: "Al Hudud ash Shamaliyah"
      },
      {
        country: "Saudi Arabia",
        name: "Al Jawf"
      },
      {
        country: "Saudi Arabia",
        name: "Al Madinah"
      },
      {
        country: "Saudi Arabia",
        name: "Al Qasim"
      },
      {
        country: "Saudi Arabia",
        name: "Ar Riyad"
      },
      {
        country: "Saudi Arabia",
        name: "Ash Sharqiyah"
      },
      {
        country: "Saudi Arabia",
        name: "'Asir"
      },
      {
        country: "Saudi Arabia",
        name: "Ha'il"
      },
      {
        country: "Saudi Arabia",
        name: "Jizan"
      },
      {
        country: "Saudi Arabia",
        name: "Makkah"
      },
      {
        country: "Saudi Arabia",
        name: "Najran"
      },
      {
        country: "Saudi Arabia",
        name: "Tabuk"
      },
      //Senegal
      {
        country: "Senegal",
        name: "Dakar"
      },
      {
        country: "Senegal",
        name: "Diourbel"
      },
      {
        country: "Senegal",
        name: "Fatick"
      },
      {
        country: "Senegal",
        name: "Kaolack"
      },
      {
        country: "Senegal",
        name: "Kolda"
      },
      {
        country: "Senegal",
        name: "Louga"
      },
      {
        country: "Senegal",
        name: "Matam"
      },
      {
        country: "Senegal",
        name: "Saint-Louis"
      },
      {
        country: "Senegal",
        name: "Tambacounda"
      },
      {
        country: "Senegal",
        name: "Thies"
      },
      {
        country: "Senegal",
        name: "Ziguinchor"
      },
      //Serbia and Montenegro
      {
        country: "Serbia and Montenegro",
        name: "Kosovo"
      },
      {
        country: "Serbia and Montenegro",
        name: "Montenegro"
      },
      {
        country: "Serbia and Montenegro",
        name: "Serbia"
      },
      {
        country: "Serbia and Montenegro",
        name: "Vojvodina"
      },
      //Seychelles
      {
        country: "Seychelles",
        name: "Anse aux Pins"
      },
      {
        country: "Seychelles",
        name: "Anse Boileau"
      },
      {
        country: "Seychelles",
        name: "Anse Etoile"
      },
      {
        country: "Seychelles",
        name: "Anse Louis"
      },
      {
        country: "Seychelles",
        name: "Anse Royale"
      },
      {
        country: "Seychelles",
        name: "Baie Lazare"
      },
      {
        country: "Seychelles",
        name: "Baie Sainte Anne"
      },
      {
        country: "Seychelles",
        name: "Beau Vallon"
      },
      {
        country: "Seychelles",
        name: "Bel Air"
      },
      {
        country: "Seychelles",
        name: "Bel Ombre"
      },
      {
        country: "Seychelles",
        name: "Cascade"
      },
      {
        country: "Seychelles",
        name: "Glacis"
      },
      {
        country: "Seychelles",
        name: "Grand' Anse"
      },
      {
        country: "Seychelles",
        name: "Grand' Anse"
      },
      {
        country: "Seychelles",
        name: "La Digue"
      },
      {
        country: "Seychelles",
        name: "La Riviere Anglaise"
      },
      {
        country: "Seychelles",
        name: "Mont Buxton"
      },
      {
        country: "Seychelles",
        name: "Mont Fleuri"
      },
      {
        country: "Seychelles",
        name: "Plaisance"
      },
      {
        country: "Seychelles",
        name: "Pointe La Rue"
      },
      {
        country: "Seychelles",
        name: "Port Glaud"
      },
      {
        country: "Seychelles",
        name: "Saint Louis"
      },
      {
        country: "Seychelles",
        name: "Takamaka"
      },
      //Slovakia

      {
        country: "Slovakia",
        name: "Banskobystricky"
      },
      {
        country: "Slovakia",
        name: "Bratislavsky"
      },
      {
        country: "Slovakia",
        name: "Kosicky"
      },
      {
        country: "Slovakia",
        name: "Nitriansky"
      },
      {
        country: "Slovakia",
        name: "Presovsky"
      },
      {
        country: "Slovakia",
        name: "Trenciansky"
      },
      {
        country: "Slovakia",
        name: "Trnavsky"
      },
      {
        country: "Slovakia",
        name: "Zilinsky"
      },
      //Slovenia

      {
        country: "Slovenia",
        name: "Ajdovscina"
      },
      {
        country: "Slovenia",
        name: "Beltinci"
      },
      {
        country: "Slovenia",
        name: "Benedikt"
      },
      {
        country: "Slovenia",
        name: "Bistrica ob Sotli"
      },
      {
        country: "Slovenia",
        name: "Bled"
      },
      {
        country: "Slovenia",
        name: "Bloke"
      },
      {
        country: "Slovenia",
        name: "Bohinj"
      },
      {
        country: "Slovenia",
        name: "Borovnica"
      },
      {
        country: "Slovenia",
        name: "Bovec"
      },
      {
        country: "Slovenia",
        name: "Braslovce"
      },
      {
        country: "Slovenia",
        name: "Brda"
      },
      {
        country: "Slovenia",
        name: "Brezice"
      },
      {
        country: "Slovenia",
        name: "Brezovica"
      },
      {
        country: "Slovenia",
        name: "Cankova"
      },
      {
        country: "Slovenia",
        name: "Celje"
      },
      {
        country: "Slovenia",
        name: "Cerklje na Gorenjskem"
      },
      {
        country: "Slovenia",
        name: "Cerknica"
      },
      {
        country: "Slovenia",
        name: "Cerkno"
      },
      {
        country: "Slovenia",
        name: "Cerkvenjak"
      },
      {
        country: "Slovenia",
        name: "Crensovci"
      },
      {
        country: "Slovenia",
        name: "Crna na Koroskem"
      },
      {
        country: "Slovenia",
        name: "Crnomelj"
      },
      {
        country: "Slovenia",
        name: "Destrnik"
      },
      {
        country: "Slovenia",
        name: "Divaca"
      },
      {
        country: "Slovenia",
        name: "Dobje"
      },
      {
        country: "Slovenia",
        name: "Dobrepolje"
      },
      {
        country: "Slovenia",
        name: "Dobrna"
      },
      {
        country: "Slovenia",
        name: "Dobrova-Horjul-Polhov Gradec"
      },
      {
        country: "Slovenia",
        name: "Dobrovnik-Dobronak"
      },
      {
        country: "Slovenia",
        name: "Dolenjske Toplice"
      },
      {
        country: "Slovenia",
        name: "Dol pri Ljubljani"
      },
      {
        country: "Slovenia",
        name: "Domzale"
      },
      {
        country: "Slovenia",
        name: "Dornava"
      },
      {
        country: "Slovenia",
        name: "Dravograd"
      },
      {
        country: "Slovenia",
        name: "Duplek"
      },
      {
        country: "Slovenia",
        name: "Gorenja Vas-Poljane"
      },
      {
        country: "Slovenia",
        name: "Gorisnica"
      },
      {
        country: "Slovenia",
        name: "Gornja Radgona"
      },
      {
        country: "Slovenia",
        name: "Gornji Grad"
      },
      {
        country: "Slovenia",
        name: "Gornji Petrovci"
      },
      {
        country: "Slovenia",
        name: "Grad"
      },
      {
        country: "Slovenia",
        name: "Grosuplje"
      },
      {
        country: "Slovenia",
        name: "Hajdina"
      },
      {
        country: "Slovenia",
        name: "Hoce-Slivnica"
      },
      {
        country: "Slovenia",
        name: "Hodos-Hodos"
      },
      {
        country: "Slovenia",
        name: "Horjul"
      },
      {
        country: "Slovenia",
        name: "Hrastnik"
      },
      {
        country: "Slovenia",
        name: "Hrpelje-Kozina"
      },
      {
        country: "Slovenia",
        name: "Idrija"
      },
      {
        country: "Slovenia",
        name: "Ig"
      },
      {
        country: "Slovenia",
        name: "Ilirska Bistrica"
      },
      {
        country: "Slovenia",
        name: "Ivancna Gorica"
      },
      {
        country: "Slovenia",
        name: "Izola-Isola"
      },
      {
        country: "Slovenia",
        name: "Jesenice"
      },
      {
        country: "Slovenia",
        name: "Jezersko"
      },
      {
        country: "Slovenia",
        name: "Jursinci"
      },
      {
        country: "Slovenia",
        name: "Kamnik"
      },
      {
        country: "Slovenia",
        name: "Kanal"
      },
      {
        country: "Slovenia",
        name: "Kidricevo"
      },
      {
        country: "Slovenia",
        name: "Kobarid"
      },
      {
        country: "Slovenia",
        name: "Kobilje"
      },
      {
        country: "Slovenia",
        name: "Kocevje"
      },
      {
        country: "Slovenia",
        name: "Komen"
      },
      {
        country: "Slovenia",
        name: "Komenda"
      },
      {
        country: "Slovenia",
        name: "Koper-Capodistria"
      },
      {
        country: "Slovenia",
        name: "Kostel"
      },
      {
        country: "Slovenia",
        name: "Kozje"
      },
      {
        country: "Slovenia",
        name: "Kranj"
      },
      {
        country: "Slovenia",
        name: "Kranjska Gora"
      },
      {
        country: "Slovenia",
        name: "Krizevci"
      },
      {
        country: "Slovenia",
        name: "Krsko"
      },
      {
        country: "Slovenia",
        name: "Kungota"
      },
      {
        country: "Slovenia",
        name: "Kuzma"
      },
      {
        country: "Slovenia",
        name: "Lasko"
      },
      {
        country: "Slovenia",
        name: "Lenart"
      },
      {
        country: "Slovenia",
        name: "Lendava-Lendva"
      },
      {
        country: "Slovenia",
        name: "Litija"
      },
      {
        country: "Slovenia",
        name: "Ljubljana"
      },
      {
        country: "Slovenia",
        name: "Ljubno"
      },
      {
        country: "Slovenia",
        name: "Ljutomer"
      },
      {
        country: "Slovenia",
        name: "Logatec"
      },
      {
        country: "Slovenia",
        name: "Loska Dolina"
      },
      {
        country: "Slovenia",
        name: "Loski Potok"
      },
      {
        country: "Slovenia",
        name: "Lovrenc na Pohorju"
      },
      {
        country: "Slovenia",
        name: "Luce"
      },
      {
        country: "Slovenia",
        name: "Lukovica"
      },
      {
        country: "Slovenia",
        name: "Majsperk"
      },
      {
        country: "Slovenia",
        name: "Maribor"
      },
      {
        country: "Slovenia",
        name: "Markovci"
      },
      {
        country: "Slovenia",
        name: "Medvode"
      },
      {
        country: "Slovenia",
        name: "Menges"
      },
      {
        country: "Slovenia",
        name: "Metlika"
      },
      {
        country: "Slovenia",
        name: "Mezica"
      },
      {
        country: "Slovenia",
        name: "Miklavz na Dravskem Polju"
      },
      {
        country: "Slovenia",
        name: "Miren-Kostanjevica"
      },
      {
        country: "Slovenia",
        name: "Mirna Pec"
      },
      {
        country: "Slovenia",
        name: "Mislinja"
      },
      {
        country: "Slovenia",
        name: "Moravce"
      },
      {
        country: "Slovenia",
        name: "Moravske Toplice"
      },
      {
        country: "Slovenia",
        name: "Mozirje"
      },
      {
        country: "Slovenia",
        name: "Murska Sobota"
      },
      {
        country: "Slovenia",
        name: "Muta"
      },
      {
        country: "Slovenia",
        name: "Naklo"
      },
      {
        country: "Slovenia",
        name: "Nazarje"
      },
      {
        country: "Slovenia",
        name: "Nova Gorica"
      },
      {
        country: "Slovenia",
        name: "Novo Mesto"
      },
      {
        country: "Slovenia",
        name: "Odranci"
      },
      {
        country: "Slovenia",
        name: "Oplotnica"
      },
      {
        country: "Slovenia",
        name: "Ormoz"
      },
      {
        country: "Slovenia",
        name: "Osilnica"
      },
      {
        country: "Slovenia",
        name: "Pesnica"
      },
      {
        country: "Slovenia",
        name: "Piran-Pirano"
      },
      {
        country: "Slovenia",
        name: "Pivka"
      },
      {
        country: "Slovenia",
        name: "Podcetrtek"
      },
      {
        country: "Slovenia",
        name: "Podlehnik"
      },
      {
        country: "Slovenia",
        name: "Podvelka"
      },
      {
        country: "Slovenia",
        name: "Polzela"
      },
      {
        country: "Slovenia",
        name: "Postojna"
      },
      {
        country: "Slovenia",
        name: "Prebold"
      },
      {
        country: "Slovenia",
        name: "Preddvor"
      },
      {
        country: "Slovenia",
        name: "Prevalje"
      },
      {
        country: "Slovenia",
        name: "Ptuj"
      },
      {
        country: "Slovenia",
        name: "Puconci"
      },
      {
        country: "Slovenia",
        name: "Race-Fram"
      },
      {
        country: "Slovenia",
        name: "Radece"
      },
      {
        country: "Slovenia",
        name: "Radenci"
      },
      {
        country: "Slovenia",
        name: "Radlje ob Dravi"
      },
      {
        country: "Slovenia",
        name: "Radovljica"
      },
      {
        country: "Slovenia",
        name: "Ravne na Koroskem"
      },
      {
        country: "Slovenia",
        name: "Razkrizje"
      },
      {
        country: "Slovenia",
        name: "Ribnica"
      },
      {
        country: "Slovenia",
        name: "Ribnica na Pohorju"
      },
      {
        country: "Slovenia",
        name: "Rogasovci"
      },
      {
        country: "Slovenia",
        name: "Rogaska Slatina"
      },
      {
        country: "Slovenia",
        name: "Rogatec"
      },
      {
        country: "Slovenia",
        name: "Ruse"
      },
      {
        country: "Slovenia",
        name: "Salovci"
      },
      {
        country: "Slovenia",
        name: "Selnica ob Dravi"
      },
      {
        country: "Slovenia",
        name: "Semic"
      },
      {
        country: "Slovenia",
        name: "Sempeter-Vrtojba"
      },
      {
        country: "Slovenia",
        name: "Sencur"
      },
      {
        country: "Slovenia",
        name: "Sentilj"
      },
      {
        country: "Slovenia",
        name: "Sentjernej"
      },
      {
        country: "Slovenia",
        name: "Sentjur pri Celju"
      },
      {
        country: "Slovenia",
        name: "Sevnica"
      },
      {
        country: "Slovenia",
        name: "Sezana"
      },
      {
        country: "Slovenia",
        name: "Skocjan"
      },
      {
        country: "Slovenia",
        name: "Skofja Loka"
      },
      {
        country: "Slovenia",
        name: "Skofljica"
      },
      {
        country: "Slovenia",
        name: "Slovenj Gradec"
      },
      {
        country: "Slovenia",
        name: "Slovenska Bistrica"
      },
      {
        country: "Slovenia",
        name: "Slovenske Konjice"
      },
      {
        country: "Slovenia",
        name: "Smarje pri Jelsah"
      },
      {
        country: "Slovenia",
        name: "Smartno ob Paki"
      },
      {
        country: "Slovenia",
        name: "Smartno pri Litiji"
      },
      {
        country: "Slovenia",
        name: "Sodrazica"
      },
      {
        country: "Slovenia",
        name: "Solcava"
      },
      {
        country: "Slovenia",
        name: "Sostanj"
      },
      {
        country: "Slovenia",
        name: "Starse"
      },
      {
        country: "Slovenia",
        name: "Store"
      },
      {
        country: "Slovenia",
        name: "Sveta Ana"
      },
      {
        country: "Slovenia",
        name: "Sveti Andraz v Slovenskih Goricah"
      },
      {
        country: "Slovenia",
        name: "Sveti Jurij"
      },
      {
        country: "Slovenia",
        name: "Tabor"
      },
      {
        country: "Slovenia",
        name: "Tisina"
      },
      {
        country: "Slovenia",
        name: "Tolmin"
      },
      {
        country: "Slovenia",
        name: "Trbovlje"
      },
      {
        country: "Slovenia",
        name: "Trebnje"
      },
      {
        country: "Slovenia",
        name: "Trnovska Vas"
      },
      {
        country: "Slovenia",
        name: "Trzic"
      },
      {
        country: "Slovenia",
        name: "Trzin"
      },
      {
        country: "Slovenia",
        name: "Turnisce"
      },
      {
        country: "Slovenia",
        name: "Velenje"
      },
      {
        country: "Slovenia",
        name: "Velika Polana"
      },
      {
        country: "Slovenia",
        name: "Velike Lasce"
      },
      {
        country: "Slovenia",
        name: "Verzej"
      },
      {
        country: "Slovenia",
        name: "Videm"
      },
      {
        country: "Slovenia",
        name: "Vipava"
      },
      {
        country: "Slovenia",
        name: "Vitanje"
      },
      {
        country: "Slovenia",
        name: "Vodice"
      },
      {
        country: "Slovenia",
        name: "Vojnik"
      },
      {
        country: "Slovenia",
        name: "Vransko"
      },
      {
        country: "Slovenia",
        name: "Vrhnika"
      },
      {
        country: "Slovenia",
        name: "Vuzenica"
      },
      {
        country: "Slovenia",
        name: "Zagorje ob Savi"
      },
      {
        country: "Slovenia",
        name: "Zalec"
      },
      {
        country: "Slovenia",
        name: "Zavrc"
      },
      {
        country: "Slovenia",
        name: "Zelezniki"
      },
      {
        country: "Slovenia",
        name: "Zetale"
      },
      {
        country: "Slovenia",
        name: "Ziri"
      },
      {
        country: "Slovenia",
        name: "Zirovnica"
      },
      {
        country: "Slovenia",
        name: "Zuzemberk"
      },
      {
        country: "Slovenia",
        name: "Zrece"
      },
      //Solomon Islands

      {
        country: "Solomon Islands",
        name: "Central"
      },
      {
        country: "Solomon Islands",
        name: "Choiseul"
      },
      {
        country: "Solomon Islands",
        name: "Guadalcanal"
      },
      {
        country: "Solomon Islands",
        name: "Honiara"
      },
      {
        country: "Solomon Islands",
        name: "Isabel"
      },
      {
        country: "Solomon Islands",
        name: "Makira"
      },
      {
        country: "Solomon Islands",
        name: "Malaita"
      },
      {
        country: "Solomon Islands",
        name: "Rennell and Bellona"
      },
      {
        country: "Solomon Islands",
        name: "Temotu"
      },
      {
        country: "Solomon Islands",
        name: "Western"
      },
      //Somalia

      {
        country: "Somalia",
        name: "Awdal"
      },
      {
        country: "Somalia",
        name: "Bakool"
      },
      {
        country: "Somalia",
        name: "Banaadir"
      },
      {
        country: "Somalia",
        name: "Bari"
      },
      {
        country: "Somalia",
        name: "Bay"
      },
      {
        country: "Somalia",
        name: "Galguduud"
      },
      {
        country: "Somalia",
        name: "Gedo"
      },
      {
        country: "Somalia",
        name: "Hiiraan"
      },
      {
        country: "Somalia",
        name: "Jubbada Dhexe"
      },
      {
        country: "Somalia",
        name: "Jubbada Hoose"
      },
      {
        country: "Somalia",
        name: "Mudug"
      },
      {
        country: "Somalia",
        name: "Nugaal"
      },
      {
        country: "Somalia",
        name: "Sanaag"
      },
      {
        country: "Somalia",
        name: "Shabeellaha Dhexe"
      },
      {
        country: "Somalia",
        name: "Shabeellaha Hoose"
      },
      {
        country: "Somalia",
        name: "Sool"
      },
      {
        country: "Somalia",
        name: "Togdheer"
      },
      {
        country: "Somalia",
        name: "Woqooyi Galbeed"
      },

      //South Africa
      {
        country: "South Africa",
        name: "Eastern Cape"
      },
      {
        country: "South Africa",
        name: "Free State"
      },
      {
        country: "South Africa",
        name: "Gauteng"
      },
      {
        country: "South Africa",
        name: "KwaZulu-Natal"
      },
      {
        country: "South Africa",
        name: "Limpopo"
      },
      {
        country: "South Africa",
        name: "Mpumalanga"
      },
      {
        country: "South Africa",
        name: "North-West"
      },
      {
        country: "South Africa",
        name: "Northern Cape"
      },
      {
        country: "South Africa",
        name: "Western Cape"
      },

      //spain
      {
        country: "Spain",
        name: "Andalucia"
      },
      {
        country: "Spain",
        name: "Aragon"
      },
      {
        country: "Spain",
        name: "Asturias"
      },
      {
        country: "Spain",
        name: "Baleares"
      },
      {
        country: "Spain",
        name: "Ceuta"
      },
      {
        country: "Spain",
        name: "Canarias"
      },
      {
        country: "Spain",
        name: "Cantabria"
      },
      {
        country: "Spain",
        name: "Castilla-La Mancha"
      },
      {
        country: "Spain",
        name: "Castilla y Leon"
      },
      {
        country: "Spain",
        name: "Cataluna"
      },
      {
        country: "Spain",
        name: "Comunidad Valenciana"
      },
      {
        country: "Spain",
        name: "Extremadura"
      },
      {
        country: "Spain",
        name: "Galicia"
      },
      {
        country: "Spain",
        name: "La Rioja"
      },
      {
        country: "Spain",
        name: "Madrid"
      },
      {
        country: "Spain",
        name: "Melilla"
      },
      {
        country: "Spain",
        name: "Murcia"
      },
      {
        country: "Spain",
        name: "Navarra"
      },
      {
        country: "Spain",
        name: "Pais Vasco"
      },

      //Sri Lanka
      {
        country: "Sri Lanka",
        name: "Central"
      },
      {
        country: "Sri Lanka",
        name: "North Central"
      },
      {
        country: "Sri Lanka",
        name: "North Eastern"
      },
      {
        country: "Sri Lanka",
        name: "North Western"
      },
      {
        country: "Sri Lanka",
        name: "Sabaragamuwa"
      },
      {
        country: "Sri Lanka",
        name: "Southern"
      },
      {
        country: "Sri Lanka",
        name: "Uva"
      },
      {
        country: "Sri Lanka",
        name: "Western"
      },
      //sudan

      {
        country: "Sudan",
        name: "A'ali an Nil"
      },
      {
        country: "Sudan",
        name: "Al Bahr al Ahmar"
      },
      {
        country: "Sudan",
        name: "Al Buhayrat"
      },
      {
        country: "Sudan",
        name: "Al Jazirah"
      },
      {
        country: "Sudan",
        name: "Al Khartum"
      },
      {
        country: "Sudan",
        name: "Al Qadarif"
      },
      {
        country: "Sudan",
        name: "Al Wahdah"
      },
      {
        country: "Sudan",
        name: "An Nil al Abyad"
      },
      {
        country: "Sudan",
        name: "An Nil al Azraq"
      },
      {
        country: "Sudan",
        name: "Ash Shamaliyah"
      },
      {
        country: "Sudan",
        name: "Bahr al Jabal"
      },
      {
        country: "Sudan",
        name: "Gharb al Istiwa'iyah"
      },
      {
        country: "Sudan",
        name: "Gharb Bahr al Ghazal"
      },
      {
        country: "Sudan",
        name: "Gharb Darfur"
      },
      {
        country: "Sudan",
        name: "Gharb Kurdufan"
      },
      {
        country: "Sudan",
        name: "Janub Darfur"
      },
      {
        country: "Sudan",
        name: "Janub Kurdufan"
      },
      {
        country: "Sudan",
        name: "Junqali"
      },
      {
        country: "Sudan",
        name: "Kassala"
      },
      {
        country: "Sudan",
        name: "Nahr an Nil"
      },
      {
        country: "Sudan",
        name: "Shamal Bahr al Ghazal"
      },
      {
        country: "Sudan",
        name: "Shamal Darfur"
      },
      {
        country: "Sudan",
        name: "Shamal Kurdufan"
      },
      {
        country: "Sudan",
        name: "Sharq al Istiwa'iyah"
      },
      {
        country: "Sudan",
        name: "Sinnar"
      },
      {
        country: "Sudan",
        name: "Warab"
      },
      //Suriname
      {
        country: "Suriname",
        name: "Brokopondo"
      },
      {
        country: "Suriname",
        name: "Commewijne"
      },
      {
        country: "Suriname",
        name: "Coronie"
      },
      {
        country: "Suriname",
        name: "Marowijne"
      },
      {
        country: "Suriname",
        name: "Nickerie"
      },
      {
        country: "Suriname",
        name: "Para"
      },
      {
        country: "Suriname",
        name: "Paramaribo"
      },
      {
        country: "Suriname",
        name: "Saramacca"
      },
      {
        country: "Suriname",
        name: "Sipaliwini"
      },
      {
        country: "Suriname",
        name: "Wanica"
      },

      //Swaziland
      {
        country: "Swaziland",
        name: "Hhohho"
      },
      {
        country: "Swaziland",
        name: "Lubombo"
      },
      {
        country: "Swaziland",
        name: "Manzini"
      },
      {
        country: "Swaziland",
        name: "Shiselweni"
      },
      //Sweden
      {
        country: "Sweden",
        name: "Blekinge"
      },
      {
        country: "Sweden",
        name: "Dalarnas"
      },
      {
        country: "Sweden",
        name: "Gavleborgs"
      },
      {
        country: "Sweden",
        name: "Gotlands"
      },
      {
        country: "Sweden",
        name: "Hallands"
      },
      {
        country: "Sweden",
        name: "Jamtlands"
      },
      {
        country: "Sweden",
        name: "Jonkopings"
      },
      {
        country: "Sweden",
        name: "Kalmar"
      },
      {
        country: "Sweden",
        name: "Kronobergs"
      },
      {
        country: "Sweden",
        name: "Norrbottens"
      },
      {
        country: "Sweden",
        name: "Orebro"
      },
      {
        country: "Sweden",
        name: "Ostergotlands"
      },
      {
        country: "Sweden",
        name: "Skane"
      },
      {
        country: "Sweden",
        name: "Sodermanlands"
      },
      {
        country: "Sweden",
        name: "Stockholms"
      },
      {
        country: "Sweden",
        name: "Uppsala"
      },
      {
        country: "Sweden",
        name: "Varmlands"
      },
      {
        country: "Sweden",
        name: "Vasterbottens"
      },
      {
        country: "Sweden",
        name: "Vasternorrlands"
      },
      {
        country: "Sweden",
        name: "Vastmanlands"
      },
      {
        country: "Sweden",
        name: "Vastra Gotalands"
      },
      //Switzerland
      {
        country: "Switzerland",
        name: "Aargau"
      },
      {
        country: "Switzerland",
        name: "Appenzell Ausser-Rhoden"
      },
      {
        country: "Switzerland",
        name: "Appenzell Inner-Rhoden"
      },
      {
        country: "Switzerland",
        name: "Basel-Landschaft"
      },
      {
        country: "Switzerland",
        name: "Basel-Stadt"
      },
      {
        country: "Switzerland",
        name: "Bern"
      },
      {
        country: "Switzerland",
        name: "Fribourg"
      },
      {
        country: "Switzerland",
        name: "Geneve"
      },
      {
        country: "Switzerland",
        name: "Glarus"
      },
      {
        country: "Switzerland",
        name: "Graubunden"
      },
      {
        country: "Switzerland",
        name: "Jura"
      },
      {
        country: "Switzerland",
        name: "Luzern"
      },
      {
        country: "Switzerland",
        name: "Neuchatel"
      },
      {
        country: "Switzerland",
        name: "Nidwalden"
      },
      {
        country: "Switzerland",
        name: "Obwalden"
      },
      {
        country: "Switzerland",
        name: "Sankt Gallen"
      },
      {
        country: "Switzerland",
        name: "Schaffhausen"
      },
      {
        country: "Switzerland",
        name: "Schwyz"
      },
      {
        country: "Switzerland",
        name: "Solothurn"
      },
      {
        country: "Switzerland",
        name: "Thurgau"
      },
      {
        country: "Switzerland",
        name: "Ticino"
      },
      {
        country: "Switzerland",
        name: "Uri"
      },
      {
        country: "Switzerland",
        name: "Valais"
      },
      {
        country: "Switzerland",
        name: "Vaud"
      },
      {
        country: "Switzerland",
        name: "Zug"
      },
      {
        country: "Switzerland",
        name: "Zurich"
      },
      //Taiwan
      {
        country: "Taiwan",
        name: "Chang-hua"
      },
      {
        country: "Taiwan",
        name: "Chia-i"
      },
      {
        country: "Taiwan",
        name: "Hsin-chu"
      },
      {
        country: "Taiwan",
        name: "Hua-lien"
      },
      {
        country: "Taiwan",
        name: "I-lan"
      },
      {
        country: "Taiwan",
        name: "Kao-hsiung"
      },
      {
        country: "Taiwan",
        name: "Kin-men"
      },
      {
        country: "Taiwan",
        name: "Lien-chiang"
      },
      {
        country: "Taiwan",
        name: "Miao-li"
      },
      {
        country: "Taiwan",
        name: "Nan-t'ou"
      },
      {
        country: "Taiwan",
        name: "P'eng-hu"
      },
      {
        country: "Taiwan",
        name: "P'ing-tung"
      },
      {
        country: "Taiwan",
        name: "T'ai-chung"
      },
      {
        country: "Taiwan",
        name: "T'ai-nan"
      },
      {
        country: "Taiwan",
        name: "T'ai-pei"
      },
      {
        country: "Taiwan",
        name: "T'ai-tung"
      },
      {
        country: "Taiwan",
        name: "T'ao-yuan"
      },
      {
        country: "Taiwan",
        name: "Yun-lin"
      },
      {
        country: "Taiwan",
        name: "Chia-i"
      },
      {
        country: "Taiwan",
        name: "Chi-lung"
      },
      {
        country: "Taiwan",
        name: "Hsin-chu"
      },
      {
        country: "Taiwan",
        name: "T'ai-chung"
      },
      {
        country: "Taiwan",
        name: "T'ai-nan"
      },
      {
        country: "Taiwan",
        name: "Kao-hsiung city"
      },
      {
        country: "Taiwan",
        name: "T'ai-pei city"
      },

      //syria
      {
        country: "Syria",
        name: "Al Hasakah"
      },
      {
        country: "Syria",
        name: "Al Ladhiqiyah"
      },
      {
        country: "Syria",
        name: "Al Qunaytirah"
      },
      {
        country: "Syria",
        name: "Ar Raqqah"
      },
      {
        country: "Syria",
        name: "As Suwayda'"
      },
      {
        country: "Syria",
        name: "Dar'a"
      },
      {
        country: "Syria",
        name: "Dayr az Zawr"
      },
      {
        country: "Syria",
        name: "Dimashq"
      },
      {
        country: "Syria",
        name: "Halab"
      },
      {
        country: "Syria",
        name: "Hamah"
      },
      {
        country: "Syria",
        name: "Hims"
      },
      {
        country: "Syria",
        name: "Idlib"
      },
      {
        country: "Syria",
        name: "Rif Dimashq"
      },
      {
        country: "Syria",
        name: "Tartus"
      },
      //Tanzania
      {
        country: "Tanzania",
        name: "Arusha"
      },
      {
        country: "Tanzania",
        name: "Dar es Salaam"
      },
      {
        country: "Tanzania",
        name: "Dodoma"
      },
      {
        country: "Tanzania",
        name: "Iringa"
      },
      {
        country: "Tanzania",
        name: "Kagera"
      },
      {
        country: "Tanzania",
        name: "Kigoma"
      },
      {
        country: "Tanzania",
        name: "Kilimanjaro"
      },
      {
        country: "Tanzania",
        name: "Lindi"
      },
      {
        country: "Tanzania",
        name: "Manyara"
      },
      {
        country: "Tanzania",
        name: "Mara"
      },
      {
        country: "Tanzania",
        name: "Mbeya"
      },
      {
        country: "Tanzania",
        name: "Morogoro"
      },
      {
        country: "Tanzania",
        name: "Mtwara"
      },
      {
        country: "Tanzania",
        name: "Mwanza"
      },
      {
        country: "Tanzania",
        name: "Pemba North"
      },
      {
        country: "Tanzania",
        name: "Pemba South"
      },
      {
        country: "Tanzania",
        name: "Pwani"
      },
      {
        country: "Tanzania",
        name: "Rukwa"
      },
      {
        country: "Tanzania",
        name: "Ruvuma"
      },
      {
        country: "Tanzania",
        name: "Shinyanga"
      },
      {
        country: "Tanzania",
        name: "Singida"
      },
      {
        country: "Tanzania",
        name: "Tabora"
      },
      {
        country: "Tanzania",
        name: "Tanga"
      },
      {
        country: "Tanzania",
        name: "Zanzibar Central/South"
      },
      {
        country: "Tanzania",
        name: "Zanzibar North"
      },
      {
        country: "Tanzania",
        name: "Zanzibar Urban/West"
      },
      //Thailand

      {
        country: "Thailand",
        name: "Amnat Charoen"
      },
      {
        country: "Thailand",
        name: "Ang Thong"
      },
      {
        country: "Thailand",
        name: "Buriram"
      },
      {
        country: "Thailand",
        name: "Chachoengsao"
      },
      {
        country: "Thailand",
        name: "Chai Nat"
      },
      {
        country: "Thailand",
        name: "Chaiyaphum"
      },
      {
        country: "Thailand",
        name: "Chanthaburi"
      },
      {
        country: "Thailand",
        name: "Chiang Mai"
      },
      {
        country: "Thailand",
        name: "Chiang Rai"
      },
      {
        country: "Thailand",
        name: "Chon Buri"
      },
      {
        country: "Thailand",
        name: "Chumphon"
      },
      {
        country: "Thailand",
        name: "Kalasin"
      },
      {
        country: "Thailand",
        name: "Kamphaeng Phet"
      },
      {
        country: "Thailand",
        name: "Kanchanaburi"
      },
      {
        country: "Thailand",
        name: "Khon Kaen"
      },
      {
        country: "Thailand",
        name: "Krabi"
      },
      {
        country: "Thailand",
        name: "Krung Thep Mahanakhon"
      },
      {
        country: "Thailand",
        name: "Lampang"
      },
      {
        country: "Thailand",
        name: "Lamphun"
      },
      {
        country: "Thailand",
        name: "Loei"
      },
      {
        country: "Thailand",
        name: "Lop Buri"
      },
      {
        country: "Thailand",
        name: "Mae Hong Son"
      },
      {
        country: "Thailand",
        name: "Maha Sarakham"
      },
      {
        country: "Thailand",
        name: "Mukdahan"
      },
      {
        country: "Thailand",
        name: "Nakhon Nayok"
      },
      {
        country: "Thailand",
        name: "Nakhon Pathom"
      },
      {
        country: "Thailand",
        name: "Nakhon Phanom"
      },
      {
        country: "Thailand",
        name: "Nakhon Ratchasima"
      },
      {
        country: "Thailand",
        name: "Nakhon Sawan"
      },
      {
        country: "Thailand",
        name: "Nakhon Si Thammarat"
      },
      {
        country: "Thailand",
        name: "Nan"
      },
      {
        country: "Thailand",
        name: "Narathiwat"
      },
      {
        country: "Thailand",
        name: "Nong Bua Lamphu"
      },
      {
        country: "Thailand",
        name: "Nong Khai"
      },
      {
        country: "Thailand",
        name: "Nonthaburi"
      },
      {
        country: "Thailand",
        name: "Pathum Thani"
      },
      {
        country: "Thailand",
        name: "Pattani"
      },
      {
        country: "Thailand",
        name: "Phangnga"
      },
      {
        country: "Thailand",
        name: "Phatthalung"
      },
      {
        country: "Thailand",
        name: "Phayao"
      },
      {
        country: "Thailand",
        name: "Phetchabun"
      },
      {
        country: "Thailand",
        name: "Phetchaburi"
      },
      {
        country: "Thailand",
        name: "Phichit"
      },
      {
        country: "Thailand",
        name: "Phitsanulok"
      },
      {
        country: "Thailand",
        name: "Phra Nakhon Si Ayutthaya"
      },
      {
        country: "Thailand",
        name: "Phrae"
      },
      {
        country: "Thailand",
        name: "Phuket"
      },
      {
        country: "Thailand",
        name: "Prachin Buri"
      },
      {
        country: "Thailand",
        name: "Prachuap Khiri Khan"
      },
      {
        country: "Thailand",
        name: "Ranong"
      },
      {
        country: "Thailand",
        name: "Ratchaburi"
      },
      {
        country: "Thailand",
        name: "Rayong"
      },
      {
        country: "Thailand",
        name: "Roi Et"
      },
      {
        country: "Thailand",
        name: "Sa Kaeo"
      },
      {
        country: "Thailand",
        name: "Sakon Nakhon"
      },
      {
        country: "Thailand",
        name: "Samut Prakan"
      },
      {
        country: "Thailand",
        name: "Samut Sakhon"
      },
      {
        country: "Thailand",
        name: "Samut Songkhram"
      },
      {
        country: "Thailand",
        name: "Sara Buri"
      },
      {
        country: "Thailand",
        name: "Satun"
      },
      {
        country: "Thailand",
        name: "Sing Buri"
      },
      {
        country: "Thailand",
        name: "Sisaket"
      },
      {
        country: "Thailand",
        name: "Songkhla"
      },
      {
        country: "Thailand",
        name: "Sukhothai"
      },
      {
        country: "Thailand",
        name: "Suphan Buri"
      },
      {
        country: "Thailand",
        name: "Surat Thani"
      },
      {
        country: "Thailand",
        name: "Surin"
      },
      {
        country: "Thailand",
        name: "Tak"
      },
      {
        country: "Thailand",
        name: "Trang"
      },
      {
        country: "Thailand",
        name: "Trat"
      },
      {
        country: "Thailand",
        name: "Ubon Ratchathani"
      },
      {
        country: "Thailand",
        name: "Udon Thani"
      },
      {
        country: "Thailand",
        name: "Uthai Thani"
      },
      {
        country: "Thailand",
        name: "Uttaradit"
      },
      {
        country: "Thailand",
        name: "Yala"
      },
      {
        country: "Thailand",
        name: "Yasothon"
      },

      //Togo
      {
        country: "Togo",
        name: "Kara"
      },
      {
        country: "Togo",
        name: "Plateaux"
      },
      {
        country: "Togo",
        name: "Savanes"
      },
      {
        country: "Togo",
        name: "Centrale"
      },
      {
        country: "Togo",
        name: "Maritime"
      },

      //Trinidad and Tobago

      {
        country: "Trinidad and Tobago",
        name: "Couva"
      },
      {
        country: "Trinidad and Tobago",
        name: "Diego Martin"
      },
      {
        country: "Trinidad and Tobago",
        name: "Mayaro"
      },
      {
        country: "Trinidad and Tobago",
        name: "Penal"
      },
      {
        country: "Trinidad and Tobago",
        name: "Princes Town"
      },
      {
        country: "Trinidad and Tobago",
        name: "Sangre Grande"
      },
      {
        country: "Trinidad and Tobago",
        name: "San Juan"
      },
      {
        country: "Trinidad and Tobago",
        name: "Siparia"
      },
      {
        country: "Trinidad and Tobago",
        name: "Tunapuna"
      },
      {
        country: "Trinidad and Tobago",
        name: "Port-of-Spain"
      },
      {
        country: "Trinidad and Tobago",
        name: "San Fernando"
      },
      {
        country: "Trinidad and Tobago",
        name: "Arima"
      },
      {
        country: "Trinidad and Tobago",
        name: "Point Fortin"
      },
      {
        country: "Trinidad and Tobago",
        name: "Chaguanas"
      },
      {
        country: "Trinidad and Tobago",
        name: "Tobago"
      },

      //Tunisia

      {
        country: "Tunisia",
        name: "Ariana (Aryanah)"
      },
      {
        country: "Tunisia",
        name: "Beja (Bajah)"
      },
      {
        country: "Tunisia",
        name: "Ben Arous (Bin 'Arus)"
      },
      {
        country: "Tunisia",
        name: "Bizerte (Banzart)"
      },
      {
        country: "Tunisia",
        name: "Gabes (Qabis)"
      },
      {
        country: "Tunisia",
        name: "Gafsa (Qafsah)"
      },
      {
        country: "Tunisia",
        name: "Jendouba (Jundubah)"
      },
      {
        country: "Tunisia",
        name: "Kairouan (Al Qayrawan)"
      },
      {
        country: "Tunisia",
        name: "Kasserine (Al Qasrayn)"
      },
      {
        country: "Tunisia",
        name: "Kebili (Qibili)"
      },
      {
        country: "Tunisia",
        name: "Kef (Al Kaf)"
      },
      {
        country: "Tunisia",
        name: "Mahdia (Al Mahdiyah)"
      },
      {
        country: "Tunisia",
        name: "Manouba (Manubah)"
      },
      {
        country: "Tunisia",
        name: "Medenine (Madanin)"
      },
      {
        country: "Tunisia",
        name: "Monastir (Al Munastir)"
      },
      {
        country: "Tunisia",
        name: "Nabeul (Nabul)"
      },
      {
        country: "Tunisia",
        name: "Sfax (Safaqis)"
      },
      {
        country: "Tunisia",
        name: "Sidi Bou Zid (Sidi Bu Zayd)"
      },
      {
        country: "Tunisia",
        name: "Siliana (Silyanah)"
      },
      {
        country: "Tunisia",
        name: "Sousse (Susah)"
      },
      {
        country: "Tunisia",
        name: "Tataouine (Tatawin)"
      },
      {
        country: "Tunisia",
        name: "Tozeur (Tawzar)"
      },
      {
        country: "Tunisia",
        name: "Tunis"
      },
      {
        country: "Tunisia",
        name: "Zaghouan (Zaghwan)"
      },
      //Turkmenistan
      {
        country: "Turkmenistan",
        name: "Ahal Welayaty (Ashgabat)"
      },
      {
        country: "Turkmenistan",
        name: "Balkan Welayaty (Balkanabat)"
      },
      {
        country: "Turkmenistan",
        name: "Dashoguz Welayaty"
      },
      {
        country: "Turkmenistan",
        name: "Lebap Welayaty (Turkmenabat)"
      },
      {
        country: "Turkmenistan",
        name: "Mary Welayaty"
      },

      //uganda

      {
        country: "Uganda",
        name: "Adjumani"
      },
      {
        country: "Uganda",
        name: "Apac"
      },
      {
        country: "Uganda",
        name: "Arua"
      },
      {
        country: "Uganda",
        name: "Bugiri"
      },
      {
        country: "Uganda",
        name: "Bundibugyo"
      },
      {
        country: "Uganda",
        name: "Bushenyi"
      },
      {
        country: "Uganda",
        name: "Busia"
      },
      {
        country: "Uganda",
        name: "Gulu"
      },
      {
        country: "Uganda",
        name: "Hoima"
      },
      {
        country: "Uganda",
        name: "Iganga"
      },
      {
        country: "Uganda",
        name: "Jinja"
      },
      {
        country: "Uganda",
        name: "Kabale"
      },
      {
        country: "Uganda",
        name: "Kabarole"
      },
      {
        country: "Uganda",
        name: "Kaberamaido"
      },
      {
        country: "Uganda",
        name: "Kalangala"
      },
      {
        country: "Uganda",
        name: "Kampala"
      },
      {
        country: "Uganda",
        name: "Kamuli"
      },
      {
        country: "Uganda",
        name: "Kamwenge"
      },
      {
        country: "Uganda",
        name: "Kanungu"
      },
      {
        country: "Uganda",
        name: "Kapchorwa"
      },
      {
        country: "Uganda",
        name: "Kasese"
      },
      {
        country: "Uganda",
        name: "Katakwi"
      },
      {
        country: "Uganda",
        name: "Kayunga"
      },
      {
        country: "Uganda",
        name: "Kibale"
      },
      {
        country: "Uganda",
        name: "Kiboga"
      },
      {
        country: "Uganda",
        name: "Kisoro"
      },
      {
        country: "Uganda",
        name: "Kitgum"
      },
      {
        country: "Uganda",
        name: "Kotido"
      },
      {
        country: "Uganda",
        name: "Kumi"
      },
      {
        country: "Uganda",
        name: "Kyenjojo"
      },
      {
        country: "Uganda",
        name: "Lira"
      },
      {
        country: "Uganda",
        name: "Luwero"
      },
      {
        country: "Uganda",
        name: "Masaka"
      },
      {
        country: "Uganda",
        name: "Masindi"
      },
      {
        country: "Uganda",
        name: "Mayuge"
      },
      {
        country: "Uganda",
        name: "Mbale"
      },
      {
        country: "Uganda",
        name: "Mbarara"
      },
      {
        country: "Uganda",
        name: "Moroto"
      },
      {
        country: "Uganda",
        name: "Moyo"
      },
      {
        country: "Uganda",
        name: "Mpigi"
      },
      {
        country: "Uganda",
        name: "Mubende"
      },
      {
        country: "Uganda",
        name: "Mukono"
      },
      {
        country: "Uganda",
        name: "Nakapiripirit"
      },
      {
        country: "Uganda",
        name: "Nakasongola"
      },
      {
        country: "Uganda",
        name: "Nebbi"
      },
      {
        country: "Uganda",
        name: "Ntungamo"
      },
      {
        country: "Uganda",
        name: "Pader"
      },
      {
        country: "Uganda",
        name: "Pallisa"
      },
      {
        country: "Uganda",
        name: "Rakai"
      },
      {
        country: "Uganda",
        name: "Rukungiri"
      },
      {
        country: "Uganda",
        name: "Sembabule"
      },
      {
        country: "Uganda",
        name: "Sironko"
      },
      {
        country: "Uganda",
        name: "Soroti"
      },
      {
        country: "Uganda",
        name: "Tororo"
      },
      {
        country: "Uganda",
        name: "Wakiso"
      },
      {
        country: "Uganda",
        name: "Yumbe"
      },

      //Ukraine
      {
        country: "Ukraine",
        name: "Cherkasy"
      },
      {
        country: "Ukraine",
        name: "Chernihiv"
      },
      {
        country: "Ukraine",
        name: "Chernivtsi"
      },
      {
        country: "Ukraine",
        name: "Crimea"
      },
      {
        country: "Ukraine",
        name: "Dnipropetrovs'k"
      },
      {
        country: "Ukraine",
        name: "Donets'k"
      },
      {
        country: "Ukraine",
        name: "Ivano-Frankivs'k"
      },
      {
        country: "Ukraine",
        name: "Kharkiv"
      },
      {
        country: "Ukraine",
        name: "Kherson"
      },
      {
        country: "Ukraine",
        name: "Khmel'nyts'kyy"
      },
      {
        country: "Ukraine",
        name: "Kirovohrad"
      },
      {
        country: "Ukraine",
        name: "Kiev"
      },
      {
        country: "Ukraine",
        name: "Kyyiv"
      },
      {
        country: "Ukraine",
        name: "Luhans'k"
      },
      {
        country: "Ukraine",
        name: "L'viv"
      },
      {
        country: "Ukraine",
        name: "Mykolayiv"
      },
      {
        country: "Ukraine",
        name: "Odesa"
      },
      {
        country: "Ukraine",
        name: "Poltava"
      },
      {
        country: "Ukraine",
        name: "Rivne"
      },
      {
        country: "Ukraine",
        name: "Sevastopol'"
      },
      {
        country: "Ukraine",
        name: "Sumy"
      },
      {
        country: "Ukraine",
        name: "Ternopil'"
      },
      {
        country: "Ukraine",
        name: "Vinnytsya"
      },
      {
        country: "Ukraine",
        name: "Volyn'"
      },
      {
        country: "Ukraine",
        name: "Zakarpattya"
      },
      {
        country: "Ukraine",
        name: "Zaporizhzhya"
      },
      {
        country: "Ukraine",
        name: "Zhytomyr"
      },

      //United Arab Emirates
      {
        country: "United Arab Emirates",
        name: "Abu Dhabi"
      },
      {
        country: "United Arab Emirates",
        name: "'Ajman"
      },
      {
        country: "United Arab Emirates",
        name: "Al Fujayrah"
      },
      {
        country: "United Arab Emirates",
        name: "Sharjah"
      },
      {
        country: "United Arab Emirates",
        name: "Dubai"
      },
      {
        country: "United Arab Emirates",
        name: "Ra's al Khaymah"
      },
      {
        country: "United Arab Emirates",
        name: "Umm al Qaywayn"
      },
      //United States
      {
        country: "United States",
        name: "Alabama"
      },
      {
        country: "United States",
        name: "Alaska"
      },
      {
        country: "United States",
        name: "Arizona"
      },
      {
        country: "United States",
        name: "Arkansas"
      },
      {
        country: "United States",
        name: "California"
      },
      {
        country: "United States",
        name: "Colorado"
      },
      {
        country: "United States",
        name: "Connecticut"
      },
      {
        country: "United States",
        name: "Delaware"
      },
      {
        country: "United States",
        name: "District of Columbia"
      },
      {
        country: "United States",
        name: "Florida"
      },
      {
        country: "United States",
        name: "Georgia"
      },
      {
        country: "United States",
        name: "Hawaii"
      },
      {
        country: "United States",
        name: "Idaho"
      },
      {
        country: "United States",
        name: "Illinois"
      },
      {
        country: "United States",
        name: "Indiana"
      },
      {
        country: "United States",
        name: "Iowa"
      },
      {
        country: "United States",
        name: "Kansas"
      },
      {
        country: "United States",
        name: "Kentucky"
      },
      {
        country: "United States",
        name: "Louisiana"
      },
      {
        country: "United States",
        name: "Maine"
      },
      {
        country: "United States",
        name: "Maryland"
      },
      {
        country: "United States",
        name: "Massachusetts"
      },
      {
        country: "United States",
        name: "Michigan"
      },
      {
        country: "United States",
        name: "Minnesota"
      },
      {
        country: "United States",
        name: "Mississippi"
      },
      {
        country: "United States",
        name: "Missouri"
      },
      {
        country: "United States",
        name: "Montana"
      },
      {
        country: "United States",
        name: "Nebraska"
      },
      {
        country: "United States",
        name: "Nevada"
      },
      {
        country: "United States",
        name: "New Hampshire"
      },
      {
        country: "United States",
        name: "New Jersey"
      },
      {
        country: "United States",
        name: "New Mexico"
      },
      {
        country: "United States",
        name: "New York"
      },
      {
        country: "United States",
        name: "North Carolina"
      },
      {
        country: "United States",
        name: "North Dakota"
      },
      {
        country: "United States",
        name: "Ohio"
      },
      {
        country: "United States",
        name: "Oklahoma"
      },
      {
        country: "United States",
        name: "Oregon"
      },
      {
        country: "United States",
        name: "Pennsylvania"
      },
      {
        country: "United States",
        name: "Rhode Island"
      },
      {
        country: "United States",
        name: "South Carolina"
      },
      {
        country: "United States",
        name: "South Dakota"
      },
      {
        country: "United States",
        name: "Tennessee"
      },
      {
        country: "United States",
        name: "Texas"
      },
      {
        country: "United States",
        name: "Utah"
      },
      {
        country: "United States",
        name: "Vermont"
      },
      {
        country: "United States",
        name: "Virginia"
      },
      {
        country: "United States",
        name: "Washington"
      },
      {
        country: "United States",
        name: "West Virginia"
      },
      {
        country: "United States",
        name: "Wisconsin"
      },
      {
        country: "United States",
        name: "Wyoming"
      },

      //Uruguay
      {
        country: "Uruguay",
        name: "Artigas"
      },
      {
        country: "Uruguay",
        name: "Canelones"
      },
      {
        country: "Uruguay",
        name: "Cerro Largo"
      },
      {
        country: "Uruguay",
        name: "Colonia"
      },
      {
        country: "Uruguay",
        name: "Durazno"
      },
      {
        country: "Uruguay",
        name: "Flores"
      },
      {
        country: "Uruguay",
        name: "Florida"
      },
      {
        country: "Uruguay",
        name: "Lavalleja"
      },
      {
        country: "Uruguay",
        name: "Maldonado"
      },
      {
        country: "Uruguay",
        name: "Montevideo"
      },
      {
        country: "Uruguay",
        name: "Paysandu"
      },
      {
        country: "Uruguay",
        name: "Rio Negro"
      },
      {
        country: "Uruguay",
        name: "Rivera"
      },
      {
        country: "Uruguay",
        name: "Rocha"
      },
      {
        country: "Uruguay",
        name: "Salto"
      },
      {
        country: "Uruguay",
        name: "San Jose"
      },
      {
        country: "Uruguay",
        name: "Soriano"
      },
      {
        country: "Uruguay",
        name: "Tacuarembo"
      },
      {
        country: "Uruguay",
        name: "Treinta y Tres"
      },

      //Uzbekistan
      {
        country: "Uzbekistan",
        name: "Andijon Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Buxoro Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Farg'ona Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Jizzax Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Namangan Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Navoiy Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Qashqadaryo Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Qaraqalpog'iston Respublikasi"
      },
      {
        country: "Uzbekistan",
        name: "Samarqand Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Sirdaryo Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Surxondaryo Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Toshkent Shahri"
      },
      {
        country: "Uzbekistan",
        name: "Toshkent Viloyati"
      },
      {
        country: "Uzbekistan",
        name: "Xorazm Viloyati"
      },
      //Vanuatu
      {
        country: "Vanuatu",
        name: "Malampa"
      },
      {
        country: "Vanuatu",
        name: "Penama"
      },
      {
        country: "Vanuatu",
        name: "Sanma"
      },
      {
        country: "Vanuatu",
        name: "Shefa"
      },
      {
        country: "Vanuatu",
        name: "Tafea"
      },
      {
        country: "Vanuatu",
        name: "Torba"
      },
      //Venezuela

      {
        country: "Venezuela",
        name: "Amazonas"
      },
      {
        country: "Venezuela",
        name: "Anzoategui"
      },
      {
        country: "Venezuela",
        name: "Apure"
      },
      {
        country: "Venezuela",
        name: "Aragua"
      },
      {
        country: "Venezuela",
        name: "Barinas"
      },
      {
        country: "Venezuela",
        name: "Bolivar"
      },
      {
        country: "Venezuela",
        name: "Carabobo"
      },
      {
        country: "Venezuela",
        name: "Cojedes"
      },
      {
        country: "Venezuela",
        name: "Delta Amacuro"
      },
      {
        country: "Venezuela",
        name: "Dependencias Federales"
      },
      {
        country: "Venezuela",
        name: "Distrito Federal"
      },
      {
        country: "Venezuela",
        name: "Falcon"
      },
      {
        country: "Venezuela",
        name: "Guarico"
      },
      {
        country: "Venezuela",
        name: "Lara"
      },
      {
        country: "Venezuela",
        name: "Merida"
      },
      {
        country: "Venezuela",
        name: "Miranda"
      },
      {
        country: "Venezuela",
        name: "Monagas"
      },
      {
        country: "Venezuela",
        name: "Nueva Esparta"
      },
      {
        country: "Venezuela",
        name: "Portuguesa"
      },
      {
        country: "Venezuela",
        name: "Sucre"
      },
      {
        country: "Venezuela",
        name: "Tachira"
      },
      {
        country: "Venezuela",
        name: "Trujillo"
      },
      {
        country: "Venezuela",
        name: "Vargas"
      },
      {
        country: "Venezuela",
        name: "Yaracuy"
      },
      {
        country: "Venezuela",
        name: "Zulia"
      },

      //Vietnam
      {
        country: "Vietnam",
        name: "An Giang"
      },
      {
        country: "Vietnam",
        name: "Bac Giang"
      },
      {
        country: "Vietnam",
        name: "Bac Kan"
      },
      {
        country: "Vietnam",
        name: "Bac Lieu"
      },
      {
        country: "Vietnam",
        name: "Bac Ninh"
      },
      {
        country: "Vietnam",
        name: "Ba Ria-Vung Tau"
      },
      {
        country: "Vietnam",
        name: "Ben Tre"
      },
      {
        country: "Vietnam",
        name: "Binh Dinh"
      },
      {
        country: "Vietnam",
        name: "Binh Duong"
      },
      {
        country: "Vietnam",
        name: "Binh Phuoc"
      },
      {
        country: "Vietnam",
        name: "Binh Thuan"
      },
      {
        country: "Vietnam",
        name: "Ca Mau"
      },
      {
        country: "Vietnam",
        name: "Cao Bang"
      },
      {
        country: "Vietnam",
        name: "Dac Lak"
      },
      {
        country: "Vietnam",
        name: "Dac Nong"
      },
      {
        country: "Vietnam",
        name: "Dien Bien"
      },
      {
        country: "Vietnam",
        name: "Dong Nai"
      },
      {
        country: "Vietnam",
        name: "Dong Thap"
      },
      {
        country: "Vietnam",
        name: "Gia Lai"
      },
      {
        country: "Vietnam",
        name: "Ha Giang"
      },
      {
        country: "Vietnam",
        name: "Hai Duong"
      },
      {
        country: "Vietnam",
        name: "Ha Nam"
      },
      {
        country: "Vietnam",
        name: "Ha Tay"
      },
      {
        country: "Vietnam",
        name: "Ha Tinh"
      },
      {
        country: "Vietnam",
        name: "Hau Giang"
      },
      {
        country: "Vietnam",
        name: "Hoa Binh"
      },
      {
        country: "Vietnam",
        name: "Hung Yen"
      },
      {
        country: "Vietnam",
        name: "Khanh Hoa"
      },
      {
        country: "Vietnam",
        name: "Kien Giang"
      },
      {
        country: "Vietnam",
        name: "Kon Tum"
      },
      {
        country: "Vietnam",
        name: "Lai Chau"
      },
      {
        country: "Vietnam",
        name: "Lam Dong"
      },
      {
        country: "Vietnam",
        name: "Lang Son"
      },
      {
        country: "Vietnam",
        name: "Lao Cai"
      },
      {
        country: "Vietnam",
        name: "Long An"
      },
      {
        country: "Vietnam",
        name: "Nam Dinh"
      },
      {
        country: "Vietnam",
        name: "Nghe An"
      },
      {
        country: "Vietnam",
        name: "Ninh Binh"
      },
      {
        country: "Vietnam",
        name: "Ninh Thuan"
      },
      {
        country: "Vietnam",
        name: "Phu Tho"
      },
      {
        country: "Vietnam",
        name: "Phu Yen"
      },
      {
        country: "Vietnam",
        name: "Quang Binh"
      },
      {
        country: "Vietnam",
        name: "Quang Nam"
      },
      {
        country: "Vietnam",
        name: "Quang Ngai"
      },
      {
        country: "Vietnam",
        name: "Quang Ninh"
      },
      {
        country: "Vietnam",
        name: "Quang Tri"
      },
      {
        country: "Vietnam",
        name: "Soc Trang"
      },
      {
        country: "Vietnam",
        name: "Son La"
      },
      {
        country: "Vietnam",
        name: "Tay Ninh"
      },
      {
        country: "Vietnam",
        name: "Thai Binh"
      },
      {
        country: "Vietnam",
        name: "Thai Nguyen"
      },
      {
        country: "Vietnam",
        name: "Thanh Hoa"
      },
      {
        country: "Vietnam",
        name: "Thua Thien-Hue"
      },
      {
        country: "Vietnam",
        name: "Tien Giang"
      },
      {
        country: "Vietnam",
        name: "Tra Vinh"
      },
      {
        country: "Vietnam",
        name: "Tuyen Quang"
      },
      {
        country: "Vietnam",
        name: "Vinh Long"
      },
      {
        country: "Vietnam",
        name: "Vinh Phuc"
      },
      {
        country: "Vietnam",
        name: "Yen Bai"
      },
      {
        country: "Vietnam",
        name: "Can Tho"
      },
      {
        country: "Vietnam",
        name: "Da Nang"
      },
      {
        country: "Vietnam",
        name: "Hai Phong"
      },
      {
        country: "Vietnam",
        name: "Hanoi"
      },
      {
        country: "Vietnam",
        name: "Ho Chi Minh"
      },
      //Yemen
      {
        country: "Yemen",
        name: "Abyan"
      },
      {
        country: "Yemen",
        name: "'Adan"
      },
      {
        country: "Yemen",
        name: "Ad Dali'"
      },
      {
        country: "Yemen",
        name: "Al Bayda'"
      },
      {
        country: "Yemen",
        name: "Al Hudaydah"
      },
      {
        country: "Yemen",
        name: "Al Jawf"
      },
      {
        country: "Yemen",
        name: "Al Mahrah"
      },
      {
        country: "Yemen",
        name: "Al Mahwit"
      },
      {
        country: "Yemen",
        name: "'Amran"
      },
      {
        country: "Yemen",
        name: "Dhamar"
      },
      {
        country: "Yemen",
        name: "Hadramawt"
      },
      {
        country: "Yemen",
        name: "Hajjah"
      },
      {
        country: "Yemen",
        name: "Ibb"
      },
      {
        country: "Yemen",
        name: "Lahij"
      },
      {
        country: "Yemen",
        name: "Ma'rib"
      },
      {
        country: "Yemen",
        name: "Sa'dah"
      },
      {
        country: "Yemen",
        name: "San'a'"
      },
      {
        country: "Yemen",
        name: "Shabwah"
      },
      {
        country: "Yemen",
        name: "Ta'izz"
      },

      //Zambia

      {
        country: "Zambia",
        name: "Central"
      },
      {
        country: "Zambia",
        name: "Copperbelt"
      },
      {
        country: "Zambia",
        name: "Eastern"
      },
      {
        country: "Zambia",
        name: "Luapula"
      },
      {
        country: "Zambia",
        name: "Lusaka"
      },
      {
        country: "Zambia",
        name: "Northern"
      },
      {
        country: "Zambia",
        name: "North-Western"
      },
      {
        country: "Zambia",
        name: "Southern"
      },
      {
        country: "Zambia",
        name: "Western"
      },
      //Zimbabwe
      {
        country: "Zimbabwe",
        name: "Bulawayo"
      },
      {
        country: "Zimbabwe",
        name: "Harare"
      },
      {
        country: "Zimbabwe",
        name: "Manicaland"
      },
      {
        country: "Zimbabwe",
        name: "Mashonaland Central"
      },
      {
        country: "Zimbabwe",
        name: "Mashonaland East"
      },
      {
        country: "Zimbabwe",
        name: "Mashonaland West"
      },
      {
        country: "Zimbabwe",
        name: "Masvingo"
      },
      {
        country: "Zimbabwe",
        name: "Matabeleland North"
      },
      {
        country: "Zimbabwe",
        name: "Matabeleland South"
      },
      {
        country: "Zimbabwe",
        name: "Midlands"
      },
    ];
  }
}

