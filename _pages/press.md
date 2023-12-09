---
layout: page
title: press
permalink: /press/
description: 
nav: true
nav_order: 4
display_categories: ["climate", "running for office","elections", "media research", "gun violence","community safety"]
horizontal: true
---


<!-- pages/press.md -->
<div class="press">
{%- if page.display_categories %}
  <!-- Display categorized press -->
  {%- for category in page.display_categories %}
  <br>
  <h2 class="category">{{ category }}</h2>
  <br>
  {%- assign categorized_press = site.press | where: "category", category -%}
  {%- assign sorted_press = categorized_press | sort: "date" %}
  <!-- Generate cards for each press -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for press in sorted_press -%}
      {% include press_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for press in sorted_press -%}
      {% include press.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display press without categories -->
  {%- assign sorted_press = site.press | sort: "date" -%}
  <!-- Generate cards for each press -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for press in sorted_press -%}
      {% include press_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for press in sorted_press -%}
      {% include press.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>