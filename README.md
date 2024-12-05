<div class="minecraft-container">
  <div class="panorama">
    <div class="title">
      <img src="https://fontmeme.com/permalink/240214/ad67c5ef4e3489ad644d520eef54da04.png" alt="Fumeko-ts" class="minecraft-logo"/>
    </div>
    
    <div class="stats-container">
      <div class="menu-button">⚡ GitHub Stats</div>
      <img src="https://github-readme-stats.vercel.app/api?username=fumeko-ts&show_icons=true&theme=dark&bg_color=000000&title_color=FF0000&text_color=FFFFFF&icon_color=FF0000" class="stats-card"/>
      
      <div class="menu-button">🎮 Top Languages</div>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fumeko-ts&layout=compact&theme=dark&bg_color=000000&title_color=FF0000&text_color=FFFFFF" class="stats-card"/>
      
      <div class="menu-button">⏰ Coding Time</div>
      <img src="https://wakatime.com/share/@fumeko_ts/a66e6f44-5282-493f-84c5-726fd868a763.svg" class="stats-card"/>
      
      <div class="visitor-count">
        Players Online: <img src="https://visitor-badge.laobi.icu/badge?page_id=fumeko-ts.fumeko-ts&left_color=black&right_color=red" />
      </div>
    </div>
  </div>
</div>

<style>
.minecraft-container {
  background: #000;
  perspective: 1000px;
  min-height: 100vh;
  font-family: 'Minecraft', sans-serif;
}

.panorama {
  animation: rotate 60s infinite linear;
  background: url('https://raw.githubusercontent.com/PolyMC/PolyMC/develop/program_info/org.polymc.PolyMC.screenshot.png') repeat-x;
  background-size: cover;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 40px;
  transform: rotate(-5deg) scale(1.2);
}

.minecraft-logo {
  max-width: 600px;
  filter: drop-shadow(0 0 10px #FF0000);
}

.stats-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.menu-button {
  background: #000000AA;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  padding: 10px 20px;
  font-size: 20px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-button:hover {
  background: #FF0000;
  transform: scale(1.1);
}

.stats-card {
  max-width: 800px;
  border: 2px solid #FF0000;
  border-radius: 5px;
  transition: transform 0.3s;
}

.stats-card:hover {
  transform: scale(1.05);
}

.visitor-count {
  color: #FFFFFF;
  font-size: 18px;
  margin-top: 20px;
  background: #000000AA;
  padding: 10px;
  border: 2px solid #FF0000;
}

@keyframes rotate {
  from { background-position: 0 0; }
  to { background-position: -1000px 0; }
}

@font-face {
  font-family: 'Minecraft';
  src: url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/font/minecraft.woff2') format('woff2');
}
</style>
