<template><h1 id="nftmakerbutton" tabindex="-1"><a class="header-anchor" href="#nftmakerbutton" aria-hidden="true">#</a> NFTMakerButton</h1>
<p>NFTMakerButton is a component that adds the link image to the NFT-MAKER.io payment gateway.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NFTMakerButton</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The default button is rounded and green, to utilize another color or style pass props to the component.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NFTMakerButton</span> <span class="token attr-name">btnColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">btnStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="btncolor" tabindex="-1"><a class="header-anchor" href="#btncolor" aria-hidden="true">#</a> btnColor</h2>
<ul>
<li>green (default)</li>
<li>white</li>
<li>black</li>
</ul>
<h2 id="btnstyle" tabindex="-1"><a class="header-anchor" href="#btnstyle" aria-hidden="true">#</a> btnStyle</h2>
<ul>
<li>rounded (default)</li>
<li>square</li>
<li>corners</li>
</ul>
</template>
