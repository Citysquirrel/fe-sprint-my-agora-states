// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

const submitButton = document.querySelector('.form');

submitButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputName = document.querySelector('input#name');
  const inputTitle = document.querySelector('input#title');
  const textareaQuestion = document.querySelector('textarea#story');

  const datum = {
    id: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    title: inputTitle.value,
    url: 'dummy',
    author: inputName.value,
    answer: {
      id: 'DC_kwDOHOApLM4AKg6M',
      createdAt: '2022-05-16T02:09:52Z',
      url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236',
      author: 'Kingsenal',
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dubipy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dubipy">@dubipy</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 노드 환경이 구성되어 있지 않기 때문에 발생되는 문제로 확인됩니다.</p>\n<p dir="auto"><code class="notranslate">brew unlink node &amp;&amp; brew link node</code></p>\n<p dir="auto">노드를 연결해 보시고 안된다면</p>\n<p dir="auto"><code class="notranslate">brew link --overwrite node</code></p>\n<p dir="auto">이 명령어를 그 다음에도 안된다면 접근권한 문제일 가능성이 큽니다.</p>\n<p dir="auto"><code class="notranslate">$ sudo chmod 776 /usr/local/lib</code> 접근 권한 변경 후<br>\n<code class="notranslate">$ brew link --overwrite node</code> 다시 연결을 해보세요 !</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문을 남겨주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: 'https://avatars.githubusercontent.com/u/79903256?s=64&v=4',
    },
    bodyHTML: textareaQuestion.value,
    avatarUrl:
      'https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4',
  };

  agoraStatesDiscussions.unshift(datum);
  console.log(agoraStatesDiscussions);

  ul.prepend(convertToDiscussion(datum));
});

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement('li'); // li 요소 생성
  li.className = 'discussion__container'; // 클래스 이름 지정

  const avatarWrapper = document.createElement('div');
  avatarWrapper.className = 'discussion__avatar--wrapper';
  const discussionContent = document.createElement('div');
  discussionContent.className = 'discussion__content';
  const discussionAnswered = document.createElement('div');
  discussionAnswered.className = 'discussion__answered';

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  // answer, author, avatarUrl, bodyHTML, createdAt, id, title, url
  avatarWrapper.innerHTML = `<img class="discussion__avatar--image" src=${obj.avatarUrl} alt=${obj.avaterUrl} />`;
  discussionContent.innerHTML = `<h2 class="discussion__title"><a href=${obj.url}>${obj.title}</a></h2>
  <div class="discussion__information">${obj.author} / ${obj.createdAt}</div>`;
  discussionAnswered.innerHTML = obj.answer ? `<p>☑</p>` : `<p>☐</p>`;

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector('ul.discussions__container');
render(ul);
