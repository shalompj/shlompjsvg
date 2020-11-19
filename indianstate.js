

var handles = ["SELECT STATE", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA",
    "KERALA", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ORISSA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU",
    "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", "WEST BENGAL"];

$(function() {
  var options = '';
  for (var i = 0; i < handles.length; i++) {
      options += '<option value="' + handles[i] + '">' + handles[i] + '</option>';
  }
  $('#listBox').html(options);
});
function selct_district($val)
{
    if($val=='SELECT STATE') {
   var options = '';
  $('#secondlist').html(options);
  }
 if($val=='ANDHRA PRADESH') {
   var andhra = ["ANANTAPUR","CHITTOOR","EAST GODAVARI","GUNTUR","KRISHNA","KURNOOL","PRAKASAM","SRIKAKULAM","SRIPOTTI SRI RAMULU NELLORE",
                                    "VISHAKHAPATNAM","VIZIANAGARAM","WEST GODAVARI","CUDAPPAH"];
   $(function() {
  var options = '';
  for (var i = 0; i < andhra.length; i++) {
      options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='ARUNACHAL PRADESH') {
    var ap = ["ANJAW","CHANGLANG","DIBANG VALLEY","EAST SIANG","EAST KAMENG","KURUNG KUMEY","LOHIT","LONGDING","LOWER DIBANG VALLEY","LOWER SUBANSIRI","PAPUM PARE",
                                        "TAWANG","TIRAP","UPPER SIANG","UPPER SUBANSIRI","WEST KAMENG","WEST SIANG"];
   $(function() {
  var options = '';
  for (var i = 0; i < ap.length; i++) {
      options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='ASSAM') {
    var assam = ["BAKSA","BARPETA","BONGAIGAON","CACHAR","CHIRANG","DARRANG","DHEMAJI","DIMA HASAO","DHUBRI","DIBRUGARH","GOALPARA","GOLAGHAT","HAILAKANDI","JORHAT",
                                     "KAMRUP","KAMRUP METROPOLITAN","KARBI ANGLONG","KARIMGANJ","KOKRAJHAR","LAKHIMPUR","MORIGAON","NAGAON","NALBARI","SIVASAGAR","SONITPUR","TINSUKIA","UDALGURI"];
   $(function() {
  var options = '';
  for (var i = 0; i < assam.length; i++) {
      options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='BIHAR') {
    var bihar = ["ARARIA","ARWAL","AURANGABAD","BANKA","BEGUSARAI","BHAGALPUR","BHOJPUR","BUXAR","DARBHANGA","EAST CHAMPARAN","GAYA","GOPALGANJ","JAMUI","JEHANABAD","KAIMUR",
                                        "KATIHAR","KHAGARIA","KISHANGANJ","LAKHISARAI","MADHEPURA","MADHUBANI","MUNGER","MUZAFFARPUR","NALANDA","NAWADA","PATNA","PURNIA","ROHTAS","SAHARSA",
                                        "SAMASTIPUR","SARAN","SHEIKHPURA","SHEOHAR","SITAMARHI","SIWAN","SUPAUL","VAISHALI","WEST CHAMPARAN"];
   $(function() {
  var options = '';
  for (var i = 0; i < bihar.length; i++) {
      options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='CHHATTISGARH') {
    var Chhattisgarh = ["BASTAR","BIJAPUR","BILASPUR","DANTEWADA","DHAMTARI","DURG","JASHPUR","JANJGIR-CHAMPA","KORBA","KORIYA","KANKER","KABIRDHAM (FORMERLY KAWARDHA)","MAHASAMUND",
                                            "NARAYANPUR","RAIGARH","RAJNANDGAON","RAIPUR","SURAJPUR","SURGUJA"];
   $(function() {
  var options = '';
  for (var i = 0; i < Chhattisgarh.length; i++) {
      options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='DADRA AND NAGAR HAVELI') {
    var dadra = ["AMAL","SILVASSA"];
   $(function() {
  var options = '';
  for (var i = 0; i < dadra.length; i++) {
      options += '<option value="' + dadra[i] + '">' + dadra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='DAMAN AND DIU') {
    var daman = ["DAMAN","DIU"];
   $(function() {
  var options = '';
  for (var i = 0; i < daman.length; i++) {
      options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='DELHI') {
    var delhi = ["DELHI","NEW DELHI","NORTH DELHI","NOIDA","PATPARGANJ","SONABARSA","TUGHLAKABAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < delhi.length; i++) {
      options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='GOA') {
    var goa = ["CHAPORA","DABOLIM","MADGAON","MARMUGAO (MARMAGAO)","PANAJI PORT","PANJIM","PELLET PLANT JETTY/SHIRODA","TALPONA","VASCO DA GAMA"];
   $(function() {
  var options = '';
  for (var i = 0; i < goa.length; i++) {
      options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='GUJARAT') {
    var gujarat = ["AHMEDABAD","AMRELI DISTRICT","ANAND","ARAVALLI","BANASKANTHA","BHARUCH","BHAVNAGAR","DAHOD","DANG","GANDHINAGAR","JAMNAGAR","JUNAGADH",
                                        "KUTCH","KHEDA","MEHSANA","NARMADA","NAVSARI","PATAN","PANCHMAHAL","PORBANDAR","RAJKOT","SABARKANTHA","SURENDRANAGAR","SURAT","TAPI","VADODARA","VALSAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < gujarat.length; i++) {
      options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='HARYANA') {
    var haryana = ["AMBALA","BHIWANI","FARIDABAD","FATEHABAD","GURGAON","HISSAR","JHAJJAR","JIND","KARNAL","KAITHAL",
                                            "KURUKSHETRA","MAHENDRAGARH","MEWAT","PALWAL","PANCHKULA","PANIPAT","REWARI","ROHTAK","SIRSA","SONIPAT","YAMUNA NAGAR"];
   $(function() {
  var options = '';
  for (var i = 0; i < haryana.length; i++) {
      options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='HIMACHAL PRADESH') {
    var himachal = ["BADDI","BAITALPUR","CHAMBA","DHARAMSALA","HAMIRPUR","KANGRA","KINNAUR","KULLU","LAHAUL & SPITI","MANDI","SIMLA","SIRMAUR","SOLAN","UNA"];
   $(function() {
  var options = '';
  for (var i = 0; i < himachal.length; i++) {
      options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='JAMMU AND KASHMIR') {
    var jammu = ["JAMMU","LEH","RAJOURI","SRINAGAR"];
   $(function() {
  var options = '';
  for (var i = 0; i < jammu.length; i++) {
      options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='JHARKHAND') {
    var jharkhand = ["BOKARO","CHATRA","DEOGHAR","DHANBAD","DUMKA","EAST SINGHBHUM","GARHWA","GIRIDIH","GODDA","GUMLA","HAZARIBAG","JAMTARA","KHUNTI","KODERMA","LATEHAR","LOHARDAGA","PAKUR","PALAMU",
                                            "RAMGARH","RANCHI","SAHIBGANJ","SERAIKELA KHARSAWAN","SIMDEGA","WEST SINGHBHUM"];
   $(function() {
  var options = '';
  for (var i = 0; i < jharkhand.length; i++) {
      options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='KARNATAKA') {
    var karnataka = ["BAGALKOT","BANGALORE","BANGALORE URBAN","BELGAUM","BELLARY","BIDAR","BIJAPUR","CHAMARAJNAGAR", "CHIKKAMAGALURU","CHIKKABALLAPUR",
                                           "CHITRADURGA","DAVANAGERE","DHARWAD","DAKSHINA KANNADA","GADAG","GULBARGA","HASSAN","HAVERI DISTRICT","KODAGU",
                                           "KOLAR","KOPPAL","MANDYA","MYSORE","RAICHUR","SHIMOGA","TUMKUR","UDUPI","UTTARA KANNADA","RAMANAGARA","YADGIR"];
   $(function() {
  var options = '';
  for (var i = 0; i < karnataka.length; i++) {
      options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='KERALA') {
    var kerala = ["ALAPPUZHA","ERNAKULAM","IDUKKI","KANNUR","KASARAGOD","KOLLAM","KOTTAYAM","KOZHIKODE","MALAPPURAM","PALAKKAD","PATHANAMTHITTA","THRISSUR","THIRUVANANTHAPURAM","WAYANAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < kerala.length; i++) {
      options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='MADHYA PRADESH') {
    var mp = ["ALIRAJPUR","ANUPPUR","ASHOKNAGAR","BALAGHAT","BARWANI","BETUL","BHILAI","BHIND","BHOPAL","BURHANPUR","CHHATARPUR","CHHINDWARA","DAMOH","DEWAS","DHAR","GUNA","GWALIOR","HOSHANGABAD",
                                    "INDORE","ITARSI","JABALPUR","KHAJURAHO","KHANDWA","KHARGONE","MALANPUR","MALANPURI (GWALIOR)","MANDLA","MANDSAUR","MORENA","NARSINGHPUR","NEEMUCH","PANNA","PITHAMPUR","RAIPUR","RAISEN","RATLAM",
                                    "REWA","SAGAR","SATNA","SEHORE","SEONI","SHAHDOL","SINGRAULI","UJJAIN"];
   $(function() {
  var options = '';
  for (var i = 0; i < mp.length; i++) {
      options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='MAHARASHTRA') {
    var maharashtra = ["AHMEDNAGAR","AKOLA","ALIBAG","AMARAVATI","ARNALA","AURANGABAD","AURANGABAD","BANDRA","BASSAIN","BELAPUR","BHIWANDI","BHUSAVAL","BORLIAI-MANDLA","CHANDRAPUR","DAHANU","DAULATABAD","DIGHI (PUNE)","DOMBIVALI","GOA","JAITAPUR","JALGAON",
                                             "JAWAHARLAL NEHRU (NHAVA SHEVA)","KALYAN","KARANJA","KELWA","KHOPOLI","KOLHAPUR","LONAVALE","MALEGAON","MALWAN","MANORI",
                                             "MIRA BHAYANDAR","MIRAJ","MUMBAI (EX BOMBAY)","MURAD","NAGAPUR","NAGPUR","NALASOPARA","NANDED","NANDGAON","NASIK","NAVI MUMBAI","NHAVE","OSMANABAD","PALGHAR",
                                             "PANVEL","PIMPRI","PUNE","RATNAGIRI","SHOLAPUR","SHRIRAMPUR","SHRIWARDHAN","TARAPUR","THANA","THANE","TROMBAY","VARSOVA","VENGURLA","VIRAR","WADA"];
   $(function() {
  var options = '';
  for (var i = 0; i < maharashtra.length; i++) {
      options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='MANIPUR') {
    var manipur = ["BISHNUPUR","CHURACHANDPUR","CHANDEL","IMPHAL EAST","SENAPATI","TAMENGLONG","THOUBAL","UKHRUL","IMPHAL WEST"];
   $(function() {
  var options = '';
  for (var i = 0; i < manipur.length; i++) {
      options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='MEGHALAYA') {
    var meghalaya = ["BAGHAMARA","BALET","BARSORA","BOLANGANJ","DALU","DAWKI","GHASUAPARA","MAHENDRAGANJ","MOREH","RYNGKU","SHELLA BAZAR","SHILLONG"];
   $(function() {
  var options = '';
  for (var i = 0; i < meghalaya.length; i++) {
      options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='MIZORAM') {
    var mizoram = ["AIZAWL","CHAMPHAI","KOLASIB","LAWNGTLAI","LUNGLEI","MAMIT","SAIHA","SERCHHIP"];
   $(function() {
  var options = '';
  for (var i = 0; i < mizoram.length; i++) {
      options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='NAGALAND') {
    var nagaland = ["DIMAPUR","KIPHIRE","KOHIMA","LONGLENG","MOKOKCHUNG","MON","PEREN","PHEK","TUENSANG","WOKHA","ZUNHEBOTO"];
   $(function() {
  var options = '';
  for (var i = 0; i < nagaland.length; i++) {
      options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='ORISSA') {
    var orissa = ["BAHABAL PUR","BHUBANESWAR","CHANDBALI","GOPALPUR","JEYPORE","PARADIP GARH","PURI","ROURKELA"];
   $(function() {
  var options = '';
  for (var i = 0; i < orissa.length; i++) {
      options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='PUDUCHERRY') {
    var puducherry = ["KARAIKAL","MAHE","PONDICHERRY","YANAM"];
   $(function() {
  var options = '';
  for (var i = 0; i < puducherry.length; i++) {
      options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='PUNJAB') {
    var punjab = ["AMRITSAR","BARNALA","BATHINDA","FIROZPUR","FARIDKOT","FATEHGARH SAHIB","FAZILKA","GURDASPUR","HOSHIARPUR","JALANDHAR","KAPURTHALA","LUDHIANA","MANSA","MOGA","SRI MUKTSAR SAHIB","PATHANKOT",
                                        "PATIALA","RUPNAGAR","AJITGARH (MOHALI)","SANGRUR","SHAHID BHAGAT SINGH NAGAR","TARN TARAN"];
   $(function() {
  var options = '';
  for (var i = 0; i < punjab.length; i++) {
      options += '<option value="' + punjab[i] + '">' + napunjabgaland[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Rajasthan') {
    var rajasthan = ["Ajmer","Banswara","Barmer","Barmer Rail Station","Basni","Beawar","Bharatpur","Bhilwara","Bhiwadi","Bikaner","Bongaigaon","Boranada, Jodhpur","Chittaurgarh","Fazilka","Ganganagar","Jaipur","Jaipur-Kanakpura",
                                       "Jaipur-Sitapura","Jaisalmer","Jodhpur","Jodhpur-Bhagat Ki Kothi","Jodhpur-Thar","Kardhan","Kota","Munabao Rail Station","Nagaur","Rajsamand","Sawaimadhopur","Shahdol","Shimoga","Tonk","Udaipur"];
   $(function() {
  var options = '';
  for (var i = 0; i < rajasthan.length; i++) {
      options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Sikkim') {
    var sikkim = ["Chamurci","Gangtok"];
   $(function() {
  var options = '';
  for (var i = 0; i < sikkim.length; i++) {
      options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Tamil Nadu') {
    var tn = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mandapam","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Thiruvallur","Tirupur",
                                   "Tiruchirapalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvannamalai","Vellore","Villupuram","Viruthunagar"];
   $(function() {
  var options = '';
  for (var i = 0; i < tn.length; i++) {
      options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Telangana') {
    var telangana = ["Adilabad","Hyderabad","Karimnagar","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ranga Reddy","Warangal"];
   $(function() {
  var options = '';
  for (var i = 0; i < telangana.length; i++) {
      options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Tripura') {
    var tripura = ["Agartala","Dhalaighat","Kailashahar","Kamalpur","Kanchanpur","Kel Sahar Subdivision","Khowai","Khowaighat","Mahurighat","Old Raghna Bazar","Sabroom","Srimantapur"];
   $(function() {
  var options = '';
  for (var i = 0; i < tripura.length; i++) {
      options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Uttar Pradesh') {
    var up = ["Agra","Allahabad","Auraiya","Banbasa","Bareilly","Berhni","Bhadohi","Dadri","Dharchula","Gandhar","Gauriphanta","Ghaziabad","Gorakhpur","Gunji",
                                    "Jarwa","Jhulaghat (Pithoragarh)","Kanpur","Katarniyaghat","Khunwa","Loni","Lucknow","Meerut","Moradabad","Muzaffarnagar","Nepalgunj Road","Pakwara (Moradabad)",
                                    "Pantnagar","Saharanpur","Sonauli","Surajpur","Tikonia","Varanasi"];
   $(function() {
  var options = '';
  for (var i = 0; i < up.length; i++) {
      options += '<option value="' + up[i] + '">' + up[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Uttarakhand') {
    var uttarakhand = ["Almora","Badrinath","Bangla","Barkot","Bazpur","Chamoli","Chopra","Dehra Dun","Dwarahat","Garhwal","Haldwani","Hardwar","Haridwar","Jamal","Jwalapur","Kalsi","Kashipur","Mall",
                                           "Mussoorie","Nahar","Naini","Pantnagar","Pauri","Pithoragarh","Rameshwar","Rishikesh","Rohni","Roorkee","Sama","Saur"];
   $(function() {
  var options = '';
  for (var i = 0; i < uttarakhand.length; i++) {
      options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='West Bengal') {
    var wb = ["Alipurduar","Bankura","Bardhaman","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah",
                                    "Jalpaiguri","Kolkata","Maldah","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
   $(function() {
  var options = '';
  for (var i = 0; i < wb.length; i++) {
      options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
}
