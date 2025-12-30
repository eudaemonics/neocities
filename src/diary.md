---
layout: base.njk
permalink: "{{ page.fileSlug }}.html"
title: diary
description: All diary entries.
featured_image: favicon.png
---
## Tag Cloud

<!--This next part shows links to all the tags you have on your posts, ordered by frequency-->
<p class="center">{% for tag in collections -%}{% if tag[0] != "all" and tag[0] != "posts" %}<a href="../tags/{{ tag[0] | slugify }}.html">{{ tag[0] }}</a> ({{ tag | length }}) {% endif %}{%- endfor %}</p>

---

## All Posts

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->
<ul class="none">
{% assign top_posts = collections.posts | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.url }}">{{ post.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>