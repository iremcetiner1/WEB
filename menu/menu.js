function redirectToBeansPage() {
    window.location.href = "beans.html";
}
var hoursContainer = document.querySelector('.hours')
        var minutesContainer = document.querySelector('.minutes')
        var secondsContainer = document.querySelector('.seconds')
        var tickElements = Array.from(document.querySelectorAll('.tick'))
        
        var last = new Date(0)
        last.setUTCHours(-1)
        
        var tickState = true
        
        function updateTime () {
          var now = new Date
          
          var lastHours = last.getHours().toString()
          var nowHours = now.getHours().toString()
          if (lastHours !== nowHours) {
            updateContainer(hoursContainer, nowHours)
          }
          
          var lastMinutes = last.getMinutes().toString()
          var nowMinutes = now.getMinutes().toString()
          if (lastMinutes !== nowMinutes) {
            updateContainer(minutesContainer, nowMinutes)
          }
          
          var lastSeconds = last.getSeconds().toString()
          var nowSeconds = now.getSeconds().toString()
          if (lastSeconds !== nowSeconds) {
            //tick()
            updateContainer(secondsContainer, nowSeconds)
          }
          
          last = now
        }
        
        function tick () {
          tickElements.forEach(t => t.classList.toggle('tick-hidden'))
        }
        
        function updateContainer (container, newTime) {
          var time = newTime.split('')
          
          if (time.length === 1) {
            time.unshift('0')
          }
          
          
          var first = container.firstElementChild
          if (first.lastElementChild.textContent !== time[0]) {
            updateNumber(first, time[0])
          }
          
          var last = container.lastElementChild
          if (last.lastElementChild.textContent !== time[1]) {
            updateNumber(last, time[1])
          }
        }
        
        function updateNumber (element, number) {
          //element.lastElementChild.textContent = number
          var second = element.lastElementChild.cloneNode(true)
          second.textContent = number
          
          element.appendChild(second)
          element.classList.add('move')
        
          setTimeout(function () {
            element.classList.remove('move')
          }, 990)
          setTimeout(function () {
            element.removeChild(element.firstElementChild)
          }, 990)
        }
        
        setInterval(updateTime, 100)
        const toggleButton = document.getElementById('toggleButton');
        const panel = document.getElementById('panel');
        const panel1 = document.getElementById('panel1');
        toggleButton.addEventListener('click', function() {
          if (panel.style.display === 'none') {
            panel.style.display = 'block';
            panel1.style.display = "block";
          } else {
            panel.style.display = 'none';
            panel1.style.display = 'none';
          }
        });
        function goToTop() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth' // Animasyonlu kaydırma için
          });
      }
function setLanguage(lang) {
        localStorage.setItem('language', lang);
        location.reload();
}
      
function getLanguage() {
        return localStorage.getItem('language') || 'en'; // Varsayılan dil 'en' (İngilizce)
}
      
document.addEventListener("DOMContentLoaded", function() {
    const lang = getLanguage();
        document.querySelector("#language-selector select").value = lang;
        fetch(`/languages/${lang}.json`)
          .then(response => response.json())
          .then(translations => {
            document.querySelectorAll("[data-translate]").forEach(element => {
              const key = element.getAttribute("data-translate");
              element.textContent = translations[key];
            });
          });
});
      