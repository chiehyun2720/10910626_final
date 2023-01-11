var addressJson = [
  { city: "金門縣", site_id: "金門縣金城鎮", road: "吳厝" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "夏墅" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "大古崗" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "官裡" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "官路邊" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "小古崗" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "小西門" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "山前" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "珠浦東路" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "珠浦西路" },
  { city: "金門縣", site_id: "金門縣金城鎮", road: "環島北路" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "信義街" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "建東農場" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "復興街" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "復興路" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "德明路" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "忠孝新邨" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "成功路" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "文化路" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "斗門" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "新前墩" },
  { city: "金門縣", site_id: "金門縣金沙鎮", road: "新興" },
  { city: "宜蘭縣", site_id: "宜蘭縣宜蘭市", road: "建蘭北路" },
  { city: "宜蘭縣", site_id: "宜蘭縣宜蘭市", road: "建蘭南路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "貴人路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "貴林一路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "貴林二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "貴林路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "農義路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "鎮安路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "長埤路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "長春路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集安路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶一路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶七路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶三路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶五路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶八路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集慶六路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集祥路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集義路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集賢一路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "集賢二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "雙和一路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "雙和三路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "雙和中路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "雙和二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "雙義路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "電力路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "頂楓林三路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "頂楓林二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣三星鄉", road: "龍泉路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "三星路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "崙埤" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "智腦路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "東壘路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "松羅南巷" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "林家" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "林森" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "梵梵" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "樂水路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "泰雅一路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "泰雅路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "玉蘭" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "碼崙路" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "長嶺" },
  { city: "宜蘭縣", site_id: "宜蘭縣大同鄉", road: "鹿場路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "中央路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "中正路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "信義路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "南溪路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "博愛路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "和平路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "大通路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "新寮二路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "新溪路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "東岳路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "橫山路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "永樂路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "碧候路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "碧海路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "蘇花路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "金岳路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "金洋路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "高峯路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "高峰路" },
  { city: "宜蘭縣", site_id: "宜蘭縣南澳鄉", road: "鹿皮路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "三民路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "中和街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "中和路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "中央路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "中山一街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "中山三街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "莊敬北路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "莊敬南路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "華興一街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "華興三街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "華興二街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "華興五街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "華興街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "蓮花路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "褔興路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "西濱路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "逸境新村" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "長園一街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "長園三街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "長園二街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "長青路" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "隘口一街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "隘口七街" },
  { city: "新竹縣", site_id: "新竹縣竹北市", road: "隘口三街" },
];

$("#citySelect").change(function () {
  var cityVal = $(this).val();
  if (cityVal == "city1") {
    var whole = "";
    for (i = 1; i < addressJson.length; i++) {
      if (addressJson[i].city == "新竹縣") {
        whole = whole + "<option>" + addressJson[i].road + "</option>";
        $("#streetSelect").html(whole);
      }
    }
  }

  if (cityVal == "city2") {
    var whole2 = "";
    for (i = 1; i < addressJson.length; i++) {
      if (addressJson[i].city == "宜蘭縣") {
        whole2 = whole2 + "<option>" + addressJson[i].road + "</option>";
        $("#streetSelect").html(whole2);
      }
    }
  }
  if (cityVal == "city3") {
    var whole3 = "";
    for (i = 1; i < addressJson.length; i++) {
      if (addressJson[i].city == "金門縣") {
        whole3 = whole3 + "<option>" + addressJson[i].road + "</option>";
        $("#streetSelect").html(whole3);
      }
    }
  }
});
