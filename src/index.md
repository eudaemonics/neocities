---
layout: base.njk
title: home
description: arca ruins homepage
featured_image: favicon.png
---

Hello, I'm **Klug** or **Eudaemonics** (ey/its). I'm a coastal woodland creature that turned human, and this is my digital hermitage where I make things and document little bits of my life. I'm a hobbyist [artist and writer](https://eudaemonics.neocities.org) and hope to develop my own game someday... For now, I just write about them!

I can also be found on [BlueSky](https://bsky.app/profile/klug.neocities.org) and [Tumblr](https://eudaemonix.tumblr.com). I very sporadically post on the [fediverse](https://toot.cat/@eudaemonics).

<div id="wcb" class="carbonbadge wcb-d"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>

***

## now.
* **Life:**
  * Looking for work, but doing a lot of writing, drawing, and streaming in the meantime.
  * 本語を勉強しています。時間があるだからさ、もっと本気になってきました。(もし間違いがある教えてくださいｗｗ) 2027年に日本に行きたいです!
* **Reading:**
  * *I'm Working on It in Therapy* by Gary Trosclair
  * *Pandora Hearts* by Jun Mochizuki
* **Watching:**
  * *A Man on the Inside*
  * *Bojack Horseman*
* **Playing:**
  * *Detective Instinct: Farewell, My Beloved*
  * *Pokemon Lazarus*
  * More on [backloggery](https://backloggery.com/strangeklug)
* **Listening:** 
  * ["All the Worst Things"](https://www.youtube.com/watch?v=AGYtQjXDMsM) by Couchsleepers
  * [The Healthy Compulsive Project](https://thehealthycompulsive.com/the-healthy-compulsive-project-podcast/)

***

## recent entries

<div id="recentPostList">
  <ul>
  {% assign top_posts = collections.posts | reverse %}
  {%- for post in top_posts limit:4 -%}
    <li><a href="{{ post.url }}">{{ post.date | readableDate }} » {{ post.data.title }}</a></li>
  {% endfor %}
  <li class="moreposts"><a href="archives.html">» Archives</a></li>
  <li class="moreposts"><a href="rss.xml">» RSS feed</a></li></ul>
</div>

***

![A button for Neocities. Neocities dot org is written in blue text and in smaller text the caption reads "The web is yours"](images/button/neocities_button.gif) ![A button with the Palestinian Flag on it that reads "free Palestine"](images/button/free_palestine.gif) ![A button with a crossed out Swastika that says "No Nazi, No Fascism, No Racism"](images/button/antinazi.gif) ![A button with a crossed out printer. It says "This is an Anti-NFT site"](images/button/anti_nft.webp) ![A button that reads "defund police"](images/button/defundpolice.gif) ![A blue button with a black hand holding a wrench. The text reads "I support right to repair".](images/button/right_to_repair.png) ![A button with the Firefox logo on it. the text read "Firefox Now!"](images/button/firefox_now.gif) ![A button with the lesbian, gay, bisexual, and transgender flags.](images/button/lgbt.png) ![a button with a red heart and a rainbow banner in the corner. The text reads "Pride now!"](images/button/pride_now.webp) ![A button with the trans flag on it. It says "Trans rights now"](images/button/trn.png) ![a rainbow button that says "youre telling me a queer coded this"](images/button/queer.png) ![a button with a purple pawprint. The text reads "Made with my own two paws".](images/button/paws.png) ![a button that reads "best viewed with open eyes"](images/button/bestview.gif) ![A button with crudely written text that reads 'bad html markup'](images/button/badhtml.gif) ![A button that reads 'this site is certified 100% cookie free](images/button/nocookie.gif) ![A button that reads 'I survived the 2018 tumblr apocalypse.](images/button/tumblrapocalypse.gif)![Built with 11ty](images/button/builtwith11ty.webp)