<svg fill="none" viewBox="0 0 400 400" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
             @font-face {
      font-family: Ubuntu;
      src: url("static/fonts/Ubuntu-B.ttf");
  }
  @font-face {
      font-family: Ubuntu_Mono;
      src: url("static/fonts/UbuntuMono-B.ttf");
  }

#container {
  font-family: Ubuntu;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
}
#terminal {
  width: 100%;
  height: 100%;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  overflow:hidden;
}
#terminal_bar {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  background: linear-gradient(#504b45 0%,#3c3b37 100%);
}
#bar_buttons {
  display: flex;
  align-items: center;
}
.bar_button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 5px;
  font-size: 8px;
  height: 12px;
  width: 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 100%;
  background: linear-gradient(#7d7871 0%, #595953 100%);
  text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
  box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
}
.bar_button:hover {
  cursor: pointer;
}
.bar_button:focus {
  outline: none;
}
#bar_button_exit {
  background: linear-gradient(#f37458 0%, #de4c12 100%);
  background-clip: padding-box;
}
#bar_user {
  color: #d5d0ce;
  margin-left: 6px;
  font-size: 14px;
  line-height: 15px;
}
#terminal_body {
  background: rgba(56, 4, 40, 0.9);
  font-family: Ubuntu_Mono;
  height: calc(100% - 30px);
  padding-top: 2px;
  margin-top: -1px;
  overflow-y:auto;
}

#terminal_body:before {
    content: " ";
    display: block;
    position: absolute;
    top: 30px;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.10) 50%
    );
    background-size: 100% 5px;
    z-index: 2;
    pointer-events: none;
}

.image
{
  width:55px;
  height:55px;
}

#terminal_body_content
{
  color: white;
  margin-left:5px;
}

#terminal_body_content p
{
  margin:0;
}

#terminal_prompt {
  display: flex;
  margin-left:5px;
  margin-bottom:5px;
}
#terminal_prompt_user {
  color: #7eda28;
}
#terminal_prompt_location {
  color: #4878c0;
}
#terminal_prompt_bling {
  color: #dddddd;
}
#terminal_prompt_cursor {
  display: block;
  height: 17px;
  width: 8px;
  margin-left: -6px;
  animation: blink 1200ms linear infinite;
}
#terminal_prompt_input
{
  color:white;
  background: none;
  border: none;
  outline: none;
  font-family: Ubuntu;
  margin-left:5px;
}
@keyframes blink {
  0% {
    background: #ffffff;
  }
  49% {
    background: #ffffff;
  }
  60% {
    background: transparent;
  }
  99% {
    background: transparent;
  }  100% {
    background: #ffffff;
  }
}
            </style>
            <link rel="stylesheet" type="text/css" href="static/css/style.css"/>
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
            <!--<script src='static/js/main.js'></script>-->
            </main>
        </div>
    </foreignObject>
</svg>






