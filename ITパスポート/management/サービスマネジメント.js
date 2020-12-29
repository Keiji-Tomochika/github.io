//問題
const quiz = [
  {
    question:'大規模な自然災害を想定したBCPを作成する目的として、最も適切なものはどれか',
    selects:[
     '経営資源が縮減された状況における重要事項の継続',
     '建物や設備などの資産の保全',
     '被災地における連絡手段の確保',
     '労働災害の原因となるリスクの発生確率とその影響の低減'
    ],
    answer:'経営資源が縮減された状況における重要事項の継続'
  },{
    question:'コーポレートブランドを高める目的として、最も適切なものはどれか',
    selects:[
     '企業が有する独自のスキルや技術に基づいて、競合他社では提供が不可能な価値を顧客にもたらすことである',
     '企業名などから製品やサービスの品質イメージを連想させることで競争有意性をもたらすことである',
     '経営者や企業が社会に対して、企業の普遍的な価値観、企業活動の基本的な考え方を公表して、ステークホルダーの共感を得ることである',
     '流通業者の主導権のもとで製造業者などと連携して開発し、生産される独自ブランドの商品を低価格で販売することである'
    ],
    answer:'企業名などから製品やサービスの品質イメージを連想させることで競争有意性をもたらすことである',
  },{
    question: '性別・年齢・国籍・経験などが個人ごとに異なるような多様性を示す言葉として適切なものはどれか',
    selects: [
     'グラスシーリング',
     'ダイバーシティ',
     'ホワイトカラーエグゼンプション',
     'ワークライフバランス'
    ],
    answer:'ダイバーシティ'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//ボタン読み込み
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//問題文
const selectQuiz = () => {
  document.getElementById('question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].selects[buttonIndex];
   buttonIndex++;
  };
};
selectQuiz();


//正誤判定
const clickCheck = (e) => {
  if(quiz[quizIndex].answer === e.target.textContent){
    window.alert('正解');
    score++;
    } else {
    window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength){
     selectQuiz();
    } else {
     window.alert('終了あなたの結果は' + score + '/' + quizLength + 'です！');
    }
};
let checkIndex = 0;
while(checkIndex < buttonLength){
  $button[checkIndex].addEventListener('click',(e) => {
    clickCheck(e);
  });
 checkIndex++;
};

