<template><h1 id="vue-components-for-cardano" tabindex="-1"><a class="header-anchor" href="#vue-components-for-cardano" aria-hidden="true">#</a> Vue Components for Cardano</h1>
<p>This project is a simple Vue3 wrapper plugin for Cardano relevant components.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> @radflipper/vue-cardano
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="component-registration" tabindex="-1"><a class="header-anchor" href="#component-registration" aria-hidden="true">#</a> Component Registration</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> vueCardano <span class="token keyword">from</span> <span class="token string">'@radflipper/vue-cardano'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vueCardano<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">projectID</span><span class="token operator">:</span> <span class="token string">"&lt;your-project-id>"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
