
<link rel="stylesheet" type="text/css" href="https://github.com/wojlin/wojlin/blob/f736437a43ebbd124e03d331744f7cdca188a793/static/css/style.css"/>
<style>
  @font-face {
      font-family: Ubuntu;
      src: url("static/fonts/Ubuntu-B.ttf");
  }
  @font-face {
      font-family: Ubuntu_Mono;
      src: url("static/fonts/UbuntuMono-B.ttf");
  }
</style>
<main id="container">
<div id="terminal">
  <section id="terminal_bar">
    <div id="bar_buttons">
      <button class="bar_button" id="bar_button_exit">&#10005;</button>
      <button class="bar_button">&#9472;</button>
      <button class="bar_button">&#9723;</button>
    </div>
    <p id="bar_user"></p>
  </section>
  <!-- Terminal Body -->
  <section id="terminal_body">
    <div id="terminal_body_content">
    </div>
    <div id="terminal_prompt">
      <span id="terminal_prompt_user"></span>
      <span id="terminal_prompt_location">~</span>
      <span id="terminal_prompt_bling">$</span>
      <input id="terminal_prompt_input"></input>
      <span id="terminal_prompt_cursor"></span>
    </div>
  </section>
</div>
<script src='static/js/main.js'></script>
</main>

