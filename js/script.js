//値をグラフに表示させる
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
 
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
 
                    var dataString = dataset.data[index].toString();
         
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
 
                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
   
                });
            }
        });
    }
});
 
 
//=========== 円グラフ（ドーナッツ型） ============//
$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {
 
 
var ctx=document.getElementById("chart02");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'doughnut',//グラフのタイプ
data:{//グラフのデータ
  labels:["20代","30代","40代"],//データの名前
  datasets:[{
      label:"職種別比率",//グラフのタイトル
      backgroundColor:["#faa14b", "#3a4088", "#ffef40"],//グラフの背景色
      data:["51","34","15"]//データ
    }]
},
 
options:{//グラフのオプション
  maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
  cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
  legend:{
    display:true//グラフの説明を表示
  },
  tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
    callbacks:{
        label: function (tooltipItem, data) {
      return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
    }
    },   
  },
  title:{//上部タイトル表示の設定
    display: true,
    fontSize:10,
    text: '単位：%'
  },
}
});
 
}
});
 
 
//値をグラフに表示させる
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
 
                    var dataString = dataset.data[index].toString();
         
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
 
                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
   
                });
            }
        });
    }
});
 
//=========== 棒グラフ（縦） ============//
 
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {
 
var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'bar',//グラフのタイプ
data:{//グラフのデータ
  labels:["2020年","2021年","2022年",],//データの名前
  datasets:[{
      backgroundColor:"#faa14b",//グラフの色
      data:["58","73","95",]//横列に並ぶデータ
    }]
},
options:{//グラフのオプション
  legend:{
    display: false//グラフの説明を非表示
  },
  tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
    callbacks:{
        label: function(tooltipItems, data) {
            if(tooltipItems.yLabel == "0"){
                return "";
            }
            return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "人";//人を最後につける
        }
    }
  },
title:{//上部タイトル表示の設定
    display: true,
    fontSize:10,
    text: '単位：人'
  },
scales:{
    yAxes:[//グラフ縦軸（Y軸）設定
      {
        ticks:{
          beginAtZero:true,//0からスタート
          suggestedMax: 100,//最大が100
          suggestedMin: 0,//最小が0
          stepSize: 10,//10づつ数値が刻まれる
          callback: function(value){
            return  value +  '人'//数字＋人で表示        
        }
      }
    }
  ],
    xAxes:[//グラフ縦軸（X軸）設定
      {
        barPercentage:0.5,//バーの太さ
      }
    ]
  }
}
});
 
}
});