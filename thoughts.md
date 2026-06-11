---
layout: page
title: Thoughts
permalink: /thoughts/
---

A collection of short thoughts, notes, and ideas. These are informal and unpolished - just things I'm thinking about.

<div class="thoughts-list">
  {% for thought in site.thoughts reversed %}
    <div class="thought-item">
      <h2>
        <a href="{{ thought.url | relative_url }}">{{ thought.title }}</a>
      </h2>
      <div class="thought-excerpt">
          {{ thought.excerpt }}
      </div>
    </div>
  {% endfor %}
</div>
