/**
 * 💁 In modern websites, scripts are often heavier than HTML. Their download size is larger, and processing time is also longer.
 * 💁 When the borwser loads HTML and comes across a <script>...</script> tag, it can't continue building the DOM. It
 * must execute the script right now.
 *
 */

for (let i = 0; i < 1e9; i++) {
  Math.round(Math.sqrt(Math.random())) ^ 2; // Gonna take some time 🕥
}

alert('script loaded');
