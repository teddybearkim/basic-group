
// 가상의 API로부터 날씨 데이터 가져오기
function getWeatherData() {

  return {
    temperature: 25,
    condition: 'Sunny',
    location: 'Seoul',
  };
}


function updateWeatherWidget() {
  const weatherWidget = document.getElementById('weather-widget');
  const weatherData = getWeatherData();

  
  weatherWidget.innerHTML = `
    <h2>${weatherData.location} 날씨</h2>
    <p>온도: ${weatherData.temperature}℃</p>
    <p>상태: ${weatherData.condition}</p>
  `;
}


document.addEventListener('DOMContentLoaded', () => {
  updateWeatherWidget();
});



function getCalendarData() {
  
  return {
    events: [
      { title: '회의', date: '2024-02-28' },
      { title: '생일파티', date: '2024-03-05' },
    ],
  };
}


function updateCalendarWidget() {
  const calendarWidget = document.getElementById('calendar-widget');
  const calendarData = getCalendarData();


  const eventList = calendarData.events.map(event => `<li>${event.title} - ${event.date}</li>`).join('');
  calendarWidget.innerHTML = `
    <h2>일정</h2>
    <ul>${eventList}</ul>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCalendarWidget();
});

function getMemoData() {
  
  return [
    { content: '회의 준비', timestamp: '2024-02-28T10:00:00' },
    { content: '쇼핑목록 작성', timestamp: '2024-03-01T15:30:00' },
  ];
}


function updateMemoWidget() {
  const memoWidget = document.getElementById('memo-widget');
  const memoData = getMemoData();


  const memoList = memoData.map(memo => `<li>${memo.content} - ${memo.timestamp}</li>`).join('');
  memoWidget.innerHTML = `
    <h2>메모</h2>
    <ul>${memoList}</ul>
  `;
}


document.addEventListener('DOMContentLoaded', () => {
  updateMemoWidget();
});
