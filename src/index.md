---
layout: base.njk
title: home
description: arca ruins homepage
featured_image: favicon.png
---

This site functions as a personal archive for my works, thoughts, opinions, and is essentially a living creative journal.

I sometimes post brain dumps which can range from thoughts on research, video game and book reviews, to just random stuff I came up with.

I can also be found on [BlueSky](https://bsky.app/profile/klug.neocities.org) and [Tumblr](https://eudaemonix.tumblr.com). I sporadically post on the [fediverse](https://toot.cat/@eudaemonics).

<div id="wcb" class="carbonbadge wcb-d"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>

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

![A button for Neocities. Neocities dot org is written in blue text and in smaller text the caption reads "The web is yours"](images/button/neocities_button.gif) ![A button with the Palestinian Flag on it that reads "free Palestine"](images/button/free_palestine.gif) ![A button with a crossed out Swastika that says "No Nazi, No Fascism, No Racism"](images/button/antinazi.gif) ![A button with a crossed out printer. It says "This is an Anti-NFT site"](images/button/anti_nft.webp) ![A button that reads "defund police"](images/button/defundpolice.gif) ![A blue button with a black hand holding a wrench. The text reads "I support right to repair".](images/button/right_to_repair.png) ![A button with the Firefox logo on it. the text read "Firefox Now!"](images/button/firefox_now.gif) ![A button with the lesbian, gay, bisexual, and transgender flags.](images/button/lgbt.png) ![a button with a red heart and a rainbow banner in the corner. The text reads "Pride now!"](images/button/pride_now.webp) ![A button with the trans flag on it. It says "Trans rights now"](images/button/trn.png) ![a rainbow button that says "youre telling me a queer coded this"](images/button/queer.png) ![a button with a purple pawprint. The text reads "Made with my own two paws".](images/button/paws.png) ![a button that reads "best viewed with open eyes"](images/button/bestview.gif) ![A button with crudely written text that reads 'bad html markup'](images/button/badhtml.gif) ![A button that reads 'this site is certified 100% cookie free](images/button/nocookie.gif) ![A button that reads 'I survived the 2018 tumblr apocalypse.](images/button/tumblrapocalypse.gif)