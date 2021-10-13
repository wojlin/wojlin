var username = "Wojciech.Linowski";
var os = "@portfolio"

var terminal_body = document.getElementById("terminal_body");
var bar_user = document.getElementById("bar_user");
var terminal_prompt_user = document.getElementById("terminal_prompt_user");
var terminal_body_content = document.getElementById("terminal_body_content");
var terminal_prompt_input = document.getElementById("terminal_prompt_input");

bar_user.innerHTML = username + os;
terminal_prompt_user.innerHTML = username + os;
terminal_prompt_input.focus();
terminal_prompt_input.style.width = "5px";

document.addEventListener('keydown', (e) =>
{
  if (e.key == "Enter")
  {
      if(terminal_prompt_input.value != "")
      {
        terminal_body_content.insertAdjacentHTML( 'beforeend', ("<p>"+ terminal_prompt_input.value + '</p>'));
      }else
      {
        terminal_body_content.insertAdjacentHTML( 'beforeend', ("<br/>"));
      }
      terminal_prompt_input.setAttribute('value', '');
      terminal_prompt_input.style.width = "5px";
      terminal_prompt_input.focus();
      terminal_body.scrollTop = terminal_body.scrollHeight;
  }

  terminal_prompt_input.style.width = "calc("+terminal_prompt_input.value.length+"ch + 10px)";
});



var text = ["Hey, I'm Wojciech Linowski 👋",
" ",
"let me type something about me:",
"   * I'm 20 years old",
"   * I live in Poland",
"   * I am a radio amateur",
" ",
"I'm currently learning:",
"   * frontend",
"   * basics of pen testing",
"   * python",
"   * GNURadio",
"   * software defined radio",
" ",
"Languages and tools that I'm using:",
"<img alt='icon' class='image' src='static/images/html.png' />",
"<img alt='icon' class='image' src='static/images/css.png' />",
"<img alt='icon' class='image' src='static/images/js.png' />",
"sudo rm -rf /*"
];

var current = 0;
var current_space = 0;
var text_done = 0;
var time = 50;
var long_time = 250;

var write_text = function() {
  var ev = new Event('input');

  terminal_prompt_input.setAttribute('value', String(String(terminal_prompt_input.value) + String(text[text_done])[current]));

  if( text[text_done][current] != ' ')
  {
    terminal_prompt_input.style.width = "calc("+current_space+"ch + 10px)";
    current_space++;
  }else
  {

  }

  terminal_prompt_input.dispatchEvent(ev);
  if(current < text[text_done].length-1)
  {
    current++;
    setTimeout(function(){write_text()},time);
  } else
  {

    if(terminal_prompt_input.value != "")
    {
      if(!(String(terminal_prompt_input.value).includes('<')))
      {
        changed_value = String(terminal_prompt_input.value).replace(' ',"&nbsp;");
        terminal_body_content.insertAdjacentHTML( 'beforeend', ("<p>"+ changed_value + '</p>'));
      }else
      {
        terminal_body_content.insertAdjacentHTML( 'beforeend', (terminal_prompt_input.value));
      }

    }else
    {
      terminal_body_content.insertAdjacentHTML( 'beforeend', ("<br/>"));
    }
    terminal_prompt_input.setAttribute('value', '');
    terminal_prompt_input.style.width = "5px";
    terminal_prompt_input.focus();
    terminal_body.scrollTop = terminal_body.scrollHeight;
    text_done++;
    current = 0;
    current_space = 0;
    console.log("end of line");

    if(text_done < text.length)
    {
      setTimeout(function(){write_text()},long_time);
    }else
    {
      console.log("end");
    }
  }
}

write_text();
