

var handles2 = ["SELECT STATE", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHHATTISGARH", "DADRA AND NAGAR HAVELI", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA",
    "KERALA", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ORISSA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU",
    "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", "WEST BENGAL"];

$(function() {
  var options = '';
  for (var i = 0; i < handles2.length; i++) {
      options += '<option value="' + handles2[i] + '">' + handles2[i] + '</option>';
  }
  $('#listBox2').html(options);
});
function selct_district2($val)
{
    if($val=='SELECT STATE') {
   var options = '';
  $('#secondlist2').html(options);
  }
 if($val=='ANDHRA PRADESH') {
   var andhra = ["SELECT DISTRICT","ANANTAPUR","CHITTOOR","EAST GODAVARI","GUNTUR","KRISHNA","KURNOOL","PRAKASAM","SRIKAKULAM","SRIPOTTI SRI RAMULU NELLORE",
                                    "VISHAKHAPATNAM","VIZIANAGARAM","WEST GODAVARI","CUDAPPAH"];
   $(function() {
  var options = '';
  for (var i = 0; i < andhra.length; i++) {
      options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='ARUNACHAL PRADESH') {
    var ap = ["SELECT DISTRICT","ANJAW","CHANGLANG","DIBANG VALLEY","EAST SIANG","EAST KAMENG","KURUNG KUMEY","LOHIT","LONGDING","LOWER DIBANG VALLEY","LOWER SUBANSIRI","PAPUM PARE",
                                        "TAWANG","TIRAP","UPPER SIANG","UPPER SUBANSIRI","WEST KAMENG","WEST SIANG"];
   $(function() {
  var options = '';
  for (var i = 0; i < ap.length; i++) {
      options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='ASSAM') {
    var assam = ["SELECT DISTRICT","BAKSA","BARPETA","BONGAIGAON","CACHAR","CHIRANG","DARRANG","DHEMAJI","DIMA HASAO","DHUBRI","DIBRUGARH","GOALPARA","GOLAGHAT","HAILAKANDI","JORHAT",
                                     "KAMRUP","KAMRUP METROPOLITAN","KARBI ANGLONG","KARIMGANJ","KOKRAJHAR","LAKHIMPUR","MORIGAON","NAGAON","NALBARI","SIVASAGAR","SONITPUR","TINSUKIA","UDALGURI"];
   $(function() {
  var options = '';
  for (var i = 0; i < assam.length; i++) {
      options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='BIHAR') {
    var bihar = ["SELECT DISTRICT","ARARIA","ARWAL","AURANGABAD","BANKA","BEGUSARAI","BHAGALPUR","BHOJPUR","BUXAR","DARBHANGA","EAST CHAMPARAN","GAYA","GOPALGANJ","JAMUI","JEHANABAD","KAIMUR",
                                        "KATIHAR","KHAGARIA","KISHANGANJ","LAKHISARAI","MADHEPURA","MADHUBANI","MUNGER","MUZAFFARPUR","NALANDA","NAWADA","PATNA","PURNIA","ROHTAS","SAHARSA",
                                        "SAMASTIPUR","SARAN","SHEIKHPURA","SHEOHAR","SITAMARHI","SIWAN","SUPAUL","VAISHALI","WEST CHAMPARAN"];
   $(function() {
  var options = '';
  for (var i = 0; i < bihar.length; i++) {
      options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='CHHATTISGARH') {
    var Chhattisgarh = ["SELECT DISTRICT","BASTAR","BIJAPUR","BILASPUR","DANTEWADA","DHAMTARI","DURG","JASHPUR","JANJGIR-CHAMPA","KORBA","KORIYA","KANKER","KABIRDHAM (FORMERLY KAWARDHA)","MAHASAMUND",
                                            "NARAYANPUR","RAIGARH","RAJNANDGAON","RAIPUR","SURAJPUR","SURGUJA"];
   $(function() {
  var options = '';
  for (var i = 0; i < Chhattisgarh.length; i++) {
      options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='DADRA AND NAGAR HAVELI') {
    var dadra = ["SELECT DISTRICT","AMAL","SILVASSA"];
   $(function() {
  var options = '';
  for (var i = 0; i < dadra.length; i++) {
      options += '<option value="' + dadra[i] + '">' + dadra[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='DAMAN AND DIU') {
    var daman = ["SELECT DISTRICT","DAMAN","DIU"];
   $(function() {
  var options = '';
  for (var i = 0; i < daman.length; i++) {
      options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='DELHI') {
    var delhi = ["SELECT DISTRICT","DELHI","NEW DELHI","NORTH DELHI","NOIDA","PATPARGANJ","SONABARSA","TUGHLAKABAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < delhi.length; i++) {
      options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='GOA') {
    var goa = ["SELECT DISTRICT","CHAPORA","DABOLIM","MADGAON","MARMUGAO (MARMAGAO)","PANAJI PORT","PANJIM","PELLET PLANT JETTY/SHIRODA","TALPONA","VASCO DA GAMA"];
   $(function() {
  var options = '';
  for (var i = 0; i < goa.length; i++) {
      options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='GUJARAT') {
    var gujarat = ["SELECT DISTRICT","AHMEDABAD","AMRELI DISTRICT","ANAND","ARAVALLI","BANASKANTHA","BHARUCH","BHAVNAGAR","DAHOD","DANG","GANDHINAGAR","JAMNAGAR","JUNAGADH",
                                        "KUTCH","KHEDA","MEHSANA","NARMADA","NAVSARI","PATAN","PANCHMAHAL","PORBANDAR","RAJKOT","SABARKANTHA","SURENDRANAGAR","SURAT","TAPI","VADODARA","VALSAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < gujarat.length; i++) {
      options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='HARYANA') {
    var haryana = ["SELECT DISTRICT","AMBALA","BHIWANI","FARIDABAD","FATEHABAD","GURGAON","HISSAR","JHAJJAR","JIND","KARNAL","KAITHAL",
                                            "KURUKSHETRA","MAHENDRAGARH","MEWAT","PALWAL","PANCHKULA","PANIPAT","REWARI","ROHTAK","SIRSA","SONIPAT","YAMUNA NAGAR"];
   $(function() {
  var options = '';
  for (var i = 0; i < haryana.length; i++) {
      options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='HIMACHAL PRADESH') {
    var himachal = ["SELECT DISTRICT","BADDI","BAITALPUR","CHAMBA","DHARAMSALA","HAMIRPUR","KANGRA","KINNAUR","KULLU","LAHAUL & SPITI","MANDI","SIMLA","SIRMAUR","SOLAN","UNA"];
   $(function() {
  var options = '';
  for (var i = 0; i < himachal.length; i++) {
      options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='JAMMU AND KASHMIR') {
    var jammu = ["SELECT DISTRICT","JAMMU","LEH","RAJOURI","SRINAGAR"];
   $(function() {
  var options = '';
  for (var i = 0; i < jammu.length; i++) {
      options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='JHARKHAND') {
    var jharkhand = ["SELECT DISTRICT","BOKARO","CHATRA","DEOGHAR","DHANBAD","DUMKA","EAST SINGHBHUM","GARHWA","GIRIDIH","GODDA","GUMLA","HAZARIBAG","JAMTARA","KHUNTI","KODERMA","LATEHAR","LOHARDAGA","PAKUR","PALAMU",
                                            "RAMGARH","RANCHI","SAHIBGANJ","SERAIKELA KHARSAWAN","SIMDEGA","WEST SINGHBHUM"];
   $(function() {
  var options = '';
  for (var i = 0; i < jharkhand.length; i++) {
      options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='KARNATAKA') {
    var karnataka = ["SELECT DISTRICT","BAGALKOT","BANGALORE","BANGALORE URBAN","BELGAUM","BELLARY","BIDAR","BIJAPUR","CHAMARAJNAGAR", "CHIKKAMAGALURU","CHIKKABALLAPUR",
                                           "CHITRADURGA","DAVANAGERE","DHARWAD","DAKSHINA KANNADA","GADAG","GULBARGA","HASSAN","HAVERI DISTRICT","KODAGU",
                                           "KOLAR","KOPPAL","MANDYA","MYSORE","RAICHUR","SHIMOGA","TUMKUR","UDUPI","UTTARA KANNADA","RAMANAGARA","YADGIR"];
   $(function() {
  var options = '';
  for (var i = 0; i < karnataka.length; i++) {
      options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='KERALA') {
    var kerala = ["SELECT DISTRICT","ALAPPUZHA","ERNAKULAM","IDUKKI","KANNUR","KASARAGOD","KOLLAM","KOTTAYAM","KOZHIKODE","MALAPPURAM","PALAKKAD","PATHANAMTHITTA","THRISSUR","THIRUVANANTHAPURAM","WAYANAD"];
   $(function() {
  var options = '';
  for (var i = 0; i < kerala.length; i++) {
      options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='MADHYA PRADESH') {
    var mp = ["SELECT DISTRICT","ALIRAJPUR","ANUPPUR","ASHOKNAGAR","BALAGHAT","BARWANI","BETUL","BHILAI","BHIND","BHOPAL","BURHANPUR","CHHATARPUR","CHHINDWARA","DAMOH","DEWAS","DHAR","GUNA","GWALIOR","HOSHANGABAD",
                                    "INDORE","ITARSI","JABALPUR","KHAJURAHO","KHANDWA","KHARGONE","MALANPUR","MALANPURI (GWALIOR)","MANDLA","MANDSAUR","MORENA","NARSINGHPUR","NEEMUCH","PANNA","PITHAMPUR","RAIPUR","RAISEN","RATLAM",
                                    "REWA","SAGAR","SATNA","SEHORE","SEONI","SHAHDOL","SINGRAULI","UJJAIN"];
   $(function() {
  var options = '';
  for (var i = 0; i < mp.length; i++) {
      options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='MAHARASHTRA') {
    var maharashtra = ["SELECT DISTRICT","AHMEDNAGAR","AKOLA","ALIBAG","AMARAVATI","ARNALA","AURANGABAD","AURANGABAD","BANDRA","BASSAIN","BELAPUR","BHIWANDI","BHUSAVAL","BORLIAI-MANDLA","CHANDRAPUR","DAHANU","DAULATABAD","DIGHI (PUNE)","DOMBIVALI","GOA","JAITAPUR","JALGAON",
                                             "JAWAHARLAL NEHRU (NHAVA SHEVA)","KALYAN","KARANJA","KELWA","KHOPOLI","KOLHAPUR","LONAVALE","MALEGAON","MALWAN","MANORI",
                                             "MIRA BHAYANDAR","MIRAJ","MUMBAI (EX BOMBAY)","MURAD","NAGAPUR","NAGPUR","NALASOPARA","NANDED","NANDGAON","NASIK","NAVI MUMBAI","NHAVE","OSMANABAD","PALGHAR",
                                             "PANVEL","PIMPRI","PUNE","RATNAGIRI","SHOLAPUR","SHRIRAMPUR","SHRIWARDHAN","TARAPUR","THANA","THANE","TROMBAY","VARSOVA","VENGURLA","VIRAR","WADA"];
   $(function() {
  var options = '';
  for (var i = 0; i < maharashtra.length; i++) {
      options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
   if ($val=='MANIPUR') {
    var manipur = ["SELECT DISTRICT","BISHNUPUR","CHURACHANDPUR","CHANDEL","IMPHAL EAST","SENAPATI","TAMENGLONG","THOUBAL","UKHRUL","IMPHAL WEST"];
   $(function() {
  var options = '';
  for (var i = 0; i < manipur.length; i++) {
      options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
   if ($val=='MEGHALAYA') {
    var meghalaya = ["SELECT DISTRICT","BAGHAMARA","BALET","BARSORA","BOLANGANJ","DALU","DAWKI","GHASUAPARA","MAHENDRAGANJ","MOREH","RYNGKU","SHELLA BAZAR","SHILLONG"];
   $(function() {
  var options = '';
  for (var i = 0; i < meghalaya.length; i++) {
      options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
   if ($val=='MIZORAM') {
    var mizoram = ["SELECT DISTRICT","AIZAWL","CHAMPHAI","KOLASIB","LAWNGTLAI","LUNGLEI","MAMIT","SAIHA","SERCHHIP"];
   $(function() {
  var options = '';
  for (var i = 0; i < mizoram.length; i++) {
      options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
   if ($val=='NAGALAND') {
    var nagaland = ["SELECT DISTRICT","DIMAPUR","KIPHIRE","KOHIMA","LONGLENG","MOKOKCHUNG","MON","PEREN","PHEK","TUENSANG","WOKHA","ZUNHEBOTO"];
   $(function() {
  var options = '';
  for (var i = 0; i < nagaland.length; i++) {
      options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='ORISSA') {
    var orissa = ["SELECT DISTRICT","BAHABAL PUR","BHUBANESWAR","CHANDBALI","GOPALPUR","JEYPORE","PARADIP GARH","PURI","ROURKELA"];
   $(function() {
  var options = '';
  for (var i = 0; i < orissa.length; i++) {
      options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='PUDUCHERRY') {
    var puducherry = ["SELECT DISTRICT","KARAIKAL","MAHE","PONDICHERRY","YANAM"];
   $(function() {
  var options = '';
  for (var i = 0; i < puducherry.length; i++) {
      options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='PUNJAB') {
    var punjab = ["SELECT DISTRICT","AMRITSAR","BARNALA","BATHINDA","FIROZPUR","FARIDKOT","FATEHGARH SAHIB","FAZILKA","GURDASPUR","HOSHIARPUR","JALANDHAR","KAPURTHALA","LUDHIANA","MANSA","MOGA","SRI MUKTSAR SAHIB","PATHANKOT",
                                        "PATIALA","RUPNAGAR","AJITGARH (MOHALI)","SANGRUR","SHAHID BHAGAT SINGH NAGAR","TARN TARAN"];
   $(function() {
  var options = '';
  for (var i = 0; i < punjab.length; i++) {
      options += '<option value="' + punjab[i] + '">' + napunjabgaland[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='RAJASTHAN') {
    var rajasthan = ["SELECT DISTRICT","AJMER","BANSWARA","BARMER","BARMER RAIL STATION","BASNI","BEAWAR","BHARATPUR","BHILWARA","BHIWADI","BIKANER","BONGAIGAON","BORANADA, JODHPUR","CHITTAURGARH","FAZILKA","GANGANAGAR","JAIPUR","JAIPUR-KANAKPURA",
                                       "JAIPUR-SITAPURA","JAISALMER","JODHPUR","JODHPUR-BHAGAT KI KOTHI","JODHPUR-THAR","KARDHAN","KOTA","MUNABAO RAIL STATION","NAGAUR","RAJSAMAND","SAWAIMADHOPUR","SHAHDOL","SHIMOGA","TONK","UDAIPUR"];
   $(function() {
  var options = '';
  for (var i = 0; i < rajasthan.length; i++) {
      options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  if ($val=='SIKKIM') {
    var sikkim = ["SELECT DISTRICT","CHAMURCI","GANGTOK"];
   $(function() {
  var options = '';
  for (var i = 0; i < sikkim.length; i++) {
      options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='TAMIL NADU') {
    var tn = ["SELECT DISTRICT","ARIYALUR","CHENNAI","COIMBATORE","CUDDALORE","DHARMAPURI","DINDIGUL","ERODE","KANCHIPURAM","KANYAKUMARI","KARUR","KRISHNAGIRI","MADURAI","MANDAPAM","NAGAPATTINAM","NILGIRIS","NAMAKKAL","PERAMBALUR","PUDUKKOTTAI","RAMANATHAPURAM","SALEM","SIVAGANGA","THANJAVUR","THIRUVALLUR","TIRUPUR",
                                   "TIRUCHIRAPALLI","THENI","TIRUNELVELI","THANJAVUR","THOOTHUKUDI","TIRUVALLUR","TIRUVANNAMALAI","VELLORE","VILLUPURAM","VIRUTHUNAGAR"];
   $(function() {
  var options = '';
  for (var i = 0; i < tn.length; i++) {
      options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='TELANGANA') {
    var telangana = ["SELECT DISTRICT","ADILABAD","HYDERABAD","KARIMNAGAR","MAHBUBNAGAR","MEDAK","NALGONDA","NIZAMABAD","RANGA REDDY","WARANGAL"];
   $(function() {
  var options = '';
  for (var i = 0; i < telangana.length; i++) {
      options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='TRIPURA') {
    var tripura = ["SELECT DISTRICT","AGARTALA","DHALAIGHAT","KAILASHAHAR","KAMALPUR","KANCHANPUR","KEL SAHAR SUBDIVISION","KHOWAI","KHOWAIGHAT","MAHURIGHAT","OLD RAGHNA BAZAR","SABROOM","SRIMANTAPUR"];
   $(function() {
  var options = '';
  for (var i = 0; i < tripura.length; i++) {
      options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='UTTAR PRADESH') {
    var up = ["SELECT DISTRICT","AGRA","ALLAHABAD","AURAIYA","BANBASA","BAREILLY","BERHNI","BHADOHI","DADRI","DHARCHULA","GANDHAR","GAURIPHANTA","GHAZIABAD","GORAKHPUR","GUNJI",
                                    "JARWA","JHULAGHAT (PITHORAGARH)","KANPUR","KATARNIYAGHAT","KHUNWA","LONI","LUCKNOW","MEERUT","MORADABAD","MUZAFFARNAGAR","NEPALGUNJ ROAD","PAKWARA (MORADABAD)",
                                    "PANTNAGAR","SAHARANPUR","SONAULI","SURAJPUR","TIKONIA","VARANASI"];
   $(function() {
  var options = '';
  for (var i = 0; i < up.length; i++) {
      options += '<option value="' + up[i] + '">' + up[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='UTTARAKHAND') {
    var uttarakhand = ["SELECT DISTRICT","ALMORA","BADRINATH","BANGLA","BARKOT","BAZPUR","CHAMOLI","CHOPRA","DEHRA DUN","DWARAHAT","GARHWAL","HALDWANI","HARDWAR","HARIDWAR","JAMAL","JWALAPUR","KALSI","KASHIPUR","MALL",
                                           "MUSSOORIE","NAHAR","NAINI","PANTNAGAR","PAURI","PITHORAGARH","RAMESHWAR","RISHIKESH","ROHNI","ROORKEE","SAMA","SAUR"];
   $(function() {
  var options = '';
  for (var i = 0; i < uttarakhand.length; i++) {
      options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
  
  if ($val=='WEST BENGAL') {
    var wb = ["SELECT DISTRICT","ALIPURDUAR","BANKURA","BARDHAMAN","BIRBHUM","COOCH BEHAR","DAKSHIN DINAJPUR","DARJEELING","HOOGHLY","HOWRAH",
                                    "JALPAIGURI","KOLKATA","MALDAH","MURSHIDABAD","NADIA","NORTH 24 PARGANAS","PASCHIM MEDINIPUR","PURBA MEDINIPUR","PURULIA","SOUTH 24 PARGANAS","UTTAR DINAJPUR"];
   $(function() {
  var options = '';
  for (var i = 0; i < wb.length; i++) {
      options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
  }
  $('#secondlist2').html(options);
  });
  }
  
}
